import { env } from "@deverse/env/server";
import type { FastifyReply, FastifyRequest } from "fastify";
import fp from "fastify-plugin";

export default fp(async (app, opts) => {
  app.register(import("@fastify/jwt"), {
    secret: env.JWT_SECRET,
    sign: {
      expiresIn: env.JWT_EXPIRES_IN,
    },
  });

  app.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    },
  );
});
