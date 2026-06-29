export type Company = {
  id: string;
  name: string;
  slug: string;
  description: string;
  foundedYear: number;
  location: string;
  funding: string;
  valuation: string;
  industry: string;
  logo: string;
  employees: string;
  website: string;
  products: Product[];
  investors: Investor[];
};

export type Investor = {
  id: string;
  name: string;
  slug: string;
  type: string;
  location: string;
  foundedYear: number;
  assetsUnderManagement: string;
  description: string;
  portfolio: Company[];
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  companyId: string;
  description: string;
  category: string;
  launchDate: string;
};

// Break cyclic references in mock data by using shallow references if needed, but for simplicity we'll just link IDs or construct small objects.
export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Graph DB Engine",
    slug: "graph-db-engine",
    companyId: "c1",
    description: "A highly scalable graph database optimized for AI workloads.",
    category: "Database",
    launchDate: "2023-05-12",
  },
  {
    id: "p2",
    name: "Neural Query",
    slug: "neural-query",
    companyId: "c2",
    description: "Natural language interface for querying complex datasets.",
    category: "AI Tools",
    launchDate: "2024-01-20",
  },
];

export const mockInvestors: Investor[] = [
  {
    id: "i1",
    name: "Sequoia Capital",
    slug: "sequoia-capital",
    type: "Venture Capital",
    location: "Menlo Park, CA",
    foundedYear: 1972,
    assetsUnderManagement: "$85B",
    description: "Sequoia helps daring founders build legendary companies from idea to IPO and beyond.",
    portfolio: [], // Will populate below
  },
  {
    id: "i2",
    name: "Andreessen Horowitz",
    slug: "a16z",
    type: "Venture Capital",
    location: "Menlo Park, CA",
    foundedYear: 2009,
    assetsUnderManagement: "$35B",
    description: "a16z is a venture capital firm that backs bold entrepreneurs building the future through technology.",
    portfolio: [],
  },
];

export const mockCompanies: Company[] = [
  {
    id: "c1",
    name: "GraphScale",
    slug: "graphscale",
    description: "Pioneering the next generation of graph databases for large language models.",
    foundedYear: 2021,
    location: "San Francisco, CA",
    funding: "$45M",
    valuation: "$250M",
    industry: "Artificial Intelligence",
    logo: "GS",
    employees: "50-100",
    website: "https://graphscale.ai",
    products: [mockProducts[0]],
    investors: [mockInvestors[0], mockInvestors[1]],
  },
  {
    id: "c2",
    name: "NeuroData",
    slug: "neurodata",
    description: "Building the infrastructure for autonomous AI agents.",
    foundedYear: 2022,
    location: "New York, NY",
    funding: "$12M",
    valuation: "$80M",
    industry: "Enterprise AI",
    logo: "ND",
    employees: "10-50",
    website: "https://neurodata.dev",
    products: [mockProducts[1]],
    investors: [mockInvestors[1]],
  },
  {
    id: "c3",
    name: "SynthCorp",
    slug: "synthcorp",
    description: "Synthetic data generation platform for privacy-preserving machine learning.",
    foundedYear: 2023,
    location: "London, UK",
    funding: "$8M",
    valuation: "$40M",
    industry: "Data Privacy",
    logo: "SC",
    employees: "1-10",
    website: "https://synthcorp.io",
    products: [],
    investors: [mockInvestors[0]],
  }
];

// Circular reference resolution for mock
mockInvestors[0].portfolio.push(mockCompanies[0], mockCompanies[2]);
mockInvestors[1].portfolio.push(mockCompanies[0], mockCompanies[1]);
