export const ConvertNodesElements = () => {
  const nodes = document.forms.converter;
  const { amount, fromCurrency, toCurrency, submit } = nodes.elements;

  return {
    amount,
    fromCurrency,
    toCurrency,
    submit
  };
};
