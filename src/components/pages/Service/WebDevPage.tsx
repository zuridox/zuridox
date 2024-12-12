import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./WebDevPage.css";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaAws,
  FaPython,
  FaAngular,
  FaDocker,
  FaJava,
  FaShoppingCart,
  FaFlask,
  FaPhp,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { useTheme } from "../../../ThemeContext";
import { Link } from "react-router-dom";

const WebDevelopmentPage = () => {
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
        className={`py-16 ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-900 to-blue-700"
            : "bg-gradient-to-r from-blue-900 to-blue-700"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Web Development</h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-blue-100"
            }`}
          >
            Building Websites to Empower Your Business
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Services Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaShoppingCart className="mx-auto mb-6 text-6xl text-blue-500" />
            <h3 className="text-2xl font-semibold mb-4">
              Custom E-Commerce Platforms
            </h3>
            <p className="text-base mb-4">
              We develop custom e-commerce solutions designed to grow with your
              business, offering seamless experiences for your customers.
            </p>
            <Link
              to="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaReact className="mx-auto mb-6 text-6xl text-blue-500" />
            <h3 className="text-2xl font-semibold mb-4">
              Responsive & Interactive Web Designs
            </h3>
            <p className="text-base mb-4">
              We create engaging and responsive web designs that adjust to every
              screen size and user interaction.
            </p>
            <Link
              to="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaNode className="mx-auto mb-6 text-6xl text-green-500" />
            <h3 className="text-2xl font-semibold mb-4">
              Scalable Backend Solutions
            </h3>
            <p className="text-base mb-4">
              Our team builds robust backends with high scalability and
              performance, ensuring your website handles future growth.
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
          <h2 className="text-3xl font-bold mb-6">
            Our Approach to Web Development
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaHtml5 className="mx-auto mb-6 text-6xl text-orange-500" />
              <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
              <p>
                Every website is tailored to your unique business goals. We
                design and develop solutions that reflect your brand.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaCss3Alt className="mx-auto mb-6 text-6xl text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">
                User-Focused Design
              </h3>
              <p>
                Our design approach prioritizes user experience, ensuring an
                intuitive and engaging journey across all devices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaReact className="mx-auto mb-6 text-6xl text-cyan-500" />
              <h3 className="text-xl font-semibold mb-4">
                SEO-Friendly Development
              </h3>
              <p>
                We build websites optimized for search engines, ensuring higher
                visibility and better organic reach.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaNode className="mx-auto mb-6 text-6xl text-green-500" />
              <h3 className="text-xl font-semibold mb-4">Fast Loading Speed</h3>
              <p>
                We prioritize performance by optimizing code and images to
                ensure your site loads quickly and smoothly.
              </p>
            </div>
          </div>
        </div>

        {/* Our Development Process Section */}
        <div className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Web Development Process
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaDatabase className="mx-auto mb-6 text-6xl text-yellow-500" />
              <h3 className="text-xl font-semibold mb-4">
                Discovery & Planning
              </h3>
              <p>
                We start by understanding your needs, target audience, and goals
                to lay the foundation for a successful project.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaReact className="mx-auto mb-6 text-6xl text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">
                Design & Prototyping
              </h3>
              <p>
                Our design team creates prototypes and mockups to define the
                look, feel, and functionality of your site.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaNode className="mx-auto mb-6 text-6xl text-green-500" />
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p>
                Our developers bring the design to life using the latest
                technologies, ensuring your site performs flawlessly.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaDatabase className="mx-auto mb-6 text-6xl text-purple-500" />
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p>
                We thoroughly test your website for usability, performance, and
                security to ensure everything works as expected.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaAws className="mx-auto mb-6 text-6xl text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Launch & Support</h3>
              <p>
                After deployment, we provide ongoing support to ensure
                everything runs smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies We Use Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="my-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Technologies We Use</h2>
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
                <FaReact className="mx-auto text-6xl text-blue-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaNode className="mx-auto text-6xl text-green-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaHtml5 className="mx-auto text-6xl text-orange-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaCss3Alt className="mx-auto text-6xl text-blue-600" />
              </SwiperSlide>
              <SwiperSlide>
                <FaDatabase className="mx-auto text-6xl text-yellow-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaAws className="mx-auto text-6xl text-blue-600" />
              </SwiperSlide>
              <SwiperSlide>
                <FaPython className="mx-auto text-6xl text-blue-400" />
              </SwiperSlide>
              <SwiperSlide>
                <FaAngular className="mx-auto text-6xl text-red-600" />
              </SwiperSlide>
              <SwiperSlide>
                <FaDocker className="mx-auto text-6xl text-cyan-600" />
              </SwiperSlide>
              <SwiperSlide>
                <FaJava className="mx-auto text-6xl text-red-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaFlask className="mx-auto text-6xl text-red-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaPhp className="mx-auto text-6xl text-red-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaBootstrap className="mx-auto text-6xl text-red-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaSass className="mx-auto text-6xl text-red-500" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;




 