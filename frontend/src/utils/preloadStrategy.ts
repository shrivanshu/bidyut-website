export const preloadCriticalChunks = () => {
  if (import.meta.env.PROD) {
    const criticalRoutes = ['/'];
    const currentPath = window.location.pathname;
    
    if (criticalRoutes.includes(currentPath)) {
      requestIdleCallback(() => {
        import('../Pages/Home_page');
      });
    }
  }
};
