class Api {
  constructor() {
    this.apiURI = "https://www.currencyconverterapi.com/api/v5";
  }

  logResult(result) {
    console.log(result);
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

  //   Returns your current API usage
  getApiKey() {}
  getAmount(endpoint, { ...data }) {
    const { amount, fromCurrency, toCurrency } = data;
    const query = `${fromCurrency}_${toCurrency}`;
    let URI = `${this.apiURI}${endpoint}${query}`;

    fetch(URI)
      .then(this.validateResponse)
      .then(readResponseAsJSON)
      .then(logResult)
      .catch(this.logError);
  }
  //   List of currencies
  //   @route /currencies
  getCurrencies(endpoint, { ...data }) {
    fetch(URI)
      .then(this.validateResponse)
      .then(readResponseAsJSON)
      .then(logResult)
      .catch(this.logError);
  }
  //   List of countries
  // @route /countries
  getCountries(endpoint, { ...data }) {
    fetch(URI)
      .then(this.validateResponse)
      .then(readResponseAsJSON)
      .then(logResult)
      .catch(this.logError);
  }
  //   Historical Data (Experimental, Single Date)
  // @route convert?q=USD_PHP,PHP_USD&compact=ultra&date=2017-12-31
  getHistoricalDataSingle(endpoint, { ...data }) {
    fetch(URI)
      .then(this.validateResponse)
      .then(readResponseAsJSON)
      .then(logResult)
      .catch(this.logError);
  }
  //   Historical Data (Experimental, Date Range)
  // @route /convert?q=USD_PHP,PHP_USD&compact=ultra&date=2018-03-20&endDate=2018-03-25
  getHistoricalDataDataRange(endpoint, { ...data }) {
    fetch(URI)
      .then(this.validateResponse)
      .then(readResponseAsJSON)
      .then(logResult)
      .catch(this.logError);
  }
}

const api = new Api();

export default api;
