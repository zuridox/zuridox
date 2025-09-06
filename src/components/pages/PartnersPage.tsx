import { Shield, Users, Award, ArrowRight } from "lucide-react";
import { useTheme } from "../../ThemeContext";

const partnerTypes = [
  {
    title: "Technology Partners",
    description:
      "Join our ecosystem of technology providers to create integrated solutions.",
    icon: Shield,
  },
  {
    title: "Solution Partners",
    description:
      "Deliver our solutions to your clients and grow your business.",
    icon: Users,
  },
  {
    title: "Strategic Partners",
    description: "Collaborate on large-scale digital transformation projects.",
    icon: Award,
  },
];

const benefits = [
  "Access to exclusive resources and training",
  "Co-marketing opportunities",
  "Priority technical support",
  "Revenue sharing programs",
  "Joint business planning",
  "Partner portal access",
];

export default function PartnersPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`pt-20 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Partner With Us</h1>
          <p className="text-xl text-blue-100">
            Join our partner ecosystem and grow your business
          </p>
          <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            Become a Partner
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Partner Types */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Partnership Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all ${
                  theme === "light" ? "bg-white" : "bg-gray-800"
                }`}
              >
                <div
                  className={`mb-6 p-4 rounded-xl inline-block ${
                    theme === "light" ? "bg-blue-50" : "bg-gray-700"
                  }`}
                >
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                <p className="mb-6">{type.description}</p>
                <button className="text-blue-600 font-medium inline-flex items-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div
        className={`py-16 ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Partner Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-sm ${
                  theme === "light" ? "bg-white" : "bg-gray-700"
                }`}
              >
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
