if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./../sw.js").then(reg => {
    console.log(`Service Worker Registered on scope ${reg.scope}`);
  });
}

// import api from "./../api";
// import idb from "idb";

// function openDatabase() {
//   if (!navigator.serviceWorker) {
//     return Promise.resolve();
//   }
//   return idb.open("CConverter", 1, upgradeDB => {
//     const store = upgradeDB.createObjectStore("CConverter", {
//       keyPath: "id"
//     });
//     store.createIndex("currency", "countries");
//   });
// }

// const _trackInstalling = worker => {
//   worker.addEventListener("statechange", () => {
//     if (worker.state == "installed") {
//       _updateReady();
//     }
//   });
// };

// const _updateReady = () => {
//   let newWorker;
//   const notification = document.getElementById("notification");
//   notification.className = "show";
//   // The click event on the pop up notification
//   document.getElementById("reload").addEventListener("click", () => {
//     navigator.serviceWorker.controller.postMessage({ action: "skipWaiting" });
//   });
// };
// // Ensure refresh is only called once.
// // This works around a bug in "force update on reload".

// //if no controller, page wasn't loaded via service worker, so its latest version.(exit early)
// // if (!navigator.serviceWorker.controller) {
// //   return;
// // }
// // //if worker is waiting call update ready
// // if (reg.waiting) {
// //   _updateReady();
// // }
// // //if worker is installing track progress
// // if (reg.installing) {
// //   _trackInstalling();
// //   return;
// // }
// // //otherwise listen for new worker arriving.
// // reg.addEventListener("updatefound", () => {
// //   _trackInstalling(reg.installing);
// // });
