import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import CobotVariants from '../Component/Cobot_components/CobotVariants';
import CobotDetail from '../Component/Cobot_components/CobotDetail';
import { ThemeProvider } from '../contexts/ThemeContext';
import HeroSection from '../Component/Cobot_components/heroSection';
import A2ComparisonChart from '../Component/Cobot_components/CobotComparisonChart';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function Cobot_page() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="Unitree Robot Dog GO2 | Multipurpose AI Quadruped Robot"
          description="Explore the Robot Dog GO2 – an advanced four-legged robot designed for education, research, autonomous robotics, and engaging interactive learning experiences."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Education/GO2"

        />
        <Header />
        <HeroSection/>
        <CobotVariants/>
        <CobotDetail onContactClick={() => navigate('/Contact')} />
  <A2ComparisonChart />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Cobot_page;
