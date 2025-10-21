import { Doctor } from './doctor.model';
import { Clinic } from './clinic.model';

export interface SearchResult {
  doctor: Doctor;
  clinic: Clinic;
  distanceInMinutes: number;
  nextAvailable: string;
}
