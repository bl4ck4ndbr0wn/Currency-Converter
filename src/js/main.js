/**
 * Currency-Converter - Design Components in CSS, JS and HTML
 * @version v1.2.1
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/bl4ck4ndbr0wn/Currency-Converter
 */

import Forms from "./components/Form";

async function onLoadSWAsync() {
  //Install the service worker
  if ("serviceWorker" in navigator) {
    try {
      let serviceWorker = await navigator.serviceWorker.register("/sw.js");
      console.log(`Service worker registered ${serviceWorker}`);
    } catch (err) {
      console.error(`Failed to register service worker: ${err}`);
    }
  }
}
onLoadSWAsync();

//  Initializing the classes
const forms = new Forms();

//Forms functions
forms.getAllCurrencies();

forms.onChange();
forms.onSubmit();
