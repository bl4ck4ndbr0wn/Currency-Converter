import { Component } from "./app";
import { ConvertNodesElements } from "./FormElements";
import api from "../api";
import render from "./Render";

class ConvertForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isValid: false,
      errors: {}
    };
    this.elements = ConvertNodesElements();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange() {
    const data = { ...this.state.data };
    Object.values(this.elements).map(el => {
      el.addEventListener("change", e => {
        data[e.target.name] = e.target.value;
        this.setState({ data });
        console.log(this.state.data);
      });
    });
  }

  getAllCurrencies() {
    api.get("/currencies").then(response => {
      render.listCurrencies(response);
    });
  }

  getAllCountries() {}

  onSubmit() {
    const errors = { ...this.state.errors };
    const { submit } = this.elements;

    submit.addEventListener("click", e => {
      e.preventDefault();
      let fr = this.state.data.fromCurrency;
      let to = this.state.data.toCurrency;
      let amount = this.state.data.amount;

      // https://free.currencyconverterapi.com/api/v5/convert?q=HUF_BND&compact=ultra

      const URI = `/convert?q=${fr}_${to}&compact=ultra`;

      api.get(URI).then(response => {
        // render.listCurrencies(response);
        render.compute(response, amount);
      });
    });
  }
}

module.exports = ConvertForm;

// onValidate(data) {
//   const { isValid, errors } = validateAmountInput(data);
//   if (!isValid) {
//     const allerrors = {};

//     const err = Object.assign(errors, allerrors);
//     if (err) {
//       smallMessage.innerHTML = err;
//       smallMessage.style.backgroundColor = "#ffdddd";
//       smallMessage.style.color = "black";
//       input.className = "invalid";
//       this.isValid = false;
//     } else {
//       smallMessage.innerHTML = "";
//       smallMessage.style.backgroundColor = "";
//       smallMessage.style.color = "";
//       input.className = "";
//       this.isValid = true;
//     }
//   }

//   this.amount = data.input.value;
//   this.currency = data.select.value;
//   console.log(this.amount, this.currency);
//   // this.isValid = true;
//   // console.log("validated...");
// }
