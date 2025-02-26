"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"react-chartjs-2\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"chart.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__, chart_js__WEBPACK_IMPORTED_MODULE_3__]);\n([react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__, chart_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Register Chart.js components\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nfunction Home() {\n    const { 0: chartData , 1: setChartData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"https://api.github.com/users/bniladridas/repos\");\n                const data = await response.json();\n                const languages = {};\n                data.forEach((repo)=>{\n                    if (repo.language) {\n                        languages[repo.language] = (languages[repo.language] || 0) + 1;\n                    }\n                });\n                setChartData({\n                    labels: Object.keys(languages),\n                    datasets: [\n                        {\n                            label: \"Repositories by Language\",\n                            data: Object.values(languages),\n                            backgroundColor: \"rgba(75, 192, 192, 0.6)\"\n                        }, \n                    ]\n                });\n            } catch (error) {\n                console.error(\"Error fetching GitHub data:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to the Bniladridas App!\"\n            }, void 0, false, {\n                fileName: \"/Users/niladridas/Desktop/bniladridas/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading chart data...\"\n            }, void 0, false, {\n                fileName: \"/Users/niladridas/Desktop/bniladridas/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this) : chartData.labels.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n                data: chartData,\n                options: {\n                    responsive: true,\n                    plugins: {\n                        legend: {\n                            position: \"top\"\n                        },\n                        title: {\n                            display: true,\n                            text: \"GitHub Language Usage\"\n                        }\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"/Users/niladridas/Desktop/bniladridas/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No language data available.\"\n            }, void 0, false, {\n                fileName: \"/Users/niladridas/Desktop/bniladridas/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/niladridas/Desktop/bniladridas/pages/index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDYjtBQUNzRTtBQUU1RywrQkFBK0I7QUFDL0JLLG9EQUFnQixDQUNkQyxtREFBYSxFQUNiQyxpREFBVyxFQUNYQyxnREFBVSxFQUNWQywyQ0FBSyxFQUNMQyw2Q0FBTyxFQUNQQyw0Q0FBTSxDQUNQLENBQUM7QUFFYSxTQUFTRSxJQUFJLEdBQUc7SUFDN0IsTUFBTSxLQUFDQyxTQUFTLE1BQUVDLFlBQVksTUFBSWIsK0NBQVEsQ0FBQztRQUN6Q2MsTUFBTSxFQUFFLEVBQUU7UUFDVkMsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0lBQ0YsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSWpCLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBRTVDRCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNbUIsU0FBUyxHQUFHLFVBQVk7WUFDNUIsSUFBSTtnQkFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDO2dCQUM5RSxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFJLEVBQUU7Z0JBQ2xDLE1BQU1DLFNBQVMsR0FBRyxFQUFFO2dCQUVwQkYsSUFBSSxDQUFDRyxPQUFPLENBQUNDLENBQUFBLElBQUksR0FBSTtvQkFDbkIsSUFBSUEsSUFBSSxDQUFDQyxRQUFRLEVBQUU7d0JBQ2pCSCxTQUFTLENBQUNFLElBQUksQ0FBQ0MsUUFBUSxDQUFDLEdBQUcsQ0FBQ0gsU0FBUyxDQUFDRSxJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2pFLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBRUhiLFlBQVksQ0FBQztvQkFDWEMsTUFBTSxFQUFFYSxNQUFNLENBQUNDLElBQUksQ0FBQ0wsU0FBUyxDQUFDO29CQUM5QlIsUUFBUSxFQUFFO3dCQUNSOzRCQUNFYyxLQUFLLEVBQUUsMEJBQTBCOzRCQUNqQ1IsSUFBSSxFQUFFTSxNQUFNLENBQUNHLE1BQU0sQ0FBQ1AsU0FBUyxDQUFDOzRCQUM5QlEsZUFBZSxFQUFFLHlCQUF5Qjt5QkFDM0M7cUJBQ0Y7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsRUFBRSxPQUFPQyxLQUFLLEVBQUU7Z0JBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDZCQUE2QixFQUFFQSxLQUFLLENBQUMsQ0FBQztZQUN0RCxDQUFDLFFBQVM7Z0JBQ1JmLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixDQUFDO1FBQ0gsQ0FBQztRQUVEQyxTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDZ0IsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsaUNBQStCOzs7OztvQkFBSztZQUN2Q25CLE9BQU8saUJBQ04sOERBQUNvQixHQUFDOzBCQUFDLHVCQUFxQjs7Ozs7b0JBQUksR0FFNUJ4QixTQUFTLENBQUNFLE1BQU0sQ0FBQ3VCLE1BQU0sR0FBRyxDQUFDLGlCQUN6Qiw4REFBQ3BDLGdEQUFHO2dCQUNGb0IsSUFBSSxFQUFFVCxTQUFTO2dCQUNmMEIsT0FBTyxFQUFFO29CQUNQQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEJDLE9BQU8sRUFBRTt3QkFDUEMsTUFBTSxFQUFFOzRCQUNOQyxRQUFRLEVBQUUsS0FBSzt5QkFDaEI7d0JBQ0RDLEtBQUssRUFBRTs0QkFDTEMsT0FBTyxFQUFFLElBQUk7NEJBQ2JDLElBQUksRUFBRSx1QkFBdUI7eUJBQzlCO3FCQUNGO2lCQUNGOzs7OztvQkFDRCxpQkFFRiw4REFBQ1QsR0FBQzswQkFBQyw2QkFBMkI7Ozs7O29CQUFJOzs7Ozs7WUFHbEMsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibmlsYWRyaWRhcy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IHsgQ2hhcnQgYXMgQ2hhcnRKUywgQ2F0ZWdvcnlTY2FsZSwgTGluZWFyU2NhbGUsIEJhckVsZW1lbnQsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQgfSBmcm9tICdjaGFydC5qcyc7XG5cbi8vIFJlZ2lzdGVyIENoYXJ0LmpzIGNvbXBvbmVudHNcbkNoYXJ0SlMucmVnaXN0ZXIoXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBCYXJFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2hhcnREYXRhLCBzZXRDaGFydERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGxhYmVsczogW10sXG4gICAgZGF0YXNldHM6IFtdXG4gIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYm5pbGFkcmlkYXMvcmVwb3MnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0ge307XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKHJlcG8gPT4ge1xuICAgICAgICAgIGlmIChyZXBvLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICBsYW5ndWFnZXNbcmVwby5sYW5ndWFnZV0gPSAobGFuZ3VhZ2VzW3JlcG8ubGFuZ3VhZ2VdIHx8IDApICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldENoYXJ0RGF0YSh7XG4gICAgICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyhsYW5ndWFnZXMpLFxuICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiAnUmVwb3NpdG9yaWVzIGJ5IExhbmd1YWdlJyxcbiAgICAgICAgICAgICAgZGF0YTogT2JqZWN0LnZhbHVlcyhsYW5ndWFnZXMpLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC42KScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgR2l0SHViIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPldlbGNvbWUgdG8gdGhlIEJuaWxhZHJpZGFzIEFwcCE8L2gxPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxwPkxvYWRpbmcgY2hhcnQgZGF0YS4uLjwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIGNoYXJ0RGF0YS5sYWJlbHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8QmFyIFxuICAgICAgICAgICAgZGF0YT17Y2hhcnREYXRhfVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdHaXRIdWIgTGFuZ3VhZ2UgVXNhZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+Tm8gbGFuZ3VhZ2UgZGF0YSBhdmFpbGFibGUuPC9wPlxuICAgICAgICApXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCYXIiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJCYXJFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwicmVnaXN0ZXIiLCJIb21lIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImxhbmd1YWdlcyIsImZvckVhY2giLCJyZXBvIiwibGFuZ3VhZ2UiLCJPYmplY3QiLCJrZXlzIiwibGFiZWwiLCJ2YWx1ZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJoMSIsInAiLCJsZW5ndGgiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "chart.js":
/*!***************************!*\
  !*** external "chart.js" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("chart.js");;

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-chartjs-2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();