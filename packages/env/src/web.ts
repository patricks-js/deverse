import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { sharedEnv } from "./shared";

export const env = createEnv({
  extends: [sharedEnv],
  server: {
    NEXTAUTH_GITHUB_CLIENT_ID: z.string(),
    NEXTAUTH_GITHUB_CLIENT_SECRET: z.string(),
    NEXTAUTH_GOOGLE_CLIENT_ID: z.string(),
    NEXTAUTH_GOOGLE_CLIENT_SECRET: z.string(),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  emptyStringAsUndefined: true,
});
