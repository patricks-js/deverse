import Link from "next/link";
import { EditorButton } from "./editor-button";
import { ProfileButton } from "./profile-button";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-background/80 backdrop-blur py-6">
      <Link href="/" className="flex items-center gap-2">
        <h1 className="text-2xl font-bold font-mono tracking-tight">Deverse</h1>
      </Link>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <ProfileButton />
        <EditorButton />
      </div>
    </nav>
  );
}
