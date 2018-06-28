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


var onLoadSWAsync = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var serviceWorker;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!("serviceWorker" in navigator)) {
              _context.next = 11;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return navigator.serviceWorker.register("/sw.js");

          case 4:
            serviceWorker = _context.sent;

            console.log("Service worker registered " + serviceWorker);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);

            console.error("Failed to register service worker: " + _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function onLoadSWAsync() {
    return _ref.apply(this, arguments);
  };
}();

var _Form = __webpack_require__(/*! ./components/Form */ "./src/js/components/Form.js");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Currency-Converter - Design Components in CSS, JS and HTML
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @version v1.2.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @license Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @copyright 2015 Google, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @link https://github.com/bl4ck4ndbr0wn/Currency-Converter
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

onLoadSWAsync();

//  Initializing the classes
var forms = new _Form2.default();

//Forms functions
forms.getAllCurrencies();

forms.onChange();
forms.onSubmit();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsiQXBpIiwiYXBpVVJJIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJlbmRwb2ludCIsIlVSSSIsImZldGNoIiwidGhlbiIsInZhbGlkYXRlUmVzcG9uc2UiLCJyZWFkUmVzcG9uc2VBc0pTT04iLCJjYXRjaCIsImxvZ0Vycm9yIiwiYXBpIiwibm9kZXMiLCJkb2N1bWVudCIsImZvcm1zIiwiY29udmVydGVyIiwiZWxlbWVudHMiLCJhbW91bnQiLCJmcm9tQ3VycmVuY3kiLCJ0b0N1cnJlbmN5Iiwic3VibWl0IiwiZm9ybV9lbGVtZW50cyIsInNlbGVjdF9lbGVtZW50cyIsInRhYmxlX2VsZW1lbnRzIiwiY291bnRyaWVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW5jaWVzIiwiRm9ybXMiLCJzdGF0ZSIsImRhdGEiLCJpc1ZhbGlkIiwiZXJyb3JzIiwib25DaGFuZ2UiLCJiaW5kIiwib25TdWJtaXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJnZXQiLCJyZW5kZXIiLCJsaXN0Q3VycmVuY2llcyIsInByZXZlbnREZWZhdWx0IiwiY29tcHV0ZSIsIkNvbXBvbmVudCIsIlJlbmRlciIsInRhYmxlIiwib3B0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwidGV4dCIsImN1cnJlbmN5TmFtZSIsImFkZCIsInJlc3AiLCJjb252ZXJ0aW9uIiwicmVzdWx0cyIsImN1cnJlbmN5IiwiY3VsY3VsYXRlIiwiaW5uZXJUZXh0IiwicmVzdWx0IiwiZW50cmllcyIsInZhbCIsIm5ld1N0YXRlIiwiYXNzaWduIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwib25Mb2FkU1dBc3luYyIsImdldEFsbEN1cnJlbmNpZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZNQSxHO0FBQ0osaUJBQWM7QUFBQTs7QUFDWixTQUFLQyxNQUFMLEdBQWMsOENBQWQ7QUFDRDs7Ozs2QkFFUUMsSyxFQUFPO0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWSxvQ0FBWixFQUFrREYsS0FBbEQ7QUFDRDs7O3FDQUVnQkcsUSxFQUFVO0FBQ3pCLFVBQUksQ0FBQ0EsU0FBU0MsRUFBZCxFQUFrQjtBQUNoQixjQUFNQyxNQUFNRixTQUFTRyxVQUFmLENBQU47QUFDRDtBQUNELGFBQU9ILFFBQVA7QUFDRDs7O3VDQUVrQkEsUSxFQUFVO0FBQzNCLGFBQU9BLFNBQVNJLElBQVQsRUFBUDtBQUNEOzs7d0JBRUdDLFEsRUFBVTtBQUNaLFVBQU1DLFdBQVMsS0FBS1YsTUFBZCxHQUF1QlMsUUFBN0I7QUFDQSxhQUFPRSxNQUFNRCxHQUFOLEVBQ0pFLElBREksQ0FDQyxLQUFLQyxnQkFETixFQUVKRCxJQUZJLENBRUMsS0FBS0Usa0JBRk4sRUFHSkMsS0FISSxDQUdFLEtBQUtDLFFBSFAsQ0FBUDtBQUlEOzs7Ozs7QUFHSCxJQUFNQyxNQUFNLElBQUlsQixHQUFKLEVBQVo7O2tCQUVla0IsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmYsSUFBTUMsUUFBUUMsU0FBU0MsS0FBVCxDQUFlQyxTQUE3QjtzQkFDcURILE1BQU1JLFE7SUFBbkRDLE0sbUJBQUFBLE07SUFBUUMsWSxtQkFBQUEsWTtJQUFjQyxVLG1CQUFBQSxVO0lBQVlDLE0sbUJBQUFBLE07QUFFbkMsSUFBTUMsd0NBQWdCLFNBQWhCQSxhQUFnQixHQUFNO0FBQ2pDLFNBQU87QUFDTEosa0JBREs7QUFFTEMsOEJBRks7QUFHTEMsMEJBSEs7QUFJTEM7QUFKSyxHQUFQO0FBTUQsQ0FQTTtBQVFBLElBQU1FLDRDQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUNuQyxTQUFPO0FBQ0xKLDhCQURLO0FBRUxDO0FBRkssR0FBUDtBQUlELENBTE07O0FBT0EsSUFBTUksMENBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQ2xDLE1BQU1DLFlBQVlYLFNBQVNZLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBbEI7QUFDQSxNQUFNQyxhQUFhYixTQUFTWSxjQUFULENBQXdCLFlBQXhCLENBQW5CO0FBQ0EsU0FBTztBQUNMRCx3QkFESztBQUVMRTtBQUZLLEdBQVA7QUFJRCxDQVBNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQlA7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1DLEs7OztBQUNKLG1CQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxlQUFTLEtBRkU7QUFHWEMsY0FBUTtBQUhHLEtBQWI7QUFLQSxVQUFLZixRQUFMLEdBQWdCLDhCQUFoQjtBQUNBLFVBQUtnQixRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLE9BQWhCO0FBQ0E7QUFWWTtBQVdiOzs7OytCQUVVO0FBQUE7O0FBQ1QsVUFBTUosb0JBQVksS0FBS0QsS0FBTCxDQUFXQyxJQUF2QixDQUFOO0FBQ0FNLGFBQU9DLE1BQVAsQ0FBYyxLQUFLcEIsUUFBbkIsRUFBNkJxQixHQUE3QixDQUFpQyxjQUFNO0FBQ3JDQyxXQUFHQyxnQkFBSCxDQUFvQixRQUFwQixFQUE4QixhQUFLO0FBQ2pDVixlQUFLVyxFQUFFQyxNQUFGLENBQVNDLElBQWQsSUFBc0JGLEVBQUVDLE1BQUYsQ0FBU0UsS0FBL0I7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUVmLFVBQUYsRUFBZDtBQUNELFNBSEQ7QUFJRCxPQUxEO0FBTUQ7Ozt1Q0FFa0I7QUFDakJsQixvQkFBSWtDLEdBQUosQ0FBUSxhQUFSLEVBQXVCdkMsSUFBdkIsQ0FBNEIsb0JBQVk7QUFDdEN3Qyx5QkFBT0MsY0FBUCxDQUFzQmpELFFBQXRCO0FBQ0QsT0FGRDtBQUdEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7K0JBRVc7QUFBQTs7QUFDVCxVQUFNaUMsc0JBQWMsS0FBS0gsS0FBTCxDQUFXRyxNQUF6QixDQUFOO0FBRFMsVUFFRFgsTUFGQyxHQUVVLEtBQUtKLFFBRmYsQ0FFREksTUFGQzs7O0FBSVRBLGFBQU9tQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxhQUFLO0FBQ3BDQyxVQUFFUSxjQUFGOztBQURvQyx1Q0FFYyxPQUFLcEIsS0FBTCxDQUFXQyxJQUZ6QjtBQUFBLFlBRTVCWCxZQUY0QixlQUU1QkEsWUFGNEI7QUFBQSxZQUVkQyxVQUZjLGVBRWRBLFVBRmM7QUFBQSxZQUVGRixNQUZFLGVBRUZBLE1BRkU7QUFHcEM7O0FBRUEsWUFBTWIsc0JBQW9CYyxZQUFwQixTQUFvQ0MsVUFBcEMsbUJBQU47O0FBRUFSLHNCQUFJa0MsR0FBSixDQUFRekMsR0FBUixFQUFhRSxJQUFiLENBQWtCLG9CQUFZO0FBQzVCd0MsMkJBQU9HLE9BQVAsQ0FBZW5ELFFBQWYsRUFBeUJtQixNQUF6QjtBQUNELFNBRkQ7QUFHRCxPQVZEO0FBV0Q7Ozs7RUFuRGlCaUMsYzs7a0JBc0RMdkIsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEZjs7QUFDQTs7Ozs7Ozs7SUFFTXdCLE07OztBQUNKLG9CQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS3ZCLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEgsa0JBQVksRUFGRDtBQUdYRixpQkFBVztBQUhBLEtBQWI7O0FBTUEsVUFBS1IsUUFBTCxHQUFnQixnQ0FBaEI7QUFDQSxVQUFLb0MsS0FBTCxHQUFhLCtCQUFiO0FBQ0EsVUFBS3BCLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBQ0E7QUFYWTtBQVliOzs7OytCQUNVO0FBQ1QsVUFBTUosb0JBQVksS0FBS0QsS0FBTCxDQUFXQyxJQUF2QixDQUFOO0FBQ0FNLGFBQU9DLE1BQVAsQ0FBYyxLQUFLcEIsUUFBbkIsRUFBNkJxQixHQUE3QixDQUFpQyxjQUFNO0FBQ3JDLFlBQU1nQixNQUFNeEMsU0FBU3lDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtBQUNBRCxZQUFJVixLQUFKLEdBQVlkLEtBQUswQixFQUFqQjtBQUNBRixZQUFJRyxJQUFKLEdBQVczQixLQUFLNEIsWUFBaEI7O0FBRUFuQixXQUFHb0IsR0FBSCxDQUFPTCxHQUFQLEVBQVksSUFBWjtBQUNELE9BTkQ7QUFPRDs7OzRCQUVPTSxJLEVBQU05QixJLEVBQU07QUFDbEJqQyxjQUFRQyxHQUFSLENBQVlzQyxPQUFPQyxNQUFQLENBQWN1QixJQUFkLEVBQW9CLENBQXBCLENBQVosRUFBb0M5QixJQUFwQztBQUNBLFVBQU1qQixRQUFRQyxTQUFTQyxLQUFULENBQWVDLFNBQTdCO0FBQ0EsVUFBTTZDLGFBQWEvQyxTQUFTWSxjQUFULENBQXdCLFlBQXhCLENBQW5CO0FBSGtCLFVBSVZvQyxPQUpVLEdBSUVqRCxNQUFNSSxRQUpSLENBSVY2QyxPQUpVOztBQUtsQixVQUFNQyxXQUFXM0IsT0FBT0MsTUFBUCxDQUFjdUIsSUFBZCxFQUFvQixDQUFwQixDQUFqQjtBQUNBO0FBQ0EsVUFBTUksWUFBWUQsV0FBV2pDLElBQTdCO0FBQ0E7QUFDQWdDLGNBQVFsQixLQUFSLEdBQWdCb0IsU0FBaEI7QUFDQUgsaUJBQVdJLFNBQVgsNEJBQThDRixRQUE5QztBQUNEO0FBQ0Q7Ozs7Ozs7Ozs7bUNBT2VHLE0sRUFBUTtBQUFBOztBQUNyQixVQUFNcEMsb0JBQVksS0FBS0QsS0FBTCxDQUFXQyxJQUF2QixDQUFOO0FBQ0FqQyxjQUFRQyxHQUFSLENBQVlvRSxNQUFaO0FBQ0E5QixhQUFPK0IsT0FBUCxDQUFlRCxPQUFPSixPQUF0QixFQUErQnhCLEdBQS9CLENBQW1DLGVBQU87QUFDeEMsZUFBS08sUUFBTCxDQUFjO0FBQ1pmLDZCQUNLc0MsSUFBSSxDQUFKLENBREw7QUFEWSxTQUFkO0FBS0EsZUFBS25DLFFBQUw7QUFDRCxPQVBEO0FBUUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0VBNUVtQmtCLGM7O0FBK0VyQixJQUFNSixTQUFTLElBQUlLLE1BQUosRUFBZjs7a0JBRWVMLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwRkZJLFMsV0FBQUEsUztBQUNYLHVCQUFjO0FBQUE7O0FBQ1osU0FBS04sUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNYLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDRDs7Ozs2QkFFUW1DLFEsRUFBVTtBQUNqQixhQUFPakMsT0FBT2tDLE1BQVAsQ0FBYyxLQUFLekMsS0FBbkIsRUFBMEJ3QyxRQUExQixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVDR0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRU0sbUJBQW1CRSxTQUZ6QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBSWdDQSxVQUFVQyxhQUFWLENBQXdCQyxRQUF4QixDQUFpQyxRQUFqQyxDQUpoQzs7QUFBQTtBQUlVRCx5QkFKVjs7QUFLTTNFLG9CQUFRQyxHQUFSLGdDQUF5QzBFLGFBQXpDO0FBTE47QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBT00zRSxvQkFBUUQsS0FBUjs7QUFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZThFLGE7Ozs7O0FBRmY7Ozs7OzsyY0FSQTs7Ozs7Ozs7QUFxQkFBOztBQUVBO0FBQ0EsSUFBTTNELFFBQVEsSUFBSWEsY0FBSixFQUFkOztBQUVBO0FBQ0FiLE1BQU00RCxnQkFBTjs7QUFFQTVELE1BQU1rQixRQUFOO0FBQ0FsQixNQUFNb0IsUUFBTixHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL21haW4uanNcIik7XG4iLCJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwaVVSSSA9IFwiaHR0cHM6Ly9mcmVlLmN1cnJlbmN5Y29udmVydGVyYXBpLmNvbS9hcGkvdjVcIjtcbiAgfVxuXG4gIGxvZ0Vycm9yKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJMb29rcyBsaWtlIHRoZXJlIHdhcyBhIHByb2JsZW06IFxcblwiLCBlcnJvcik7XG4gIH1cblxuICB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIHJlYWRSZXNwb25zZUFzSlNPTihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBnZXQoZW5kcG9pbnQpIHtcbiAgICBjb25zdCBVUkkgPSBgJHt0aGlzLmFwaVVSSX0ke2VuZHBvaW50fWA7XG4gICAgcmV0dXJuIGZldGNoKFVSSSlcbiAgICAgIC50aGVuKHRoaXMudmFsaWRhdGVSZXNwb25zZSlcbiAgICAgIC50aGVuKHRoaXMucmVhZFJlc3BvbnNlQXNKU09OKVxuICAgICAgLmNhdGNoKHRoaXMubG9nRXJyb3IpO1xuICB9XG59XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5mb3Jtcy5jb252ZXJ0ZXI7XG5jb25zdCB7IGFtb3VudCwgZnJvbUN1cnJlbmN5LCB0b0N1cnJlbmN5LCBzdWJtaXQgfSA9IG5vZGVzLmVsZW1lbnRzO1xuXG5leHBvcnQgY29uc3QgZm9ybV9lbGVtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhbW91bnQsXG4gICAgZnJvbUN1cnJlbmN5LFxuICAgIHRvQ3VycmVuY3ksXG4gICAgc3VibWl0XG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IHNlbGVjdF9lbGVtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmcm9tQ3VycmVuY3ksXG4gICAgdG9DdXJyZW5jeVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRhYmxlX2VsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBjb3VudHJpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50cmllc1wiKTtcbiAgY29uc3QgY3VycmVuY2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVuY2llc1wiKTtcbiAgcmV0dXJuIHtcbiAgICBjb3VudHJpZXMsXG4gICAgY3VycmVuY2llc1xuICB9O1xufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgZm9ybV9lbGVtZW50cyB9IGZyb20gXCIuL0VsZW1lbnRzXCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vUmVuZGVyXCI7XG5cbmNsYXNzIEZvcm1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGVycm9yczoge31cbiAgICB9O1xuICAgIHRoaXMuZWxlbWVudHMgPSBmb3JtX2VsZW1lbnRzKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuZ2V0QWxsQ291bnRyaWVzID0gdGhpcy5nZXRBbGxDb3VudHJpZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9O1xuICAgIE9iamVjdC52YWx1ZXModGhpcy5lbGVtZW50cykubWFwKGVsID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgIGRhdGFbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsbEN1cnJlbmNpZXMoKSB7XG4gICAgYXBpLmdldChcIi9jdXJyZW5jaWVzXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmVuZGVyLmxpc3RDdXJyZW5jaWVzKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGdldEFsbENvdW50cmllcygpIHtcbiAgLy8gICBhcGkuZ2V0KFwiL2NvdW50cmllc1wiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgLy8gICAgIC8vIHJlbmRlci5saXN0Q291bnRyaWVzKHJlc3BvbnNlKTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGVycm9ycyA9IHsgLi4udGhpcy5zdGF0ZS5lcnJvcnMgfTtcbiAgICBjb25zdCB7IHN1Ym1pdCB9ID0gdGhpcy5lbGVtZW50cztcblxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IGZyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSwgYW1vdW50IH0gPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9O1xuICAgICAgLy8gaHR0cHM6Ly9mcmVlLmN1cnJlbmN5Y29udmVydGVyYXBpLmNvbS9hcGkvdjUvY29udmVydD9xPUhVRl9CTkQmY29tcGFjdD11bHRyYVxuXG4gICAgICBjb25zdCBVUkkgPSBgL2NvbnZlcnQ/cT0ke2Zyb21DdXJyZW5jeX1fJHt0b0N1cnJlbmN5fSZjb21wYWN0PXVsdHJhYDtcblxuICAgICAgYXBpLmdldChVUkkpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZW5kZXIuY29tcHV0ZShyZXNwb25zZSwgYW1vdW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBzZWxlY3RfZWxlbWVudHMsIHRhYmxlX2VsZW1lbnRzIH0gZnJvbSBcIi4vRWxlbWVudHNcIjtcblxuY2xhc3MgUmVuZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge30sXG4gICAgICBjdXJyZW5jaWVzOiB7fSxcbiAgICAgIGNvdW50cmllczoge31cbiAgICB9O1xuXG4gICAgdGhpcy5lbGVtZW50cyA9IHNlbGVjdF9lbGVtZW50cygpO1xuICAgIHRoaXMudGFibGUgPSB0YWJsZV9lbGVtZW50cygpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5jcmVhdGVUYWJsZSA9IHRoaXMuY3JlYXRlVGFibGUuYmluZCh0aGlzKTtcbiAgfVxuICBvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZWxlbWVudHMpLm1hcChlbCA9PiB7XG4gICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0LnZhbHVlID0gZGF0YS5pZDtcbiAgICAgIG9wdC50ZXh0ID0gZGF0YS5jdXJyZW5jeU5hbWU7XG5cbiAgICAgIGVsLmFkZChvcHQsIG51bGwpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZShyZXNwLCBkYXRhKSB7XG4gICAgY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhyZXNwKVswXSwgZGF0YSk7XG4gICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5mb3Jtcy5jb252ZXJ0ZXI7XG4gICAgY29uc3QgY29udmVydGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udmVyc2lvblwiKTtcbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IG5vZGVzLmVsZW1lbnRzO1xuICAgIGNvbnN0IGN1cnJlbmN5ID0gT2JqZWN0LnZhbHVlcyhyZXNwKVswXTtcbiAgICAvLyBDb21wdXRlXG4gICAgY29uc3QgY3VsY3VsYXRlID0gY3VycmVuY3kgKiBkYXRhO1xuICAgIC8vRGlzcGxheSBSZXN1bHRzXG4gICAgcmVzdWx0cy52YWx1ZSA9IGN1bGN1bGF0ZTtcbiAgICBjb252ZXJ0aW9uLmlubmVyVGV4dCA9IGBDb252ZXJ0aW9uIFJhdGUgd2FzICR7Y3VycmVuY3l9YDtcbiAgfVxuICAvKlxuICAgIGRhdGEgPSB7XG4gICAgXCJjdXJyZW5jeU5hbWVcIjogXCJBbGJhbmlhbiBMZWtcIixcbiAgICBcImN1cnJlbmN5U3ltYm9sXCI6IFwiTGVrXCIsXG4gICAgXCJpZFwiOiBcIkFMTFwiXG4gICAgfVxuICAgICovXG4gIGxpc3RDdXJyZW5jaWVzKHJlc3VsdCkge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSB9O1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgT2JqZWN0LmVudHJpZXMocmVzdWx0LnJlc3VsdHMpLm1hcCh2YWwgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi52YWxbMV1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gICBjcmVhdGVUYWJsZSgpIHtcbiAgLy8gICAgIGNvbnN0IGNvdW50cmllcyA9IHsgLi4udGhpcy5zdGF0ZS5jb3VudHJpZXMgfTtcbiAgLy8gICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvdW50cmllcykpIHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coYCR7a2V5fSAke3ZhbHVlfWApO1xuICAvLyAgICAgICBjb25zdCB0YWJsZSA9IHRoaXMudGFibGU7XG4gIC8vICAgICB9XG4gIC8vICAgICBjb25zb2xlLmxvZyhjb3VudHJpZXMpO1xuICAvLyAgIH1cbiAgLy8gICBsaXN0Q291bnRyaWVzKHJlc3VsdCkge1xuICAvLyAgICAgY29uc3QgY291bnRyaWVzID0geyAuLi50aGlzLnN0YXRlLmNvdW50cmllcyB9O1xuICAvLyAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlc3VsdHMpO1xuICAvLyAgICAgT2JqZWN0LmVudHJpZXMocmVzdWx0LnJlc3VsdHMpLm1hcCh2YWwgPT4ge1xuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgICBjb3VudHJpZXM6IHtcbiAgLy8gICAgICAgICAgIC4uLnZhbFsxXVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAgIHRoaXMuY3JlYXRlVGFibGUoKTtcbiAgLy8gICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudHJpZXMpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxufVxuXG5jb25zdCByZW5kZXIgPSBuZXcgUmVuZGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiIsImV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNldFN0YXRlID0gdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0U3RhdGUobmV3U3RhdGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBuZXdTdGF0ZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ3VycmVuY3ktQ29udmVydGVyIC0gRGVzaWduIENvbXBvbmVudHMgaW4gQ1NTLCBKUyBhbmQgSFRNTFxuICogQHZlcnNpb24gdjEuMi4xXG4gKiBAbGljZW5zZSBBcGFjaGUtMi4wXG4gKiBAY29weXJpZ2h0IDIwMTUgR29vZ2xlLCBJbmMuXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vYmw0Y2s0bmRicjB3bi9DdXJyZW5jeS1Db252ZXJ0ZXJcbiAqL1xuXG5pbXBvcnQgRm9ybXMgZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JtXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIG9uTG9hZFNXQXN5bmMoKSB7XG4gIC8vSW5zdGFsbCB0aGUgc2VydmljZSB3b3JrZXJcbiAgaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuICAgIHRyeSB7XG4gICAgICBsZXQgc2VydmljZVdvcmtlciA9IGF3YWl0IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3N3LmpzXCIpO1xuICAgICAgY29uc29sZS5sb2coYFNlcnZpY2Ugd29ya2VyIHJlZ2lzdGVyZWQgJHtzZXJ2aWNlV29ya2VyfWApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyOiAke2Vycn1gKTtcbiAgICB9XG4gIH1cbn1cbm9uTG9hZFNXQXN5bmMoKTtcblxuLy8gIEluaXRpYWxpemluZyB0aGUgY2xhc3Nlc1xuY29uc3QgZm9ybXMgPSBuZXcgRm9ybXMoKTtcblxuLy9Gb3JtcyBmdW5jdGlvbnNcbmZvcm1zLmdldEFsbEN1cnJlbmNpZXMoKTtcblxuZm9ybXMub25DaGFuZ2UoKTtcbmZvcm1zLm9uU3VibWl0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9