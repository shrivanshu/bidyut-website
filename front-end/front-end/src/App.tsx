// src/App.tsx

import HeroSection from './Component/heroSection';
import OfferingsCarousel from './Component/OurOfferings';
import Footer from './Component/Footer';
import EducationStream from './Component/EducationStream';
import LmsSection from './Component/lmsSection';
import EducationNews from './Component/EducationNews';
import Header from './Component/Header';
import Clock from './Component/Clock';
import TestimonialSection from './Component/TestimonialSection';
import TrustedPartners from './Component/TrustedPartners';



function App() {
  return (
    <div className="App bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <HeroSection />
      <OfferingsCarousel />
      <Clock />
      <EducationNews />
      <TrustedPartners />
      <TestimonialSection />
      <EducationStream />
      <LmsSection/>
      <Footer />

    </div>
  );
}

export default App;
