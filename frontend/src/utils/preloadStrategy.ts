export const preloadCriticalChunks = () => {
  if (import.meta.env.PROD) {
    const criticalRoutes = ['/'];
    const currentPath = window.location.pathname;
    
    if (criticalRoutes.includes(currentPath)) {
      const scheduleWork = (callback: () => void) => {
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
          return window.requestIdleCallback(callback);
        } else {
          return setTimeout(callback, 0);
        }
      };
      
      scheduleWork(() => {
        import('../Pages/Home_page');
      });
    }
  }
};
