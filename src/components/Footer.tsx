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
    // { name: "Comprehensive IT Consulting", to: "#" },
  ],
  company: [
    { name: "About Us", to: "/about" },
    { name: "Case Studies", to: "/case-studies" },
    { name: "Blog", to: "/blog" },
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
      href: "#",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
    },
  ],
};

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`border-t ${
        theme === "light"
          ? "border-gray-300 bg-gray-100 text-gray-900"
          : "border-gray-800 bg-gray-900 text-white"
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
                className="h-12 mb-6 max-w-full"
              />
            </Link>
            <p
              className={`mb-8 text-lg leading-relaxed max-w-md ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
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
                <span>contact@zuridox.com</span>
              </a>
              <a
                href="tel:+17602740909"
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:text-blue-400" />
                <span>+1 7602740909</span>
              </a>
              {/* <a
                href="tel:+917050068050"
                className="flex items-center space-x-3 hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:text-blue-400" />
                <span>+91 7050068050</span>
              </a> */}
              {/* <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Jasola Vihar, Delhi, India 110025</span>
              </div> */}
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
                      className="text-sm hover:text-blue-400 transition-colors"
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
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Zuridox Technologies. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
