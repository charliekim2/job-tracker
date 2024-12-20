import browser from "webextension-polyfill";
(() => {
  if (window.hasRun) {
    return;
  }

  window.hasRun = true;

  function openNewApplication() {
    fetch(browser.runtime.getURL("/components/newApp.html"))
      .then((r) => r.text())
      .then((html) => {
        document.body.insertAdjacentHTML("beforeend", html);
      });
  }

  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "new-app") {
      openNewApplication();
    }
  });
})();
