import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeContext";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "#",
    children: [
      { name: "Enterprise Solutions", href: "/solutions/enterprise" },
      {
        name: "Digital Transformation",
        href: "/solutions/digital-transformation",
      },
      { name: "Cloud Services", href: "/solutions/cloud" },
      { name: "Consulting", href: "/solutions/consulting" },
      { name: "Custom Development", href: "/solutions/development" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [_isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            >
              Zuridox
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-gray-100 hover:text-white`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-gray-100 hover:text-white`}
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-white/80 backdrop-blur-lg ring-1 ring-black/5 transition-all duration-300 ${
                      activeDropdown === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full shadow-lg transition-all duration-300 transform scale-75 opacity-50 hover:opacity-100 hover:scale-100 focus:opacity-100 focus:scale-100 hover:bg-yellow-400 focus:bg-yellow-400"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-black" />
              ) : (
                <Sun className="w-5 h-5 text-black" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-400 focus:bg-yellow-400"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-black" />
              ) : (
                <Sun className="w-5 h-5 text-black" />
              )}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100/50 transition-colors text-white"
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
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-3 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl mt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
