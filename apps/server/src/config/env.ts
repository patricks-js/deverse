import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string().min(10),
  JWT_EXPIRES_IN: z.string(),
  PORT: z.coerce.number().default(3333),
  HASH_SALT: z.coerce.number().min(5).max(10),
});

const _env = envSchema.safeParse(process.env);

if (_env.error) {
  console.error(_env.error.flatten().fieldErrors);
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
