import React from "react";
import {
  CheckCircle2,
  FileText,
  Globe,
  GraduationCap,
} from "lucide-react";

// --- Types ---
export type ServiceCategory = "main" | "micro" | "digital";

export interface ServiceSpecs {
  accommodation?: string;
  meals?: string;
  transportation?: string;
  groupSize?: string;
  language?: string;
  animal?: string;
  ageRange?: string;
  season?: string;
  category?: string;
}

export interface BaseServiceItem {
  id: number;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  specs?: ServiceSpecs;
  longDescription?: string;
  images?: string[];
  type: ServiceCategory;
}

export interface MainServiceItem extends BaseServiceItem {
  type: "main";
  icon: React.ReactNode;
  features: string[];
  ctaLabel: string;
}

export interface MicroServiceItem extends BaseServiceItem {
  type: "micro";
  icon: React.ReactNode;
}

export interface DigitalServiceItem extends BaseServiceItem {
  type: "digital";
  benefit: string;
  image: string;
}

export type ServiceItem = MainServiceItem | MicroServiceItem | DigitalServiceItem;

// --- Data ---
export const mainServices: MainServiceItem[] = [
  {
    type: "main",
    id: 1,
    title: "Study Abroad Assistance",
    description:
      "Comprehensive guidance for securing admission in top universities worldwide.",
    longDescription: "Our Study Abroad Assistance program is designed to guide students through every step of their international education journey. From selecting the right university to crafting the perfect Statement of Purpose (SOP), we ensure you have the best chance of acceptance into your dream institution.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    features: ["University Selection", "SOP Editing", "App Submission"],
    ctaLabel: "Start Application",
    price: 750,
    oldPrice: 799,
    specs: {
      category: "Education",
      language: "English",
      groupSize: "1-1",
      ageRange: "16-35 (Year)",
      season: "All Season",
    },
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1526721966451-226f140623cd?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    type: "main",
    id: 2,
    title: "Global Relocation",
    description:
      "Seamless relocation services for families moving to a new country.",
    longDescription: "Moving to a new country can be overwhelming. Our Global Relocation service takes the stress out of the process. We handle housing, orientation, and even airport pickup to ensure you settle in comfortably.",
    icon: <Globe className="w-8 h-8 text-white" />,
    features: ["Orientation", "Housing", "Airport Pickup"],
    ctaLabel: "Get Relocated",
    price: 1200,
    oldPrice: 1500,
    specs: {
      category: "Relocation",
      language: "English, Spanish",
      groupSize: "Family",
      transportation: "Transfer Included",
      season: "All Season",
    },
     images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=1200",
       "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=1200"
    ]
  },
];

export const microServices: MicroServiceItem[] = [
  {
    type: "micro",
    id: 101, // IDs should be unique across all services if possible, or handled by type
    title: "Visa Eligibility Check",
    description: "Quickly verify your eligibility for various visa categories.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#6CB43F]" />,
    price: 29,
    specs: {
        category: "Consultation",
        language: "English",
        season: "All Season"
    }
  },
  {
    type: "micro",
    id: 102,
    title: "Document Review",
    description: "Professional review of your travel or application documents.",
    icon: <FileText className="w-6 h-6 text-[#6CB43F]" />,
    price: 49,
    oldPrice: 69,
    specs: {
        category: "Legal",
        language: "English",
        season: "All Season"
    }
  },
  {
    type: "micro",
    id: 103,
    title: "Itinerary Planning",
    description: "Custom day-by-day travel itinerary planning.",
    icon: <Globe className="w-6 h-6 text-[#6CB43F]" />,
    price: 39,
    specs: {
        category: "Travel",
        language: "English",
        season: "All Season",
        duration: "Variable"
    } as any // flexible
  },
];

export const digitalServices: DigitalServiceItem[] = [
  {
    type: "digital",
    id: 201,
    title: "The Ultimate Expat Guide",
    description: "A comprehensive PDF guide about living abroad.",
    benefit: "Save $1000s in your first month.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=60",
    price: 19.99,
    specs: {
        category: "E-Book",
        language: "English",
        season: "All Season"
    }
  },
  {
    type: "digital",
    id: 202,
    title: "Student Visa Checklist",
    description: "Essential checklist ensuring you never miss a document.",
    benefit: "Reduce application anxiety.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee13d643?w=600&auto=format&fit=crop&q=60",
    price: 9.99,
    oldPrice: 15.99,
     specs: {
        category: "Checklist",
        language: "English",
        season: "All Season"
    }
  },
];

export const getAllServices = (): ServiceItem[] => {
    return [...mainServices, ...microServices, ...digitalServices];
}

export const getServiceById = (id: number): ServiceItem | undefined => {
    return getAllServices().find(s => s.id === id);
}
