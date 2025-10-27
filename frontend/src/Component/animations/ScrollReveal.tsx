import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scroll-reveal');
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div 
      ref={elementRef} 
      className={`scroll-reveal-element ${className}`}
      style={{
        opacity: 0,
        transform: 'translateY(50px)',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {children}
    </div>
  );
};

// Add CSS for the animation
const style = document.createElement('style');
style.textContent = `
  .animate-scroll-reveal {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  
  .stagger-animation > * {
    animation-delay: calc(var(--animation-order, 0) * 0.1s);
  }
`;
document.head.appendChild(style);