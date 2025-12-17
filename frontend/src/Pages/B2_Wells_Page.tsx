import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import B2_Wells_Variants from '../Component/B2_Wells_components/B2_Wells_Variants';
import B2_Wells_Details from '../Component/B2_Wells_components/B2_Wells_Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import B2WellsHeroSection from '../Component/B2_Wells_components/B2WellsHeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function B2_Wells_Page() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="Unitree B2-W Inspection Robot | Next-Gen Agile Explorer"
          description="Boost safety and efficiency with the Quadruped Industry B2‑W inspection robot—detect faults, monitor hazards, and gain accurate real-time industrial insights."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Industry/B2-W"

        />
        <Header />
        <B2WellsHeroSection/>
        <B2_Wells_Variants/>
  <B2_Wells_Details onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default B2_Wells_Page;
