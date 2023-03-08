let res = document.getElementById("url-display");

// chrome.tabs.getCurrent(function(tab) {
//   alert(tab.title);
// });

// alert(document.all[4].innerHTML);


chrome.runtime.sendMessage({ type: "get_url" }, function(response) {
  try {
    if (!response || !response.url) {
      throw new Error("Invalid response");
    }
    // alert(response.url);
  } catch (error) {
    console.error("Error handling response", error);
  }
  // alert(response.url);
});