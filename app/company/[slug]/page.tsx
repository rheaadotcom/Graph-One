import * as React from "react";
import { notFound } from "next/navigation";
import { mockCompanies, mockProducts, mockInvestors } from "@/data/mock";
import { getCompany } from "@/lib/mockHelpers";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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

  const chartData = relatedProducts.map((p) => ({
    year: new Date(p.launchDate).getFullYear().toString(),
    count: 1,
  }));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{company.name}</CardTitle>
          <CardDescription>{company.industry}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{company.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {company.funding && <Badge>Funding: {company.funding}</Badge>}
            {company.valuation && <Badge>Valuation: {company.valuation}</Badge>}
            {company.location && <Badge>Location: {company.location}</Badge>}
          </div>
        </CardContent>
      </Card>

      {relatedProducts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((p) => (
              <div key={p.id} className="p-2 border rounded">
                <h4 className="font-medium">{p.name}</h4>
                <p className="text-sm text-muted-foreground">{p.category}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {chartData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Product Launch Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="count" stroke="#8884d8" fill="url(#colorCount)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {relatedInvestors.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Investors</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedInvestors.map((inv) => (
              <div key={inv.id} className="p-2 border rounded">
                <h4 className="font-medium">{inv.name}</h4>
                <p className="text-sm text-muted-foreground">{inv.type}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
