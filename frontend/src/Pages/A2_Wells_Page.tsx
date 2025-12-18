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
          description="The Unitree A2‑W quadruped robot is an autonomous inspection robot designed to detect faults, monitor hazards, and provide real-time industrial insights."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Industry/A2-W"

        />
        <Header />
        <A2WellHeroSection/>
        <A2_Wells_Variants/>
  <A2_Wells_Details onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default A2_Wells_Page;
