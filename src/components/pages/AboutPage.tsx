import { Target, Users, Rocket, Heart, Building2 } from "lucide-react";
import { useTheme } from "../../ThemeContext";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We constantly push boundaries to deliver cutting-edge solutions",
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Your success is our success - we're committed to your growth",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Trust and transparency are the foundation of our relationships",
  },
];

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`pt-20 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <div className="py-7 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Zuridox</h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-blue-100"
            }`}
          >
            Transforming businesses through innovative technology solutions
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`p-8 rounded-2xl shadow-sm ${
              theme === "dark"
                ? "bg-gray-800 text-gray-300"
                : "bg-white text-gray-600"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Mission
            </h2>
            <p>
              To empower businesses with innovative technology solutions that
              drive growth, efficiency, and long-term digital success.
            </p>
          </div>

          <div
            className={`p-8 rounded-2xl shadow-sm ${
              theme === "dark"
                ? "bg-gray-800 text-gray-300"
                : "bg-white text-gray-600"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Our Vision
            </h2>
            <p>
              To become a trusted global digital partner, known for innovation,
              reliability, and transparent business practices.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div
        className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-50"} py-16`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl shadow-sm ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-300"
                      : "bg-white text-gray-600"
                  }`}
                >
                  <div
                    className={`mb-4 p-3 rounded-xl inline-block ${
                      theme === "dark" ? "bg-gray-600" : "bg-blue-50"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legal Information – IMPORTANT FOR PAYMENT GATEWAY */}
      <div
        className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div
            className={`p-8 rounded-2xl shadow-md ${
              theme === "dark"
                ? "bg-gray-800 text-gray-300"
                : "bg-white text-gray-700"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2
                className={`w-6 h-6 ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              />
              <h2
                className={`text-2xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Legal Information
              </h2>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Legal Business Name:</strong> Zuridox
              </p>
              <p>
                <strong>Business Type:</strong> Sole Proprietorship
              </p>
              <p>
                <strong>Registered Address:</strong> Delhi, India
              </p>
              <p>
                <strong>Official Email:</strong> contact@zuridox.com
              </p>
              <p>
                <strong>Website:</strong> https://www.zuridox.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
