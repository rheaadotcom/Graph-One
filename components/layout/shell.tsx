import * as React from "react";
import { Sidebar } from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-secondary">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden bg-background rounded-l-2xl border-l border-y border-border my-2 mr-2 shadow-2xl">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-muted/30 p-6 md:p-8">
          <div className="mx-auto max-w-7xl h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
