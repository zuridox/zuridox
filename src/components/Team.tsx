import { Linkedin, Github, Mail } from 'lucide-react';
import { useTheme } from '../ThemeContext'; // Assuming you have this hook or context
import Ashar from "../assets/Team/ashar.jpg";
import Savez from "../assets/Team/Savez1.png";
import Farhan from "../assets/Team/farhan.jpg";

const team = [
  {
    name: "Md Farhan Raza",
    role: "Software Engineer",
    designation: "Founder",
    image: Farhan,
    bio: "With 3+ years in IT consulting, Farhan leads Zuridox's vision and strategy.",
    social: {
      linkedin: "https://www.linkedin.com/in/mdfarhanraza/",
      Github: "https://github.com/CodingBlow",
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
  const { theme } = useTheme(); // Get the current theme

  return (
    <section className={`py-12 sm:py-16 md:py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Meet Our Team
          </h2>
          <p className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} max-w-2xl mx-auto`}>
            Expert professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105
                ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              <div className="relative mb-6">
                <div className="px-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gray-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-center space-x-4">
                        <a
                          href={member.social.linkedin}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={member.social.Github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Mail className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`text-center py-4 px-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{member.name}</h3>
                <p className={`text-blue-400 font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>
                  {member.role} <span className="text-sm font-normal">( {member.designation} )</span>
                </p>
                <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
