"use client";

import { Hexagon } from "lucide-react";
import Image from "next/image";

const nodes = [
  { name: "OpenAI", logo: "/logo/chatgpt-icon.webp", angle: -90, radius: 140 },
  { name: "Cursor", logo: "/logo/cursor.webp", angle: -18, radius: 140 },
  { name: "Perplexity", logo: "/logo/2u1cl5c5mm274tgpjfhr27b9v1o8.webp", angle: 54, radius: 140 },
  { name: "Midjourney", logo: "/logo/mid-journey.webp", angle: 126, radius: 140 },
  { name: "Anthropic", logo: "/logo/claude-color.webp", angle: 198, radius: 140 },
];

export function EcosystemGraph() {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto flex items-center justify-center">
      {/* Background concentric circles / dashed lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] rounded-full border border-red-100 border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[60%] h-[60%] rounded-full border border-red-200 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-[40%] h-[40%] rounded-full border border-red-100 border-dashed" />
      </div>

      {/* Center Logo */}
      <div className="relative z-10 w-24 h-24 bg-white rounded-2xl shadow-premium flex items-center justify-center border border-border">
        <div className="relative flex items-center justify-center text-primary">
          <Hexagon className="h-12 w-12 fill-primary stroke-none" />
          <span className="absolute text-white font-bold text-2xl leading-none mt-[1px]">G</span>
        </div>
      </div>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = Math.cos(rad) * node.radius;
        const y = Math.sin(rad) * node.radius;

        return (
          <div
            key={node.name}
            className="absolute z-20 transition-transform hover:scale-110 cursor-pointer"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-card border border-border flex items-center justify-center overflow-hidden relative">
                {/* Fallback initials if image fails or for simplicity */}
                <span className="text-xl font-bold text-foreground absolute inset-0 flex items-center justify-center bg-white z-0">
                  {node.name.charAt(0)}
                </span>
                {node.logo && (
                  <Image src={node.logo} alt={node.name} fill className="object-contain p-2 z-10 bg-white" />
                )}
              </div>
              <span className="text-xs font-semibold text-foreground bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
                {node.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
