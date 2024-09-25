"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export function ProfileButton() {
  const session = useSession();

  if (session.status === "loading") {
    return;
  }

  if (session.status === "unauthenticated") {
    return (
      <Button variant="link" asChild>
        <Link href="/sign-in">Login</Link>
      </Button>
    );
  }

  return <Button>Profile</Button>;
}
