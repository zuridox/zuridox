import { Shield, Clock, Target, Award } from "lucide-react";
import { useTheme } from "../ThemeContext"; // Assuming you have this hook or context

const reasons = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description:
      "Over a decade of experience delivering cutting-edge IT solutions across diverse industries.",
  },
  {
    icon: Clock,
    title: "Rapid Delivery",
    description:
      "Agile methodology ensuring quick turnaround times without compromising quality.",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description:
      "Tailored strategies and solutions designed specifically for your business needs.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description:
      "Multiple awards and certifications recognizing our excellence in IT consulting.",
  },
];

export default function WhyChooseUs() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <section
      className={`py-24 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-extrabold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Why Choose Us
          </h2>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            } max-w-2xl mx-auto`}
          >
            Partner with us for innovative solutions that drive real business
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl shadow-lg transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-900"
                    : "bg-white hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-500 border border-gray-300"
                }`}
              >
                <div
                  className={`mb-6 inline-block p-4 rounded-xl transition-transform ${
                    theme === "dark"
                      ? "bg-gray-700 group-hover:scale-110"
                      : "bg-gray-200 group-hover:scale-105"
                  }`}
                >
                  <Icon
                    className={`w-10 h-10 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`} // Adjusting icon color based on theme
                  />
                </div>

                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {reason.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
