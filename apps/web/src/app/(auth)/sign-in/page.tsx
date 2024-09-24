import { Button } from "@/components/ui/button";
import { Command } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <Button
        variant="ghost"
        className="absolute right-4 top-4 md:right-8 md:top-8"
        asChild
      >
        <Link href="/">Back</Link>
      </Button>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Command className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        {/* <UserAuthForm /> */}
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/sign-up"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
