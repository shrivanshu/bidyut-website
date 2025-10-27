import React, { useState, useRef, useEffect } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  lazy?: boolean;
  onLoadStart?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  poster,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  controls = false,
  playsInline = true,
  preload = 'metadata',
  lazy = true,
  onLoadStart,
  onLoad,
  onError,
}) => {
  const [isInView, setIsInView] = useState(!lazy);
  const [hasLoaded, setHasLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsInView(true);
            setHasLoaded(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px', // Start loading 100px before entering viewport
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [lazy, hasLoaded]);

  const handleLoadStart = () => {
    onLoadStart?.();
  };

  const handleLoad = () => {
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay && isInView}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline={playsInline}
      preload={isInView ? preload : 'none'}
      poster={poster}
      onLoadStart={handleLoadStart}
      onLoadedData={handleLoad}
      onError={handleError}
    >
      {isInView && <source src={src} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default OptimizedVideo;