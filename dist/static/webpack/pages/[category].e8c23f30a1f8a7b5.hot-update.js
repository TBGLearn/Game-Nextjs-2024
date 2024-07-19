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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HeaderStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderStyle.css */ \"./src/layouts/HeaderStyle.css\");\n/* harmony import */ var _HeaderStyle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HeaderStyle_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Import the new CSS file\n\nfunction Header() {\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [game, setGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Chỉ gọi fetch khi searchQuery có giá trị\n        if (searchQuery.trim() !== \"\") {\n            console.log(searchQuery);\n            const url = \"https://game.tbg95.com/api/game-search?q=\".concat(encodeURIComponent(searchQuery));\n            console.log(url);\n            fetch(\"https://game.tbg95.com/api/game-search?q=\".concat(encodeURIComponent(searchQuery))).then((res)=>res.json()).then((data)=>{\n                setGame(data.data);\n                console.log(data.data);\n            }).catch((error)=>{\n                console.error(\"Error fetching games:\", error);\n                setGame([]); // Xử lý lỗi bằng cách đặt setGame rỗng để không hiển thị danh sách\n            });\n        } else {\n            setGame([]); // Nếu searchQuery rỗng, đặt lại danh sách game rỗng\n        }\n    }, [\n        searchQuery\n    ]);\n    const handleSearchChange = (e)=>{\n        setSearchQuery(e.target.value);\n    };\n    const filteredGames = game.filter((game)=>searchQuery.toLowerCase());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"header_header__rj0C7  \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto flex justify-between items-center gap-x-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"home-button\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 84,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex max-lg:gap-4 lg:gap-14 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                className: \"navigation \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/games\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"login-button\",\n                                            children: \"Games\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 11\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 8\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        target: \"blank\",\n                                        className: \"\",\n                                        href: \"https://blog.gamedistribution.com\",\n                                        children: \"News\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 89,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header_searchGame__jvUKH\",\n                                \"data-headlessui-state\": \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-box \",\n                                    children: searchQuery && (filteredGames.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: filteredGames.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                style: {\n                                                    display: \"flex\",\n                                                    alignItems: \"center\",\n                                                    margin: \"10px 0\"\n                                                },\n                                                onClick: ()=>window.location.href = \"/games/\".concat(game.slug, \"/\").concat(game.game_id),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: \"\".concat(game.img_path).concat(game.assets[0].name),\n                                                        style: {\n                                                            width: \"50px\",\n                                                            height: \"auto\",\n                                                            marginRight: \"10px\"\n                                                        },\n                                                        alt: \"Game\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                                        lineNumber: 108,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    game.title\n                                                ]\n                                            }, game.game_id, true, {\n                                                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"No games found\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, this))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 98,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"buttons_button__gDVZj buttonPrimary login-button \",\n                                type: \"submit\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        viewBox: \"0 0 24 24\",\n                                        fill: \"currentColor\",\n                                        \"aria-hidden\": \"true\",\n                                        \"data-slot\": \"icon\",\n                                        className: \"h-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fillRule: \"evenodd\",\n                                            d: \"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z\",\n                                            clipRule: \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                            lineNumber: 130,\n                                            columnNumber: 11\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 9\n                                    }, this),\n                                    \"Login\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 118,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\",\n                                className: \"header_hamburgerIcon__grUPv hamburgerIcon lg:!hidden \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"line line1\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"line line2\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"line line3\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 138,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 88,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 83,\n                columnNumber: 3\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\react\\\\nextjs\\\\test2\\\\my-app\\\\src\\\\layouts\\\\Header.js\",\n            lineNumber: 82,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"f+kAqH8YcSnw4GqYrZupCEP/aWw=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFRO3dDQUNSQyxNQUFLO3dDQUNMQyxlQUFZO3dDQUNaQyxhQUFVO3dDQUNWcEMsV0FBVTtrREFFViw0RUFBQ3FDOzRDQUNDQyxVQUFTOzRDQUNUQyxHQUFFOzRDQUNGQyxVQUFTOzs7Ozs7Ozs7OztvQ0FFUDs7Ozs7OzswQ0FHUiw4REFBQ25DO2dDQUNDSCxNQUFLO2dDQUNMRixXQUFVOztrREFFViw4REFBQ3lDO3dDQUFLekMsV0FBVTs7Ozs7O2tEQUNoQiw4REFBQ3lDO3dDQUFLekMsV0FBVTs7Ozs7O2tEQUNoQiw4REFBQ3lDO3dDQUFLekMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXhCO0dBbEpTekI7S0FBQUE7QUFvSlQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvSGVhZGVyLmpzPzkxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgXCIuL0hlYWRlclN0eWxlLmNzc1wiOyAvLyBJbXBvcnQgdGhlIG5ldyBDU1MgZmlsZVxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtnYW1lICwgc2V0R2FtZV0gPSB1c2VTdGF0ZShbXSlcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDaOG7iSBn4buNaSBmZXRjaCBraGkgc2VhcmNoUXVlcnkgY8OzIGdpw6EgdHLhu4tcclxuICAgIGlmIChzZWFyY2hRdWVyeS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFF1ZXJ5KVxyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9nYW1lLnRiZzk1LmNvbS9hcGkvZ2FtZS1zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hRdWVyeSl9YFxyXG4gICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgIGZldGNoKGBodHRwczovL2dhbWUudGJnOTUuY29tL2FwaS9nYW1lLXNlYXJjaD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaFF1ZXJ5KX1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgc2V0R2FtZShkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBnYW1lczonLCBlcnJvcik7XHJcbiAgICAgICAgICBzZXRHYW1lKFtdKTsgLy8gWOG7rSBsw70gbOG7l2kgYuG6sW5nIGPDoWNoIMSR4bq3dCBzZXRHYW1lIHLhu5duZyDEkeG7gyBraMO0bmcgaGnhu4NuIHRo4buLIGRhbmggc8OhY2hcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEdhbWUoW10pOyAvLyBO4bq/dSBzZWFyY2hRdWVyeSBy4buXbmcsIMSR4bq3dCBs4bqhaSBkYW5oIHPDoWNoIGdhbWUgcuG7l25nXHJcbiAgICB9XHJcbiAgfSwgW3NlYXJjaFF1ZXJ5XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRHYW1lcyA9IGdhbWUuZmlsdGVyKGdhbWUgPT4oc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcclxuICApO1xyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob21lLWJ1dHRvblwiID5cclxuICAgICAgICAgICAgSG9tZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhIGdhbWUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtzZWFyY2hRdWVyeSAmJiAoZmlsdGVyZWRHYW1lcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEdhbWVzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9nYW1lcy8ke2dhbWUuc2x1Z30vJHtnYW1lLmdhbWVfaWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgIGtleT17Z2FtZS5nYW1lX2lkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2dhbWUuaW1nX3BhdGh9JHtnYW1lLmFzc2V0c1swXS5uYW1lfWB9ICBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICdhdXRvJywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSBhbHQ9XCJHYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIHtnYW1lLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8cD5ObyBnYW1lcyBmb3VuZDwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvZ2FtZXMnfT5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW4tYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICBHYW1lczwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj4gKi99XHJcblxyXG4gIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyX2hlYWRlcl9fcmowQzcgIFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC14LTJcIj5cclxuICAgICA8TGluayBocmVmPXsnLyd9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob21lLWJ1dHRvblwiID5cclxuICAgICAgICAgICAgSG9tZTwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWF4LWxnOmdhcC00IGxnOmdhcC0xNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uIFwiPlxyXG4gICAgICAgPExpbmsgaHJlZj17Jy9nYW1lcyd9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbi1idXR0b25cIiA+XHJcbiAgICAgICAgICAgIEdhbWVzPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGEgdGFyZ2V0PVwiYmxhbmtcIiBjbGFzc05hbWU9XCJcIiBocmVmPVwiaHR0cHM6Ly9ibG9nLmdhbWVkaXN0cmlidXRpb24uY29tXCI+XHJcbiAgICAgICAgICBOZXdzXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfc2VhcmNoR2FtZV9fanZVS0hcIiBkYXRhLWhlYWRsZXNzdWktc3RhdGU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveCBcIj5cclxuICAgICAgICAgIHtzZWFyY2hRdWVyeSAmJiAoZmlsdGVyZWRHYW1lcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEdhbWVzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW46ICcxMHB4IDAnIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9nYW1lcy8ke2dhbWUuc2x1Z30vJHtnYW1lLmdhbWVfaWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgIGtleT17Z2FtZS5nYW1lX2lkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2dhbWUuaW1nX3BhdGh9JHtnYW1lLmFzc2V0c1swXS5uYW1lfWB9ICBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICdhdXRvJywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSBhbHQ9XCJHYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIHtnYW1lLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8cD5ObyBnYW1lcyBmb3VuZDwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uc19idXR0b25fX2dEVlpqIGJ1dHRvblByaW1hcnkgbG9naW4tYnV0dG9uIFwiXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgZGF0YS1zbG90PVwiaWNvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIGQ9XCJNNy41IDZhNC41IDQuNSAwIDEgMSA5IDAgNC41IDQuNSAwIDAgMS05IDBaTTMuNzUxIDIwLjEwNWE4LjI1IDguMjUgMCAwIDEgMTYuNDk4IDAgLjc1Ljc1IDAgMCAxLS40MzcuNjk1QTE4LjY4MyAxOC42ODMgMCAwIDEgMTIgMjIuNWMtMi43ODYgMC01LjQzMy0uNjA4LTcuODEyLTEuN2EuNzUuNzUgMCAwIDEtLjQzNy0uNjk1WlwiXHJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIExvZ2luXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9oYW1idXJnZXJJY29uX19nclVQdiBoYW1idXJnZXJJY29uIGxnOiFoaWRkZW4gXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUgbGluZTFcIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUgbGluZTJcIiAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUgbGluZTNcIiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9oZWFkZXI+XHJcblxyXG4gICAgICBcclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSGVhZGVyIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImdhbWUiLCJzZXRHYW1lIiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZEdhbWVzIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiYnV0dG9uIiwibmF2IiwiYSIsImRhdGEtaGVhZGxlc3N1aS1zdGF0ZSIsImxlbmd0aCIsInVsIiwibWFwIiwic3R5bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNsdWciLCJnYW1lX2lkIiwiaW1nIiwic3JjIiwiaW1nX3BhdGgiLCJhc3NldHMiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsImFsdCIsInRpdGxlIiwicCIsInR5cGUiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwiYXJpYS1oaWRkZW4iLCJkYXRhLXNsb3QiLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/Header.js\n"));

/***/ })

});