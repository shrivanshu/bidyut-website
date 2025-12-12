import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import CobotVariants from '../Component/Cobot_components/CobotVariants';
import CobotDetail from '../Component/Cobot_components/CobotDetail';
import { ThemeProvider } from '../contexts/ThemeContext';
import HeroSection from '../Component/Cobot_components/heroSection';
import A2ComparisonChart from '../Component/Cobot_components/CobotComparisonChart';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function Cobot_page() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="GO2 Quadruped Robot | Education Programs | Bidyut Innovation"
          description="GO2 quadruped robot for robotics education. Hands-on learning with advanced quadruped technology."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Education/GO2"
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Unitree Robot Dog GO2",
            "image": "https://bidyutinnovation.com/GO2/GO2%20AIR.webp",
            "description": "Unitree GO2 is an advanced quadruped robot dog designed for education, AI, and robotics learning. Featuring realistic four-legged motion, 8-core computing, obstacle avoidance via 4D LIDAR, and modular payload options, it enables hands-on STREAM experiences for students, educators, and robotics enthusiasts.",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Education/GO2",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Education/GO2",
              "seller": {
                "@type": "Organization",
                "name": "Bidyut Innovation",
                "url": "https://bidyutinnovation.com",
                "logo": "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
                "telephone": "+91-9370782979",
                "email": "Info@bidyutrobotics.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "901 Clifton Corporate Park, 11/6, AB Road, Sector A, Slice 6, Aranya Nagar, VijayNagar",
                  "addressLocality": "Indore",
                  "addressRegion": "Madhya Pradesh",
                  "postalCode": "452010",
                  "addressCountry": "IN"
                }
              }
            }
          }}
        />
        <Header />
        <HeroSection/>
        <CobotVariants/>
        <CobotDetail onContactClick={() => navigate('/Contact')} />
  <A2ComparisonChart />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Cobot_page;
