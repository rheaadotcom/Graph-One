import Link from "next/link";
import { mockInvestors } from "@/data/mock";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { MapPin, Briefcase, Landmark } from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <SectionTitle 
          title="Investors" 
          description="Find top venture capital firms and angel investors." 
          className="mb-0"
        />
        <Button>Add Investor</Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockInvestors.map((investor) => (
          <Link href={`/investor/${investor.slug}`} key={investor.id} className="block transition-transform hover:-translate-y-1">
            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-lg shrink-0">
                    {investor.name.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{investor.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {investor.location}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-foreground mb-4 line-clamp-2">
                  {investor.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{investor.type}</Badge>
                  <Badge variant="outline" className="flex items-center gap-1 text-xs text-green-600 bg-green-50 border-green-200">
                    <Landmark className="h-3 w-3" />
                    AUM: {investor.assetsUnderManagement}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="pt-0 text-xs text-muted-foreground flex justify-between border-t border-border mt-4 px-6 py-4">
                <div className="flex items-center gap-1">
                  <Briefcase className="h-3.5 w-3.5" />
                  {investor.portfolio.length} Portfolio Cos
                </div>
                <div>
                  Est. {investor.foundedYear}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
