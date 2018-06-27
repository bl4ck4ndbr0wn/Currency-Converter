import { Component } from "./app";
import { CurrencySelection } from "./FormElements";

class Render extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      currencies: {},
      countries: {}
    };

    this.elements = CurrencySelection();
    this.listCurrencies = this.listCurrencies.bind(this);
  }
  onChange() {
    const data = { ...this.state.data };
    Object.values(this.elements).map(el => {
      const opt = document.createElement("option");
      opt.value = data.id;
      opt.text = data.currencyName;

      el.add(opt, null);
    });
  }

  listCurrencies(result) {
    const data = { ...this.state.data };
    Object.entries(result.results).map(val => {
      /*
      "currencyName": "Albanian Lek",
      "currencySymbol": "Lek",
      "id": "ALL"
      */
      this.setState({
        data: {
          ...val[1]
        }
      });
      this.onChange();
      console.log(this.state.data);
    });
  }
}

const render = new Render();

export default render;
