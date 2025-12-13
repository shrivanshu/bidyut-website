import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import GO2VVariants from '../Component/GO2VComponents/GO2VVariants';
import GO2VDetails from '../Component/GO2VComponents/GO2VDetails';
import { ThemeProvider } from '../contexts/ThemeContext';
import GO2VHeroSection from '../Component/GO2VComponents/GO2VHeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function GO2VPage() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="GO2-W Quadruped Robot | Education Programs | Bidyut Innovation"
          description="GO2-W quadruped robot for robotics education programs."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Education/GO2-W"
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Unitree GO2-W Robot",
            "image": "https://bidyutinnovation.com/GO2/GO2-W-U2.webp",
            "description": "Unitree GO2-W is an advanced all-terrain quadruped robot combining wheeled mobility with legged agility. Equipped with 16 joint motors, 4D-LIDAR, RealSense depth camera, and high-performance computing, it enables research, inspections, and versatile educational and industrial applications.",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Education/GO2-W",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Education/GO2-W",
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
  <GO2VHeroSection/>
  <GO2VVariants/>
  <GO2VDetails onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default GO2VPage;
