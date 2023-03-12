// chrome.action.setBadgeText(
//     {
//         text: "35"
//     }
// );

// let res = {
//     url : 'https://example.com'
// }


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'get_url') {
//     sendResponse(res);
//   }
// });





// testing


chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    // Enable the page-action for the requesting tab.
    chrome.pageAction.show(sender.tab.id);
  }
});


chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response);
  });
});
