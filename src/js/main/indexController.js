if ("serviceWorker" in navigator) {
  // Register the service worker
  navigator.serviceWorker
    .register("./../sw.js")
    .then(reg => {
      console.log("Service worker registered! on scope ", reg.scope);
      //if no controller, page wasn't loaded via service worker, so its latest version.(exit early)
      if (!navigator.serviceWorker.controller) {
        return;
      }
      //if worker is waiting call update ready
      if (reg.waiting) {
        _updateReady();
      }
      //if worker is installing track progress
      if (reg.installing) {
        _trackInstalling();
        return;
      }
      //otherwise listen for new worker arriving.
      reg.addEventListener("updatefound", () => {
        _trackInstalling(reg.installing);
      });
    })
    .catch(err => console.log("Service worker not registered!", err));
}

const _trackInstalling = worker => {
  worker.addEventListener("statechange", () => {
    if (worker.state == "installed") {
      _updateReady();
    }
  });
};

const _updateReady = () => {
  let newWorker;

  newWorker = reg.installing;
  const notification = document.getElementById("notification");
  notification.className = "show";
  // The click event on the pop up notification
  document.getElementById("reload").addEventListener("click", function() {
    navigator.serviceWorker.controller.postMessage({ action: "skipWaiting" });
  });
};
