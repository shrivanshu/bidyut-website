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
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Unitree R1 Humanoid Robot",
            "image": "https://bidyutinnovation.com/media/R1.webp",
            "description": "Unitree R1 Robot is a compact educational humanoid designed for hands-on learning, AI exploration, and interactive STEAM education, featuring 24 DOF, ultra-wide-angle vision, and smart quick-release battery for classroom and research applications",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Robot/Humanoid/Education/R1",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Robot/Humanoid/Education/R1",
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
        <HeroSectionR1 />
        <R1Variants/>
  <R1Detail onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_page
