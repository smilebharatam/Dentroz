export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
}

export interface DesignPackage {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  vibe: string;
  idealFor: string;
  priceLevel: 'Basic' | 'Premium' | 'Luxury';
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ConsumableItem {
  id: string;
  name: string;
  category: 'Restorative' | 'Endodontics' | 'Prosthodontics' | 'Surgical' | 'Preventive' | 'Essentials';
  description: string;
  subCategory?: string;
}

export interface MarketingPackage {
  id: string;
  name: string;
  price: string;
  postsCount: string;
  reelsCount: string;
  shortsCount: string;
  googleUpdates: string;
  additionalFeatures: string[];
  isPopular?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  doctorName: string;
  role: string;
  clinicName: string;
  location: string;
  rating: number;
  text: string;
  imgUrl: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  area: string;
  chairs: number;
  duration: string;
  challenge: string;
  solution: string;
  designConcept: string;
  beforeImg: string;
  afterImg: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Clinic Operations' | 'Technology' | 'Design' | 'Marketing';
  readTime: string;
  date: string;
  content: string;
}

export interface Inquiry {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  clinicStage: 'planning' | 'established' | 'upgrading';
  serviceType: string;
  message: string;
  date: string;
}
