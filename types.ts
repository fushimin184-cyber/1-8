
export interface CaseStudy {
  name: string;
  background: string;
  offers: string[];
}

export interface PricingPlan {
  title: string;
  description: string;
  targetAudience: string[];
  features?: string[];
  price?: string;
}

export interface TableRow {
  label: string;
  values: (string | boolean)[];
}
