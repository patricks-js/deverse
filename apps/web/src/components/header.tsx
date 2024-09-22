import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SquarePen } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-background px-6 py-6 sm:px-8 lg:px-12 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold font-mono tracking-tight">Deverse</h1>
      <div className="flex items-center justify-between gap-3">
        <ThemeToggle />
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "size-9",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
        </SignedOut>
        <Button asChild className="ml-4">
          <Link href="/post" className="flex items-center gap-2">
            <SquarePen className="size-4" />
            Write
          </Link>
        </Button>
      </div>
    </header>
  );
}
