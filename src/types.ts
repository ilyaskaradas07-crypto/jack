export type Language = 'en' | 'tr' | 'ru' | 'de' | 'pl' | 'uk' | 'ro' | 'sr';

export type TourCategory = 
  | 'All' 
  | 'Boat Tours' 
  | 'Adventure' 
  | 'Nature' 
  | 'Culture' 
  | 'Day Trips' 
  | 'Private' 
  | 'Family' 
  | 'Luxury';

export interface Tour {
  id: string;
  slug: string;
  title: Record<string, string>;
  category: TourCategory;
  price: number;
  pricePerPerson: boolean; // true = per person, false = per yacht
  currency: string;
  duration: Record<string, string>;
  rating: number;
  reviewsCount: number;
  participantsCount?: number;
  image: string;
  imageAlt?: Record<string, string>;
  gallery: string[];
  galleryAlts?: Record<string, string[]>;
  description: Record<string, string>;
  highlights: Record<string, string[]>;
  included: Record<string, string[]>;
  notIncluded: Record<string, string[]>;
  pickupInfo: Record<string, string>;
  importantInfo: Record<string, string[]>;
  itinerary?: Record<string, string[]>;
  destination?: Record<string, string>;
  isFeatured?: boolean;
}

export interface TourReservationFormData {
  fullName: string;
  phone: string;
  email?: string;
  hotelName: string;
  tourName: string;
  tourId?: string;
  tourDate: string;
  adults: number;
  children: number;
  infants?: number;
  roomNumber?: string;
  pickupTime?: string;
  region?: string;
  sessionTime?: string;
  totalPrice?: number;
  currency?: string;
  referenceCode?: string;
  specialRequests?: string;
}

export interface ShoppingService {
  id: string;
  slug: string;
  title: Record<string, string>;
  subtitle: Record<string, string>;
  badge: Record<string, string>;
  isFree?: boolean;
  priceLabel: Record<string, string>;
  description: Record<string, string>;
  features: Record<string, string[]>;
  image: string;
  imageAlt?: Record<string, string>;
  ctaText: Record<string, string>;
  whatsappText: Record<string, string>;
}

export interface ReservationFormData {
  firstName: string;
  lastName: string;
  roomNumber: string;
  phone: string;
  email?: string;
  tourId: string;
  date: string;
  adults: number;
  children: number;
  hotelName: string;
  pickupLocation: string;
  specialRequests?: string;
}

export interface AirportTransferFormData {
  name: string;
  airport?: string;
  price?: string;
  routeType?: string;
  hotelName: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: number;
  flightNumber: string;
  phone: string;
  specialRequests?: string;
}

export interface ReviewItem {
  name: string;
  country: string;
  flag: string;
  tour: Record<string, string>;
  rating: number;
  date: string;
  comment: Record<string, string>;
}

export interface FaqItem {
  question: Record<string, string>;
  answer: Record<string, string>;
  category?: string;
}
