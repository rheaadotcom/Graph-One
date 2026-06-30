import * as React from "react";
import { notFound } from "next/navigation";
import { mockCompanies, mockProducts, mockInvestors } from "@/data/mock";
import { getCompany } from "@/lib/mockHelpers";
import CompanyDetailClient from "./CompanyDetailClient";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const company = mockCompanies.find((c) => c.slug === params.slug);
  if (!company) return { title: "Company Not Found" };
  return {
    title: `${company.name} - GraphOne`,
    description: company.description,
  };
}

export default function CompanyDetail({ params }: { params: { slug: string } }) {
  const company = getCompany(params.slug);
  if (!company) notFound();

  const relatedProducts = mockProducts.filter((p) => p.companyId === company.id);
  const relatedInvestors = mockInvestors.filter((i) => company.investorIds.includes(i.id));

  return (
    <CompanyDetailClient
      company={company}
      relatedProducts={relatedProducts}
      relatedInvestors={relatedInvestors}
    />
  );
}

