export interface Assessment {
  id: string;
  organizationId: string;
  title: string;
  summary: string;
  category: string;
  progress: number;
  updatedAt: string;
  reviewer: string;
  actions: string[];
}

export interface Organization {
  id: string;
  name: string;
  location: string;
  accreditationLevel: string;
  logoUrl: string;
  focusAreas: string[];
}
