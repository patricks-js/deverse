import { prisma } from "@/config/prisma";
import type { FastifyInstance } from "fastify";
import { z } from "zod";

export async function profileRoutes(app: FastifyInstance) {
  app.get("/profiles/:username", async (request, reply) => {
    const paramsSchema = z.object({
      username: z.string(),
    });

    const { username } = paramsSchema.parse(request.params);

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      select: {
        username: true,
        name: true,
        email: true,
        bio: true,
        image: true,
        following: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      user,
    };
  });

  app.post(
    "/profiles/:username/follow",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const paramsSchema = z.object({
        username: z.string(),
      });

      const { username } = paramsSchema.parse(request.params);

      const user = await prisma.user.findUnique({
        where: {
          username,
        },
        select: {
          id: true,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      if (user.id === request.user.id) {
        throw new Error("You can't follow yourself");
      }

      await prisma.user.update({
        where: {
          username,
        },
        data: {
          following: true,
        },
      });

      return reply.status(204).send();
    },
  );

  app.delete(
    "/profiles/:username/unfollow",
    { preHandler: [app.authenticate] },
    async (request, reply) => {
      const paramsSchema = z.object({
        username: z.string(),
      });

      const { username } = paramsSchema.parse(request.params);

      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      if (user.id === request.user.id) {
        throw new Error("You can't follow yourself");
      }

      await prisma.user.update({
        where: {
          username,
        },
        data: {
          following: false,
        },
      });

      return reply.status(204).send();
    },
  );
}
