// src/App.tsx
import React from 'react';
import HeroSection from './Component/heroSection';
import OfferingsCarousel from './Component/OurOfferings';
import Footer from './Component/Footer';
import EducationStream from './Component/EducationStream';
import EducationNews from './Component/EducationNews';
import EN1 from './Component/EN1';
import TestimonialSection from './Component/TestimonialSection';
import { testimonialData, Testimonial } from './Component/testimonials';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <OfferingsCarousel />
      <EducationNews />
      <EducationStream />
      <TestimonialSection />
      <Footer />

    </div>
  );
}

export default App;
