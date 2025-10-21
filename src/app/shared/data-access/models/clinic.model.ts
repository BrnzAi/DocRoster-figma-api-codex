import { Address, Coordinates } from './address.model';

export interface Clinic {
  id: string;
  name: string;
  description: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  phone: string;
  email: string;
  address: Address;
  coordinates: Coordinates;
  heroImage: string;
  openingHours: string;
  isVerified: boolean;
}
