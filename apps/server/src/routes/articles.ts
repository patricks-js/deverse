import { prisma } from "@/config/prisma";
import type { FastifyInstance } from "fastify";
import { z } from "zod";

export async function articlesRoutes(app: FastifyInstance) {
  app.post(
    "/articles",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const bodySchema = z.object({
        title: z.string(),
        description: z.string(),
        content: z.string(),
        tags: z
          .string()
          .array()
          .min(1, { message: "At least one tag is required" }),
      });

      const { title, description, content, tags } = bodySchema.parse(
        request.body,
      );

      const articleExistsWithSameTitle = await prisma.post.findFirst({
        where: {
          title,
        },
      });

      if (articleExistsWithSameTitle) {
        throw new Error("Article already exists");
      }

      await prisma.post.create({
        data: {
          title,
          description,
          slug: title.toLowerCase().replace(/\s/g, "-"),
          content,
          tags,
          authorId: request.user.id,
        },
      });

      return reply.status(201).send();
    },
  );

  app.get("/articles", async (request, reply) => {
    const querySchema = z.object({
      page: z.coerce.number().min(0).default(0).optional(),
      tag: z.string().optional(),
      author: z.string().optional(),
      favorited: z.coerce.boolean().optional(),
    });

    const { page, author, tag } = querySchema.parse(request.query);

    const limit = 5;
    const total = await prisma.post.count();
    const articles = await prisma.post.findMany({
      take: limit,
      skip: page ? page * limit : 0,
      orderBy: {
        createdAt: "desc", // latest first
      },
      select: {
        id: true,
        title: true,
        slug: true,
        description: true,
        tags: true,
        favoritesCount: true,
        author: {
          select: {
            username: true,
            name: true,
            email: true,
            image: true,
          },
        },
        createdAt: true,
      },
    });

    return {
      page,
      perPage: limit,
      totalPages: Math.ceil(total / limit),
      itemsInPage: articles.length,
      totalItems: total,
      items: articles,
    };
  });

  app.get(
    "/articles/feed",
    { preHandler: [app.authenticate] },
    async (request, reply) => {},
  );

  app.get("/articles/:slug", async (request, reply) => {
    const paramsSchema = z.object({
      slug: z.string(),
    });

    const { slug } = paramsSchema.parse(request.params);

    const article = await prisma.post.findUnique({
      where: {
        slug,
      },
    });

    if (!article) {
      throw new Error("Article not found");
    }

    return {
      article,
    };
  });

  app.put(
    "/articles/:slug",
    { preHandler: [app.authenticate] },
    async (request, reply) => {},
  );

  app.delete(
    "/articles/:slug",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const paramsSchema = z.object({
        slug: z.string(),
      });

      const { slug } = paramsSchema.parse(request.params);

      const article = await prisma.post.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          authorId: true,
        },
      });

      if (!article) {
        throw new Error("Article not found");
      }

      if (article.authorId !== request.user.id) {
        throw new Error("You can't delete other people's articles");
      }

      await prisma.post.delete({
        where: {
          id: article.id,
        },
      });
    },
  );

  app.post(
    "/articles/:slug/favorite",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const paramsSchema = z.object({
        slug: z.string(),
      });

      const { slug } = paramsSchema.parse(request.params);

      const article = await prisma.post.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          authorId: true,
          favoritesCount: true,
        },
      });

      if (!article) {
        throw new Error("Article not found");
      }

      if (article.authorId === request.user.id) {
        throw new Error("You can't favorite your own articles");
      }

      await prisma.favoritedPost.create({
        data: {
          postId: article.id,
          userId: request.user.id,
        },
      });

      await prisma.post.update({
        where: {
          slug,
        },
        data: {
          favoritesCount: article.favoritesCount + 1,
        },
      });

      return reply.status(204).send();
    },
  );

  app.delete(
    "/articles/:slug/unfavorite",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const paramsSchema = z.object({
        slug: z.string(),
      });

      const { slug } = paramsSchema.parse(request.params);

      const article = await prisma.post.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          authorId: true,
          favoritesCount: true,
        },
      });

      if (!article) {
        throw new Error("Article not found");
      }

      if (article.authorId === request.user.id) {
        throw new Error("You can't unfavorite your own articles");
      }

      const favoritedPost = await prisma.favoritedPost.findFirst({
        where: {
          postId: article.id,
          userId: request.user.id,
        },
        select: {
          id: true,
        },
      });

      if (!favoritedPost) {
        throw new Error("You haven't favorited this article");
      }

      await prisma.favoritedPost.delete({
        where: {
          id: favoritedPost.id,
        },
      });

      await prisma.post.update({
        where: {
          slug,
        },
        data: {
          favoritesCount: article.favoritesCount - 1,
        },
      });

      return reply.status(204).send();
    },
  );

  app.get("/articles/tags", async (request, reply) => {});
}
