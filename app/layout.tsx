import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GraphOne | AI Intelligence Platform",
  description: "The Global Intelligence Layer for AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-secondary`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-white ml-64 rounded-l-3xl shadow-premium border-l border-border min-h-screen flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
