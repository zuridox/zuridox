import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useTheme } from '../ThemeContext'; // Assuming you have this hook or context

const team = [
  {
    name: "David Miller",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    bio: "With 15+ years in IT consulting, David leads Zuridox's vision and strategy.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@zuridox.com"
    }
  },
  {
    name: "Lisa Zhang",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=300",
    bio: "Lisa brings deep technical expertise and innovation leadership to our solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@zuridox.com"
    }
  },
  {
    name: "James Wilson",
    role: "Head of Development",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
    bio: "James oversees all development projects and ensures technical excellence.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@zuridox.com"
    }
  },
  {
    name: "Maria Garcia",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    bio: "Maria creates stunning designs that captivate and engage users.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "maria@zuridox.com"
    }
  }
];

export default function Team() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Meet Our Team
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} max-w-2xl mx-auto`}>
            Expert professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105
                ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              <div className="relative mb-6">
                {/* Add extra padding at the top of the card */}
                <div className="p-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-1 border-4 border-gray-900">
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
                          href={member.social.twitter}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Twitter className="w-5 h-5 text-white" />
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
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className={`text-blue-400 font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>
                  {member.role}
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
