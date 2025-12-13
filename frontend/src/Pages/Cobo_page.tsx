import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import CoboVariants from '../Component/Cobo_Parts_components/CoboVariants';
import CoboDetail from '../Component/Cobo_Parts_components/CoboDetail';
import { ThemeProvider } from '../contexts/ThemeContext';
import CoboHeroSection from '../Component/Cobo_Parts_components/CoboHeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function Cobo_page() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="Cobot | Collaborative Robots | Bidyut Innovation"
          description="Collaborative robots (Cobots) for industrial automation and applications."
          canonical="https://bidyutinnovation.com/Cobot"
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Cobot",
            "image": "https://bidyutinnovation.com/Cobo/Z1-Arm.webp",
            "description": "The Cobot is a lightweight, precise robotic arm designed for smart automation, enabling safe, efficient, and flexible operations in industrial and research environments.",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Cobot",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Cobot",
              "seller": {
                "@type": "Organization",
                "name": "Bidyut Innovation",
                "url": "https://bidyutinnovation.com",
                "logo": "https://bidyutinnovation.com/bidyut_logo_green%201.svg",
                "telephone": "+91-9370782979",
                "email": "mailto:Info@bidyutrobotics.com",
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
        <CoboHeroSection/>
        <CoboVariants/>
  <CoboDetail onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Cobo_page;
