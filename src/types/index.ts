export type ProductCategory = 
  | 'womens_health'
  | 'mens_health'
  | 'reproductive'
  | 'general_wellness';

export interface MedicineProduct {
  id: string;
  name: string;
  urduName?: string;
  genericName: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  packageSize: string;
  inStock: boolean;
  prescriptionRequired: boolean;
  verifiedIngredients: string[];
  approvedUses: string[];
  safetyInfo: string;
  contraindications: string[];
  possibleSideEffects: string[];
  dosageGuide: string;
  manufacturer: string;
  drapRegNumber?: string;
  image: string;
}

export interface HealthArticle {
  id: string;
  title: string;
  urduTitle?: string;
  category: string;
  readTime: string;
  publishDate: string;
  authorDoctor: string;
  authorRole: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
  }[];
  keyTakeaways: string[];
  clinicalWarning?: string;
  image: string;
}

export interface CartItem {
  product: MedicineProduct;
  quantity: number;
}

export interface PrescriptionSubmission {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  doctorName?: string;
  notes?: string;
  fileName: string;
  fileSize: string;
  filePreviewUrl?: string;
  timestamp: string;
  status: 'Under Review' | 'Verified' | 'Requires Clarification';
}
