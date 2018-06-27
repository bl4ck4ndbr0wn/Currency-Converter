import isEmpty from "./is-empty";

const validateAmountInput = data => {
  let errors = {};

  data.input = !isEmpty(data.input.value) ? data.input.value : "";

  if (data.input.length < 1) {
    errors = "Amount field is required.";
  }
  if (data.input.length > 50) {
    errors = "Amount needs to be between 1 and 50 characters";
  }
  if (isNaN(data.input)) {
    errors = `${data.input} is not a currency number value.`;
  }
  if (data.select.value === "Default") {
    errors = "Please select a currency type.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateAmountInput;
