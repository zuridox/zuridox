import React from "react";
import {
  Search,
  Book,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  Link,
} from "lucide-react";

const categories = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of our services and platforms",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Detailed technical documentation and guides",
  },
  {
    icon: MessageCircle,
    title: "FAQs",
    description: "Answers to commonly asked questions",
  },
];

const popularArticles = [
  "How to set up your first project",
  "Understanding our security features",
  "Integration guidelines",
  "Billing and subscription FAQ",
  "API documentation overview",
];

export default function HelpCenterPage() {
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setLoading(true);
    // Simulate a delay for fetching results
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-blue-100 mb-8">
            Find answers and support for all your questions
          </p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search for help..."
              aria-label="Search for help"
              className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900"
            />
            {loading ? (
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 animate-spin">
                {/* Add a spinner here */}
                <div className="border-4 border-gray-300 border-t-blue-600 rounded-full h-5 w-5"></div>
              </div>
            ) : (
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            )}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="mb-6 p-4 bg-blue-50 rounded-xl inline-block group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold mb-2">{category.title}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  to={`/categories/${category.title}`}
                  className="text-blue-600 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Articles & Contact */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Popular Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <ul className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <li key={index}>
                      <Link
                        to={`/articles/${encodeURIComponent(article)}`}
                        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <HelpCircle className="w-5 h-5" />
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Support */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Need More Help?</h2>
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone Support</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-gray-600">support@zuridox.com</p>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
