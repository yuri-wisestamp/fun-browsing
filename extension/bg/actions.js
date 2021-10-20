console.log("Actions imported");

const HOME = 'http://localhost:12322/'
function EtCallHome(data) {
    fetch(HOME,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then(result => result.text())
        .then(data => console.log(data))
}

function getColor() {
    fetch(HOME,
        {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then(result => result.text())
        .then(data => {
            chrome.storage.local.set({"color": data});
        })
}