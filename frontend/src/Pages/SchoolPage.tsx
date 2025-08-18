import AssembleRobot from '@/Component/SchoolComponents/AssembleRobot';
import Header from '../Component/Header';
import Footer from '../Component/FooterUnanimated';
import SchoolHero from '../Component/SchoolComponents/SchoolHeroSection';
import {BuildTogetherSection} from '../Component/SchoolComponents/BuildTogetherSection';

import Stream from '../Component/SchoolComponents/StreamSection';


import { ThemeProvider } from '../contexts/ThemeContext';


function SchoolPage() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header />
        <SchoolHero />
        <AssembleRobot/>
        <BuildTogetherSection/>   
        <Stream />
       <Footer />
      </div>
    </ThemeProvider>
    
  );
}

export default SchoolPage;
