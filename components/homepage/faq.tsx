"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "@/lib/animation-variants";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const Faq = () => {
  const faqs: FAQItem[] = [
    {
      id: "services",
      question: "What Services Does Your Travel Agency Provide?",
      answer:
        "A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience. As like- Hotel booking, Flight Booking, Visa & Customized Travel Pakcge etc.",
    },
    {
      id: "customized",
      question: "Do You Offer Customized Travel Packages?",
      answer:
        "Yes, we offer fully customized travel packages tailored to your preferences, budget, and travel style. Our travel experts work closely with you to create a personalized itinerary that matches your interests and requirements.",
    },
    {
      id: "booking",
      question: "How do I book a tour or vacation package?",
      answer:
        "Booking with us is easy! You can browse our packages online, contact our travel consultants via phone or email, or visit our office. Our team will guide you through the booking process and help you choose the perfect package for your needs.",
    },
    {
      id: "visa",
      question: "Do You Provide Visa Assistance?",
      answer:
        "Yes, we provide comprehensive visa assistance services. Our team helps you with visa applications, documentation, and guidance throughout the visa process to make your travel planning as smooth as possible.",
    },
    {
      id: "insurance",
      question: "Do you provide travel insurance options?",
      answer:
        "Absolutely! We offer various travel insurance options to protect your trip investment. Our insurance plans cover trip cancellation, medical emergencies, baggage loss, and other travel-related incidents. We'll help you choose the right coverage for your journey.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            General Questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            We&apos;re committed to offering more than just products—we provide
            exceptional experiences.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="services"
            className="w-full"
          >
            {faqs.map((faq) => (
              <motion.div key={faq.id} variants={fadeInUp}>
                <AccordionItem
                  value={faq.id}
                  className="border border-gray-200 rounded-lg mb-4 px-4 data-[state=open]:border-blue-400 data-[state=open]:bg-blue-50/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
