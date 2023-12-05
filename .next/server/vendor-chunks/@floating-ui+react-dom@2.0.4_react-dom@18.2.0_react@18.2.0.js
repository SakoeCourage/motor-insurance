"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@floating-ui+react-dom@2.0.4_react-dom@18.2.0_react@18.2.0";
exports.ids = ["vendor-chunks/@floating-ui+react-dom@2.0.4_react-dom@18.2.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@floating-ui+react-dom@2.0.4_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@floating-ui+react-dom@2.0.4_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrow: () => (/* binding */ arrow),\n/* harmony export */   autoPlacement: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoPlacement),\n/* harmony export */   autoUpdate: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.autoUpdate),\n/* harmony export */   computePosition: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.computePosition),\n/* harmony export */   detectOverflow: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.detectOverflow),\n/* harmony export */   flip: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.flip),\n/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.getOverflowAncestors),\n/* harmony export */   hide: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.hide),\n/* harmony export */   inline: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.inline),\n/* harmony export */   limitShift: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.limitShift),\n/* harmony export */   offset: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.offset),\n/* harmony export */   platform: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.platform),\n/* harmony export */   shift: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.shift),\n/* harmony export */   size: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.size),\n/* harmony export */   useFloating: () => (/* binding */ useFloating)\n/* harmony export */ });\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/./node_modules/.pnpm/@floating-ui+core@1.5.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs\");\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/./node_modules/.pnpm/@floating-ui+dom@1.5.3/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs\");\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.1.6/node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n\n\n\n\n\n/**\n * Provides data to position an inner element of the floating element so that it\n * appears centered to the reference element.\n * This wraps the core `arrow` middleware to allow React refs as the element.\n * @see https://floating-ui.com/docs/arrow\n */ const arrow = (options)=>{\n    function isRef(value) {\n        return ({}).hasOwnProperty.call(value, \"current\");\n    }\n    return {\n        name: \"arrow\",\n        options,\n        fn (state) {\n            const { element, padding } = typeof options === \"function\" ? options(state) : options;\n            if (element && isRef(element)) {\n                if (element.current != null) {\n                    return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n                        element: element.current,\n                        padding\n                    }).fn(state);\n                }\n                return {};\n            } else if (element) {\n                return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n                    element,\n                    padding\n                }).fn(state);\n            }\n            return {};\n        }\n    };\n};\nvar index = typeof document !== \"undefined\" ? react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_3__.useEffect;\n// Fork of `fast-deep-equal` that only does the comparisons we need and compares\n// functions\nfunction deepEqual(a, b) {\n    if (a === b) {\n        return true;\n    }\n    if (typeof a !== typeof b) {\n        return false;\n    }\n    if (typeof a === \"function\" && a.toString() === b.toString()) {\n        return true;\n    }\n    let length, i, keys;\n    if (a && b && typeof a == \"object\") {\n        if (Array.isArray(a)) {\n            length = a.length;\n            if (length != b.length) return false;\n            for(i = length; i-- !== 0;){\n                if (!deepEqual(a[i], b[i])) {\n                    return false;\n                }\n            }\n            return true;\n        }\n        keys = Object.keys(a);\n        length = keys.length;\n        if (length !== Object.keys(b).length) {\n            return false;\n        }\n        for(i = length; i-- !== 0;){\n            if (!({}).hasOwnProperty.call(b, keys[i])) {\n                return false;\n            }\n        }\n        for(i = length; i-- !== 0;){\n            const key = keys[i];\n            if (key === \"_owner\" && a.$$typeof) {\n                continue;\n            }\n            if (!deepEqual(a[key], b[key])) {\n                return false;\n            }\n        }\n        return true;\n    }\n    return a !== a && b !== b;\n}\nfunction getDPR(element) {\n    if (true) {\n        return 1;\n    }\n    const win = element.ownerDocument.defaultView || window;\n    return win.devicePixelRatio || 1;\n}\nfunction roundByDPR(element, value) {\n    const dpr = getDPR(element);\n    return Math.round(value * dpr) / dpr;\n}\nfunction useLatestRef(value) {\n    const ref = react__WEBPACK_IMPORTED_MODULE_3__.useRef(value);\n    index(()=>{\n        ref.current = value;\n    });\n    return ref;\n}\n/**\n * Provides data to position a floating element.\n * @see https://floating-ui.com/docs/useFloating\n */ function useFloating(options) {\n    if (options === void 0) {\n        options = {};\n    }\n    const { placement = \"bottom\", strategy = \"absolute\", middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_3__.useState({\n        x: 0,\n        y: 0,\n        strategy,\n        placement,\n        middlewareData: {},\n        isPositioned: false\n    });\n    const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_3__.useState(middleware);\n    if (!deepEqual(latestMiddleware, middleware)) {\n        setLatestMiddleware(middleware);\n    }\n    const [_reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_3__.useState(null);\n    const [_floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_3__.useState(null);\n    const setReference = react__WEBPACK_IMPORTED_MODULE_3__.useCallback((node)=>{\n        if (node != referenceRef.current) {\n            referenceRef.current = node;\n            _setReference(node);\n        }\n    }, [\n        _setReference\n    ]);\n    const setFloating = react__WEBPACK_IMPORTED_MODULE_3__.useCallback((node)=>{\n        if (node !== floatingRef.current) {\n            floatingRef.current = node;\n            _setFloating(node);\n        }\n    }, [\n        _setFloating\n    ]);\n    const referenceEl = externalReference || _reference;\n    const floatingEl = externalFloating || _floating;\n    const referenceRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);\n    const floatingRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);\n    const dataRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(data);\n    const whileElementsMountedRef = useLatestRef(whileElementsMounted);\n    const platformRef = useLatestRef(platform);\n    const update = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(()=>{\n        if (!referenceRef.current || !floatingRef.current) {\n            return;\n        }\n        const config = {\n            placement,\n            strategy,\n            middleware: latestMiddleware\n        };\n        if (platformRef.current) {\n            config.platform = platformRef.current;\n        }\n        (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.computePosition)(referenceRef.current, floatingRef.current, config).then((data)=>{\n            const fullData = {\n                ...data,\n                isPositioned: true\n            };\n            if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {\n                dataRef.current = fullData;\n                react_dom__WEBPACK_IMPORTED_MODULE_4__.flushSync(()=>{\n                    setData(fullData);\n                });\n            }\n        });\n    }, [\n        latestMiddleware,\n        placement,\n        strategy,\n        platformRef\n    ]);\n    index(()=>{\n        if (open === false && dataRef.current.isPositioned) {\n            dataRef.current.isPositioned = false;\n            setData((data)=>({\n                    ...data,\n                    isPositioned: false\n                }));\n        }\n    }, [\n        open\n    ]);\n    const isMountedRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);\n    index(()=>{\n        isMountedRef.current = true;\n        return ()=>{\n            isMountedRef.current = false;\n        };\n    }, []);\n    index(()=>{\n        if (referenceEl) referenceRef.current = referenceEl;\n        if (floatingEl) floatingRef.current = floatingEl;\n        if (referenceEl && floatingEl) {\n            if (whileElementsMountedRef.current) {\n                return whileElementsMountedRef.current(referenceEl, floatingEl, update);\n            } else {\n                update();\n            }\n        }\n    }, [\n        referenceEl,\n        floatingEl,\n        update,\n        whileElementsMountedRef\n    ]);\n    const refs = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(()=>({\n            reference: referenceRef,\n            floating: floatingRef,\n            setReference,\n            setFloating\n        }), [\n        setReference,\n        setFloating\n    ]);\n    const elements = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(()=>({\n            reference: referenceEl,\n            floating: floatingEl\n        }), [\n        referenceEl,\n        floatingEl\n    ]);\n    const floatingStyles = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(()=>{\n        const initialStyles = {\n            position: strategy,\n            left: 0,\n            top: 0\n        };\n        if (!elements.floating) {\n            return initialStyles;\n        }\n        const x = roundByDPR(elements.floating, data.x);\n        const y = roundByDPR(elements.floating, data.y);\n        if (transform) {\n            return {\n                ...initialStyles,\n                transform: \"translate(\" + x + \"px, \" + y + \"px)\",\n                ...getDPR(elements.floating) >= 1.5 && {\n                    willChange: \"transform\"\n                }\n            };\n        }\n        return {\n            position: strategy,\n            left: x,\n            top: y\n        };\n    }, [\n        strategy,\n        transform,\n        elements.floating,\n        data.x,\n        data.y\n    ]);\n    return react__WEBPACK_IMPORTED_MODULE_3__.useMemo(()=>({\n            ...data,\n            update,\n            refs,\n            elements,\n            floatingStyles\n        }), [\n        data,\n        update,\n        refs,\n        elements,\n        floatingStyles\n    ]);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3JlYWN0LWRvbUAyLjAuNF9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3JlYWN0LWRvbS9kaXN0L2Zsb2F0aW5nLXVpLnJlYWN0LWRvbS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDOEc7QUFDcEo7QUFDb0I7QUFDYjtBQUV0Qzs7Ozs7Q0FLQyxHQUNELE1BQU1BLFFBQVFtQixDQUFBQTtJQUNaLFNBQVNDLE1BQU1DLEtBQUs7UUFDbEIsT0FBTyxFQUFDLEdBQUVDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRixPQUFPO0lBQ3ZDO0lBQ0EsT0FBTztRQUNMRyxNQUFNO1FBQ05MO1FBQ0FNLElBQUdDLEtBQUs7WUFDTixNQUFNLEVBQ0pDLE9BQU8sRUFDUEMsT0FBTyxFQUNSLEdBQUcsT0FBT1QsWUFBWSxhQUFhQSxRQUFRTyxTQUFTUDtZQUNyRCxJQUFJUSxXQUFXUCxNQUFNTyxVQUFVO2dCQUM3QixJQUFJQSxRQUFRRSxPQUFPLElBQUksTUFBTTtvQkFDM0IsT0FBTzVCLHVEQUFPQSxDQUFDO3dCQUNiMEIsU0FBU0EsUUFBUUUsT0FBTzt3QkFDeEJEO29CQUNGLEdBQUdILEVBQUUsQ0FBQ0M7Z0JBQ1I7Z0JBQ0EsT0FBTyxDQUFDO1lBQ1YsT0FBTyxJQUFJQyxTQUFTO2dCQUNsQixPQUFPMUIsdURBQU9BLENBQUM7b0JBQ2IwQjtvQkFDQUM7Z0JBQ0YsR0FBR0gsRUFBRSxDQUFDQztZQUNSO1lBQ0EsT0FBTyxDQUFDO1FBQ1Y7SUFDRjtBQUNGO0FBRUEsSUFBSUksUUFBUSxPQUFPQyxhQUFhLGNBQWNmLGtEQUFlQSxHQUFHQyw0Q0FBU0E7QUFFekUsZ0ZBQWdGO0FBQ2hGLFlBQVk7QUFDWixTQUFTZSxVQUFVQyxDQUFDLEVBQUVDLENBQUM7SUFDckIsSUFBSUQsTUFBTUMsR0FBRztRQUNYLE9BQU87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O1FBQWNJO0tBQVk7SUFDL0IsTUFBTXpCLFdBQVc5QywwQ0FBYSxDQUFDLElBQU87WUFDcEMrQyxXQUFXMEI7WUFDWHhCLFVBQVV5QjtRQUNaLElBQUk7UUFBQ0Q7UUFBYUM7S0FBVztJQUM3QixNQUFNWSxpQkFBaUJ0RiwwQ0FBYSxDQUFDO1FBQ25DLE1BQU11RixnQkFBZ0I7WUFDcEJDLFVBQVU1QztZQUNWNkMsTUFBTTtZQUNOQyxLQUFLO1FBQ1A7UUFDQSxJQUFJLENBQUM1QyxTQUFTRyxRQUFRLEVBQUU7WUFDdEIsT0FBT3NDO1FBQ1Q7UUFDQSxNQUFNOUIsSUFBSXRCLFdBQVdXLFNBQVNHLFFBQVEsRUFBRUssS0FBS0csQ0FBQztRQUM5QyxNQUFNQyxJQUFJdkIsV0FBV1csU0FBU0csUUFBUSxFQUFFSyxLQUFLSSxDQUFDO1FBQzlDLElBQUlQLFdBQVc7WUFDYixPQUFPO2dCQUNMLEdBQUdvQyxhQUFhO2dCQUNoQnBDLFdBQVcsZUFBZU0sSUFBSSxTQUFTQyxJQUFJO2dCQUMzQyxHQUFJN0IsT0FBT2lCLFNBQVNHLFFBQVEsS0FBSyxPQUFPO29CQUN0QzBDLFlBQVk7Z0JBQ2QsQ0FBQztZQUNIO1FBQ0Y7UUFDQSxPQUFPO1lBQ0xILFVBQVU1QztZQUNWNkMsTUFBTWhDO1lBQ05pQyxLQUFLaEM7UUFDUDtJQUNGLEdBQUc7UUFBQ2Q7UUFBVU87UUFBV0wsU0FBU0csUUFBUTtRQUFFSyxLQUFLRyxDQUFDO1FBQUVILEtBQUtJLENBQUM7S0FBQztJQUMzRCxPQUFPMUQsMENBQWEsQ0FBQyxJQUFPO1lBQzFCLEdBQUdzRCxJQUFJO1lBQ1B3QjtZQUNBTTtZQUNBdEM7WUFDQXdDO1FBQ0YsSUFBSTtRQUFDaEM7UUFBTXdCO1FBQVFNO1FBQU10QztRQUFVd0M7S0FBZTtBQUNwRDtBQUU4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2FsbC1pbi1vbmUtaW5zLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BmbG9hdGluZy11aStyZWFjdC1kb21AMi4wLjRfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9yZWFjdC1kb20vZGlzdC9mbG9hdGluZy11aS5yZWFjdC1kb20ubWpzPzc3MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXJyb3cgYXMgYXJyb3ckMSwgY29tcHV0ZVBvc2l0aW9uIH0gZnJvbSAnQGZsb2F0aW5nLXVpL2RvbSc7XG5leHBvcnQgeyBhdXRvUGxhY2VtZW50LCBhdXRvVXBkYXRlLCBjb21wdXRlUG9zaXRpb24sIGRldGVjdE92ZXJmbG93LCBmbGlwLCBnZXRPdmVyZmxvd0FuY2VzdG9ycywgaGlkZSwgaW5saW5lLCBsaW1pdFNoaWZ0LCBvZmZzZXQsIHBsYXRmb3JtLCBzaGlmdCwgc2l6ZSB9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gcG9zaXRpb24gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBzbyB0aGF0IGl0XG4gKiBhcHBlYXJzIGNlbnRlcmVkIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIFRoaXMgd3JhcHMgdGhlIGNvcmUgYGFycm93YCBtaWRkbGV3YXJlIHRvIGFsbG93IFJlYWN0IHJlZnMgYXMgdGhlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXJyb3dcbiAqL1xuY29uc3QgYXJyb3cgPSBvcHRpb25zID0+IHtcbiAgZnVuY3Rpb24gaXNSZWYodmFsdWUpIHtcbiAgICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2N1cnJlbnQnKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdhcnJvdycsXG4gICAgb3B0aW9ucyxcbiAgICBmbihzdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBwYWRkaW5nXG4gICAgICB9ID0gdHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zKHN0YXRlKSA6IG9wdGlvbnM7XG4gICAgICBpZiAoZWxlbWVudCAmJiBpc1JlZihlbGVtZW50KSkge1xuICAgICAgICBpZiAoZWxlbWVudC5jdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gYXJyb3ckMSh7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LmN1cnJlbnQsXG4gICAgICAgICAgICBwYWRkaW5nXG4gICAgICAgICAgfSkuZm4oc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gYXJyb3ckMSh7XG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICBwYWRkaW5nXG4gICAgICAgIH0pLmZuKHN0YXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgaW5kZXggPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuXG4vLyBGb3JrIG9mIGBmYXN0LWRlZXAtZXF1YWxgIHRoYXQgb25seSBkb2VzIHRoZSBjb21wYXJpc29ucyB3ZSBuZWVkIGFuZCBjb21wYXJlc1xuLy8gZnVuY3Rpb25zXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBhID09PSAnZnVuY3Rpb24nICYmIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGxlbmd0aCwgaSwga2V5cztcbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgICBpZiAoIWRlZXBFcXVhbChhW2ldLCBiW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBpZiAoIXt9Lmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoa2V5ID09PSAnX293bmVyJyAmJiBhLiQkdHlwZW9mKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn1cblxuZnVuY3Rpb24gZ2V0RFBSKGVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgY29uc3Qgd2luID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgcmV0dXJuIHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG59XG5cbmZ1bmN0aW9uIHJvdW5kQnlEUFIoZWxlbWVudCwgdmFsdWUpIHtcbiAgY29uc3QgZHByID0gZ2V0RFBSKGVsZW1lbnQpO1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIGRwcikgLyBkcHI7XG59XG5cbmZ1bmN0aW9uIHVzZUxhdGVzdFJlZih2YWx1ZSkge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYodmFsdWUpO1xuICBpbmRleCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZWY7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBwb3NpdGlvbiBhIGZsb2F0aW5nIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvdXNlRmxvYXRpbmdcbiAqL1xuZnVuY3Rpb24gdXNlRmxvYXRpbmcob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQgPSAnYm90dG9tJyxcbiAgICBzdHJhdGVneSA9ICdhYnNvbHV0ZScsXG4gICAgbWlkZGxld2FyZSA9IFtdLFxuICAgIHBsYXRmb3JtLFxuICAgIGVsZW1lbnRzOiB7XG4gICAgICByZWZlcmVuY2U6IGV4dGVybmFsUmVmZXJlbmNlLFxuICAgICAgZmxvYXRpbmc6IGV4dGVybmFsRmxvYXRpbmdcbiAgICB9ID0ge30sXG4gICAgdHJhbnNmb3JtID0gdHJ1ZSxcbiAgICB3aGlsZUVsZW1lbnRzTW91bnRlZCxcbiAgICBvcGVuXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHN0cmF0ZWd5LFxuICAgIHBsYWNlbWVudCxcbiAgICBtaWRkbGV3YXJlRGF0YToge30sXG4gICAgaXNQb3NpdGlvbmVkOiBmYWxzZVxuICB9KTtcbiAgY29uc3QgW2xhdGVzdE1pZGRsZXdhcmUsIHNldExhdGVzdE1pZGRsZXdhcmVdID0gUmVhY3QudXNlU3RhdGUobWlkZGxld2FyZSk7XG4gIGlmICghZGVlcEVxdWFsKGxhdGVzdE1pZGRsZXdhcmUsIG1pZGRsZXdhcmUpKSB7XG4gICAgc2V0TGF0ZXN0TWlkZGxld2FyZShtaWRkbGV3YXJlKTtcbiAgfVxuICBjb25zdCBbX3JlZmVyZW5jZSwgX3NldFJlZmVyZW5jZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW19mbG9hdGluZywgX3NldEZsb2F0aW5nXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBzZXRSZWZlcmVuY2UgPSBSZWFjdC51c2VDYWxsYmFjayhub2RlID0+IHtcbiAgICBpZiAobm9kZSAhPSByZWZlcmVuY2VSZWYuY3VycmVudCkge1xuICAgICAgcmVmZXJlbmNlUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgX3NldFJlZmVyZW5jZShub2RlKTtcbiAgICB9XG4gIH0sIFtfc2V0UmVmZXJlbmNlXSk7XG4gIGNvbnN0IHNldEZsb2F0aW5nID0gUmVhY3QudXNlQ2FsbGJhY2sobm9kZSA9PiB7XG4gICAgaWYgKG5vZGUgIT09IGZsb2F0aW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgIGZsb2F0aW5nUmVmLmN1cnJlbnQgPSBub2RlO1xuICAgICAgX3NldEZsb2F0aW5nKG5vZGUpO1xuICAgIH1cbiAgfSwgW19zZXRGbG9hdGluZ10pO1xuICBjb25zdCByZWZlcmVuY2VFbCA9IGV4dGVybmFsUmVmZXJlbmNlIHx8IF9yZWZlcmVuY2U7XG4gIGNvbnN0IGZsb2F0aW5nRWwgPSBleHRlcm5hbEZsb2F0aW5nIHx8IF9mbG9hdGluZztcbiAgY29uc3QgcmVmZXJlbmNlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBmbG9hdGluZ1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgZGF0YVJlZiA9IFJlYWN0LnVzZVJlZihkYXRhKTtcbiAgY29uc3Qgd2hpbGVFbGVtZW50c01vdW50ZWRSZWYgPSB1c2VMYXRlc3RSZWYod2hpbGVFbGVtZW50c01vdW50ZWQpO1xuICBjb25zdCBwbGF0Zm9ybVJlZiA9IHVzZUxhdGVzdFJlZihwbGF0Zm9ybSk7XG4gIGNvbnN0IHVwZGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIXJlZmVyZW5jZVJlZi5jdXJyZW50IHx8ICFmbG9hdGluZ1JlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICAgbWlkZGxld2FyZTogbGF0ZXN0TWlkZGxld2FyZVxuICAgIH07XG4gICAgaWYgKHBsYXRmb3JtUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbmZpZy5wbGF0Zm9ybSA9IHBsYXRmb3JtUmVmLmN1cnJlbnQ7XG4gICAgfVxuICAgIGNvbXB1dGVQb3NpdGlvbihyZWZlcmVuY2VSZWYuY3VycmVudCwgZmxvYXRpbmdSZWYuY3VycmVudCwgY29uZmlnKS50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGlzUG9zaXRpb25lZDogdHJ1ZVxuICAgICAgfTtcbiAgICAgIGlmIChpc01vdW50ZWRSZWYuY3VycmVudCAmJiAhZGVlcEVxdWFsKGRhdGFSZWYuY3VycmVudCwgZnVsbERhdGEpKSB7XG4gICAgICAgIGRhdGFSZWYuY3VycmVudCA9IGZ1bGxEYXRhO1xuICAgICAgICBSZWFjdERPTS5mbHVzaFN5bmMoKCkgPT4ge1xuICAgICAgICAgIHNldERhdGEoZnVsbERhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2xhdGVzdE1pZGRsZXdhcmUsIHBsYWNlbWVudCwgc3RyYXRlZ3ksIHBsYXRmb3JtUmVmXSk7XG4gIGluZGV4KCgpID0+IHtcbiAgICBpZiAob3BlbiA9PT0gZmFsc2UgJiYgZGF0YVJlZi5jdXJyZW50LmlzUG9zaXRpb25lZCkge1xuICAgICAgZGF0YVJlZi5jdXJyZW50LmlzUG9zaXRpb25lZCA9IGZhbHNlO1xuICAgICAgc2V0RGF0YShkYXRhID0+ICh7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGlzUG9zaXRpb25lZDogZmFsc2VcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIFtvcGVuXSk7XG4gIGNvbnN0IGlzTW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIGluZGV4KCgpID0+IHtcbiAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW10pO1xuICBpbmRleCgoKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZUVsKSByZWZlcmVuY2VSZWYuY3VycmVudCA9IHJlZmVyZW5jZUVsO1xuICAgIGlmIChmbG9hdGluZ0VsKSBmbG9hdGluZ1JlZi5jdXJyZW50ID0gZmxvYXRpbmdFbDtcbiAgICBpZiAocmVmZXJlbmNlRWwgJiYgZmxvYXRpbmdFbCkge1xuICAgICAgaWYgKHdoaWxlRWxlbWVudHNNb3VudGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHdoaWxlRWxlbWVudHNNb3VudGVkUmVmLmN1cnJlbnQocmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIHVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgdXBkYXRlLCB3aGlsZUVsZW1lbnRzTW91bnRlZFJlZl0pO1xuICBjb25zdCByZWZzID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlUmVmLFxuICAgIGZsb2F0aW5nOiBmbG9hdGluZ1JlZixcbiAgICBzZXRSZWZlcmVuY2UsXG4gICAgc2V0RmxvYXRpbmdcbiAgfSksIFtzZXRSZWZlcmVuY2UsIHNldEZsb2F0aW5nXSk7XG4gIGNvbnN0IGVsZW1lbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlRWwsXG4gICAgZmxvYXRpbmc6IGZsb2F0aW5nRWxcbiAgfSksIFtyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbF0pO1xuICBjb25zdCBmbG9hdGluZ1N0eWxlcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGluaXRpYWxTdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwXG4gICAgfTtcbiAgICBpZiAoIWVsZW1lbnRzLmZsb2F0aW5nKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0eWxlcztcbiAgICB9XG4gICAgY29uc3QgeCA9IHJvdW5kQnlEUFIoZWxlbWVudHMuZmxvYXRpbmcsIGRhdGEueCk7XG4gICAgY29uc3QgeSA9IHJvdW5kQnlEUFIoZWxlbWVudHMuZmxvYXRpbmcsIGRhdGEueSk7XG4gICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFN0eWxlcyxcbiAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiLFxuICAgICAgICAuLi4oZ2V0RFBSKGVsZW1lbnRzLmZsb2F0aW5nKSA+PSAxLjUgJiYge1xuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IHN0cmF0ZWd5LFxuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeVxuICAgIH07XG4gIH0sIFtzdHJhdGVneSwgdHJhbnNmb3JtLCBlbGVtZW50cy5mbG9hdGluZywgZGF0YS54LCBkYXRhLnldKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICAuLi5kYXRhLFxuICAgIHVwZGF0ZSxcbiAgICByZWZzLFxuICAgIGVsZW1lbnRzLFxuICAgIGZsb2F0aW5nU3R5bGVzXG4gIH0pLCBbZGF0YSwgdXBkYXRlLCByZWZzLCBlbGVtZW50cywgZmxvYXRpbmdTdHlsZXNdKTtcbn1cblxuZXhwb3J0IHsgYXJyb3csIHVzZUZsb2F0aW5nIH07XG4iXSwibmFtZXMiOlsiYXJyb3ciLCJhcnJvdyQxIiwiY29tcHV0ZVBvc2l0aW9uIiwiYXV0b1BsYWNlbWVudCIsImF1dG9VcGRhdGUiLCJkZXRlY3RPdmVyZmxvdyIsImZsaXAiLCJnZXRPdmVyZmxvd0FuY2VzdG9ycyIsImhpZGUiLCJpbmxpbmUiLCJsaW1pdFNoaWZ0Iiwib2Zmc2V0IiwicGxhdGZvcm0iLCJzaGlmdCIsInNpemUiLCJSZWFjdCIsInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdCIsIlJlYWN0RE9NIiwib3B0aW9ucyIsImlzUmVmIiwidmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuYW1lIiwiZm4iLCJzdGF0ZSIsImVsZW1lbnQiLCJwYWRkaW5nIiwiY3VycmVudCIsImluZGV4IiwiZG9jdW1lbnQiLCJkZWVwRXF1YWwiLCJhIiwiYiIsInRvU3RyaW5nIiwibGVuZ3RoIiwiaSIsImtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJrZXkiLCIkJHR5cGVvZiIsImdldERQUiIsIndpbiIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJyb3VuZEJ5RFBSIiwiZHByIiwiTWF0aCIsInJvdW5kIiwidXNlTGF0ZXN0UmVmIiwicmVmIiwidXNlUmVmIiwidXNlRmxvYXRpbmciLCJwbGFjZW1lbnQiLCJzdHJhdGVneSIsIm1pZGRsZXdhcmUiLCJlbGVtZW50cyIsInJlZmVyZW5jZSIsImV4dGVybmFsUmVmZXJlbmNlIiwiZmxvYXRpbmciLCJleHRlcm5hbEZsb2F0aW5nIiwidHJhbnNmb3JtIiwid2hpbGVFbGVtZW50c01vdW50ZWQiLCJvcGVuIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsIngiLCJ5IiwibWlkZGxld2FyZURhdGEiLCJpc1Bvc2l0aW9uZWQiLCJsYXRlc3RNaWRkbGV3YXJlIiwic2V0TGF0ZXN0TWlkZGxld2FyZSIsIl9yZWZlcmVuY2UiLCJfc2V0UmVmZXJlbmNlIiwiX2Zsb2F0aW5nIiwiX3NldEZsb2F0aW5nIiwic2V0UmVmZXJlbmNlIiwidXNlQ2FsbGJhY2siLCJub2RlIiwicmVmZXJlbmNlUmVmIiwic2V0RmxvYXRpbmciLCJmbG9hdGluZ1JlZiIsInJlZmVyZW5jZUVsIiwiZmxvYXRpbmdFbCIsImRhdGFSZWYiLCJ3aGlsZUVsZW1lbnRzTW91bnRlZFJlZiIsInBsYXRmb3JtUmVmIiwidXBkYXRlIiwiY29uZmlnIiwidGhlbiIsImZ1bGxEYXRhIiwiaXNNb3VudGVkUmVmIiwiZmx1c2hTeW5jIiwicmVmcyIsInVzZU1lbW8iLCJmbG9hdGluZ1N0eWxlcyIsImluaXRpYWxTdHlsZXMiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJ3aWxsQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@floating-ui+react-dom@2.0.4_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs\n");

/***/ })

};
;