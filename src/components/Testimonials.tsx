import { Star, Quote } from "lucide-react";
import { useTheme } from "../ThemeContext";

const testimonials = [
  {
    name: "Aisha Khan",
    role: "Owner, Khan Boutique",
    content:
      "Zuridox helped us set up an e-commerce platform that doubled our customer base in just a few months. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sameer Malik",
    role: "Manager, Malik Auto Works",
    content:
      "Their solutions modernized our operations and significantly improved our service efficiency. A truly transformative experience!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Principal, Little Stars Academy",
    content:
      "The team at Zuridox developed an interactive platform for our school, enhancing communication with parents and students alike.",
    rating: 5,
  },
];

export default function Testimonials() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Client Success Stories
          </h2>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } max-w-2xl mx-auto`}
          >
            Hear from our local clients about their experience working with
            Zuridox
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl relative group hover:bg-blue-600 transition-all duration-300 
                ${
                  theme === "dark"
                    ? "bg-gray-800"
                    : "bg-white shadow-lg border border-gray-200"
                }`}
            >
              <Quote
                className={`absolute top-6 right-6 w-10 h-10 ${
                  theme === "dark"
                    ? "text-blue-100"
                    : "text-gray-900"
                } group-hover:text-white/20`}
              />

              <div className="mb-6">
                <h3
                  className={`font-semibold ${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                  } group-hover:text-white`}
                >
                  {testimonial.name}
                </h3>
                <p
                  className={`text-gray-400 ${
                    theme === "dark"
                      ? "group-hover:text-white/80"
                      : "group-hover:text-gray-600"
                  }`}
                >
                  {testimonial.role}
                </p>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 fill-current ${
                      theme === "dark"
                        ? "text-yellow-400"
                        : "text-yellow-500"
                    } group-hover:text-yellow-300`}
                  />
                ))}
              </div>

              <p
                className={`text-gray-900 ${
                  theme === "dark" ? "text-white" : "group-hover:text-white"
                }`}
              >
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
