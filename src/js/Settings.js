import validateAmountInput from "./validation/InputValidation";
import { createUnzip } from "zlib";

class Settings {
  constructor() {
    this.amount = amount;
    this.currency = currency;
  }

  onValidate(data) {
    const { isValid, errors } = validateAmountInput(data);
    if (!isValid) {
      const allerrors = {};

      const updatedError = Object.assign(errors, allerrors);
      return updatedError;
    }
    // this.isValid = true;
    // console.log("validated...");
  }
  onChange(data) {
    this.onValidate(data);
  }
  onSubmit() {
    if (this.isValid) {
      console.log("submitted.....");
    } else {
      this.validate();
    }
  }
}

module.exports = Settings;
