import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // TODO: add credentials provider
  providers: [GitHub],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});
