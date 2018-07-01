import { Component } from "./../components/app";
import api from "./../api";
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      currencies: {}
    };
    this.indexDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB;
    this.DB_NAME = "CConverter";
    this.DB_VERSION = 1;
    this.DB_STORE_NAME = "CConverter";
  }
  // Create the schema
  openDatabase() {
    // If the browser doesn't support service worker,
    // we don't care about having a database
    let db;
    console.log("openDatabase");
    if (!navigator.serviceWorker) {
      return Promise.resolve();
    }
    if (!this.indexDB) {
      window.alert(
        "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
      );
    }
    const dbPromise = this.indexDB.open(this.DB_NAME, this.DB_VERSION);

    console.log(dbPromise);
    dbPromise
      .then(db => {
        const store = getObjectStore(this.dbName, "readwrite");

        // Add some data
        api.get("/currencies").then(response => {
          Object.entries(result.results).map(val => {
            this.setState({
              currencies: {
                ...val[1]
              }
            });
            this.onChange(store);
          });
        });
      })
      .then(() => {
        console.log("added item to the store os!");
      });

    dbPromise.onupgradeneeded(event => {
      console.log("dbPromise.onupgradeneeded");
      const store = event.currentTarget.result.createObjectStore(
        this.DB_STORE_NAME,
        {
          keyPath: "id"
        }
      );
      store.createIndex("currency", "countries");
    });
  }

  onChange(store) {
    const currencies = { ...this.state.currencies };
    store.add(currencies);

    return tx.complete;
    console.log(currencies);
  }
  /**
   * @param {string} store_name
   * @param {string} mode either "readonly" or "readwrite"
   */
  getObjectStore(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }

  clearObjectStore(store_name) {
    const store = getObjectStore(this.DB_STORE_NAME, "readwrite");
    const req = store.clear();
    req.onsuccess = event => {
      displayActionSuccess("Store cleared");
      displayCurrList(store);
    };
    req.onerror = event => {
      console.error("clearObjectStore:", event.target.errorCode);
      displayActionFailure(this.error);
    };
  }

  getBlob(key, store, success_callback) {
    const req = store.get(key);
    req.onsuccess = function(event) {
      const value = event.target.result;
      if (value) success_callback(value.blob);
    };
  }

  /**
   * @param {IDBObjectStore=} store
   */

  _showCachedCurrencies() {
    console.log("[Service Worker] showing cached images");
    return this.openDatabase();
  }
}
