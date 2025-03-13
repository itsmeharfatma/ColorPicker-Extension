chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: injectColorPicker
    });
});

// Function to activate the EyeDropper API
function injectColorPicker() {
    if (!window.EyeDropper) {
        alert("Your browser doesn't support the EyeDropper API.");
        return;
    }

    const eyeDropper = new EyeDropper();
    eyeDropper.open()
        .then((result) => {
            navigator.clipboard.writeText(result.sRGBHex);
            alert(`Color copied: ${result.sRGBHex}`);
        })
        .catch((err) => console.error("Error using EyeDropper:", err));
}
