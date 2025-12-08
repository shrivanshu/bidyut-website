import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import A2Variants from '../Component/A2Components/A2Variants';
import A2Details from '../Component/A2Components/A2Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import A2HeroSection from '../Component/A2Components/A2HeroSection';
import A2ComparisonChart from '../Component/A2Components/A2ComparisonChart';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function A2Page() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="Unitree A2 | Smart Quadruped Robot Dog for Tough Tasks"
          description="The Unitree A2 quadruped robot dog delivers high-speed agility, stability, and AI-driven performance—perfect for advanced industrial inspection and monitoring."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Industry/A2"
        />
        <Header />
  <A2HeroSection/>
  <A2Variants/>
  <A2Details onContactClick={() => navigate('/Contact')} />
  <A2ComparisonChart />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default A2Page;
