import { Target, Users, Rocket, Heart } from "lucide-react";
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
  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      className={`pt-20 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`py-7 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-800 to-blue-700"
            : "bg-gradient-to-r from-blue-800 to-blue-700"
        } text-white`}
      >
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
          {["Our Mission", "Our Vision"].map((title, index) => (
            <div
              key={index}
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
                {title}
              </h2>
              <p>
                {index === 0
                  ? "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age."
                  : "To be the global leader in digital transformation, recognized for our excellence, innovation, and commitment to client success."}
              </p>
            </div>
          ))}
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

      {/* Founders Section */}
      {/* <div className={`py-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Farhan Raza",
                role: "Founder",
                bio: "A visionary tech enthusiast and the driving force behind Zuridox's innovation.",
              },
              {
                name: "Md Savez",
                role: "Co-Founder",
                bio: "A strategic thinker, empowering digital transformation through creative solutions.",
              },
              {
                name: "Ashhar Jamali",
                role: "Co-Founder",
                bio: "A quick learner with a focus on achieving excellence in every project.",
              },
            ].map((founder, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-sm ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {founder.name}
                </h3>
                <p className="font-medium mb-2">{founder.role}</p>
                <p>{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
