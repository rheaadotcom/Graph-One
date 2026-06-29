import { mockCompanies, mockInvestors, mockProducts } from '@/data/mock';

// Types inferred directly from mock data arrays
export type Company = (typeof mockCompanies)[number];
export type Investor = (typeof mockInvestors)[number];
export type Product = (typeof mockProducts)[number];

export const getCompany = (id: string): Company | undefined =>
  mockCompanies.find((c) => c.id === id);

export const getInvestor = (id: string): Investor | undefined =>
  mockInvestors.find((i) => i.id === id);

export const getProduct = (id: string): Product | undefined =>
  mockProducts.find((p) => p.id === id);

export const getCompaniesByIds = (ids: string[]): Company[] =>
  ids.map(getCompany).filter((c): c is Company => !!c);

export const getInvestorsByIds = (ids: string[]): Investor[] =>
  ids.map(getInvestor).filter((i): i is Investor => !!i);

export const getProductsByIds = (ids: string[]): Product[] =>
  ids.map(getProduct).filter((p): p is Product => !!p);
