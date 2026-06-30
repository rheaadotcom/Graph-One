"use client";

import { Search, Bell, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border h-20 flex items-center justify-between px-8 rounded-tl-[2rem]">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <input
          type="text"
          className="block w-full pl-12 pr-24 py-3 border border-border rounded-full leading-5 bg-white shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary sm:text-sm transition-all"
          placeholder="Search startups, products, investors, jobs and news"
        />
        <div className="absolute inset-y-0 right-1.5 flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium bg-secondary px-2 py-1 rounded border border-border">
            /
          </span>
          <button className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors shadow-sm">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 ml-6">
        <button className="relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary text-[9px] font-bold text-white items-center justify-center border-2 border-white">
              12
            </span>
          </span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
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
