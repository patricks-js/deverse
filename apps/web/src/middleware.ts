import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/sign-in",
    error: "/error",
  },
});

export const config = {
  matcher: ["/settings", "/editor/:path*", "/(api|trpc)(.*)"],
};
