import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import HeroSectionH1 from '../Component/H1_components/HeroSectionH1';
import H1Variants from '../Component/H1_components/H1Variants';
import H1Detail from '../Component/H1_components/H1Detail';
import H1ComparisonChart from '../Component/H1_components/H1ComparisonChart';
import { ThemeProvider } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';
function H1_page() {
  const navigate = useNavigate();
  
  return (
   <ThemeProvider>
      <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
        <SEO
          title="H1 Humanoid Robot | Industry Solutions | Bidyut Innovation"
          description="H1 humanoid robot for industrial applications. Advanced robotics for automation, manufacturing, and industrial tasks."
          canonical="https://bidyutinnovation.com/Robot/Humanoids/Industry/H1"
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Unitree H1 Robot",
            "image": "https://bidyutinnovation.com/media/H1.webp",
            "description": "Unitree H1 Robot is a full-size advanced humanoid designed for research, automation, and AI development, featuring high-torque joints, 3D perception, and agile human-like mobility for real-world industrial and educational applications.",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Robot/Humanoids/Industry/H1",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Robot/Humanoids/Industry/H1",
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
        <HeroSectionH1 />
        <H1Variants/>
        <H1Detail onContactClick={() => navigate('/Contact')} />
  <H1ComparisonChart/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default H1_page
