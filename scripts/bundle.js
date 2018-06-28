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
    // this.onSubmit = this.onSubmit.bind(this);
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
      var errors = _extends({}, this.state.errors);
      var submit = this.elements.submit;

      var _state$data = _extends({}, this.state.data),
          fromCurrency = _state$data.fromCurrency,
          toCurrency = _state$data.toCurrency,
          amount = _state$data.amount;

      console.log(fromCurrency, toCurrency, amount);
      submit.addEventListener("click", function (e) {
        e.preventDefault();

        console.log(fromCurrency, toCurrency, amount);
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
    //   compute(resp, data) {
    //     console.log(Object.values(resp)[0], data);
    //   }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsiQXBpIiwiYXBpVVJJIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJlbmRwb2ludCIsIlVSSSIsImZldGNoIiwidGhlbiIsInZhbGlkYXRlUmVzcG9uc2UiLCJyZWFkUmVzcG9uc2VBc0pTT04iLCJjYXRjaCIsImxvZ0Vycm9yIiwiYXBpIiwibm9kZXMiLCJkb2N1bWVudCIsImZvcm1zIiwiY29udmVydGVyIiwiZWxlbWVudHMiLCJhbW91bnQiLCJmcm9tQ3VycmVuY3kiLCJ0b0N1cnJlbmN5Iiwic3VibWl0IiwiZm9ybV9lbGVtZW50cyIsInNlbGVjdF9lbGVtZW50cyIsInRhYmxlX2VsZW1lbnRzIiwiY291bnRyaWVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW5jaWVzIiwiRm9ybXMiLCJzdGF0ZSIsImRhdGEiLCJpc1ZhbGlkIiwiZXJyb3JzIiwib25DaGFuZ2UiLCJiaW5kIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZ2V0IiwicmVuZGVyIiwibGlzdEN1cnJlbmNpZXMiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXB1dGUiLCJDb21wb25lbnQiLCJSZW5kZXIiLCJ0YWJsZSIsIm9wdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInRleHQiLCJjdXJyZW5jeU5hbWUiLCJhZGQiLCJyZXN1bHQiLCJlbnRyaWVzIiwicmVzdWx0cyIsInZhbCIsIm5ld1N0YXRlIiwiYXNzaWduIiwiZ2V0QWxsQ3VycmVuY2llcyIsIm9uU3VibWl0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsRztBQUNKLGlCQUFjO0FBQUE7O0FBQ1osU0FBS0MsTUFBTCxHQUFjLDhDQUFkO0FBQ0Q7Ozs7NkJBRVFDLEssRUFBTztBQUNkQyxjQUFRQyxHQUFSLENBQVksb0NBQVosRUFBa0RGLEtBQWxEO0FBQ0Q7OztxQ0FFZ0JHLFEsRUFBVTtBQUN6QixVQUFJLENBQUNBLFNBQVNDLEVBQWQsRUFBa0I7QUFDaEIsY0FBTUMsTUFBTUYsU0FBU0csVUFBZixDQUFOO0FBQ0Q7QUFDRCxhQUFPSCxRQUFQO0FBQ0Q7Ozt1Q0FFa0JBLFEsRUFBVTtBQUMzQixhQUFPQSxTQUFTSSxJQUFULEVBQVA7QUFDRDs7O3dCQUVHQyxRLEVBQVU7QUFDWixVQUFNQyxXQUFTLEtBQUtWLE1BQWQsR0FBdUJTLFFBQTdCO0FBQ0EsYUFBT0UsTUFBTUQsR0FBTixFQUNKRSxJQURJLENBQ0MsS0FBS0MsZ0JBRE4sRUFFSkQsSUFGSSxDQUVDLEtBQUtFLGtCQUZOLEVBR0pDLEtBSEksQ0FHRSxLQUFLQyxRQUhQLENBQVA7QUFJRDs7Ozs7O0FBR0gsSUFBTUMsTUFBTSxJQUFJbEIsR0FBSixFQUFaOztrQkFFZWtCLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JmLElBQU1DLFFBQVFDLFNBQVNDLEtBQVQsQ0FBZUMsU0FBN0I7c0JBQ3FESCxNQUFNSSxRO0lBQW5EQyxNLG1CQUFBQSxNO0lBQVFDLFksbUJBQUFBLFk7SUFBY0MsVSxtQkFBQUEsVTtJQUFZQyxNLG1CQUFBQSxNO0FBQ25DLElBQU1DLHdDQUFnQixTQUFoQkEsYUFBZ0IsR0FBTTtBQUNqQyxTQUFPO0FBQ0xKLGtCQURLO0FBRUxDLDhCQUZLO0FBR0xDLDBCQUhLO0FBSUxDO0FBSkssR0FBUDtBQU1ELENBUE07QUFRQSxJQUFNRSw0Q0FBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDbkMsU0FBTztBQUNMSiw4QkFESztBQUVMQztBQUZLLEdBQVA7QUFJRCxDQUxNOztBQU9BLElBQU1JLDBDQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUNsQyxNQUFNQyxZQUFZWCxTQUFTWSxjQUFULENBQXdCLFdBQXhCLENBQWxCO0FBQ0EsTUFBTUMsYUFBYWIsU0FBU1ksY0FBVCxDQUF3QixZQUF4QixDQUFuQjtBQUNBLFNBQU87QUFDTEQsd0JBREs7QUFFTEU7QUFGSyxHQUFQO0FBSUQsQ0FQTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJQOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQyxLOzs7QUFDSixtQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsZUFBUyxLQUZFO0FBR1hDLGNBQVE7QUFIRyxLQUFiO0FBS0EsVUFBS2YsUUFBTCxHQUFnQiw4QkFBaEI7QUFDQSxVQUFLZ0IsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQTtBQUNBO0FBVlk7QUFXYjs7OzsrQkFFVTtBQUFBOztBQUNULFVBQU1KLG9CQUFZLEtBQUtELEtBQUwsQ0FBV0MsSUFBdkIsQ0FBTjtBQUNBSyxhQUFPQyxNQUFQLENBQWMsS0FBS25CLFFBQW5CLEVBQTZCb0IsR0FBN0IsQ0FBaUMsY0FBTTtBQUNyQ0MsV0FBR0MsZ0JBQUgsQ0FBb0IsUUFBcEIsRUFBOEIsYUFBSztBQUNqQ1QsZUFBS1UsRUFBRUMsTUFBRixDQUFTQyxJQUFkLElBQXNCRixFQUFFQyxNQUFGLENBQVNFLEtBQS9CO0FBQ0EsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFZCxVQUFGLEVBQWQ7QUFDRCxTQUhEO0FBSUQsT0FMRDtBQU1EOzs7dUNBRWtCO0FBQ2pCbEIsb0JBQUlpQyxHQUFKLENBQVEsYUFBUixFQUF1QnRDLElBQXZCLENBQTRCLG9CQUFZO0FBQ3RDdUMseUJBQU9DLGNBQVAsQ0FBc0JoRCxRQUF0QjtBQUNELE9BRkQ7QUFHRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OytCQUVXO0FBQ1QsVUFBTWlDLHNCQUFjLEtBQUtILEtBQUwsQ0FBV0csTUFBekIsQ0FBTjtBQURTLFVBRURYLE1BRkMsR0FFVSxLQUFLSixRQUZmLENBRURJLE1BRkM7O0FBQUEscUNBSXlDLEtBQUtRLEtBQUwsQ0FBV0MsSUFKcEQ7QUFBQSxVQUlEWCxZQUpDLGVBSURBLFlBSkM7QUFBQSxVQUlhQyxVQUpiLGVBSWFBLFVBSmI7QUFBQSxVQUl5QkYsTUFKekIsZUFJeUJBLE1BSnpCOztBQUtUckIsY0FBUUMsR0FBUixDQUFZcUIsWUFBWixFQUEwQkMsVUFBMUIsRUFBc0NGLE1BQXRDO0FBQ0FHLGFBQU9rQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxhQUFLO0FBQ3BDQyxVQUFFUSxjQUFGOztBQUVBbkQsZ0JBQVFDLEdBQVIsQ0FBWXFCLFlBQVosRUFBMEJDLFVBQTFCLEVBQXNDRixNQUF0QztBQUNBOztBQUVBLFlBQU1iLHNCQUFvQmMsWUFBcEIsU0FBb0NDLFVBQXBDLG1CQUFOOztBQUVBUixzQkFBSWlDLEdBQUosQ0FBUXhDLEdBQVIsRUFBYUUsSUFBYixDQUFrQixvQkFBWTtBQUM1QnVDLDJCQUFPRyxPQUFQLENBQWVsRCxRQUFmLEVBQXlCbUIsTUFBekI7QUFDRCxTQUZEO0FBR0QsT0FYRDtBQVlEOzs7O0VBdERpQmdDLGM7O2tCQXlETHRCLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGY7O0FBQ0E7Ozs7Ozs7O0lBRU11QixNOzs7QUFDSixvQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUt0QixLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhILGtCQUFZLEVBRkQ7QUFHWEYsaUJBQVc7QUFIQSxLQUFiOztBQU1BLFVBQUtSLFFBQUwsR0FBZ0IsZ0NBQWhCO0FBQ0EsVUFBS21DLEtBQUwsR0FBYSwrQkFBYjtBQUNBLFVBQUtuQixRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBO0FBWFk7QUFZYjs7OzsrQkFDVTtBQUNULFVBQU1KLG9CQUFZLEtBQUtELEtBQUwsQ0FBV0MsSUFBdkIsQ0FBTjtBQUNBSyxhQUFPQyxNQUFQLENBQWMsS0FBS25CLFFBQW5CLEVBQTZCb0IsR0FBN0IsQ0FBaUMsY0FBTTtBQUNyQyxZQUFNZ0IsTUFBTXZDLFNBQVN3QyxhQUFULENBQXVCLFFBQXZCLENBQVo7QUFDQUQsWUFBSVYsS0FBSixHQUFZYixLQUFLeUIsRUFBakI7QUFDQUYsWUFBSUcsSUFBSixHQUFXMUIsS0FBSzJCLFlBQWhCOztBQUVBbkIsV0FBR29CLEdBQUgsQ0FBT0wsR0FBUCxFQUFZLElBQVo7QUFDRCxPQU5EO0FBT0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OzttQ0FPZU0sTSxFQUFRO0FBQUE7O0FBQ3JCLFVBQU03QixvQkFBWSxLQUFLRCxLQUFMLENBQVdDLElBQXZCLENBQU47QUFDQWpDLGNBQVFDLEdBQVIsQ0FBWTZELE1BQVo7QUFDQXhCLGFBQU95QixPQUFQLENBQWVELE9BQU9FLE9BQXRCLEVBQStCeEIsR0FBL0IsQ0FBbUMsZUFBTztBQUN4QyxlQUFLTyxRQUFMLENBQWM7QUFDWmQsNkJBQ0tnQyxJQUFJLENBQUosQ0FETDtBQURZLFNBQWQ7QUFLQSxlQUFLN0IsUUFBTDtBQUNELE9BUEQ7QUFRRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7RUFsRW1CaUIsYzs7QUFxRXJCLElBQU1KLFNBQVMsSUFBSUssTUFBSixFQUFmOztrQkFFZUwsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFFRkksUyxXQUFBQSxTO0FBQ1gsdUJBQWM7QUFBQTs7QUFDWixTQUFLTixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY1YsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNEOzs7OzZCQUVRNkIsUSxFQUFVO0FBQ2pCLGFBQU81QixPQUFPNkIsTUFBUCxDQUFjLEtBQUtuQyxLQUFuQixFQUEwQmtDLFFBQTFCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0g7Ozs7OztBQUVBO0FBQ0EsSUFBTWhELFFBQVEsSUFBSWEsY0FBSixFQUFkOztBQUVBO0FBYkE7Ozs7Ozs7O0FBY0FiLE1BQU1rRCxnQkFBTjs7QUFFQWxELE1BQU1rQixRQUFOO0FBQ0FsQixNQUFNbUQsUUFBTixHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL21haW4uanNcIik7XG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwaVVSSSA9IFwiaHR0cHM6Ly9mcmVlLmN1cnJlbmN5Y29udmVydGVyYXBpLmNvbS9hcGkvdjVcIjtcbiAgfVxuXG4gIGxvZ0Vycm9yKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJMb29rcyBsaWtlIHRoZXJlIHdhcyBhIHByb2JsZW06IFxcblwiLCBlcnJvcik7XG4gIH1cblxuICB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHJlYWRSZXNwb25zZUFzSlNPTihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBnZXQoZW5kcG9pbnQpIHtcbiAgICBjb25zdCBVUkkgPSBgJHt0aGlzLmFwaVVSSX0ke2VuZHBvaW50fWA7XG4gICAgcmV0dXJuIGZldGNoKFVSSSlcbiAgICAgIC50aGVuKHRoaXMudmFsaWRhdGVSZXNwb25zZSlcbiAgICAgIC50aGVuKHRoaXMucmVhZFJlc3BvbnNlQXNKU09OKVxuICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xuICB9XG59XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5mb3Jtcy5jb252ZXJ0ZXI7XG5jb25zdCB7IGFtb3VudCwgZnJvbUN1cnJlbmN5LCB0b0N1cnJlbmN5LCBzdWJtaXQgfSA9IG5vZGVzLmVsZW1lbnRzO1xuZXhwb3J0IGNvbnN0IGZvcm1fZWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYW1vdW50LFxuICAgIGZyb21DdXJyZW5jeSxcbiAgICB0b0N1cnJlbmN5LFxuICAgIHN1Ym1pdFxuICB9O1xufTtcbmV4cG9ydCBjb25zdCBzZWxlY3RfZWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZnJvbUN1cnJlbmN5LFxuICAgIHRvQ3VycmVuY3lcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0YWJsZV9lbGVtZW50cyA9ICgpID0+IHtcbiAgY29uc3QgY291bnRyaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudHJpZXNcIik7XG4gIGNvbnN0IGN1cnJlbmNpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbmNpZXNcIik7XG4gIHJldHVybiB7XG4gICAgY291bnRyaWVzLFxuICAgIGN1cnJlbmNpZXNcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IGZvcm1fZWxlbWVudHMgfSBmcm9tIFwiLi9FbGVtZW50c1wiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL1JlbmRlclwiO1xuXG5jbGFzcyBGb3JtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfTtcbiAgICB0aGlzLmVsZW1lbnRzID0gZm9ybV9lbGVtZW50cygpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmdldEFsbENvdW50cmllcyA9IHRoaXMuZ2V0QWxsQ291bnRyaWVzLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZWxlbWVudHMpLm1hcChlbCA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBkYXRhW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGxDdXJyZW5jaWVzKCkge1xuICAgIGFwaS5nZXQoXCIvY3VycmVuY2llc1wiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJlbmRlci5saXN0Q3VycmVuY2llcyhyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBnZXRBbGxDb3VudHJpZXMoKSB7XG4gIC8vICAgYXBpLmdldChcIi9jb3VudHJpZXNcIikudGhlbihyZXNwb25zZSA9PiB7XG4gIC8vICAgICAvLyByZW5kZXIubGlzdENvdW50cmllcyhyZXNwb25zZSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB7IC4uLnRoaXMuc3RhdGUuZXJyb3JzIH07XG4gICAgY29uc3QgeyBzdWJtaXQgfSA9IHRoaXMuZWxlbWVudHM7XG5cbiAgICBjb25zdCB7IGZyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSwgYW1vdW50IH0gPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9O1xuICAgIGNvbnNvbGUubG9nKGZyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSwgYW1vdW50KTtcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zb2xlLmxvZyhmcm9tQ3VycmVuY3ksIHRvQ3VycmVuY3ksIGFtb3VudCk7XG4gICAgICAvLyBodHRwczovL2ZyZWUuY3VycmVuY3ljb252ZXJ0ZXJhcGkuY29tL2FwaS92NS9jb252ZXJ0P3E9SFVGX0JORCZjb21wYWN0PXVsdHJhXG5cbiAgICAgIGNvbnN0IFVSSSA9IGAvY29udmVydD9xPSR7ZnJvbUN1cnJlbmN5fV8ke3RvQ3VycmVuY3l9JmNvbXBhY3Q9dWx0cmFgO1xuXG4gICAgICBhcGkuZ2V0KFVSSSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJlbmRlci5jb21wdXRlKHJlc3BvbnNlLCBhbW91bnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybXM7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IHNlbGVjdF9lbGVtZW50cywgdGFibGVfZWxlbWVudHMgfSBmcm9tIFwiLi9FbGVtZW50c1wiO1xuXG5jbGFzcyBSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGN1cnJlbmNpZXM6IHt9LFxuICAgICAgY291bnRyaWVzOiB7fVxuICAgIH07XG5cbiAgICB0aGlzLmVsZW1lbnRzID0gc2VsZWN0X2VsZW1lbnRzKCk7XG4gICAgdGhpcy50YWJsZSA9IHRhYmxlX2VsZW1lbnRzKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmNyZWF0ZVRhYmxlID0gdGhpcy5jcmVhdGVUYWJsZS5iaW5kKHRoaXMpO1xuICB9XG4gIG9uQ2hhbmdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9O1xuICAgIE9iamVjdC52YWx1ZXModGhpcy5lbGVtZW50cykubWFwKGVsID0+IHtcbiAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHQudmFsdWUgPSBkYXRhLmlkO1xuICAgICAgb3B0LnRleHQgPSBkYXRhLmN1cnJlbmN5TmFtZTtcblxuICAgICAgZWwuYWRkKG9wdCwgbnVsbCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gICBjb21wdXRlKHJlc3AsIGRhdGEpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMocmVzcClbMF0sIGRhdGEpO1xuICAvLyAgIH1cbiAgLypcbiAgICBkYXRhID0ge1xuICAgIFwiY3VycmVuY3lOYW1lXCI6IFwiQWxiYW5pYW4gTGVrXCIsXG4gICAgXCJjdXJyZW5jeVN5bWJvbFwiOiBcIkxla1wiLFxuICAgIFwiaWRcIjogXCJBTExcIlxuICAgIH1cbiAgICAqL1xuICBsaXN0Q3VycmVuY2llcyhyZXN1bHQpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIE9iamVjdC5lbnRyaWVzKHJlc3VsdC5yZXN1bHRzKS5tYXAodmFsID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4udmFsWzFdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH0pO1xuICB9XG4gIC8vICAgY3JlYXRlVGFibGUoKSB7XG4gIC8vICAgICBjb25zdCBjb3VudHJpZXMgPSB7IC4uLnRoaXMuc3RhdGUuY291bnRyaWVzIH07XG4gIC8vICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb3VudHJpZXMpKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGAke2tleX0gJHt2YWx1ZX1gKTtcbiAgLy8gICAgICAgY29uc3QgdGFibGUgPSB0aGlzLnRhYmxlO1xuICAvLyAgICAgfVxuICAvLyAgICAgY29uc29sZS5sb2coY291bnRyaWVzKTtcbiAgLy8gICB9XG4gIC8vICAgbGlzdENvdW50cmllcyhyZXN1bHQpIHtcbiAgLy8gICAgIGNvbnN0IGNvdW50cmllcyA9IHsgLi4udGhpcy5zdGF0ZS5jb3VudHJpZXMgfTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXN1bHRzKTtcbiAgLy8gICAgIE9iamVjdC5lbnRyaWVzKHJlc3VsdC5yZXN1bHRzKS5tYXAodmFsID0+IHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICAgICAgY291bnRyaWVzOiB7XG4gIC8vICAgICAgICAgICAuLi52YWxbMV1cbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgICB0aGlzLmNyZWF0ZVRhYmxlKCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY291bnRyaWVzKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbn1cblxuY29uc3QgcmVuZGVyID0gbmV3IFJlbmRlcigpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgbmV3U3RhdGUpO1xuICB9XG59XG4iLCIvKipcbiAqIEN1cnJlbmN5LUNvbnZlcnRlciAtIERlc2lnbiBDb21wb25lbnRzIGluIENTUywgSlMgYW5kIEhUTUxcbiAqIEB2ZXJzaW9uIHYxLjIuMVxuICogQGxpY2Vuc2UgQXBhY2hlLTIuMFxuICogQGNvcHlyaWdodCAyMDE1IEdvb2dsZSwgSW5jLlxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2JsNGNrNG5kYnIwd24vQ3VycmVuY3ktQ29udmVydGVyXG4gKi9cblxuaW1wb3J0IEZvcm1zIGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybVwiO1xuXG4vLyAgSW5pdGlhbGl6aW5nIHRoZSBjbGFzc2VzXG5jb25zdCBmb3JtcyA9IG5ldyBGb3JtcygpO1xuXG4vL0Zvcm1zIGZ1bmN0aW9uc1xuZm9ybXMuZ2V0QWxsQ3VycmVuY2llcygpO1xuXG5mb3Jtcy5vbkNoYW5nZSgpO1xuZm9ybXMub25TdWJtaXQoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=