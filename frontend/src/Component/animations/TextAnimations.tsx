import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  stagger?: boolean;
  once?: boolean;
  threshold?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  stagger = false,
  once = true,
  threshold = 0.1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getVariants = () => {
    const distance = 50;
    
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  once?: boolean;
  cursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 50,
  once = true,
  cursor = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.1 });
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, speed);
      } else if (cursor) {
        // Blink cursor after typing is complete
        setTimeout(() => setShowCursor(false), 500);
      }
    };

    const startTimeout = setTimeout(typeText, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [isInView, text, speed, delay, cursor]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {cursor && showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  splitBy?: 'words' | 'characters';
  once?: boolean;
}

export const StaggeredText: React.FC<StaggeredTextProps> = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.05,
  direction = 'up',
  splitBy = 'words',
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  const getVariants = () => {
    const distance = 30;
    
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const splitText = splitBy === 'characters' ? text.split('') : text.split(' ');

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {splitText.map((item, index) => (
        <motion.span
          key={index}
          variants={getVariants()}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="inline-block"
          style={{ 
            marginRight: splitBy === 'words' ? '0.25em' : '0',
            marginLeft: splitBy === 'characters' && item === ' ' ? '0.25em' : '0'
          }}
        >
          {item === ' ' && splitBy === 'words' ? '\u00A0' : item}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface SlideInTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  once?: boolean;
}

export const SlideInText: React.FC<SlideInTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  distance = 60,
  direction = 'up',
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
    >
      {children}
    </motion.div>
  );
};

interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 1,
  once = true,
  threshold = 0.1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};