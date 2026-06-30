"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, MessageSquare, Heart, Zap, LayoutGrid, MessageCircle, Code2, Bot, Image as ImageIcon, Video, Mic, Briefcase, ChevronRight, ChevronDown, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "All", icon: LayoutGrid, active: true },
  { name: "Chat", icon: MessageCircle },
  { name: "Code", icon: Code2 },
  { name: "Agents", icon: Bot },
  { name: "Image", icon: ImageIcon },
  { name: "Video", icon: Video },
  { name: "Voice", icon: Mic },
  { name: "Productivity", icon: Briefcase },
];

const popularRightNow = [
  { name: "Cursor", category: "AI code editor", logo: "/logo/cursor.webp" },
  { name: "Claude", category: "AI assistant", logo: "/logo/claude-color.webp" },
  { name: "Lovable", category: "AI app builder", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Heart_logo.png" },
  { name: "Midjourney", category: "Image generator", logo: "/logo/mid-journey.webp" },
  { name: "Perplexity", category: "AI search", logo: "/logo/2u1cl5c5mm274tgpjfhr27b9v1o8.webp" },
];

const products = [
  {
    name: "Cursor",
    description: "The AI-first code editor built for speed and productivity.",
    logo: "/logo/cursor.webp",
    tags: ["Code", "Developer Tools"],
    badge: "Trending in Coding",
    badgeIcon: Flame,
    badgeColor: "text-orange-500",
    badgeBg: "bg-orange-500/10",
    upvotes: "8.3K",
    comments: "173",
  },
  {
    name: "Claude",
    description: "AI assistant for thoughtful work and collaboration.",
    logo: "/logo/claude-color.webp",
    tags: ["Chat", "Productivity"],
    badge: "Most used this week",
    badgeIcon: Sparkles,
    badgeColor: "text-green-500",
    badgeBg: "bg-green-500/10",
    upvotes: "6.7K",
    comments: "89",
  },
  {
    name: "Midjourney",
    description: "AI image generator for creators and designers.",
    logo: "/logo/mid-journey.webp",
    tags: ["Image", "Design"],
    badge: "Top rated in Image",
    badgeIcon: Sparkles,
    badgeColor: "text-purple-500",
    badgeBg: "bg-purple-500/10",
    upvotes: "5.5K",
    comments: "386",
  },
  {
    name: "ChatGPT",
    description: "Conversational AI for any question or task.",
    logo: "/logo/chatgpt-icon.webp",
    tags: ["Chat", "Artificial Intelligence"],
    badge: "Most used this week",
    badgeIcon: Sparkles,
    badgeColor: "text-green-500",
    badgeBg: "bg-green-500/10",
    upvotes: "5.1K",
    comments: "341",
  },
];

export function ProductList() {
  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-border pb-4 mb-8 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap",
              tab.active
                ? "bg-primary-light text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.name}
          </button>
        ))}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors ml-auto">
          More <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Popular Right Now */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-4">
          <Zap className="w-4 h-4 fill-primary" />
          POPULAR RIGHT NOW
        </div>
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-2">
          {popularRightNow.map((item) => (
            <div key={item.name} className="flex items-center gap-3 bg-white border border-border rounded-xl p-3 min-w-[200px] shadow-sm cursor-pointer hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary shrink-0">
                <Image src={item.logo} alt={item.name} width={24} height={24} className="object-contain" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-foreground">{item.name}</h4>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
            </div>
          ))}
          <button className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary shrink-0 transition-colors shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main List Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-bold">
            <Flame className="w-4 h-4 fill-primary" />
            Most Popular
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:bg-secondary text-sm font-semibold transition-colors">
            <Sparkles className="w-4 h-4" />
            Newest
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <span>20,458 products</span>
          <button className="flex items-center gap-1 hover:text-foreground transition-colors">
            Sort by: <span className="font-bold text-foreground">Popular</span> <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.name} className="flex items-center justify-between p-5 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-premium transition-all cursor-pointer group">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-secondary shrink-0 overflow-hidden">
                <Image src={product.logo} alt={product.name} width={32} height={32} className="object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-3">{product.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold", product.badgeBg, product.badgeColor)}>
                    <product.badgeIcon className="w-3 h-3" />
                    {product.badge}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors">
                <Heart className="w-5 h-5" />
                <span className="font-bold">{product.upvotes}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="font-semibold">{product.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="rounded-full px-8 font-semibold text-muted-foreground hover:text-foreground">
          Load more products <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
