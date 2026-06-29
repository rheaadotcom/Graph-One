import { notFound } from "next/navigation";
import { mockCompanies } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Building2, TrendingUp, Link as LinkIcon, Briefcase } from "lucide-react";
import Link from "next/link";

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = mockCompanies.find(c => c.slug === slug);

  if (!company) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex items-start space-x-6">
          <div className="h-24 w-24 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl shrink-0">
            {company.logo}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">{company.name}</h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl text-balance">
              {company.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{company.industry}</Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {company.location}
              </Badge>
              <a href={company.website} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                <LinkIcon className="h-4 w-4 mr-1" />
                {company.website.replace("https://", "")}
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline">Follow</Button>
          <Button>Edit Profile</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" /> Valuation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{company.valuation}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Briefcase className="h-4 w-4 mr-2" /> Total Funding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{company.funding}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Users className="h-4 w-4 mr-2" /> Employees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{company.employees}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
              <Building2 className="h-4 w-4 mr-2" /> Founded
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{company.foundedYear}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight">Products</h2>
          {company.products.length > 0 ? (
            <div className="grid gap-4">
              {company.products.map(product => (
                <Card key={product.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground border border-dashed border-border rounded-xl p-8 text-center bg-secondary/50">
              No products listed yet.
            </p>
          )}
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight">Investors</h2>
          {company.investors.length > 0 ? (
            <div className="grid gap-4">
              {company.investors.map(investor => (
                <Link href={`/investor/${investor.slug}`} key={investor.id} className="block transition-transform hover:-translate-y-1">
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground font-bold shrink-0">
                          {investor.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{investor.name}</h3>
                          <p className="text-xs text-muted-foreground">{investor.type}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground border border-dashed border-border rounded-xl p-8 text-center bg-secondary/50">
              No investors listed yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
