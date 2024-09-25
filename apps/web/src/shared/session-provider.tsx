"use client";

import type { Children } from "@/types/children";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export default function SessionProvider({ children }: Children) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
