module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/body.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topBar__ = __webpack_require__("./components/topBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bottomBar__ = __webpack_require__("./components/bottomBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_content__ = __webpack_require__("./components/content/content.js");
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/body.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__content_content__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__topBar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__bottomBar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
});

/***/ }),

/***/ "./components/bottomBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__("./components/icon.js");
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/bottomBar.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  top: 97vh;\n  left: 45vw;\n  position: absolute;\n  transform: translate(-50%, -100%);\n  width: 600px;\n  @media (max-width: 750px) {\n    width: calc(100vw * 4 / 5);\n  }\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
    url: "/static/profileLogo.png",
    size: "150px",
    name: "Profile",
    textLeft: "100px",
    textLeftRes: "54%",
    number: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
    url: "/static/skillLogo.png",
    size: "150px",
    name: "Skill",
    textLeft: "100px",
    textLeftRes: "60%",
    number: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
    url: "/static/facebookLogo.png",
    size: "150px",
    name: "Facebook",
    textLeft: "75px",
    textLeftRes: "35%",
    number: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__icon__["a" /* default */], {
    url: "/static/emailLogo.png",
    size: "150px",
    name: "Email",
    textLeft: "75px",
    textLeftRes: "42%",
    number: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }));
});

/***/ }),

/***/ "./components/content/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  overflow: hidden;\n  height: 100vh;\n  width: 100vw;\n  display: inline-block;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "./components/content/content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_js__ = __webpack_require__("./components/content/home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_js__ = __webpack_require__("./components/content/profile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skill_js__ = __webpack_require__("./components/content/skill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/content/content.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  overflow: hidden;\n  width: 300vw;\n  position: absolute;\n  transition: 0.6s;\n  left: ", "vw;\n  top: 0px;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Container = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div(_templateObject, function (props) {
  return props.page * -100;
});

var Content =
/*#__PURE__*/
function (_Component) {
  _inherits(Content, _Component);

  function Content() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Content);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "render", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
          page: _this.props.page,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__home_js__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__profile_js__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__skill_js__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }));
      }
    }), _temp));
  }

  return Content;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    page: state.page
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(mapStateToProps)(Content));

/***/ }),

/***/ "./components/content/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container__ = __webpack_require__("./components/content/container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/content/home.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: \"Passion One\";\n  font-size: 10vw;\n  text-shadow: 8px 8px black;\n  display: inline-block;\n  color: #f1c40f;\n  -webkit-text-stroke: 1px black;\n  transition: 0.6s;\n  @media (max-width: 1000px) {\n    font-size: 14vw;\n  }\n  &:hover {\n    transform: scale(1.1);\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  top: 45vh;\n  left: 50vw;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Name = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(_templateObject);
var NameContainer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject2);
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__container__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NameContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, "WACHIRAWIT"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "WACHARAK")));
});

/***/ }),

/***/ "./components/content/profile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container__ = __webpack_require__("./components/content/container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_profile__ = __webpack_require__("./config/profile.js");
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/content/profile.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: 100vh;\n  width: calc(100% / 3);\n  display: inline-block;\n  @media (max-width: 970px) {\n    height: calc(100% / 6);\n    width: 100%;\n    display: block;\n    margin-top: 20px;\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  width: 40%;\n  transform: translateX(-50%);\n  margin-left: 50%;\n  margin-top: 80px;\n  @media (max-width: 970px) {\n    width: 100px;\n    transform: translateX(0%);\n    margin-left: 10px;\n    margin-top: 0px;\n    display: inline-block;\n  }\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: \"Passion One\";\n  font-size: 2.5em;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #f39c12;\n  -webkit-text-stroke: 1px black;\n  text-shadow: 5px 5px black;\n  @media (max-width: 970px) {\n    width: calc(100% - 100vh / 3);\n    float: left;\n    text-align: left;\n    margin-left: 30px;\n  }\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: \"Passion One\";\n  font-size: 1.7em;\n  width: 100%;\n  display: block;\n  color: black;\n  text-align: center;\n  padding: 12px 30px 0px 30px;\n  word-wrap: break-word;\n  @media (max-width: 970px) {\n    float: left;\n    text-align: left;\n    font-size: 1.2em;\n  }\n  @media (max-width: 560px) {\n    float: left;\n    text-align: left;\n    font-size: 1em;\n  }\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: block;\n  overflow: hidden;\n  @media (max-width: 970px) {\n    display: inline-block;\n    vertical-align: top;\n    width: calc(100% - 110px);\n  }\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  @media (max-width: 970px) {\n    padding-top: 14vh;\n  }\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var TopicContainer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject);
var Icon = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.img(_templateObject2);
var Topic = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(_templateObject3);
var Text = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(_templateObject4);
var Detail = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject5);
var PreDetail = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject6);

var Content = function Content(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TopicContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Icon, {
    src: props.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Detail, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Topic, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, props.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, props.text)));
};

var Contents = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = __WEBPACK_IMPORTED_MODULE_3__config_profile__["a" /* default */][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _i = _step.value;
    Contents.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, {
      src: "/static/profile/" + _i.topic + ".png",
      name: _i.topic,
      text: _i.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      }
    }));
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__container__["a" /* default */], {
    style: {
      backgroundColor: "#3498db"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PreDetail, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, Contents));
});

/***/ }),

/***/ "./components/content/skill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container__ = __webpack_require__("./components/content/container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skillComponent_icon__ = __webpack_require__("./components/content/skillComponent/icon.js");
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/content/skill.js";




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__container__["a" /* default */], {
    style: {
      backgroundColor: "#e67e22"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__skillComponent_icon__["a" /* default */], {
    name: "HTML",
    size: "20vw",
    top: "100px",
    left: "10vw",
    src: "/static/skill/html.png",
    percent: 80,
    topres: "170px",
    leftres: "20vw",
    deg: -30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__skillComponent_icon__["a" /* default */], {
    name: "CSS",
    size: "15vw",
    top: "25vh",
    left: "32vw",
    src: "/static/skill/css.png",
    percent: 70,
    topres: "60vh",
    leftres: "20vw",
    deg: 55,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__skillComponent_icon__["a" /* default */], {
    name: "Javascript",
    size: "10vw",
    top: "20vh",
    left: "50vw",
    src: "/static/skill/javascript.png",
    percent: 50,
    topres: "45vh",
    leftres: "70vw",
    deg: -30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__skillComponent_icon__["a" /* default */], {
    name: "React",
    size: "12vw",
    top: "40vh",
    left: "60vw",
    src: "/static/skill/react.png",
    percent: 20,
    topres: "65vh",
    leftres: "60vw",
    deg: -30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__skillComponent_icon__["a" /* default */], {
    name: "Redux",
    size: "12vw",
    top: "50vh",
    left: "75vw",
    src: "/static/skill/redux.png",
    percent: 0,
    topres: "150px",
    leftres: "60vw",
    deg: 45,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }));
});

/***/ }),

/***/ "./components/content/skillComponent/NamePoint.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/content/skillComponent/NamePoint.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: 100%;\n  width: 100%;\n  position: absolute;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  height: 5px;\n  width: ", ";\n  background-color: red;\n  transform-origin: top left;\n  transform: rotate(", "deg);\n  border-radius: 2.5px;\n  @media(max-width: 600px){\n    display: ", ";\n  }\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  left: ", ";\n  transform: translateY(-100%);\n  @media(max-width: 600px){\n    top: 150%;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: \"Passion One\";\n  font-size: 1.5em;\n  color: #ecf0f1;\n  padding: 2px;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var Line = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2, function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, function (props) {
  return props.width;
}, function (props) {
  return props.deg || 0;
}, function (props) {
  return props.res;
});
var NameContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject3, function (props) {
  return props.top;
}, function (props) {
  return props.left;
});
var Text = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.span(_templateObject4);

var getPosition = function getPosition(deg, width) {
  var factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Math.PI / 180;
  return {
    y: "calc(".concat(Math.sin(deg * factor) * width + 50, "%)"),
    x: "calc(".concat(Math.cos(deg * factor) * width + 50, "%)")
  };
};

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Line, {
    top: "50%",
    left: "50%",
    width: "101%",
    deg: props.deg,
    res: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NameContainer, {
    top: getPosition(props.deg, 100).y,
    left: getPosition(props.deg, 100).x,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, props.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Line, {
    top: "100%",
    left: "0%",
    width: "101%",
    deg: 0,
    degres: 0,
    res: "block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  })));
});

/***/ }),

/***/ "./components/content/skillComponent/icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NamePoint__ = __webpack_require__("./components/content/skillComponent/NamePoint.js");
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/content/skillComponent/icon.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: absolute;\n  height: ", ";\n  width: ", ";\n  top: ", ";\n  left: calc(200vw + ", ");\n  @media (max-width: 600px) {\n    top: ", ";\n    left: calc(200vw + ", ");\n  }\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: absolute;\n  height: ", ";\n  width: ", ";\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: absolute;\n  height: calc(100% * ", ");\n  width: calc(100% * ", ");\n  border-style: solid;\n  border-width: 1vw;\n  border-color: transparent ", " transparent;\n  border-radius: 50%;\n  transform: translate(-50%, -50%) rotate(", "deg);\n  top: calc(50% + ", "px);\n  left: calc(50% + ", "px);\n  @media (max-width: 600px) {\n    transform: translate(-50%, -50%) scale(2)\n      rotate(", "deg);\n  }\n  transition: 0.1s;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: absolute;\n  height: 60%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  @media (max-width: 600px) {\n    height: 100%;\n  }\n  &:hover {\n    transform: translate(-50%, -50%) scale(1.3);\n  }\n  transition: 0.1s;\n  z-index: 1000px;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, function (props) {
  return props.topres;
}, function (props) {
  return props.leftres;
});
var AuraGroup = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2, function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
var Aura = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject3, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.color + ' ' + props.color;
}, function (props) {
  return props.deg * 180 / 100 - 45;
}, function (props) {
  return props.isShadow * 5 || 0;
}, function (props) {
  return props.isShadow * 5 || 0;
}, function (props) {
  return props.deg * 180 / 100 - 45;
});
var Img = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.img(_templateObject4);
/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
    size: props.size,
    top: props.top,
    left: props.left,
    topres: props.topres,
    leftres: props.leftres,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AuraGroup, {
    size: props.size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Aura, {
    color: "black",
    size: 1,
    deg: 0,
    isShadow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Aura, {
    color: "black",
    size: 1,
    deg: props.percent,
    isShadow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Aura, {
    color: "#27ae60",
    size: 1,
    deg: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Aura, {
    color: "#27ae60",
    size: 1,
    deg: props.percent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NamePoint__["a" /* default */], {
    deg: props.deg,
    name: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Img, {
    src: props.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }));
});

/***/ }),

/***/ "./components/icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_action__ = __webpack_require__("./redux/action.js");
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/icon.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  float: left;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  height: 150px;\n  width: 150px;\n  @media (max-width: 750px) {\n    height: calc(100vw / 5);\n    width: calc(100vw / 5);\n  }\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: \"Passion one\";\n  display: block;\n  padding-top: 10px;\n  padding-left: ", ";\n  @media (max-width: 750px) {\n    padding-left: calc(", ");\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject);
var Img = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.img(_templateObject2);
var Topic = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.span(_templateObject3, function (props) {
  return props.textleft;
}, function (props) {
  return props.textleftres;
});

var Icon =
/*#__PURE__*/
function (_Component) {
  _inherits(Icon, _Component);

  function Icon(props) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onMouseEnter", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isHover: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onMouseLeave", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isHover: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var number = _this.props.number;

        if (number == 3) {
          window.open('https://www.facebook.com/tauhoo.ice', '_blank');
          return;
        } else if (number == 4) {
          window.location.href = "mailto:mail@example.org";
          return;
        }

        _this.props.changePage(number);
      }
    });
    var url = props.url;
    var length = url.length;
    _this.state = {
      isHover: false,
      urlA: url.substring(0, length - 4) + "A" + url.substring(length - 4, length)
    };
    return _this;
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Img, {
        src: this.state.isHover ? this.state.urlA : this.props.url,
        height: this.props.size,
        width: this.props.size,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Topic, {
        textleft: this.props.textLeft,
        textleftres: this.props.textLeftRes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, this.props.name));
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    page: state.page
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changePage: function changePage(number) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__redux_action__["a" /* changePage */])(number));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Icon));

/***/ }),

/***/ "./components/topBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_action__ = __webpack_require__("./redux/action.js");
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/components/topBar.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 15px;\n  width: 100vw;\n  box-sizing: border-box;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  transition: 0.6s;\n  &:hover {\n    transform: rotate(360deg) scale(1.5);\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);
var Img = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.img(_templateObject2);

var TopBar =
/*#__PURE__*/
function (_Component) {
  _inherits(TopBar, _Component);

  function TopBar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, TopBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.changePage(0);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "render", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Img, {
          src: "/static/logo.png",
          height: "60px",
          width: "60px",
          onClick: _this.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Img, {
          src: "/static/topic.png",
          height: "30px",
          style: {
            float: "right",
            margin: "15px 0px 0px 0px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }));
      }
    }), _temp));
  }

  return TopBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changePage: function changePage(page) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__redux_action__["a" /* changePage */])(page));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return {};
}, mapDispatchToProps)(TopBar));

/***/ }),

/***/ "./config/profile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  topic: "Education",
  content: "I'm currently studying for a bachelor's degree at Kasetsart University. My major's computer engineering."
}, {
  topic: "Story",
  content: "Hello, My name's Wachirawit Wacharak. I'm 20 years old. I live with family in outskirt of bankok in Thailand"
}, {
  topic: "Passion",
  content: "I love to make the beautiful website and hope that I will have chance to make a big cool website in some day."
}]);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_reduxComponent__ = __webpack_require__("./redux/reduxComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_body__ = __webpack_require__("./components/body.js");
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/pages/index.js";



var ReduxComponent = Object(__WEBPACK_IMPORTED_MODULE_1__redux_reduxComponent__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_body__["a" /* default */], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ReduxComponent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
});

/***/ }),

/***/ "./redux/action.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changePage; });
var changePage = function changePage(num) {
  return {
    type: 'CHANGE_PAGE_STATE',
    state: num
  };
};

/***/ }),

/***/ "./redux/initialState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  page: 0
});

/***/ }),

/***/ "./redux/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CHANGE_PAGE_STATE":
      return Object.assign({}, state, {
        page: action.state
      });
      break;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reduxComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initialState__ = __webpack_require__("./redux/initialState.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__("./redux/reducer.js");
var _jsxFileName = "/home/tauhoo/Documents/wachirawit/redux/reduxComponent.js";





var store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__initialState__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (function (Page) {
  return function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, Page);
  };
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map