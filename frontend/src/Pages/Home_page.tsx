
import HeroSection from '../Component/home_components/heroSection';
import OfferingsCarousel from '../Component/home_components/OurOfferings';
import Footer from '../Component/Footer';
import EducationStream from '../Component/home_components/EducationStream';
import LmsSection from '../Component/home_components/lmsSection';
import EducationNews from '../Component/home_components/EducationNews';
import Header from '../Component/Header';
// import Clock from '../Component/home_components/Clock';
import TestimonialSection from '../Component/home_components/TestimonialSection';
import TrustedPartners from '../Component/home_components/TrustedPartners';
// import TrustedPartners21 from '../Component/home_components/TrustedPartners21';
import { ThemeProvider } from '../contexts/ThemeContext';
import Loader from "../Component/Loader";
import { useState, useEffect } from "react";


function Home_page() {

   const [loading, setLoading] = useState(true);
   const [fadeOut, setFadeOut] = useState(false);

   useEffect(() => {
    const handleLoad = () => {
      // Add a small buffer (e.g. 1s) to ensure visual stability
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 700); // match fade duration
      }, 2700);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);


  return (
    
    <ThemeProvider>
 {loading && <Loader fadeOut={fadeOut} />}

      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen overflow-x-hidden">
        <Header />
        <HeroSection />
        <OfferingsCarousel />
        {/* <Clock /> */}
        <EducationNews />
        <LmsSection/>
        <TrustedPartners />
        {/* <TrustedPartners21 /> */}
        <TestimonialSection />
        <EducationStream />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Home_page;
