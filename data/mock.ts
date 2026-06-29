import { Company, Investor, Product, Job, NewsArticle } from "../types";

export const companies: Company[] = [
  {
    id: "c1",
    name: "OpenAI",
    slug: "openai",
    logo: "/logos/openai.png",
    description: "AI research and deployment company building safe and beneficial artificial general intelligence.",
    founded: 2015,
    location: "San Francisco, CA, USA",
    employees: "1,000+",
    type: "Privately Held",
    categories: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Foundation Models", "AI Research"],
    website: "openai.com",
    metrics: { valuation: "$86B+", funding: "$13B+" },
    tags: ["Trending #1"]
  },
  {
    id: "c2",
    name: "Anthropic",
    slug: "anthropic",
    logo: "/logos/anthropic.png",
    description: "AI safety and research company that's working to build reliable, interpretable, and steerable AI systems.",
    founded: 2021,
    location: "San Francisco, CA, USA",
    employees: "500+",
    type: "Privately Held",
    categories: ["Artificial Intelligence", "Foundation Models", "AI Research"],
    website: "anthropic.com",
    metrics: { valuation: "$18.4B", funding: "$7.3B" },
    tags: ["Trending #2"]
  },
  {
    id: "c3",
    name: "Cursor",
    slug: "cursor",
    logo: "/logos/cursor.png",
    description: "The AI-first code editor built for developers.",
    founded: 2022,
    location: "San Francisco, CA, USA",
    employees: "50+",
    type: "Privately Held",
    categories: ["AI Coding", "Developer Tools"],
    website: "cursor.sh",
    metrics: { funding: "$900M" },
    tags: ["Trending #3"]
  },
  {
    id: "c4",
    name: "Perplexity",
    slug: "perplexity",
    logo: "/logos/perplexity.png",
    description: "AI search engine for real-time answers.",
    founded: 2022,
    location: "San Francisco, CA, USA",
    employees: "100+",
    type: "Privately Held",
    categories: ["AI Search", "Productivity"],
    website: "perplexity.ai",
    metrics: { valuation: "$1B", funding: "$165M" }
  },
  {
    id: "c5",
    name: "Midjourney",
    slug: "midjourney",
    logo: "/logos/midjourney.png",
    description: "Create stunning images from natural language.",
    founded: 2022,
    location: "San Francisco, CA, USA",
    employees: "11-50",
    type: "Privately Held",
    categories: ["AI Video & Image", "Generative AI"],
    website: "midjourney.com",
    metrics: { funding: "Bootstrapped" }
  },
  {
    id: "c6",
    name: "Mistral AI",
    slug: "mistral-ai",
    logo: "/logos/mistral.png",
    description: "Frontier AI models for every builder.",
    founded: 2023,
    location: "Paris, France",
    employees: "51-200",
    type: "Privately Held",
    categories: ["Foundation Models", "Open Source AI"],
    website: "mistral.ai",
    metrics: { valuation: "$2B", funding: "$415M" }
  },
  {
    id: "c7",
    name: "ElevenLabs",
    slug: "elevenlabs",
    logo: "/logos/elevenlabs.png",
    description: "AI voice synthesis and audio tools.",
    founded: 2022,
    location: "London, UK",
    employees: "51-200",
    type: "Privately Held",
    categories: ["AI Voice", "Generative AI"],
    website: "elevenlabs.io",
    metrics: { valuation: "$1.1B", funding: "$101M" }
  }
];

export const investors: Investor[] = [
  {
    id: "i1",
    name: "Sequoia Capital",
    slug: "sequoia-capital",
    logo: "/logos/sequoia.png",
    description: "Backing the daring from idea to iconic.",
    location: "Menlo Park, California, USA",
    founded: 1972,
    type: "VC",
    metrics: {
      dealsLast90Days: 12,
      leadInvestments: 4,
      mostActiveStage: "Series A",
      topPartner: "a16z",
      topFocusArea: "AI Agents",
      portfolioCompanies: 98
    },
    portfolio: companies.slice(0, 3)
  },
  {
    id: "i2",
    name: "a16z",
    slug: "a16z",
    logo: "/logos/a16z.png",
    description: "Andreessen Horowitz backs bold entrepreneurs who move fast, think big, and are committed to building the next major franchises in technology.",
    location: "Menlo Park, California, USA",
    founded: 2009,
    type: "VC",
    metrics: { portfolioCompanies: 120 },
    portfolio: companies.slice(1, 4)
  },
  {
    id: "i3",
    name: "Lightspeed",
    slug: "lightspeed",
    logo: "/logos/lightspeed.png",
    description: "Early stage AI/ML, Enterprise.",
    location: "Menlo Park, California, USA",
    founded: 2000,
    type: "VC",
    metrics: { portfolioCompanies: 86 }
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Cursor",
    slug: "cursor",
    logo: "/logos/cursor.png",
    companyName: "Cursor",
    description: "The AI-first code editor built for speed and productivity.",
    categories: ["Code", "Developer Tools"],
    likes: "8.3K",
    comments: 173,
    tags: ["Trending in Coding"]
  },
  {
    id: "p2",
    name: "Claude",
    slug: "claude",
    logo: "/logos/anthropic.png",
    companyName: "Anthropic",
    description: "AI assistant for thoughtful work and collaboration.",
    categories: ["Chat", "Productivity"],
    likes: "6.7K",
    comments: 89,
    tags: ["Most used this week"]
  },
  {
    id: "p3",
    name: "ChatGPT",
    slug: "chatgpt",
    logo: "/logos/openai.png",
    companyName: "OpenAI",
    description: "Conversational AI for any question or task.",
    categories: ["Chat", "Artificial Intelligence"],
    likes: "5.1K",
    comments: 341,
    tags: ["Most used this week"]
  },
  {
    id: "p4",
    name: "Midjourney",
    slug: "midjourney",
    logo: "/logos/midjourney.png",
    companyName: "Midjourney",
    description: "AI image generator for creators and designers.",
    categories: ["Image", "Design"],
    likes: "5.5K",
    comments: 386,
    tags: ["Top rated in Image"]
  }
];

export const jobs: Job[] = [
  {
    id: "j1",
    title: "Principal Backend Engineer (Distributed Systems & Control Planes)",
    companyName: "SmartVerify.ai",
    companyLogo: "/logos/generic.png",
    location: "Remote only",
    salary: "$140K - $175K CAD",
    postedAt: "today"
  },
  {
    id: "j2",
    title: "Founding Software Engineer",
    companyName: "Lexi",
    companyLogo: "/logos/generic.png",
    location: "Boston",
    salary: "$100K - $150K",
    equity: "0.1% - 1.5%",
    postedAt: "today"
  }
];

export const news: NewsArticle[] = [
  {
    id: "n1",
    title: "OpenAI launches GPT-4o with multimodal capabilities and native reasoning",
    companyName: "OpenAI",
    companyLogo: "/logos/openai.png",
    sourceUrl: "openai.com",
    postedAt: "2 hours ago",
    comments: 34,
    tags: ["AI Models"]
  },
  {
    id: "n2",
    title: "Anthropic releases Claude 3.5 with expanded context window",
    companyName: "Anthropic",
    companyLogo: "/logos/anthropic.png",
    sourceUrl: "anthropic.com",
    postedAt: "5 hours ago",
    comments: 18,
    tags: ["AI Models"]
  }
];
