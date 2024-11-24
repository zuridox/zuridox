import { ArrowRight, ChevronDown } from "lucide-react";
import { useTheme } from "../ThemeContext";
import HeroIMG from "../assets/3129902-uhd_2560_1440_25fps.mp4";
import HeroIMG2 from "../assets/dark.mp4";

export default function Hero() {
  const { theme } = useTheme();

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services"); // Get the Services section by ID
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the Services section
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={theme === "light" ? HeroIMG2 : HeroIMG} // Conditionally load video based on theme
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-6 tracking-tight">
              Next-Gen IT Solutions
            </h1>
            <div className="absolute -inset-x-20 inset-y-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 blur-3xl opacity-50" />
          </div>

          <p className="text-xl md:text-3xl text-gray-200 mb-12 font-light tracking-wide">
            Pioneering Digital Excellence Through Innovation
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleScrollToServices} // Scroll to Services section on click
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25"
            >
              <span className="text-lg font-medium">Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-bounce shadow-lg">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
        <span className="text-white/80 text-sm font-medium mt-2 tracking-wider">
          Scroll
        </span>
      </div>
    </div>
  );
}
