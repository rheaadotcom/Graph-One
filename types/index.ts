export interface Company {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  founded: number;
  location: string;
  employees: string;
  type: string; // e.g., "Privately Held"
  categories: string[];
  website?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  metrics?: {
    valuation?: string;
    funding?: string;
    views?: string;
  };
  tags?: string[]; // e.g., "Trending #1", "Top rated"
}

export interface Investor {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  location: string;
  founded: number;
  type: string; // e.g., "VC", "Growth Equity"
  metrics?: {
    dealsLast90Days?: number;
    leadInvestments?: number;
    mostActiveStage?: string;
    topPartner?: string;
    topFocusArea?: string;
    portfolioCompanies?: number;
  };
  portfolio?: Company[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  logo: string;
  companyName: string;
  description: string;
  categories: string[];
  likes: string;
  comments: number;
  tags?: string[];
}

export interface Job {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  salary: string;
  equity?: string;
  postedAt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  companyName: string;
  companyLogo: string;
  sourceUrl: string;
  postedAt: string;
  comments: number;
  tags: string[];
}
