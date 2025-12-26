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
            canonical="https://bidyutinnovation.com/School"
            schema={{
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Bidyut Innovation",
              url: "https://bidyutinnovation.com/School",
              logo: "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
              description:
                "Bidyut Innovation provides hands-on robotics, AI, and drone education for schools, transforming classrooms into innovation hubs. Students engage in project-based learning, creative problem-solving, and real-world applications, developing skills for future-ready careers.",
              sameAs: [
                "https://www.instagram.com/bidyutinnovation?igsh=ZGIzZnRodjVpdHR5",
                "https://www.linkedin.com/company/bidyutinnovation/",
                "https://www.facebook.com/share/15bB1RccVgV/",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Educational Programs",
                itemListElement: [
                  {
                    "@type": "EducationalOccupationalProgram",
                    name: "Robotics Lab Setup",
                    description:
                      "Fully equipped labs with kits, sensors, and tools to bring classroom learning to life.",
                  },
                  {
                    "@type": "EducationalOccupationalProgram",
                    name: "STREAM Programs",
                    description:
                      "Integrated programs combining Science, Technology, Robotics, Engineering, Arts, and Math.",
                  },
                  {
                    "@type": "EducationalOccupationalProgram",
                    name: "Teacher Training",
                    description:
                      "Expert-led workshops and ongoing support for teachers to confidently deliver robotics and AI education.",
                  },
                  {
                    "@type": "EducationalOccupationalProgram",
                    name: "AI & Coding Clubs",
                    description:
                      "Interactive coding and AI projects for students to enhance computational thinking.",
                  },
                  {
                    "@type": "EducationalOccupationalProgram",
                    name: "Hands-On STEM Projects",
                    description:
                      "Practical, project-based learning experiences in robotics, AI, and engineering.",
                  },
                ],
              },
            }}
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
