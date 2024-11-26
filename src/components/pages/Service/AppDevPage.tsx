import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import {
//   FaReact,
  FaNode,
  FaApple,
  FaAndroid,
  FaDatabase,
  FaAws,
  FaPython,
  FaDocker,
  FaJava,
  FaShoppingCart,
//   FaFilter,
  FaSwift,
  FaGit,
} from "react-icons/fa";
import { FaReact as FaReactNative } from "react-icons/fa";
import { useTheme } from "../../../ThemeContext";
import { Link } from "react-router-dom";

const AppDevelopmentPage = () => {
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
            ? "bg-gradient-to-r from-gray-800 to-gray-700"
            : "bg-gradient-to-r from-green-900 to-green-700"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">App Development</h1>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-300" : "text-green-100"
            }`}
          >
            Creating Powerful Mobile Applications to Elevate Your Business
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Services Section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaShoppingCart className="mx-auto mb-6 text-6xl text-blue-500" />
            <h3 className="text-2xl font-semibold mb-4">
              Custom Mobile E-Commerce Apps
            </h3>
            <p className="text-base mb-4">
              We build custom mobile apps designed to help your e-commerce
              business grow and provide a seamless user experience.
            </p>
            <Link
              to="#"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
            <FaReactNative className="mx-auto mb-6 text-6xl text-blue-500" />
            <h3 className="text-2xl font-semibold mb-4">
              Cross-Platform Mobile Development
            </h3>
            <p className="text-base mb-4">
              Our team specializes in developing cross-platform mobile
              applications using modern frameworks like React Native.
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
            <h3 className="text-2xl font-semibold mb-4">Robust Backend APIs</h3>
            <p className="text-base mb-4">
              We build secure and scalable backend solutions for your app using
              the latest technologies to ensure high performance.
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
            Our Approach to App Development
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaApple className="mx-auto mb-6 text-6xl text-gray-700" />
              <h3 className="text-xl font-semibold mb-4">
                Custom Mobile Solutions
              </h3>
              <p>
                Every app is designed and developed to meet the unique needs of
                your business, reflecting your brand’s vision.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaAndroid className="mx-auto mb-6 text-6xl text-green-600" />
              <h3 className="text-xl font-semibold mb-4">
                User-Centric Design
              </h3>
              <p>
                We focus on creating a seamless and intuitive experience for
                mobile users on both Android and iOS platforms.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaReactNative className="mx-auto mb-6 text-6xl text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">
                Cross-Platform Expertise
              </h3>
              <p>
                Using frameworks like React Native and Flutter, we deliver
                high-quality apps for both Android and iOS from a single
                codebase.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
              <FaAws className="mx-auto mb-6 text-6xl text-yellow-500" />
              <h3 className="text-xl font-semibold mb-4">Cloud Integration</h3>
              <p>
                We integrate cloud services like AWS to enhance the
                functionality and scalability of your mobile apps.
              </p>
            </div>
          </div>
        </div>

        {/* Our Development Process Section */}
        <div className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Mobile App Development Process
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaDatabase className="mx-auto mb-6 text-6xl text-yellow-500" />
              <h3 className="text-xl font-semibold mb-4">
                Discovery & Planning
              </h3>
              <p>
                We understand your business goals, target audience, and app
                requirements to ensure a clear path to success.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaReactNative className="mx-auto mb-6 text-6xl text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">
                Design & Prototyping
              </h3>
              <p>
                We create interactive prototypes and wireframes to visualize
                your app before moving to the development stage.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaNode className="mx-auto mb-6 text-6xl text-green-500" />
              <h3 className="text-xl font-semibold mb-4">App Development</h3>
              <p>
                Our developers use the latest technologies to bring your app to
                life, ensuring it meets high standards of performance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaGit className="mx-auto mb-6 text-6xl text-purple-500" />
              <h3 className="text-xl font-semibold mb-4">
                Testing & Quality Assurance
              </h3>
              <p>
                We perform rigorous testing to ensure your app is bug-free,
                secure, and provides a smooth user experience.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <FaAws className="mx-auto mb-6 text-6xl text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Launch & Support</h3>
              <p>
                After launch, we provide ongoing support and maintenance to
                ensure your app continues to perform at its best.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies We Use Section */}
        <div className="container mx-auto">
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
                <FaReactNative className="mx-auto text-6xl text-blue-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaNode className="mx-auto text-6xl text-green-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaApple className="mx-auto text-6xl text-gray-700" />
              </SwiperSlide>
              <SwiperSlide>
                <FaAndroid className="mx-auto text-6xl text-green-600" />
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
                <FaSwift className="mx-auto text-6xl text-blue-600" />
              </SwiperSlide>
              <SwiperSlide>
                <FaJava className="mx-auto text-6xl text-red-500" />
              </SwiperSlide>
              <SwiperSlide>
                <FaDocker className="mx-auto text-6xl text-cyan-600" />
              </SwiperSlide>
              <SwiperSlide>
                <FaGit className="mx-auto text-6xl text-orange-500" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentPage;
