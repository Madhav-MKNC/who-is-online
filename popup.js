chrome.runtime.sendMessage({ type: "get_url" }, function(response) {
    try {
      if (!response || !response.url) {
        throw new Error("Invalid response");
      }
      // Your code to display the URL
    } catch (error) {
      console.error("Error handling response", error);
    }
  });
  