/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_dom_Desktop_shop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_dom_Desktop_shop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_dom_Desktop_shop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_dom_Desktop_shop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.tsx\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/index.js\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Hero */ \"./components/Hero.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/dom/Desktop/shop/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(12),\n      slice = _useState2[0],\n      setSlice = _useState2[1]; //Shuffle the products for the main page\n\n\n  function shuffle(a) {\n    for (var i = a.length - 1; i > 0; i--) {\n      var j = Math.floor(Math.random() * (i + 1));\n      var _ref = [a[j], a[i]];\n      a[i] = _ref[0];\n      a[j] = _ref[1];\n    }\n\n    return a;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var fetchProducts = /*#__PURE__*/function () {\n      var _ref2 = (0,_Users_dom_Desktop_shop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_dom_Desktop_shop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var res, shuffledRes;\n        return _Users_dom_Desktop_shop_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"http://\".concat(\"localhost:3000\", \"/api/all\"));\n\n              case 2:\n                _context.next = 4;\n                return _context.sent.json();\n\n              case 4:\n                res = _context.sent;\n                shuffledRes = shuffle(res);\n                setProducts(shuffledRes);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchProducts() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchProducts();\n  }, []);\n\n  var handleLoadMore = function handleLoadMore() {\n    setSlice(slice + 12);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"text-3xl\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), products ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_4__.default, {\n      products: products.slice(0, 8),\n      title: \"Featured Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex items-center justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__.default, {\n        type: \"ThreeDots\",\n        color: \"black\",\n        height: 100,\n        width: 100,\n        timeout: 3000 //3 secs\n\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"FNiLKNDJ0/4kejZ8BPvqFGaWKb0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInNsaWNlIiwic2V0U2xpY2UiLCJzaHVmZmxlIiwiYSIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0cyIsImZldGNoIiwicHJvY2VzcyIsImpzb24iLCJyZXMiLCJzaHVmZmxlZFJlcyIsImhhbmRsZUxvYWRNb3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0dDLCtDQUFRLENBQWEsRUFBYixDQURYO0FBQUEsTUFDdEJDLFFBRHNCO0FBQUEsTUFDWkMsV0FEWTs7QUFBQSxtQkFHSEYsK0NBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUd0QkcsS0FIc0I7QUFBQSxNQUdmQyxRQUhlLGtCQUk3Qjs7O0FBQ0EsV0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBeUI7QUFDdkIsU0FBSyxJQUFJQyxDQUFDLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixHQUFXLENBQXhCLEVBQTJCRCxDQUFDLEdBQUcsQ0FBL0IsRUFBa0NBLENBQUMsRUFBbkMsRUFBdUM7QUFDckMsVUFBTUUsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCTCxDQUFDLEdBQUcsQ0FBckIsQ0FBWCxDQUFWO0FBRHFDLGlCQUV0QixDQUFDRCxDQUFDLENBQUNHLENBQUQsQ0FBRixFQUFPSCxDQUFDLENBQUNDLENBQUQsQ0FBUixDQUZzQjtBQUVwQ0QsT0FBQyxDQUFDQyxDQUFELENBRm1DO0FBRTlCRCxPQUFDLENBQUNHLENBQUQsQ0FGNkI7QUFHdEM7O0FBQ0QsV0FBT0gsQ0FBUDtBQUNEOztBQUVETyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxhQUFhO0FBQUEsb1FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFWkMsS0FBSyxrQkFBV0MsZ0JBQVgsY0FGTzs7QUFBQTtBQUFBO0FBQUEscUNBR2xCQyxJQUhrQjs7QUFBQTtBQUNkQyxtQkFEYztBQUlkQywyQkFKYyxHQUlBZCxPQUFPLENBQUNhLEdBQUQsQ0FKUDtBQUtwQmhCLDJCQUFXLENBQUNpQixXQUFELENBQVg7O0FBTG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWJMLGFBQWE7QUFBQTtBQUFBO0FBQUEsT0FBbkI7O0FBUUFBLGlCQUFhO0FBQ2QsR0FWUSxFQVVOLEVBVk0sQ0FBVDs7QUFXQSxNQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JoQixZQUFRLENBQUNELEtBQUssR0FBRyxFQUFULENBQVI7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSw0QkFDRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0YsUUFBUSxnQkFDUCw4REFBQyw0REFBRDtBQUNFLGNBQVEsRUFBRUEsUUFBUSxDQUFDRSxLQUFULENBQWUsQ0FBZixFQUFrQixDQUFsQixDQURaO0FBRUUsV0FBSyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURPLGdCQU1QO0FBQUssZUFBUyxFQUFDLGtDQUFmO0FBQUEsNkJBQ0UsOERBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUMsV0FEUDtBQUVFLGFBQUssRUFBQyxPQUZSO0FBR0UsY0FBTSxFQUFFLEdBSFY7QUFJRSxhQUFLLEVBQUUsR0FKVDtBQUtFLGVBQU8sRUFBRSxJQUxYLENBS2lCOztBQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQWxEdUJKLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxJUHJvZHVjdFtdPihbXSk7XG5cbiAgY29uc3QgW3NsaWNlLCBzZXRTbGljZV0gPSB1c2VTdGF0ZSgxMik7XG4gIC8vU2h1ZmZsZSB0aGUgcHJvZHVjdHMgZm9yIHRoZSBtYWluIHBhZ2VcbiAgZnVuY3Rpb24gc2h1ZmZsZShhOiBhbnkpIHtcbiAgICBmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICBbYVtpXSwgYVtqXV0gPSBbYVtqXSwgYVtpXV07XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgKFxuICAgICAgICBhd2FpdCBmZXRjaChgaHR0cDovLyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVkVSQ0VMX1VSTH0vYXBpL2FsbGApXG4gICAgICApLmpzb24oKTtcbiAgICAgIGNvbnN0IHNodWZmbGVkUmVzID0gc2h1ZmZsZShyZXMpO1xuICAgICAgc2V0UHJvZHVjdHMoc2h1ZmZsZWRSZXMpO1xuICAgIH07XG5cbiAgICBmZXRjaFByb2R1Y3RzKCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlTG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgc2V0U2xpY2Uoc2xpY2UgKyAxMik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC0zeGwnPlxuICAgICAgPEhlcm8gLz5cbiAgICAgIHtwcm9kdWN0cyA/IChcbiAgICAgICAgPFByb2R1Y3RMaXN0XG4gICAgICAgICAgcHJvZHVjdHM9e3Byb2R1Y3RzLnNsaWNlKDAsIDgpfVxuICAgICAgICAgIHRpdGxlPSdGZWF0dXJlZCBQcm9kdWN0cydcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgPExvYWRlclxuICAgICAgICAgICAgdHlwZT0nVGhyZWVEb3RzJ1xuICAgICAgICAgICAgY29sb3I9J2JsYWNrJ1xuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgdGltZW91dD17MzAwMH0gLy8zIHNlY3NcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7LyogPFBhZ2luYXRpb24gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9IC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});