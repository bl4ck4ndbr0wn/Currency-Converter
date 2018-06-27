class Api {
  constructor() {
    this.apiURI = "https://free.currencyconverterapi.com/api/v5";
  }

  logError(error) {
    console.log("Looks like there was a problem: \n", error);
  }

  validateResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  readResponseAsJSON(response) {
    return response.json();
  }

  get(endpoint) {
    const URI = `${this.apiURI}${endpoint}`;
    return fetch(URI)
      .then(this.validateResponse)
      .then(this.readResponseAsJSON)
      .catch(this.logError);
  }
}

const api = new Api();

export default api;
