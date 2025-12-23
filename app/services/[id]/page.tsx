import React from "react";
import { notFound } from "next/navigation";
import PageHead from "@/components/common/page-head";
import { getServiceById } from "@/data/services";
import { PriceCard, CustomizeCard } from "@/components/services-page/ServiceSidebar";
import { ServiceInfoGrid } from "@/components/services-page/ServiceInfoGrid";
import LocationCarousel from "@/components/services-page/LocationCarousel";

// Define PageProps correctly for Next.js 13+ App Router
interface PageProps {
  params: Promise<{ id: string }>;
}

const ServiceDetailPage = async ({ params }: PageProps) => {
  // Await params in newer Next.js versions if needed, or access directly. 
  // Since we are typing it as Promise, we should await it.
  const resolvedParams = await params;
  const serviceId = parseInt(resolvedParams.id);
  const service = getServiceById(serviceId);

  if (!service) {
    notFound();
  }

  // Use the image from the service itself if available, or a fallback, or a specific header image
  // For now using a generic travel fallback or one from the service images
  const headerImage = service.images?.[0] || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200";

  return (
    <section>
      <PageHead
        prevPage="Services"
        prevLink="/services"
        bgImg={headerImage}
        currPage={service.title}
      />

      <div className="py-20 md:py-28 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Tour Package
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {service.longDescription || service.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                   Experience the best of what {service.title} has to offer. We meticulously plan every detail to ensure your journey is seamless, memorable, and tailored to your specific needs.
                </p>
              </div>

              <ServiceInfoGrid specs={service.specs} />

              <LocationCarousel images={service.images} />
              
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-1/3 md:sticky top-8">
              <PriceCard service={service} />
              <CustomizeCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
