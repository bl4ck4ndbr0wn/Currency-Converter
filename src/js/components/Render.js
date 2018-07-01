import { Component } from "./app";
import { select_elements, table_elements } from "./Elements";

export default class Render extends Component {
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
    this.createTable(data, this.table.currencies);
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
  createTable(data, element) {
    // Create table element
    const tbl = document.createElement("table");
    // create rows
    const row = document.createElement("tr");
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key} ${value}`);
      //Create cells in row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(value);
      cell.appendChild(cellText);
      row.appendChild(cell);
      tbl.appendChild(row);
    }
  }
  listCountries(result) {
    const countries = { ...this.state.countries };
    console.log(result.results);
    Object.entries(result.results).map(val => {
      this.setState({
        countries: {
          ...val[1]
        }
      });
      this.createTable(countries, this.table.countries);
      console.log(this.state.countries);
    });
  }
}
