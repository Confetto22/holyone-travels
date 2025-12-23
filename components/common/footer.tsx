import { MessageCircle, Mail, Phone, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: "To More Inquiry",
      subtitle: "Don't hesitate Call to GoFly.",
      bgColor: "bg-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "+91 345 533 865",
      bgColor: "bg-green-600"
    },
    {
      icon: Mail,
      title: "Mail Us",
      subtitle: "info@example.com",
      bgColor: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "+91 456 453 345",
      bgColor: "bg-blue-600"
    }
  ];

  const topDestinations = [
    "Maldives Tour",
    "Bali, Indonesia Tour",
    "Thailand Tour",
    "Philippines Tour",
    "Hawaii, USA Tour",
    "Switzerland Tour",
    "New Zealand Tour",
    "Costa Rica Tour",
    "Peru (Machu Picchu)",
    "Paris, France Tour",
    "Rome, Italy Tour"
  ];

  const popularSearches = [
    "Adventure",
    "Hiking & Stiking",
    "Holiday Packages",
    "Flights And Hotels",
    "Honeymoon Trip",
    "Bali Vacation Package",
    "Desert Safari",
    "Last-Minute Deals",
    "Summer Vacation",
    "Wildlife Safari",
    "Dubai Luxury Tours"
  ];

  const resources = [
    "About GoFly",
    "Health & Safety Measure",
    "Visa Processing",
    "Customize Tour",
    "Travel Inspirations",
    "Traveler Reviews",
    "Terms & Condition",
    "Sitemap"
  ];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Info Section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`${item.bgColor} p-3 rounded-full`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-300">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-blue-600 p-2 rounded">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">G</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold">GoFly</h2>
                  <p className="text-sm text-gray-400">Travel.co</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">GoFly Travel Agency</h3>
                <p className="text-gray-400 text-sm">
                  Skyline Plaza, 5th Floor, 123 Main Street<br />
                  Los Angeles, CA 90001, USA
                </p>
              </div>

              <div className="flex space-x-4 mb-6">
                {socialIcons.map((social, index) => (
                  <a key={index} href={social.href} className="text-gray-400 hover:text-white">
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded">
                  <span className="text-white font-bold text-xs">▶</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">GET IN</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </div>
            </div>

            {/* Top Destinations */}
            <div>
              <h3 className="text-xl font-bold mb-6">Top Destination</h3>
              <ul className="space-y-3">
                {topDestinations.map((destination, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Searches */}
            <div>
              <h3 className="text-xl font-bold mb-6">Popular Search</h3>
              <ul className="space-y-3">
                {popularSearches.map((search, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                      {search}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;