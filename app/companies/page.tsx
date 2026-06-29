import * as React from "react";
import Link from "next/link";
import { mockCompanies } from "@/data/mock";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "Companies - GraphOne",
  description: "Explore AI companies on the GraphOne platform clone.",
};

export default function CompaniesPage() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockCompanies.map((company) => (
        <Link key={company.id} href={`/company/${company.slug}`}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{company.name}</CardTitle>
              <CardDescription>{company.industry}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </section>
  );
}
