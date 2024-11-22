import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Footer from "./components/Footer";
import AboutPage from "./components/pages/AboutPage";
import CareersPage from "./components/pages/CareersPage";
import PartnersPage from "./components/pages/PartnersPage";
import NewsPage from "./components/pages/NewsPage";
import BlogPage from "./components/pages/BlogPage";
import CaseStudiesPage from "./components/pages/CaseStudiesPage";
import EventsPage from "./components/pages/EventsPage";
import HelpCenterPage from "./components/pages/HelpCenterPage";
import WhatsAppButton from "./components/WhatsappButton";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Stats />
                <Services />
                <WhyChooseUs />
                <Partners />
                <Testimonials />
                <Team />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route
            path="*"
            element={<p>Page not found. Please navigate to a valid page.</p>}
          />
        </Routes>
        <Footer />
      </div>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
