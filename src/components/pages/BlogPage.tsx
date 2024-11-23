import { Calendar, Clock, Tag, Search } from "lucide-react";
import { useTheme } from "../../ThemeContext";

const categories = [
  "Technology",
  "Innovation",
  "Digital Transformation",
  "Cloud Computing",
  "Cybersecurity",
];

const posts = [
  {
    title: "The Future of AI in Business Operations",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing business operations and decision-making processes.",
  },
  {
    title: "Cloud Migration Strategies for Enterprise",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Cloud Computing",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "A comprehensive guide to planning and executing successful cloud migration for large organizations.",
  },
  {
    title: "Cybersecurity Best Practices 2024",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "Essential security measures to protect your business in an evolving threat landscape.",
  },
];

export default function BlogPage() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      className={`pt-20 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <div
        className={`py-16 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 to-gray-700"
            : "bg-gradient-to-r from-blue-900 to-blue-700"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog & Insights</h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-blue-100"
            }`}
          >
            Expert perspectives on technology and digital transformation
          </p>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-800 text-gray-300 focus:ring-blue-400"
                  : "border-gray-200 bg-white text-gray-900 focus:ring-blue-500"
              } focus:border-transparent focus:ring-2`}
            />
            <Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-300 hover:bg-blue-700 hover:text-white"
                    : "bg-gray-100 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className={`rounded-2xl shadow-sm overflow-hidden group ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div
                  className={`flex items-center gap-4 text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } mb-4`}
                >
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Tag
                    className={`w-4 h-4 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                  <span
                    className={`${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
                <h2
                  className={`text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {post.title}
                </h2>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
