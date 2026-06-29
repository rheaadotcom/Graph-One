"use client";

import { Search, Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import { DarkModeToggle } from "@/components/layout/dark-mode-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-8 rounded-tl-3xl">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-12 py-2 border border-border rounded-full leading-5 bg-secondary/50 placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all"
          placeholder="Search startups, products, investors, jobs and news"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-xs text-muted-foreground font-medium bg-white px-2 py-0.5 rounded shadow-sm border border-border">
            /
          </span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 ml-6">
        <button className="relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary text-[8px] font-bold text-white items-center justify-center">
              12
            </span>
          </span>
        </button>
        <DarkModeToggle />


        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
            <Image
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              alt="User avatar"
              fill
              className="object-cover"
            />
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
      </div>
    </header>
  );
}
