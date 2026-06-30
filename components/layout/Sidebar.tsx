"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Rocket, Package, Users, Briefcase, FileText, PlusSquare, Hexagon } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "AI Startups", href: "/companies", icon: Rocket },
  { name: "AI Products", href: "/products", icon: Package },
  { name: "Investors", href: "/investors", icon: Users },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "News", href: "/news", icon: FileText },
];

const contribute = [
  { name: "Submit Startup", href: "#", icon: Rocket },
  { name: "Submit Product", href: "#", icon: PlusSquare },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-background">
      <div className="flex h-20 shrink-0 items-center px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex items-center justify-center text-primary">
            <Hexagon className="h-8 w-8 fill-primary stroke-none" />
            <span className="absolute text-white font-bold text-lg leading-none mt-[1px]">G</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">
            GraphOne
          </span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-4 py-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-primary-light text-primary"
                    : "text-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-4 h-5 w-5 shrink-0 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
          
          <div className="mt-8 mb-2 px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Contribute
          </div>
          {contribute.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <item.icon
                className="mr-4 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors"
                aria-hidden="true"
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
