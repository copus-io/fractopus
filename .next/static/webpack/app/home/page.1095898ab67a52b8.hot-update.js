"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/page",{

/***/ "(app-pages-browser)/./src/app/home/page.tsx":
/*!*******************************!*\
  !*** ./src/app/home/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1_sass@1.77.6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1_sass@1.77.6/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.scss */ \"(app-pages-browser)/./src/app/home/page.module.scss\");\n/* harmony import */ var _page_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_img_ic_frac_1_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/img/ic-frac-1.webp */ \"(app-pages-browser)/./public/assets/img/ic-frac-1.webp\");\n/* harmony import */ var _public_assets_img_ic_frac_2_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/assets/img/ic-frac-2.webp */ \"(app-pages-browser)/./public/assets/img/ic-frac-2.webp\");\n/* harmony import */ var _public_assets_img_ic_frac_3_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/img/ic-frac-3.webp */ \"(app-pages-browser)/./public/assets/img/ic-frac-3.webp\");\n/* harmony import */ var _public_assets_img_ic_frac_4_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/assets/img/ic-frac-4.webp */ \"(app-pages-browser)/./public/assets/img/ic-frac-4.webp\");\n/* harmony import */ var _public_assets_img_ic_frac_top_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/assets/img/ic-frac-top.webp */ \"(app-pages-browser)/./public/assets/img/ic-frac-top.webp\");\n/* harmony import */ var _components_Fractopus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Fractopus */ \"(app-pages-browser)/./src/components/Fractopus/index.tsx\");\n/* harmony import */ var _components_Protocol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Protocol */ \"(app-pages-browser)/./src/components/Protocol/index.tsx\");\n/* harmony import */ var _components_UseCases__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/UseCases */ \"(app-pages-browser)/./src/components/UseCases/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1_sass@1.77.6/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const title = [\n        {\n            text: \"Manifesto\",\n            link: \"#manifesto\"\n        },\n        {\n            text: \"Protocol\",\n            link: \"#protocol\"\n        },\n        {\n            text: \"Use cases\",\n            link: \"#use-cases\"\n        }\n    ];\n    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_11__.useRef)(null);\n    const [opacity, setOpacity] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(1);\n    const [opacity2, set2Opacity] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(1);\n    const [opacity3, set3Opacity] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(1);\n    const [opacity4, set4Opacity] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{\n        var _scrollRef_current;\n        const handler = function(e) {\n            // scrollHeight是可滚动区域的总高度， innerHeight是可视窗口的高度， scrollTop是盒子可视窗口的最顶部，到盒子可滚动上限的距离\n            // 还有一个可以性能优化的点， this.scrollHeight 在没有获取新数据时，是固定的，可以存起来成一个变量，获取新数据再更新，减少重排重绘\n            // console.log(\"this.scrollHeight\", this.scrollTop);\n            // 367  916 1493 1916  2530\n            // 滚动条距离顶部的距离小于367， 第一个图片的透明度逐渐变为1\n            if (this.scrollTop === 0) {\n                setOpacity(1);\n            }\n            if (this.scrollTop > 100 && this.scrollTop < 367) {\n                setOpacity(1 - this.scrollTop / 367);\n            }\n            // 滚动条距离顶部的距离大于916， 第二个图片的透明度逐渐变为1 第一个图片的透明度逐渐变为0\n            if (this.scrollTop > 367 && this.scrollTop < 916) {\n                set2Opacity(1 - (this.scrollTop - 916) / 587);\n                setOpacity(1 - (this.scrollTop - 916) / 587);\n            }\n            // 滚动条距离顶部的距离大于1493， 第三个图片的透明度逐渐变为1 第二个图片的透明度逐渐变为0 第一个图片的透明度逐渐变为0\n            if (this.scrollTop > 1493 && this.scrollTop < 1916) {\n                set3Opacity(1 - (this.scrollTop - 1493) / 423);\n                set2Opacity(1 - (this.scrollTop - 1493) / 423);\n                setOpacity(1 - (this.scrollTop - 1493) / 423);\n            }\n            // 滚动条距离顶部的距离大于1916， 第四个图片的透明度逐渐变为1 第三个图片的透明度逐渐变为0 第二个图片的透明度逐渐变为0 第一个图片的透明度逐渐变为0\n            if (this.scrollTop > 1916 && this.scrollTop < 2530) {\n                set4Opacity(1 - (this.scrollTop - 1916) / 614);\n                set3Opacity(1 - (this.scrollTop - 1916) / 614);\n            }\n            // 滚动条距离顶部的距离大于2530， 第四个图片的透明度为1 第三个图片的透明度为1 第二个图片的透明度为1 第一个图片的透明度为1\n            if (this.scrollTop > 2530) {\n                set4Opacity(1);\n            }\n        };\n        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.addEventListener(\"scroll\", handler);\n    });\n    const goView = (index)=>{\n        // 媒体查询 500px\n        if (window.matchMedia(\"(max-width: 500px)\").matches) {\n            var _scrollRef_current;\n            (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollTo({\n                top: index === 0 ? 500 : index === 1 ? 3114 : index === 2 ? 5200 : 1000,\n                behavior: \"smooth\"\n            });\n        } else {\n            var _scrollRef_current1;\n            (_scrollRef_current1 = scrollRef.current) === null || _scrollRef_current1 === void 0 ? void 0 : _scrollRef_current1.scrollTo({\n                top: index === 0 ? 100 : index === 1 ? 1916 : index === 2 ? 4000 : 2530,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bg),\n        ref: scrollRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().titleContainer),\n                            children: title.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center mr-[5px]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            cursor: \"pointer\"\n                                        },\n                                        onClick: ()=>goView(index),\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bgImgTop),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: _public_assets_img_ic_frac_top_webp__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src,\n                            className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().img),\n                            alt: \"ic-frac\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"manifesto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Fractopus__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"protocol\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Protocol__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"use-cases\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UseCases__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\xa9 2024 S31 Labs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bgImg),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            opacity: opacity\n                        },\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bgImgInner1),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: _public_assets_img_ic_frac_1_webp__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"ic-frac\",\n                            sizes: \"100vw, 100vw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bgImgInner2),\n                        style: {\n                            opacity: opacity2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: _public_assets_img_ic_frac_2_webp__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"ic-frac\",\n                            sizes: \"100vw, 100vw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bgImgInner3),\n                        style: {\n                            opacity: opacity3\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: _public_assets_img_ic_frac_3_webp__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"ic-frac\",\n                            sizes: \"100vw, 100vw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bgImgInner4),\n                        style: {\n                            opacity: opacity4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: _public_assets_img_ic_frac_4_webp__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"ic-frac\",\n                            sizes: \"100vw, 100vw\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zhouyang/dev/fractopus/fractopus/src/app/home/page.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"3n59OoHIIgB112RO8hQxvaY609c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9tZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNTO0FBQ3VCO0FBQ0M7QUFDQTtBQUNBO0FBQ0k7QUFDakI7QUFDRjtBQUNKO0FBQ087QUFDcEQsTUFBTWEsT0FBTzs7SUFDWCxNQUFNQyxRQUFRO1FBQ1o7WUFDRUMsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VELE1BQU07WUFDTkMsTUFBTTtRQUNSO0tBQ0Q7SUFDRCxNQUFNQyxZQUFZTiw4Q0FBTUEsQ0FBTTtJQUM5QixNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1AsZ0RBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULGdEQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCxnREFBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsZ0RBQVFBLENBQUM7SUFDekNGLGlEQUFTQSxDQUFDO1lBa0NSTztRQWpDQSxNQUFNUyxVQUFVLFNBQTZCQyxDQUFRO1lBQ25ELGdGQUFnRjtZQUNoRiw0RUFBNEU7WUFDNUUsb0RBQW9EO1lBQ3BELDJCQUEyQjtZQUMzQixrQ0FBa0M7WUFDbEMsSUFBSSxJQUFJLENBQUNDLFNBQVMsS0FBSyxHQUFHO2dCQUN4QlQsV0FBVztZQUNiO1lBQ0EsSUFBSSxJQUFJLENBQUNTLFNBQVMsR0FBRyxPQUFPLElBQUksQ0FBQ0EsU0FBUyxHQUFHLEtBQUs7Z0JBQ2hEVCxXQUFXLElBQUksSUFBSSxDQUFDUyxTQUFTLEdBQUc7WUFDbEM7WUFDQSxpREFBaUQ7WUFDakQsSUFBSSxJQUFJLENBQUNBLFNBQVMsR0FBRyxPQUFPLElBQUksQ0FBQ0EsU0FBUyxHQUFHLEtBQUs7Z0JBQ2hEUCxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUNPLFNBQVMsR0FB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Ozs7Ozs7Ozs7OzswQkFJWCw4REFBQ0E7Z0JBQUlDLFdBQVd2QyxnRUFBWTs7a0NBQzFCLDhEQUFDc0M7d0JBQUlTLE9BQU87NEJBQUU5QixTQUFTQTt3QkFBUTt3QkFBR3NCLFdBQVd2QyxzRUFBa0I7a0NBQzdELDRFQUFDRCxrREFBS0E7NEJBQUNxRCxLQUFLbkQseUVBQU1BOzRCQUFFb0QsS0FBSTs0QkFBVU0sT0FBTTs7Ozs7Ozs7Ozs7a0NBRTFDLDhEQUFDckI7d0JBQUlDLFdBQVd2QyxzRUFBa0I7d0JBQUUrQyxPQUFPOzRCQUFFOUIsU0FBU0U7d0JBQVM7a0NBQzdELDRFQUFDcEIsa0RBQUtBOzRCQUFDcUQsS0FBS2xELHlFQUFPQTs0QkFBRW1ELEtBQUk7NEJBQVVNLE9BQU07Ozs7Ozs7Ozs7O2tDQUUzQyw4REFBQ3JCO3dCQUFJQyxXQUFXdkMsc0VBQWtCO3dCQUFFK0MsT0FBTzs0QkFBRTlCLFNBQVNJO3dCQUFTO2tDQUM3RCw0RUFBQ3RCLGtEQUFLQTs0QkFBQ3FELEtBQUtqRCx5RUFBT0E7NEJBQUVrRCxLQUFJOzRCQUFVTSxPQUFNOzs7Ozs7Ozs7OztrQ0FFM0MsOERBQUNyQjt3QkFBSUMsV0FBV3ZDLHNFQUFrQjt3QkFBRStDLE9BQU87NEJBQUU5QixTQUFTTTt3QkFBUztrQ0FDN0QsNEVBQUN4QixrREFBS0E7NEJBQUNxRCxLQUFLaEQseUVBQU9BOzRCQUFFaUQsS0FBSTs0QkFBVU0sT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkQ7R0EvSE0vQztLQUFBQTtBQWdJTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2hvbWUvcGFnZS50c3g/ZGIyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgaWNGcmFjIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9pYy1mcmFjLTEud2VicFwiO1xuaW1wb3J0IGljRnJhYzIgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1nL2ljLWZyYWMtMi53ZWJwXCI7XG5pbXBvcnQgaWNGcmFjMyBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWcvaWMtZnJhYy0zLndlYnBcIjtcbmltcG9ydCBpY0ZyYWM0IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9pYy1mcmFjLTQud2VicFwiO1xuaW1wb3J0IGljRnJhY1RvcCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWcvaWMtZnJhYy10b3Aud2VicFwiO1xuaW1wb3J0IEZyYWN0b3B1cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GcmFjdG9wdXNcIjtcbmltcG9ydCBQcm90b2NvbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm90b2NvbFwiO1xuaW1wb3J0IFVzZUNhc2VzIGZyb20gXCJAL2NvbXBvbmVudHMvVXNlQ2FzZXNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBbXG4gICAge1xuICAgICAgdGV4dDogXCJNYW5pZmVzdG9cIixcbiAgICAgIGxpbms6IFwiI21hbmlmZXN0b1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJQcm90b2NvbFwiLFxuICAgICAgbGluazogXCIjcHJvdG9jb2xcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiVXNlIGNhc2VzXCIsXG4gICAgICBsaW5rOiBcIiN1c2UtY2FzZXNcIixcbiAgICB9LFxuICBdO1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8YW55PihudWxsKTtcbiAgY29uc3QgW29wYWNpdHksIHNldE9wYWNpdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtvcGFjaXR5Miwgc2V0Mk9wYWNpdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtvcGFjaXR5Mywgc2V0M09wYWNpdHldID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtvcGFjaXR5NCwgc2V0NE9wYWNpdHldID0gdXNlU3RhdGUoMSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgZTogRXZlbnQpIHtcbiAgICAgIC8vIHNjcm9sbEhlaWdodOaYr+WPr+a7muWKqOWMuuWfn+eahOaAu+mrmOW6pu+8jCBpbm5lckhlaWdodOaYr+WPr+inhueql+WPo+eahOmrmOW6pu+8jCBzY3JvbGxUb3DmmK/nm5LlrZDlj6/op4bnqpflj6PnmoTmnIDpobbpg6jvvIzliLDnm5LlrZDlj6/mu5rliqjkuIrpmZDnmoTot53nprtcbiAgICAgIC8vIOi/mOacieS4gOS4quWPr+S7peaAp+iDveS8mOWMlueahOeCue+8jCB0aGlzLnNjcm9sbEhlaWdodCDlnKjmsqHmnInojrflj5bmlrDmlbDmja7ml7bvvIzmmK/lm7rlrprnmoTvvIzlj6/ku6XlrZjotbfmnaXmiJDkuIDkuKrlj5jph4/vvIzojrflj5bmlrDmlbDmja7lho3mm7TmlrDvvIzlh4/lsJHph43mjpLph43nu5hcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5zY3JvbGxIZWlnaHRcIiwgdGhpcy5zY3JvbGxUb3ApO1xuICAgICAgLy8gMzY3ICA5MTYgMTQ5MyAxOTE2ICAyNTMwXG4gICAgICAvLyDmu5rliqjmnaHot53nprvpobbpg6jnmoTot53nprvlsI/kuo4zNjfvvIwg56ys5LiA5Liq5Zu+54mH55qE6YCP5piO5bqm6YCQ5riQ5Y+Y5Li6MVxuICAgICAgaWYgKHRoaXMuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgIHNldE9wYWNpdHkoMSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPiAxMDAgJiYgdGhpcy5zY3JvbGxUb3AgPCAzNjcpIHtcbiAgICAgICAgc2V0T3BhY2l0eSgxIC0gdGhpcy5zY3JvbGxUb3AgLyAzNjcpO1xuICAgICAgfVxuICAgICAgLy8g5rua5Yqo5p2h6Led56a76aG26YOo55qE6Led56a75aSn5LqOOTE277yMIOesrOS6jOS4quWbvueJh+eahOmAj+aYjuW6pumAkOa4kOWPmOS4ujEg56ys5LiA5Liq5Zu+54mH55qE6YCP5piO5bqm6YCQ5riQ5Y+Y5Li6MFxuICAgICAgaWYgKHRoaXMuc2Nyb2xsVG9wID4gMzY3ICYmIHRoaXMuc2Nyb2xsVG9wIDwgOTE2KSB7XG4gICAgICAgIHNldDJPcGFjaXR5KDEgLSAodGhpcy5zY3JvbGxUb3AgLSA5MTYpIC8gNTg3KTtcbiAgICAgICAgc2V0T3BhY2l0eSgxIC0gKHRoaXMuc2Nyb2xsVG9wIC0gOTE2KSAvIDU4Nyk7XG4gICAgICB9XG4gICAgICAvLyDmu5rliqjmnaHot53nprvpobbpg6jnmoTot53nprvlpKfkuo4xNDkz77yMIOesrOS4ieS4quWbvueJh+eahOmAj+aYjuW6pumAkOa4kOWPmOS4ujEg56ys5LqM5Liq5Zu+54mH55qE6YCP5piO5bqm6YCQ5riQ5Y+Y5Li6MCDnrKzkuIDkuKrlm77niYfnmoTpgI/mmI7luqbpgJDmuJDlj5jkuLowXG4gICAgICBpZiAodGhpcy5zY3JvbGxUb3AgPiAxNDkzICYmIHRoaXMuc2Nyb2xsVG9wIDwgMTkxNikge1xuICAgICAgICBzZXQzT3BhY2l0eSgxIC0gKHRoaXMuc2Nyb2xsVG9wIC0gMTQ5MykgLyA0MjMpO1xuICAgICAgICBzZXQyT3BhY2l0eSgxIC0gKHRoaXMuc2Nyb2xsVG9wIC0gMTQ5MykgLyA0MjMpO1xuICAgICAgICBzZXRPcGFjaXR5KDEgLSAodGhpcy5zY3JvbGxUb3AgLSAxNDkzKSAvIDQyMyk7XG4gICAgICB9XG4gICAgICAvLyDmu5rliqjmnaHot53nprvpobbpg6jnmoTot53nprvlpKfkuo4xOTE277yMIOesrOWbm+S4quWbvueJh+eahOmAj+aYjuW6pumAkOa4kOWPmOS4ujEg56ys5LiJ5Liq5Zu+54mH55qE6YCP5piO5bqm6YCQ5riQ5Y+Y5Li6MCDnrKzkuozkuKrlm77niYfnmoTpgI/mmI7luqbpgJDmuJDlj5jkuLowIOesrOS4gOS4quWbvueJh+eahOmAj+aYjuW6pumAkOa4kOWPmOS4ujBcbiAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCA+IDE5MTYgJiYgdGhpcy5zY3JvbGxUb3AgPCAyNTMwKSB7XG4gICAgICAgIHNldDRPcGFjaXR5KDEgLSAodGhpcy5zY3JvbGxUb3AgLSAxOTE2KSAvIDYxNCk7XG4gICAgICAgIHNldDNPcGFjaXR5KDEgLSAodGhpcy5zY3JvbGxUb3AgLSAxOTE2KSAvIDYxNCk7XG4gICAgICB9XG4gICAgICAvLyDmu5rliqjmnaHot53nprvpobbpg6jnmoTot53nprvlpKfkuo4yNTMw77yMIOesrOWbm+S4quWbvueJh+eahOmAj+aYjuW6puS4ujEg56ys5LiJ5Liq5Zu+54mH55qE6YCP5piO5bqm5Li6MSDnrKzkuozkuKrlm77niYfnmoTpgI/mmI7luqbkuLoxIOesrOS4gOS4quWbvueJh+eahOmAj+aYjuW6puS4ujFcbiAgICAgIGlmICh0aGlzLnNjcm9sbFRvcCA+IDI1MzApIHtcbiAgICAgICAgc2V0NE9wYWNpdHkoMSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBzY3JvbGxSZWYuY3VycmVudD8uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVyKTtcbiAgfSk7XG5cbiAgY29uc3QgZ29WaWV3ID0gKGluZGV4OiBhbnkpID0+IHtcbiAgICAvLyDlqpLkvZPmn6Xor6IgNTAwcHhcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA1MDBweClcIikubWF0Y2hlcykge1xuICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQ/LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBpbmRleCA9PT0gMCA/IDUwMCA6IGluZGV4ID09PSAxID8gMzExNCA6IGluZGV4ID09PSAyID8gNTIwMCA6IDEwMDAsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbFJlZi5jdXJyZW50Py5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogaW5kZXggPT09IDAgPyAxMDAgOiBpbmRleCA9PT0gMSA/IDE5MTYgOiBpbmRleCA9PT0gMiA/IDQwMDAgOiAyNTMwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmd9IHJlZj17c2Nyb2xsUmVmfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDb250YWluZXJ9PlxuICAgICAgICAgICAge3RpdGxlLm1hcCgoaXRlbTogYW55LCBpbmRleDogYW55KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXItWzVweF1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVmlldyhpbmRleCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdJbWdUb3B9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpY0ZyYWNUb3Auc3JjfSBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IGFsdD1cImljLWZyYWNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8ZGl2IGlkPVwibWFuaWZlc3RvXCI+XG4gICAgICAgICAgICA8RnJhY3RvcHVzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInByb3RvY29sXCI+XG4gICAgICAgICAgICA8UHJvdG9jb2wgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwidXNlLWNhc2VzXCI+XG4gICAgICAgICAgICA8VXNlQ2FzZXMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2PsKpIDIwMjQgUzMxIExhYnM8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdJbWd9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG9wYWNpdHk6IG9wYWNpdHkgfX0gY2xhc3NOYW1lPXtzdHlsZXMuYmdJbWdJbm5lcjF9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ljRnJhY30gYWx0PVwiaWMtZnJhY1wiIHNpemVzPVwiMTAwdncsIDEwMHZ3XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdJbWdJbm5lcjJ9IHN0eWxlPXt7IG9wYWNpdHk6IG9wYWNpdHkyIH19PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ljRnJhYzJ9IGFsdD1cImljLWZyYWNcIiBzaXplcz1cIjEwMHZ3LCAxMDB2d1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnSW1nSW5uZXIzfSBzdHlsZT17eyBvcGFjaXR5OiBvcGFjaXR5MyB9fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpY0ZyYWMzfSBhbHQ9XCJpYy1mcmFjXCIgc2l6ZXM9XCIxMDB2dywgMTAwdndcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ0ltZ0lubmVyNH0gc3R5bGU9e3sgb3BhY2l0eTogb3BhY2l0eTQgfX0+XG4gICAgICAgICAgPEltYWdlIHNyYz17aWNGcmFjNH0gYWx0PVwiaWMtZnJhY1wiIHNpemVzPVwiMTAwdncsIDEwMHZ3XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwiaWNGcmFjIiwiaWNGcmFjMiIsImljRnJhYzMiLCJpY0ZyYWM0IiwiaWNGcmFjVG9wIiwiRnJhY3RvcHVzIiwiUHJvdG9jb2wiLCJVc2VDYXNlcyIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSG9tZSIsInRpdGxlIiwidGV4dCIsImxpbmsiLCJzY3JvbGxSZWYiLCJvcGFjaXR5Iiwic2V0T3BhY2l0eSIsIm9wYWNpdHkyIiwic2V0Mk9wYWNpdHkiLCJvcGFjaXR5MyIsInNldDNPcGFjaXR5Iiwib3BhY2l0eTQiLCJzZXQ0T3BhY2l0eSIsImhhbmRsZXIiLCJlIiwic2Nyb2xsVG9wIiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnb1ZpZXciLCJpbmRleCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImRpdiIsImNsYXNzTmFtZSIsImJnIiwicmVmIiwiY29udGFpbmVyIiwiaGVhZGVyIiwidGl0bGVDb250YWluZXIiLCJtYXAiLCJpdGVtIiwic3R5bGUiLCJjdXJzb3IiLCJvbkNsaWNrIiwiYmdJbWdUb3AiLCJpbWciLCJzcmMiLCJhbHQiLCJjb250ZW50IiwiaWQiLCJmb290ZXIiLCJiZ0ltZyIsImJnSW1nSW5uZXIxIiwic2l6ZXMiLCJiZ0ltZ0lubmVyMiIsImJnSW1nSW5uZXIzIiwiYmdJbWdJbm5lcjQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/home/page.tsx\n"));

/***/ })

});