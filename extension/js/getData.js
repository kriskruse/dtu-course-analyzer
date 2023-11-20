



function downloadData() {
    chrome.downloads.download({
        url: "",
        filename: "data.js"
    });
}