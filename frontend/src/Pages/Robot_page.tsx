import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionRobot from '../Component/robot_components/HeroSectionRobot';
import RobotVariants from '../Component/robot_components/RobotVariants';
import RobotDetail from '../Component/robot_components/RobotDetail';
import Table from '../Component/G1_Table';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SEO } from '../hooks/useSEO';

function Robot_page() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <SEO
          title="Humanoid Education G1 | Hands-On Learning Educational Robot"
          description="Meet the Humanoid Education G1, a smart educational robot for hands-on STREAM learning, coding, and AI exploration. Inspire creativity and transform learning."
          canonical="https://bidyutinnovation.com/robot/humanoids/education/g1"
        />
        <div className="sr-only">
          <h1>Humanoid Education G1 Robot - Advanced Educational Robotics Platform</h1>
          <p>The Humanoid Education G1 is a cutting-edge educational robot designed for STREAM learning, coding education, and AI exploration in schools and universities. This advanced humanoid robot provides hands-on learning experiences that inspire creativity, develop problem-solving skills, and prepare students for careers in robotics and technology.</p>
        </div>
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
