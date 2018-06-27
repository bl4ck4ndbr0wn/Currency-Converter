/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/api/api.js":
/*!***************************!*\
  !*** ./src/js/api/api.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
  function Api() {
    _classCallCheck(this, Api);

    this.apiURI = "https://www.currencyconverterapi.com/api/v5";
  }

  _createClass(Api, [{
    key: "logResult",
    value: function logResult(result) {
      console.log(result);
    }
  }, {
    key: "logError",
    value: function logError(error) {
      console.log("Looks like there was a problem: \n", error);
    }
  }, {
    key: "validateResponse",
    value: function validateResponse(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }, {
    key: "readResponseAsJSON",
    value: function readResponseAsJSON(response) {
      return response.json();
    }

    //   Returns your current API usage

  }, {
    key: "getApiKey",
    value: function getApiKey() {}
  }, {
    key: "getAmount",
    value: function getAmount(endpoint, _ref) {
      var data = _objectWithoutProperties(_ref, []);

      var amount = data.amount,
          fromCurrency = data.fromCurrency,
          toCurrency = data.toCurrency;

      var query = fromCurrency + "_" + toCurrency;
      var URI = "" + this.apiURI + endpoint + query;

      fetch(URI).then(this.validateResponse).then(readResponseAsJSON).then(logResult).catch(this.logError);
    }
    //   List of currencies
    //   @route /currencies

  }, {
    key: "getCurrencies",
    value: function getCurrencies(endpoint, _ref2) {
      var data = _objectWithoutProperties(_ref2, []);

      fetch(URI).then(this.validateResponse).then(readResponseAsJSON).then(logResult).catch(this.logError);
    }
    //   List of countries
    // @route /countries

  }, {
    key: "getCountries",
    value: function getCountries(endpoint, _ref3) {
      var data = _objectWithoutProperties(_ref3, []);

      fetch(URI).then(this.validateResponse).then(readResponseAsJSON).then(logResult).catch(this.logError);
    }
    //   Historical Data (Experimental, Single Date)
    // @route convert?q=USD_PHP,PHP_USD&compact=ultra&date=2017-12-31

  }, {
    key: "getHistoricalDataSingle",
    value: function getHistoricalDataSingle(endpoint, _ref4) {
      var data = _objectWithoutProperties(_ref4, []);

      fetch(URI).then(this.validateResponse).then(readResponseAsJSON).then(logResult).catch(this.logError);
    }
    //   Historical Data (Experimental, Date Range)
    // @route /convert?q=USD_PHP,PHP_USD&compact=ultra&date=2018-03-20&endDate=2018-03-25

  }, {
    key: "getHistoricalDataDataRange",
    value: function getHistoricalDataDataRange(endpoint, _ref5) {
      var data = _objectWithoutProperties(_ref5, []);

      fetch(URI).then(this.validateResponse).then(readResponseAsJSON).then(logResult).catch(this.logError);
    }
  }]);

  return Api;
}();

var api = new Api();

exports.default = api;

/***/ }),

/***/ "./src/js/components/ConvertForm.js":
/*!******************************************!*\
  !*** ./src/js/components/ConvertForm.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(/*! ./app */ "./src/js/components/app.js");

var _FormElements = __webpack_require__(/*! ./FormElements */ "./src/js/components/FormElements.js");

var _api = __webpack_require__(/*! ./../api/api */ "./src/js/api/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConvertForm = function (_Component) {
  _inherits(ConvertForm, _Component);

  function ConvertForm() {
    _classCallCheck(this, ConvertForm);

    var _this = _possibleConstructorReturn(this, (ConvertForm.__proto__ || Object.getPrototypeOf(ConvertForm)).call(this));

    _this.state = {
      data: {},
      isValid: false,
      errors: {}
    };
    _this.elements = (0, _FormElements.ConvertNodesElements)();
    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(ConvertForm, [{
    key: "onChange",
    value: function onChange() {
      var _this2 = this;

      var data = _extends({}, this.state.data);
      Object.values(this.elements).map(function (el) {
        el.addEventListener("change", function (e) {
          data[e.target.name] = e.target.value;
          _this2.setState({ data: data });
          console.log(_this2.state.data);
        });
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this3 = this;

      var errors = _extends({}, this.state.errors);
      this.elements.submit.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(_this3.state.data);
        _api2.default.getAmount("/convert?q=", _this3.state.data).then(function (res) {
          return res.json();
        }).then(function (err, amount) {
          console.log(amount);
        });
      });
    }
  }]);

  return ConvertForm;
}(_app.Component);

module.exports = ConvertForm;

// onValidate(data) {
//   const { isValid, errors } = validateAmountInput(data);
//   if (!isValid) {
//     const allerrors = {};

//     const err = Object.assign(errors, allerrors);
//     if (err) {
//       smallMessage.innerHTML = err;
//       smallMessage.style.backgroundColor = "#ffdddd";
//       smallMessage.style.color = "black";
//       input.className = "invalid";
//       this.isValid = false;
//     } else {
//       smallMessage.innerHTML = "";
//       smallMessage.style.backgroundColor = "";
//       smallMessage.style.color = "";
//       input.className = "";
//       this.isValid = true;
//     }
//   }

//   this.amount = data.input.value;
//   this.currency = data.select.value;
//   console.log(this.amount, this.currency);
//   // this.isValid = true;
//   // console.log("validated...");
// }

/***/ }),

/***/ "./src/js/components/FormElements.js":
/*!*******************************************!*\
  !*** ./src/js/components/FormElements.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ConvertNodesElements = exports.ConvertNodesElements = function ConvertNodesElements() {
  var nodes = document.forms.converter;
  var _nodes$elements = nodes.elements,
      amount = _nodes$elements.amount,
      fromCurrency = _nodes$elements.fromCurrency,
      toCurrency = _nodes$elements.toCurrency,
      submit = _nodes$elements.submit;


  return {
    amount: amount,
    fromCurrency: fromCurrency,
    toCurrency: toCurrency,
    submit: submit
  };
};

/***/ }),

/***/ "./src/js/components/app.js":
/*!**********************************!*\
  !*** ./src/js/components/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = exports.Component = function () {
  function Component() {
    _classCallCheck(this, Component);

    this.setState = this.setState.bind(this);
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(newState) {
      return Object.assign(this.state, newState);
    }
  }]);

  return Component;
}();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ConvertForm = __webpack_require__(/*! ./components/ConvertForm */ "./src/js/components/ConvertForm.js");

var _ConvertForm2 = _interopRequireDefault(_ConvertForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertForm = new _ConvertForm2.default(); /**
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

convertForm.onChange();
convertForm.onSubmit();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvQ29udmVydEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvRm9ybUVsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJBcGkiLCJhcGlVUkkiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsImVuZHBvaW50IiwiZGF0YSIsImFtb3VudCIsImZyb21DdXJyZW5jeSIsInRvQ3VycmVuY3kiLCJxdWVyeSIsIlVSSSIsImZldGNoIiwidGhlbiIsInZhbGlkYXRlUmVzcG9uc2UiLCJyZWFkUmVzcG9uc2VBc0pTT04iLCJsb2dSZXN1bHQiLCJjYXRjaCIsImxvZ0Vycm9yIiwiYXBpIiwiQ29udmVydEZvcm0iLCJzdGF0ZSIsImlzVmFsaWQiLCJlcnJvcnMiLCJlbGVtZW50cyIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uU3VibWl0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwic3VibWl0IiwicHJldmVudERlZmF1bHQiLCJnZXRBbW91bnQiLCJyZXMiLCJlcnIiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQ29udmVydE5vZGVzRWxlbWVudHMiLCJub2RlcyIsImRvY3VtZW50IiwiZm9ybXMiLCJjb252ZXJ0ZXIiLCJuZXdTdGF0ZSIsImFzc2lnbiIsImNvbnZlcnRGb3JtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZNQSxHO0FBQ0osaUJBQWM7QUFBQTs7QUFDWixTQUFLQyxNQUFMLEdBQWMsNkNBQWQ7QUFDRDs7Ozs4QkFFU0MsTSxFQUFRO0FBQ2hCQyxjQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDRDs7OzZCQUVRRyxLLEVBQU87QUFDZEYsY0FBUUMsR0FBUixDQUFZLG9DQUFaLEVBQWtEQyxLQUFsRDtBQUNEOzs7cUNBRWdCQyxRLEVBQVU7QUFDekIsVUFBSSxDQUFDQSxTQUFTQyxFQUFkLEVBQWtCO0FBQ2hCLGNBQU1DLE1BQU1GLFNBQVNHLFVBQWYsQ0FBTjtBQUNEO0FBQ0QsYUFBT0gsUUFBUDtBQUNEOzs7dUNBRWtCQSxRLEVBQVU7QUFDM0IsYUFBT0EsU0FBU0ksSUFBVCxFQUFQO0FBQ0Q7O0FBRUQ7Ozs7Z0NBQ1ksQ0FBRTs7OzhCQUNKQyxRLFFBQXVCO0FBQUEsVUFBUkMsSUFBUTs7QUFBQSxVQUN2QkMsTUFEdUIsR0FDY0QsSUFEZCxDQUN2QkMsTUFEdUI7QUFBQSxVQUNmQyxZQURlLEdBQ2NGLElBRGQsQ0FDZkUsWUFEZTtBQUFBLFVBQ0RDLFVBREMsR0FDY0gsSUFEZCxDQUNERyxVQURDOztBQUUvQixVQUFNQyxRQUFXRixZQUFYLFNBQTJCQyxVQUFqQztBQUNBLFVBQUlFLFdBQVMsS0FBS2hCLE1BQWQsR0FBdUJVLFFBQXZCLEdBQWtDSyxLQUF0Qzs7QUFFQUUsWUFBTUQsR0FBTixFQUNHRSxJQURILENBQ1EsS0FBS0MsZ0JBRGIsRUFFR0QsSUFGSCxDQUVRRSxrQkFGUixFQUdHRixJQUhILENBR1FHLFNBSFIsRUFJR0MsS0FKSCxDQUlTLEtBQUtDLFFBSmQ7QUFLRDtBQUNEO0FBQ0E7Ozs7a0NBQ2NiLFEsU0FBdUI7QUFBQSxVQUFSQyxJQUFROztBQUNuQ00sWUFBTUQsR0FBTixFQUNHRSxJQURILENBQ1EsS0FBS0MsZ0JBRGIsRUFFR0QsSUFGSCxDQUVRRSxrQkFGUixFQUdHRixJQUhILENBR1FHLFNBSFIsRUFJR0MsS0FKSCxDQUlTLEtBQUtDLFFBSmQ7QUFLRDtBQUNEO0FBQ0E7Ozs7aUNBQ2FiLFEsU0FBdUI7QUFBQSxVQUFSQyxJQUFROztBQUNsQ00sWUFBTUQsR0FBTixFQUNHRSxJQURILENBQ1EsS0FBS0MsZ0JBRGIsRUFFR0QsSUFGSCxDQUVRRSxrQkFGUixFQUdHRixJQUhILENBR1FHLFNBSFIsRUFJR0MsS0FKSCxDQUlTLEtBQUtDLFFBSmQ7QUFLRDtBQUNEO0FBQ0E7Ozs7NENBQ3dCYixRLFNBQXVCO0FBQUEsVUFBUkMsSUFBUTs7QUFDN0NNLFlBQU1ELEdBQU4sRUFDR0UsSUFESCxDQUNRLEtBQUtDLGdCQURiLEVBRUdELElBRkgsQ0FFUUUsa0JBRlIsRUFHR0YsSUFISCxDQUdRRyxTQUhSLEVBSUdDLEtBSkgsQ0FJUyxLQUFLQyxRQUpkO0FBS0Q7QUFDRDtBQUNBOzs7OytDQUMyQmIsUSxTQUF1QjtBQUFBLFVBQVJDLElBQVE7O0FBQ2hETSxZQUFNRCxHQUFOLEVBQ0dFLElBREgsQ0FDUSxLQUFLQyxnQkFEYixFQUVHRCxJQUZILENBRVFFLGtCQUZSLEVBR0dGLElBSEgsQ0FHUUcsU0FIUixFQUlHQyxLQUpILENBSVMsS0FBS0MsUUFKZDtBQUtEOzs7Ozs7QUFHSCxJQUFNQyxNQUFNLElBQUl6QixHQUFKLEVBQVo7O2tCQUVleUIsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VmOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUMsVzs7O0FBQ0oseUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWGYsWUFBTSxFQURLO0FBRVhnQixlQUFTLEtBRkU7QUFHWEMsY0FBUTtBQUhHLEtBQWI7QUFLQSxVQUFLQyxRQUFMLEdBQWdCLHlDQUFoQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQsT0FBaEI7QUFUWTtBQVViOzs7OytCQUNVO0FBQUE7O0FBQ1QsVUFBTXBCLG9CQUFZLEtBQUtlLEtBQUwsQ0FBV2YsSUFBdkIsQ0FBTjtBQUNBc0IsYUFBT0MsTUFBUCxDQUFjLEtBQUtMLFFBQW5CLEVBQTZCTSxHQUE3QixDQUFpQyxjQUFNO0FBQ3JDQyxXQUFHQyxnQkFBSCxDQUFvQixRQUFwQixFQUE4QixhQUFLO0FBQ2pDMUIsZUFBSzJCLEVBQUVDLE1BQUYsQ0FBU0MsSUFBZCxJQUFzQkYsRUFBRUMsTUFBRixDQUFTRSxLQUEvQjtBQUNBLGlCQUFLQyxRQUFMLENBQWMsRUFBRS9CLFVBQUYsRUFBZDtBQUNBVCxrQkFBUUMsR0FBUixDQUFZLE9BQUt1QixLQUFMLENBQVdmLElBQXZCO0FBQ0QsU0FKRDtBQUtELE9BTkQ7QUFPRDs7OytCQUVVO0FBQUE7O0FBQ1QsVUFBTWlCLHNCQUFjLEtBQUtGLEtBQUwsQ0FBV0UsTUFBekIsQ0FBTjtBQUNBLFdBQUtDLFFBQUwsQ0FBY2MsTUFBZCxDQUFxQk4sZ0JBQXJCLENBQXNDLE9BQXRDLEVBQStDLGFBQUs7QUFDbERDLFVBQUVNLGNBQUY7QUFDQTFDLGdCQUFRQyxHQUFSLENBQVksT0FBS3VCLEtBQUwsQ0FBV2YsSUFBdkI7QUFDQWEsc0JBQ0dxQixTQURILENBQ2EsYUFEYixFQUM0QixPQUFLbkIsS0FBTCxDQUFXZixJQUR2QyxFQUVHTyxJQUZILENBRVEsZUFBTztBQUNYLGlCQUFPNEIsSUFBSXJDLElBQUosRUFBUDtBQUNELFNBSkgsRUFLR1MsSUFMSCxDQUtRLFVBQUM2QixHQUFELEVBQU1uQyxNQUFOLEVBQWlCO0FBQ3JCVixrQkFBUUMsR0FBUixDQUFZUyxNQUFaO0FBQ0QsU0FQSDtBQVFELE9BWEQ7QUFZRDs7OztFQXJDdUJvQyxjOztBQXdDMUJDLE9BQU9DLE9BQVAsR0FBaUJ6QixXQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVPLElBQU0wQixzREFBdUIsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ3hDLE1BQU1DLFFBQVFDLFNBQVNDLEtBQVQsQ0FBZUMsU0FBN0I7QUFEd0Msd0JBRWFILE1BQU12QixRQUZuQjtBQUFBLE1BRWhDakIsTUFGZ0MsbUJBRWhDQSxNQUZnQztBQUFBLE1BRXhCQyxZQUZ3QixtQkFFeEJBLFlBRndCO0FBQUEsTUFFVkMsVUFGVSxtQkFFVkEsVUFGVTtBQUFBLE1BRUU2QixNQUZGLG1CQUVFQSxNQUZGOzs7QUFJeEMsU0FBTztBQUNML0Isa0JBREs7QUFFTEMsOEJBRks7QUFHTEMsMEJBSEs7QUFJTDZCO0FBSkssR0FBUDtBQU1ELENBVk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FNSyxTLFdBQUFBLFM7QUFDWCx1QkFBYztBQUFBOztBQUNaLFNBQUtOLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjWCxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0Q7Ozs7NkJBRVF5QixRLEVBQVU7QUFDakIsYUFBT3ZCLE9BQU93QixNQUFQLENBQWMsS0FBSy9CLEtBQW5CLEVBQTBCOEIsUUFBMUIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvRkg7Ozs7OztBQUVBLElBQU1FLGNBQWMsSUFBSWpDLHFCQUFKLEVBQXBCLEMsQ0E3RkE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUFpQyxZQUFZNUIsUUFBWjtBQUNBNEIsWUFBWTFCLFFBQVosRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9tYWluLmpzXCIpO1xuIiwiY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcGlVUkkgPSBcImh0dHBzOi8vd3d3LmN1cnJlbmN5Y29udmVydGVyYXBpLmNvbS9hcGkvdjVcIjtcbiAgfVxuXG4gIGxvZ1Jlc3VsdChyZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9XG5cbiAgbG9nRXJyb3IoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvb2tzIGxpa2UgdGhlcmUgd2FzIGEgcHJvYmxlbTogXFxuXCIsIGVycm9yKTtcbiAgfVxuXG4gIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcmVhZFJlc3BvbnNlQXNKU09OKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIC8vICAgUmV0dXJucyB5b3VyIGN1cnJlbnQgQVBJIHVzYWdlXG4gIGdldEFwaUtleSgpIHt9XG4gIGdldEFtb3VudChlbmRwb2ludCwgeyAuLi5kYXRhIH0pIHtcbiAgICBjb25zdCB7IGFtb3VudCwgZnJvbUN1cnJlbmN5LCB0b0N1cnJlbmN5IH0gPSBkYXRhO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYCR7ZnJvbUN1cnJlbmN5fV8ke3RvQ3VycmVuY3l9YDtcbiAgICBsZXQgVVJJID0gYCR7dGhpcy5hcGlVUkl9JHtlbmRwb2ludH0ke3F1ZXJ5fWA7XG5cbiAgICBmZXRjaChVUkkpXG4gICAgICAudGhlbih0aGlzLnZhbGlkYXRlUmVzcG9uc2UpXG4gICAgICAudGhlbihyZWFkUmVzcG9uc2VBc0pTT04pXG4gICAgICAudGhlbihsb2dSZXN1bHQpXG4gICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XG4gIH1cbiAgLy8gICBMaXN0IG9mIGN1cnJlbmNpZXNcbiAgLy8gICBAcm91dGUgL2N1cnJlbmNpZXNcbiAgZ2V0Q3VycmVuY2llcyhlbmRwb2ludCwgeyAuLi5kYXRhIH0pIHtcbiAgICBmZXRjaChVUkkpXG4gICAgICAudGhlbih0aGlzLnZhbGlkYXRlUmVzcG9uc2UpXG4gICAgICAudGhlbihyZWFkUmVzcG9uc2VBc0pTT04pXG4gICAgICAudGhlbihsb2dSZXN1bHQpXG4gICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XG4gIH1cbiAgLy8gICBMaXN0IG9mIGNvdW50cmllc1xuICAvLyBAcm91dGUgL2NvdW50cmllc1xuICBnZXRDb3VudHJpZXMoZW5kcG9pbnQsIHsgLi4uZGF0YSB9KSB7XG4gICAgZmV0Y2goVVJJKVxuICAgICAgLnRoZW4odGhpcy52YWxpZGF0ZVJlc3BvbnNlKVxuICAgICAgLnRoZW4ocmVhZFJlc3BvbnNlQXNKU09OKVxuICAgICAgLnRoZW4obG9nUmVzdWx0KVxuICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xuICB9XG4gIC8vICAgSGlzdG9yaWNhbCBEYXRhIChFeHBlcmltZW50YWwsIFNpbmdsZSBEYXRlKVxuICAvLyBAcm91dGUgY29udmVydD9xPVVTRF9QSFAsUEhQX1VTRCZjb21wYWN0PXVsdHJhJmRhdGU9MjAxNy0xMi0zMVxuICBnZXRIaXN0b3JpY2FsRGF0YVNpbmdsZShlbmRwb2ludCwgeyAuLi5kYXRhIH0pIHtcbiAgICBmZXRjaChVUkkpXG4gICAgICAudGhlbih0aGlzLnZhbGlkYXRlUmVzcG9uc2UpXG4gICAgICAudGhlbihyZWFkUmVzcG9uc2VBc0pTT04pXG4gICAgICAudGhlbihsb2dSZXN1bHQpXG4gICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XG4gIH1cbiAgLy8gICBIaXN0b3JpY2FsIERhdGEgKEV4cGVyaW1lbnRhbCwgRGF0ZSBSYW5nZSlcbiAgLy8gQHJvdXRlIC9jb252ZXJ0P3E9VVNEX1BIUCxQSFBfVVNEJmNvbXBhY3Q9dWx0cmEmZGF0ZT0yMDE4LTAzLTIwJmVuZERhdGU9MjAxOC0wMy0yNVxuICBnZXRIaXN0b3JpY2FsRGF0YURhdGFSYW5nZShlbmRwb2ludCwgeyAuLi5kYXRhIH0pIHtcbiAgICBmZXRjaChVUkkpXG4gICAgICAudGhlbih0aGlzLnZhbGlkYXRlUmVzcG9uc2UpXG4gICAgICAudGhlbihyZWFkUmVzcG9uc2VBc0pTT04pXG4gICAgICAudGhlbihsb2dSZXN1bHQpXG4gICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XG4gIH1cbn1cblxuY29uc3QgYXBpID0gbmV3IEFwaSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IENvbnZlcnROb2Rlc0VsZW1lbnRzIH0gZnJvbSBcIi4vRm9ybUVsZW1lbnRzXCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLy4uL2FwaS9hcGlcIjtcblxuY2xhc3MgQ29udmVydEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH07XG4gICAgdGhpcy5lbGVtZW50cyA9IENvbnZlcnROb2Rlc0VsZW1lbnRzKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG4gIG9uQ2hhbmdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9O1xuICAgIE9iamVjdC52YWx1ZXModGhpcy5lbGVtZW50cykubWFwKGVsID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIGRhdGFbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHsgLi4udGhpcy5zdGF0ZS5lcnJvcnMgfTtcbiAgICB0aGlzLmVsZW1lbnRzLnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRhdGEpO1xuICAgICAgYXBpXG4gICAgICAgIC5nZXRBbW91bnQoXCIvY29udmVydD9xPVwiLCB0aGlzLnN0YXRlLmRhdGEpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChlcnIsIGFtb3VudCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGFtb3VudCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udmVydEZvcm07XG5cbi8vIG9uVmFsaWRhdGUoZGF0YSkge1xuLy8gICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gdmFsaWRhdGVBbW91bnRJbnB1dChkYXRhKTtcbi8vICAgaWYgKCFpc1ZhbGlkKSB7XG4vLyAgICAgY29uc3QgYWxsZXJyb3JzID0ge307XG5cbi8vICAgICBjb25zdCBlcnIgPSBPYmplY3QuYXNzaWduKGVycm9ycywgYWxsZXJyb3JzKTtcbi8vICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICBzbWFsbE1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyO1xuLy8gICAgICAgc21hbGxNZXNzYWdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZGRkZFwiO1xuLy8gICAgICAgc21hbGxNZXNzYWdlLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuLy8gICAgICAgaW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4vLyAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgc21hbGxNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4vLyAgICAgICBzbWFsbE1lc3NhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbi8vICAgICAgIHNtYWxsTWVzc2FnZS5zdHlsZS5jb2xvciA9IFwiXCI7XG4vLyAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBcIlwiO1xuLy8gICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICB0aGlzLmFtb3VudCA9IGRhdGEuaW5wdXQudmFsdWU7XG4vLyAgIHRoaXMuY3VycmVuY3kgPSBkYXRhLnNlbGVjdC52YWx1ZTtcbi8vICAgY29uc29sZS5sb2codGhpcy5hbW91bnQsIHRoaXMuY3VycmVuY3kpO1xuLy8gICAvLyB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuLy8gICAvLyBjb25zb2xlLmxvZyhcInZhbGlkYXRlZC4uLlwiKTtcbi8vIH1cbiIsImV4cG9ydCBjb25zdCBDb252ZXJ0Tm9kZXNFbGVtZW50cyA9ICgpID0+IHtcbiAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5mb3Jtcy5jb252ZXJ0ZXI7XG4gIGNvbnN0IHsgYW1vdW50LCBmcm9tQ3VycmVuY3ksIHRvQ3VycmVuY3ksIHN1Ym1pdCB9ID0gbm9kZXMuZWxlbWVudHM7XG5cbiAgcmV0dXJuIHtcbiAgICBhbW91bnQsXG4gICAgZnJvbUN1cnJlbmN5LFxuICAgIHRvQ3VycmVuY3ksXG4gICAgc3VibWl0XG4gIH07XG59O1xuIiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZXRTdGF0ZShuZXdTdGF0ZSkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIG5ld1N0YXRlKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDdXJyZW5jeS1Db252ZXJ0ZXIgLSBEZXNpZ24gQ29tcG9uZW50cyBpbiBDU1MsIEpTIGFuZCBIVE1MXG4gKiBAdmVyc2lvbiB2MS4yLjFcbiAqIEBsaWNlbnNlIEFwYWNoZS0yLjBcbiAqIEBjb3B5cmlnaHQgMjAxNSBHb29nbGUsIEluYy5cbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9ibDRjazRuZGJyMHduL0N1cnJlbmN5LUNvbnZlcnRlclxuICovXG5cbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbi8vIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VcIik7XG4vL1xuXG4vLyBjb25zdCBhbW91bnRNZXNzYWdlID0gXCJFbnRlciBBbW91bnRcIjtcblxuLy8gY29uc3QgZmlyc3RNZXNzYWdlID0gKCkgPT4ge1xuLy8gICBtZXNzYWdlLmlubmVySFRNTCA9IGFtb3VudE1lc3NhZ2U7XG4vLyAgIHNtYWxsTWVzc2FnZS5pbm5lckhUTUwgPSBcIlwiO1xuLy8gfTtcblxuLy8gY29uc3QgZm9ybVZhbGlkYXRlID0gKCkgPT4ge1xuLy8gICBhbW91bnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZpcnN0TWVzc2FnZSk7XG4vLyAgIGFtb3VudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgbGVuZ3RoKTtcblxuLy8gICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBldmVudCA9PiB7XG4vLyAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBcIllvdSdyZSBhIGNsaWNrIGF3YXlcIjtcbi8vICAgICBzbWFsbE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJEbyBpdC4gVGhhdCdzIFdoYXQgeW91IGFyZSBoZXJlIGZvci5cIjtcbi8vICAgfSk7XG4vLyAgIC8vZGlzcGxheSBjb252ZXJ0ZWQgVGV4dFxuLy8gICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbi8vICAgICBmb3JtLmlubmVySFRNTCA9XG4vLyAgICAgICAnPGgxPkdvb2Qgam9iITwvaDE+PHAgY2xhc3M9XCJzdWNjZXNzLW1lc3NhZ2VcIj5UaGUgYW1vdW50IGlzIDEyMzQzMi48L3A+Jztcbi8vICAgfSk7XG4vLyB9O1xuLy8gY29uc3QgdmFsaWRhdGVBbW91bnQgPSByZXF1aXJlKFwiLi92YWxpZGF0aW9uL3ZhbGlkYXRpb25cIik7XG4vLyBpbXBvcnQgdmFsaWRhdGVBbW91bnQgZnJvbSBcIi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLmpzXCI7XG5cbi8vIGNvbnN0IHNtYWxsTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic21hbGxNZXNzYWdlXCIpO1xuLy8gY29uc3QgYW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbW91bnRcIik7XG4vLyBjb25zdCBjdXJyZW5jeVR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbmN5XCIpO1xuLy8gY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5cbi8vIGNvbnN0IGRhdGEgPSB7XG4vLyAgIGFtb3VudDogYW1vdW50LnZhbHVlLFxuLy8gICBjdXJyZW5jeTogY3VycmVuY3lUeXBlLnZhbHVlXG4vLyB9O1xuXG4vLyAvLyBleHBvcnQgY29uc3Qgc3VibWl0Rm9ybSA9ICgpID0+IHtcbi8vICAgaWYgKGFtb3VudC5hZGRFdmVudExpc3RlbmVyKSB7XG4vLyAgICAgYW1vdW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvbkNoYW5nZVwiLCBldmVudCA9PiB7XG4vLyAgICAgICBjb25zdCB7IGVycm9ycywgaXNWYWxpZCB9ID0gdmFsaWRhdGVBbW91bnQoZGF0YSk7XG4vLyAgICAgICBpZiAoIWlzVmFsaWQpIHtcbi8vICAgICAgICAgc21hbGxNZXNzYWdlLmlubmVySFRNTCA9IGVycm9ycztcbi8vICAgICAgIH1cbi8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIH0pO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuLy8gICAgICAgZm9ybS5pbm5lckhUTUwgPVxuLy8gICAgICAgICAnPGgxPkdvb2Qgam9iITwvaDE+PHAgY2xhc3M9XCJzdWNjZXNzLW1lc3NhZ2VcIj5UaGUgYW1vdW50IGlzIDEyMzQzMi48L3A+Jztcbi8vICAgICB9KTtcbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZyhhbW91bnQpO1xuLy8gfTtcblxuLy8gc3VibWl0Rm9ybSgpO1xuLy8gaW1wb3J0IHsgZm9ybVZhbGlkYXRpb24gfSBmcm9tIFwiLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uanNcIjtcblxuLy8gY29uc3QgZGF0YSA9IHtcbi8vICAgYW1vdW50OiBpbnB1dC52YWx1ZSxcbi8vICAgY3VycmVuY3k6IHNlbGVjdGYudmFsdWVcbi8vIH07XG5cbi8vIGNvbnN0IG9uQ2hhbmdlZnVuYyA9ICgpID0+IHtcbi8vICAgLy8gY29uc3QgeyBlcnJvcnMsIGlzVmFsaWQgfSA9IHZhbGlkYXRlQW1vdW50KGRhdGEpO1xuLy8gICAvLyBpZiAoIWlzVmFsaWQpIHtcbi8vICAgLy8gICBzbWFsbE1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyb3JzO1xuLy8gICAvLyB9XG4vLyAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zdCB7IGVycm9ycywgaXNWYWxpZCB9ID0gZm9ybVZhbGlkYXRpb24oZGF0YSk7XG5cbi8vICAgICBpZiAoIWlzVmFsaWQpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JzOiBcIiwgZXJyb3JzKTtcbi8vICAgICB9XG5cbi8vICAgICBjb25zb2xlLmxvZyhcIk91dHB1dDogXCIsIGRhdGEpO1xuLy8gICB9KTtcbi8vICAgc2VsZWN0Zi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJTZWxlY3QgY2hhbmdlZCB0bzogXCIsIHNlbGVjdGYudmFsdWUpO1xuLy8gICB9KTtcbi8vIH07XG5cbmltcG9ydCBDb252ZXJ0Rm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnZlcnRGb3JtXCI7XG5cbmNvbnN0IGNvbnZlcnRGb3JtID0gbmV3IENvbnZlcnRGb3JtKCk7XG5cbmNvbnZlcnRGb3JtLm9uQ2hhbmdlKCk7XG5jb252ZXJ0Rm9ybS5vblN1Ym1pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==