import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import LogoDark from "../assets/Zuridox-Logo.png";

const navigation = [
  { name: "Home", to: "/" },
  {
    name: "Solutions",
    to: "#",
    children: [
      { name: "Web Development", to: "/WebDev" },
      { name: "App Development", to: "/appdev" },
      // { name: "Search Engine Optimization", to: "/." },
    ],
  },
  { name: "About", to: "/about" },
  { name: "Case Studies", to: "/case-studies" },
  { name: "Events", to: "/events" },
  { name: "ContactUs", to: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-950/30 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Shrinks height on scroll */}
        <div
          className={`flex items-center justify-between ${
            isScrolled ? "h-20" : "h-20"
          } transition-all duration-300`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={LogoDark} alt="Logo" className="h-8 sm:h-10" />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-bold rounded-full
                    text-white
                    transition-all duration-300
                    hover:text-blue-400
                    hover:bg-blue-900
                    hover:scale-105
                    hover:shadow-lg`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className={`px-4 py-2 text-sm font-bold rounded-full
                      text-white
                      transition-all duration-300
                      hover:text-blue-400
                      hover:bg-blue-900
                      hover:scale-105
                      hover:shadow-lg`}
                  >
                    {item.name}
                  </Link>
                )}
                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-gray-900/95 backdrop-blur-lg ring-1 ring-black/5 transition-all duration-300 ${
                      activeDropdown === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.to}
                          className="block px-4 py-2 text-sm text-gray-200 rounded-lg
                            transition-all duration-300
                            hover:text-blue-400
                            hover:bg-blue-900
                            hover:scale-105
                            hover:shadow-sm"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-700/50 transition-colors text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-3 bg-gray-900/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-base font-bold text-gray-200 rounded-lg
                  transition-all duration-300
                  hover:text-blue-400
                  hover:bg-blue-900
                  hover:scale-105
                  hover:shadow-lg`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
