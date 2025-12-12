import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import A2_Wells_Variants from '../Component/A2_Wells_components/A2_Wells_Variants';
import A2_Wells_Details from '../Component/A2_Wells_components/A2_Wells_Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import A2WellHeroSection from '../Component/A2_Wells_components/A2WellHeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function A2_Wells_Page() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="A2-W Quadruped Robot | Wells | Bidyut Innovation"
          description="A2-W quadruped robot for wells inspection and industrial applications."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Industry/A2-W"
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Unitree A2-W Quadruped Robot",
            "image": "https://bidyutinnovation.com/media/A2-w.webp",
            "description": "Unitree A2‑W is an advanced hybrid quadruped robot with wheeled-foot mobility, engineered for industrial inspections, logistics, and research. It offers agile navigation, high-precision perception, robust payload handling, and intelligent automation for complex real-world environments.",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Industry/A2-W",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Industry/A2-W",
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
        <A2WellHeroSection/>
        <A2_Wells_Variants/>
  <A2_Wells_Details onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default A2_Wells_Page;
