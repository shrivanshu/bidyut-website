import Footer from '../Component/FooterUnanimated';
import Header from '../Component/Header';
import B2_Wells_Variants from '../Component/B2_Wells_components/B2_Wells_Variants';
import B2_Wells_Details from '../Component/B2_Wells_components/B2_Wells_Details';
import { ThemeProvider } from '../contexts/ThemeContext';
import B2WellsHeroSection from '../Component/B2_Wells_components/B2WellsHeroSection';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../hooks/useSEO';

function B2_Wells_Page() {
  const navigate = useNavigate();
  
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        <SEO
          title="B2-W Quadruped Robot | Wells | Bidyut Innovation"
          description="B2-W quadruped robot for wells inspection and industrial applications."
          canonical="https://bidyutinnovation.com/Robot/Quadrupeds/Industry/B2-W"
          schema={{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Unitree B2-W Quadruped Robot",
            "image": "https://bidyutinnovation.com/media/B2%20ADVANCED%20WITH%203D%20LIDAR.webp",
            "description": "Unitree B2-W is an industrial quadruped inspection robot with agile mobility, shock-absorbing tires, high-speed performance, and advanced sensing for automation, inspection, and logistics.",
            "brand": {
              "@type": "Brand",
              "name": "Unitree"
            },
            "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Industry/B2-W",
            "offers": {
              "@type": "Offer",
              "url": "https://bidyutinnovation.com/Robot/Quadrupeds/Industry/B2-W",
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
        <B2WellsHeroSection/>
        <B2_Wells_Variants/>
  <B2_Wells_Details onContactClick={() => navigate('/Contact')} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default B2_Wells_Page;
