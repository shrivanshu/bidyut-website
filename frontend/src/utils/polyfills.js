// Safari requestIdleCallback polyfill
if (!window.requestIdleCallback) {
  window.requestIdleCallback = function(callback, options = {}) {
    const timeout = options.timeout || 0;
    const startTime = performance.now();
    
    return setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining() {
          return Math.max(0, 50 - (performance.now() - startTime));
        }
      });
    }, timeout);
  };
}

if (!window.cancelIdleCallback) {
  window.cancelIdleCallback = function(id) {
    clearTimeout(id);
  };
}