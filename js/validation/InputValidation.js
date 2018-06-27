import { isEmpty } from "./is-empty.js";

const formValidation = data => {
  let errors = {};

  data.amount = !isEmpty(data.amount) ? data.amount : "";
  if (data.amount.isEmpty(data.amount)) {
    errors.handle = "Amount is required.";
  }
  if (data.amount.length < 1 && data.amount.length > 50) {
    errors.amount = "Amount needs to be between 1 and 50 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export { formValidation };
