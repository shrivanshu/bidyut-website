import Footer from "../Component/FooterUnanimated";
import SchoolCarousel from "../Component/SchoolComponentsFinal/SchoolCarouselSection";
import { Helmet } from "react-helmet-async";
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

  const metaTitle = 'Robotics Lab Setup for Schools | Bidyut Innovation';
  const metaDescription =
    "Transform school learning with Bidyut Innovation’s Robotics Lab Setup. Hands-on programs in Robotics, AI, and STREAM empower students to innovate globally.";
  const pageUrl = 'https://bidyutinnovation.com/school/robotics-lab-setup';

  return (
    <ThemeProvider>
      <>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:url" content={pageUrl} />
          <link rel="canonical" href={pageUrl} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
        <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
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
