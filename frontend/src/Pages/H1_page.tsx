import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionRobot from '../Component/robot_components/HeroSectionRobot';
import RobotVariants from '../Component/robot_components/RobotVariants';
import RobotDetail from '../Component/robot_components/RobotDetail';
import { ThemeProvider } from '../contexts/ThemeContext';
function H1_page() {
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSectionRobot />
        <RobotVariants/>
        <RobotDetail/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_page
