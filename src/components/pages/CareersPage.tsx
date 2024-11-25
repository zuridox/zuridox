import { Briefcase, MapPin, DollarSign, Clock } from "lucide-react";
import { useTheme } from "../../ThemeContext";

const jobs = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "Based on experience",
    description:
      "We're looking for an experienced Full Stack Developer to join our growing team.",
  },
  {
    title: "UX/UI Designer",
    location: "Remote",
    type: "Full-time",
    salary: "Based on experience",
    description:
      "Join our design team to create beautiful and intuitive user experiences.",
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "Based on experience",
    description:
      "Help us build and maintain our cloud infrastructure and deployment pipelines.",
  },
];

const benefits = [
  "Competitive salary and equity",
  "Health, dental, and vision insurance",
  "Unlimited PTO",
  "Remote work options",
  "Professional development budget",
  "401(k) matching",
];

export default function CareersPage() {
  const { theme } = useTheme(); // Get the current theme

  // Determine the text and background colors based on the theme
  const textColor = theme === "light" ? "text-black" : "text-white";
  const backgroundColor = theme === "light" ? "bg-white" : "bg-gray-900";

  return (
    <div className={`pt-20 ${backgroundColor}`}>
      {/* Hero Section */}
      <div
        className={`bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 ${
          theme === "dark"
            ? "dark:bg-gradient-to-r dark:from-blue-700 dark:to-blue-500"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100">
            Build the future of technology with us
          </p>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className={`text-3xl font-bold mb-8 ${textColor}`}>
          Open Positions
        </h2>
        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow ${
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              }`}
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div
                    className={`flex flex-wrap gap-4 text-sm ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                  </div>
                  <p
                    className={`mt-4 ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {job.description}
                  </p>
                </div>
                <a
                  href="https://forms.gle/kS1NK1o4dXkM6eabA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ${
                    theme === "light"
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div
        className={`py-16 ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-8 ${textColor}`}>
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-sm ${
                  theme === "light"
                    ? "bg-white text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      theme === "light" ? "bg-blue-50" : "bg-blue-900"
                    }`}
                  >
                    <Briefcase
                      className={`w-5 h-5 ${
                        theme === "light" ? "text-blue-600" : "text-blue-400"
                      }`}
                    />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
