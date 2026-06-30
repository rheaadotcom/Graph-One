"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface Product {
  id: string;
  name: string;
  category: string;
  launchDate: string;
  companyId: string;
}

interface Investor {
  id: string;
  name: string;
  type: string;
}

interface Company {
  id: string;
  name: string;
  industry: string;
  description: string;
  funding?: string;
  valuation?: string;
  location?: string;
}

interface CompanyDetailClientProps {
  company: Company;
  relatedProducts: Product[];
  relatedInvestors: Investor[];
}

export default function CompanyDetailClient({
  company,
  relatedProducts,
  relatedInvestors,
}: CompanyDetailClientProps) {
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
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
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
            </div>
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
