import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import B2Variants from '../Component/B2_components/B2Variants';
import B2Details from '../Component/B2_components/B2Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import B2HeroSection from '../Component/B2_components/B2HeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function B2Page() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="Unitree B2 | Smart Quadruped Robot for Research & Industry"
          description="Explore the Quadruped Robot B2, built for industrial automation, AI-driven tasks, and advanced mobility. Fast, precise and designed for tough environments."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Industry/B2"
        />
        <Header />
        <B2HeroSection/>
        <B2Variants/>
  <B2Details onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default B2Page;
