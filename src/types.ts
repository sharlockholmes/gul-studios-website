export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  badge?: string;
  status: 'Yayında' | 'Beta' | 'Planlanıyor';
  iconName: string;
  stats?: { label: string; value: string }[];
  features: string[];
  link?: string;
  isFlagship?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
