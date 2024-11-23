import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTheme } from "../ThemeContext";
import Logo from "../assets/Zuridox-Logo.png";

const footerNavigation = {
  solutions: [
    { name: "Enterprise Solutions", href: "/services#enterprise-solutions" },
    { name: "Custom Development", href: "/services#custom-development" },
    {
      name: "Digital Transformation",
      href: "/services#digital-transformation",
    },
    { name: "IT Consulting", href: "/services#consulting" },
    { name: "Cloud Services", href: "/services#cloud-services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Strategic Partners", href: "/partners" },
    { name: "Newsroom", href: "/newsroom" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    { name: "Insights", href: "/insights" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Knowledge Base", href: "/knowledge-base" },
    { name: "Documentation", href: "/docs" },
    { name: "Support Center", href: "/support" },
  ],
  social: [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/zuridox",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/zuridox",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/zuridox",
    },
  ],
};

export default function Footer() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <footer
      className={`${
        theme === "light" ? "border-t border-gray-300" : "border-t border-gray-800"
      } text-${theme === "dark" ? "white" : "gray-900"} ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="/">
              <img src={Logo} alt="Zuridox Logo" className="h-12 mb-6" />
            </a>
            <p
              className={`text-${
                theme === "dark" ? "gray-300" : "gray-700"
              } mb-8 text-lg leading-relaxed max-w-md`}
            >
              Transforming businesses through innovative technology solutions.
              Your trusted partner in digital excellence and IT consulting.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:contact@zuridox.com"
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:text-blue-400" />
                <span className="group-hover:text-blue-400">
                  contact@zuridox.com
                </span>
              </a>
              <a
                href="tel:+919389678954"
                className="flex items-center space-x-3  hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:text-blue-400" />
                <span className="group-hover:text-blue-400">
                  +91 9389678954
                </span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 group-hover:text-blue-400" />
                <span className="hover:text-blue-400">
                  Badarpur, New Delhi, India 110044
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries({
            Solutions: footerNavigation.solutions,
            Company: footerNavigation.company,
            Resources: footerNavigation.resources,
          }).map(([title, items]) => (
            <div key={title}>
              <h3
                className={`text-sm font-semibold tracking-wider uppercase mb-6 ${
                  theme === "dark" ? "text-blue-400" : "text-blue-500"
                }`}
              >
                {title}
              </h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`text-${
                        theme === "dark" ? "gray-300" : "gray-700"
                      } hover:text-blue-400 transition-colors duration-200 text-sm`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${
                      theme === "dark" ? "gray-400" : "gray-600"
                    } hover:text-blue-400 transition-colors duration-200`}
                    aria-label={`Visit our ${item.name} page`}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            <p
              className={`text-${
                theme === "dark" ? "gray-400" : "gray-600"
              } text-sm`}
            >
              © {new Date().getFullYear()} Zuridox Technologies. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}