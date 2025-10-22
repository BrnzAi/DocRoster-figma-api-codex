export interface ExperienceHighlight {
  label: string;
  value: string;
}

export interface AvailabilitySlot {
  day: string;
  times: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  clinicId: string;
  biography: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  avatarUrl: string;
  highlights: ExperienceHighlight[];
  availability: AvailabilitySlot[];
  languages: string[];
  acceptedPlans: string[];
  virtualCare: boolean;
  feeTier?: 'low' | 'medium' | 'high';
  gender?: 'male' | 'female' | 'nonbinary';
  careType?: 'hybrid' | 'inperson' | 'virtual';
}
