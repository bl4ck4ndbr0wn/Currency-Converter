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
      this.elements.submit.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(_this3.state.data);
        _api2.default.getAmount("/convert?q=", _this3.state.data).then(function (res) {}).then(function (err, amount) {
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
    key: "listCurrencies",
    value: function listCurrencies(result) {
      var _this2 = this;

      var data = _extends({}, this.state.data);
      Object.entries(result.results).map(function (val) {
        /*
        "currencyName": "Albanian Lek",
        "currencySymbol": "Lek",
        "id": "ALL"
        */
        _this2.setState({
          data: _extends({}, val[1])
        });
        _this2.onChange();
        console.log(_this2.state.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Db252ZXJ0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Gb3JtRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvUmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJBcGkiLCJhcGlVUkkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsImVuZHBvaW50IiwiVVJJIiwiZmV0Y2giLCJ0aGVuIiwidmFsaWRhdGVSZXNwb25zZSIsInJlYWRSZXNwb25zZUFzSlNPTiIsImNhdGNoIiwibG9nRXJyb3IiLCJhcGkiLCJDb252ZXJ0Rm9ybSIsInN0YXRlIiwiZGF0YSIsImlzVmFsaWQiLCJlcnJvcnMiLCJlbGVtZW50cyIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uU3VibWl0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZ2V0IiwicmVuZGVyIiwibGlzdEN1cnJlbmNpZXMiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImdldEFtb3VudCIsImVyciIsImFtb3VudCIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJub2RlcyIsImRvY3VtZW50IiwiZm9ybXMiLCJjb252ZXJ0ZXIiLCJmcm9tQ3VycmVuY3kiLCJ0b0N1cnJlbmN5IiwiQ29udmVydE5vZGVzRWxlbWVudHMiLCJDdXJyZW5jeVNlbGVjdGlvbiIsIlJlbmRlciIsImN1cnJlbmNpZXMiLCJjb3VudHJpZXMiLCJvcHQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ0ZXh0IiwiY3VycmVuY3lOYW1lIiwiYWRkIiwicmVzdWx0IiwiZW50cmllcyIsInJlc3VsdHMiLCJ2YWwiLCJuZXdTdGF0ZSIsImFzc2lnbiIsImNvbnZlcnRGb3JtIiwiZ2V0QWxsQ3VycmVuY2llcyIsImdldEFsbENvdW50cmllcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRk1BLEc7QUFDSixpQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBYyw4Q0FBZDtBQUNEOzs7OzZCQUVRQyxLLEVBQU87QUFDZEMsY0FBUUMsR0FBUixDQUFZLG9DQUFaLEVBQWtERixLQUFsRDtBQUNEOzs7cUNBRWdCRyxRLEVBQVU7QUFDekIsVUFBSSxDQUFDQSxTQUFTQyxFQUFkLEVBQWtCO0FBQ2hCLGNBQU1DLE1BQU1GLFNBQVNHLFVBQWYs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b250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL21haW4uanNcIik7XG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwaVVSSSA9IFwiaHR0cHM6Ly9mcmVlLmN1cnJlbmN5Y29udmVydGVyYXBpLmNvbS9hcGkvdjVcIjtcbiAgfVxuXG4gIGxvZ0Vycm9yKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJMb29rcyBsaWtlIHRoZXJlIHdhcyBhIHByb2JsZW06IFxcblwiLCBlcnJvcik7XG4gIH1cblxuICB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHJlYWRSZXNwb25zZUFzSlNPTihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBnZXQoZW5kcG9pbnQpIHtcbiAgICBjb25zdCBVUkkgPSBgJHt0aGlzLmFwaVVSSX0ke2VuZHBvaW50fWA7XG4gICAgcmV0dXJuIGZldGNoKFVSSSlcbiAgICAgIC50aGVuKHRoaXMudmFsaWRhdGVSZXNwb25zZSlcbiAgICAgIC50aGVuKHRoaXMucmVhZFJlc3BvbnNlQXNKU09OKVxuICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xuICB9XG59XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBDb252ZXJ0Tm9kZXNFbGVtZW50cyB9IGZyb20gXCIuL0Zvcm1FbGVtZW50c1wiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL1JlbmRlclwiO1xuXG5jbGFzcyBDb252ZXJ0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfTtcbiAgICB0aGlzLmVsZW1lbnRzID0gQ29udmVydE5vZGVzRWxlbWVudHMoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgb25DaGFuZ2UoKSB7XG4gICAgY29uc3QgZGF0YSA9IHsgLi4udGhpcy5zdGF0ZS5kYXRhIH07XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmVsZW1lbnRzKS5tYXAoZWwgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgZGF0YVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsQ3VycmVuY2llcygpIHtcbiAgICBhcGkuZ2V0KFwiL2N1cnJlbmNpZXNcIikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZW5kZXIubGlzdEN1cnJlbmNpZXMocmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsQ291bnRyaWVzKCkge31cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB7IC4uLnRoaXMuc3RhdGUuZXJyb3JzIH07XG4gICAgdGhpcy5lbGVtZW50cy5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhKTtcbiAgICAgIGFwaVxuICAgICAgICAuZ2V0QW1vdW50KFwiL2NvbnZlcnQ/cT1cIiwgdGhpcy5zdGF0ZS5kYXRhKVxuICAgICAgICAudGhlbihyZXMgPT4ge30pXG4gICAgICAgIC50aGVuKChlcnIsIGFtb3VudCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGFtb3VudCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udmVydEZvcm07XG5cbi8vIG9uVmFsaWRhdGUoZGF0YSkge1xuLy8gICBjb25zdCB7IGlzVmFsaWQsIGVycm9ycyB9ID0gdmFsaWRhdGVBbW91bnRJbnB1dChkYXRhKTtcbi8vICAgaWYgKCFpc1ZhbGlkKSB7XG4vLyAgICAgY29uc3QgYWxsZXJyb3JzID0ge307XG5cbi8vICAgICBjb25zdCBlcnIgPSBPYmplY3QuYXNzaWduKGVycm9ycywgYWxsZXJyb3JzKTtcbi8vICAgICBpZiAoZXJyKSB7XG4vLyAgICAgICBzbWFsbE1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyO1xuLy8gICAgICAgc21hbGxNZXNzYWdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZGRkZFwiO1xuLy8gICAgICAgc21hbGxNZXNzYWdlLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuLy8gICAgICAgaW5wdXQuY2xhc3NOYW1lID0gXCJpbnZhbGlkXCI7XG4vLyAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgc21hbGxNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4vLyAgICAgICBzbWFsbE1lc3NhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbi8vICAgICAgIHNtYWxsTWVzc2FnZS5zdHlsZS5jb2xvciA9IFwiXCI7XG4vLyAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBcIlwiO1xuLy8gICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICB0aGlzLmFtb3VudCA9IGRhdGEuaW5wdXQudmFsdWU7XG4vLyAgIHRoaXMuY3VycmVuY3kgPSBkYXRhLnNlbGVjdC52YWx1ZTtcbi8vICAgY29uc29sZS5sb2codGhpcy5hbW91bnQsIHRoaXMuY3VycmVuY3kpO1xuLy8gICAvLyB0aGlzLmlzVmFsaWQgPSB0cnVlO1xuLy8gICAvLyBjb25zb2xlLmxvZyhcInZhbGlkYXRlZC4uLlwiKTtcbi8vIH1cbiIsImNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZm9ybXMuY29udmVydGVyO1xuY29uc3QgeyBhbW91bnQsIGZyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSwgc3VibWl0IH0gPSBub2Rlcy5lbGVtZW50cztcblxuZXhwb3J0IGNvbnN0IENvbnZlcnROb2Rlc0VsZW1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFtb3VudCxcbiAgICBmcm9tQ3VycmVuY3ksXG4gICAgdG9DdXJyZW5jeSxcbiAgICBzdWJtaXRcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDdXJyZW5jeVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmcm9tQ3VycmVuY3ksXG4gICAgdG9DdXJyZW5jeVxuICB9O1xufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgQ3VycmVuY3lTZWxlY3Rpb24gfSBmcm9tIFwiLi9Gb3JtRWxlbWVudHNcIjtcblxuY2xhc3MgUmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBjdXJyZW5jaWVzOiB7fSxcbiAgICAgIGNvdW50cmllczoge31cbiAgICB9O1xuXG4gICAgdGhpcy5lbGVtZW50cyA9IEN1cnJlbmN5U2VsZWN0aW9uKCk7XG4gICAgdGhpcy5saXN0Q3VycmVuY2llcyA9IHRoaXMubGlzdEN1cnJlbmNpZXMuYmluZCh0aGlzKTtcbiAgfVxuICBvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZWxlbWVudHMpLm1hcChlbCA9PiB7XG4gICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0LnZhbHVlID0gZGF0YS5pZDtcbiAgICAgIG9wdC50ZXh0ID0gZGF0YS5jdXJyZW5jeU5hbWU7XG5cbiAgICAgIGVsLmFkZChvcHQsIG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgbGlzdEN1cnJlbmNpZXMocmVzdWx0KSB7XG4gICAgY29uc3QgZGF0YSA9IHsgLi4udGhpcy5zdGF0ZS5kYXRhIH07XG4gICAgT2JqZWN0LmVudHJpZXMocmVzdWx0LnJlc3VsdHMpLm1hcCh2YWwgPT4ge1xuICAgICAgLypcbiAgICAgIFwiY3VycmVuY3lOYW1lXCI6IFwiQWxiYW5pYW4gTGVrXCIsXG4gICAgICBcImN1cnJlbmN5U3ltYm9sXCI6IFwiTGVrXCIsXG4gICAgICBcImlkXCI6IFwiQUxMXCJcbiAgICAgICovXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLnZhbFsxXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGF0YSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyID0gbmV3IFJlbmRlcigpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgbmV3U3RhdGUpO1xuICB9XG59XG4iLCIvKipcbiAqIEN1cnJlbmN5LUNvbnZlcnRlciAtIERlc2lnbiBDb21wb25lbnRzIGluIENTUywgSlMgYW5kIEhUTUxcbiAqIEB2ZXJzaW9uIHYxLjIuMVxuICogQGxpY2Vuc2UgQXBhY2hlLTIuMFxuICogQGNvcHlyaWdodCAyMDE1IEdvb2dsZSwgSW5jLlxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2JsNGNrNG5kYnIwd24vQ3VycmVuY3ktQ29udmVydGVyXG4gKi9cblxuLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuLy8gY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKTtcbi8vXG5cbi8vIGNvbnN0IGFtb3VudE1lc3NhZ2UgPSBcIkVudGVyIEFtb3VudFwiO1xuXG4vLyBjb25zdCBmaXJzdE1lc3NhZ2UgPSAoKSA9PiB7XG4vLyAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gYW1vdW50TWVzc2FnZTtcbi8vICAgc21hbGxNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XG4vLyB9O1xuXG4vLyBjb25zdCBmb3JtVmFsaWRhdGUgPSAoKSA9PiB7XG4vLyAgIGFtb3VudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZmlyc3RNZXNzYWdlKTtcbi8vICAgYW1vdW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBsZW5ndGgpO1xuXG4vLyAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGV2ZW50ID0+IHtcbi8vICAgICBtZXNzYWdlLmlubmVySFRNTCA9IFwiWW91J3JlIGEgY2xpY2sgYXdheVwiO1xuLy8gICAgIHNtYWxsTWVzc2FnZS5pbm5lckhUTUwgPSBcIkRvIGl0LiBUaGF0J3MgV2hhdCB5b3UgYXJlIGhlcmUgZm9yLlwiO1xuLy8gICB9KTtcbi8vICAgLy9kaXNwbGF5IGNvbnZlcnRlZCBUZXh0XG4vLyAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuLy8gICAgIGZvcm0uaW5uZXJIVE1MID1cbi8vICAgICAgICc8aDE+R29vZCBqb2IhPC9oMT48cCBjbGFzcz1cInN1Y2Nlc3MtbWVzc2FnZVwiPlRoZSBhbW91bnQgaXMgMTIzNDMyLjwvcD4nO1xuLy8gICB9KTtcbi8vIH07XG4vLyBjb25zdCB2YWxpZGF0ZUFtb3VudCA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRpb24vdmFsaWRhdGlvblwiKTtcbi8vIGltcG9ydCB2YWxpZGF0ZUFtb3VudCBmcm9tIFwiLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24uanNcIjtcblxuLy8gY29uc3Qgc21hbGxNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbWFsbE1lc3NhZ2VcIik7XG4vLyBjb25zdCBhbW91bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtb3VudFwiKTtcbi8vIGNvbnN0IGN1cnJlbmN5VHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVuY3lcIik7XG4vLyBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcblxuLy8gY29uc3QgZGF0YSA9IHtcbi8vICAgYW1vdW50OiBhbW91bnQudmFsdWUsXG4vLyAgIGN1cnJlbmN5OiBjdXJyZW5jeVR5cGUudmFsdWVcbi8vIH07XG5cbi8vIC8vIGV4cG9ydCBjb25zdCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuLy8gICBpZiAoYW1vdW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbi8vICAgICBhbW91bnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9uQ2hhbmdlXCIsIGV2ZW50ID0+IHtcbi8vICAgICAgIGNvbnN0IHsgZXJyb3JzLCBpc1ZhbGlkIH0gPSB2YWxpZGF0ZUFtb3VudChkYXRhKTtcbi8vICAgICAgIGlmICghaXNWYWxpZCkge1xuLy8gICAgICAgICBzbWFsbE1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyb3JzO1xuLy8gICAgICAgfVxuLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgfSk7XG4vLyAgIH0gZWxzZSB7XG4vLyAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4vLyAgICAgICBmb3JtLmlubmVySFRNTCA9XG4vLyAgICAgICAgICc8aDE+R29vZCBqb2IhPC9oMT48cCBjbGFzcz1cInN1Y2Nlc3MtbWVzc2FnZVwiPlRoZSBhbW91bnQgaXMgMTIzNDMyLjwvcD4nO1xuLy8gICAgIH0pO1xuLy8gICB9XG4vLyAgIGNvbnNvbGUubG9nKGFtb3VudCk7XG4vLyB9O1xuXG4vLyBzdWJtaXRGb3JtKCk7XG4vLyBpbXBvcnQgeyBmb3JtVmFsaWRhdGlvbiB9IGZyb20gXCIuL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5qc1wiO1xuXG4vLyBjb25zdCBkYXRhID0ge1xuLy8gICBhbW91bnQ6IGlucHV0LnZhbHVlLFxuLy8gICBjdXJyZW5jeTogc2VsZWN0Zi52YWx1ZVxuLy8gfTtcblxuLy8gY29uc3Qgb25DaGFuZ2VmdW5jID0gKCkgPT4ge1xuLy8gICAvLyBjb25zdCB7IGVycm9ycywgaXNWYWxpZCB9ID0gdmFsaWRhdGVBbW91bnQoZGF0YSk7XG4vLyAgIC8vIGlmICghaXNWYWxpZCkge1xuLy8gICAvLyAgIHNtYWxsTWVzc2FnZS5pbm5lckhUTUwgPSBlcnJvcnM7XG4vLyAgIC8vIH1cbi8vICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIGNvbnN0IHsgZXJyb3JzLCBpc1ZhbGlkIH0gPSBmb3JtVmFsaWRhdGlvbihkYXRhKTtcblxuLy8gICAgIGlmICghaXNWYWxpZCkge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJlcnJvcnM6IFwiLCBlcnJvcnMpO1xuLy8gICAgIH1cblxuLy8gICAgIGNvbnNvbGUubG9nKFwiT3V0cHV0OiBcIiwgZGF0YSk7XG4vLyAgIH0pO1xuLy8gICBzZWxlY3RmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdCBjaGFuZ2VkIHRvOiBcIiwgc2VsZWN0Zi52YWx1ZSk7XG4vLyAgIH0pO1xuLy8gfTtcblxuaW1wb3J0IENvbnZlcnRGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udmVydEZvcm1cIjtcblxuY29uc3QgY29udmVydEZvcm0gPSBuZXcgQ29udmVydEZvcm0oKTtcblxuY29udmVydEZvcm0uZ2V0QWxsQ3VycmVuY2llcygpO1xuY29udmVydEZvcm0uZ2V0QWxsQ291bnRyaWVzKCk7XG5cbmNvbnZlcnRGb3JtLm9uQ2hhbmdlKCk7XG5jb252ZXJ0Rm9ybS5vblN1Ym1pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==