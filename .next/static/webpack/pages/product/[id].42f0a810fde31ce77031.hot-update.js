/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./components/SuggestedProducts.tsx":
/*!******************************************!*\
  !*** ./components/SuggestedProducts.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/dom/Desktop/shop/components/SuggestedProducts.tsx\",\n    _this = undefined;\n\n\n\n\n//This solves underline but why is it working???\nvar Card = function Card(_ref) {\n  var id = _ref.id,\n      name = _ref.name,\n      price = _ref.price,\n      img = _ref.img;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/product/\".concat(id),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"\",\n        className: \"group\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"w-full bg-gray-200 rounded-3xl overflow-hidden\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative group-hover:opacity-75 h-72\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: img,\n              alt: name,\n              layout: \"fill\",\n              objectFit: \"cover\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          className: \"mt-4 text-lg font-medium text-gray-900\",\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"mt-1 text-sm text-gray-700\",\n          children: [\"\\xA3\", price]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Card;\n\nvar SuggestedProducts = function SuggestedProducts(_ref2) {\n  var title = _ref2.title,\n      products = _ref2.products;\n  console.log(products);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"bg-white\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"text-2xl font-extrabold text-gray-900 mb-6\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8\",\n        children: products.map(function (product) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n              id: product.id,\n              name: product.name,\n              price: product.price,\n              img: product.img\n            }, product.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = SuggestedProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestedProducts);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"SuggestedProducts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWdnZXN0ZWRQcm9kdWN0cy50c3g/NDRjOSJdLCJuYW1lcyI6WyJDYXJkIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJpbWciLCJTdWdnZXN0ZWRQcm9kdWN0cyIsInRpdGxlIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUcwQjtBQUUxQixJQUFNQSxJQUtKLEdBQUcsU0FMQ0EsSUFLRCxPQUE4QjtBQUFBLE1BQTNCQyxFQUEyQixRQUEzQkEsRUFBMkI7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUNqQyxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxxQkFBY0gsRUFBZCxDQUFWO0FBQUEsNkJBQ0U7QUFBRyxZQUFJLEVBQUMsRUFBUjtBQUFXLGlCQUFTLEVBQUMsT0FBckI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsZ0RBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsc0NBQWY7QUFBQSxtQ0FDRSw4REFBQyxtREFBRDtBQUFPLGlCQUFHLEVBQUVHLEdBQVo7QUFBaUIsaUJBQUcsRUFBRUYsSUFBdEI7QUFBNEIsb0JBQU0sRUFBQyxNQUFuQztBQUEwQyx1QkFBUyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUksbUJBQVMsRUFBQyx3Q0FBZDtBQUFBLG9CQUF3REE7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQU9FO0FBQUcsbUJBQVMsRUFBQyw0QkFBYjtBQUFBLDZCQUE0Q0MsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQXJCRDs7S0FBTUgsSTs7QUF1Qk4sSUFBTUssaUJBQWtDLEdBQUcsU0FBckNBLGlCQUFxQyxRQUF5QjtBQUFBLE1BQXRCQyxLQUFzQixTQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDbEVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG9FQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLDRDQUFkO0FBQUEsa0JBQTRERDtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsMkZBQWY7QUFBQSxrQkFDR0MsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLDhCQUNaO0FBQUEsbUNBQ0UsOERBQUMsSUFBRDtBQUVFLGdCQUFFLEVBQUVBLE9BQU8sQ0FBQ1YsRUFGZDtBQUdFLGtCQUFJLEVBQUVVLE9BQU8sQ0FBQ1QsSUFIaEI7QUFJRSxtQkFBSyxFQUFFUyxPQUFPLENBQUNSLEtBSmpCO0FBS0UsaUJBQUcsRUFBRVEsT0FBTyxDQUFDUDtBQUxmLGVBQ09PLE9BQU8sQ0FBQ1YsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsMkJBRFk7QUFBQSxTQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXRCRDs7TUFBTUksaUI7QUF3Qk4sK0RBQWVBLGlCQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TdWdnZXN0ZWRQcm9kdWN0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XG5cbnR5cGUgUHJvcHMgPSBhbnlbXSB8IGFueTsgLy9UaGlzIHNvbHZlcyB1bmRlcmxpbmUgYnV0IHdoeSBpcyBpdCB3b3JraW5nPz8/XG5cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogc3RyaW5nO1xuICBpbWc6IHN0cmluZztcbn0+ID0gKHsgaWQsIG5hbWUsIHByaWNlLCBpbWcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtpZH1gfT5cbiAgICAgICAgPGEgaHJlZj0nJyBjbGFzc05hbWU9J2dyb3VwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGJnLWdyYXktMjAwIHJvdW5kZWQtM3hsIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZ3JvdXAtaG92ZXI6b3BhY2l0eS03NSBoLTcyJz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1nfSBhbHQ9e25hbWV9IGxheW91dD0nZmlsbCcgb2JqZWN0Rml0PSdjb3ZlcicgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J210LTQgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJz57bmFtZX08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtMSB0ZXh0LXNtIHRleHQtZ3JheS03MDAnPsKje3ByaWNlfTwvcD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU3VnZ2VzdGVkUHJvZHVjdHM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRpdGxlLCBwcm9kdWN0cyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LTJ4bCBteC1hdXRvIHB5LTE2IHB4LTQgc206cHktMjQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOCc+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgbWItNic+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOCc+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdDogSVByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgIG5hbWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICBpbWc9e3Byb2R1Y3QuaW1nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0ZWRQcm9kdWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SuggestedProducts.tsx\n");

/***/ })

});