export type ProgramCategory =
  | "daycare"
  | "infant"
  | "toddler"
  | "preschool"
  | "kindergarten"
  | "serasi"
  | "homeschooling";

export interface ProgramFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProgramPricing {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface TeacherProfile {
  name: string;
  role: string;
  photo?: string;
  qualifications: string[];
  experience: string;
  bio?: string;
}

export interface ProgramSchedule {
  title: string;
  days: string[];
  time: string;
  description?: string;
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar?: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface ProgramData {
  id: string;
  name: string;
  slug: string;
  category: ProgramCategory;
  tagline: string;
  description: string;
  ageRange: string;
  heroImage: string;
  heroVideo?: string;
  themeColor: "primary" | "daycare" | "kb" | "tk" | "serasi" | "hs";

  features: ProgramFeature[];
  benefits: string[];
  facilities: {
    title: string;
    items: string[];
  };
  dailyActivities: {
    time: string;
    activity: string;
    description?: string;
  }[];

  schedule: ProgramSchedule[];
  caregiverInfo: {
    ratio: string;
    qualifications: string[];
    description: string;
    photo?: string;
  };

  pricing: ProgramPricing[];
  gallery: string[][];
  faqs: ProgramFAQ[];
  testimonials: Testimonial[];

  whatsapp: {
    number: string;
    message: string;
  };
  registrationLink?: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  keywords: string[];
}
