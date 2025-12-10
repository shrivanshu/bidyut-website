export const setupBfcache = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('pagehide', () => {
    // Close Vite HMR WebSocket to allow bfcache
    if (import.meta.hot) {
      import.meta.hot.dispose(() => {});
      // @ts-ignore
      if (import.meta.hot.connection) {
        // @ts-ignore
        import.meta.hot.connection.close();
      }
    }
  });
};
