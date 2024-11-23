
import { ArrowUpRight, Building2 } from "lucide-react";
import { useTheme } from "../../ThemeContext";

const caseStudies = [
  {
    title: "Digital Transformation for Global Bank",
    client: "Financial Corp International",
    industry: "Banking & Finance",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    results: {
      efficiency: "+45%",
      cost: "-30%",
      satisfaction: "+92%",
    },
    description:
      "How we helped a leading bank modernize their legacy systems and improve customer experience.",
  },
  {
    title: "E-commerce Platform Optimization",
    client: "RetailTech Solutions",
    industry: "Retail",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    results: {
      sales: "+75%",
      performance: "+60%",
      conversion: "+25%",
    },
    description:
      "Transforming online retail experience through advanced technology solutions.",
  },
  {
    title: "Healthcare Data Management",
    client: "MedTech Innovations",
    industry: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
    results: {
      efficiency: "+65%",
      accuracy: "+95%",
      cost: "-40%",
    },
    description:
      "Implementing secure and efficient healthcare data management systems.",
  },
];

export default function CaseStudiesPage() {
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
        className={`py-16 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 to-gray-700"
            : "bg-gradient-to-r from-blue-900 to-blue-700"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-blue-100"
            }`}
          >
            Real success stories from our valued clients
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-sm overflow-hidden group ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-300"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {study.industry}
                  </span>
                </div>
                <h2
                  className={`text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {study.title}
                </h2>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Building2 className="w-4 h-4" />
                  <span
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }
                  >
                    {study.client}
                  </span>
                </div>
                <p
                  className={
                    theme === "dark"
                      ? "text-gray-400 mb-6"
                      : "text-gray-600 mb-6"
                  }
                >
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.results).map(([key, value], i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl ${
                        theme === "dark"
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-50"
                      }`}
                    >
                      <div className={`text-2xl font-bold mb-1 text-blue-600`}>
                        {value}
                      </div>
                      <div className="text-sm capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 font-medium group-hover:gap-3 transition-all text-blue-600">
                  Read Full Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
