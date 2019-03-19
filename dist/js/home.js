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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/styles.scss?");

/***/ }),

/***/ "./src/js/make-message.js":
/*!********************************!*\
  !*** ./src/js/make-message.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction makeMessage(msg) {\n  const element = document.createElement('p');\n  element.textContent = msg;\n  return element;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeMessage);\n\n//# sourceURL=webpack:///./src/js/make-message.js?");

/***/ }),

/***/ "./src/js/message.js":
/*!***************************!*\
  !*** ./src/js/message.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const renderToDom = __webpack_require__(/*! ./render-to-dom */ \"./src/js/render-to-dom.js\");\n\nconst makeMessage = __webpack_require__(/*! ./make-message */ \"./src/js/make-message.js\"); //    import renderToDom from './render-to-dom'\n//    import makeMessage from './make-message'\n\n\nconst waitTime = new Promise((todoOk, todoMal) => {\n  setTimeout(() => {\n    todoOk('Han 3 segundos');\n  }, 3000);\n});\nmodule.exports = {\n  firstMessage: 'Hola mundo dessde un primer modulo',\n  delayMessage: async () => {\n    const message = await waitTime;\n    console.log(message); // const element = document.createElement('p')\n    // element.textContent = message;\n\n    renderToDom(makeMessage(message));\n  }\n};\n\n//# sourceURL=webpack:///./src/js/message.js?");

/***/ }),

/***/ "./src/js/render-to-dom.js":
/*!*********************************!*\
  !*** ./src/js/render-to-dom.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function renderToDom(element) {\n  document.body.append(element);\n};\n\n//# sourceURL=webpack:///./src/js/render-to-dom.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/styles.scss */ \"./src/css/styles.scss\");\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_message__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // alert('Hola amigos how are you guys doing ');\n\ndocument.write(_message__WEBPACK_IMPORTED_MODULE_2__[\"firstMessage\"]);\nObject(_message__WEBPACK_IMPORTED_MODULE_2__[\"delayMessage\"])();\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });