import { Assessment, Organization } from '../models/assessment.model';
import { Clinic } from '../models/clinic.model';
import { Doctor } from '../models/doctor.model';
import { FilterGroup } from '../models/filter.model';
import { Review } from '../models/review.model';
import { SearchResult } from '../models/search-result.model';
import { UserProfile } from '../models/user-profile.model';

export const MOCK_CLINICS: Clinic[] = [
  {
    id: 'clinic-aurora',
    name: 'Aurora Integrative Care',
    description: 'Whole-person medical practice blending advanced diagnostics with lifestyle medicine and personalized coaching.',
    specialties: ['Primary care', 'Lifestyle medicine', 'Virtual visits'],
    rating: 4.9,
    reviewCount: 268,
    phone: '+1 (415) 555-1845',
    email: 'hello@aurora.care',
    address: {
      street: '580 Market Street',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94104',
      country: 'USA'
    },
    coordinates: {
      latitude: 37.79248,
      longitude: -122.4012
    },
    heroImage: 'assets/images/clinics/aurora-clinic.svg',
    openingHours: 'Mon–Fri · 7:00–19:00',
    isVerified: true
  },
  {
    id: 'clinic-riverbend',
    name: 'Riverbend Pediatrics Collective',
    description: 'Community-first pediatric group with collaborative team care, extended hours and on-call guidance.',
    specialties: ['Pediatrics', 'Care coordination', 'Weekend clinic'],
    rating: 4.7,
    reviewCount: 184,
    phone: '+1 (206) 555-9087',
    email: 'support@riverbendpeds.org',
    address: {
      street: '910 Union Street',
      city: 'Seattle',
      state: 'WA',
      postalCode: '98101',
      country: 'USA'
    },
    coordinates: {
      latitude: 47.6101,
      longitude: -122.3321
    },
    heroImage: 'assets/images/clinics/riverbend.svg',
    openingHours: 'Mon–Sat · 8:00–20:00',
    isVerified: true
  },
  {
    id: 'clinic-lakeside',
    name: 'Lakeside Women’s Health',
    description: 'Evidence-led obstetrics and gynecology practice featuring remote monitoring and on-site diagnostics.',
    specialties: ['Obstetrics', 'Gynecology', 'Telehealth'],
    rating: 4.8,
    reviewCount: 312,
    phone: '+1 (312) 555-7400',
    email: 'contact@lakesidewh.com',
    address: {
      street: '220 West Ontario Street',
      city: 'Chicago',
      state: 'IL',
      postalCode: '60654',
      country: 'USA'
    },
    coordinates: {
      latitude: 41.8938,
      longitude: -87.6347
    },
    heroImage: 'assets/images/clinics/lakeside.svg',
    openingHours: 'Mon–Fri · 8:30–17:30',
    isVerified: false
  }
];

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: 'dr-lopez',
    name: 'Dr. Mariah López',
    title: 'MD, IFMCP',
    specialty: 'Functional medicine',
    clinicId: 'clinic-aurora',
    biography: 'Dr. López leads Aurora Integrative Care with a focus on whole-person medicine, precision diagnostics and sustainable habit design.',
    experienceYears: 14,
    rating: 4.9,
    reviewCount: 142,
    avatarUrl: 'assets/images/doctors/mariah-lopez.svg',
    highlights: [
      { label: 'Programs designed', value: '58' },
      { label: 'Community rating', value: '4.9/5' },
      { label: 'Virtual consults', value: 'Yes' }
    ],
    availability: [
      { day: 'Monday', times: ['09:30', '11:00', '15:30'] },
      { day: 'Wednesday', times: ['08:45', '13:00'] },
      { day: 'Friday', times: ['10:00', '12:30', '16:30'] }
    ],
    languages: ['English', 'Spanish'],
    acceptedPlans: ['ppo', 'direct'],
    virtualCare: true
  },
  {
    id: 'dr-fujiwara',
    name: 'Dr. Kenji Fujiwara',
    title: 'MD',
    specialty: 'Pediatric primary care',
    clinicId: 'clinic-riverbend',
    biography: 'Pediatrician focused on collaborative family partnerships, neurodiversity affirming care and rapid access messaging.',
    experienceYears: 11,
    rating: 4.8,
    reviewCount: 97,
    avatarUrl: 'assets/images/doctors/kenji-fujiwara.svg',
    highlights: [
      { label: 'Patient panel', value: '420 families' },
      { label: 'After-hours chat', value: 'Under 15 min' }
    ],
    availability: [
      { day: 'Tuesday', times: ['09:00', '13:30', '16:00'] },
      { day: 'Thursday', times: ['10:15', '14:00', '18:30'] }
    ],
    languages: ['English', 'Japanese'],
    acceptedPlans: ['hmo', 'ppo'],
    virtualCare: true
  },
  {
    id: 'dr-okafor',
    name: 'Dr. Amara Okafor',
    title: 'DO, FACOG',
    specialty: 'Obstetrics & gynecology',
    clinicId: 'clinic-lakeside',
    biography: 'Board certified obstetrician championing equitable maternal care, postpartum support and remote monitoring.',
    experienceYears: 16,
    rating: 4.9,
    reviewCount: 188,
    avatarUrl: 'assets/images/doctors/amara-okafor.svg',
    highlights: [
      { label: 'Deliveries', value: '1,240+' },
      { label: 'Cesarean rate', value: '12%' }
    ],
    availability: [
      { day: 'Monday', times: ['08:00', '13:30'] },
      { day: 'Wednesday', times: ['10:45', '15:15'] },
      { day: 'Friday', times: ['09:30', '14:45'] }
    ],
    languages: ['English', 'Igbo'],
    acceptedPlans: ['ppo'],
    virtualCare: false
  },
  {
    id: 'dr-fernandez',
    name: 'Dr. Leo Fernández',
    title: 'PhD, PT',
    specialty: 'Sports physical therapy',
    clinicId: 'clinic-aurora',
    biography: 'Movement specialist using digital twins and progressive rehab for endurance athletes and performing artists.',
    experienceYears: 9,
    rating: 4.7,
    reviewCount: 63,
    avatarUrl: 'assets/images/doctors/leo-fernandez.svg',
    highlights: [
      { label: 'Return-to-play', value: '92%' },
      { label: 'Avg recovery', value: '4.5 weeks' }
    ],
    availability: [
      { day: 'Tuesday', times: ['08:30', '10:30', '15:00'] },
      { day: 'Thursday', times: ['09:00', '13:30', '17:00'] }
    ],
    languages: ['English', 'Spanish'],
    acceptedPlans: ['direct'],
    virtualCare: true
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
    id: 'rev-aurora-1',
    doctorId: 'dr-lopez',
    author: 'Riley Cameron',
    role: 'Chronic care member',
    rating: 5,
    createdAt: '2024-02-02T09:00:00Z',
    headline: 'Care plans that finally connect the dots',
    comment: 'DocRoster matched me with Dr. López and I finally have a plan that connects nutrition, meds and stress tracking. Virtual check-ins are so easy.',
    tags: ['Coaching', 'Virtual care', 'Lab syncing']
  },
  {
    id: 'rev-aurora-2',
    doctorId: 'dr-fernandez',
    author: 'Keisha B.',
    role: 'Marathoner',
    rating: 5,
    createdAt: '2024-01-18T15:30:00Z',
    headline: 'Back in my training cycle weeks sooner',
    comment: 'The rehab plan updated after every wearable upload and the messaging team coached me through the sticky parts. Felt like a pro team.',
    tags: ['Wearables', 'Recovery', 'Community']
  },
  {
    id: 'rev-riverbend-1',
    doctorId: 'dr-fujiwara',
    author: 'Taylor & Jordan',
    role: 'Parents of a neurodivergent kid',
    rating: 4,
    createdAt: '2024-03-05T12:10:00Z',
    headline: 'Support that spans school and home',
    comment: 'We have direct chat with our care navigator and Dr. Fujiwara loops in therapists quickly. Only wish weekend clinic had more slots.',
    tags: ['Care team', 'Messaging', 'Family support']
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
  lastLogin: '2024-03-20T08:45:00Z'
};

export const MOCK_COMMUNITY_METRICS = {
  membersServed: 18452,
  activeClinics: MOCK_CLINICS.length,
  availableSpecialists: MOCK_DOCTORS.length,
  averageSatisfaction: 4.82
};
