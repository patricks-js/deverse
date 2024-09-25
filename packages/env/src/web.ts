import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { sharedEnv } from "./shared";

export const env = createEnv({
  extends: [sharedEnv],
  server: {
    AUTH_SECRET: z.string(),
    AUTH_URL: z.string().url(),
    AUTH_GITHUB_ID: z.string(),
    AUTH_GITHUB_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  emptyStringAsUndefined: true,
});
