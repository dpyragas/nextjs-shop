/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/women/all";
exports.ids = ["pages/api/women/all"];
exports.modules = {

/***/ "./db/init-db.ts":
/*!***********************!*\
  !*** ./db/init-db.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSingleton\": function() { return /* binding */ createSingleton; },\n/* harmony export */   \"getDB\": function() { return /* binding */ getDB; }\n/* harmony export */ });\n/* harmony import */ var pg_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg-promise */ \"pg-promise\");\n/* harmony import */ var pg_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg_promise__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction createSingleton(name, create) {\n  const s = Symbol.for(name);\n  let scope = global[s];\n\n  if (!scope) {\n    scope = _objectSpread({}, create());\n    global[s] = scope;\n  }\n\n  return scope;\n}\nconst pgp = pg_promise__WEBPACK_IMPORTED_MODULE_0___default()();\nfunction getDB() {\n  return createSingleton('db-scope', () => {\n    if (!process.env.DB_CONNECTION) throw new Error('Missing DB Connection String');\n    return {\n      db: pgp(process.env.DB_CONNECTION)\n    };\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRlbXBsYXRlLy4vZGIvaW5pdC1kYi50cz85MWFmIl0sIm5hbWVzIjpbImNyZWF0ZVNpbmdsZXRvbiIsIm5hbWUiLCJjcmVhdGUiLCJzIiwiU3ltYm9sIiwiZm9yIiwic2NvcGUiLCJnbG9iYWwiLCJwZ3AiLCJwZ0xpYiIsImdldERCIiwicHJvY2VzcyIsImVudiIsIkRCX0NPTk5FQ1RJT04iLCJFcnJvciIsImRiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxlQUFULENBQTRCQyxJQUE1QixFQUEwQ0MsTUFBMUMsRUFBOEQ7QUFDbkUsUUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0osSUFBWCxDQUFWO0FBQ0EsTUFBSUssS0FBSyxHQUFJQyxNQUFELENBQWdCSixDQUFoQixDQUFaOztBQUNBLE1BQUksQ0FBQ0csS0FBTCxFQUFZO0FBQ1ZBLFNBQUsscUJBQVFKLE1BQU0sRUFBZCxDQUFMO0FBQ0NLLFVBQUQsQ0FBZ0JKLENBQWhCLElBQXFCRyxLQUFyQjtBQUNEOztBQUNELFNBQU9BLEtBQVA7QUFDRDtBQUVELE1BQU1FLEdBQUcsR0FBR0MsaURBQUssRUFBakI7QUFNTyxTQUFTQyxLQUFULEdBQWlDO0FBQ3RDLFNBQU9WLGVBQWUsQ0FBaUIsVUFBakIsRUFBNkIsTUFBTTtBQUN2RCxRQUFJLENBQUNXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFqQixFQUNFLE1BQU0sSUFBSUMsS0FBSixDQUFVLDhCQUFWLENBQU47QUFDRixXQUFPO0FBQ0xDLFFBQUUsRUFBRVAsR0FBRyxDQUFDRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsYUFBYjtBQURGLEtBQVA7QUFHRCxHQU5xQixDQUF0QjtBQU9EIiwiZmlsZSI6Ii4vZGIvaW5pdC1kYi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwZ0xpYiBmcm9tICdwZy1wcm9taXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpbmdsZXRvbjxUPihuYW1lOiBzdHJpbmcsIGNyZWF0ZTogKCkgPT4gVCk6IFQge1xuICBjb25zdCBzID0gU3ltYm9sLmZvcihuYW1lKTtcbiAgbGV0IHNjb3BlID0gKGdsb2JhbCBhcyBhbnkpW3NdO1xuICBpZiAoIXNjb3BlKSB7XG4gICAgc2NvcGUgPSB7IC4uLmNyZWF0ZSgpIH07XG4gICAgKGdsb2JhbCBhcyBhbnkpW3NdID0gc2NvcGU7XG4gIH1cbiAgcmV0dXJuIHNjb3BlO1xufVxuXG5jb25zdCBwZ3AgPSBwZ0xpYigpO1xuXG5pbnRlcmZhY2UgSURhdGFiYXNlU2NvcGUge1xuICBkYjogcGdMaWIuSURhdGFiYXNlPGFueT47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREQigpOiBJRGF0YWJhc2VTY29wZSB7XG4gIHJldHVybiBjcmVhdGVTaW5nbGV0b248SURhdGFiYXNlU2NvcGU+KCdkYi1zY29wZScsICgpID0+IHtcbiAgICBpZiAoIXByb2Nlc3MuZW52LkRCX0NPTk5FQ1RJT04pXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgREIgQ29ubmVjdGlvbiBTdHJpbmcnKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGI6IHBncChwcm9jZXNzLmVudi5EQl9DT05ORUNUSU9OKSxcbiAgICB9O1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./db/init-db.ts\n");

/***/ }),

/***/ "./pages/api/women/all/index.ts":
/*!**************************************!*\
  !*** ./pages/api/women/all/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getAllProductsByCategory; }\n/* harmony export */ });\n/* harmony import */ var _db_init_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../db/init-db */ \"./db/init-db.ts\");\n\nasync function getAllProductsByCategory(req, res) {\n  const {\n    db\n  } = (0,_db_init_db__WEBPACK_IMPORTED_MODULE_0__.getDB)();\n  const result = await db.query('SELECT id,\"name\",gender,price, category, img FROM shop.products WHERE gender = $1', 'women');\n  res.status(200).json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRlbXBsYXRlLy4vcGFnZXMvYXBpL3dvbWVuL2FsbC9pbmRleC50cz8xMDQ1Il0sIm5hbWVzIjpbImdldEFsbFByb2R1Y3RzQnlDYXRlZ29yeSIsInJlcSIsInJlcyIsImRiIiwiZ2V0REIiLCJyZXN1bHQiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFFZSxlQUFlQSx3QkFBZixDQUNiQyxHQURhLEVBRWJDLEdBRmEsRUFHYjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFTQyxrREFBSyxFQUFwQjtBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNRixFQUFFLENBQUNHLEtBQUgsQ0FDbkIsbUZBRG1CLEVBRW5CLE9BRm1CLENBQXJCO0FBSUFKLEtBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxNQUFyQjtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3dvbWVuL2FsbC9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZ2V0REIgfSBmcm9tICcuLi8uLi8uLi8uLi9kYi9pbml0LWRiJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUHJvZHVjdHNCeUNhdGVnb3J5KFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IHsgZGIgfSA9IGdldERCKCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIucXVlcnkoXG4gICAgJ1NFTEVDVCBpZCxcIm5hbWVcIixnZW5kZXIscHJpY2UsIGNhdGVnb3J5LCBpbWcgRlJPTSBzaG9wLnByb2R1Y3RzIFdIRVJFIGdlbmRlciA9ICQxJyxcbiAgICAnd29tZW4nXG4gICk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/women/all/index.ts\n");

/***/ }),

/***/ "pg-promise":
/*!*****************************!*\
  !*** external "pg-promise" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("pg-promise");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/women/all/index.ts"));
module.exports = __webpack_exports__;

})();