import { env } from "@deverse/env/web";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: env.NEXTAUTH_GITHUB_CLIENT_ID,
      clientSecret: env.NEXTAUTH_GITHUB_CLIENT_SECRET,
    }),
  ],
};
