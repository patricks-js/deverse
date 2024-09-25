import { signInAction } from "@/actions/sign-in-action";
import type { TransitionStartFunction } from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";

type Props = {
  startTransition: TransitionStartFunction;
  isPending: boolean;
};

export function SocialLogin({ startTransition, isPending }: Props) {
  function handleGitHubLogin() {
    startTransition(() => {
      signInAction({ provider: "github", redirectTo: "/" });
    });
  }

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleGitHubLogin}
          disabled={isPending}
        >
          {isPending ? (
            <Icons.loader className="size-4 animate-spin" />
          ) : (
            <Icons.github className="size-4" />
          )}
        </Button>
      </div>
    </>
  );
}
