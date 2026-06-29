import { mockProducts, mockCompanies } from "@/data/mock";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Package, Calendar, Building2 } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <SectionTitle 
          title="Products" 
          description="Explore cutting-edge AI products and tools." 
          className="mb-0"
        />
        <Button>Add Product</Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => {
          const company = mockCompanies.find(c => c.id === product.companyId);
          return (
            <Card key={product.id} className="h-full flex flex-col hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Package className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    {company && (
                      <Link href={`/company/${company.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center mt-1">
                        <Building2 className="h-3 w-3 mr-1" />
                        {company.name}
                      </Link>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-background">{product.category}</Badge>
                </div>
              </CardContent>
              <CardFooter className="pt-0 text-xs text-muted-foreground flex justify-between border-t border-border mt-4 px-6 py-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Launched {new Date(product.launchDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
