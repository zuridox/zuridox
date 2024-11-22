import { Target, Users, Rocket, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge solutions"
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Your success is our success - we're committed to your growth"
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Trust and transparency are the foundation of our relationships"
  }
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Zuridox</h1>
          <p className="text-xl text-blue-100">
            Transforming businesses through innovative technology solutions
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the global leader in digital transformation, recognized for our 
              excellence, innovation, and commitment to client success.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="mb-4 p-3 bg-blue-50 rounded-xl inline-block">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}