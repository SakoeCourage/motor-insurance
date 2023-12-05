"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.17_@types+react@18.2.38_react-dom@18.2.0_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.17_@types+react@18.2.38_react-dom@18.2.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.17_@types+react@18.2.38_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.17_@types+react@18.2.38_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Presence: () => (/* binding */ $921a889cee6df7e8$export$99c2b779aa4e8b8b)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.38_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.38_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n\n\n\n\nfunction $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((state, event)=>{\n        const nextState = machine[state][event];\n        return nextState !== null && nextState !== void 0 ? nextState : state;\n    }, initialState);\n}\nconst $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props)=>{\n    const { present: present, children: children } = props;\n    const presence = $921a889cee6df7e8$var$usePresence(present);\n    const child = typeof children === \"function\" ? children({\n        present: presence.isPresent\n    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);\n    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(presence.ref, child.ref);\n    const forceMount = typeof children === \"function\";\n    return forceMount || presence.isPresent ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {\n        ref: ref\n    }) : null;\n};\n$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = \"Presence\";\n/* -------------------------------------------------------------------------------------------------\n * usePresence\n * -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$usePresence(present) {\n    const [node1, setNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const stylesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});\n    const prevPresentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present);\n    const prevAnimationNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(\"none\");\n    const initialState = present ? \"mounted\" : \"unmounted\";\n    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {\n        mounted: {\n            UNMOUNT: \"unmounted\",\n            ANIMATION_OUT: \"unmountSuspended\"\n        },\n        unmountSuspended: {\n            MOUNT: \"mounted\",\n            ANIMATION_END: \"unmounted\"\n        },\n        unmounted: {\n            MOUNT: \"mounted\"\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);\n        prevAnimationNameRef.current = state === \"mounted\" ? currentAnimationName : \"none\";\n    }, [\n        state\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        const styles = stylesRef.current;\n        const wasPresent = prevPresentRef.current;\n        const hasPresentChanged = wasPresent !== present;\n        if (hasPresentChanged) {\n            const prevAnimationName = prevAnimationNameRef.current;\n            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);\n            if (present) send(\"MOUNT\");\n            else if (currentAnimationName === \"none\" || (styles === null || styles === void 0 ? void 0 : styles.display) === \"none\") // so we unmount instantly\n            send(\"UNMOUNT\");\n            else {\n                /**\n         * When `present` changes to `false`, we check changes to animation-name to\n         * determine whether an animation has started. We chose this approach (reading\n         * computed styles) because there is no `animationrun` event and `animationstart`\n         * fires after `animation-delay` has expired which would be too late.\n         */ const isAnimating = prevAnimationName !== currentAnimationName;\n                if (wasPresent && isAnimating) send(\"ANIMATION_OUT\");\n                else send(\"UNMOUNT\");\n            }\n            prevPresentRef.current = present;\n        }\n    }, [\n        present,\n        send\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        if (node1) {\n            /**\n       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`\n       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we\n       * make sure we only trigger ANIMATION_END for the currently active animation.\n       */ const handleAnimationEnd = (event)=>{\n                const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);\n                const isCurrentAnimation = currentAnimationName.includes(event.animationName);\n                if (event.target === node1 && isCurrentAnimation) // a frame after the animation ends, creating a flash of visible content.\n                // By manually flushing we ensure they sync within a frame, removing the flash.\n                (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>send(\"ANIMATION_END\"));\n            };\n            const handleAnimationStart = (event)=>{\n                if (event.target === node1) prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);\n            };\n            node1.addEventListener(\"animationstart\", handleAnimationStart);\n            node1.addEventListener(\"animationcancel\", handleAnimationEnd);\n            node1.addEventListener(\"animationend\", handleAnimationEnd);\n            return ()=>{\n                node1.removeEventListener(\"animationstart\", handleAnimationStart);\n                node1.removeEventListener(\"animationcancel\", handleAnimationEnd);\n                node1.removeEventListener(\"animationend\", handleAnimationEnd);\n            };\n        } else // We avoid doing so during cleanup as the node may change but still exist.\n        send(\"ANIMATION_END\");\n    }, [\n        node1,\n        send\n    ]);\n    return {\n        isPresent: [\n            \"mounted\",\n            \"unmountSuspended\"\n        ].includes(state),\n        ref: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{\n            if (node) stylesRef.current = getComputedStyle(node);\n            setNode(node);\n        }, [])\n    };\n}\n/* -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$getAnimationName(styles) {\n    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || \"none\";\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXByZXNlbmNlQDEuMC4xX0B0eXBlcytyZWFjdC1kb21AMTguMi4xN19AdHlwZXMrcmVhY3RAMTguMi4zOF9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdQO0FBQ3hMO0FBQytCO0FBQ0s7QUFPNUYsU0FBU29CLDBDQUEwQ0MsWUFBWSxFQUFFQyxPQUFPO0lBQ3BFLE9BQU9ULGlEQUFpQkEsQ0FBQyxDQUFDVSxPQUFPQztRQUM3QixNQUFNQyxZQUFZSCxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTTtRQUN2QyxPQUFPQyxjQUFjLFFBQVFBLGNBQWMsS0FBSyxJQUFJQSxZQUFZRjtJQUNwRSxHQUFHRjtBQUNQO0FBR0EsTUFBTUssNENBQTRDLENBQUNDO0lBQy9DLE1BQU0sRUFBRUMsU0FBU0EsT0FBTyxFQUFHQyxVQUFVQSxRQUFRLEVBQUcsR0FBR0Y7SUFDbkQsTUFBTUcsV0FBV0Msa0NBQWtDSDtJQUNuRCxNQUFNSSxRQUFRLE9BQU9ILGFBQWEsYUFBYUEsU0FBUztRQUNwREQsU0FBU0UsU0FBU0csU0FBUztJQUMvQixLQUFLaEMsMkNBQWVBLENBQUNpQyxJQUFJLENBQUNMO0lBQzFCLE1BQU1NLE1BQU1sQiw2RUFBc0JBLENBQUNhLFNBQVNLLEdBQUcsRUFBRUgsTUFBTUcsR0FBRztJQUMxRCxNQUFNQyxhQUFhLE9BQU9QLGFBQWE7SUFDdkMsT0FBT08sY0FBY04sU0FBU0csU0FBUyxHQUFHLFdBQVcsR0FBRzlCLG1EQUFtQkEsQ0FBQzZCLE9BQU87UUFDL0VHLEtBQUtBO0lBQ1QsS0FBSztBQUNUO0FBQ0FULDBDQUEwQ1csV0FBVyxHQUFHO0FBQ3hEOztrR0FFa0csR0FBRyxTQUFTTixrQ0FBa0NILE9BQU87SUFDbkosTUFBTSxDQUFD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TUFBTTtJQUN2SixPQUFPLENBQUNBLFdBQVcsUUFBUUEsV0FBVyxLQUFLLElBQUksS0FBSyxJQUFJQSxPQUFPUyxhQUFhLEtBQUs7QUFDckY7QUFLK0QsQ0FDL0Qsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxsLWluLW9uZS1pbnMvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXByZXNlbmNlQDEuMC4xX0B0eXBlcytyZWFjdC1kb21AMTguMi4xN19AdHlwZXMrcmVhY3RAMTguMi4zOF9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL2Rpc3QvaW5kZXgubWpzP2ZmNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGlsZHJlbiBhcyAkaXFxM3IkQ2hpbGRyZW4sIGNsb25lRWxlbWVudCBhcyAkaXFxM3IkY2xvbmVFbGVtZW50LCB1c2VTdGF0ZSBhcyAkaXFxM3IkdXNlU3RhdGUsIHVzZVJlZiBhcyAkaXFxM3IkdXNlUmVmLCB1c2VFZmZlY3QgYXMgJGlxcTNyJHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgYXMgJGlxcTNyJHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyIGFzICRpcXEzciR1c2VSZWR1Y2VyfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Zmx1c2hTeW5jIGFzICRpcXEzciRmbHVzaFN5bmN9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7dXNlQ29tcG9zZWRSZWZzIGFzICRpcXEzciR1c2VDb21wb3NlZFJlZnN9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzXCI7XG5pbXBvcnQge3VzZUxheW91dEVmZmVjdCBhcyAkaXFxM3IkdXNlTGF5b3V0RWZmZWN0fSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXVzZS1sYXlvdXQtZWZmZWN0XCI7XG5cblxuXG5cblxuXG5mdW5jdGlvbiAkZmU5NjNiMzU1MzQ3Y2M2OCRleHBvcnQkM2U2NTQzZGUxNGY4NjE0Zihpbml0aWFsU3RhdGUsIG1hY2hpbmUpIHtcbiAgICByZXR1cm4gJGlxcTNyJHVzZVJlZHVjZXIoKHN0YXRlLCBldmVudCk9PntcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0gbWFjaGluZVtzdGF0ZV1bZXZlbnRdO1xuICAgICAgICByZXR1cm4gbmV4dFN0YXRlICE9PSBudWxsICYmIG5leHRTdGF0ZSAhPT0gdm9pZCAwID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gICAgfSwgaW5pdGlhbFN0YXRlKTtcbn1cblxuXG5jb25zdCAkOTIxYTg4OWNlZTZkZjdlOCRleHBvcnQkOTljMmI3NzlhYTRlOGI4YiA9IChwcm9wcyk9PntcbiAgICBjb25zdCB7IHByZXNlbnQ6IHByZXNlbnQgLCBjaGlsZHJlbjogY2hpbGRyZW4gIH0gPSBwcm9wcztcbiAgICBjb25zdCBwcmVzZW5jZSA9ICQ5MjFhODg5Y2VlNmRmN2U4JHZhciR1c2VQcmVzZW5jZShwcmVzZW50KTtcbiAgICBjb25zdCBjaGlsZCA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHtcbiAgICAgICAgcHJlc2VudDogcHJlc2VuY2UuaXNQcmVzZW50XG4gICAgfSkgOiAkaXFxM3IkQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgY29uc3QgcmVmID0gJGlxcTNyJHVzZUNvbXBvc2VkUmVmcyhwcmVzZW5jZS5yZWYsIGNoaWxkLnJlZik7XG4gICAgY29uc3QgZm9yY2VNb3VudCA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgICByZXR1cm4gZm9yY2VNb3VudCB8fCBwcmVzZW5jZS5pc1ByZXNlbnQgPyAvKiNfX1BVUkVfXyovICRpcXEzciRjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgcmVmOiByZWZcbiAgICB9KSA6IG51bGw7XG59O1xuJDkyMWE4ODljZWU2ZGY3ZTgkZXhwb3J0JDk5YzJiNzc5YWE0ZThiOGIuZGlzcGxheU5hbWUgPSAnUHJlc2VuY2UnO1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogdXNlUHJlc2VuY2VcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gZnVuY3Rpb24gJDkyMWE4ODljZWU2ZGY3ZTgkdmFyJHVzZVByZXNlbmNlKHByZXNlbnQpIHtcbiAgICBjb25zdCBbbm9kZTEsIHNldE5vZGVdID0gJGlxcTNyJHVzZVN0YXRlKCk7XG4gICAgY29uc3Qgc3R5bGVzUmVmID0gJGlxcTNyJHVzZVJlZih7fSk7XG4gICAgY29uc3QgcHJldlByZXNlbnRSZWYgPSAkaXFxM3IkdXNlUmVmKHByZXNlbnQpO1xuICAgIGNvbnN0IHByZXZBbmltYXRpb25OYW1lUmVmID0gJGlxcTNyJHVzZVJlZignbm9uZScpO1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHByZXNlbnQgPyAnbW91bnRlZCcgOiAndW5tb3VudGVkJztcbiAgICBjb25zdCBbc3RhdGUsIHNlbmRdID0gJGZlOTYzYjM1NTM0N2NjNjgkZXhwb3J0JDNlNjU0M2RlMTRmODYxNGYoaW5pdGlhbFN0YXRlLCB7XG4gICAgICAgIG1vdW50ZWQ6IHtcbiAgICAgICAgICAgIFVOTU9VTlQ6ICd1bm1vdW50ZWQnLFxuICAgICAgICAgICAgQU5JTUFUSU9OX09VVDogJ3VubW91bnRTdXNwZW5kZWQnXG4gICAgICAgIH0sXG4gICAgICAgIHVubW91bnRTdXNwZW5kZWQ6IHtcbiAgICAgICAgICAgIE1PVU5UOiAnbW91bnRlZCcsXG4gICAgICAgICAgICBBTklNQVRJT05fRU5EOiAndW5tb3VudGVkJ1xuICAgICAgICB9LFxuICAgICAgICB1bm1vdW50ZWQ6IHtcbiAgICAgICAgICAgIE1PVU5UOiAnbW91bnRlZCdcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICRpcXEzciR1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3QgY3VycmVudEFuaW1hdGlvbk5hbWUgPSAkOTIxYTg4OWNlZTZkZjdlOCR2YXIkZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXNSZWYuY3VycmVudCk7XG4gICAgICAgIHByZXZBbmltYXRpb25OYW1lUmVmLmN1cnJlbnQgPSBzdGF0ZSA9PT0gJ21vdW50ZWQnID8gY3VycmVudEFuaW1hdGlvbk5hbWUgOiAnbm9uZSc7XG4gICAgfSwgW1xuICAgICAgICBzdGF0ZVxuICAgIF0pO1xuICAgICRpcXEzciR1c2VMYXlvdXRFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gc3R5bGVzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHdhc1ByZXNlbnQgPSBwcmV2UHJlc2VudFJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBoYXNQcmVzZW50Q2hhbmdlZCA9IHdhc1ByZXNlbnQgIT09IHByZXNlbnQ7XG4gICAgICAgIGlmIChoYXNQcmVzZW50Q2hhbmdlZCkge1xuICAgICAgICAgICAgY29uc3QgcHJldkFuaW1hdGlvbk5hbWUgPSBwcmV2QW5pbWF0aW9uTmFtZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEFuaW1hdGlvbk5hbWUgPSAkOTIxYTg4OWNlZTZkZjdlOCR2YXIkZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXMpO1xuICAgICAgICAgICAgaWYgKHByZXNlbnQpIHNlbmQoJ01PVU5UJyk7XG4gICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50QW5pbWF0aW9uTmFtZSA9PT0gJ25vbmUnIHx8IChzdHlsZXMgPT09IG51bGwgfHwgc3R5bGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZXMuZGlzcGxheSkgPT09ICdub25lJykgLy8gSWYgdGhlcmUgaXMgbm8gZXhpdCBhbmltYXRpb24gb3IgdGhlIGVsZW1lbnQgaXMgaGlkZGVuLCBhbmltYXRpb25zIHdvbid0IHJ1blxuICAgICAgICAgICAgLy8gc28gd2UgdW5tb3VudCBpbnN0YW50bHlcbiAgICAgICAgICAgIHNlbmQoJ1VOTU9VTlQnKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGBwcmVzZW50YCBjaGFuZ2VzIHRvIGBmYWxzZWAsIHdlIGNoZWNrIGNoYW5nZXMgdG8gYW5pbWF0aW9uLW5hbWUgdG9cbiAgICAgICAgICogZGV0ZXJtaW5lIHdoZXRoZXIgYW4gYW5pbWF0aW9uIGhhcyBzdGFydGVkLiBXZSBjaG9zZSB0aGlzIGFwcHJvYWNoIChyZWFkaW5nXG4gICAgICAgICAqIGNvbXB1dGVkIHN0eWxlcykgYmVjYXVzZSB0aGVyZSBpcyBubyBgYW5pbWF0aW9ucnVuYCBldmVudCBhbmQgYGFuaW1hdGlvbnN0YXJ0YFxuICAgICAgICAgKiBmaXJlcyBhZnRlciBgYW5pbWF0aW9uLWRlbGF5YCBoYXMgZXhwaXJlZCB3aGljaCB3b3VsZCBiZSB0b28gbGF0ZS5cbiAgICAgICAgICovIGNvbnN0IGlzQW5pbWF0aW5nID0gcHJldkFuaW1hdGlvbk5hbWUgIT09IGN1cnJlbnRBbmltYXRpb25OYW1lO1xuICAgICAgICAgICAgICAgIGlmICh3YXNQcmVzZW50ICYmIGlzQW5pbWF0aW5nKSBzZW5kKCdBTklNQVRJT05fT1VUJyk7XG4gICAgICAgICAgICAgICAgZWxzZSBzZW5kKCdVTk1PVU5UJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2UHJlc2VudFJlZi5jdXJyZW50ID0gcHJlc2VudDtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgcHJlc2VudCxcbiAgICAgICAgc2VuZFxuICAgIF0pO1xuICAgICRpcXEzciR1c2VMYXlvdXRFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKG5vZGUxKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAqIFRyaWdnZXJpbmcgYW4gQU5JTUFUSU9OX09VVCBkdXJpbmcgYW4gQU5JTUFUSU9OX0lOIHdpbGwgZmlyZSBhbiBgYW5pbWF0aW9uY2FuY2VsYFxuICAgICAgICogZXZlbnQgZm9yIEFOSU1BVElPTl9JTiBhZnRlciB3ZSBoYXZlIGVudGVyZWQgYHVubW91bnRTdXNwZW5kZWRgIHN0YXRlLiBTbywgd2VcbiAgICAgICAqIG1ha2Ugc3VyZSB3ZSBvbmx5IHRyaWdnZXIgQU5JTUFUSU9OX0VORCBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgYW5pbWF0aW9uLlxuICAgICAgICovIGNvbnN0IGhhbmRsZUFuaW1hdGlvbkVuZCA9IChldmVudCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QW5pbWF0aW9uTmFtZSA9ICQ5MjFhODg5Y2VlNmRmN2U4JHZhciRnZXRBbmltYXRpb25OYW1lKHN0eWxlc1JlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRBbmltYXRpb24gPSBjdXJyZW50QW5pbWF0aW9uTmFtZS5pbmNsdWRlcyhldmVudC5hbmltYXRpb25OYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBub2RlMSAmJiBpc0N1cnJlbnRBbmltYXRpb24pIC8vIFdpdGggUmVhY3QgMTggY29uY3VycmVuY3kgdGhpcyB1cGRhdGUgaXMgYXBwbGllZFxuICAgICAgICAgICAgICAgIC8vIGEgZnJhbWUgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBlbmRzLCBjcmVhdGluZyBhIGZsYXNoIG9mIHZpc2libGUgY29udGVudC5cbiAgICAgICAgICAgICAgICAvLyBCeSBtYW51YWxseSBmbHVzaGluZyB3ZSBlbnN1cmUgdGhleSBzeW5jIHdpdGhpbiBhIGZyYW1lLCByZW1vdmluZyB0aGUgZmxhc2guXG4gICAgICAgICAgICAgICAgJGlxcTNyJGZsdXNoU3luYygoKT0+c2VuZCgnQU5JTUFUSU9OX0VORCcpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVBbmltYXRpb25TdGFydCA9IChldmVudCk9PntcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBub2RlMSkgLy8gaWYgYW5pbWF0aW9uIG9jY3VycmVkLCBzdG9yZSBpdHMgbmFtZSBhcyB0aGUgcHJldmlvdXMgYW5pbWF0aW9uLlxuICAgICAgICAgICAgICAgIHByZXZBbmltYXRpb25OYW1lUmVmLmN1cnJlbnQgPSAkOTIxYTg4OWNlZTZkZjdlOCR2YXIkZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXNSZWYuY3VycmVudCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbm9kZTEuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uc3RhcnQnLCBoYW5kbGVBbmltYXRpb25TdGFydCk7XG4gICAgICAgICAgICBub2RlMS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25jYW5jZWwnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgICAgICAgbm9kZTEuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgICAgIHJldHVybiAoKT0+e1xuICAgICAgICAgICAgICAgIG5vZGUxLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbnN0YXJ0JywgaGFuZGxlQW5pbWF0aW9uU3RhcnQpO1xuICAgICAgICAgICAgICAgIG5vZGUxLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmNhbmNlbCcsIGhhbmRsZUFuaW1hdGlvbkVuZCk7XG4gICAgICAgICAgICAgICAgbm9kZTEucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaGFuZGxlQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSAvLyBUcmFuc2l0aW9uIHRvIHRoZSB1bm1vdW50ZWQgc3RhdGUgaWYgdGhlIG5vZGUgaXMgcmVtb3ZlZCBwcmVtYXR1cmVseS5cbiAgICAgICAgLy8gV2UgYXZvaWQgZG9pbmcgc28gZHVyaW5nIGNsZWFudXAgYXMgdGhlIG5vZGUgbWF5IGNoYW5nZSBidXQgc3RpbGwgZXhpc3QuXG4gICAgICAgIHNlbmQoJ0FOSU1BVElPTl9FTkQnKTtcbiAgICB9LCBbXG4gICAgICAgIG5vZGUxLFxuICAgICAgICBzZW5kXG4gICAgXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNQcmVzZW50OiBbXG4gICAgICAgICAgICAnbW91bnRlZCcsXG4gICAgICAgICAgICAndW5tb3VudFN1c3BlbmRlZCdcbiAgICAgICAgXS5pbmNsdWRlcyhzdGF0ZSksXG4gICAgICAgIHJlZjogJGlxcTNyJHVzZUNhbGxiYWNrKChub2RlKT0+e1xuICAgICAgICAgICAgaWYgKG5vZGUpIHN0eWxlc1JlZi5jdXJyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgICAgIHNldE5vZGUobm9kZSk7XG4gICAgICAgIH0sIFtdKVxuICAgIH07XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGZ1bmN0aW9uICQ5MjFhODg5Y2VlNmRmN2U4JHZhciRnZXRBbmltYXRpb25OYW1lKHN0eWxlcykge1xuICAgIHJldHVybiAoc3R5bGVzID09PSBudWxsIHx8IHN0eWxlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGVzLmFuaW1hdGlvbk5hbWUpIHx8ICdub25lJztcbn1cblxuXG5cblxuZXhwb3J0IHskOTIxYTg4OWNlZTZkZjdlOCRleHBvcnQkOTljMmI3NzlhYTRlOGI4YiBhcyBQcmVzZW5jZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iXSwibmFtZXMiOlsiQ2hpbGRyZW4iLCIkaXFxM3IkQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCIkaXFxM3IkY2xvbmVFbGVtZW50IiwidXNlU3RhdGUiLCIkaXFxM3IkdXNlU3RhdGUiLCJ1c2VSZWYiLCIkaXFxM3IkdXNlUmVmIiwidXNlRWZmZWN0IiwiJGlxcTNyJHVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiJGlxcTNyJHVzZUNhbGxiYWNrIiwidXNlUmVkdWNlciIsIiRpcXEzciR1c2VSZWR1Y2VyIiwiZmx1c2hTeW5jIiwiJGlxcTNyJGZsdXNoU3luYyIsInVzZUNvbXBvc2VkUmVmcyIsIiRpcXEzciR1c2VDb21wb3NlZFJlZnMiLCJ1c2VMYXlvdXRFZmZlY3QiLCIkaXFxM3IkdXNlTGF5b3V0RWZmZWN0IiwiJGZlOTYzYjM1NTM0N2NjNjgkZXhwb3J0JDNlNjU0M2RlMTRmODYxNGYiLCJpbml0aWFsU3RhdGUiLCJtYWNoaW5lIiwic3RhdGUiLCJldmVudCIsIm5leHRTdGF0ZSIsIiQ5MjFhODg5Y2VlNmRmN2U4JGV4cG9ydCQ5OWMyYjc3OWFhNGU4YjhiIiwicHJvcHMiLCJwcmVzZW50IiwiY2hpbGRyZW4iLCJwcmVzZW5jZSIsIiQ5MjFhODg5Y2VlNmRmN2U4JHZhciR1c2VQcmVzZW5jZSIsImNoaWxkIiwiaXNQcmVzZW50Iiwib25seSIsInJlZiIsImZvcmNlTW91bnQiLCJkaXNwbGF5TmFtZSIsIm5vZGUxIiwic2V0Tm9kZSIsInN0eWxlc1JlZiIsInByZXZQcmVzZW50UmVmIiwicHJldkFuaW1hdGlvbk5hbWVSZWYiLCJzZW5kIiwibW91bnRlZCIsIlVOTU9VTlQiLCJBTklNQVRJT05fT1VUIiwidW5tb3VudFN1c3BlbmRlZCIsIk1PVU5UIiwiQU5JTUFUSU9OX0VORCIsInVubW91bnRlZCIsImN1cnJlbnRBbmltYXRpb25OYW1lIiwiJDkyMWE4ODljZWU2ZGY3ZTgkdmFyJGdldEFuaW1hdGlvbk5hbWUiLCJjdXJyZW50Iiwic3R5bGVzIiwid2FzUHJlc2VudCIsImhhc1ByZXNlbnRDaGFuZ2VkIiwicHJldkFuaW1hdGlvbk5hbWUiLCJkaXNwbGF5IiwiaXNBbmltYXRpbmciLCJoYW5kbGVBbmltYXRpb25FbmQiLCJpc0N1cnJlbnRBbmltYXRpb24iLCJpbmNsdWRlcyIsImFuaW1hdGlvbk5hbWUiLCJ0YXJnZXQiLCJoYW5kbGVBbmltYXRpb25TdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibm9kZSIsImdldENvbXB1dGVkU3R5bGUiLCJQcmVzZW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.17_@types+react@18.2.38_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs\n");

/***/ })

};
;