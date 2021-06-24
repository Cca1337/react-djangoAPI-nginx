/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (12:16)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n|     render() {\\n>         return (<div className=\\\"center\\\">\\n|         <HomePage />\\n|         </div>\");\n\n//# sourceURL=webpack://frontend/./src/components/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nvar colors = new Array(\r\n    [62,35,255],\r\n    [60,255,60],\r\n    [255,35,98],\r\n    [45,175,230],\r\n    [255,0,255],\r\n    [255,128,0]);\r\n\r\n  var step = 0;\r\n  //color table indices for: \r\n  // current color left\r\n  // next color left\r\n  // current color right\r\n  // next color right\r\n  var colorIndices = [0,1,2,3];\r\n\r\n  //transition speed\r\n  var gradientSpeed = 0.002;\r\n\r\n  function updateGradient()\r\n  {\r\n\r\n    if ( $===undefined ) return;\r\n\r\n  var c0_0 = colors[colorIndices[0]];\r\n  var c0_1 = colors[colorIndices[1]];\r\n  var c1_0 = colors[colorIndices[2]];\r\n  var c1_1 = colors[colorIndices[3]];\r\n\r\n  var istep = 1 - step;\r\n  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);\r\n  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);\r\n  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);\r\n  var color1 = \"rgb(\"+r1+\",\"+g1+\",\"+b1+\")\";\r\n\r\n  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);\r\n  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);\r\n  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);\r\n  var color2 = \"rgb(\"+r2+\",\"+g2+\",\"+b2+\")\";\r\n\r\n   $('#gradient').css({\r\n     background: \"-webkit-gradient(linear, left top, right top, from(\"+color1+\"), to(\"+color2+\"))\"}).css({\r\n      background: \"-moz-linear-gradient(left, \"+color1+\" 0%, \"+color2+\" 100%)\"});\r\n\r\n    step += gradientSpeed;\r\n    if ( step >= 1 )\r\n    {\r\n      step %= 1;\r\n      colorIndices[0] = colorIndices[1];\r\n      colorIndices[2] = colorIndices[3];\r\n\r\n      //pick two new target color indices\r\n      //do not pick the same as the current one\r\n      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;\r\n      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;\r\n\r\n    }\r\n  }\r\n\r\n  setInterval(updateGradient,10); \r\n  \n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;