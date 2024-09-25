import type { Children } from "@/types/children";

export default function AuthLayout({ children }: Readonly<Children>) {
  return (
    <main className="relative h-screen grid place-content-center">
      {children}
    </main>
  );
}
