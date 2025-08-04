import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialData, type Testimonial } from './testimonials';

// Helper to shuffle an array
const shuffleArray = (array: Testimonial[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

// Define grid positions for desktop layout matching the image exactly
const gridPositions = [
  // Left side cards
  { gridArea: '1 / 1 / 3 / 3', size: 'small' }, // Top left
  { gridArea: '3 / 1 / 5 / 3', size: 'small' }, // Middle left
  { gridArea: '5 / 1 / 7 / 3', size: 'small' }, // Bottom left

  // Left-center cards
  { gridArea: '1 / 3 / 3 / 5', size: 'medium' }, // Top left-center
  { gridArea: '4 / 3 / 6 / 5', size: 'medium' }, // Bottom left-center

  // Center card (main testimonial) - larger
  { gridArea: '2 / 5 / 6 / 9', size: 'large' }, // Center position

  // Right-center cards  
  { gridArea: '1 / 9 / 3 / 11', size: 'medium' }, // Top right-center
  { gridArea: '4 / 9 / 6 / 11', size: 'medium' }, // Bottom right-center

  // Right side cards
  { gridArea: '1 / 11 / 3 / 13', size: 'small' }, // Top right
  { gridArea: '3 / 11 / 5 / 13', size: 'small' }, // Middle right
  { gridArea: '5 / 11 / 7 / 13', size: 'small' }, // Bottom right
];

const CENTER_INDEX = 5; // Center position in the grid

const TestimonialSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Set Dr. Sarah Mitchell as the default center testimonial
    const drSarah = testimonialData[0]; // Dr. Sarah Mitchell
    const otherTestimonials = shuffleArray([...testimonialData.slice(1)]).slice(0, 10);
    
    const arrangedTestimonials = [...otherTestimonials];
    arrangedTestimonials.splice(CENTER_INDEX, 0, drSarah);
    
    setTestimonials(arrangedTestimonials);
  }, []);

  const handleSelectTestimonial = (selectedIndex: number) => {
    if (selectedIndex === CENTER_INDEX) return;

    const newTestimonials = [...testimonials];
    const selectedTestimonial = newTestimonials[selectedIndex];
    const centerTestimonial = newTestimonials[CENTER_INDEX];

    newTestimonials[CENTER_INDEX] = selectedTestimonial;
    newTestimonials[selectedIndex] = centerTestimonial;

    setTestimonials(newTestimonials);
  };

  if (testimonials.length === 0) {
    return null;
  }

  const centerCardData = testimonials[CENTER_INDEX];

  return (
    <section className="relative w-full bg-gray-50 py-20 px-4 flex flex-col items-center font-sans overflow-hidden">
     {/* Background Grid Lines */}
<div className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none opacity-30 z-0">
  <div className="w-full h-full grid grid-cols-12 gap-0">
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="border-r-5 border-gray-200" style={{ borderRightWidth: '10px' }} />
    ))}
  </div>
</div>

      {/* Header - matching image exactly */}
      <div className="text-center mb-16 relative z-10 max-w-4xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          What Our <span className="text-emerald-500">Partners</span> Say
        </h2>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Discover how Bidyut is transforming education and industry through innovative robotics solutions
        </p>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="w-full max-w-md lg:hidden flex flex-col items-center z-10">
        {/* Main Testimonial Card */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={centerCardData.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-xl w-full flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-emerald-100 ring-offset-2">
              <img
                src={centerCardData.image}
                alt={centerCardData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{centerCardData.name}</h3>
            <p className="text-sm text-gray-600">{centerCardData.title}</p>
            <p className="text-sm text-gray-500 mb-4">{centerCardData.company}</p>
            <span className="text-5xl text-emerald-200 leading-none font-serif">"</span>
            <blockquote className="text-sm text-gray-700 italic leading-relaxed">
              {centerCardData.quote}
            </blockquote>
          </motion.div>
        </AnimatePresence>

        {/* Horizontal Scroller for Thumbnails */}
        <div className="w-full mt-8">
          <p className="text-center font-semibold text-gray-500 text-sm mb-3">TAP TO VIEW OTHERS</p>
          <div className="flex overflow-x-auto space-x-4 pb-4 pt-2 -mx-4 px-4">
            {testimonials.map((testimonial, index) => {
              if (index === CENTER_INDEX) return null;
              return (
                <div
                  key={testimonial.id}
                  onClick={() => handleSelectTestimonial(index)}
                  className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden shadow-md cursor-pointer border-2 border-transparent hover:border-emerald-500 transition-colors"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block relative w-full max-w-7xl z-10">
        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => {
              if (index === CENTER_INDEX) return null;
              
              const position = gridPositions[index];
              if (!position) return null;
              
              return (
                <motion.div
                  key={testimonial.id}
                  layoutId={`testimonial-${testimonial.id}`}
                  style={{ gridArea: position.gridArea }}
                  className="relative cursor-pointer group"
                  onClick={() => handleSelectTestimonial(index)}
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Hover tooltip */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white px-3 py-1 rounded-lg shadow-lg">
                      <p className="text-xs font-semibold text-gray-800">{testimonial.name}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Center Testimonial Card - exactly matching the image */}
          <motion.div
            key={`center-${centerCardData.id}`}
            layoutId={`testimonial-${centerCardData.id}`}
            style={{ gridArea: gridPositions[CENTER_INDEX]?.gridArea }}
            className="relative flex items-center justify-center"
            whileHover={{ scale: 1.02, zIndex: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-full h-full flex flex-col items-center justify-center text-center relative border border-gray-100">
              {/* Quote mark - positioned like in the image */}
              <div className="absolute top-6 left-8">
                <span className="text-7xl text-emerald-200 leading-none font-serif">"</span>
              </div>

              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-emerald-100 relative z-10">
                <img
                  src={centerCardData.image}
                  alt={centerCardData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-bold text-xl text-gray-800 mb-1">{centerCardData.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{centerCardData.title}</p>
              <p className="text-sm text-gray-500 mb-6">{centerCardData.company}</p>

              <blockquote className="text-sm text-gray-700 leading-relaxed max-w-xs z-10 relative italic">
                {centerCardData.quote}
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
