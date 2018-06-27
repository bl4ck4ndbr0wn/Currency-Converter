(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _jsSettings = require("./js/Settings");

var _jsSettings2 = _interopRequireDefault(_jsSettings);

var form = document.querySelector("form");
var message = document.getElementById("message");

var input = document.querySelector("input");
var selectf = document.querySelector("select");
var submitBtn = document.getElementById("submit");

var settings = new _jsSettings2["default"](input, selectf);

var app = function app() {
  input.addEventListener("input", function () {
    settings.onValidate();
    settings.onChange();
  });
  selectf.addEventListener("click", function () {
    settings.onSubmit();
  });
  submitBtn.addEventListener("click", function (event) {
    form.innerHTML = '<h1>Good job!!</h1><p class="success-message">The amount is 123432.</p>';
  });
};

app();

},{"./js/Settings":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = (function () {
  function Settings() {
    _classCallCheck(this, Settings);

    this.amount = amount;
    this.currency = currency;
    this.isValid = false;
  }

  _createClass(Settings, [{
    key: "onValidate",
    value: function onValidate() {
      console.log("validated...");

      this.isValid = true;
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      console.log("changed....");
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      if (this.isValid) {
        console.log("submitted.....");
      } else {
        this.validate();
      }
    }
  }]);

  return Settings;
})();

module.exports = Settings;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvYWxwaGEvRGF0YS9QZXJzb25hbC9Hb29nbGVfQWZyaWNhX0NoYWxsZW5nZV9TY2hvbGFyc2hpcC9jdXJyZW5jeS1jb252ZXJ0ZXIvYXBwLmpzIiwiL21lZGlhL2FscGhhL0RhdGEvUGVyc29uYWwvR29vZ2xlX0FmcmljYV9DaGFsbGVuZ2VfU2Nob2xhcnNoaXAvY3VycmVuY3ktY29udmVydGVyL2pzL1NldHRpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQ21GcUIsZUFBZTs7OztBQUVwQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRW5ELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqRCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUVwRCxJQUFNLFFBQVEsR0FBRyw0QkFBYSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRTlDLElBQU0sR0FBRyxHQUFHLFNBQU4sR0FBRyxHQUFTO0FBQ2hCLE9BQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtBQUNwQyxZQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdEIsWUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0dBQ3JCLENBQUMsQ0FBQztBQUNILFNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtBQUN0QyxZQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7R0FDckIsQ0FBQyxDQUFDO0FBQ0gsV0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBLEtBQUssRUFBSTtBQUMzQyxRQUFJLENBQUMsU0FBUyxHQUNaLHlFQUF5RSxDQUFDO0dBQzdFLENBQUMsQ0FBQztDQUNKLENBQUM7O0FBRUYsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7OztJQzVHQSxRQUFRO0FBQ0QsV0FEUCxRQUFRLEdBQ0U7MEJBRFYsUUFBUTs7QUFFVixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixRQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixRQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztHQUN0Qjs7ZUFMRyxRQUFROztXQU9GLHNCQUFHO0FBQ1gsYUFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFNUIsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDckI7OztXQUNPLGtCQUFDLENBQUMsRUFBRTtBQUNWLGFBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDNUI7OztXQUNPLG9CQUFHO0FBQ1QsVUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLGVBQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztPQUMvQixNQUFNO0FBQ0wsWUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO09BQ2pCO0tBQ0Y7OztTQXJCRyxRQUFROzs7QUF3QmQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuLy8gY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKTtcbi8vXG5cbi8vIGNvbnN0IGFtb3VudE1lc3NhZ2UgPSBcIkVudGVyIEFtb3VudFwiO1xuXG4vLyBjb25zdCBmaXJzdE1lc3NhZ2UgPSAoKSA9PiB7XG4vLyAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gYW1vdW50TWVzc2FnZTtcbi8vICAgc21hbGxNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4vLyB9O1xuXG4vLyBjb25zdCBmb3JtVmFsaWRhdGUgPSAoKSA9PiB7XG4vLyAgIGFtb3VudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZmlyc3RNZXNzYWdlKTtcbi8vICAgYW1vdW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBsZW5ndGgpO1xuXG4vLyAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGV2ZW50ID0+IHtcbi8vICAgICBtZXNzYWdlLmlubmVySFRNTCA9IFwiWW91J3JlIGEgY2xpY2sgYXdheVwiO1xuLy8gICAgIHNtYWxsTWVzc2FnZS5pbm5lckhUTUwgPSBcIkRvIGl0LiBUaGF0J3MgV2hhdCB5b3UgYXJlIGhlcmUgZm9yLlwiO1xuLy8gICB9KTtcbi8vICAgLy9kaXNwbGF5IGNvbnZlcnRlZCBUZXh0XG4vLyAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuLy8gICAgIGZvcm0uaW5uZXJIVE1MID1cbi8vICAgICAgICc8aDE+R29vZCBqb2IhPC9oMT48cCBjbGFzcz1cInN1Y2Nlc3MtbWVzc2FnZVwiPlRoZSBhbW91bnQgaXMgMTIzNDMyLjwvcD4nO1xuLy8gICB9KTtcbi8vIH07XG4vLyBjb25zdCB2YWxpZGF0ZUFtb3VudCA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRpb24vdmFsaWRhdGlvblwiKTtcbi8vIGltcG9ydCB2YWxpZGF0ZUFtb3VudCBmcm9tIFwiLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uanNcIjtcblxuLy8gY29uc3Qgc21hbGxNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbWFsbE1lc3NhZ2VcIik7XG4vLyBjb25zdCBhbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtb3VudFwiKTtcbi8vIGNvbnN0IGN1cnJlbmN5VHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVuY3lcIik7XG4vLyBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcblxuLy8gY29uc3QgZGF0YSA9IHtcbi8vICAgYW1vdW50OiBhbW91bnQudmFsdWUsXG4vLyAgIGN1cnJlbmN5OiBjdXJyZW5jeVR5cGUudmFsdWVcbi8vIH07XG5cbi8vIC8vIGV4cG9ydCBjb25zdCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuLy8gICBpZiAoYW1vdW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbi8vICAgICBhbW91bnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIGV2ZW50ID0+IHtcbi8vICAgICAgIGNvbnN0IHsgZXJyb3JzLCBpc1ZhbGlkIH0gPSB2YWxpZGF0ZUFtb3VudChkYXRhKTtcbi8vICAgICAgIGlmICghaXNWYWxpZCkge1xuLy8gICAgICAgICBzbWFsbE1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyb3JzO1xuLy8gICAgICAgfVxuLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgfSk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4vLyAgICAgICBmb3JtLmlubmVySFRNTCA9XG4vLyAgICAgICAgICc8aDE+R29vZCBqb2IhPC9oMT48cCBjbGFzcz1cInN1Y2Nlc3MtbWVzc2FnZVwiPlRoZSBhbW91bnQgaXMgMTIzNDMyLjwvcD4nO1xuLy8gICAgIH0pO1xuLy8gICB9XG4vLyAgIGNvbnNvbGUubG9nKGFtb3VudCk7XG4vLyB9O1xuXG4vLyBzdWJtaXRGb3JtKCk7XG4vLyBpbXBvcnQgeyBmb3JtVmFsaWRhdGlvbiB9IGZyb20gXCIuL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5qc1wiO1xuXG4vLyBjb25zdCBkYXRhID0ge1xuLy8gICBhbW91bnQ6IGlucHV0LnZhbHVlLFxuLy8gICBjdXJyZW5jeTogc2VsZWN0Zi52YWx1ZVxuLy8gfTtcblxuLy8gY29uc3Qgb25DaGFuZ2VmdW5jID0gKCkgPT4ge1xuLy8gICAvLyBjb25zdCB7IGVycm9ycywgaXNWYWxpZCB9ID0gdmFsaWRhdGVBbW91bnQoZGF0YSk7XG4vLyAgIC8vIGlmICghaXNWYWxpZCkge1xuLy8gICAvLyAgIHNtYWxsTWVzc2FnZS5pbm5lckhUTUwgPSBlcnJvcnM7XG4vLyAgIC8vIH1cbi8vICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnN0IHsgZXJyb3JzLCBpc1ZhbGlkIH0gPSBmb3JtVmFsaWRhdGlvbihkYXRhKTtcblxuLy8gICAgIGlmICghaXNWYWxpZCkge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJlcnJvcnM6IFwiLCBlcnJvcnMpO1xuLy8gICAgIH1cblxuLy8gICAgIGNvbnNvbGUubG9nKFwiT3V0cHV0OiBcIiwgZGF0YSk7XG4vLyAgIH0pO1xuLy8gICBzZWxlY3RmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdCBjaGFuZ2VkIHRvOiBcIiwgc2VsZWN0Zi52YWx1ZSk7XG4vLyAgIH0pO1xuLy8gfTtcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL2pzL1NldHRpbmdzXCI7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIik7XG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuY29uc3Qgc2VsZWN0ZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcblxuY29uc3Qgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoaW5wdXQsIHNlbGVjdGYpO1xuXG5jb25zdCBhcHAgPSAoKSA9PiB7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgc2V0dGluZ3Mub25WYWxpZGF0ZSgpO1xuICAgIHNldHRpbmdzLm9uQ2hhbmdlKCk7XG4gIH0pO1xuICBzZWxlY3RmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2V0dGluZ3Mub25TdWJtaXQoKTtcbiAgfSk7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgIGZvcm0uaW5uZXJIVE1MID1cbiAgICAgICc8aDE+R29vZCBqb2IhITwvaDE+PHAgY2xhc3M9XCJzdWNjZXNzLW1lc3NhZ2VcIj5UaGUgYW1vdW50IGlzIDEyMzQzMi48L3A+JztcbiAgfSk7XG59O1xuXG5hcHAoKTtcbiIsImNsYXNzIFNldHRpbmdzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuICB9XG5cbiAgb25WYWxpZGF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInZhbGlkYXRlZC4uLlwiKTtcblxuICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gIH1cbiAgb25DaGFuZ2UoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlZC4uLi5cIik7XG4gIH1cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgY29uc29sZS5sb2coXCJzdWJtaXR0ZWQuLi4uLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzO1xuIl19
