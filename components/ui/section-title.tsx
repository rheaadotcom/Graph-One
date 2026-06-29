import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  description?: string;
}

export function SectionTitle({ title, description, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("space-y-1 mb-6", className)} {...props}>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
