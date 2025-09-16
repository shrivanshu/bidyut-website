// import { useState } from 'react';
// import AssembleRobot from '@/Component/SchoolComponent/AssembleRobot';
import Header from '../Component/Header';
import Footer from '../Component/FooterUnanimated';
// import SchoolHero from '../Component/SchoolComponent/SchoolHeroSection';
// import {BuildTogetherSection} from '../Component/SchoolComponent/BuildTogetherSection';
// import Stream from '../Component/SchoolComponent/StreamSection';
// import RoboticLabsForSchools from '../Component/SchoolComponent/RoboticLabsForSchools';
// import StreamLabSection from '../Component/SchoolComponent/StreamLabSection';
// import SchoolDetails from '../Component/SchoolComponent/SchoolDetails';
import { ThemeProvider } from '../contexts/ThemeContext';
// import SchoolHeroSection from '../Component/SchoolComponent/SchoolHeroSection';


import {AboutSchool} from '../Component/SchoolComponentsFinal/AboutSchool';
import {EducationSections} from '../Component/SchoolComponentsFinal/EducationSections';
import {CTASection} from '../Component/SchoolComponentsFinal/CTASection';
import {RoboticsSchools} from '../Component/SchoolComponentsFinal/RoboticsSchools';
import Scroller from '../Component/SchoolComponent/Scroller';

function SchoolPage() {
  // const [selectedGame, setSelectedGame] = useState<string>('puzzle');

  // const handleGameSelect = (gameId: string) => {
  //   setSelectedGame(gameId);
  // };

  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
       <Header />
       {/* <SchoolHeroSection/> */}
        {/* <SchoolHero /> */}
        {/* <StreamLabSection/> */}


        <AboutSchool/>
        <EducationSections/>
        <CTASection/>
        <RoboticsSchools/>
        <Scroller/>

        {/* <Stream /> */}
        {/* <SchoolDetails /> */}
        {/* <RoboticLabsForSchools/> */}
        {/* <BuildTogetherSection onGameSelect={handleGameSelect} />    */}
        {/* <AssembleRobot selectedGame={selectedGame} /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}



export default SchoolPage;