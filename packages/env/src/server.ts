import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { sharedEnv } from "./shared";

export const env = createEnv({
  extends: [sharedEnv],
  server: {
    PORT: z.coerce.number().default(3335),
    DATABASE_URL: z.string().url().startsWith("postgresql://"),
    HASH_SALT: z.coerce.number().min(5).max(10),
    JWT_SECRET: z.string().min(10),
    JWT_EXPIRES_IN: z.string(),
  },
  experimental__runtimeEnv: {},
  emptyStringAsUndefined: true,
});
