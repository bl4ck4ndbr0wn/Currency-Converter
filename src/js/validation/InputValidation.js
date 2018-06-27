import isEmpty from "./is-empty";

const validateAmountInput = data => {
  let errors = {};

  if (data.length === 0) {
    errors = "Amount field is required.";
  }
  if (data.length > 50) {
    errors = "Amount needs to be between 1 and 50 characters";
  }
  if (isNaN(data)) {
    errors = `${data} is not a currency number value.`;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateAmountInput;
