export interface DentalService {
  id: string;
  title: string;
  category: 'general' | 'cosmetic' | 'ortho' | 'implants' | 'emergency';
  description: string;
  details: string[];
  imageUrl: string;
  iconName: string;
  popular?: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  startingPrice: string;
  subPrice?: string;
  subtitle: string;
  badgeText?: string;
  badgeColor?: string;
  featured?: boolean;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  specialties: string[];
  imageUrl: string;
}

export interface OfficePhoto {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface AppointmentBooking {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime?: string;
  serviceId: string;
  doctorPreference?: string;
  isEmergency?: boolean;
  notes?: string;
}

export interface SmileTransformation {
  id: string;
  title: string;
  category: string;
  procedure: string;
  timeframe: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface PatientReview {
  id: string;
  author: string;
  avatarUrl?: string;
  avatarInitial?: string;
  avatarBg?: string;
  timeAgo: string;
  rating: number;
  text: string;
  source: 'google';
}

export type ActiveTab = 'home' | 'tmj' | 'treatments' | 'pricing' | 'wisdom-teeth' | 'financing' | 'contact' | 'services' | 'team' | 'emergency' | 'transformations' | 'testimonials';
