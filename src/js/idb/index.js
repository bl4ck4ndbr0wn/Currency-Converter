import { Component } from "./../components/app";
import api from "./../api";
export default class index extends Component {
  constructor() {
    super();
    this.state = {};
    this.indexDB =
      window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
    this.db = this.indexDB.open("CConverter", 1);
    this.onUpgrade = this.onUpgrade.bind(this);
  }
  // Create the schema
  onUpgrade = () => {
    const db = open.result;
    const store = db.createObjectStore("CConverter", { keyPath: "id" });
    const index = store.createIndex("currency", "countries");
  };
}
