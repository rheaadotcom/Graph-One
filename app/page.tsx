import { EcosystemGraph } from "@/components/home/ecosystem-graph";
import { CollectionBanner } from "@/components/home/collection-banner";
import { ProductList } from "@/components/home/product-list";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Mail } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex w-full gap-8">
      {/* Main Content Area */}
      <div className="flex-1 max-w-5xl">
        {/* Hero Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live AI Intelligence
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
              The Global Intelligence<br />Layer <span className="text-primary">for AI.</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium mb-10">
              One graph connecting companies, founders, investors, products, funding and talent.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold text-muted-foreground">Most searched</span>
              <div className="flex items-center gap-3">
                {[
                  { name: 'Databricks', domain: 'databricks.com' },
                  { name: 'Notion', domain: 'notion.so' },
                  { name: 'Pinecone', domain: 'pinecone.io' },
                  { name: 'Weaviate', domain: 'weaviate.io' },
                  { name: 'LangChain', domain: 'langchain.com' }
                ].map(item => (
                  <div key={item.name} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-border rounded-lg shadow-sm text-xs font-bold text-foreground hover:border-primary/50 cursor-pointer transition-colors">
                    <div className="w-4 h-4 bg-secondary rounded overflow-hidden flex items-center justify-center shrink-0">
                       <Image src={`https://logo.clearbit.com/${item.domain}`} alt={item.name} width={16} height={16} className="object-contain" unoptimized />
                    </div>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-[450px] shrink-0">
            <EcosystemGraph />
          </div>
        </div>

        <CollectionBanner />
        
        <ProductList />
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:block w-80 shrink-0 space-y-6">
        {/* Product of the Day */}
        <div className="bg-white rounded-2xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-4">
            <Trophy className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            Product of the Day
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center shrink-0">
               <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Cursor_logo.svg" alt="Cursor" width={24} height={24} className="invert brightness-0" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Cursor</h4>
              <p className="text-xs text-muted-foreground font-medium">AI-first code editor</p>
            </div>
          </div>
          <Button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl">
            View Product
          </Button>
        </div>

        {/* Trending Searches */}
        <div className="bg-white rounded-2xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            Trending Searches
          </div>
          <div className="flex flex-wrap gap-2">
            {['Cursor', 'Claude', 'Vibe Coding', 'Lovable', 'Perplexity', 'Midjourney', 'Runway', 'MCP', 'AI Agents', 'AI Notetaker'].map(tag => (
              <span key={tag} className="text-xs font-semibold text-primary bg-primary-light/50 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-primary-light transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white rounded-2xl border border-border p-5 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground mb-2">
            <Mail className="w-4 h-4 text-primary" />
            Stay ahead in AI
          </div>
          <p className="text-xs text-muted-foreground font-medium mb-4">
            Get weekly updates on new tools and trends.
          </p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full border border-border rounded-xl px-3 py-2 text-sm mb-3 focus:outline-none focus:border-primary"
          />
          <Button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl">
            Subscribe
          </Button>
        </div>
        
        {/* Footer Links */}
        <div className="pt-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-muted-foreground mb-4">
            <a href="#" className="hover:text-foreground">About</a>
            <a href="#" className="hover:text-foreground">Advertise</a>
            <a href="#" className="hover:text-foreground">API</a>
            <a href="#" className="hover:text-foreground">Newsletter</a>
            <a href="#" className="hover:text-foreground">Blog</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground font-medium">
            © 2024 GraphOne.<br />All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
