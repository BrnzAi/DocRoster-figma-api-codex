import { Assessment, Organization } from '../models/assessment.model';
import { Clinic } from '../models/clinic.model';
import { Doctor } from '../models/doctor.model';
import { FilterGroup } from '../models/filter.model';
import { Review } from '../models/review.model';
import { SearchResult } from '../models/search-result.model';
import { UserProfile } from '../models/user-profile.model';

export const MOCK_CLINICS: Clinic[] = [
  {
    id: 'clinic-health-advancement',
    name: 'Health Advancement Center',
    description:
      'Flagship care campus specialising in preventive medicine, integrative diagnostics and mobile case teams.',
    specialties: ['General medicine', 'Preventive care', 'Hybrid visits'],
    rating: 4.9,
    reviewCount: 284,
    phone: '+1 (424) 555-0188',
    email: 'hello@healthadvancement.org',
    address: {
      street: '123 Sunshine Ave',
      city: 'Beverly Hills',
      state: 'CA',
      postalCode: '90210',
      country: 'USA'
    },
    coordinates: {
      latitude: 34.0736,
      longitude: -118.4004
    },
    heroImage: 'assets/images/clinics/aurora-clinic.svg',
    openingHours: 'Mon–Fri · 8:00–18:00',
    isVerified: true
  },
  {
    id: 'clinic-connection-point',
    name: 'Connection Point Center',
    description:
      'Regional collaborative hub aligning specialty consults, maternal care and on-site diagnostics for travelling teams.',
    specialties: ['Gynecology', 'Maternal care', 'Consult coordination'],
    rating: 4.8,
    reviewCount: 231,
    phone: '+1 (323) 555-9070',
    email: 'connect@connectionpoint.center',
    address: {
      street: '456 Skill St',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90211',
      country: 'USA'
    },
    coordinates: {
      latitude: 34.0595,
      longitude: -118.3821
    },
    heroImage: 'assets/images/clinics/riverbend.svg',
    openingHours: 'Mon–Sat · 7:30–19:00',
    isVerified: true
  },
  {
    id: 'clinic-community-wellness',
    name: 'Community Wellness Initiative',
    description:
      'Dermatology collective combining onsite specialists, remote screening and neighbourhood outreach events.',
    specialties: ['Dermatology', 'Mobile screening', 'Telederm'],
    rating: 4.7,
    reviewCount: 198,
    phone: '+1 (213) 555-4420',
    email: 'care@communitywellness.org',
    address: {
      street: '789 Awareness Blvd',
      city: 'Culver City',
      state: 'CA',
      postalCode: '90212',
      country: 'USA'
    },
    coordinates: {
      latitude: 34.024,
      longitude: -118.3965
    },
    heroImage: 'assets/images/clinics/lakeside.svg',
    openingHours: 'Mon–Fri · 8:30–18:30',
    isVerified: true
  },
  {
    id: 'clinic-progressive-health',
    name: 'Progressive Health Hub',
    description:
      'Women’s health campus pairing collaborative surgical teams with long-tail recovery support and digital follow-up.',
    specialties: ['Women’s health', 'Surgery support', 'Virtual follow-up'],
    rating: 4.9,
    reviewCount: 256,
    phone: '+1 (310) 555-6120',
    email: 'hello@progressivehub.com',
    address: {
      street: '456 Inspire Ave',
      city: 'Santa Monica',
      state: 'CA',
      postalCode: '90214',
      country: 'USA'
    },
    coordinates: {
      latitude: 34.0195,
      longitude: -118.4912
    },
    heroImage: 'assets/images/clinics/aurora-clinic.svg',
    openingHours: 'Mon–Sat · 8:00–20:00',
    isVerified: true
  },
  {
    id: 'clinic-innovative-care',
    name: 'Innovative Care Clinic',
    description:
      'Rapid diagnostics team offering mobile lab work, catastrophic assessment programmes and collaborative reporting.',
    specialties: ['Laboratory diagnostics', 'Mobile teams', 'Assessments'],
    rating: 4.6,
    reviewCount: 164,
    phone: '+1 (213) 555-7721',
    email: 'support@innovativecare.io',
    address: {
      street: '321 Uplift Rd',
      city: 'Los Angeles',
      state: 'CA',
      postalCode: '90213',
      country: 'USA'
    },
    coordinates: {
      latitude: 34.0522,
      longitude: -118.3437
    },
    heroImage: 'assets/images/clinics/riverbend.svg',
    openingHours: 'Mon–Fri · 7:30–17:30',
    isVerified: false
  },
  {
    id: 'clinic-innovative-wellness',
    name: 'Innovative Wellness Center',
    description:
      'Hybrid primary care studio merging concierge virtual visits with destination day clinics for travelling clients.',
    specialties: ['Primary care', 'Virtual-first', 'Concierge programs'],
    rating: 4.8,
    reviewCount: 205,
    phone: '+1 (424) 555-6630',
    email: 'team@innovativewellness.co',
    address: {
      street: '789 Elevate Blvd',
      city: 'Santa Monica',
      state: 'CA',
      postalCode: '90214',
      country: 'USA'
    },
    coordinates: {
      latitude: 34.0242,
      longitude: -118.4965
    },
    heroImage: 'assets/images/clinics/lakeside.svg',
    openingHours: 'Mon–Fri · 8:00–18:00',
    isVerified: true
  }
];

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'MD',
    specialty: 'General medicine',
    clinicId: 'clinic-health-advancement',
    biography:
      'Primary care physician coordinating integrative chronic support and catastrophic assessment travel teams.',
    experienceYears: 15,
    rating: 4.9,
    reviewCount: 248,
    avatarUrl: 'assets/search/ellipse-5-6.png',
    highlights: [
      { label: 'Catastrophic cases', value: '38 active' },
      { label: 'Home visit network', value: '6 partner orgs' }
    ],
    availability: [
      { day: 'Monday', times: ['09:00', '11:30', '16:00'] },
      { day: 'Wednesday', times: ['08:30', '14:00'] },
      { day: 'Friday', times: ['09:15', '13:30'] }
    ],
    languages: ['English'],
    acceptedPlans: ['ppo', 'direct'],
    virtualCare: true,
    feeTier: 'medium',
    gender: 'female',
    careType: 'hybrid'
  },
  {
    id: 'dr-michael-thompson',
    name: 'Dr. Michael Thompson',
    title: 'MD, FACOG',
    specialty: 'Gynecology',
    clinicId: 'clinic-connection-point',
    biography:
      'Travelling gynecologist supporting high-acuity teams with surgical consults and blended telehealth follow-up.',
    experienceYears: 18,
    rating: 4.8,
    reviewCount: 192,
    avatarUrl: 'assets/search/ellipse-5-7.png',
    highlights: [
      { label: 'Regional programs', value: '12' },
      { label: 'Surgical follow-up', value: 'Under 24h' }
    ],
    availability: [
      { day: 'Tuesday', times: ['10:00', '13:30', '17:30'] },
      { day: 'Thursday', times: ['09:15', '12:45'] }
    ],
    languages: ['English'],
    acceptedPlans: ['ppo', 'hmo'],
    virtualCare: true,
    feeTier: 'high',
    gender: 'male',
    careType: 'hybrid'
  },
  {
    id: 'dr-emily-carter',
    name: 'Dr. Emily Carter',
    title: 'MD',
    specialty: 'Dermatology',
    clinicId: 'clinic-community-wellness',
    biography:
      'Dermatologist leading the community outreach initiative with rapid response telederm consults.',
    experienceYears: 12,
    rating: 4.7,
    reviewCount: 168,
    avatarUrl: 'assets/search/ellipse-5-8.png',
    highlights: [
      { label: 'Community events', value: '42/year' },
      { label: 'Virtual triage', value: 'Under 10 min' }
    ],
    availability: [
      { day: 'Monday', times: ['08:30', '11:00', '15:00'] },
      { day: 'Wednesday', times: ['09:45', '13:30'] },
      { day: 'Saturday', times: ['10:00', '12:00'] }
    ],
    languages: ['English', 'Spanish'],
    acceptedPlans: ['ppo'],
    virtualCare: true,
    feeTier: 'medium',
    gender: 'female',
    careType: 'virtual'
  },
  {
    id: 'dr-david-lee',
    name: 'Dr. David Lee',
    title: 'PhD, MLS',
    specialty: 'Laboratory diagnostics',
    clinicId: 'clinic-innovative-care',
    biography:
      'Diagnostics lead specialising in catastrophic assessment kits, mobile sample collection and rapid reporting.',
    experienceYears: 11,
    rating: 4.6,
    reviewCount: 124,
    avatarUrl: 'assets/search/ellipse-5-9.png',
    highlights: [
      { label: 'Mobile teams', value: '4 active' },
      { label: 'Turnaround time', value: 'Under 18 hrs' }
    ],
    availability: [
      { day: 'Tuesday', times: ['07:30', '09:00', '13:30'] },
      { day: 'Thursday', times: ['08:00', '11:30', '16:00'] }
    ],
    languages: ['English', 'Korean'],
    acceptedPlans: ['direct'],
    virtualCare: false,
    feeTier: 'low',
    gender: 'male',
    careType: 'inperson'
  },
  {
    id: 'dr-sarah-ecohart',
    name: 'Dr. Sarah Ecohart',
    title: 'MD',
    specialty: 'Gynecology',
    clinicId: 'clinic-progressive-health',
    biography:
      'Gynecologist bringing collaborative surgical teams and recovery roadmaps to progressive health systems.',
    experienceYears: 17,
    rating: 4.9,
    reviewCount: 208,
    avatarUrl: 'assets/search/ellipse-5-11.png',
    highlights: [
      { label: 'Surgical collaborations', value: '28' },
      { label: 'Recovery pathways', value: '92% adherence' }
    ],
    availability: [
      { day: 'Monday', times: ['09:00', '13:30'] },
      { day: 'Thursday', times: ['10:45', '15:00'] }
    ],
    languages: ['English'],
    acceptedPlans: ['ppo', 'hmo'],
    virtualCare: true,
    feeTier: 'high',
    gender: 'female',
    careType: 'hybrid'
  },
  {
    id: 'dr-emily-greenfield',
    name: 'Dr. Emily Greenfield',
    title: 'MD',
    specialty: 'General medicine',
    clinicId: 'clinic-innovative-wellness',
    biography:
      'Virtual-first primary care physician coordinating concierge travel programmes for complex cases.',
    experienceYears: 13,
    rating: 4.8,
    reviewCount: 176,
    avatarUrl: 'assets/search/ellipse-5-10.png',
    highlights: [
      { label: 'Travel programmes', value: '18 active' },
      { label: 'Virtual response', value: 'Under 5 mins' }
    ],
    availability: [
      { day: 'Tuesday', times: ['09:00', '11:45', '16:00'] },
      { day: 'Friday', times: ['08:30', '12:00'] }
    ],
    languages: ['English', 'French'],
    acceptedPlans: ['ppo', 'direct'],
    virtualCare: true,
    feeTier: 'medium',
    gender: 'female',
    careType: 'virtual'
  }
];

export const MOCK_ORGANIZATIONS: Organization[] = [
  {
    id: 'org-northstar',
    name: 'Northstar Health Alliance',
    location: 'Denver, CO',
    accreditationLevel: 'Level 3 Coordinated Care',
    logoUrl: 'assets/images/organizations/northstar.svg',
    focusAreas: ['Population health', 'Telehealth expansion', 'Behavioral health integration']
  }
];

export const MOCK_ASSESSMENTS: Assessment[] = [
  {
    id: 'assessment-1',
    organizationId: 'org-northstar',
    title: 'Coordinated Care Readiness Review',
    summary: '360° review of cross-team routing, shared care plans and escalations readiness.',
    category: 'Care coordination',
    progress: 86,
    updatedAt: '2024-03-18T10:15:00Z',
    reviewer: 'Harper Sloan',
    actions: ['Schedule interdisciplinary debrief', 'Publish shared protocols']
  },
  {
    id: 'assessment-2',
    organizationId: 'org-northstar',
    title: 'Digital Front Door Audit',
    summary: 'Benchmark virtual intake, asynchronous touchpoints and language accessibility.',
    category: 'Digital transformation',
    progress: 72,
    updatedAt: '2024-03-11T14:05:00Z',
    reviewer: 'Kimber Reyes',
    actions: ['Launch Spanish onboarding', 'Integrate triage chatbot insights']
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'rev-health-1',
    doctorId: 'dr-sarah-johnson',
    author: 'Morgan Ellis',
    role: 'Catastrophic care coordinator',
    rating: 5,
    createdAt: '2024-02-12T09:20:00Z',
    headline: 'Coordinating complex travel cases with ease',
    comment:
      'Dr. Johnson keeps every travelling provider aligned and the handoffs flawless. Families feel supported wherever we deploy.',
    tags: ['Hybrid care', 'Travel support', 'Case leadership']
  },
  {
    id: 'rev-connection-1',
    doctorId: 'dr-michael-thompson',
    author: 'Alisha Rowan',
    role: 'Surgical operations lead',
    rating: 5,
    createdAt: '2024-03-01T14:05:00Z',
    headline: 'Surgical follow-up that stays personal',
    comment:
      'The Connection Point team routes recovery updates within hours and Dr. Thompson is proactive with every consult.',
    tags: ['Surgery', 'Follow-up', 'Telehealth']
  },
  {
    id: 'rev-community-1',
    doctorId: 'dr-emily-carter',
    author: 'Jerome Castillo',
    role: 'Community outreach director',
    rating: 4,
    createdAt: '2024-02-24T11:10:00Z',
    headline: 'Derm outreach that scales',
    comment:
      'Pop-up screenings feed directly into telederm consults and families get answers quickly. Looking forward to more weekend slots.',
    tags: ['Outreach', 'Dermatology', 'Telederm']
  }
];

export const MOCK_FILTERS: FilterGroup[] = [
  {
    id: 'care-mode',
    title: 'Care delivery mode',
    description: 'Match specialists by how they see patients.',
    type: 'multi',
    options: [
      { id: 'filter-inperson', label: 'In-person visits', value: 'inperson', icon: 'maps_home_work' },
      { id: 'filter-virtual', label: 'Virtual first', value: 'virtual', icon: 'videocam' },
      { id: 'filter-hybrid', label: 'Hybrid', value: 'hybrid', icon: 'sync_alt' }
    ]
  },
  {
    id: 'accessibility',
    title: 'Accessibility preferences',
    type: 'multi',
    options: [
      { id: 'filter-evening', label: 'Evening hours', value: 'evening', icon: 'nightlight' },
      { id: 'filter-weekend', label: 'Weekend appointments', value: 'weekend', icon: 'event' },
      { id: 'filter-transport', label: 'Transit friendly', value: 'transit', icon: 'directions_subway' },
      { id: 'filter-multilingual', label: 'Multilingual team', value: 'multilingual', icon: 'language' }
    ]
  },
  {
    id: 'insurance',
    title: 'Coverage alignment',
    type: 'single',
    options: [
      { id: 'filter-hmo', label: 'HMO', value: 'hmo' },
      { id: 'filter-ppo', label: 'PPO', value: 'ppo' },
      { id: 'filter-direct', label: 'Direct care', value: 'direct' }
    ]
  }
];

export const MOCK_SEARCH_RESULTS: SearchResult[] = MOCK_DOCTORS.map((doctor) => ({
  doctor,
  clinic: MOCK_CLINICS.find((clinic) => clinic.id === doctor.clinicId)!,
  distanceInMinutes: 12 + Math.floor(Math.random() * 18),
  nextAvailable: doctor.availability[0]?.times[0] ?? '09:00'
}));

export const MOCK_PROFILE: UserProfile = {
  id: 'user-coordinator',
  name: 'Morgan Ellis',
  email: 'morgan.ellis@docroster.com',
  role: 'coordinator',
  avatarUrl: 'assets/images/avatars/morgan-ellis.svg',
  organization: 'DocRoster Pilot Network',
  bio: 'Care operations coordinator aligning teams, analytics and community insights for seamless patient journeys.',
  skills: ['Care coordination', 'Data storytelling', 'Quality improvement'],
  notificationsEnabled: true,
  preferredLanguage: 'English',
  lastLogin: '2024-03-20T08:45:00Z',
  phone: '+1 (416) 123-9870'
};

export const MOCK_COMMUNITY_METRICS = {
  membersServed: 18452,
  activeClinics: MOCK_CLINICS.length,
  availableSpecialists: MOCK_DOCTORS.length,
  averageSatisfaction: 4.82
};
