import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { useTheme } from "../../ThemeContext";
import { useMemo } from "react";

const generateEvents = () => {
  const today = new Date();
  
  return [
    {
      title: "Tech Innovation Summit 2024",
      date: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week ahead
      location: "San Francisco, CA",
      type: "Conference",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      description:
        "Join industry leaders for two days of insights into emerging technologies and digital transformation.",
      attendees: "500+ Expected",
    },
    {
      title: "Digital Transformation Workshop",
      date: new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000), // 2 weeks ahead
      location: "Virtual Event",
      type: "Workshop",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      description:
        "Hands-on workshop focusing on practical strategies for digital transformation.",
      attendees: "200+ Expected",
    },
    {
      title: "Cloud Computing Masterclass",
      date: new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000), // 1 month ahead
      location: "New York, NY",
      type: "Training",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      description:
        "Deep dive into cloud architecture and implementation strategies.",
      attendees: "150+ Expected",
    },
  ];
};

export default function EventsPage() {
  const { theme } = useTheme();
  const events = useMemo(() => generateEvents(), []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      className={`pt-20 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-blue-100">
            Join us for insightful discussions and networking opportunities
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-sm overflow-hidden group ${
                theme === "light"
                  ? "bg-white text-gray-900"
                  : "bg-gray-800 text-white"
              }`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h2>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <p className="mb-6">{event.description}</p>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
