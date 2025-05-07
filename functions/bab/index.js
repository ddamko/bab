export async function onRequest({ request, next }) {
    const url = new URL(request.url);
    
    // Serve static assets directly
    if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico)$/)) {
      return next(); // Let Pages serve the asset
    }
    
    // For non-asset paths, serve index.html for SPA
    return fetch(new Request(url.origin + '/index.html', request));
  }