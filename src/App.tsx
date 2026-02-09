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
import Footer from "./components/Footer";
import AboutPage from "./components/pages/AboutPage";
import CareersPage from "./components/pages/CareersPage";
import PartnersPage from "./components/pages/PartnersPage";
import NewsPage from "./components/pages/NewsPage";
import CaseStudiesPage from "./components/pages/CaseStudiesPage";
import EventsPage from "./components/pages/EventsPage";
import HelpCenterPage from "./components/pages/HelpCenterPage";
// import WhatsAppButton from "./components/WhatsappButton";
import ContactPage from "./components/pages/contactPage";
import PrivacyPolicyPage from "./components/pages/PrivacyPage";
import TermsAndcondition from "./components/pages/TermsandCon";
import PageNotFound from "./components/pages/PageNotFound";
import WebDevelopmentPage from "./components/pages/Service/WebDevPage";
import MobileAppDevelopmentPage from "./components/pages/Service/AppDevPage";
// import SearchEngineOptimizationPage from "./components/pages/Service/.Page";
import DigitalMarketingPage from "./components/pages/Service/DigitalmarkPage";
import Blog from "./components/pages/Blog";
import Post from "./components/pages/Post";
import VerifyCertificate from "./components/pages/VerifyCertificate";

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
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsAndcondition />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/webdev" element={<WebDevelopmentPage />} />
          <Route path="/appdev" element={<MobileAppDevelopmentPage />} />
          {/* <Route path="/." element={<SearchEngineOptimizationPage />} /> */}
          <Route path="/digitalmarketing" element={<DigitalMarketingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/verify" element={<VerifyCertificate/>} />
        </Routes>
        <Footer />
      </div>
      {/* <WhatsAppButton /> */}
    </Router>
  );
}

export default App;
