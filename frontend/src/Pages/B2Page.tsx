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
          title="B2 Quadruped Robot | Industry Solutions | Bidyut Innovation"
          description="B2 quadruped robot for industrial applications. Advanced automation, inspection, and industrial tasks."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Industry/B2"
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Unitree B2 Quadruped Robot",
            "image": "https://bidyutinnovation.com/media/B2-3dLidar.png",
            "description": "Unitree B2 Advanced is a high-performance industrial quadruped robot designed for automation, inspection, and logistics, featuring agile mobility, heavy payload capacity, and advanced sensing for real-world operations.",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Industry/B2",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Industry/B2",
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
        <B2HeroSection/>
        <B2Variants/>
  <B2Details onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default B2Page;
