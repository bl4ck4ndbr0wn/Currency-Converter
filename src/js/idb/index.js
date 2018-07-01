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
    this.dbName = "CConverter";
  }
  // Create the schema
  openDatabase() {
    // If the browser doesn't support service worker,
    // we don't care about having a database
    if (!navigator.serviceWorker) {
      return Promise.resolve();
    }
    if (!this.indexDB) {
      window.alert(
        "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
      );
    }
    const dbPromise = this.indexDB.open(this.dbName, 2, upgradeDB => {
      if (!upgradeDb.objectStoreNames.contains("currency")) {
        upgradeDb.createObjectStore("currency", { keyPath: "id" });
      }
      if (!upgradeDb.objectStoreNames.contains("countries")) {
        upgradeDb.createObjectStore("countries", { keyPath: "id" });
      }
      objectStore.createIndex("currency", "countries");
    });
    console.log(dbPromise);
    dbPromise
      .then(db => {
        const tx = db.transaction(this.dbName, "readwrite");
        const store = tx.objectStore(this.store);
        const item = {
          id: 1,
          name: "sandwichs",
          price: 4.99,
          description: "A very tasty sandwich",
          created: new Date().getTime()
        };
        store.add({ ...item });
        return tx.complete;
      })
      .then(() => {
        console.log("added item to the store os!");
      });
  }

  _showCachedCurrencies = () => {
    console.log("[Service Worker] showing cached images");
    return this.openDatabase();
  };

  onChange() {
    const currencies = { ...this.state.currencies };
    store.put(currencies);
    console.log(currencies);
  }
  putCurrencies() {
    // Start a new transaction
    const db = this.db.result;
    const tx = db.transaction(this.dbName, "readwrite");
    const store = tx.objectStore(this.dbName);
    const index = store.index("currency");
    console.log("Adding currencies");
    // Add some data
    api.get("/currencies").then(response => {
      Object.entries(result.results).map(val => {
        this.setState({
          currencies: {
            ...val[1]
          }
        });
        this.onChange();
      });
    });

    // Query the data
    // Close the db when the transaction is done
    tx.onComplete = () => {
      db.close();
    };
  }
}
