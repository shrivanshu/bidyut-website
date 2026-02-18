import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import InspectionVariants from '../Component/Inspection_components/InspectionVariants';
import InspectionDetails from '../Component/Inspection_components/InspectionDetails';
import { ThemeProvider } from '../contexts/ThemeContext';
import InspectionHeroSection from '../Component/Inspection_components/InspectionHeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function Inspection_page() {
  const navigate = useNavigate();
  return (
    <ThemeProvider>
      <SEO
        title="Industrial Inspection Robots | Automated Quality Control | Bidyut"
        description="Advanced inspection robots for industrial quality control. AI-powered automated inspection systems for manufacturing and infrastructure monitoring."
        canonical="https://bidyutinnovation.com/robot/solutions/inspection"
      />
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <Header />
        <InspectionHeroSection/>
        <InspectionVariants/>
  <InspectionDetails onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Inspection_page;
