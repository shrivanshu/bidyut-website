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
import { SEO } from "../hooks/useSEO";

function FinalSchoolPage() {
  return (
    <ThemeProvider>
      <>
        <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
          <SEO
            title="Robotics Lab Setup for Schools | Teacher Training | Bidyut"
            description="Robotics Lab Setup for schools with hands-on learning, teacher training, workshops, and drone programs. Making STREAM and AI education practical and engaging."
            canonical="https://bidyutinnovation.com/school"

          />
          <h1 className="sr-only">Robotics Lab Setup for Schools</h1>
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
