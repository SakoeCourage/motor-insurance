"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/private/layout",{

/***/ "(app-pages-browser)/./src/app/private/layout.tsx":
/*!************************************!*\
  !*** ./src/app/private/layout.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_layout_PrivateRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/layout/PrivateRoute */ \"(app-pages-browser)/./src/components/layout/PrivateRoute.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/assets/images/logo.png */ \"(app-pages-browser)/./src/assets/images/logo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/layout/Sidebar */ \"(app-pages-browser)/./src/components/layout/Sidebar.tsx\");\n/* harmony import */ var _app_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/layout/Navbar */ \"(app-pages-browser)/./src/components/layout/Navbar.tsx\");\n/* harmony import */ var _app_components_ui_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/ui/Divider */ \"(app-pages-browser)/./src/components/ui/Divider.tsx\");\n/* harmony import */ var _app_components_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/icon */ \"(app-pages-browser)/./src/components/icon/index.tsx\");\n/* harmony import */ var _app_context_useAppMenuContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/context/useAppMenuContext */ \"(app-pages-browser)/./src/context/useAppMenuContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst layout = (param)=>{\n    let { children } = param;\n    _s();\n    const [hideSidebar, setHideSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { menuItems, setMenuItems, appList, activeMenu, setActiveAppMenu } = (0,_app_context_useAppMenuContext__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_layout_PrivateRoute__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-screen h-screen overflow-hidden relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                    id: \"sidebar\",\n                    className: \"relative \".concat(hideSidebar && \"hide\", \" overflow-y-hidden  flex flex-col\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            // href=\"/private/dashboard\"\n                            className: \"brand py-4 flex flex-col  gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    src: _app_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"logo\",\n                                    loading: \"lazy\",\n                                    className: hideSidebar ? \"w-10\" : \"w-[80px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-medium text-[16px]  \".concat(hideSidebar ? \"hidden\" : \"hidden md:block\"),\n                                    children: \"MOTOR INSURANCE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ui_Divider__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"mt-2 bg-gray-200 mx-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-5 h-full overflow-y-auto flex-grow\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                menuItems: menuItems,\n                                hideSidebar: hideSidebar\n                            }, void 0, false, {\n                                fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    id: \"content\",\n                    className: \"w-full h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            toggleSidebar: ()=>setHideSidebar(!hideSidebar),\n                            hideSidebar: hideSidebar\n                        }, void 0, false, {\n                            fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"bg-[#f5e9eb78] w-full h-full flex-grow flex flex-col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" w-full h-full flex-grow overflow-hidden px-3 pt-4 mb-2\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(layout, \"LygNDlCu+YoxXZi/E+homway2T4=\", false, function() {\n    return [\n        _app_context_useAppMenuContext__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (layout);\nconst AppServices = (param)=>{\n    let { appList, activeMenu, setActiveMenu } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"flex justify-evenly \",\n        children: appList.map((x, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: x.name === activeMenu.name ? \"text-blue-600\" : \"text-gray-500 hover:text-blue-600 font-thin\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center flex-col gap-1\",\n                    onClick: ()=>{\n                        setActiveMenu(x);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_icon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            icon: x.icon,\n                            fontSize: 20\n                        }, void 0, false, {\n                            fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-xs \",\n                            children: x.name\n                        }, void 0, false, {\n                            fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/kobby/Desktop/codes/Efactum/web/motor-insurance/src/app/private/layout.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AppServices;\nvar _c;\n$RefreshReg$(_c, \"AppServices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJpdmF0ZS9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMrRDtBQUN2QjtBQUNVO0FBQ25CO0FBQ3NCO0FBQ0Y7QUFDRjtBQUNGO0FBQ2dCO0FBRS9ELE1BQU1VLFNBQVM7UUFBQyxFQUFFQyxRQUFRLEVBQWlDOztJQUN6RCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxFQUFFWSxTQUFTLEVBQUVDLFlBQVksRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGdCQUFnQixFQUFFLEdBQ3RFVCwwRUFBaUJBO0lBQ25CLHFCQUNFLDhEQUFDVCwyRUFBWUE7a0JBQ1gsNEVBQUNtQjtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQ0NDLElBQUc7b0JBQ0hGLFdBQVcsWUFFVixPQURDUixlQUFlLFFBQ2hCOztzQ0FFRCw4REFBQ1c7NEJBQ0MsNEJBQTRCOzRCQUM1QkgsV0FBVTs7OENBRVYsOERBQUNoQixtREFBS0E7b0NBQ0pvQixLQUFLckIsbUVBQU9BO29DQUNac0IsS0FBSTtvQ0FDSkMsU0FBUTtvQ0FDUk4sV0FBV1IsY0FBYyxTQUFTOzs7Ozs7OENBRXBDLDhEQUFDZTtvQ0FDQ1AsV0FBVyw0QkFFVixPQURDUixjQUFjLFdBQVc7OENBRTVCOzs7Ozs7Ozs7Ozs7c0NBSUgsOERBQUNMLGtFQUFPQTs0QkFBQ2EsV0FBVTs7Ozs7O3NDQVFuQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNmLHNFQUFPQTtnQ0FBQ1MsV0FBV0E7Z0NBQVdGLGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHaEQsOERBQUNnQjtvQkFBUU4sSUFBRztvQkFBVUYsV0FBVTs7c0NBQzlCLDhEQUFDZCxxRUFBTUE7NEJBQ0x1QixlQUFlLElBQU1oQixlQUFlLENBQUNEOzRCQUNyQ0EsYUFBYUE7Ozs7OztzQ0FFZiw4REFBQ2dCOzRCQUFRUixXQUFVO3NDQU1qQiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1pUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Y7R0E5RE1EOztRQUdGRCxzRUFBaUJBOzs7QUE2RHJCLCtEQUFlQyxNQUFNQSxFQUFDO0FBRXRCLE1BQU1vQixjQUFjO1FBQUMsRUFDbkJkLE9BQU8sRUFDUEMsVUFBVSxFQUNWYyxhQUFhLEVBS2Q7SUFDQyxxQkFDRSw4REFBQ0M7UUFBR1osV0FBVTtrQkFDWEosUUFBUWlCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxzQkFDZiw4REFBQ0M7Z0JBRUNoQixXQUNFYyxFQUFFRyxJQUFJLEtBQUtwQixXQUFXb0IsSUFBSSxHQUN0QixrQkFDQTswQkFHTiw0RUFBQ0M7b0JBQ0NsQixXQUFVO29CQUNWbUIsU0FBUzt3QkFDUFIsY0FBY0c7b0JBQ2hCOztzQ0FFQSw4REFBQzFCLDREQUFXQTs0QkFBQ2dDLE1BQU1OLEVBQUVNLElBQUk7NEJBQUVDLFVBQVU7Ozs7OztzQ0FDckMsOERBQUNkOzRCQUFLUCxXQUFVO3NDQUFZYyxFQUFFRyxJQUFJOzs7Ozs7Ozs7Ozs7ZUFkL0JGOzs7Ozs7Ozs7O0FBb0JmO0tBakNNTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3ByaXZhdGUvbGF5b3V0LnRzeD84OWI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFByaXZhdGVSb3V0ZSBmcm9tIFwiQGFwcC9jb21wb25lbnRzL2xheW91dC9Qcml2YXRlUm91dGVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ29VcmwgZnJvbSBcIkBhcHAvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiQGFwcC9jb21wb25lbnRzL2xheW91dC9TaWRlYmFyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAYXBwL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBhcHAvY29tcG9uZW50cy91aS9EaXZpZGVyXCI7XG5pbXBvcnQgSWNvbmlmeUljb24gZnJvbSBcIkBhcHAvY29tcG9uZW50cy9pY29uXCI7XG5pbXBvcnQgdXNlQXBwTWVudUNvbnRleHQgZnJvbSBcIkBhcHAvY29udGV4dC91c2VBcHBNZW51Q29udGV4dFwiO1xuXG5jb25zdCBsYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBbaGlkZVNpZGViYXIsIHNldEhpZGVTaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBtZW51SXRlbXMsIHNldE1lbnVJdGVtcywgYXBwTGlzdCwgYWN0aXZlTWVudSwgc2V0QWN0aXZlQXBwTWVudSB9ID1cbiAgICB1c2VBcHBNZW51Q29udGV4dCgpO1xuICByZXR1cm4gKFxuICAgIDxQcml2YXRlUm91dGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgICA8YXNpZGVcbiAgICAgICAgICBpZD1cInNpZGViYXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlICR7XG4gICAgICAgICAgICBoaWRlU2lkZWJhciAmJiBcImhpZGVcIlxuICAgICAgICAgIH0gb3ZlcmZsb3cteS1oaWRkZW4gIGZsZXggZmxleC1jb2xgfVxuICAgICAgICA+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIC8vIGhyZWY9XCIvcHJpdmF0ZS9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJhbmQgcHktNCBmbGV4IGZsZXgtY29sICBnYXAtMVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17TG9nb1VybH1cbiAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtoaWRlU2lkZWJhciA/IFwidy0xMFwiIDogXCJ3LVs4MHB4XVwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtbWVkaXVtIHRleHQtWzE2cHhdICAke1xuICAgICAgICAgICAgICAgIGhpZGVTaWRlYmFyID8gXCJoaWRkZW5cIiA6IFwiaGlkZGVuIG1kOmJsb2NrXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1PVE9SIElOU1VSQU5DRVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJtdC0yIGJnLWdyYXktMjAwIG14LTRcIiAvPlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInB0LTNcIj5cbiAgICAgICAgICAgIDxBcHBTZXJ2aWNlc1xuICAgICAgICAgICAgICBhcHBMaXN0PXthcHBMaXN0fVxuICAgICAgICAgICAgICBzZXRBY3RpdmVNZW51PXtzZXRBY3RpdmVBcHBNZW51fVxuICAgICAgICAgICAgICBhY3RpdmVNZW51PXthY3RpdmVNZW51fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGgtZnVsbCBvdmVyZmxvdy15LWF1dG8gZmxleC1ncm93XCI+XG4gICAgICAgICAgICA8U2lkZWJhciBtZW51SXRlbXM9e21lbnVJdGVtc30gaGlkZVNpZGViYXI9e2hpZGVTaWRlYmFyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICAgICAgPE5hdmJhclxuICAgICAgICAgICAgdG9nZ2xlU2lkZWJhcj17KCkgPT4gc2V0SGlkZVNpZGViYXIoIWhpZGVTaWRlYmFyKX1cbiAgICAgICAgICAgIGhpZGVTaWRlYmFyPXtoaWRlU2lkZWJhcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLVsjZjVlOWViNzhdIHctZnVsbCBoLWZ1bGwgZmxleC1ncm93IGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtdGl0bGUgcHQtMyBwYi00IHBsLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPEJyZWFkQ3J1bWIgb3B0aW9ucz17JGJyZWFkQ3J1bWJ9IHthY3RpdmVCcmVhZENydW1ifSBvbjpjbGljaz17b3B0aW9uQ2xpY2tlZH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgaC1mdWxsIGZsZXgtZ3JvdyBvdmVyZmxvdy1oaWRkZW4gcHgtMyBwdC00IG1iLTJcIj5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L1ByaXZhdGVSb3V0ZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcblxuY29uc3QgQXBwU2VydmljZXMgPSAoe1xuICBhcHBMaXN0LFxuICBhY3RpdmVNZW51LFxuICBzZXRBY3RpdmVNZW51LFxufToge1xuICBhcHBMaXN0OiB7IG5hbWU6IHN0cmluZzsgaWNvbjogc3RyaW5nIH1bXTtcbiAgYWN0aXZlTWVudTogeyBuYW1lOiBzdHJpbmc7IGljb246IHN0cmluZyB9O1xuICBzZXRBY3RpdmVNZW51OiAoeDogYW55KSA9PiB2b2lkO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZXZlbmx5IFwiPlxuICAgICAge2FwcExpc3QubWFwKCh4LCBpbmRleCkgPT4gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICB4Lm5hbWUgPT09IGFjdGl2ZU1lbnUubmFtZVxuICAgICAgICAgICAgICA/IFwidGV4dC1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtYmx1ZS02MDAgZm9udC10aGluXCJcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBnYXAtMVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEFjdGl2ZU1lbnUoeCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uaWZ5SWNvbiBpY29uPXt4Lmljb259IGZvbnRTaXplPXsyMH0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgXCI+e3gubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJQcml2YXRlUm91dGUiLCJSZWFjdCIsInVzZVN0YXRlIiwiTG9nb1VybCIsIkltYWdlIiwiU2lkZWJhciIsIk5hdmJhciIsIkRpdmlkZXIiLCJJY29uaWZ5SWNvbiIsInVzZUFwcE1lbnVDb250ZXh0IiwibGF5b3V0IiwiY2hpbGRyZW4iLCJoaWRlU2lkZWJhciIsInNldEhpZGVTaWRlYmFyIiwibWVudUl0ZW1zIiwic2V0TWVudUl0ZW1zIiwiYXBwTGlzdCIsImFjdGl2ZU1lbnUiLCJzZXRBY3RpdmVBcHBNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiYXNpZGUiLCJpZCIsImEiLCJzcmMiLCJhbHQiLCJsb2FkaW5nIiwic3BhbiIsInNlY3Rpb24iLCJ0b2dnbGVTaWRlYmFyIiwiQXBwU2VydmljZXMiLCJzZXRBY3RpdmVNZW51IiwidWwiLCJtYXAiLCJ4IiwiaW5kZXgiLCJsaSIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/private/layout.tsx\n"));

/***/ })

});