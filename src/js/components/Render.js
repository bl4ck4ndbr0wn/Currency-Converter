import { Component } from "./app";
import { select_elements, table_elements } from "./Elements";

class Render extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      currencies: {},
      countries: {}
    };

    this.elements = select_elements();
    this.table = table_elements();
    this.onChange = this.onChange.bind(this);
    // this.createTable = this.createTable.bind(this);
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

  compute(resp, data) {
    console.log(Object.values(resp)[0], data);
    const nodes = document.forms.converter;
    const convertion = document.getElementById("conversion");
    const { results } = nodes.elements;
    const currency = Object.values(resp)[0];
    // Compute
    const culculate = currency * data;
    //Display Results
    results.value = culculate;
    convertion.innerText = `Convertion Rate was ${currency}`;
  }
  /*
    data = {
    "currencyName": "Albanian Lek",
    "currencySymbol": "Lek",
    "id": "ALL"
    }
    */
  listCurrencies(result) {
    const data = { ...this.state.data };
    Object.entries(result.results).map(val => {
      this.setState({
        data: {
          ...val[1]
        }
      });
      this.onChange();
    });
  }
  //   createTable() {
  //     const countries = { ...this.state.countries };
  //     for (const [key, value] of Object.entries(countries)) {
  //       console.log(`${key} ${value}`);
  //       const table = this.table;
  //     }
  //     console.log(countries);
  //   }
  //   listCountries(result) {
  //     const countries = { ...this.state.countries };
  //     console.log(result.results);
  //     Object.entries(result.results).map(val => {
  //       this.setState({
  //         countries: {
  //           ...val[1]
  //         }
  //       });
  //       this.createTable();
  //       console.log(this.state.countries);
  //     });
  //   }
}

const render = new Render();

export default render;
