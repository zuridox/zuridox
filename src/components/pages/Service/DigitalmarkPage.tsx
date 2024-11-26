import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import {
  FaBullhorn,
  FaChartLine,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaSearchDollar,
  FaEnvelopeOpen,
  FaChartBar,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";import { useTheme } from "../../../ThemeContext";
import { Link } from "react-router-dom";

const DigitalMarketingPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen bg-${
        theme === "light" ? "white" : "gray-900"
      } text-${theme === "light" ? "black" : "white"}`}
    >
      {/* Hero Section */}
      <div
        className={`py-16 ${
          theme === "dark"
            ? "bg-gradient-to-r from-black-800 to-black-600"
            : "bg-gradient-to-r from-white-600 to-white-400"
        } text-black`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Digital Marketing</h1>
          <p className="text-xl">
            Driving Results with Data-Driven Digital Strategies
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Services Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaBullhorn className="mx-auto mb-6 text-6xl text-purple-500" />
            <h3 className="text-2xl font-semibold mb-4">
              Social Media Marketing
            </h3>
            <p className="text-base mb-4">
              Boost your brand presence across platforms like Facebook,
              Instagram, and LinkedIn with targeted campaigns.
            </p>
            <Link
              to="#"
              className="text-black-600 dark:text-purple-400 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaSearchDollar className="mx-auto mb-6 text-6xl text-blue-500" />
            <h3 className="text-2xl font-semibold mb-4">
              Pay-Per-Click Advertising
            </h3>
            <p className="text-base mb-4">
              Drive instant traffic and maximize ROI with strategic Google Ads
              and paid campaigns.
            </p>
            <Link
              to="#"
              className="text-black-600 dark:text-purple-400 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaChartBar className="mx-auto mb-6 text-6xl text-green-500" />
            <h3 className="text-2xl font-semibold mb-4">
              Data Analytics & Reporting
            </h3>
            <p className="text-base mb-4">
              Measure your success with detailed analytics to refine and improve
              your campaigns.
            </p>
            <Link
              to="#"
              className="text-black-600 dark:text-purple-400 hover:underline"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Approach to Digital Marketing
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaChartLine className="mx-auto mb-6 text-6xl text-orange-500" />
              <h3 className="text-xl font-semibold mb-4">Strategy First</h3>
              <p>
                We start with a comprehensive analysis to create tailored
                strategies aligned with your business goals.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaEnvelopeOpen className="mx-auto mb-6 text-6xl text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">
                Customer-Centric Approach
              </h3>
              <p>
                Focused on delivering personalized and engaging campaigns to
                connect with your target audience.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaFacebook className="mx-auto mb-6 text-6xl text-blue-700" />
              <h3 className="text-xl font-semibold mb-4">
                Multichannel Expertise
              </h3>
              <p>
                Expand your reach across multiple platforms, from social media
                to search engines.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaGoogle className="mx-auto mb-6 text-6xl text-green-500" />
              <h3 className="text-xl font-semibold mb-4">SEO Integration</h3>
              <p>
                Improve visibility with campaigns that work seamlessly with
                on-site SEO strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies We Use Section */}
        <div className="container mx-auto">
          <div className="my-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Platforms We Leverage</h2>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              <SwiperSlide>
                <FaFacebook className="mx-auto text-6xl text-blue-700" />
              </SwiperSlide>
              <SwiperSlide>
                <FaInstagram className="mx-auto text-6xl text-pink-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaGoogle className="mx-auto text-6xl text-red-600" />
              </SwiperSlide>
              <SwiperSlide>
                <FaTwitter className="mx-auto text-6xl text-blue-400" />
              </SwiperSlide>
              <SwiperSlide>
                <FaLinkedin className="mx-auto text-6xl text-blue-600" />
              </SwiperSlide>
              <SwiperSlide>
                <FaYoutube className="mx-auto text-6xl text-red-500" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingPage;
