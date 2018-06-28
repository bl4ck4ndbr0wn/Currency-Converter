const nodes = document.forms.converter;
const { amount, fromCurrency, toCurrency, submit } = nodes.elements;
export const form_elements = () => {
  return {
    amount,
    fromCurrency,
    toCurrency,
    submit
  };
};
export const select_elements = () => {
  return {
    fromCurrency,
    toCurrency
  };
};

export const table_elements = () => {
  const countries = document.getElementById("countries");
  const currencies = document.getElementById("currencies");
  return {
    countries,
    currencies
  };
};
