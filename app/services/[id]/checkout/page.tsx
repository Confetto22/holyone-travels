"use client";

import React, { useState, use } from "react";
import { useRouter } from "next/navigation";
import { getServiceById } from "@/data/services";
import { CheckCircle2, Circle, ArrowLeft, ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/data/services";

interface PageProps {
  params: Promise<{ id: string }>;
}

const CheckoutPage = ({ params }: PageProps) => {
  const resolvedParams = use(params);
  const serviceId = resolvedParams.id;
  const service = getServiceById(serviceId);
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    fullName: "",
    email: "",
    // Step 2: Travel Details
    destination: "",
    travelDate: "",
    // Step 3: Document Information
    passportNumber: "",
    nationality: "",
    // Step 4: Additional Details
    purposeOfTravel: "",
    additionalNotes: "",
  });

  const totalSteps = 4;

  const steps = [
    {
      id: 1,
      title: "Personal Information",
      description: "Enter your basic details",
    },
    {
      id: 2,
      title: "Travel Details",
      description: "Provide your travel information",
    },
    {
      id: 3,
      title: "Document Information",
      description: "Share your document details",
    },
    {
      id: 4,
      title: "Review & Confirmation",
      description: "Review and confirm your application",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Form submitted successfully! (This is a demo)");
  };

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Service not found</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Service
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {service.title} - Application Form
          </h1>
          <p className="text-gray-600">
            Please complete all steps to submit your visa application
          </p>
        </div>

        {/* Step Indicator */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                      currentStep > step.id
                        ? "bg-primary border-primary text-white"
                        : currentStep === step.id
                        ? "border-primary text-primary bg-primary/10"
                        : "border-gray-300 text-gray-400 bg-white"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <span className="font-semibold">{step.id}</span>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.id
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-all ${
                      currentStep > step.id ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Personal Information
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Please provide your basic personal details for the visa
                    application.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name as it appears on your passport"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Travel Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Travel Details
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Tell us about your planned travel and destination.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="destination"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Destination Country{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      placeholder="Enter the country you plan to visit"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="travelDate"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Planned Travel Date{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Document Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Document Information
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Provide details about your travel documents.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="passportNumber"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Passport Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="passportNumber"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your passport number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nationality"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      placeholder="Enter your nationality"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Review & Confirmation
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Please review your information and provide any additional
                    details.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="purposeOfTravel"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Purpose of Travel <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="purposeOfTravel"
                      name="purposeOfTravel"
                      value={formData.purposeOfTravel}
                      onChange={handleInputChange}
                      placeholder="Describe the purpose of your travel (e.g., tourism, business, study, etc.)"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="additionalNotes"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Any additional information you'd like to share..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Summary Card */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Application Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium text-gray-900">
                        {service.title}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium text-gray-900">
                        {formData.fullName || "Not provided"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium text-gray-900">
                        {formData.email || "Not provided"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Destination:</span>
                      <span className="font-medium text-gray-900">
                        {formData.destination || "Not provided"}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-300">
                      <span className="text-lg font-semibold text-gray-900">
                        Total:
                      </span>
                      <span className="text-lg font-semibold text-primary">
                        ${service.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-all"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
