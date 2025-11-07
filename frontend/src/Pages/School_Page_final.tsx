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
  const schemaJson = JSON.stringify(schema);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = metaTitle;

    const setMeta = (attribute: 'name' | 'property', key: string, value: string) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      const created = !element;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      const previous = element.getAttribute('content');
      element.setAttribute('content', value);
      return { element, previous, created };
    };

    const setLink = (rel: string, value: string) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);
      const created = !element;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      const previous = element.getAttribute('href');
      element.setAttribute('href', value);
      return { element, previous, created };
    };

    const metaNodes = [
      setMeta('name', 'description', metaDescription),
      setMeta('property', 'og:title', metaTitle),
      setMeta('property', 'og:description', metaDescription),
      setMeta('property', 'og:url', pageUrl)
    ];

    const canonical = setLink('canonical', pageUrl);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = schemaJson;
    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;
      metaNodes.forEach(({ element, previous, created }) => {
        if (created) {
          element.remove();
        } else if (previous) {
          element.setAttribute('content', previous);
        } else {
          element.removeAttribute('content');
        }
      });
      if (canonical.created) {
        canonical.element.remove();
      } else if (canonical.previous) {
        canonical.element.setAttribute('href', canonical.previous);
      } else {
        canonical.element.removeAttribute('href');
      }
      script.remove();
    };
  }, [metaTitle, metaDescription, pageUrl, schemaJson]);

  return (
    <ThemeProvider>
      <>
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
