import { prisma } from "@/config/prisma";
import type { FastifyInstance } from "fastify";
import { z } from "zod";

export async function commentRoutes(app: FastifyInstance) {
  app.post(
    "/articles/:slug/comments",
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
        },
      });

      if (!article) {
        throw new Error("Article not found");
      }

      const bodySchema = z.object({
        body: z.string(),
      });

      const { body } = bodySchema.parse(request.body);

      await prisma.comment.create({
        data: {
          body,
          authorId: request.user.id,
          postId: article.id,
        },
      });

      return reply.status(201).send();
    },
  );

  app.get("/articles/:slug/comments", async (request, reply) => {
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
      },
    });

    if (!article) {
      throw new Error("Article not found");
    }

    const comments = await prisma.comment.findMany({
      where: {
        postId: article.id,
      },
      select: {
        id: true,
        body: true,
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
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      comments,
    };
  });

  app.delete(
    "/articles/:slug/comments/:id",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const paramsSchema = z.object({
        slug: z.string(),
        id: z.string(),
      });

      const { slug, id } = paramsSchema.parse(request.params);

      const article = await prisma.post.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
        },
      });

      if (!article) {
        throw new Error("Article not found");
      }

      const comment = await prisma.comment.findUnique({
        where: {
          id,
        },
      });

      if (!comment) {
        throw new Error("Comment not found");
      }

      if (comment.authorId !== request.user.id) {
        throw new Error("You can't delete other people's comments");
      }

      await prisma.comment.delete({
        where: {
          id,
        },
      });

      return reply.status(204).send();
    },
  );
}
