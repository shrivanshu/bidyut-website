import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialData, type Testimonial } from './testimonials';

// Helper to shuffle an array
const shuffleArray = (array: Testimonial[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

// Define grid positions for each of the 11 testimonial slots for DESKTOP
const gridPositions = [
  "row-start-2 col-start-1", "row-start-1 col-start-2", "row-start-4 col-start-3",
  "row-start-2 col-start-4", "row-start-2 col-start-6 col-span-3 row-span-3", // Center position
  "row-start-1 col-start-9", "row-start-4 col-start-9", "row-start-2 col-start-10",
  "row-start-5 col-start-1", "row-start-5 col-start-10", "row-start-3 col-start-12"
];

const CENTER_INDEX = 4;

const TestimonialSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(shuffleArray([...testimonialData]).slice(0, 11));
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
    <section className="relative w-full bg-white py-16 lg:py-20 px-4 flex flex-col items-center font-sans overflow-hidden">
      {/* Background Vertical Bars (Desktop Only) */}
      <div className="absolute inset-0 w-full h-full hidden lg:grid grid-cols-8 pointer-events-none">
        <div className="border-r border-gray-200/70"></div>
        <div className="border-r border-gray-200/70"></div>
        <div className="border-r border-gray-200/70"></div>
        <div className="border-r border-gray-200/70"></div>
        <div className="border-r border-gray-200/70"></div>
        <div className="border-r border-gray-200/70"></div>
        <div className="border-r border-gray-200/70"></div>
        <div></div>
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          What Our <span className="text-green-500">Partners</span> Say
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
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
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-white ring-offset-2">
              <img src={centerCardData.image} alt={centerCardData.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{centerCardData.name}</h3>
            <p className="text-sm text-gray-600">{centerCardData.title}</p>
            <p className="text-sm text-gray-500 mb-4">{centerCardData.company}</p>
            <span className="text-5xl text-gray-300 leading-none">”</span>
            <blockquote className="text-sm text-gray-700 italic">
              "{centerCardData.quote}"
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
                            className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden shadow-md cursor-pointer border-2 border-transparent hover:border-green-500 transition-colors"
                         >
                             <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                         </div>
                     );
                 })}
            </div>
        </div>
      </div>


      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block relative w-full max-w-7xl h-[600px] z-10">
        <div className="absolute inset-0 grid grid-cols-13 grid-rows-5 gap-4">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => {
              if (index === CENTER_INDEX) return null;
              return (
                <motion.div
                  key={testimonial.id}
                  layoutId={`testimonial-${testimonial.id}`}
                  className={`relative cursor-pointer ${gridPositions[index]}`}
                  onClick={() => handleSelectTestimonial(index)}
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className={`w-full h-full rounded-xl overflow-hidden shadow-md ${testimonial.bgColor || ''}`}>
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <motion.div
            key={`center-${centerCardData.id}`}
            layoutId={`testimonial-${centerCardData.id}`}
            className={`relative flex items-center justify-center ${gridPositions[CENTER_INDEX]}`}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-full h-full flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-white ring-offset-2">
                <img src={centerCardData.image} alt={centerCardData.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-gray-800">{centerCardData.name}</h3>
              <p className="text-sm text-gray-600">{centerCardData.title}</p>
              <p className="text-sm text-gray-500 mb-4">{centerCardData.company}</p>
              <span className="text-6xl text-gray-300 leading-none">”</span>
              <blockquote className="text-sm text-gray-700 italic max-w-xs">
                "{centerCardData.quote}"
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;