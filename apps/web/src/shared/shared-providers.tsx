import type { Children } from "@/types/children";
import { QueryClientProvider } from "./query-client-provider";
import SessionProvider from "./session-provider";
import { ThemeProvider } from "./theme-provider";

export function SharedProviders({ children }: Children) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
