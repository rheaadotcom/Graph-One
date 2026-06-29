"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Building2, Users, Package, Settings } from "lucide-react";

const navigation = [
  { name: "Companies", href: "/", icon: Building2 },
  { name: "Investors", href: "/investors", icon: Users },
  { name: "Products", href: "/products", icon: Package },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-background">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">G</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            GraphOne
          </span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-4 py-4">
          <div className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Menu
          </div>
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary-light text-primary"
                    : "text-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 shrink-0 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 mt-auto">
          <Link
            href="#"
            className="group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <Settings className="mr-3 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-foreground" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
