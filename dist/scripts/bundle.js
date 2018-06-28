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

/***/ "./src/js/components/Elements.js":
/*!***************************************!*\
  !*** ./src/js/components/Elements.js ***!
  \***************************************/
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
var form_elements = exports.form_elements = function form_elements() {
  return {
    amount: amount,
    fromCurrency: fromCurrency,
    toCurrency: toCurrency,
    submit: submit
  };
};
var select_elements = exports.select_elements = function select_elements() {
  return {
    fromCurrency: fromCurrency,
    toCurrency: toCurrency
  };
};

var table_elements = exports.table_elements = function table_elements() {
  var countries = document.getElementById("countries");
  var currencies = document.getElementById("currencies");
  return {
    countries: countries,
    currencies: currencies
  };
};

/***/ }),

/***/ "./src/js/components/Form.js":
/*!***********************************!*\
  !*** ./src/js/components/Form.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(/*! ./app */ "./src/js/components/app.js");

var _Elements = __webpack_require__(/*! ./Elements */ "./src/js/components/Elements.js");

var _api = __webpack_require__(/*! ../api */ "./src/js/api/index.js");

var _api2 = _interopRequireDefault(_api);

var _Render = __webpack_require__(/*! ./Render */ "./src/js/components/Render.js");

var _Render2 = _interopRequireDefault(_Render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Forms = function (_Component) {
  _inherits(Forms, _Component);

  function Forms() {
    _classCallCheck(this, Forms);

    var _this = _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).call(this));

    _this.state = {
      data: {},
      isValid: false,
      errors: {}
    };
    _this.elements = (0, _Elements.form_elements)();
    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    // this.getAllCountries = this.getAllCountries.bind(this);
    return _this;
  }

  _createClass(Forms, [{
    key: "onChange",
    value: function onChange() {
      var _this2 = this;

      var data = _extends({}, this.state.data);
      Object.values(this.elements).map(function (el) {
        el.addEventListener("change", function (e) {
          data[e.target.name] = e.target.value;
          _this2.setState({ data: data });
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

    // getAllCountries() {
    //   api.get("/countries").then(response => {
    //     // render.listCountries(response);
    //   });
    // }

  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this3 = this;

      var errors = _extends({}, this.state.errors);
      var submit = this.elements.submit;


      submit.addEventListener("click", function (e) {
        e.preventDefault();

        var _state$data = _extends({}, _this3.state.data),
            fromCurrency = _state$data.fromCurrency,
            toCurrency = _state$data.toCurrency,
            amount = _state$data.amount;
        // https://free.currencyconverterapi.com/api/v5/convert?q=HUF_BND&compact=ultra

        var URI = "/convert?q=" + fromCurrency + "_" + toCurrency + "&compact=ultra";

        _api2.default.get(URI).then(function (response) {
          _Render2.default.compute(response, amount);
        });
      });
    }
  }]);

  return Forms;
}(_app.Component);

exports.default = Forms;

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

var _Elements = __webpack_require__(/*! ./Elements */ "./src/js/components/Elements.js");

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

    _this.elements = (0, _Elements.select_elements)();
    _this.table = (0, _Elements.table_elements)();
    _this.onChange = _this.onChange.bind(_this);
    // this.createTable = this.createTable.bind(this);
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
      var nodes = document.forms.converter;
      var convertion = document.getElementById("conversion");
      var results = nodes.elements.results;

      var currency = Object.values(resp)[0];
      // Compute
      var culculate = currency * data;
      //Display Results
      results.value = culculate;
      convertion.innerText = "Convertion Rate was " + currency;
    }
    /*
      data = {
      "currencyName": "Albanian Lek",
      "currencySymbol": "Lek",
      "id": "ALL"
      }
      */

  }, {
    key: "listCurrencies",
    value: function listCurrencies(result) {
      var _this2 = this;

      var data = _extends({}, this.state.data);
      console.log(result);
      Object.entries(result.results).map(function (val) {
        _this2.setState({
          data: _extends({}, val[1])
        });
        _this2.onChange();
      });
    }
    //   createTable() {
    //     const countries = { ...this.state.countries };
    //     for (const [key, value] of Object.entries(countries)) {
    //       console.log(`${key} ${value}`);
    //       const table = this.table;
    //     }
    //     console.log(countries);
    //   }
    //   listCountries(result) {
    //     const countries = { ...this.state.countries };
    //     console.log(result.results);
    //     Object.entries(result.results).map(val => {
    //       this.setState({
    //         countries: {
    //           ...val[1]
    //         }
    //       });
    //       this.createTable();
    //       console.log(this.state.countries);
    //     });
    //   }

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


var _Form = __webpack_require__(/*! ./components/Form */ "./src/js/components/Form.js");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  Initializing the classes
var forms = new _Form2.default();

//Forms functions
/**
 * Currency-Converter - Design Components in CSS, JS and HTML
 * @version v1.2.1
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/bl4ck4ndbr0wn/Currency-Converter
 */

forms.getAllCurrencies();

forms.onChange();
forms.onSubmit();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsiQXBpIiwiYXBpVVJJIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJlbmRwb2ludCIsIlVSSSIsImZldGNoIiwidGhlbiIsInZhbGlkYXRlUmVzcG9uc2UiLCJyZWFkUmVzcG9uc2VBc0pTT04iLCJjYXRjaCIsImxvZ0Vycm9yIiwiYXBpIiwibm9kZXMiLCJkb2N1bWVudCIsImZvcm1zIiwiY29udmVydGVyIiwiZWxlbWVudHMiLCJhbW91bnQiLCJmcm9tQ3VycmVuY3kiLCJ0b0N1cnJlbmN5Iiwic3VibWl0IiwiZm9ybV9lbGVtZW50cyIsInNlbGVjdF9lbGVtZW50cyIsInRhYmxlX2VsZW1lbnRzIiwiY291bnRyaWVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW5jaWVzIiwiRm9ybXMiLCJzdGF0ZSIsImRhdGEiLCJpc1ZhbGlkIiwiZXJyb3JzIiwib25DaGFuZ2UiLCJiaW5kIiwib25TdWJtaXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJnZXQiLCJyZW5kZXIiLCJsaXN0Q3VycmVuY2llcyIsInByZXZlbnREZWZhdWx0IiwiY29tcHV0ZSIsIkNvbXBvbmVudCIsIlJlbmRlciIsInRhYmxlIiwib3B0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwidGV4dCIsImN1cnJlbmN5TmFtZSIsImFkZCIsInJlc3AiLCJjb252ZXJ0aW9uIiwicmVzdWx0cyIsImN1cnJlbmN5IiwiY3VsY3VsYXRlIiwiaW5uZXJUZXh0IiwicmVzdWx0IiwiZW50cmllcyIsInZhbCIsIm5ld1N0YXRlIiwiYXNzaWduIiwiZ2V0QWxsQ3VycmVuY2llcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRk1BLEc7QUFDSixpQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBYyw4Q0FBZDtBQUNEOzs7OzZCQUVRQyxLLEVBQU87QUFDZEMsY0FBUUMsR0FBUixDQUFZLG9DQUFaLEVBQWtERixLQUFsRDtBQUNEOzs7cUNBRWdCRyxRLEVBQVU7QUFDekIsVUFBSSxDQUFDQSxTQUFTQyxFQUFkLEVBQWtCO0FBQ2hCLGNBQU1DLE1BQU1G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QUVRbUMsUSxFQUFVO0FBQ2pCLGFBQU9qQyxPQUFPa0MsTUFBUCxDQUFjLEtBQUt6QyxLQUFuQixFQUEwQndDLFFBQTFCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0g7Ozs7OztBQUVBO0FBQ0EsSUFBTXRELFFBQVEsSUFBSWEsY0FBSixFQUFkOztBQUVBO0FBYkE7Ozs7Ozs7O0FBY0FiLE1BQU13RCxnQkFBTjs7QUFFQXhELE1BQU1rQixRQUFOO0FBQ0FsQixNQUFNb0IsUUFBTixHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL21haW4uanNcIik7XG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwaVVSSSA9IFwiaHR0cHM6Ly9mcmVlLmN1cnJlbmN5Y29udmVydGVyYXBpLmNvbS9hcGkvdjVcIjtcbiAgfVxuXG4gIGxvZ0Vycm9yKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJMb29rcyBsaWtlIHRoZXJlIHdhcyBhIHByb2JsZW06IFxcblwiLCBlcnJvcik7XG4gIH1cblxuICB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHJlYWRSZXNwb25zZUFzSlNPTihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBnZXQoZW5kcG9pbnQpIHtcbiAgICBjb25zdCBVUkkgPSBgJHt0aGlzLmFwaVVSSX0ke2VuZHBvaW50fWA7XG4gICAgcmV0dXJuIGZldGNoKFVSSSlcbiAgICAgIC50aGVuKHRoaXMudmFsaWRhdGVSZXNwb25zZSlcbiAgICAgIC50aGVuKHRoaXMucmVhZFJlc3BvbnNlQXNKU09OKVxuICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xuICB9XG59XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5mb3Jtcy5jb252ZXJ0ZXI7XG5jb25zdCB7IGFtb3VudCwgZnJvbUN1cnJlbmN5LCB0b0N1cnJlbmN5LCBzdWJtaXQgfSA9IG5vZGVzLmVsZW1lbnRzO1xuXG5leHBvcnQgY29uc3QgZm9ybV9lbGVtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhbW91bnQsXG4gICAgZnJvbUN1cnJlbmN5LFxuICAgIHRvQ3VycmVuY3ksXG4gICAgc3VibWl0XG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IHNlbGVjdF9lbGVtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmcm9tQ3VycmVuY3ksXG4gICAgdG9DdXJyZW5jeVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRhYmxlX2VsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBjb3VudHJpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50cmllc1wiKTtcbiAgY29uc3QgY3VycmVuY2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVuY2llc1wiKTtcbiAgcmV0dXJuIHtcbiAgICBjb3VudHJpZXMsXG4gICAgY3VycmVuY2llc1xuICB9O1xufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgZm9ybV9lbGVtZW50cyB9IGZyb20gXCIuL0VsZW1lbnRzXCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vUmVuZGVyXCI7XG5cbmNsYXNzIEZvcm1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGVycm9yczoge31cbiAgICB9O1xuICAgIHRoaXMuZWxlbWVudHMgPSBmb3JtX2VsZW1lbnRzKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuZ2V0QWxsQ291bnRyaWVzID0gdGhpcy5nZXRBbGxDb3VudHJpZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9O1xuICAgIE9iamVjdC52YWx1ZXModGhpcy5lbGVtZW50cykubWFwKGVsID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIGRhdGFbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsbEN1cnJlbmNpZXMoKSB7XG4gICAgYXBpLmdldChcIi9jdXJyZW5jaWVzXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmVuZGVyLmxpc3RDdXJyZW5jaWVzKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGdldEFsbENvdW50cmllcygpIHtcbiAgLy8gICBhcGkuZ2V0KFwiL2NvdW50cmllc1wiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgLy8gICAgIC8vIHJlbmRlci5saXN0Q291bnRyaWVzKHJlc3BvbnNlKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHsgLi4udGhpcy5zdGF0ZS5lcnJvcnMgfTtcbiAgICBjb25zdCB7IHN1Ym1pdCB9ID0gdGhpcy5lbGVtZW50cztcblxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IGZyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSwgYW1vdW50IH0gPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9O1xuICAgICAgLy8gaHR0cHM6Ly9mcmVlLmN1cnJlbmN5Y29udmVydGVyYXBpLmNvbS9hcGkvdjUvY29udmVydD9xPUhVRl9CTkQmY29tcGFjdD11bHRyYVxuXG4gICAgICBjb25zdCBVUkkgPSBgL2NvbnZlcnQ/cT0ke2Zyb21DdXJyZW5jeX1fJHt0b0N1cnJlbmN5fSZjb21wYWN0PXVsdHJhYDtcblxuICAgICAgYXBpLmdldChVUkkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZW5kZXIuY29tcHV0ZShyZXNwb25zZSwgYW1vdW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBzZWxlY3RfZWxlbWVudHMsIHRhYmxlX2VsZW1lbnRzIH0gZnJvbSBcIi4vRWxlbWVudHNcIjtcblxuY2xhc3MgUmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBjdXJyZW5jaWVzOiB7fSxcbiAgICAgIGNvdW50cmllczoge31cbiAgICB9O1xuXG4gICAgdGhpcy5lbGVtZW50cyA9IHNlbGVjdF9lbGVtZW50cygpO1xuICAgIHRoaXMudGFibGUgPSB0YWJsZV9lbGVtZW50cygpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5jcmVhdGVUYWJsZSA9IHRoaXMuY3JlYXRlVGFibGUuYmluZCh0aGlzKTtcbiAgfVxuICBvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZWxlbWVudHMpLm1hcChlbCA9PiB7XG4gICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0LnZhbHVlID0gZGF0YS5pZDtcbiAgICAgIG9wdC50ZXh0ID0gZGF0YS5jdXJyZW5jeU5hbWU7XG5cbiAgICAgIGVsLmFkZChvcHQsIG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZShyZXNwLCBkYXRhKSB7XG4gICAgY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhyZXNwKVswXSwgZGF0YSk7XG4gICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5mb3Jtcy5jb252ZXJ0ZXI7XG4gICAgY29uc3QgY29udmVydGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udmVyc2lvblwiKTtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IG5vZGVzLmVsZW1lbnRzO1xuICAgIGNvbnN0IGN1cnJlbmN5ID0gT2JqZWN0LnZhbHVlcyhyZXNwKVswXTtcbiAgICAvLyBDb21wdXRlXG4gICAgY29uc3QgY3VsY3VsYXRlID0gY3VycmVuY3kgKiBkYXRhO1xuICAgIC8vRGlzcGxheSBSZXN1bHRzXG4gICAgcmVzdWx0cy52YWx1ZSA9IGN1bGN1bGF0ZTtcbiAgICBjb252ZXJ0aW9uLmlubmVyVGV4dCA9IGBDb252ZXJ0aW9uIFJhdGUgd2FzICR7Y3VycmVuY3l9YDtcbiAgfVxuICAvKlxuICAgIGRhdGEgPSB7XG4gICAgXCJjdXJyZW5jeU5hbWVcIjogXCJBbGJhbmlhbiBMZWtcIixcbiAgICBcImN1cnJlbmN5U3ltYm9sXCI6IFwiTGVrXCIsXG4gICAgXCJpZFwiOiBcIkFMTFwiXG4gICAgfVxuICAgICovXG4gIGxpc3RDdXJyZW5jaWVzKHJlc3VsdCkge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9O1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgT2JqZWN0LmVudHJpZXMocmVzdWx0LnJlc3VsdHMpLm1hcCh2YWwgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi52YWxbMV1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gICBjcmVhdGVUYWJsZSgpIHtcbiAgLy8gICAgIGNvbnN0IGNvdW50cmllcyA9IHsgLi4udGhpcy5zdGF0ZS5jb3VudHJpZXMgfTtcbiAgLy8gICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvdW50cmllcykpIHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coYCR7a2V5fSAke3ZhbHVlfWApO1xuICAvLyAgICAgICBjb25zdCB0YWJsZSA9IHRoaXMudGFibGU7XG4gIC8vICAgICB9XG4gIC8vICAgICBjb25zb2xlLmxvZyhjb3VudHJpZXMpO1xuICAvLyAgIH1cbiAgLy8gICBsaXN0Q291bnRyaWVzKHJlc3VsdCkge1xuICAvLyAgICAgY29uc3QgY291bnRyaWVzID0geyAuLi50aGlzLnN0YXRlLmNvdW50cmllcyB9O1xuICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3VsdHMpO1xuICAvLyAgICAgT2JqZWN0LmVudHJpZXMocmVzdWx0LnJlc3VsdHMpLm1hcCh2YWwgPT4ge1xuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgICBjb3VudHJpZXM6IHtcbiAgLy8gICAgICAgICAgIC4uLnZhbFsxXVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIHRoaXMuY3JlYXRlVGFibGUoKTtcbiAgLy8gICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudHJpZXMpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxufVxuXG5jb25zdCByZW5kZXIgPSBuZXcgUmVuZGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U3RhdGUobmV3U3RhdGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBuZXdTdGF0ZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3VycmVuY3ktQ29udmVydGVyIC0gRGVzaWduIENvbXBvbmVudHMgaW4gQ1NTLCBKUyBhbmQgSFRNTFxuICogQHZlcnNpb24gdjEuMi4xXG4gKiBAbGljZW5zZSBBcGFjaGUtMi4wXG4gKiBAY29weXJpZ2h0IDIwMTUgR29vZ2xlLCBJbmMuXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vYmw0Y2s0bmRicjB3bi9DdXJyZW5jeS1Db252ZXJ0ZXJcbiAqL1xuXG5pbXBvcnQgRm9ybXMgZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JtXCI7XG5cbi8vICBJbml0aWFsaXppbmcgdGhlIGNsYXNzZXNcbmNvbnN0IGZvcm1zID0gbmV3IEZvcm1zKCk7XG5cbi8vRm9ybXMgZnVuY3Rpb25zXG5mb3Jtcy5nZXRBbGxDdXJyZW5jaWVzKCk7XG5cbmZvcm1zLm9uQ2hhbmdlKCk7XG5mb3Jtcy5vblN1Ym1pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==