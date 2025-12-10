import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionR1 from '../Component/R1_components/HeroSectionR1';
import R1Variants from '../Component/R1_components/R1Variants';
import R1Detail from '../Component/R1_components/R1Detail';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';
function H1_page() {
  const navigate = useNavigate();
  
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <SEO
          title="R1 Humanoid Robot | Education Programs | Bidyut Innovation"
          description="R1 humanoid robot for robotics education. Advanced humanoid for schools and educational institutions."
          canonical="https://bidyutinnovation.com/Robot/Humanoid/Education/R1"
        />
        <Header />
        <HeroSectionR1 />
        <R1Variants/>
  <R1Detail onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_page
