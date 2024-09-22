import { QueryClientProvider } from "@/shared/query-client-provider";
import { ThemeProvider } from "@/shared/theme-provider";

export default function SiteLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
