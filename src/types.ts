export interface SocialInitiative {
  id: string;
  title: string;
  category: 'youth' | 'microbusiness' | 'digital' | 'climate' | 'relief' | 'women' | 'WASH & Water' | 'Waste & Sanitation' | 'Nutrition & ECD' | 'Social Inclusion' | 'Climate & Agriculture' | 'Livelihood & Business' | string;
  tagline: string;
  description: string;
  impactSummary: string;
  targetAudience: string;
  districtsCovered: string[];
  beneficiariesCount: number;
  status: 'Active' | 'Ongoing Campaign' | 'Scale-up Phase';
  iconName: string;
  highlights: string[];
  imagePlaceholderColor: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  icon: string;
}

export interface LinkedInPost {
  id: string;
  date: string;
  author: string;
  authorTitle: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  category: string;
  linkedInUrl: string;
  tags: string[];
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedInUrl: string;
  imageBg: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
