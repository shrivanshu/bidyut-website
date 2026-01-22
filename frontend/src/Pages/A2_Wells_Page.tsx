import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import A2_Wells_Variants from '../Component/A2_Wells_components/A2_Wells_Variants';
import A2_Wells_Details from '../Component/A2_Wells_components/A2_Wells_Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import A2WellHeroSection from '../Component/A2_Wells_components/A2WellHeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function A2_Wells_Page() {
  const navigate = useNavigate();

  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="Unitree A2‑W | Autonomous Inspection Robot for Industry"
          description="The Unitree A2-W is an autonomous inspection robot for detecting faults and hazards."
          canonical="https://bidyutinnovation.com/robot/quadrupeds/industry/a2-w"
        />
        <div className="sr-only">
          <h1>Unitree A2-W Autonomous Inspection Robot</h1>
          <p>The Unitree A2-W quadruped robot is an advanced autonomous inspection robot engineered to detect faults, monitor hazards, and deliver real-time industrial insights. Perfect for industrial facilities, manufacturing plants, and infrastructure monitoring, the A2-W provides reliable autonomous inspection capabilities in challenging environments.</p>
        </div>
        <Header />
        <A2WellHeroSection />
        <A2_Wells_Variants />
        <A2_Wells_Details onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default A2_Wells_Page;
