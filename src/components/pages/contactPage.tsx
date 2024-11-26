import { Phone, Mail, MapPin } from "lucide-react";
import { useTheme } from "../../ThemeContext";

export default function ContactUsPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`pt-20 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            We’re here to help. Reach out to us for any assistance or inquiries.
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`p-6 rounded-2xl shadow-sm ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
          >
            <Phone className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone Support</h3>
            <p>+91-9389678954</p>
          </div>
          <div
            className={`p-6 rounded-2xl shadow-sm ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
          >
            <Mail className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p>contact@zuridox.com</p>
          </div>
          <div
            className={`p-6 rounded-2xl shadow-sm ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
          >
            <MapPin className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Address</h3>
            <p>Jasola Vihar , Delhi , india 110025</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div
        className={`py-16 ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === "light"
                      ? "border-gray-300 focus:ring-blue-500"
                      : "border-gray-700 bg-gray-900 text-white focus:ring-blue-300"
                  }`}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === "light"
                      ? "border-gray-300 focus:ring-blue-500"
                      : "border-gray-700 bg-gray-900 text-white focus:ring-blue-300"
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme === "light"
                    ? "border-gray-300 focus:ring-blue-500"
                    : "border-gray-700 bg-gray-900 text-white focus:ring-blue-300"
                }`}
                placeholder="Enter subject"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border ${
                  theme === "light"
                    ? "border-gray-300 focus:ring-blue-500"
                    : "border-gray-700 bg-gray-900 text-white focus:ring-blue-300"
                }`}
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
