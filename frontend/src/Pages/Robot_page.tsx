import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionRobot from '../Component/robot_components/HeroSectionRobot';
import RobotVariants from '../Component/robot_components/RobotVariants';
import RobotDetail from '../Component/robot_components/RobotDetail';
import Table from '../Component/G1_Table';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useCanonical } from '../hooks/useCanonical';

function Robot_page() {
  // Set canonical URL
  useCanonical('https://bidyutinnovation.com/Robot/Humanoid/Education/G1');
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header />
        <HeroSectionRobot />
        <RobotVariants/>
        <RobotDetail/>
  <Table/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Robot_page;
