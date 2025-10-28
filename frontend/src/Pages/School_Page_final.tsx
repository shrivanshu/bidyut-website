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
import { Helmet } from "react-helmet-async";

function FinalSchoolPage() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Robotics Lab Setup for Schools | Bidyut Innovation</title>
        <meta
          name="description"
          content="Transform school learning with Bidyut Innovation’s Robotics Lab Setup. Hands-on programs in Robotics, AI, and STREAM empower students to innovate globally."
        />
        <meta
          property="og:description"
          content="Transform school learning with Bidyut Innovation’s Robotics Lab Setup. Hands-on programs in Robotics, AI, and STREAM empower students to innovate globally."
        />
        <link rel="canonical" href="https://bidyutinnovation.com/school/" />
      </Helmet>
      <div className="App bg-white dark:bgm-black transition-colors duration-300 min-h-screen">
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
    </ThemeProvider>
  );
}

export default FinalSchoolPage;
