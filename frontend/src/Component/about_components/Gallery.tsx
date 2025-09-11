import { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);
  const [isInGallerySection, setIsInGallerySection] = useState(false);
  const [reelProgress, setReelProgress] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const accumulatedScroll = useRef(0);

  const galleryImages = [
    {
      src: "https://i.ibb.co/svzzjwQn/7a93d3f8c9c45ac228352a70399df2062c9e2401.png",
      alt: "Educational materials and learning kits",
      className: "row-span-1",
    },
    {
      src: "https://i.ibb.co/Vpm1jkR1/f759394b8e1ec2bd0637856e1b18a1ea86e7838e.png",
      alt: "Robotic spider construction",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/ZpPR1Mv9/57e913251f6ae9a763f2b728ec42dcc77e21aa63.png",
      alt: "Student working with robotics",
      className: "row-span-1",
    },
    {
      src: "https://i.ibb.co/Xr52JHcf/9ddc8551159d02fb2f65cd39e7ef29f13c2b9970.png",
      alt: "Wedo2.0 educational materials",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/VWFPYDNN/e95dbb576a2a5b81b2a7c473c5d7eaeccaebfdbe.png",
      alt: "Robotic vehicle construction",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/fzF0PSmG/17b9f01c5d5af111609c7c37e105f414e0720fa7.png",
      alt: "Robotic humanoid construction",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/ZwNKdbr/d56a57fb76139c9a3e132f335c83881a238393e5.png",
      alt: "Student programming robot",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/cSZNwb6H/6ec9e2ca97a74d13fb904b656c290c09878b4094.png",
      alt: "Hands-on robot building",
      className: "row-span-2",
    },
    {
      src: "https://i.ibb.co/mYNcM0V/cc9492090b06f0bba1cf190f752b56d3ea824ea2.png",
      alt: "Educational programming mat",
      className: "row-span-1",
    },
    {
      src: "https://i.ibb.co/mr9Dp7zD/62e886bb1ed0a688915eef5b9da04e11b5cfe104.png",
      alt: "LEGO Mindstorms robot",
      className: "row-span-1",
    },
  ];

  // Check if user has scrolled to the gallery section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || showFullGallery) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Check if the gallery section is in view (user has scrolled to it)
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (isVisible && !isInGallerySection) {
        setIsInGallerySection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInGallerySection, showFullGallery]);

  // Handle wheel/scroll events to control reel progression (only when in gallery section)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only interfere with scroll when we're in gallery section AND not showing full gallery
      if (!isInGallerySection || showFullGallery) return;

      // Only prevent default if we're actively in the reel interaction area
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      
      // Check if we're in the middle section where reel should be active
      if (rect.top <= 100 && rect.bottom >= window.innerHeight - 100) {
        e.preventDefault();
        
        // Accumulate scroll delta
        accumulatedScroll.current += e.deltaY;
        
        // Each "step" requires a certain amount of scroll
        const scrollStep = 300; // Adjust this to make it more/less sensitive
        const maxScroll = scrollStep * 4; // 4 steps total (3 images + final spread)
        
        // Clamp the accumulated scroll
        accumulatedScroll.current = Math.max(0, Math.min(maxScroll, accumulatedScroll.current));
        
        // Calculate progress (0 to 1)
        const progress = accumulatedScroll.current / maxScroll;
        setReelProgress(progress);
        
        // Calculate current reel index (0, 1, or 2)
        const newReelIndex = Math.floor(progress * 3);
        const clampedIndex = Math.max(0, Math.min(2, newReelIndex));
        setCurrentReelIndex(clampedIndex);
        
        // Trigger gallery spread at the end
        if (progress >= 0.95) {
          setShowExplosion(true);
          setTimeout(() => {
            setShowFullGallery(true);
            setShowExplosion(false);
          }, 1000);
        }
      }
    };

    // Always add the wheel listener, but only prevent default conditionally
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isInGallerySection, showFullGallery]);

  // Full gallery intersection observer
  useEffect(() => {
    if (!showFullGallery) return;

    setVisibleImages(new Array(galleryImages.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleImages(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [showFullGallery, galleryImages.length]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Gallery Title */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Bidyut's Gallery
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our journey through these captivating moments of innovation and learning
          </p>
        </div>

        {/* Scroll hint - only show when user is in gallery section but hasn't started reel */}
        {isInGallerySection && !showFullGallery && (
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm">Scroll to explore our story</p>
            <div className="mx-auto w-6 h-10 border-2 border-gray-500 rounded-full mt-2">
              <div className="w-1 h-3 bg-gray-500 rounded-full mx-auto mt-2 animate-bounce"></div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-4 mx-auto w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#0ACF83] transition-all duration-300 ease-out"
                style={{ width: `${reelProgress * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Explosion Animation */}
        {showExplosion && (
          <>
            <style>{`
              @keyframes explode-0 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% - 200px), calc(-50% - 150px)) scale(1.2) rotate(36deg); opacity: 0.8; } 100% { transform: translate(calc(-50% - 300px), calc(-50% - 225px)) scale(0.6) rotate(72deg); opacity: 0; } }
              @keyframes explode-1 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% + 200px), calc(-50% - 150px)) scale(1.2) rotate(72deg); opacity: 0.8; } 100% { transform: translate(calc(-50% + 300px), calc(-50% - 225px)) scale(0.6) rotate(144deg); opacity: 0; } }
              @keyframes explode-2 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% - 300px), -50%) scale(1.2) rotate(108deg); opacity: 0.8; } 100% { transform: translate(calc(-50% - 450px), -50%) scale(0.6) rotate(216deg); opacity: 0; } }
              @keyframes explode-3 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% + 300px), -50%) scale(1.2) rotate(144deg); opacity: 0.8; } 100% { transform: translate(calc(-50% + 450px), -50%) scale(0.6) rotate(288deg); opacity: 0; } }
              @keyframes explode-4 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% - 200px), calc(-50% + 150px)) scale(1.2) rotate(180deg); opacity: 0.8; } 100% { transform: translate(calc(-50% - 300px), calc(-50% + 225px)) scale(0.6) rotate(360deg); opacity: 0; } }
              @keyframes explode-5 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% + 200px), calc(-50% + 150px)) scale(1.2) rotate(216deg); opacity: 0.8; } 100% { transform: translate(calc(-50% + 300px), calc(-50% + 225px)) scale(0.6) rotate(432deg); opacity: 0; } }
              @keyframes explode-6 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(-50%, calc(-50% - 200px)) scale(1.2) rotate(252deg); opacity: 0.8; } 100% { transform: translate(-50%, calc(-50% - 300px)) scale(0.6) rotate(504deg); opacity: 0; } }
              @keyframes explode-7 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(-50%, calc(-50% + 200px)) scale(1.2) rotate(288deg); opacity: 0.8; } 100% { transform: translate(-50%, calc(-50% + 300px)) scale(0.6) rotate(576deg); opacity: 0; } }
              @keyframes explode-8 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% - 100px), calc(-50% - 75px)) scale(1.2) rotate(324deg); opacity: 0.8; } 100% { transform: translate(calc(-50% - 150px), calc(-50% - 112px)) scale(0.6) rotate(648deg); opacity: 0; } }
              @keyframes explode-9 { 0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; } 50% { transform: translate(calc(-50% + 100px), calc(-50% + 75px)) scale(1.2) rotate(360deg); opacity: 0.8; } 100% { transform: translate(calc(-50% + 150px), calc(-50% + 112px)) scale(0.6) rotate(720deg); opacity: 0; } }
            `}</style>
            <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
              {galleryImages.map((image, index) => (
                <div
                  key={`explosion-${index}`}
                  className="absolute w-32 h-32 rounded-lg overflow-hidden shadow-xl"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: `explode-${index} 1s ease-out forwards`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Reel View */}
        {isInGallerySection && !showFullGallery && (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
              {galleryImages.slice(0, 3).map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                    ${index === currentReelIndex 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : index < currentReelIndex 
                        ? '-translate-y-full opacity-0 scale-95'
                        : 'translate-y-full opacity-0 scale-95'
                    }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-lg font-medium">{image.alt}</p>
                  </div>
                  
                  {/* Reel indicators */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    {[0, 1, 2].map((dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-8 rounded-full transition-all duration-500 
                          ${dotIndex === currentReelIndex 
                            ? 'bg-[#0ACF83]' 
                            : dotIndex < currentReelIndex 
                              ? 'bg-white/50' 
                              : 'bg-white/20'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder when not in gallery section yet */}
        {!isInGallerySection && (
          <div className="flex justify-center items-center min-h-[60vh]">
            <div className="text-center">
              <div className="w-80 h-96 rounded-lg bg-gray-800 flex items-center justify-center">
                <p className="text-gray-400 text-lg">Scroll down to enter gallery</p>
              </div>
            </div>
          </div>
        )}

        {/* Full Gallery Grid */}
        {showFullGallery && (
          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[240px]
              transition-all duration-1000 ease-out transform
              ${showFullGallery ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                data-index={index}
                className={`relative overflow-hidden rounded-lg shadow-xl group ${image.className} 
                  transform transition-all duration-700 ease-out
                  ${visibleImages[index] 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 opacity-0 scale-95'
                  }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
                
                {/* Subtle border glow effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#0ACF83]/30 rounded-lg transition-all duration-300"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
