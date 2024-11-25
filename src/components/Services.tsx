import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../ThemeContext"; // Import the context
import * as THREE from "three";
import {
  Code2,
  Smartphone,
  Users,
  ArrowUpRight,
  Workflow,
  Database,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Code2, // Web Development icon
    title: "Web Development",
    description:
      "Building responsive and dynamic websites tailored to your business needs, delivering exceptional user experiences.",
    features: [
      "Custom Website Design",
      "E-commerce Platforms",
      "Progressive Web Apps",
    ],
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Smartphone, // App Development icon
    title: "App Development",
    description:
      "Crafting high-quality, user-centric mobile applications to enhance engagement and streamline operations.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Apps",
      "Custom App Ecosystems",
    ],
    color: "from-indigo-600 to-indigo-800",
  },
  {
    icon: Workflow, // SEO icon
    title: "Search Engine Optimization",
    description:
      "Boosting online visibility through proven SEO strategies to drive organic traffic and improve search rankings.",
    features: [
      "Keyword Optimization",
      "On-Page & Off-Page SEO",
      "Content Strategy",
    ],
    color: "from-red-600 to-red-800",
  },
  {
    icon: Database, // Data Intelligence icon (unchanged)
    title: "Data Intelligence",
    description:
      "Advanced data analytics and AI-driven insights to transform complex data into strategic business intelligence.",
    features: [
      "Big Data Analytics",
      "Machine Learning Solutions",
      "Predictive Modeling",
    ],
    color: "from-green-600 to-green-800",
  },
  {
    icon: Users, // Digital Marketing icon
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions designed to grow your brand, connect with audiences, and drive results.",
    features: [
      "Social Media Campaigns",
      "Pay-Per-Click Advertising",
      "Content Marketing",
    ],
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: Shield, // Comprehensive IT Solutions icon
    title: "Comprehensive IT Solutions",
    description:
      "Holistic IT services to streamline operations, enhance security, and support business innovation.",
    features: [
      "Managed IT Services",
      "Infrastructure Optimization",
      "IT Consulting",
    ],
    color: "from-cyan-600 to-cyan-800",
  },
];


const ProfessionalParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particles = new THREE.BufferGeometry();
    const particleCount = 4000;

    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      sizes[i] = Math.random() * 0.5 + 0.1;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x2563eb, // Tailwind blue-600
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particleMesh = new THREE.Points(particles, particleMaterial);
    scene.add(particleMesh);

    const animate = () => {
      particleMesh.rotation.y += 0.0006;
      particleMesh.rotation.x += 0.0003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

const Services: React.FC = () => {
  const { theme } = useTheme(); // Get the current theme
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services"
      className={`relative py-28 ${theme === "dark" ? "bg-gray-950" : "bg-white"} overflow-hidden`}
    >
      <ProfessionalParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl font-extrabold ${theme === "dark" ? "text-white" : "text-black"} mb-6 tracking-tight`}
          >
            Enterprise Technology Solutions
          </h2>
          <p
            className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-700"} max-w-4xl mx-auto`}
          >
            Empowering organizations with cutting-edge technological
            innovations, strategic insights, and transformative digital
            solutions that drive competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className={`relative group cursor-pointer transition-all duration-500 ${isActive ? "scale-98" : "scale-95"}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl transition-opacity duration-500`}
                />
                <div
                  className={`relative z-10 border border-gray-200 p-6 transform transition-all duration-500 rounded-2xl ${isActive ? "shadow-2xl" : "shadow-lg"} ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
                >
                  <div
                    className={`mb-3 inline-block p-2 bg-gradient-to-br ${service.color} rounded-xl transition-transform duration-500 ${isActive ? "rotate-6 scale-110" : ""}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3
                    className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-black"}`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-gray-400 mb-3 leading-relaxed min-h-[70px] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {service.description}
                  </p>

                  <div className="space-y-1 mb-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      >
                        <span
                          className={`w-2 h-2 mr-3 rounded-full bg-gradient-to-br ${service.color}`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className={`flex items-center gap-2 text-white font-semibold group/button hover:text-blue-400 transition-colors ${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      Explore Service
                      <ArrowUpRight className="w-5 h-5 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
