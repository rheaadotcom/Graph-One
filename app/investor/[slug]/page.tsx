import { notFound } from "next/navigation";
import { mockInvestors, mockCompanies } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Building2, TrendingUp, Landmark } from "lucide-react";
import Link from "next/link";

export default async function InvestorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const investor = mockInvestors.find(i => i.slug === slug);

  if (!investor) {
    notFound();
  }
  
  const portfolioCompanies = investor.portfolioIds
    .map(id => mockCompanies.find(c => c.id === id))
    .filter(Boolean) as typeof mockCompanies;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex items-start space-x-6">
          <div className="h-24 w-24 rounded-2xl bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-4xl shrink-0">
            {investor.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">{investor.name}</h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl text-balance">
              {investor.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{investor.type}</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {investor.location}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 text-green-600 bg-green-50 border-green-200">
                <Landmark className="h-3 w-3" />
                AUM: {investor.assetsUnderManagement}
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline">Follow</Button>
          <Button>Edit Profile</Button>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight">Portfolio Companies ({portfolioCompanies.length})</h2>
        {portfolioCompanies.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioCompanies.map((company) => (
              <Link href={`/company/${company.slug}`} key={company.id} className="block transition-transform hover:-translate-y-1">
                <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                        {company.logo}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1 text-xs">
                          <MapPin className="h-3 w-3 mr-1" />
                          {company.location}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-foreground mb-4 line-clamp-2">
                      {company.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-[10px] py-0">{company.industry}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 text-xs text-muted-foreground flex justify-between border-t border-border mt-4 px-6 py-3">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {company.valuation}
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      {company.foundedYear}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground border border-dashed border-border rounded-xl p-8 text-center bg-secondary/50">
            No portfolio companies listed yet.
          </p>
        )}
      </div>
    </div>
  );
}
