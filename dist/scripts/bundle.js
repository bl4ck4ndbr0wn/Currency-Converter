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

var _sw = __webpack_require__(/*! ./sw */ "./src/js/sw/index.js");

var _sw2 = _interopRequireDefault(_sw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Service Workers
/**
 * Currency-Converter - Design Components in CSS, JS and HTML
 * @version v1.2.1
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/bl4ck4ndbr0wn/Currency-Converter
 */

(0, _sw2.default)();

//  Initializing the classes
var forms = new _Form2.default();

//Forms functions
forms.getAllCurrencies();

forms.onChange();
forms.onSubmit();

/***/ }),

/***/ "./src/js/sw/index.js":
/*!****************************!*\
  !*** ./src/js/sw/index.js ***!
  \****************************/
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL1JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N3L2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwaSIsImFwaVVSSSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwiZW5kcG9pbnQiLCJVUkkiLCJmZXRjaCIsInRoZW4iLCJ2YWxpZGF0ZVJlc3BvbnNlIiwicmVhZFJlc3BvbnNlQXNKU09OIiwiY2F0Y2giLCJsb2dFcnJvciIsImFwaSIsIm5vZGVzIiwiZG9jdW1lbnQiLCJmb3JtcyIsImNvbnZlcnRlciIsImVsZW1lbnRzIiwiYW1vdW50IiwiZnJvbUN1cnJlbmN5IiwidG9DdXJyZW5jeSIsInN1Ym1pdCIsImZvcm1fZWxlbWVudHMiLCJzZWxlY3RfZWxlbWVudHMiLCJ0YWJsZV9lbGVtZW50cyIsImNvdW50cmllcyIsImdldEVsZW1lbnRCeUlkIiwiY3VycmVuY2llcyIsIkZvcm1zIiwic3RhdGUiLCJkYXRhIiwiaXNWYWxpZCIsImVycm9ycyIsIm9uQ2hhbmdlIiwiYmluZCIsIm9uU3VibWl0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZ2V0IiwicmVuZGVyIiwibGlzdEN1cnJlbmNpZXMiLCJwcmV2ZW50RGVmYXVsdCIsImNvbXB1dGUiLCJDb21wb25lbnQiLCJSZW5kZXIiLCJ0YWJsZSIsIm9wdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInRleHQiLCJjdXJyZW5jeU5hbWUiLCJhZGQiLCJyZXNwIiwiY29udmVydGlvbiIsInJlc3VsdHMiLCJjdXJyZW5jeSIsImN1bGN1bGF0ZSIsImlubmVyVGV4dCIsInJlc3VsdCIsImVudHJpZXMiLCJ2YWwiLCJuZXdTdGF0ZSIsImFzc2lnbiIsImdldEFsbEN1cnJlbmNpZXMiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJvbkxvYWRTV0FzeW5jIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsRztBQUNKLGlCQUFjO0FBQUE7O0FBQ1osU0FBS0MsTUFBTCxHQUFjLDhDQUFkO0FBQ0Q7Ozs7NkJBRVFDLEssRUFBTztBQUNkQyxjQUFRQyxHQUFSLENBQVksb0NB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QUFDWCx1QkFBYztBQUFBOztBQUNaLFNBQUtOLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjWCxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0Q7Ozs7NkJBRVFtQyxRLEVBQVU7QUFDakIsYUFBT2pDLE9BQU9rQyxNQUFQLENBQWMsS0FBS3pDLEtBQW5CLEVBQTBCd0MsUUFBMUIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDSDs7OztBQUNBOzs7Ozs7QUFFQTtBQVhBOzs7Ozs7OztBQVlBOztBQUVBO0FBQ0EsSUFBTXRELFFBQVEsSUFBSWEsY0FBSixFQUFkOztBQUVBO0FBQ0FiLE1BQU13RCxnQkFBTjs7QUFFQXhELE1BQU1rQixRQUFOO0FBQ0FsQixNQUFNb0IsUUFBTixHOzs7Ozs7Ozs7Ozs7Ozs7cUVDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVNLG1CQUFtQnFDLFNBRnpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFJZ0NBLFVBQVVDLGFBQVYsQ0FBd0JDLFFBQXhCLENBQWlDLFFBQWpDLENBSmhDOztBQUFBO0FBSVVELHlCQUpWOztBQUtNNUUsb0JBQVFDLEdBQVIsZ0NBQXlDMkUsYUFBekM7QUFMTjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFPTTVFLG9CQUFRRCxLQUFSOztBQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlK0UsYSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9tYWluLmpzXCIpO1xuIiwiY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcGlVUkkgPSBcImh0dHBzOi8vZnJlZS5jdXJyZW5jeWNvbnZlcnRlcmFwaS5jb20vYXBpL3Y1XCI7XG4gIH1cblxuICBsb2dFcnJvcihlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiTG9va3MgbGlrZSB0aGVyZSB3YXMgYSBwcm9ibGVtOiBcXG5cIiwgZXJyb3IpO1xuICB9XG5cbiAgdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICByZWFkUmVzcG9uc2VBc0pTT04ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgZ2V0KGVuZHBvaW50KSB7XG4gICAgY29uc3QgVVJJID0gYCR7dGhpcy5hcGlVUkl9JHtlbmRwb2ludH1gO1xuICAgIHJldHVybiBmZXRjaChVUkkpXG4gICAgICAudGhlbih0aGlzLnZhbGlkYXRlUmVzcG9uc2UpXG4gICAgICAudGhlbih0aGlzLnJlYWRSZXNwb25zZUFzSlNPTilcbiAgICAgIC5jYXRjaCh0aGlzLmxvZ0Vycm9yKTtcbiAgfVxufVxuXG5jb25zdCBhcGkgPSBuZXcgQXBpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsImNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZm9ybXMuY29udmVydGVyO1xuY29uc3QgeyBhbW91bnQsIGZyb21DdXJyZW5jeSwgdG9DdXJyZW5jeSwgc3VibWl0IH0gPSBub2Rlcy5lbGVtZW50cztcblxuZXhwb3J0IGNvbnN0IGZvcm1fZWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYW1vdW50LFxuICAgIGZyb21DdXJyZW5jeSxcbiAgICB0b0N1cnJlbmN5LFxuICAgIHN1Ym1pdFxuICB9O1xufTtcbmV4cG9ydCBjb25zdCBzZWxlY3RfZWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZnJvbUN1cnJlbmN5LFxuICAgIHRvQ3VycmVuY3lcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0YWJsZV9lbGVtZW50cyA9ICgpID0+IHtcbiAgY29uc3QgY291bnRyaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudHJpZXNcIik7XG4gIGNvbnN0IGN1cnJlbmNpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbmNpZXNcIik7XG4gIHJldHVybiB7XG4gICAgY291bnRyaWVzLFxuICAgIGN1cnJlbmNpZXNcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IGZvcm1fZWxlbWVudHMgfSBmcm9tIFwiLi9FbGVtZW50c1wiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL1JlbmRlclwiO1xuXG5jbGFzcyBGb3JtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfTtcbiAgICB0aGlzLmVsZW1lbnRzID0gZm9ybV9lbGVtZW50cygpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmdldEFsbENvdW50cmllcyA9IHRoaXMuZ2V0QWxsQ291bnRyaWVzLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZWxlbWVudHMpLm1hcChlbCA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICBkYXRhW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGxDdXJyZW5jaWVzKCkge1xuICAgIGFwaS5nZXQoXCIvY3VycmVuY2llc1wiKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJlbmRlci5saXN0Q3VycmVuY2llcyhyZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBnZXRBbGxDb3VudHJpZXMoKSB7XG4gIC8vICAgYXBpLmdldChcIi9jb3VudHJpZXNcIikudGhlbihyZXNwb25zZSA9PiB7XG4gIC8vICAgICAvLyByZW5kZXIubGlzdENvdW50cmllcyhyZXNwb25zZSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB7IC4uLnRoaXMuc3RhdGUuZXJyb3JzIH07XG4gICAgY29uc3QgeyBzdWJtaXQgfSA9IHRoaXMuZWxlbWVudHM7XG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeyBmcm9tQ3VycmVuY3ksIHRvQ3VycmVuY3ksIGFtb3VudCB9ID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICAgIC8vIGh0dHBzOi8vZnJlZS5jdXJyZW5jeWNvbnZlcnRlcmFwaS5jb20vYXBpL3Y1L2NvbnZlcnQ/cT1IVUZfQk5EJmNvbXBhY3Q9dWx0cmFcblxuICAgICAgY29uc3QgVVJJID0gYC9jb252ZXJ0P3E9JHtmcm9tQ3VycmVuY3l9XyR7dG9DdXJyZW5jeX0mY29tcGFjdD11bHRyYWA7XG5cbiAgICAgIGFwaS5nZXQoVVJJKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmVuZGVyLmNvbXB1dGUocmVzcG9uc2UsIGFtb3VudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtcztcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgc2VsZWN0X2VsZW1lbnRzLCB0YWJsZV9lbGVtZW50cyB9IGZyb20gXCIuL0VsZW1lbnRzXCI7XG5cbmNsYXNzIFJlbmRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgY3VycmVuY2llczoge30sXG4gICAgICBjb3VudHJpZXM6IHt9XG4gICAgfTtcblxuICAgIHRoaXMuZWxlbWVudHMgPSBzZWxlY3RfZWxlbWVudHMoKTtcbiAgICB0aGlzLnRhYmxlID0gdGFibGVfZWxlbWVudHMoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuY3JlYXRlVGFibGUgPSB0aGlzLmNyZWF0ZVRhYmxlLmJpbmQodGhpcyk7XG4gIH1cbiAgb25DaGFuZ2UoKSB7XG4gICAgY29uc3QgZGF0YSA9IHsgLi4udGhpcy5zdGF0ZS5kYXRhIH07XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmVsZW1lbnRzKS5tYXAoZWwgPT4ge1xuICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdC52YWx1ZSA9IGRhdGEuaWQ7XG4gICAgICBvcHQudGV4dCA9IGRhdGEuY3VycmVuY3lOYW1lO1xuXG4gICAgICBlbC5hZGQob3B0LCBudWxsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGUocmVzcCwgZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMocmVzcClbMF0sIGRhdGEpO1xuICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZm9ybXMuY29udmVydGVyO1xuICAgIGNvbnN0IGNvbnZlcnRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnZlcnNpb25cIik7XG4gICAgY29uc3QgeyByZXN1bHRzIH0gPSBub2Rlcy5lbGVtZW50cztcbiAgICBjb25zdCBjdXJyZW5jeSA9IE9iamVjdC52YWx1ZXMocmVzcClbMF07XG4gICAgLy8gQ29tcHV0ZVxuICAgIGNvbnN0IGN1bGN1bGF0ZSA9IGN1cnJlbmN5ICogZGF0YTtcbiAgICAvL0Rpc3BsYXkgUmVzdWx0c1xuICAgIHJlc3VsdHMudmFsdWUgPSBjdWxjdWxhdGU7XG4gICAgY29udmVydGlvbi5pbm5lclRleHQgPSBgQ29udmVydGlvbiBSYXRlIHdhcyAke2N1cnJlbmN5fWA7XG4gIH1cbiAgLypcbiAgICBkYXRhID0ge1xuICAgIFwiY3VycmVuY3lOYW1lXCI6IFwiQWxiYW5pYW4gTGVrXCIsXG4gICAgXCJjdXJyZW5jeVN5bWJvbFwiOiBcIkxla1wiLFxuICAgIFwiaWRcIjogXCJBTExcIlxuICAgIH1cbiAgICAqL1xuICBsaXN0Q3VycmVuY2llcyhyZXN1bHQpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi50aGlzLnN0YXRlLmRhdGEgfTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIE9iamVjdC5lbnRyaWVzKHJlc3VsdC5yZXN1bHRzKS5tYXAodmFsID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4udmFsWzFdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH0pO1xuICB9XG4gIC8vICAgY3JlYXRlVGFibGUoKSB7XG4gIC8vICAgICBjb25zdCBjb3VudHJpZXMgPSB7IC4uLnRoaXMuc3RhdGUuY291bnRyaWVzIH07XG4gIC8vICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb3VudHJpZXMpKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGAke2tleX0gJHt2YWx1ZX1gKTtcbiAgLy8gICAgICAgY29uc3QgdGFibGUgPSB0aGlzLnRhYmxlO1xuICAvLyAgICAgfVxuICAvLyAgICAgY29uc29sZS5sb2coY291bnRyaWVzKTtcbiAgLy8gICB9XG4gIC8vICAgbGlzdENvdW50cmllcyhyZXN1bHQpIHtcbiAgLy8gICAgIGNvbnN0IGNvdW50cmllcyA9IHsgLi4udGhpcy5zdGF0ZS5jb3VudHJpZXMgfTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXN1bHRzKTtcbiAgLy8gICAgIE9iamVjdC5lbnRyaWVzKHJlc3VsdC5yZXN1bHRzKS5tYXAodmFsID0+IHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICAgICAgY291bnRyaWVzOiB7XG4gIC8vICAgICAgICAgICAuLi52YWxbMV1cbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgICB0aGlzLmNyZWF0ZVRhYmxlKCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY291bnRyaWVzKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbn1cblxuY29uc3QgcmVuZGVyID0gbmV3IFJlbmRlcigpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgbmV3U3RhdGUpO1xuICB9XG59XG4iLCIvKipcbiAqIEN1cnJlbmN5LUNvbnZlcnRlciAtIERlc2lnbiBDb21wb25lbnRzIGluIENTUywgSlMgYW5kIEhUTUxcbiAqIEB2ZXJzaW9uIHYxLjIuMVxuICogQGxpY2Vuc2UgQXBhY2hlLTIuMFxuICogQGNvcHlyaWdodCAyMDE1IEdvb2dsZSwgSW5jLlxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2JsNGNrNG5kYnIwd24vQ3VycmVuY3ktQ29udmVydGVyXG4gKi9cblxuaW1wb3J0IEZvcm1zIGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IG9uTG9hZFNXQXN5bmMgZnJvbSBcIi4vc3dcIjtcblxuLy8gU2VydmljZSBXb3JrZXJzXG5vbkxvYWRTV0FzeW5jKCk7XG5cbi8vICBJbml0aWFsaXppbmcgdGhlIGNsYXNzZXNcbmNvbnN0IGZvcm1zID0gbmV3IEZvcm1zKCk7XG5cbi8vRm9ybXMgZnVuY3Rpb25zXG5mb3Jtcy5nZXRBbGxDdXJyZW5jaWVzKCk7XG5cbmZvcm1zLm9uQ2hhbmdlKCk7XG5mb3Jtcy5vblN1Ym1pdCgpO1xuIiwiYXN5bmMgZnVuY3Rpb24gb25Mb2FkU1dBc3luYygpIHtcbiAgLy9JbnN0YWxsIHRoZSBzZXJ2aWNlIHdvcmtlclxuICBpZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBzZXJ2aWNlV29ya2VyID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc3cuanNcIik7XG4gICAgICBjb25zb2xlLmxvZyhgU2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZCAke3NlcnZpY2VXb3JrZXJ9YCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gcmVnaXN0ZXIgc2VydmljZSB3b3JrZXI6ICR7ZXJyfWApO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==