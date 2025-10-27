import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Run before browser paints the new route to avoid flash of previous scroll position
  useLayoutEffect(() => {
    // Ensure browser doesn't try to restore previous scroll position
    if ('scrollRestoration' in window.history) {
      try {
        window.history.scrollRestoration = 'manual';
      } catch {
        // ignore if not supported
      }
    }

    // Scroll window to top on every route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    // Extra safeguards for some mobile browsers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
