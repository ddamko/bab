export default {
  async fetch(request) {
    try {
      // Get the incoming request URL
      const url = new URL(request.url);

      // Check if the request matches the /bab/* pattern
      if (url.pathname.startsWith('/bab')) {
        // Replace the hostname with bab.pages.dev
        url.hostname = 'bab.soydev.life';
        // Remove /bab from the path to map to the Pages app
        url.pathname = url.pathname.replace(/^\/bab/, '') || '/';
        
        // Create a new request to the Pages app
        const newRequest = new Request(url, request);
        
        // Fetch the response from the Pages app
        return await fetch(newRequest);
      }

      // Fallback for non-matching routes (optional)
      return new Response('Not Found', { status: 404 });
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  }
};