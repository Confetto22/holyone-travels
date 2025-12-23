import React from "react";
import { Phone, Mail, MapPin, CalendarDays } from "lucide-react";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const contactDetails: ContactInfoProps[] = [
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    title: "Phone",
    details: ["+990-737 621 432", "+990-137 324 465"],
  },
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Email Now",
    details: ["info@example.com", "example@example.com"],
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Location",
    details: ["168/170, Avenue 01, Old York Drive Rich Mirpur", "DOHS, Bangladesh"],
  },
  {
    icon: <CalendarDays className="w-6 h-6 text-white" />,
    title: "Opening Time",
    details: ["8:00Am - 10:Pm, Friday Close"],
  },
];

const ContactInfoCard = ({ icon, title, details }: ContactInfoProps) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-[#6CB43F] rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="text-gray-500 text-sm font-medium mb-1">{title}</h4>
      <div className="text-gray-900 font-bold text-base md:text-lg leading-snug">
        {details.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  return (
    <div className="bg-[#f7f6f2]  rounded-3xl p-8 md:p-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Reach Us Anytime
      </h2>
      <form className="space-y-6 contact_form">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name*</label>
          <input
            type="text"
            id="name"
            placeholder="Daniel Scoot"
            className="w-full px-4 py-3 rounded-lg border border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-800"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone*</label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-800"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email*</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email Us...."
                    className="w-full px-4 py-3 rounded-lg border border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-800"
                />
            </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-bold text-gray-700">Write Your Message*</label>
          <textarea
            id="message"
            rows={5}
            placeholder="What's on your mind"
            className="w-full px-4 py-3 rounded-lg border border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-800 resize-none"
          ></textarea>
        </div>

        <button
          type="button"
          className="bg-[#6CB43F] hover:bg-[#5ba032] text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactDetails.map((item, index) => (
              <ContactInfoCard key={index} {...item} />
            ))}
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="w-full h-[450px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.328233267252!2d90.4232304153629!3d23.7918471925324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a2fde6d8ab%3A0x6bba32688ef7738f!2sGulshan%201%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1651817540243!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
