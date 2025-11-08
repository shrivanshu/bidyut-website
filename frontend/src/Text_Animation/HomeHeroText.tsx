"use client";

import { ElementType, useEffect, useRef, useState, createElement, useCallback } from "react";

interface TextTypeProps {
  highlight?: { text: string, color: string };
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const HomeHeroText = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  highlight,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = Array.isArray(text) ? text : [text];

  const getRandomSpeed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  // Debounced state updates for better performance
  const updateDisplayedText = useCallback((newText: string) => {
    setDisplayedText(newText);
  }, []);

  const updateCharIndex = useCallback((updater: (prev: number) => number) => {
    setCurrentCharIndex(updater);
  }, []);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "inherit";
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // Only process first entry for performance
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Pre-trigger for smoother experience
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!showCursor || !cursor) return;

    cursor.style.opacity = "1";

    if (typeof cursor.animate === "function") {
      const animation = cursor.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        {
          duration: Math.max(16, cursorBlinkDuration * 1000),
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );

      return () => animation.cancel();
    }

    let visible = true;
    const interval = window.setInterval(() => {
      visible = !visible;
      cursor.style.opacity = visible ? "1" : "0";
    }, Math.max(16, cursorBlinkDuration * 1000));

    return () => window.clearInterval(interval);
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;
    let rafId: number;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      // Use RAF for better performance
      rafId = requestAnimationFrame(() => {
        if (isDeleting) {
          if (displayedText === "") {
            setIsDeleting(false);
            if (currentTextIndex === textArray.length - 1 && !loop) {
              return;
            }

            if (onSentenceComplete) {
              onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
            }

            setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
            setCurrentCharIndex(0);
            timeout = setTimeout(() => {}, pauseDuration);
          } else {
            timeout = setTimeout(() => {
              updateDisplayedText(displayedText.slice(0, -1));
            }, Math.max(16, deletingSpeed)); // Minimum 16ms for 60fps
          }
        } else {
          if (currentCharIndex < processedText.length) {
            timeout = setTimeout(
              () => {
                updateDisplayedText(displayedText + processedText[currentCharIndex]);
                updateCharIndex((prev) => prev + 1);
              },
              Math.max(16, variableSpeed ? getRandomSpeed() : typingSpeed) // Minimum 16ms for 60fps
            );
          } else if (textArray.length > 1) {
            timeout = setTimeout(() => {
              setIsDeleting(true);
            }, pauseDuration);
          }
        }
      });
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => {
      clearTimeout(timeout);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      style: {
        willChange: 'contents', // Hint browser about content changes
        transform: 'translateZ(0)', // Force hardware acceleration
        ...props.style
      },
      ...props,
    },
    (() => {
      if (highlight && displayedText.includes(highlight.text)) {
        const parts = displayedText.split(highlight.text);
        return (
          <>
            <span style={{ color: getCurrentTextColor() }}>{parts[0]}</span>
            <span 
              style={{ 
                color: highlight.color,
                willChange: 'contents',
                contain: 'layout'
              }}
            >
              {highlight.text}
            </span>
            <span style={{ color: getCurrentTextColor() }}>{parts[1]}</span>
          </>
        );
      }
      return (
        <span 
          className="inline" 
          style={{ 
            color: getCurrentTextColor(),
            willChange: 'contents',
            contain: 'layout'
          }}
        >
          {displayedText}
        </span>
      );
    })(),
    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block opacity-100 ${shouldHideCursor ? "hidden" : ""} ${cursorClassName}`}
        style={{
          willChange: 'opacity',
          transform: 'translateZ(0)', // Hardware acceleration
          contain: 'layout' // Prevent layout recalculation
        }}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default HomeHeroText;
