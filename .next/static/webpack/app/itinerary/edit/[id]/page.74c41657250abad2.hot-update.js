/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/itinerary/edit/[id]/page",{

/***/ "(app-pages-browser)/./app/itinerary/edit/[id]/page.js":
/*!*****************************************!*\
  !*** ./app/itinerary/edit/[id]/page.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditItineraryPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var components_DragDropEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/DragDropEditor */ \"(app-pages-browser)/./components/DragDropEditor.jsx\");\n/* harmony import */ var components_DragDropEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_DragDropEditor__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction EditItineraryPage() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [itinerary, setItinerary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const stored = JSON.parse(localStorage.getItem(id) || \"{}\");\n        if (!stored.destination) {\n            setItinerary(null);\n        } else {\n            setItinerary(stored);\n        }\n    }, [\n        id\n    ]);\n    if (!itinerary) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"p-4\",\n            children: \"No itinerary found. Please generate one first!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kkama\\\\OneDrive\\\\Desktop\\\\smart_travel\\\\app\\\\itinerary\\\\edit\\\\[id]\\\\page.js\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-3xl mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: [\n                    \"Edit Itinerary for \",\n                    itinerary.destination\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kkama\\\\OneDrive\\\\Desktop\\\\smart_travel\\\\app\\\\itinerary\\\\edit\\\\[id]\\\\page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((components_DragDropEditor__WEBPACK_IMPORTED_MODULE_3___default()), {\n                itineraryId: id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kkama\\\\OneDrive\\\\Desktop\\\\smart_travel\\\\app\\\\itinerary\\\\edit\\\\[id]\\\\page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kkama\\\\OneDrive\\\\Desktop\\\\smart_travel\\\\app\\\\itinerary\\\\edit\\\\[id]\\\\page.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(EditItineraryPage, \"O4+kGwexRHdsFMzrXuh92Cs2cDQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = EditItineraryPage;\nvar _c;\n$RefreshReg$(_c, \"EditItineraryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9pdGluZXJhcnkvZWRpdC9baWRdL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0E7QUFDVztBQUV4QyxTQUFTSTs7SUFDdEIsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR0gsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxTQUFTQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQ1AsT0FBTztRQUN0RCxJQUFJLENBQUNHLE9BQU9LLFdBQVcsRUFBRTtZQUN2Qk4sYUFBYTtRQUNmLE9BQU87WUFDTEEsYUFBYUM7UUFDZjtJQUNGLEdBQUc7UUFBQ0g7S0FBRztJQUVQLElBQUksQ0FBQ0MsV0FBVztRQUNkLHFCQUFPLDhEQUFDUTtZQUFFQyxXQUFVO3NCQUFNOzs7Ozs7SUFDNUI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUQsV0FBVTs7MEJBQ2IsOERBQUNFO2dCQUFHRixXQUFVOztvQkFBMEI7b0JBQW9CVCxVQUFVTyxXQUFXOzs7Ozs7OzBCQUNqRiw4REFBQ1Ysa0VBQWNBO2dCQUFDZSxhQUFhYjs7Ozs7Ozs7Ozs7O0FBR25DO0dBdkJ3QkQ7O1FBQ1BGLHNEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9pdGluZXJhcnkvZWRpdC9baWRdL3BhZ2UuanM/ODE5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBEcmFnRHJvcEVkaXRvciBmcm9tICdjb21wb25lbnRzL0RyYWdEcm9wRWRpdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRJdGluZXJhcnlQYWdlKCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IFtpdGluZXJhcnksIHNldEl0aW5lcmFyeV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpIHx8ICd7fScpO1xyXG4gICAgaWYgKCFzdG9yZWQuZGVzdGluYXRpb24pIHtcclxuICAgICAgc2V0SXRpbmVyYXJ5KG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXRpbmVyYXJ5KHN0b3JlZCk7XHJcbiAgICB9XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGlmICghaXRpbmVyYXJ5KSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwicC00XCI+Tm8gaXRpbmVyYXJ5IGZvdW5kLiBQbGVhc2UgZ2VuZXJhdGUgb25lIGZpcnN0ITwvcD47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byBwLTRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+RWRpdCBJdGluZXJhcnkgZm9yIHtpdGluZXJhcnkuZGVzdGluYXRpb259PC9oMT5cclxuICAgICAgPERyYWdEcm9wRWRpdG9yIGl0aW5lcmFyeUlkPXtpZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiRHJhZ0Ryb3BFZGl0b3IiLCJFZGl0SXRpbmVyYXJ5UGFnZSIsImlkIiwiaXRpbmVyYXJ5Iiwic2V0SXRpbmVyYXJ5Iiwic3RvcmVkIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlc3RpbmF0aW9uIiwicCIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiaXRpbmVyYXJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/itinerary/edit/[id]/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/DragDropEditor.jsx":
/*!***************************************!*\
  !*** ./components/DragDropEditor.jsx ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});