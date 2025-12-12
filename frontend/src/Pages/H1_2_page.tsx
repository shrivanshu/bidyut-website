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
          title="H1-2 Humanoid Robot | Industry Solutions | Bidyut Innovation"
          description="H1-2 humanoid robot for industrial applications. Advanced humanoid robotics for manufacturing, automation, and industry."
          canonical="https://bidyutinnovation.com/Robot/Humanoid/Industry/H1-2"
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Unitree H1-2 Robot",
            "image": "https://bidyutinnovation.com/media/H1%20-%202.webp",
            "description": "Unitree H1-2 Robot is a full-size Universal Humanoid Robot built for industrial and research applications, featuring advanced mobility, 3D perception, high-torque joints, and human-like agility for AI, automation, and educational purposes",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Robot/Humanoid/Industry/H1-2",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Robot/Humanoid/Industry/H1-2",
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
