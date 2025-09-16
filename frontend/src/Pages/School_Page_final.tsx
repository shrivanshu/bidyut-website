import Footer from '../Component/FooterUnanimated';
import SchoolCarousel from '../Component/SchoolComponentsFinal/SchoolCarouselSection'
import { ThemeProvider } from '../contexts/ThemeContext';
import AdvanceRoboticsLabs from '../Component/SchoolComponentsFinal/AdvanceRoboticsLabs';
function FinalSchoolPage() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
       
  
 
   <SchoolCarousel />
   <AdvanceRoboticsLabs />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default FinalSchoolPage;
