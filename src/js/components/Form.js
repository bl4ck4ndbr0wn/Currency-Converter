import { Component } from "./app";
import { form_elements } from "./Elements";
import api from "../api";
import Render from "./Render";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isValid: false,
      errors: {}
    };
    this.render = new Render();
    this.elements = form_elements();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.getAllCountries = this.getAllCountries.bind(this);
  }

  onChange() {
    const data = { ...this.state.data };
    Object.values(this.elements).map(el => {
      el.addEventListener("change", e => {
        data[e.target.name] = e.target.value;
        this.setState({ data });
      });
    });
  }

  getAllCurrencies() {
    api.get("/currencies").then(response => {
      this.render.listCurrencies(response);
    });
  }

  getAllCountries() {
    api.get("/countries").then(response => {
      this.render.listCountries(response);
    });
  }

  onSubmit() {
    const errors = { ...this.state.errors };
    const { submit } = this.elements;

    submit.addEventListener("click", e => {
      e.preventDefault();
      const { fromCurrency, toCurrency, amount } = { ...this.state.data };
      // https://free.currencyconverterapi.com/api/v5/convert?q=HUF_BND&compact=ultra

      const URI = `/convert?q=${fromCurrency}_${toCurrency}&compact=ultra`;

      api.get(URI).then(response => {
        this.render.compute(response, amount);
      });
    });
  }
}

export default Forms;
