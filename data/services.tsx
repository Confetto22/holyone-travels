import React from "react";
import { CheckCircle2, FileText, Globe, GraduationCap } from "lucide-react";

// --- Types ---
export type ServiceCategory = "main" | "micro" | "digital";

export interface RichContent {
  intro?: string;
  whyChooseThis?: string[];
  benefits?: { title: string; desc: string }[];
}

export interface ServiceSpecs {
  processingTime?: string;
  validity?: string;
  docSupport?: string;
  consultation?: string;
  language?: string;
  groupSize?: string;
  category?: string;
  // Deprecated/Optional legacy fields kept for compatibility if needed, but intended for removal
  accommodation?: string;
  meals?: string;
  transportation?: string;
  animal?: string;
  ageRange?: string;
  season?: string;
}

export interface BaseServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  specs?: ServiceSpecs;
  longDescription?: string;
  images?: string[];
  type: ServiceCategory;
  richContent?: RichContent;
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

export type ServiceItem =
  | MainServiceItem
  | MicroServiceItem
  | DigitalServiceItem;

// --- Data ---
export const mainServices: MainServiceItem[] = [
  {
    type: "main",
    id: "1",
    title: "Study Visa Support",
    description:
      "Perfect for basic guidance. Eligibility assessment, school admission guidance, and priority support.",
    longDescription:
      "Our Study Visa Support Package is ideal for those who need essential guidance to begin their visa journey. This package includes eligibility assessment, school admission guidance, email support, and priority WhatsApp support to answer your questions promptly.",
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    features: [
      "Eligibility Assessment",
      "School Admission Guidance",
      "Email Support",
      "Priority WhatsApp Support",
    ],
    ctaLabel: "Get Started",
    price: 100,
    oldPrice: 150,
    specs: {
      category: "Student Visa",
      processingTime: "2-4 Weeks",
      validity: "Duration of Course",
      docSupport: "Full Review",
      consultation: "Unlimited",
      language: "English",
    },
    images: [
      "https://images.unsplash.com/photo-1554224311-beee2ece0e0a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    ],
    richContent: {
      intro:
        "Navigating the complex world of international student visas can be daunting. Our Study Visa Support service weeds out the confusion, offering you a clear, streamlined path to your educational dreams abroad. We handle the bureaucratic heavy lifting so you can focus on your studies.",
      whyChooseThis: [
        "Personalized University Matching to find your best fit.",
        "Comprehensive document verification to minimize rejection risk.",
        "Expert guidance on writing compelling Statements of Purpose.",
        "Pre-departure briefings to help you settle in smoothy.",
      ],
    },
  },
  {
    type: "main",
    id: "2",
    title: "Work Visa Assistance",
    description:
      "For students & workers. Includes everything in Starter plus SOP review, resume formatting, and step-by-step guidance.",
    longDescription:
      "The Work Visa Assistance Package is designed for students and workers who need comprehensive support. Get everything in the Starter Package plus expert SOP review, professional resume formatting, step-by-step application guidance, and dedicated priority WhatsApp support throughout your visa journey.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    features: [
      "Everything in Starter",
      "SOP Review",
      "Resume Formatting",
      "Step-by-Step Guidance",
      "Priority WhatsApp Support",
    ],
    ctaLabel: "Choose Professional",
    price: 300,
    oldPrice: 700,
    specs: {
      category: "Work Permit",
      processingTime: "3-6 Months",
      validity: "1-2 Years",
      docSupport: "Employer LIA Check",
      consultation: "Priority Support",
      language: "English",
    },
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1526721966451-226f140623cd?auto=format&fit=crop&q=80&w=1200",
    ],
    richContent: {
      intro:
        "Securing a work visa is a pivotal step in advancing your global career. Our Work Visa Assistance program is designed to bridge the gap between your skills and international opportunities. We provide rigorous support to ensure your application stands out and meets all regulatory requirements.",
      whyChooseThis: [
        "In-depth assessment of your professional profile and eligibility.",
        "Strategic advice on employer sponsorship and labor market impact assessments.",
        "Assistance with gathering and certifying localized documents.",
        "Interview coaching tailored to work visa protocols.",
      ],
    },
  },
  {
    type: "main",
    id: "4",
    title: "School Admission & Placement Support",
    description:
      "Premium end-to-end support. Complete application management, unlimited consultation, dedicated case officer, and full visa coaching.",
    longDescription:
      "Our Full-Service Package offers premium, white-glove service for your entire visa journey. From initial consultation to visa approval, you'll have a dedicated case officer managing every detail. Includes unlimited consultations, job search support (if applicable), interview preparation, full visa coaching, and dedicated take-off support to ensure a smooth transition.",
    icon: <Globe className="w-8 h-8 text-white" />,
    features: [
      "Everything in Professional",
      "Unlimited Consultation",
      "Job Search Support (if applicable)",
      "Dedicated Case Officer",
      "Interview Preparation",
      "Full Visa Coaching",
      "Dedicated Take-off Support",
    ],
    ctaLabel: "Get Premium Support",
    price: 1000,
    oldPrice: 3000,
    specs: {
      category: "Admission",
      processingTime: "Rolling Intake",
      validity: "Program Duration",
      docSupport: "Transcript Review",
      consultation: "Dedicated Officer",
      language: "English",
    },
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=1200",
    ],
    richContent: {
      intro:
        "Our School Admission & Placement Support is a holistic service for students aiming for top-tier institutions. We don't just help you apply; we help you succeed. From selecting the right course to securing your acceptance letter, we are your partners in academic excellence.",
      whyChooseThis: [
        "Access to a vast network of partner universities and colleges.",
        "Guidance on scholarship applications and financial aid.",
        "Review of academic transcripts and extracurricular achievements.",
        "Continuous support until you enroll and start your classes.",
      ],
    },
  },
  {
    type: "main",
    id: "3",
    title: "Tourist/Visitor Visa Processing",
    description:
      "Premium end-to-end support. Complete application management, unlimited consultation, dedicated case officer, and full visa coaching.",
    longDescription:
      "Our Full-Service Package offers premium, white-glove service for your entire visa journey. From initial consultation to visa approval, you'll have a dedicated case officer managing every detail. Includes unlimited consultations, job search support (if applicable), interview preparation, full visa coaching, and dedicated take-off support to ensure a smooth transition.",
    icon: <Globe className="w-8 h-8 text-white" />,
    features: [
      "Everything in Professional",
      "Unlimited Consultation",
      "Job Search Support (if applicable)",
      "Dedicated Case Officer",
      "Interview Preparation",
      "Full Visa Coaching",
      "Dedicated Take-off Support",
    ],
    ctaLabel: "Get Premium Support",
    price: 1000,
    oldPrice: 3000,
    specs: {
      category: "Visitor Visa",
      processingTime: "15-30 Days",
      validity: "Up to 6 Months",
      docSupport: "Itinerary Helper",
      consultation: "Visa Strategy",
      groupSize: "Individual/Family",
    },
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=1200",
    ],
    richContent: {
      intro:
        "Whether it's for leisure, visiting family, or exploring new cultures, our Tourist Visa Processing service ensures your travel plans go smoothly. We simplify the application process, helping you present a strong case for your temporary stay.",
      whyChooseThis: [
        "Clear checklists of required documents based on your destination.",
        "Itinerary planning assistance to support your visa application.",
        "Advice on demonstrating strong ties to your home country.",
        "Fast-track processing options for urgent travel needs.",
      ],
    },
  },
];

export const microServices: MicroServiceItem[] = [
  {
    type: "micro",
    id: "101",
    title: "Visa Eligibility Check",
    description: "Quickly verify your eligibility for various visa categories.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#6CB43F]" />,
    price: 20,
    specs: {
      category: "Consultation",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "micro",
    id: "102",
    title: "Document Review",
    description: "Professional review of your travel or application documents.",
    icon: <FileText className="w-6 h-6 text-[#6CB43F]" />,
    price: 30,
    specs: {
      category: "Legal",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "micro",
    id: "103",
    title: "SOP/Motivation Letter",
    description:
      "Expert crafting and review of your Statement of Purpose or motivation letter.",
    icon: <FileText className="w-6 h-6 text-[#6CB43F]" />,
    price: 40,
    specs: {
      category: "Writing",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "micro",
    id: "104",
    title: "Proof of Funds Guidance",
    description:
      "Expert guidance on preparing and presenting proof of funds documentation.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#6CB43F]" />,
    price: 20,
    specs: {
      category: "Financial",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "micro",
    id: "105",
    title: "School Admission Guidance",
    description:
      "Step-by-step support for school and university admission applications.",
    icon: <GraduationCap className="w-6 h-6 text-[#6CB43F]" />,
    price: 30,
    specs: {
      category: "Education",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "micro",
    id: "106",
    title: "Canada Job Search Support",
    description:
      "Specialized job search assistance for Canadian employment opportunities.",
    icon: <Globe className="w-6 h-6 text-[#6CB43F]" />,
    price: 50,
    specs: {
      category: "Employment",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "micro",
    id: "107",
    title: "PR Pathway Consultation",
    description:
      "Consultation on permanent residency pathways and requirements.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#6CB43F]" />,
    price: 20,
    specs: {
      category: "Immigration",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "micro",
    id: "108",
    title: "Flight Reservation",
    description: "Flight reservation service for visa application purposes.",
    icon: <Globe className="w-6 h-6 text-[#6CB43F]" />,
    price: 20,
    specs: {
      category: "Travel",
      language: "English",
      season: "All Season",
    },
  },
];

export const digitalServices: DigitalServiceItem[] = [
  {
    type: "digital",
    id: "201",
    title: "Canada Visa Guide Toolkit",
    description:
      "Comprehensive toolkit for navigating Canadian visa applications.",
    benefit: "Save time and avoid common mistakes.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=60",
    price: 25,
    specs: {
      category: "E-Book",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "202",
    title: "Austria RWRV Visa Guide",
    description:
      "Complete guide for Austria Red-White-Red Card visa application.",
    benefit: "Step-by-step instructions for success.",
    image:
      "https://images.unsplash.com/photo-1761839257658-23502c67f6d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    price: 20,
    specs: {
      category: "Guide",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "203",
    title: "Portugal D7 Visa Guide",
    description: "Essential guide for Portugal D7 passive income visa.",
    benefit: "Navigate the process with confidence.",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&auto=format&fit=crop&q=60",
    price: 20,
    specs: {
      category: "Guide",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "204",
    title: "Germany Opportunity Card Guide",
    description: "Complete guide to Germany's Opportunity Card visa program.",
    benefit: "Maximize your chances of approval.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=60",
    price: 20,
    specs: {
      category: "Guide",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "205",
    title: "New Zealand Employment List",
    description: "Comprehensive employment opportunities list for New Zealand.",
    benefit: "Find job opportunities in New Zealand.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=60",
    price: 25,
    specs: {
      category: "Roadmap",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "206",
    title: "Conference Visa Strategy Guide",
    description:
      "Strategic guide for conference and business visa applications.",
    benefit: "Attend conferences worldwide.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60",
    price: 30,
    specs: {
      category: "Database",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "207",
    title: "Conference Attendance Checklist",
    description: "Essential checklist for conference attendance and visa prep.",
    benefit: "Never miss important details.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60",
    price: 15,
    specs: {
      category: "Strategy Guide",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "208",
    title: "Relocation Checklist",
    description: "Complete checklist for international relocation planning.",
    benefit: "Organized move, stress-free.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=60",
    price: 15,
    specs: {
      category: "Checklist",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "209",
    title: "Relocation Students Guide",
    description: "Essential guide for students relocating internationally.",
    benefit: "Smooth transition for students.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=60",
    price: 15,
    specs: {
      category: "Checklist",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "210",
    title: "Student Survival Guide",
    description: "Essential survival guide for international students.",
    benefit: "Thrive in your new environment.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&fit=crop&q=60",
    price: 15,
    specs: {
      category: "Guide",
      language: "English",
      season: "All Season",
    },
  },
  {
    type: "digital",
    id: "211",
    title: "Starting Life Abroad Guide",
    description: "Comprehensive guide for starting your new life abroad.",
    benefit: "Settle in with confidence.",
    image:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=600&auto=format&fit=crop&q=60",
    price: 20,
    specs: {
      category: "Guide",
      language: "English",
      season: "All Season",
    },
  },
];

export const getAllServices = (): ServiceItem[] => {
  return [...mainServices, ...microServices, ...digitalServices];
};

export const getServiceById = (id: string): ServiceItem | undefined => {
  return getAllServices().find((s) => s.id === id);
};
