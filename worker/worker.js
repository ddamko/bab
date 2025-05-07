export default {
    async fetch(request) {
      // Get the incoming request URL
      const url = new URL(request.url);
  
      // Replace the hostname and path to point to the Pages app
      url.hostname = 'bab.soydev.life';
      url.pathname = url.pathname.replace(/^\/bab/, '');
  
      // Create a new request to the Pages app
      const newRequest = new Request(url, request);
  
      // Fetch the response from the Pages app
      return await fetch(newRequest);
    }
  };