"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[category]",{

/***/ "./src/layouts/Header.js":
/*!*******************************!*\
  !*** ./src/layouts/Header.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HeaderStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderStyle.css */ \"./src/layouts/HeaderStyle.css\");\n/* harmony import */ var _HeaderStyle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HeaderStyle_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import the new CSS file\n\nfunction Header() {\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Chỉ gọi fetch khi searchQuery có giá trị\n        if (searchQuery.trim() !== \"\") {\n            console.log(searchQuery);\n            const url = \"https://game.tbg95.com/api/game-search?q=\".concat(encodeURIComponent(searchQuery));\n            console.log(url);\n            fetch(\"https://game.tbg95.com/api/game-search?q=\".concat(encodeURIComponent(searchQuery))).then((res)=>res.json()).then((data)=>{\n                setGame(data.data);\n                console.log(data.data);\n            }).catch((error)=>{\n                console.error(\"Error fetching games:\", error);\n                setGame([]); // Xử lý lỗi bằng cách đặt setGame rỗng để không hiển thị danh sách\n            });\n        } else {\n            setGame([]); // Nếu searchQuery rỗng, đặt lại danh sách game rỗng\n        }\n    }, [\n        searchQuery\n    ]);\n    const handleSearchChange = (e)=>{\n        setSearchQuery(e.target.value);\n    };\n    const filteredGames = game.filter((game)=>searchQuery.toLowerCase());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"header\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"home-button\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 47,\n                        columnNumber: 14\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search for a game...\",\n                        value: searchQuery,\n                        onChange: handleSearchChange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: searchQuery && (filteredGames.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: filteredGames.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    style: {\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        margin: \"10px 0\"\n                                    },\n                                    onClick: ()=>window.location.href = \"/games/\".concat(game.slug, \"/\").concat(game.game_id),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"\".concat(game.img_path).concat(game.assets[0].name),\n                                            style: {\n                                                width: \"50px\",\n                                                height: \"auto\",\n                                                marginRight: \"10px\"\n                                            },\n                                            alt: \"Game\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        game.title\n                                    ]\n                                }, game.game_id, true, {\n                                    fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No games found\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 72,\n                            columnNumber: 15\n                        }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/games\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"login-button\",\n                            children: \"Games\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"f+kAqH8YcSnw4GqYrZupCEP/aWw=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV5QztBQUNSO0FBQ04sQ0FBQywwQkFBMEI7QUFDekI7QUFFN0IsU0FBU0k7O0lBQ1AsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ0ssTUFBT0MsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBR3BDRCxnREFBU0EsQ0FBQztRQUNSLDJDQUEyQztRQUMzQyxJQUFJSSxZQUFZSSxJQUFJLE9BQU8sSUFBSTtZQUM3QkMsUUFBUUMsR0FBRyxDQUFDTjtZQUNaLE1BQU1PLE1BQU0sNENBQTRFLE9BQWhDQyxtQkFBbUJSO1lBQzNFSyxRQUFRQyxHQUFHLENBQUNDO1lBQ1pFLE1BQU0sNENBQTRFLE9BQWhDRCxtQkFBbUJSLGVBQ2xFVSxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUE7Z0JBQ0pWLFFBQVFVLEtBQUtBLElBQUk7Z0JBQ2pCUixRQUFRQyxHQUFHLENBQUNPLEtBQUtBLElBQUk7WUFDdkIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQTtnQkFDTFYsUUFBUVUsS0FBSyxDQUFDLHlCQUF5QkE7Z0JBQ3ZDWixRQUFRLEVBQUUsR0FBRyxtRUFBbUU7WUFDbEY7UUFDSixPQUFPO1lBQ0xBLFFBQVEsRUFBRSxHQUFHLG9EQUFvRDtRQUNuRTtJQUNGLEdBQUc7UUFBQ0g7S0FBWTtJQUVoQixNQUFNZ0IscUJBQXFCLENBQUNDO1FBQzFCaEIsZUFBZWdCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQjtJQUVBLE1BQU1DLGdCQUFnQmxCLEtBQUttQixNQUFNLENBQUNuQixDQUFBQSxPQUFRRixZQUFZc0IsV0FBVztJQUtqRSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBT0MsV0FBVTtzQkFDaEIsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDViw4REFBQzFCLGtEQUFJQTt3QkFBQzRCLE1BQU07a0NBQ2YsNEVBQUNDOzRCQUFPSCxXQUFVO3NDQUFlOzs7Ozs7Ozs7OztrQ0FHM0IsOERBQUNJO3dCQUNIQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaWCxPQUFPbkI7d0JBQ1ArQixVQUFVZjs7Ozs7O2tDQUVkLDhEQUFDUztrQ0FDQXpCLGVBQWdCb0IsQ0FBQUEsY0FBY1ksTUFBTSxHQUFHLGtCQUNwQyw4REFBQ0M7c0NBQ0ViLGNBQWNjLEdBQUcsQ0FBQyxDQUFDaEMscUJBQ2xCLDhEQUFDeUI7b0NBQ0RRLE9BQU87d0NBQUVDLFNBQVM7d0NBQVFDLFlBQVk7d0NBQVVDLFFBQVE7b0NBQVM7b0NBQ2pFQyxTQUFTLElBQU1DLE9BQU9DLFFBQVEsQ0FBQ2YsSUFBSSxHQUFHLFVBQXVCeEIsT0FBYkEsS0FBS3dDLElBQUksRUFBQyxLQUFnQixPQUFieEMsS0FBS3lDLE9BQU87O3NEQUczRSw4REFBQ0M7NENBQUlDLEtBQUssR0FBbUIzQyxPQUFoQkEsS0FBSzRDLFFBQVEsRUFBdUIsT0FBcEI1QyxLQUFLNkMsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTs0Q0FBS2IsT0FBTztnREFBRWMsT0FBTztnREFBUUMsUUFBUTtnREFBUUMsYUFBYTs0Q0FBTzs0Q0FBR0MsS0FBSTs7Ozs7O3dDQUN2SGxELEtBQUttRCxLQUFLOzttQ0FISm5ELEtBQUt5QyxPQUFPOzs7Ozs7Ozs7aURBUXJCLDhEQUFDVztzQ0FBRTs7Ozs7Z0NBQ0w7Ozs7OztrQ0FFRiw4REFBQ3hELGtEQUFJQTt3QkFBQzRCLE1BQU07a0NBQ1osNEVBQUNDOzRCQUFPSCxXQUFVO3NDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SDVDO0dBaE1TekI7S0FBQUE7QUFrTVQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvSGVhZGVyLmpzPzkxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgXCIuL0hlYWRlclN0eWxlLmNzc1wiOyAvLyBJbXBvcnQgdGhlIG5ldyBDU1MgZmlsZVxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtnYW1lICwgc2V0R2FtZV0gPSB1c2VTdGF0ZShbXSlcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDaOG7iSBn4buNaSBmZXRjaCBraGkgc2VhcmNoUXVlcnkgY8OzIGdpw6EgdHLhu4tcclxuICAgIGlmIChzZWFyY2hRdWVyeS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFF1ZXJ5KVxyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9nYW1lLnRiZzk1LmNvbS9hcGkvZ2FtZS1zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hRdWVyeSl9YFxyXG4gICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgIGZldGNoKGBodHRwczovL2dhbWUudGJnOTUuY29tL2FwaS9nYW1lLXNlYXJjaD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaFF1ZXJ5KX1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgc2V0R2FtZShkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBnYW1lczonLCBlcnJvcik7XHJcbiAgICAgICAgICBzZXRHYW1lKFtdKTsgLy8gWOG7rSBsw70gbOG7l2kgYuG6sW5nIGPDoWNoIMSR4bq3dCBzZXRHYW1lIHLhu5duZyDEkeG7gyBraMO0bmcgaGnhu4NuIHRo4buLIGRhbmggc8OhY2hcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEdhbWUoW10pOyAvLyBO4bq/dSBzZWFyY2hRdWVyeSBy4buXbmcsIMSR4bq3dCBs4bqhaSBkYW5oIHPDoWNoIGdhbWUgcuG7l25nXHJcbiAgICB9XHJcbiAgfSwgW3NlYXJjaFF1ZXJ5XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRHYW1lcyA9IGdhbWUuZmlsdGVyKGdhbWUgPT4oc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWUtYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICBIb21lPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgZ2FtZS4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3NlYXJjaFF1ZXJ5ICYmIChmaWx0ZXJlZEdhbWVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkR2FtZXMubWFwKChnYW1lKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCcgfX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2dhbWVzLyR7Z2FtZS5zbHVnfS8ke2dhbWUuZ2FtZV9pZH1gfSBcclxuICAgICAgICAgICAgICAgICAga2V5PXtnYW1lLmdhbWVfaWR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7Z2FtZS5pbWdfcGF0aH0ke2dhbWUuYXNzZXRzWzBdLm5hbWV9YH0gIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGhlaWdodDogJ2F1dG8nLCBtYXJnaW5SaWdodDogJzEwcHgnIH19IGFsdD1cIkdhbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAge2dhbWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxwPk5vIGdhbWVzIGZvdW5kPC9wPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17Jy9nYW1lcyd9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbi1idXR0b25cIiA+XHJcbiAgICAgICAgICAgIEdhbWVzPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICB7LyogPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJfaGVhZGVyX19yajBDNyAgXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLXgtMlwiPlxyXG4gICAgPGEgY2xhc3NOYW1lPVwiei0xMCBiYXNpcy0wXCIgaHJlZj1cIi9cIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGFsdD1cIkdhbWUgRGlzdHJpYnV0aW9uXCJcclxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgd2lkdGg9ezE2M31cclxuICAgICAgICBoZWlnaHQ9ezB9XHJcbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXHJcbiAgICAgICAgZGF0YS1uaW1nPXsxfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC1zbTpoaWRkZW4gbWF4LXctbm9uZVwiXHJcbiAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb2dvcy9sb2dvLTJsaW5lLnN2Z1wiXHJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwidHJhbnNwYXJlbnRcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgYWx0PVwiR2FtZSBEaXN0cmlidXRpb25cIlxyXG4gICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcclxuICAgICAgICBkYXRhLW5pbWc9ezF9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic206aGlkZGVuIG1heC13LW5vbmVcIlxyXG4gICAgICAgIHNyYz1cIi9hc3NldHMvbG9nb3MvbG9nby1tYXJrLnN2Z1wiXHJcbiAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwidHJhbnNwYXJlbnRcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9hPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1heC1sZzpnYXAtNCBsZzpnYXAtMTQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBcIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJcIiBocmVmPVwiL2dhbWVzL1wiPlxyXG4gICAgICAgICAgR2FtZXNcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIEZvciBCdXNpbmVzc1xyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICBkYXRhLXNsb3Q9XCJpY29uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTIuNTMgMTYuMjhhLjc1Ljc1IDAgMCAxLTEuMDYgMGwtNy41LTcuNWEuNzUuNzUgMCAwIDEgMS4wNi0xLjA2TDEyIDE0LjY5bDYuOTctNi45N2EuNzUuNzUgMCAxIDEgMS4wNiAxLjA2bC03LjUgNy41WlwiXHJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJibGFua1wiIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCJodHRwczovL2Jsb2cuZ2FtZWRpc3RyaWJ1dGlvbi5jb21cIj5cclxuICAgICAgICAgIE5ld3NcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCIgaHJlZj1cIi9zdXBwb3J0L1wiPlxyXG4gICAgICAgICAgU3VwcG9ydFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX3NlYXJjaEdhbWVfX2p2VUtIXCIgZGF0YS1oZWFkbGVzc3VpLXN0YXRlPVwiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3ggXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxyXG4gICAgICAgICAgICBpZD1cImhlYWRsZXNzdWktY29tYm9ib3gtaW5wdXQtOnIxOlwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJjb21ib2JveFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcclxuICAgICAgICAgICAgZGF0YS1oZWFkbGVzc3VpLXN0YXRlPVwiXCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgIGRhdGEtc2xvdD1cImljb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgZD1cIk0xMC41IDMuNzVhNi43NSA2Ljc1IDAgMSAwIDAgMTMuNSA2Ljc1IDYuNzUgMCAwIDAgMC0xMy41Wk0yLjI1IDEwLjVhOC4yNSA4LjI1IDAgMSAxIDE0LjU5IDUuMjhsNC42OSA0LjY5YS43NS43NSAwIDEgMS0xLjA2IDEuMDZsLTQuNjktNC42OUE4LjI1IDguMjUgMCAwIDEgMi4yNSAxMC41WlwiXHJcbiAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbnNfYnV0dG9uX19nRFZaaiBidXR0b25QcmltYXJ5IGxvZ2luLWJ1dHRvbiBcIlxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgIGRhdGEtc2xvdD1cImljb25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC00XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICBkPVwiTTcuNSA2YTQuNSA0LjUgMCAxIDEgOSAwIDQuNSA0LjUgMCAwIDEtOSAwWk0zLjc1MSAyMC4xMDVhOC4yNSA4LjI1IDAgMCAxIDE2LjQ5OCAwIC43NS43NSAwIDAgMS0uNDM3LjY5NUExOC42ODMgMTguNjgzIDAgMCAxIDEyIDIyLjVjLTIuNzg2IDAtNS40MzMtLjYwOC03LjgxMi0xLjdhLjc1Ljc1IDAgMCAxLS40MzctLjY5NVpcIlxyXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfaGFtYnVyZ2VySWNvbl9fZ3JVUHYgaGFtYnVyZ2VySWNvbiBsZzohaGlkZGVuIFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lIGxpbmUxXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lIGxpbmUyXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lIGxpbmUzXCIgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvaGVhZGVyPiAqL31cclxuXHJcbiAgICAgIFxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJIZWFkZXIiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZ2FtZSIsInNldEdhbWUiLCJ0cmltIiwiY29uc29sZSIsImxvZyIsInVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImhhbmRsZVNlYXJjaENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlcmVkR2FtZXMiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJidXR0b24iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwic2x1ZyIsImdhbWVfaWQiLCJpbWciLCJzcmMiLCJpbWdfcGF0aCIsImFzc2V0cyIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0IiwiYWx0IiwidGl0bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/Header.js\n"));

/***/ })

});