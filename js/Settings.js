class Settings {
  constructor() {
    this.amount = amount;
    this.currency = currency;
    this.isValid = false;
  }

  onValidate() {
    console.log("validated...");

    this.isValid = true;
  }
  onChange(e) {
    console.log("changed....");
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
