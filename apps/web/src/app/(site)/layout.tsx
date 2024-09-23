import { Header } from "@/components/header";
import { QueryClientProvider } from "@/shared/query-client-provider";
import { ThemeProvider } from "@/shared/theme-provider";

export default function SiteLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider>
        <div className="min-h-screen px-6 sm:px-8 lg:px-12">
          <Header />
          <main className="max-w-screen-md mx-auto pt-6 pb-14">{children}</main>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
