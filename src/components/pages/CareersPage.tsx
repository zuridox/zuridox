import React from 'react';
import { Briefcase, MapPin, DollarSign, Clock } from 'lucide-react';

const jobs = [
  {
    title: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    description: "We're looking for an experienced Full Stack Developer to join our growing team."
  },
  {
    title: "UX/UI Designer",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    description: "Join our design team to create beautiful and intuitive user experiences."
  },
  {
    title: "DevOps Engineer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines."
  }
];

const benefits = [
  "Competitive salary and equity",
  "Health, dental, and vision insurance",
  "Unlimited PTO",
  "Remote work options",
  "Professional development budget",
  "401(k) matching"
];

export default function CareersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100">
            Build the future of technology with us
          </p>
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
                  <p className="mt-4 text-gray-600">{job.description}</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Briefcase className="w-5 h-5 text-blue-600" />
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