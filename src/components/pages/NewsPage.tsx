import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    title: "Zuridox Launches New AI-Powered Analytics Platform",
    date: "March 15, 2024",
    category: "Product Launch",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "Revolutionary platform helps businesses harness the power of artificial intelligence for data analysis.",
  },
  {
    title: "Expanding Our Global Presence: New Office in Singapore",
    date: "March 10, 2024",
    category: "Company News",
    image:
      "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "Strategic expansion into Asia-Pacific market to better serve our growing client base.",
  },
  {
    title: "Zuridox Named Leader in Gartner Magic Quadrant",
    date: "March 5, 2024",
    category: "Awards",
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800",
    excerpt:
      "Recognition of our innovative solutions and strong market presence.",
  },
];

export default function NewsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-7">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-blue-100">
            Stay updated with Zuridox's latest announcements and achievements
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
