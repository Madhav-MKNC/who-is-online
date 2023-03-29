// testing

// // Inform the background page that 
// // this tab should have a page-action.
// chrome.runtime.sendMessage({
//   from: 'content',
//   subject: 'showPageAction'
// });

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  console.log('adsadf');
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
