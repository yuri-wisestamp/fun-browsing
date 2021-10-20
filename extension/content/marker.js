console.log("Marker injected")


chrome.storage.local.get(["color"], ({ color }) => {
    console.log("color from storage", color);
    markBoxes(color);
});

function markBoxes(color) {
    document.querySelectorAll('span').forEach((v, k) => {
        v.style = `border:1px solid ${color}`
    })
}