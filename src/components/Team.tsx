import { Linkedin, Github, Mail } from "lucide-react";
import { useTheme } from "../ThemeContext";
import Ashar from "../assets/Team/ashar.jpg";
import Savez from "../assets/Team/Savez1.png";
import Farhan from "../assets/Team/farhan raza.png";

const team = [
  {
    name: "Md Farhan Raza",
    role: "Software Engineer",
    designation: "Founder",
    image: Farhan,
    bio: "With 3+ years in IT consulting, Farhan leads Zuridox's vision and strategy.",
    social: {
      linkedin: "https://www.linkedin.com/in/mdfarhanraza/",
      github: "https://github.com/CodingBlow",
      email: "farhan@zuridox.com",
    },
  },
  {
    name: "Md Savez",
    role: "Software Engineer",
    designation: "Co-Founder",
    image: Savez,
    bio: "Savez brings deep technical expertise and innovation leadership to our solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/mo-savez/",
      Github: "https://github.com/savez2223",
      email: "mosavez0786@gmail.com",
    },
  },
  {
    name: "Ashhar Jamali",
    role: "Software Engineer",
    designation: "Co-Founder",
    image: Ashar,
    bio: "Ashhar oversees all development projects and ensures technical excellence.",
    social: {
      linkedin: "https://www.linkedin.com/in/ashhar-jamali-5322642a4/",
      Github: "https://github.com/asharjamali",
      email: "Ashhar@zuridox.com",
    },
  },
];

export default function Team() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-12 sm:py-16 md:py-24 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Meet Our Team
          </h2>
          <p
            className={`text-lg sm:text-xl ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Expert professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center rounded-xl p-6 transition-all
                ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-750"
                    : "bg-gray-50 hover:bg-gray-100"
                }
                shadow-sm hover:shadow-md`}
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 mb-6 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-600">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="text-center mb-4">
                <h3
                  className={`text-xl font-semibold mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-1">
                  {member.designation}
                </p>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {member.role}
                </p>
              </div>

              <p
                className={`text-center text-sm sm:text-base mb-6 
                ${theme === "dark" ? "text-gray-300" : "text-gray-700"} 
                leading-relaxed max-w-xs mx-auto`}
              >
                {member.bio}
              </p>

              <div className="flex space-x-4 mt-auto">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </a>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Send email"
                >
                  <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
