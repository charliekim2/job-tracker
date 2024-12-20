import browser from "webextension-polyfill";

function newAppListener() {
  document.getElementById("new-app-button").onclick = () => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "new-app",
      });
    });
  };
}

browser.tabs
  .executeScript({ file: "/content-scripts/newApp.js" })
  .then(newAppListener);
