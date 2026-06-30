"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import Image from "next/image";

export function CollectionBanner() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-primary-light/50 to-transparent border border-primary/10 mb-8 p-8 flex items-center justify-between">
      <div className="max-w-xl">
        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <Flame className="w-4 h-4 fill-primary" />
          Collection of the week
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-3 flex items-center gap-3">
          <span className="text-5xl">🔥</span> Vibe Coding Tools
        </h2>
        <p className="text-muted-foreground mb-6 font-medium">
          The best AI tools for vibe coding, building and shipping faster.
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-secondary">
                  <Image src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="avatar" fill className="object-cover" />
                </div>
              ))}
              <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-foreground text-white flex items-center justify-center text-[10px] font-bold">
                +2k
              </div>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              2,341 products
            </span>
          </div>
          
          <Button className="bg-primary hover:bg-primary-hover text-white rounded-full px-6 py-5 text-sm font-semibold">
            Explore Collection
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
      
      {/* Decorative right graphic */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80 h-48 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-premium p-4 transform rotate-[-2deg]">
        <div className="w-full h-4 bg-secondary/80 rounded-full mb-4 flex items-center px-2 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="space-y-3">
          <div className="w-3/4 h-3 bg-secondary rounded-full" />
          <div className="w-1/2 h-3 bg-secondary rounded-full" />
          <div className="w-full h-3 bg-secondary rounded-full" />
          <div className="w-5/6 h-3 bg-secondary rounded-full" />
        </div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute -left-4 top-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
      </div>
    </div>
  );
}
