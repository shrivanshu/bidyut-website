import { useEffect } from 'react';

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Log page load performance
    window.addEventListener('load', () => {
      if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        console.log('Page Load Performance:', {
          'DNS Lookup': perfData.domainLookupEnd - perfData.domainLookupStart,
          'TCP Connection': perfData.connectEnd - perfData.connectStart,
          'Request Time': perfData.responseStart - perfData.requestStart,
          'Response Time': perfData.responseEnd - perfData.responseStart,
          'DOM Processing': perfData.domContentLoadedEventEnd - perfData.responseEnd,
          'Total Load Time': perfData.loadEventEnd - perfData.fetchStart,
        });
      }
    });

    // Monitor largest contentful paint
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP (Largest Contentful Paint):', lastEntry.startTime);
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // LCP not supported
      }
    }
  }, []);
};

export default usePerformanceMonitoring;