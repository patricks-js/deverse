import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-background px-6 py-6 sm:px-8 lg:px-12 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold font-mono tracking-tight">Deverse</h1>
      <ThemeToggle />
    </header>
  );
}
