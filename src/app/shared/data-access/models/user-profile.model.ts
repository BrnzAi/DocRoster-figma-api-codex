export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'clinician' | 'coordinator' | 'administrator' | 'patient';
  avatarUrl: string;
  organization: string;
  bio: string;
  skills: string[];
  notificationsEnabled: boolean;
  preferredLanguage: string;
  lastLogin: string;
}
