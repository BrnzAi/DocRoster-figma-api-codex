export interface Review {
  id: string;
  doctorId: string;
  author: string;
  role: string;
  rating: number;
  createdAt: string;
  headline: string;
  comment: string;
  tags: string[];
}
