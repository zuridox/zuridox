
import IBM from '../assets/ibm.png';
import ORACLE from '../assets/oracle.png';
import MICROSOFT from '../assets/microsoft.png';
import SALESFORCE from '../assets/salesforce.png';
import AWS from '../assets/file.png';
import GOOGLe from '../assets/google-cloud.png';

import { useTheme } from '../ThemeContext'; // Assuming you have this hook or context

const partners = [
  {
    name: "Microsoft",
    logo: MICROSOFT,
    description: "Gold Partner"
  },
  {
    name: "Amazon Web Services",
    logo: AWS,
    description: "Advanced Consulting Partner"
  },
  {
    name: "Google Cloud",
    logo: GOOGLe,
    description: "Premier Partner"
  },
  {
    name: "Salesforce",
    logo: SALESFORCE,
    description: "Platinum Partner"
  },
  {
    name: "Oracle",
    logo: ORACLE,
    description: "Gold Partner"
  },
  {
    name: "IBM",
    logo: IBM,
    description: "Platinum Partner"
  }
];

export default function Partners() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-6`}>
            Our Trusted Partners
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} max-w-2xl mx-auto`}>
            Partnering with industry leaders to deliver world-class solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${theme === 'dark' ? 'from-blue-800 to-gray-800' : 'from-blue-200 to-gray-200'} opacity-50 group-hover:opacity-0 transition-opacity duration-300`}
                />
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {partner.name}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className={`inline-flex items-center px-8 py-4 border-2 ${theme === 'dark' ? 'border-blue-600 text-blue-600' : 'border-blue-400 text-blue-400'} font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300`}
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
