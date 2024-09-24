import { SquarePen } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-background/80 backdrop-blur py-6">
      <Link href="/" className="flex items-center gap-2">
        <h1 className="text-2xl font-bold font-mono tracking-tight">Deverse</h1>
      </Link>
      <div className="flex items-center justify-between gap-3">
        <ThemeToggle />
        <Button asChild className="ml-5">
          <Link href="/editor" className="flex items-center gap-2">
            <SquarePen className="size-4" />
            Write
          </Link>
        </Button>
      </div>
    </header>
  );
}
