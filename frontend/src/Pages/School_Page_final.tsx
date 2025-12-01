import { useEffect } from "react";
import Footer from "../Component/FooterUnanimated";
import SchoolCarousel from "../Component/SchoolComponentsFinal/SchoolCarouselSection";
import { ThemeProvider } from "../contexts/ThemeContext";
import AdvanceRoboticsLabs from "../Component/SchoolComponentsFinal/AdvanceRoboticsLabs";
import SchoolHeroSection from "@/Component/SchoolComponentsFinal/SchoolHeroSection";
import StreamSchool from "@/Component/SchoolComponentsFinal/StreamSchool";
import WhyBidyut from "@/Component/SchoolComponentsFinal/WhyBidyut";
import Header from "@/Component/Header";
import { AboutSchool } from "../Component/SchoolComponentsFinal/AboutSchool";
import { EducationSections } from "../Component/SchoolComponentsFinal/EducationSections";
import { CTASection } from "../Component/SchoolComponentsFinal/CTASection";
import { RoboticsSchools } from "../Component/SchoolComponentsFinal/RoboticsSchools";
import Scroller from "../Component/SchoolComponentsFinal/Scroller";
import { SEO } from '../hooks/useSEO';

function FinalSchoolPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Bidyut Innovation",
    url: "https://bidyutinnovation.com/",
    logo: "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "9370782979",
      contactType: ""
    },
    sameAs: [
      "https://www.instagram.com/bidyutinnovation?igsh=ZGIzZnRodjVpdHR5",
      "https://www.linkedin.com/company/bidyutinnovation/"
    ]
  };

  useEffect(() => {
    const schemaJson = JSON.stringify(schema);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = schemaJson;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <ThemeProvider>
      <>
        <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
          <SEO
            title="Robotics Lab Setup for Schools | Teacher Training | Bidyut"
            description="Robotics Lab Setup for schools with hands-on learning, teacher training, workshops, and drone programs. Making STREAM and AI education practical and engaging."
            canonical="https://bidyutinnovation.com/School"
          />
          <Header />

          <SchoolHeroSection />
          <WhyBidyut />
          <StreamSchool />

          <SchoolCarousel />
          <AboutSchool />
          <EducationSections />
          <AdvanceRoboticsLabs />

          <RoboticsSchools />
          <CTASection />

          <Scroller />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default FinalSchoolPage;
