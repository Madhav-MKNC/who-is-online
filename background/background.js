chrome.action.setBadgeText(
    {
        text: "35"
    }
);

let res = {
    url : 'https://example.com'
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'get_url') {
      sendResponse(res);
    }
  });



// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript(tab.id);
// });
