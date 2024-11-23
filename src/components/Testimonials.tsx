import { Star, Quote } from 'lucide-react';
import { useTheme } from '../ThemeContext'; // Assuming you have this hook or context

const testimonials = [
  {
    name: "Payal Sharma",
    role: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    content: "Zuridox transformed our digital infrastructure completely. Their expertise in IT consulting helped us achieve a 200% increase in efficiency.",
    rating: 5
  },
  {
    name: "Rahul Kumar",
    role: "CEO, InnovateLabs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    content: "The team's dedication to excellence and innovative solutions has made them our go-to technology partner. Exceptional service!",
    rating: 5
  },
  {
    name: "Nancy Tyagi",
    role: "Director, DataFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    content: "Working with Zuridox has been transformative. Their strategic approach to IT consulting delivered remarkable results for our business.",
    rating: 5
  }
];

export default function Testimonials() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} text-white`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Client Success Stories
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-2xl mx-auto`}>
            Hear from our clients about their experience working with Zuridox
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl relative group hover:bg-blue-600 transition-all duration-300 
                ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-lg border border-gray-200'}`}
            >
              <Quote className={`absolute top-6 right-6 w-10 h-10 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-900'} group-hover:text-white/20`} />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-white`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-gray-400 ${theme === 'dark' ? 'group-hover:text-white/80' : 'group-hover:text-gray-600'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 fill-current ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'} group-hover:text-yellow-300`}
                  />
                ))}
              </div>

              {/* Text Color Adjustments */}
              <p className={`text-gray-900 ${theme === 'dark' ? 'text-white' : 'group-hover:text-white'}`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
