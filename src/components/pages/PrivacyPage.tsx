import { Shield, Mail, Phone } from "lucide-react";
import { useTheme } from "../../ThemeContext";

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Protecting your privacy is our priority. Learn how we handle your
            information.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className={`rounded-2xl shadow-sm p-8 ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          <p className="mb-8 text-lg leading-relaxed">
            At Zuridox, we prioritize your privacy and are committed to
            protecting your data and information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your data when you use
            our services, website, or engage with our business. By using our
            services, you agree to the practices outlined in this policy.
          </p>

          <div className="space-y-8">
            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Information Collection
              </h2>
              <p className="mb-4">
                We collect various types of information to deliver and enhance
                our services.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email, phone, and
                  other identifying information for service and communication.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, device type,
                  cookies, and browser information for functionality.
                </li>
                <li>
                  <strong>Service Data:</strong> Information related to your
                  projects and analytics for tailored solutions.
                </li>
                <li>
                  <strong>Payment Information:</strong> Secure billing details
                  for paid services.
                </li>
              </ul>
            </section>

            {/* Use of Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
              <p>We use the collected data for purposes including:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Providing services and support</li>
                <li>Enhancing and developing solutions</li>
                <li>Marketing and promotions</li>
                <li>Ensuring security and compliance</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Data Protection and Security
              </h2>
              <p>
                We implement encryption, secure servers, and access controls to
                safeguard your data. Despite these efforts, no system is
                entirely secure. We notify affected users in case of data
                breaches.
              </p>
            </section>

            {/* Sharing and Retention */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Sharing and Retention
              </h2>
              <p>
                We do not sell your data. However, we may share it with service
                providers or comply with legal obligations. Data is retained
                only as long as necessary for service delivery or legal
                compliance.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Data Rights</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access: Request a copy of your personal data</li>
                <li>
                  Correction: Request corrections to inaccurate information
                </li>
                <li>
                  Deletion: Request data erasure under specific conditions
                </li>
                <li>Restriction: Object or limit data processing</li>
              </ul>
              <p className="mt-4">
                To exercise your rights, contact us via the details below.
              </p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Mail className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold">Email</h3>
                  <p>zuridox@gmail.com</p>
                </div>
                <div>
                  <Phone className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold">Phone</h3>
                  <p>+91-9389678954</p>
                </div>
                <div>
                  <Shield className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold">Address</h3>
                  <p>Badarpur , Delhi , india 110044</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
