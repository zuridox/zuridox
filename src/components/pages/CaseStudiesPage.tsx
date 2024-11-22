import React from 'react';
import { ArrowUpRight, Building2, Users2, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    title: "Digital Transformation for Global Bank",
    client: "Financial Corp International",
    industry: "Banking & Finance",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    results: {
      efficiency: "+45%",
      cost: "-30%",
      satisfaction: "+92%"
    },
    description: "How we helped a leading bank modernize their legacy systems and improve customer experience."
  },
  {
    title: "E-commerce Platform Optimization",
    client: "RetailTech Solutions",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    results: {
      sales: "+75%",
      performance: "+60%",
      conversion: "+25%"
    },
    description: "Transforming online retail experience through advanced technology solutions."
  },
  {
    title: "Healthcare Data Management",
    client: "MedTech Innovations",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
    results: {
      efficiency: "+65%",
      accuracy: "+95%",
      cost: "-40%"
    },
    description: "Implementing secure and efficient healthcare data management systems."
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-blue-100">
            Real success stories from our valued clients
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm">
                    {study.industry}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h2>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Building2 className="w-4 h-4" />
                  <span>{study.client}</span>
                </div>
                <p className="text-gray-600 mb-6">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.results).map(([key, value], i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
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