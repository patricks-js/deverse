import Link from "next/link";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export function EditorButton() {
  return (
    <Button asChild>
      <Link href="/editor" className="flex items-center gap-2">
        <Icons.editor className="size-4" />
        Write
      </Link>
    </Button>
  );
}
