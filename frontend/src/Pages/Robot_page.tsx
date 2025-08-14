import Footer from '../Component/Footer';
import Header from '../Component/Header';
import HeroSectionRobot from '../Component/robot_components/HeroSectionRobot';
import RobotVariants from '../Component/robot_components/RobotVariants';
import RobotDetail from '../Component/robot_components/RobotDetail';
import { ThemeProvider } from '../contexts/ThemeContext';

function Robot_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSectionRobot />
        <RobotVariants/>
        <RobotDetail/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Robot_page;
