// import api from "./../api";
const idb = window.indexedDB || window.mozIndexedDB;

function openDatabase() {
  if (!navigator.serviceWorker) {
    return Promise.resolve();
  }
  return idb.open("CConverter", 1, upgradeDB => {
    const store = upgradeDB.createObjectStore("CConverter", {
      keyPath: "id"
    });
    store.createIndex("currency", "countries");
  });
}

const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./../sw.js").then(reg => {
      console.log(`Service Worker Registered on scope ${reg.scope}`);
      if (!navigator.serviceWorker.controller) {
        return;
      }

      if (reg.waiting) {
        _updateReady(reg.waiting);
        return;
      }

      if (reg.installing) {
        _trackInstalling(reg.installing);
        return;
      }

      reg.addEventListener("updatefound", function() {
        _trackInstalling(reg.installing);
      });
    });

    let refreshing;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      window.location.reload();
      refreshing = true;
    });
  } else {
    console.log("Service Worker is not supported by browser.");
  }
};

const _trackInstalling = worker => {
  worker.addEventListener("statechange", () => {
    if (worker.state == "installed") {
      _updateReady(worker);
    }
  });
};

const _updateReady = worker => {
  let newWorker;
  const notification = document.getElementById("notification");
  notification.className = "show";
  // The click event on the pop up notification
  document.getElementById("reload").addEventListener("click", () => {
    worker.postMessage({ action: "skipWaiting" });
  });
};

registerServiceWorker();
openDatabase();
