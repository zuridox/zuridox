import React from 'react';
import { Trophy, Building2, Users2, Star } from 'lucide-react';
import { useTheme } from "../ThemeContext";  

const stats = [
  {
    icon: Trophy,
    value: "500+",
    label: "Successful Projects",
    description: "Delivered with excellence"
  },
  {
    icon: Building2,
    value: "50+",
    label: "Global Industries",
    description: "Across sectors"
  },
  {
    icon: Users2,
    value: "200+",
    label: "Expert Professionals",
    description: "Dedicated team members"
  },
  {
    icon: Star,
    value: "98%",
    label: "Client Satisfaction",
    description: "Consistently achieved"
  }
];

export default function Stats() {
  const { theme } = useTheme();  // Access the theme state

  return (
    <section className={`py-24 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-800/50'} backdrop-blur-sm p-8 rounded-3xl border ${theme === 'light' ? 'border-gray-200' : 'border-gray-700/50'} hover:border-blue-500/50 transition-all duration-500 group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex p-4 bg-gradient-to-tr from-blue-600 to-blue-700 rounded-2xl shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className={`text-5xl font-bold ${theme === 'light' ? 'bg-gradient-to-r from-gray-900 to-gray-600' : 'bg-gradient-to-r from-white to-gray-300'} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                      {stat.label}
                    </div>
                    <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                      {stat.description}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border border-gray-700/50 rounded-3xl group-hover:border-blue-500/50 transition-colors duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
