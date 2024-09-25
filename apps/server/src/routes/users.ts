import { prisma } from "@/config/prisma";
import { env } from "@deverse/env/server";
import bcrypt from "bcryptjs";
import type { FastifyInstance } from "fastify";
import { z } from "zod";

export async function userRoutes(app: FastifyInstance) {
  app.post("/users/register", async (request, reply) => {
    const bodySchema = z.object({
      name: z.string(),
      username: z.string(),
      email: z.string().email(),
      password: z.string(),
    });

    const { name, username, email, password } = bodySchema.parse(request.body);

    const userExistsWithSameEmail = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExistsWithSameEmail) {
      throw new Error("User already exists");
    }

    const userExistsWithSameUsername = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (userExistsWithSameUsername) {
      throw new Error("User already exists");
    }

    const passwordHashed = await bcrypt.hash(password, env.HASH_SALT);

    await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: passwordHashed,
      },
    });

    return reply.status(201).send();
  });

  app.post("/users/login", async (request, reply) => {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    });

    const { email, password } = bodySchema.parse(request.body);

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials");
    }

    const token = await reply.jwtSign({ id: user.id });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        token,
      },
    });

    return {
      token,
    };
  });

  app.get(
    "/users/me",
    { preValidation: [app.authenticate] },
    async (request, reply) => {
      const user = await prisma.user.findUnique({
        where: {
          id: request.user.id,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return {
        user,
      };
    },
  );

  app.put(
    "/users/me",
    { preValidation: [app.authenticate] },
    async (request, reply) => {
      const bodySchema = z.object({
        name: z.string().optional(),
        username: z.string().optional(),
        email: z.string().email().optional(),
      });

      let { name, username, email } = bodySchema.parse(request.body);

      const user = await prisma.user.findUnique({
        where: {
          id: request.user.id,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      if (!name) {
        name = user.name;
      }

      if (!username) {
        username = user.username;
      }

      if (!email) {
        email = user.email;
      }

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name,
          username,
          email,
        },
      });

      return reply.status(204).send();
    },
  );
}
