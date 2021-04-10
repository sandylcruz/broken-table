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

/***/ "./frontend/webpack.config.js":
/*!************************************!*\
  !*** ./frontend/webpack.config.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __dirname = \"/\";\nconst path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nmodule.exports = {\n  context: __dirname,\n  entry: path.resolve(__dirname, \"./src/index.js\"),\n  output: {\n    path: path.resolve(__dirname),\n    filename: \"../backend/app/assets/javascripts/bundle.js\",\n  },\n  module: {\n    rules: [\n      {\n        test: [/\\.js$/],\n        exclude: /(node_modules)/,\n        use: {\n          loader: \"babel-loader\",\n          options: {\n            presets: [\"@babel/env\", \"@babel/react\"],\n          },\n        },\n      },\n      {\n        test: /\\.svg$/,\n        use: [\n          {\n            loader: \"babel-loader\",\n            options: {\n              presets: [\"@babel/env\", \"@babel/react\"],\n            },\n          },\n          {\n            loader: \"react-svg-loader\",\n            options: {\n              jsx: true,\n            },\n          },\n        ],\n      },\n    ],\n  },\n  devtool: \"source-map\",\n  resolve: {\n    extensions: [\".js\", \"*\", \".\", \"node_modules\"],\n  },\n};\n\n\n//# sourceURL=webpack://broken-table-frontend/./frontend/webpack.config.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/webpack.config.js");
/******/ 	
/******/ })()
;