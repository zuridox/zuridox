import { Link } from "react-router-dom"; // Import Link
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTheme } from "../ThemeContext";
import LogoLight from "../assets/Light-theme-Logo1.png"; // Light theme logo
import LogoDark from "../assets/Zuridox-Logo.png"; // Dark theme logo

const footerNavigation = {
  solutions: [
    { name: "Web Development", to: "/WebDev" },
    { name: "App Development", to: "/appdev" },
    { name: "search Engine Optimization", to: "/seo" },
    { name: "Digital Marketing", to: "/digitalmarketing" },
    { name: "Comprehensive IT Consulting", to: "#" },
  ],
  company: [
    { name: "About Us", to: "/about" },
    { name: "Case Studies", to: "/case-studies" },
    { name: "Strategic Partners", to: "/partners" },
    { name: "Careers", to: "/careers" },
    { name: "Contact Us", to: "/contact" },
  ],
  policy: [
    { name: "Privacy Policy", to: "/privacypolicy" },
    { name: "Terms & Conditions", to: "/terms" },
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
  const { theme } = useTheme();

  return (
    <footer
      className={`${
        theme === "light"
          ? "border-t border-gray-300"
          : "border-t border-gray-800"
      } text-${theme === "dark" ? "white" : "gray-900"} ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src={theme === "dark" ? LogoDark : LogoLight}
                alt="Zuridox Logo"
                className="h-12 mb-6"
              />
            </Link>
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
                  zuridox@gmail.com
                </span>
              </a>
              <a
                href="tel:+919389678954"
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:text-blue-400" />
                <span className="group-hover:text-blue-400">
                  +91 9389678954
                </span>
              </a>
              <a
                href="tel:+917050068050"
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:text-blue-400" />
                <span className="group-hover:text-blue-400">
                  +91 7050068050
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
            Policy: footerNavigation.policy,
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
                    <Link
                      to={item.to}
                      className={`text-${
                        theme === "dark" ? "gray-300" : "gray-700"
                      } hover:text-blue-400 transition-colors duration-200 text-sm`}
                    >
                      {item.name}
                    </Link>
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
