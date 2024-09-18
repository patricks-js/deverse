import fastify from "fastify";

const app = fastify({
  logger: true,
});

try {
  await app.listen({
    port: 3000,
    host: "0.0.0.0",
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
