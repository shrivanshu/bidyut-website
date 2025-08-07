
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
import { ThemeProvider } from '../contexts/ThemeContext';



function Home_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen overflow-x-hidden">
        <Header />
        <HeroSection />
        <OfferingsCarousel />
        {/* <Clock /> */}
        <EducationNews />
        <LmsSection/>
        <TrustedPartners />
        <TestimonialSection />
        <EducationStream />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Home_page;
