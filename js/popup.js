// testing

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
          if(url=="undefined"){
            res.innerHTML = "please try after some times";
          }
          else{
            res.innerHTML = url
          }
        });
  });
});
