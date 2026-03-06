import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionH1_2 from '../Component/H1-2_components/HeroSectionH1_2';
import H1_2Variants from '../Component/H1-2_components/H1_2Variants';
import H1Detail from '../Component/H1_components/H1Detail';
import H1ComparisonChart from '../Component/H1_components/H1ComparisonChart';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';
function H1_2_page() {
  const navigate = useNavigate();
  
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <SEO
          title="Unitree Humanoid Robot H1-2 | Advanced Industrial Robotics"
          description="Discover the Unitree Humanoid Robot H1-2, a full-size industrial robot with AI intelligence, precision, and speed—designed for automation and research."
          canonical="https://bidyutinnovation.com/robot/humanoids/industry/h1-2"
        />
        <div className="sr-only">
          <h1>Unitree H1-2 Humanoid Robot - Advanced Industrial Automation Solution</h1>
          <p>The Unitree Humanoid Robot H1-2 is a full-size industrial robot featuring advanced AI intelligence, exceptional precision, and high-speed performance. Designed for industrial automation, manufacturing, logistics, and research applications, the H1-2 delivers cutting-edge robotics technology for demanding industrial environments.</p>
        </div>
        <Header  />
        <HeroSectionH1_2 />
        <H1_2Variants/>
        <H1Detail onContactClick={() => navigate('/Contact')} />
  <H1ComparisonChart/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_2_page
