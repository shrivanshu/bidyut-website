
import Footer from '../Component/FooterUnanimated';
import SchoolCarousel from '../Component/SchoolComponentsFinal/SchoolCarouselSection'
import { ThemeProvider } from '../contexts/ThemeContext';
import AdvanceRoboticsLabs from '../Component/SchoolComponentsFinal/AdvanceRoboticsLabs';
import SchoolHeroSection from '@/Component/SchoolComponentsFinal/SchoolHeroSection';
import StreamSchool from '@/Component/SchoolComponentsFinal/StreamSchool';
import WhyBidyut from '@/Component/SchoolComponentsFinal/WhyBidyut';
import Header from "@/Component/Header";
import {AboutSchool} from '../Component/SchoolComponent/AboutSchool';
import {EducationSections} from '../Component/SchoolComponent/EducationSections';
import {CTASection} from '../Component/SchoolComponent/CTASection';
import {RoboticsSchools} from '../Component/SchoolComponent/RoboticsSchools';
import Scroller from '../Component/SchoolComponent/Scroller';



function FinalSchoolPage() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
              <Header />
       
  
   <SchoolHeroSection />
   <WhyBidyut />
   <StreamSchool />
   
   <SchoolCarousel />
   <AboutSchool/>
    <EducationSections/>
   <AdvanceRoboticsLabs />

   
       <RoboticsSchools/> 
               <CTASection/>
               
               <Scroller/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default FinalSchoolPage;
