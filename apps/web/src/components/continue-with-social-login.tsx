import { Icons } from "./icons";
import { Button } from "./ui/button";

type Props = {
  isDisabled?: boolean;
};

export function ContinueWithSocialLogin({ isDisabled }: Props) {
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
        <Button variant="secondary" className="w-full" disabled={isDisabled}>
          <Icons.google className="size-5" />
        </Button>
        <Button variant="secondary" className="w-full" disabled={isDisabled}>
          <Icons.github className="size-5 text-foreground" />
        </Button>
      </div>
    </>
  );
}
