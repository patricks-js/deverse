import fastify from "fastify";
import jwt from "./config/jwt";
import { profileRoutes } from "./routes/profiles";
import { userRoutes } from "./routes/users";

const app = fastify({
  logger: true,
});

app.register(jwt);

app.register(userRoutes, { prefix: "/api" });
app.register(profileRoutes, { prefix: "/api" });

try {
  await app.listen({
    port: 3000,
    host: "0.0.0.0",
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
