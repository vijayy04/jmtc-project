import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { ScrollProgress } from "./ScrollProgress";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
