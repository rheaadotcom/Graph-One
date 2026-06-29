"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Rocket, Package, Users, Briefcase, Newspaper, PlusCircle, Hexagon } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "AI Startups", href: "/companies", icon: Rocket },
  { label: "AI Products", href: "/products", icon: Package },
  { label: "Investors", href: "/investors", icon: Users },
  { label: "Jobs", href: "/jobs", icon: Briefcase },
  { label: "News", href: "/news", icon: Newspaper },
];

const CONTRIBUTE_ITEMS = [
  { label: "Submit Startup", href: "/submit/startup", icon: Rocket },
  { label: "Submit Product", href: "/submit/product", icon: PlusCircle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 fixed left-0 top-0 h-screen bg-secondary flex flex-col py-6 border-r border-border hide-scrollbar overflow-y-auto">
      {/* Logo */}
      <div className="px-6 mb-8 flex items-center gap-2">
        <Hexagon className="w-8 h-8 text-primary fill-primary" />
        <span className="text-xl font-bold tracking-tight text-foreground">GraphOne</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-slate-200/50 hover:text-foreground"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Contribute Section */}
      <div className="px-6 mt-8 mb-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Contribute
        </p>
        <div className="space-y-1 -mx-3">
          {CONTRIBUTE_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-slate-200/50 hover:text-foreground transition-all duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
