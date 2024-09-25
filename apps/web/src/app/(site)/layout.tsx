import { Header } from "@/components/header";

export default function SiteLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-6 max-w-screen-lg mx-auto sm:px-8 lg:px-12">
      <Header />
      <main className="pt-6 pb-14">{children}</main>
    </div>
  );
}
