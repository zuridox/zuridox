import {
  FaSearch,
  FaChartLine,
  FaBullhorn,
  FaMobileAlt,
  FaLightbulb,
  FaClock,
} from "react-icons/fa";
import { useTheme } from "../../../ThemeContext";
import { Link } from "react-router-dom";

const SEOPage = () => {
  const { theme } = useTheme();

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
        className={`py-7 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-900 to-blue-700"
            : "bg-gradient-to-r from-blue-900 to-blue-700"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Search Engine Optimization
          </h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-blue-100"
            }`}
          >
            Unlock the Power of SEO to Drive Traffic, Engagement, and
            Conversions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Services Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaSearch className="mx-auto mb-6 text-6xl text-blue-500" />
            <h3 className="text-2xl font-semibold mb-4">Keyword Research</h3>
            <p className="text-base mb-4">
              Identify high-performing keywords tailored to your industry and
              audience to boost your search rankings.
            </p>
            <Link
              to="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaChartLine className="mx-auto mb-6 text-6xl text-green-500" />
            <h3 className="text-2xl font-semibold mb-4">
              On-Page Optimization
            </h3>
            <p className="text-base mb-4">
              Enhance your website's structure, meta tags, and content to align
              with search engine algorithms.
            </p>
            <Link
              to="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaBullhorn className="mx-auto mb-6 text-6xl text-yellow-500" />
            <h3 className="text-2xl font-semibold mb-4">Off-Page SEO</h3>
            <p className="text-base mb-4">
              Build quality backlinks and improve domain authority with
              strategic off-page SEO techniques.
            </p>
            <Link
              to="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Approach to SEO</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaMobileAlt className="mx-auto mb-6 text-6xl text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">
                Mobile Optimization
              </h3>
              <p>
                Ensure your website is optimized for mobile-first indexing to
                stay ahead in search rankings.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaLightbulb className="mx-auto mb-6 text-6xl text-yellow-500" />
              <h3 className="text-xl font-semibold mb-4">Content Strategy</h3>
              <p>
                Develop compelling, keyword-rich content that drives organic
                traffic and user engagement.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaSearch className="mx-auto mb-6 text-6xl text-green-500" />
              <h3 className="text-xl font-semibold mb-4">Technical SEO</h3>
              <p>
                Optimize your site's architecture, improve loading speeds, and
                fix crawl errors for better rankings.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaClock className="mx-auto mb-6 text-6xl text-red-500" />
              <h3 className="text-xl font-semibold mb-4">
                Performance Tracking
              </h3>
              <p>
                Use advanced tools to monitor rankings, analyze traffic, and
                measure ROI.
              </p>
            </div>
          </div>
        </div>

        {/* Our SEO Process Section */}
        <div className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our SEO Process</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaSearch className="mx-auto mb-6 text-6xl text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">Discovery</h3>
              <p>
                Research your target audience, competitors, and industry trends
                to craft a custom SEO strategy.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaChartLine className="mx-auto mb-6 text-6xl text-green-500" />
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p>
                Optimize your website, enhance page speeds, and execute a
                strategic keyword plan.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaBullhorn className="mx-auto mb-6 text-6xl text-yellow-500" />
              <h3 className="text-xl font-semibold mb-4">Outreach</h3>
              <p>
                Build quality backlinks and leverage social media to improve
                domain authority.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaMobileAlt className="mx-auto mb-6 text-6xl text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">
                Mobile Optimization
              </h3>
              <p>
                Optimize for mobile search to ensure compatibility and
                user-friendliness.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaClock className="mx-auto mb-6 text-6xl text-red-500" />
              <h3 className="text-xl font-semibold mb-4">Monitoring</h3>
              <p>
                Regularly track performance metrics to refine the strategy and
                maintain results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOPage;
