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
          title="Unitree R1 Robot | Transform STEM Learning with Humanoids"
          description="Explore the Unitree R1 robot, designed for interactive STEM learning and AI skills."
          canonical="https://bidyutinnovation.com/robot/humanoid/education/r1"
        />
        <div className="sr-only">
          <h1>Unitree R1 Educational Robot</h1>
          <p>The Unitree R1 robot is an advanced humanoid designed specifically for interactive STEM education, coding instruction, and AI skill development. This educational robot engages students through hands-on innovation, creative problem-solving, and practical robotics experience that prepares them for future technology careers.</p>
        </div>
        <Header />
        <HeroSectionR1 />
        <R1Variants />
        <R1Detail onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_page
