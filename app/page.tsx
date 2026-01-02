import Hero from "@/components/homepage/hero";
import Trendy from "@/components/homepage/trendy";
import About from "@/components/homepage/about";
import Activities from "@/components/homepage/activities";
import Packages from "@/components/homepage/packages";
import Testimonials from "@/components/homepage/testimonials";
import Features from "@/components/homepage/features";
import Link from "next/link";
import Faq from "@/components/homepage/faq";
import type { Metadata } from "next";
import ConsultationSection from "@/components/homepage/ConsultationSection";

// export const metadata: Metadata = {
//   title: "HOLYONE PATHWAY PARTNERS",
//   description:
//     "JCL Services offers quality office furniture, computer accessories, and workspace solutions in Ghana. 5-year warranty, competitive prices. Established 1993. Visit our showrooms in Kokomlemle & Accra Central.",
//   openGraph: {
//     title: "Premium Office Furniture & Workspace Solutions in Ghana",
//     description:
//       "Transform your workspace with our premium office furniture collection. Quality office furniture at affordable prices, backed by a 5-year warranty.",
//     url: "https://jclservicesltd.org",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "JCL Services - Premium Office Furniture Solutions",
//       },
//     ],
//   },
// };

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Trendy />
      <Packages />
      <About />
      {/* <Activities /> */}
      <Features />
      <ConsultationSection />

      <section className="banner bg-[url('https://gofly-wp.egenstheme.com/wp-content/uploads/2025/09/home1-offer-banner-bg.webp')] bg-cover bg-center md:bg-fixed">
        <div className="cover min-h-[90vh] p-8 flex flex-col items-center gap-5 justify-center text-white text-center">
          <p className="text-[1.2rem] font-semibold">Make Meet Happiness.</p>
          <h2 className="text-4xl md:text-6xl max-w-2xl font-bold">
            Travel isn&apos;t a luxury, it&apos;s a way of life!
          </h2>
          {/* <h3 className="text-xl font-semibold">Mr. Gabriel Haringson</h3>
          <h5>CEO, Brand</h5>
          <button className="bg-primary capitalize font-semibold py-3 px-5 rounded-3xl">
            <Link href={"#"} className="">
              grab the deal now
            </Link>
          </button> */}
        </div>
      </section>
      <Testimonials />
      <Faq />
    </main>
  );
}
