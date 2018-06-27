/**
 * Currency-Converter - Design Components in CSS, JS and HTML
 * @version v1.2.1
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/bl4ck4ndbr0wn/Currency-Converter
 */

// const form = document.querySelector("form");
// const message = document.getElementById("message");
//

// const amountMessage = "Enter Amount";

// const firstMessage = () => {
//   message.innerHTML = amountMessage;
//   smallMessage.innerHTML = "";
// };

// const formValidate = () => {
//   amount.addEventListener("input", firstMessage);
//   amount.addEventListener("input", length);

//   submitBtn.addEventListener("mouseover", event => {
//     message.innerHTML = "You're a click away";
//     smallMessage.innerHTML = "Do it. That's What you are here for.";
//   });
//   //display converted Text
//   submitBtn.addEventListener("click", event => {
//     form.innerHTML =
//       '<h1>Good job!</h1><p class="success-message">The amount is 123432.</p>';
//   });
// };
// const validateAmount = require("./validation/validation");
// import validateAmount from "./validation/validation.js";

// const smallMessage = document.getElementById("smallMessage");
// const amount = document.getElementById("amount");
// const currencyType = document.getElementById("currency");
// const submitBtn = document.getElementById("submit");

// const data = {
//   amount: amount.value,
//   currency: currencyType.value
// };

// // export const submitForm = () => {
//   if (amount.addEventListener) {
//     amount.addEventListener("onChange", event => {
//       const { errors, isValid } = validateAmount(data);
//       if (!isValid) {
//         smallMessage.innerHTML = errors;
//       }
//       console.log(data);
//     });
//   } else {
//     submitBtn.addEventListener("click", event => {
//       form.innerHTML =
//         '<h1>Good job!</h1><p class="success-message">The amount is 123432.</p>';
//     });
//   }
//   console.log(amount);
// };

// submitForm();
// import { formValidation } from "./validation/validation.js";

// const data = {
//   amount: input.value,
//   currency: selectf.value
// };

// const onChangefunc = () => {
//   // const { errors, isValid } = validateAmount(data);
//   // if (!isValid) {
//   //   smallMessage.innerHTML = errors;
//   // }
//   input.addEventListener("input", function() {
//     const { errors, isValid } = formValidation(data);

//     if (!isValid) {
//       console.log("errors: ", errors);
//     }

//     console.log("Output: ", data);
//   });
//   selectf.addEventListener("click", function() {
//     console.log("Select changed to: ", selectf.value);
//   });
// };

import ConvertForm from "./components/ConvertForm";

const convertForm = new ConvertForm();

convertForm.getAllCurrencies();
convertForm.getAllCountries();

convertForm.onChange();
convertForm.onSubmit();
