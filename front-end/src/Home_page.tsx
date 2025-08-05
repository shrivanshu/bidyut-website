// src/App.tsx
import HeroSection from './Component/home_page/heroSection';
import OfferingsCarousel from './Component/home_page/OurOfferings';
import Footer from './Component/Footer';
import EducationStream from './Component/home_page/EducationStream';
import LmsSection from './Component/home_page/lmsSection';
import EducationNews from './Component/home_page/EducationNews';
import Header from './Component/Header';
import Clock from './Component/home_page/Clock';
import TestimonialSection from './Component/home_page/TestimonialSection';
import TrustedPartners from './Component/home_page/TrustedPartners';
import { ThemeProvider } from './contexts/ThemeContext';



function App() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSection />
        <OfferingsCarousel />
        <Clock />
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

export default App;
