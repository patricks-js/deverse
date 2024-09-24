export default function AuthLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <main className="relative h-screen grid place-content-center">
      {children}
    </main>
  );
}
