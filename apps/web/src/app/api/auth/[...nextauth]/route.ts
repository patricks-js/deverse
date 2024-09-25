import { env } from "@deverse/env/web";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google"; // TODO: Enable Google auth

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: env.NEXTAUTH_GITHUB_CLIENT_ID,
      clientSecret: env.NEXTAUTH_GITHUB_CLIENT_SECRET,
    }),
    // GoogleProvider({
    //   clientId: env.NEXTAUTH_GOOGLE_CLIENT_ID,
    //   clientSecret: env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    // }),
  ],
});

export { handler as GET, handler as POST };
