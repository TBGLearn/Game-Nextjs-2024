"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/games/[page]",{

/***/ "./src/components/Games/AllGame/index.js":
/*!***********************************************!*\
  !*** ./src/components/Games/AllGame/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllGame; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Games/styles.module.css */ \"./src/components/Games/styles.module.css\");\n/* harmony import */ var _Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// components/AllGame.js\n\n\n\n\nfunction AllGame(param) {\n    let { data, pageActive, pageQuantity, onClickPage, onPreviousPage, onNextPage } = param;\n    const getVisiblePages = ()=>{\n        const visiblePages = [];\n        const startPage = Math.max(0, pageActive - 2);\n        const endPage = Math.min(pageQuantity - 1, pageActive + 2);\n        for(let i = startPage; i <= endPage; i++){\n            visiblePages.push(i);\n        }\n        return visiblePages;\n    };\n    const visiblePages = getVisiblePages();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n                children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().product_list),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\".concat(item.slug, \"/\").concat(item.game_id),\n                            style: {\n                                textDecoration: \"none\",\n                                color: \"black\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().product_item),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().product_image),\n                                        children: item.assets.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"\".concat(item.img_path).concat(item.assets[0].name),\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: (_Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().product_title),\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"Pagination_pagination__7R_fc\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"pagination-button prev-button disabled\",\n                        onClick: onPreviousPage,\n                        style: {\n                            backgroundColor: \"red\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            viewBox: \"0 0 24 24\",\n                            fill: \"currentColor\",\n                            \"aria-hidden\": \"true\",\n                            \"data-slot\": \"icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                            lineNumber: 68,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"number-buttons\",\n                        children: visiblePages.map((index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: ()=>onClickPage(index),\n                                className: \"\".concat(index === pageActive ? (_Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\", \" \").concat((_Games_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().paginationItem)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: index + 1\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"pagination-button next-button \",\n                        onClick: onNextPage,\n                        style: {\n                            backgroundColor: \"blue\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            viewBox: \"0 0 24 24\",\n                            fill: \"currentColor\",\n                            \"aria-hidden\": \"true\",\n                            \"data-slot\": \"icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                fillRule: \"evenodd\",\n                                d: \"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z\",\n                                clipRule: \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                            lineNumber: 98,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                        lineNumber: 93,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\components\\\\Games\\\\AllGame\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = AllGame;\nvar _c;\n$RefreshReg$(_c, \"AllGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lcy9BbGxHYW1lL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOztBQUNFO0FBQ0c7QUFDc0I7QUFDcEMsU0FBU0csUUFBUSxLQUEyRTtRQUEzRSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBRUMsVUFBVSxFQUFFLEdBQTNFO0lBQzVCLE1BQU1DLGtCQUFrQjtRQUNwQixNQUFNQyxlQUFlLEVBQUU7UUFDdkIsTUFBTUMsWUFBWUMsS0FBS0MsR0FBRyxDQUFDLEdBQUdULGFBQWE7UUFDM0MsTUFBTVUsVUFBVUYsS0FBS0csR0FBRyxDQUFDVixlQUFlLEdBQUdELGFBQWE7UUFFeEQsSUFBSyxJQUFJWSxJQUFJTCxXQUFXSyxLQUFLRixTQUFTRSxJQUFLO1lBQ3pDTixhQUFhTyxJQUFJLENBQUNEO1FBQ3BCO1FBRUEsT0FBT047SUFDVDtJQUVBLE1BQU1BLGVBQWVEO0lBRXpCLHFCQUNFOzswQkFDRSw4REFBQ1M7Z0JBQUlDLFdBQVdsQixzRUFBVzswQkFDeEJFLEtBQUtrQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNMO3dCQUFnQkMsV0FBV2xCLDhFQUFtQjtrQ0FDN0MsNEVBQUNELGtEQUFJQTs0QkFBQ3lCLE1BQU0sR0FBZ0JILE9BQWJBLEtBQUtJLElBQUksRUFBQyxLQUFnQixPQUFiSixLQUFLSyxPQUFPOzRCQUFJQyxPQUFPO2dDQUFFQyxnQkFBZ0I7Z0NBQVNDLE9BQVE7NEJBQVE7c0NBQzVGLDRFQUFDWjtnQ0FBSUMsV0FBV2xCLDhFQUFtQjs7a0RBQ2pDLDhEQUFDaUI7d0NBQUlDLFdBQVdsQiwrRUFBb0I7a0RBQ2pDcUIsS0FBS1csTUFBTSxDQUFDQyxNQUFNLEdBQUcsbUJBQ3BCLDhEQUFDQzs0Q0FBSUMsS0FBSyxHQUFtQmQsT0FBaEJBLEtBQUtlLFFBQVEsRUFBdUIsT0FBcEJmLEtBQUtXLE1BQU0sQ0FBQyxFQUFFLENBQUNLLElBQUk7NENBQUlDLEtBQUk7Ozs7Ozs7Ozs7O2tEQUc1RCw4REFBQ0M7d0NBQUdyQixXQUFXbEIsK0VBQW9CO2tEQUFHcUIsS0FBS29CLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQVI1Q25COzs7Ozs7Ozs7OzBCQXVDZCw4REFBQ0w7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDd0I7d0JBQUV4QixXQUFVO3dCQUNUeUIsU0FBU3JDO3dCQUNUcUIsT0FBTzs0QkFBQ2lCLGlCQUFpQjt3QkFBSztrQ0FFaEMsNEVBQUNDOzRCQUNDQyxPQUFNOzRCQUNOQyxTQUFROzRCQUNSQyxNQUFLOzRCQUNMQyxlQUFZOzRCQUNaQyxhQUFVO3NDQUVWLDRFQUFDQztnQ0FDQ0MsVUFBUztnQ0FDVEMsR0FBRTtnQ0FDRkMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJZiw4REFBQ0M7d0JBQUdyQyxXQUFVO2tDQUNiVCxhQUFhVyxHQUFHLENBQUMsQ0FBQ0Usc0JBQ2IsOERBQUNrQztnQ0FFQ2IsU0FBUyxJQUFNdEMsWUFBWWlCO2dDQUMzQkosV0FBVyxHQUFnRGxCLE9BQTdDc0IsVUFBVW5CLGFBQWFILHdFQUFhLEdBQUcsSUFBRyxLQUF5QixPQUF0QkEsZ0ZBQXFCOzBDQUVoRiw0RUFBQzJEOzhDQUFRckMsUUFBUTs7Ozs7OytCQUpaQTs7Ozs7Ozs7OztrQ0FRYiw4REFBQ29CO3dCQUFFeEIsV0FBVTt3QkFDWHlCLFNBQVNwQzt3QkFDVG9CLE9BQU87NEJBQUNpQixpQkFBaUI7d0JBQU07a0NBRy9CLDRFQUFDQzs0QkFDQ0MsT0FBTTs0QkFDTkMsU0FBUTs0QkFDUkMsTUFBSzs0QkFDTEMsZUFBWTs0QkFDWkMsYUFBVTtzQ0FFViw0RUFBQ0M7Z0NBQ0NDLFVBQVM7Z0NBQ1RDLEdBQUU7Z0NBQ0ZDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtLQTlHd0JyRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lcy9BbGxHYW1lL2luZGV4LmpzP2NkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9BbGxHYW1lLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vR2FtZXMvc3R5bGVzLm1vZHVsZS5jc3MnOyBcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsR2FtZSh7IGRhdGEsIHBhZ2VBY3RpdmUsIHBhZ2VRdWFudGl0eSwgb25DbGlja1BhZ2UsIG9uUHJldmlvdXNQYWdlLCBvbk5leHRQYWdlIH0pIHtcclxuICAgIGNvbnN0IGdldFZpc2libGVQYWdlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB2aXNpYmxlUGFnZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBzdGFydFBhZ2UgPSBNYXRoLm1heCgwLCBwYWdlQWN0aXZlIC0gMik7XHJcbiAgICAgICAgY29uc3QgZW5kUGFnZSA9IE1hdGgubWluKHBhZ2VRdWFudGl0eSAtIDEsIHBhZ2VBY3RpdmUgKyAyKTtcclxuICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPD0gZW5kUGFnZTsgaSsrKSB7XHJcbiAgICAgICAgICB2aXNpYmxlUGFnZXMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdmlzaWJsZVBhZ2VzO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IHZpc2libGVQYWdlcyA9IGdldFZpc2libGVQYWdlcygpO1xyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X2xpc3R9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgJHtpdGVtLnNsdWd9LyR7aXRlbS5nYW1lX2lkfWB9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgLCBjb2xvciA6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfaXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5hc3NldHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2l0ZW0uaW1nX3BhdGh9JHtpdGVtLmFzc2V0c1swXS5uYW1lfWB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0X3RpdGxlfT57aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlBhZ2luYXRpb259PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9uTGlzdH0+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgb25DbGljaz17b25QcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGFnZUFjdGl2ZSA9PT0gMCA/IHN0eWxlcy5kaXNhYmxlZCA6ICcnfSAke3N0eWxlcy5wYWdpbmF0aW9uSXRlbX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnByZXZCdXR0b259PsKrPC9idXR0b24+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAge3Zpc2libGVQYWdlcy5tYXAoKGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja1BhZ2UoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5kZXggPT09IHBhZ2VBY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogJyd9ICR7c3R5bGVzLnBhZ2luYXRpb25JdGVtfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YnV0dG9uPntpbmRleCArIDF9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk5leHRQYWdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3BhZ2VBY3RpdmUgPT09IHBhZ2VRdWFudGl0eSAtIDEgPyBzdHlsZXMuZGlzYWJsZWQgOiAnJ30gJHtzdHlsZXMucGFnaW5hdGlvbkl0ZW19YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0QnV0dG9ufT7CuzwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFnaW5hdGlvbl9wYWdpbmF0aW9uX183Ul9mY1wiPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWJ1dHRvbiBwcmV2LWJ1dHRvbiBkaXNhYmxlZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtvblByZXZpb3VzUGFnZX1cclxuICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInJlZFwifX1cclxuICAgICAgICAgID5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgZGF0YS1zbG90PVwiaWNvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgZD1cIk03LjcyIDEyLjUzYS43NS43NSAwIDAgMSAwLTEuMDZsNy41LTcuNWEuNzUuNzUgMCAxIDEgMS4wNiAxLjA2TDkuMzEgMTJsNi45NyA2Ljk3YS43NS43NSAwIDEgMS0xLjA2IDEuMDZsLTcuNS03LjVaXCJcclxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm51bWJlci1idXR0b25zXCI+XHJcbiAgICAgIHt2aXNpYmxlUGFnZXMubWFwKChpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tQYWdlKGluZGV4KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2luZGV4ID09PSBwYWdlQWN0aXZlID8gc3R5bGVzLmFjdGl2ZSA6ICcnfSAke3N0eWxlcy5wYWdpbmF0aW9uSXRlbX1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj57aW5kZXggKyAxfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tYnV0dG9uIG5leHQtYnV0dG9uIFwiXHJcbiAgICAgICAgb25DbGljaz17b25OZXh0UGFnZX1cclxuICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJibHVlXCJ9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICBcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgZGF0YS1zbG90PVwiaWNvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgZD1cIk0xNi4yOCAxMS40N2EuNzUuNzUgMCAwIDEgMCAxLjA2bC03LjUgNy41YS43NS43NSAwIDAgMS0xLjA2LTEuMDZMMTQuNjkgMTIgNy43MiA1LjAzYS43NS43NSAwIDAgMSAxLjA2LTEuMDZsNy41IDcuNVpcIlxyXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJzdHlsZXMiLCJBbGxHYW1lIiwiZGF0YSIsInBhZ2VBY3RpdmUiLCJwYWdlUXVhbnRpdHkiLCJvbkNsaWNrUGFnZSIsIm9uUHJldmlvdXNQYWdlIiwib25OZXh0UGFnZSIsImdldFZpc2libGVQYWdlcyIsInZpc2libGVQYWdlcyIsInN0YXJ0UGFnZSIsIk1hdGgiLCJtYXgiLCJlbmRQYWdlIiwibWluIiwiaSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJncmlkIiwibWFwIiwiaXRlbSIsImluZGV4IiwicHJvZHVjdF9saXN0IiwiaHJlZiIsInNsdWciLCJnYW1lX2lkIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwicHJvZHVjdF9pdGVtIiwicHJvZHVjdF9pbWFnZSIsImFzc2V0cyIsImxlbmd0aCIsImltZyIsInNyYyIsImltZ19wYXRoIiwibmFtZSIsImFsdCIsImgzIiwicHJvZHVjdF90aXRsZSIsInRpdGxlIiwiYSIsIm9uQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwiYXJpYS1oaWRkZW4iLCJkYXRhLXNsb3QiLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJ1bCIsImxpIiwiYWN0aXZlIiwicGFnaW5hdGlvbkl0ZW0iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Games/AllGame/index.js\n"));

/***/ })

});