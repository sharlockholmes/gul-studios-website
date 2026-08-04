export type ThemeMode = 'dark' | 'midnight' | 'light';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  badge?: string;
  status: 'Yayında' | 'Beta' | 'Geliştirilmede';
  iconName: string;
  stats?: { label: string; value: string }[];
  features: string[];
  link?: string;
  isFlagship?: boolean;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tags: string[];
  features: string[];
  highlight?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  imageBg: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteScope {
  projectType: 'mobile' | 'web' | 'ai' | 'design' | 'fullstack';
  scopeLevel: 'mvp' | 'growth' | 'enterprise';
  features: string[];
  timelineWeeks: number;
}
