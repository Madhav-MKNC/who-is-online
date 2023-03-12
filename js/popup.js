

// // chrome.tabs.getCurrent(function(tab) {
// //   alert(tab.title);
// // });

// // alert(document.all[4].innerHTML);


// chrome.runtime.sendMessage({ type: "get_url" }, function(response) {
//   try {
//     if (!response || !response.url) {
//       throw new Error("Invalid response");
//     }
//     // alert(response.url);
//   } catch (error) {
//     console.error("Error handling response", error);
//   }
//   // alert(response.url);
// });





// testing

// Update the relevant fields with the new data.
// const setDOMInfo = info => {
//   res.innerHTML = info.url;
// };

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
  let res = document.getElementById("res");
  res.innerHTML = 'this is res';
  
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called 
        //    from the receiving end (content script).
        (url)=>{
          res.innerHTML = url
        });
  });
});
