const nodes = document.forms.converter;
const { amount, fromCurrency, toCurrency, submit } = nodes.elements;

export const ConvertNodesElements = () => {
  return {
    amount,
    fromCurrency,
    toCurrency,
    submit
  };
};

export const CurrencySelection = () => {
  return {
    fromCurrency,
    toCurrency
  };
};
