let res = document.getElementById('res');       

// res.innerHTML = '<h1> hi </h1>'

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // If the message is to get the URL of the current tab
    if (request.type === "getUrl") {
        // Get the URL of the current tab
        var url = window.location.href;

        // Respond with the URL of the current tab
        sendResponse({ url: url });
    }
});
