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

/***/ "./src/js/api/index.js":
/*!*****************************!*\
  !*** ./src/js/api/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
  function Api() {
    _classCallCheck(this, Api);

    this.apiURI = "https://free.currencyconverterapi.com/api/v5";
  }

  _createClass(Api, [{
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
  }, {
    key: "get",
    value: function get(endpoint) {
      var URI = "" + this.apiURI + endpoint;
      return fetch(URI).then(this.validateResponse).then(this.readResponseAsJSON).catch(this.logError);
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

var _api = __webpack_require__(/*! ../api */ "./src/js/api/index.js");

var _api2 = _interopRequireDefault(_api);

var _Render = __webpack_require__(/*! ./Render */ "./src/js/components/Render.js");

var _Render2 = _interopRequireDefault(_Render);

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
    key: "getAllCurrencies",
    value: function getAllCurrencies() {
      _api2.default.get("/currencies").then(function (response) {
        _Render2.default.listCurrencies(response);
      });
    }
  }, {
    key: "getAllCountries",
    value: function getAllCountries() {}
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this3 = this;

      var errors = _extends({}, this.state.errors);
      var submit = this.elements.submit;


      submit.addEventListener("click", function (e) {
        e.preventDefault();
        var fr = _this3.state.data.fromCurrency;
        var to = _this3.state.data.toCurrency;
        var amount = _this3.state.data.amount;

        // https://free.currencyconverterapi.com/api/v5/convert?q=HUF_BND&compact=ultra

        var URI = "/convert?q=" + fr + "_" + to + "&compact=ultra";

        _api2.default.get(URI).then(function (response) {
          // render.listCurrencies(response);
          _Render2.default.compute(response, amount);
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
var nodes = document.forms.converter;
var _nodes$elements = nodes.elements,
    amount = _nodes$elements.amount,
    fromCurrency = _nodes$elements.fromCurrency,
    toCurrency = _nodes$elements.toCurrency,
    submit = _nodes$elements.submit;
var ConvertNodesElements = exports.ConvertNodesElements = function ConvertNodesElements() {
  return {
    amount: amount,
    fromCurrency: fromCurrency,
    toCurrency: toCurrency,
    submit: submit
  };
};

var CurrencySelection = exports.CurrencySelection = function CurrencySelection() {
  return {
    fromCurrency: fromCurrency,
    toCurrency: toCurrency
  };
};

/***/ }),

/***/ "./src/js/components/Render.js":
/*!*************************************!*\
  !*** ./src/js/components/Render.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(/*! ./app */ "./src/js/components/app.js");

var _FormElements = __webpack_require__(/*! ./FormElements */ "./src/js/components/FormElements.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Render = function (_Component) {
  _inherits(Render, _Component);

  function Render() {
    _classCallCheck(this, Render);

    var _this = _possibleConstructorReturn(this, (Render.__proto__ || Object.getPrototypeOf(Render)).call(this));

    _this.state = {
      data: {},
      currencies: {},
      countries: {}
    };

    _this.elements = (0, _FormElements.CurrencySelection)();
    _this.listCurrencies = _this.listCurrencies.bind(_this);
    return _this;
  }

  _createClass(Render, [{
    key: "onChange",
    value: function onChange() {
      var data = _extends({}, this.state.data);
      Object.values(this.elements).map(function (el) {
        var opt = document.createElement("option");
        opt.value = data.id;
        opt.text = data.currencyName;

        el.add(opt, null);
      });
    }
  }, {
    key: "compute",
    value: function compute(resp, data) {
      console.log(Object.values(resp)[0], data);
    }
  }, {
    key: "listCurrencies",
    value: function listCurrencies(result) {
      var _this2 = this;

      var data = _extends({}, this.state.data);
      Object.entries(result.results).map(function (val) {
        /*
        data = {
          "currencyName": "Albanian Lek",
          "currencySymbol": "Lek",
          "id": "ALL"
        }
         */
        _this2.setState({
          data: _extends({}, val[1])
        });
        _this2.onChange();
      });
    }
  }]);

  return Render;
}(_app.Component);

var render = new Render();

exports.default = render;

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

convertForm.getAllCurrencies();
convertForm.getAllCountries();

convertForm.onChange();
convertForm.onSubmit();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Db252ZXJ0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Gb3JtRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvUmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJBcGkiLCJhcGlVUkkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsImVuZHBvaW50IiwiVVJJIiwiZmV0Y2giLCJ0aGVuIiwidmFsaWRhdGVSZXNwb25zZSIsInJlYWRSZXNwb25zZUFzSlNPTiIsImNhdGNoIiwibG9nRXJyb3IiLCJhcGkiLCJDb252ZXJ0Rm9ybSIsInN0YXRlIiwiZGF0YSIsImlzVmFsaWQiLCJlcnJvcnMiLCJlbGVtZW50cyIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uU3VibWl0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZ2V0IiwicmVuZGVyIiwibGlzdEN1cnJlbmNpZXMiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZyIiwiZnJvbUN1cnJlbmN5IiwidG8iLCJ0b0N1cnJlbmN5IiwiYW1vdW50IiwiY29tcHV0ZSIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJub2RlcyIsImRvY3VtZW50IiwiZm9ybXMiLCJjb252ZXJ0ZXIiLCJDb252ZXJ0Tm9kZXNFbGVtZW50cyIsIkN1cnJlbmN5U2VsZWN0aW9uIiwiUmVuZGVyIiwiY3VycmVuY2llcyIsImNvdW50cmllcyIsIm9wdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInRleHQiLCJjdXJyZW5jeU5hbWUiLCJhZGQiLCJyZXNwIiwicmVzdWx0IiwiZW50cmllcyIsInJlc3VsdHMiLCJ2YWwiLCJuZXdTdGF0ZSIsImFzc2lnbiIsImNvbnZlcnRGb3JtIiwiZ2V0QWxsQ3VycmVuY2llcyIsImdldEFsbENvdW50cmllcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRk1BLEc7QUFDSixpQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBYyw4Q0FBZDtBQUNEOzs7OzZCQUVRQyxLLEVBQU87QUFDZEMsY0FBUUMsR0FBUixDQUFZLG9DQUFaLEVBQWtERixLQUFsRDtBQUNEOzs7cUNBRWdCRyxRLEVBQVU7QUFDekIsVUFBSSxDQUFDQSxTQUFTQyxFQUFkLEVBQWtCO0FBQ2hCLGNBQU1DLE1BQU1GLFNB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BdUQsWUFBWUMsZ0JBQVo7QUFDQUQsWUFBWUUsZUFBWjs7QUFFQUYsWUFBWWpELFFBQVo7QUFDQWlELFlBQVkvQyxRQUFaLEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvbWFpbi5qc1wiKTtcbiIsImNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXBpVVJJID0gXCJodHRwczovL2ZyZWUuY3VycmVuY3ljb252ZXJ0ZXJhcGkuY29tL2FwaS92NVwiO1xuICB9XG5cbiAgbG9nRXJyb3IoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvb2tzIGxpa2UgdGhlcmUgd2FzIGEgcHJvYmxlbTogXFxuXCIsIGVycm9yKTtcbiAgfVxuXG4gIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcmVhZFJlc3BvbnNlQXNKU09OKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIGdldChlbmRwb2ludCkge1xuICAgIGNvbnN0IFVSSSA9IGAke3RoaXMuYXBpVVJJfSR7ZW5kcG9pbnR9YDtcbiAgICByZXR1cm4gZmV0Y2goVVJJKVxuICAgICAgLnRoZW4odGhpcy52YWxpZGF0ZVJlc3BvbnNlKVxuICAgICAgLnRoZW4odGhpcy5yZWFkUmVzcG9uc2VBc0pTT04pXG4gICAgICAuY2F0Y2godGhpcy5sb2dFcnJvcik7XG4gIH1cbn1cblxuY29uc3QgYXBpID0gbmV3IEFwaSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IENvbnZlcnROb2Rlc0VsZW1lbnRzIH0gZnJvbSBcIi4vRm9ybUVsZW1lbnRzXCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vUmVuZGVyXCI7XG5cbmNsYXNzIENvbnZlcnRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGVycm9yczoge31cbiAgICB9O1xuICAgIHRoaXMuZWxlbWVudHMgPSBDb252ZXJ0Tm9kZXNFbGVtZW50cygpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuICBvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZWxlbWVudHMpLm1hcChlbCA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBkYXRhW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGxDdXJyZW5jaWVzKCkge1xuICAgIGFwaS5nZXQoXCIvY3VycmVuY2llc1wiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJlbmRlci5saXN0Q3VycmVuY2llcyhyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGxDb3VudHJpZXMoKSB7fVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHsgLi4udGhpcy5zdGF0ZS5lcnJvcnMgfTtcbiAgICBjb25zdCB7IHN1Ym1pdCB9ID0gdGhpcy5lbGVtZW50cztcblxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgZnIgPSB0aGlzLnN0YXRlLmRhdGEuZnJvbUN1cnJlbmN5O1xuICAgICAgbGV0IHRvID0gdGhpcy5zdGF0ZS5kYXRhLnRvQ3VycmVuY3k7XG4gICAgICBsZXQgYW1vdW50ID0gdGhpcy5zdGF0ZS5kYXRhLmFtb3VudDtcblxuICAgICAgLy8gaHR0cHM6Ly9mcmVlLmN1cnJlbmN5Y29udmVydGVyYXBpLmNvbS9hcGkvdjUvY29udmVydD9xPUhVRl9CTkQmY29tcGFjdD11bHRyYVxuXG4gICAgICBjb25zdCBVUkkgPSBgL2NvbnZlcnQ/cT0ke2ZyfV8ke3RvfSZjb21wYWN0PXVsdHJhYDtcblxuICAgICAgYXBpLmdldChVUkkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyByZW5kZXIubGlzdEN1cnJlbmNpZXMocmVzcG9uc2UpO1xuICAgICAgICByZW5kZXIuY29tcHV0ZShyZXNwb25zZSwgYW1vdW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udmVydEZvcm07XG5cbi8vIG9uVmFsaWRhdGUoZGF0YSkge1xuLy8gICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gdmFsaWRhdGVBbW91bnRJbnB1dChkYXRhKTtcbi8vICAgaWYgKCFpc1ZhbGlkKSB7XG4vLyAgICAgY29uc3QgYWxsZXJyb3JzID0ge307XG5cbi8vICAgICBjb25zdCBlcnIgPSBPYmplY3QuYXNzaWduKGVycm9ycywgYWxsZXJyb3JzKTtcbi8vICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICBzbWFsbE1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyO1xuLy8gICAgICAgc21hbGxNZXNzYWdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZGRkZFwiO1xuLy8gICAgICAgc21hbGxNZXNzYWdlLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuLy8gICAgICAgaW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4vLyAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgc21hbGxNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4vLyAgICAgICBzbWFsbE1lc3NhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbi8vICAgICAgIHNtYWxsTWVzc2FnZS5zdHlsZS5jb2xvciA9IFwiXCI7XG4vLyAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBcIlwiO1xuLy8gICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICB0aGlzLmFtb3VudCA9IGRhdGEuaW5wdXQudmFsdWU7XG4vLyAgIHRoaXMuY3VycmVuY3kgPSBkYXRhLnNlbGVjdC52YWx1ZTtcbi8vICAgY29uc29sZS5sb2codGhpcy5hbW91bnQsIHRoaXMuY3VycmVuY3kpO1xuLy8gICAvLyB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuLy8gICAvLyBjb25zb2xlLmxvZyhcInZhbGlkYXRlZC4uLlwiKTtcbi8vIH1cbiIsImNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZm9ybXMuY29udmVydGVyO1xuY29uc3QgeyBhbW91bnQsIGZyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSwgc3VibWl0IH0gPSBub2Rlcy5lbGVtZW50cztcblxuZXhwb3J0IGNvbnN0IENvbnZlcnROb2Rlc0VsZW1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFtb3VudCxcbiAgICBmcm9tQ3VycmVuY3ksXG4gICAgdG9DdXJyZW5jeSxcbiAgICBzdWJtaXRcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDdXJyZW5jeVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmcm9tQ3VycmVuY3ksXG4gICAgdG9DdXJyZW5jeVxuICB9O1xufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgQ3VycmVuY3lTZWxlY3Rpb24gfSBmcm9tIFwiLi9Gb3JtRWxlbWVudHNcIjtcblxuY2xhc3MgUmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBjdXJyZW5jaWVzOiB7fSxcbiAgICAgIGNvdW50cmllczoge31cbiAgICB9O1xuXG4gICAgdGhpcy5lbGVtZW50cyA9IEN1cnJlbmN5U2VsZWN0aW9uKCk7XG4gICAgdGhpcy5saXN0Q3VycmVuY2llcyA9IHRoaXMubGlzdEN1cnJlbmNpZXMuYmluZCh0aGlzKTtcbiAgfVxuICBvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZWxlbWVudHMpLm1hcChlbCA9PiB7XG4gICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0LnZhbHVlID0gZGF0YS5pZDtcbiAgICAgIG9wdC50ZXh0ID0gZGF0YS5jdXJyZW5jeU5hbWU7XG5cbiAgICAgIGVsLmFkZChvcHQsIG51bGwpO1xuICAgIH0pO1xuICB9XG4gIGNvbXB1dGUocmVzcCwgZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMocmVzcClbMF0sIGRhdGEpO1xuICB9XG5cbiAgbGlzdEN1cnJlbmNpZXMocmVzdWx0KSB7XG4gICAgY29uc3QgZGF0YSA9IHsgLi4udGhpcy5zdGF0ZS5kYXRhIH07XG4gICAgT2JqZWN0LmVudHJpZXMocmVzdWx0LnJlc3VsdHMpLm1hcCh2YWwgPT4ge1xuICAgICAgLypcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIFwiY3VycmVuY3lOYW1lXCI6IFwiQWxiYW5pYW4gTGVrXCIsXG4gICAgICAgIFwiY3VycmVuY3lTeW1ib2xcIjogXCJMZWtcIixcbiAgICAgICAgXCJpZFwiOiBcIkFMTFwiXG4gICAgICB9XG5cbiAgICAgICovXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLnZhbFsxXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCByZW5kZXIgPSBuZXcgUmVuZGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U3RhdGUobmV3U3RhdGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBuZXdTdGF0ZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3VycmVuY3ktQ29udmVydGVyIC0gRGVzaWduIENvbXBvbmVudHMgaW4gQ1NTLCBKUyBhbmQgSFRNTFxuICogQHZlcnNpb24gdjEuMi4xXG4gKiBAbGljZW5zZSBBcGFjaGUtMi4wXG4gKiBAY29weXJpZ2h0IDIwMTUgR29vZ2xlLCBJbmMuXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vYmw0Y2s0bmRicjB3bi9DdXJyZW5jeS1Db252ZXJ0ZXJcbiAqL1xuXG4vLyBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4vLyBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpO1xuLy9cblxuLy8gY29uc3QgYW1vdW50TWVzc2FnZSA9IFwiRW50ZXIgQW1vdW50XCI7XG5cbi8vIGNvbnN0IGZpcnN0TWVzc2FnZSA9ICgpID0+IHtcbi8vICAgbWVzc2FnZS5pbm5lckhUTUwgPSBhbW91bnRNZXNzYWdlO1xuLy8gICBzbWFsbE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJcIjtcbi8vIH07XG5cbi8vIGNvbnN0IGZvcm1WYWxpZGF0ZSA9ICgpID0+IHtcbi8vICAgYW1vdW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmaXJzdE1lc3NhZ2UpO1xuLy8gICBhbW91bnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGxlbmd0aCk7XG5cbi8vICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZXZlbnQgPT4ge1xuLy8gICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJZb3UncmUgYSBjbGljayBhd2F5XCI7XG4vLyAgICAgc21hbGxNZXNzYWdlLmlubmVySFRNTCA9IFwiRG8gaXQuIFRoYXQncyBXaGF0IHlvdSBhcmUgaGVyZSBmb3IuXCI7XG4vLyAgIH0pO1xuLy8gICAvL2Rpc3BsYXkgY29udmVydGVkIFRleHRcbi8vICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4vLyAgICAgZm9ybS5pbm5lckhUTUwgPVxuLy8gICAgICAgJzxoMT5Hb29kIGpvYiE8L2gxPjxwIGNsYXNzPVwic3VjY2Vzcy1tZXNzYWdlXCI+VGhlIGFtb3VudCBpcyAxMjM0MzIuPC9wPic7XG4vLyAgIH0pO1xuLy8gfTtcbi8vIGNvbnN0IHZhbGlkYXRlQW1vdW50ID0gcmVxdWlyZShcIi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uXCIpO1xuLy8gaW1wb3J0IHZhbGlkYXRlQW1vdW50IGZyb20gXCIuL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5qc1wiO1xuXG4vLyBjb25zdCBzbWFsbE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNtYWxsTWVzc2FnZVwiKTtcbi8vIGNvbnN0IGFtb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW1vdW50XCIpO1xuLy8gY29uc3QgY3VycmVuY3lUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW5jeVwiKTtcbi8vIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuXG4vLyBjb25zdCBkYXRhID0ge1xuLy8gICBhbW91bnQ6IGFtb3VudC52YWx1ZSxcbi8vICAgY3VycmVuY3k6IGN1cnJlbmN5VHlwZS52YWx1ZVxuLy8gfTtcblxuLy8gLy8gZXhwb3J0IGNvbnN0IHN1Ym1pdEZvcm0gPSAoKSA9PiB7XG4vLyAgIGlmIChhbW91bnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuLy8gICAgIGFtb3VudC5hZGRFdmVudExpc3RlbmVyKFwib25DaGFuZ2VcIiwgZXZlbnQgPT4ge1xuLy8gICAgICAgY29uc3QgeyBlcnJvcnMsIGlzVmFsaWQgfSA9IHZhbGlkYXRlQW1vdW50KGRhdGEpO1xuLy8gICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4vLyAgICAgICAgIHNtYWxsTWVzc2FnZS5pbm5lckhUTUwgPSBlcnJvcnM7XG4vLyAgICAgICB9XG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICB9KTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbi8vICAgICAgIGZvcm0uaW5uZXJIVE1MID1cbi8vICAgICAgICAgJzxoMT5Hb29kIGpvYiE8L2gxPjxwIGNsYXNzPVwic3VjY2Vzcy1tZXNzYWdlXCI+VGhlIGFtb3VudCBpcyAxMjM0MzIuPC9wPic7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vICAgY29uc29sZS5sb2coYW1vdW50KTtcbi8vIH07XG5cbi8vIHN1Ym1pdEZvcm0oKTtcbi8vIGltcG9ydCB7IGZvcm1WYWxpZGF0aW9uIH0gZnJvbSBcIi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLmpzXCI7XG5cbi8vIGNvbnN0IGRhdGEgPSB7XG4vLyAgIGFtb3VudDogaW5wdXQudmFsdWUsXG4vLyAgIGN1cnJlbmN5OiBzZWxlY3RmLnZhbHVlXG4vLyB9O1xuXG4vLyBjb25zdCBvbkNoYW5nZWZ1bmMgPSAoKSA9PiB7XG4vLyAgIC8vIGNvbnN0IHsgZXJyb3JzLCBpc1ZhbGlkIH0gPSB2YWxpZGF0ZUFtb3VudChkYXRhKTtcbi8vICAgLy8gaWYgKCFpc1ZhbGlkKSB7XG4vLyAgIC8vICAgc21hbGxNZXNzYWdlLmlubmVySFRNTCA9IGVycm9ycztcbi8vICAgLy8gfVxuLy8gICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc3QgeyBlcnJvcnMsIGlzVmFsaWQgfSA9IGZvcm1WYWxpZGF0aW9uKGRhdGEpO1xuXG4vLyAgICAgaWYgKCFpc1ZhbGlkKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcImVycm9yczogXCIsIGVycm9ycyk7XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc29sZS5sb2coXCJPdXRwdXQ6IFwiLCBkYXRhKTtcbi8vICAgfSk7XG4vLyAgIHNlbGVjdGYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0IGNoYW5nZWQgdG86IFwiLCBzZWxlY3RmLnZhbHVlKTtcbi8vICAgfSk7XG4vLyB9O1xuXG5pbXBvcnQgQ29udmVydEZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9Db252ZXJ0Rm9ybVwiO1xuXG5jb25zdCBjb252ZXJ0Rm9ybSA9IG5ldyBDb252ZXJ0Rm9ybSgpO1xuXG5jb252ZXJ0Rm9ybS5nZXRBbGxDdXJyZW5jaWVzKCk7XG5jb252ZXJ0Rm9ybS5nZXRBbGxDb3VudHJpZXMoKTtcblxuY29udmVydEZvcm0ub25DaGFuZ2UoKTtcbmNvbnZlcnRGb3JtLm9uU3VibWl0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9