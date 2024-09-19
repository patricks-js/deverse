import type { FastifyReply, FastifyRequest } from "fastify";
import fp from "fastify-plugin";

export default fp(async (app, opts) => {
  app.register(import("@fastify/jwt"), {
    secret: "supersecret",
    sign: {
      expiresIn: "30m",
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
