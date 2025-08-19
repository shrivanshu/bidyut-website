import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionRobot from '../Component/robot_components/HeroSectionRobot';
import RobotVariants from '../Component/robot_components/RobotVariants';
import RobotDetail from '../Component/robot_components/RobotDetail';
import Table from '../Component/Table';
import { ThemeProvider } from '../contexts/ThemeContext';

function Robot_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <Header />
        <div className=' pt-8'>
        <HeroSectionRobot />
        </div>
        <RobotVariants/>
        <RobotDetail/>
        <Table/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Robot_page;
