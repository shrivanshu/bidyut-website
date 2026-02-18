import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import A2Variants from '../Component/A2Components/A2Variants';
import A2Details from '../Component/A2Components/A2Details';
import A2HeroSection from '../Component/A2Components/A2HeroSection';
import A2ComparisonChart from '../Component/A2Components/A2ComparisonChart';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function A2Page() {
  const navigate = useNavigate();
  
  return (
    <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <SEO
        title="Unitree A2 | Smart Quadruped Robot Dog for Tough Tasks"
        description="The Unitree A2 quadruped robot dog delivers high-speed agility, stability, and AI-driven performance—perfect for advanced industrial inspection and monitoring."
        canonical="https://bidyutinnovation.com/robot/quadrupeds/industry/a2"
      />
      <div className="sr-only">
        <h1>Unitree A2 Quadruped Robot Dog - High-Performance Industrial Solution</h1>
        <p>The Unitree A2 quadruped robot dog combines high-speed agility, exceptional stability, and AI-driven performance for advanced industrial applications. Perfect for inspection, monitoring, surveillance, and autonomous navigation in challenging environments, the A2 delivers reliable performance for industries requiring robust mobile robotics solutions.</p>
      </div>
      <Header />
      <A2HeroSection/>
      <A2Variants/>
      <A2Details onContactClick={() => navigate('/Contact')} />
      <A2ComparisonChart />
      <Footer />
    </div>
  );
}

export default A2Page;
