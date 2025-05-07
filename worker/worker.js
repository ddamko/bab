export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);

      // Handle requests under /bab/*
      if (url.pathname.startsWith('/bab')) {
        // Replace hostname with bab.pages.dev
        url.hostname = 'bab.soydev.life';
        // Remove /bab from the path
        url.pathname = url.pathname.replace(/^\/bab/, '') || '/';

        // Create a new request to the Pages app
        const newRequest = new Request(url, request);
        let response = await fetch(newRequest);

        // Handle redirects
        if (response.status >= 300 && response.status < 400) {
          const location = response.headers.get('Location');
          if (location) {
            const newLocation = location.startsWith('/')
              ? `/bab${location}`
              : location;
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.set('Location', newLocation);
          }
        }

        // Rewrite HTML responses to fix .js and .css asset paths
        if (response.headers.get('Content-Type')?.includes('text/html')) {
          const text = await response.text();
          // Replace absolute .js and .css paths with /bab/ prefixed paths
          const rewrittenText = text.replace(
            /(src|href)=["']\/([^"']*\.(?:js|css))/g,
            '$1="/bab/$2'
          );
          response = new Response(rewrittenText, {
            status: response.status,
            statusText: response.statusText,
            headers: new Headers(response.headers)
          });
        }

        response.headers.set('Access-Control-Allow-Origin', 'https://soydev.life');
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', '*');

        return response;
      }

      // Fallback for non-matching routes
      return new Response('Not Found', { status: 404 });
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  }
};