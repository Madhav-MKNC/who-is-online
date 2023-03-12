// let res = document.getElementById('res');       

// // res.innerHTML = '<h1> hi </h1>'
// alert(window.location.href);

// // Listen for messages from the popup
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     // If the message is to get the URL of the current tab
//     if (request.type === "getUrl") {
//         // Get the URL of the current tab
//         var url = window.location.href;

//         // Respond with the URL of the current tab
//         sendResponse({ url: url });
//     }
// });







// testing

// // Inform the background page that 
// // this tab should have a page-action.
// chrome.runtime.sendMessage({
//   from: 'content',
//   subject: 'showPageAction'
// });

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if (msg.from === 'popup') {
    // Collect the necessary data. 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`.)
    //   var domInfo = {
    //     url : window.location.href
    //   };

    // Directly respond to the sender (popup), 
    // through the specified callback.
    response(window.location.href);
  }
});
