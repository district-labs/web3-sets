"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/schemas/schema-identity",{

/***/ "./pages/schemas/schema-identity.md":
/*!******************************************!*\
  !*** ./pages/schemas/schema-identity.md ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextra/setup-page */ \"../../node_modules/.pnpm/nextra@2.7.0_next@13.4.2_react-dom@18.2.0_react@18.2.0/node_modules/nextra/dist/setup-page.js\");\n/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nextra-theme-docs */ \"../../node_modules/.pnpm/nextra-theme-docs@2.7.0_next@13.4.2_nextra@2.7.0_react-dom@18.2.0_react@18.2.0/node_modules/nextra-theme-docs/dist/index.js\");\n/* harmony import */ var _Users_metasudo_workspace_district_labs_code_web3_sets_apps_docs_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.config.tsx */ \"./theme.config.tsx\");\n/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nextra-theme-docs/style.css */ \"../../node_modules/.pnpm/nextra-theme-docs@2.7.0_next@13.4.2_nextra@2.7.0_react-dom@18.2.0_react@18.2.0/node_modules/nextra-theme-docs/style.css\");\n/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nextra_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nextra/mdx */ \"../../node_modules/.pnpm/nextra@2.7.0_next@13.4.2_react-dom@18.2.0_react@18.2.0/node_modules/nextra/dist/mdx.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"../../node_modules/.pnpm/next@13.4.2_@babel+core@7.18.5_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nconst __nextraPageOptions = {\n    MDXContent,\n    pageOpts: {\n        \"filePath\": \"pages/schemas/schema-identity.md\",\n        \"route\": \"/schemas/schema-identity\",\n        \"headings\": [\n            {\n                \"depth\": 1,\n                \"value\": \"EVM Web3 Set Runtime\",\n                \"id\": \"evm-web3-set-runtime\"\n            }\n        ],\n        \"pageMap\": [\n            {\n                \"kind\": \"Meta\",\n                \"data\": {\n                    \"index\": \"Introduction\",\n                    \"overview\": {\n                        \"title\": \"Overview\"\n                    },\n                    \"architecture\": {\n                        \"title\": \"Architecture\"\n                    },\n                    \"schemas\": {\n                        \"title\": \"Schemas\"\n                    },\n                    \"examples\": {\n                        \"title\": \"Example Sets\"\n                    },\n                    \"runtime\": {\n                        \"title\": \"Runtime\"\n                    },\n                    \"backlog\": {\n                        \"title\": \"Backlog\",\n                        \"type\": \"page\"\n                    }\n                }\n            },\n            {\n                \"kind\": \"Folder\",\n                \"name\": \"architecture\",\n                \"route\": \"/architecture\",\n                \"children\": [\n                    {\n                        \"kind\": \"Meta\",\n                        \"data\": {\n                            \"entities\": {\n                                \"title\": \"Entities\"\n                            },\n                            \"conditions\": {\n                                \"title\": \"Conditions\"\n                            },\n                            \"rules\": {\n                                \"title\": \"Rules\"\n                            },\n                            \"state-artifacts\": {\n                                \"title\": \"State Artifacts\"\n                            }\n                        }\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"conditions\",\n                        \"route\": \"/architecture/conditions\"\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"entities\",\n                        \"route\": \"/architecture/entities\"\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"rules\",\n                        \"route\": \"/architecture/rules\"\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"state-artifacts\",\n                        \"route\": \"/architecture/state-artifacts\"\n                    }\n                ]\n            },\n            {\n                \"kind\": \"MdxPage\",\n                \"name\": \"backlog\",\n                \"route\": \"/backlog\"\n            },\n            {\n                \"kind\": \"Folder\",\n                \"name\": \"examples\",\n                \"route\": \"/examples\",\n                \"children\": [\n                    {\n                        \"kind\": \"Meta\",\n                        \"data\": {\n                            \"examples-evm\": {\n                                \"title\": \"EVM\"\n                            },\n                            \"examples-identity\": {\n                                \"title\": \"Identity\"\n                            }\n                        }\n                    },\n                    {\n                        \"kind\": \"Folder\",\n                        \"name\": \"examples-evm\",\n                        \"route\": \"/examples/examples-evm\",\n                        \"children\": [\n                            {\n                                \"kind\": \"Meta\",\n                                \"data\": {\n                                    \"inputs\": {\n                                        \"title\": \"Basic\"\n                                    },\n                                    \"mutations\": {\n                                        \"title\": \"Advanced\"\n                                    },\n                                    \"outputs\": {\n                                        \"title\": \"Argument Injection\"\n                                    }\n                                }\n                            }\n                        ]\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"examples-evm\",\n                        \"route\": \"/examples/examples-evm\"\n                    },\n                    {\n                        \"kind\": \"Folder\",\n                        \"name\": \"examples-identity\",\n                        \"route\": \"/examples/examples-identity\",\n                        \"children\": [\n                            {\n                                \"kind\": \"Meta\",\n                                \"data\": {\n                                    \"inputs\": {\n                                        \"title\": \"Basic\"\n                                    },\n                                    \"mutations\": {\n                                        \"title\": \"Advanced\"\n                                    },\n                                    \"outputs\": {\n                                        \"title\": \"Argument Injection\"\n                                    },\n                                    \"advanced\": \"Advanced\",\n                                    \"argument-injection\": \"Argument Injection\",\n                                    \"basic\": \"Basic\"\n                                }\n                            },\n                            {\n                                \"kind\": \"MdxPage\",\n                                \"name\": \"advanced\",\n                                \"route\": \"/examples/examples-identity/advanced\"\n                            },\n                            {\n                                \"kind\": \"MdxPage\",\n                                \"name\": \"argument-injection\",\n                                \"route\": \"/examples/examples-identity/argument-injection\"\n                            },\n                            {\n                                \"kind\": \"MdxPage\",\n                                \"name\": \"basic\",\n                                \"route\": \"/examples/examples-identity/basic\"\n                            }\n                        ]\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"examples-identity\",\n                        \"route\": \"/examples/examples-identity\"\n                    }\n                ]\n            },\n            {\n                \"kind\": \"MdxPage\",\n                \"name\": \"index\",\n                \"route\": \"/\"\n            },\n            {\n                \"kind\": \"Folder\",\n                \"name\": \"overview\",\n                \"route\": \"/overview\",\n                \"children\": [\n                    {\n                        \"kind\": \"Meta\",\n                        \"data\": {\n                            \"set-theory\": {\n                                \"title\": \"Set Theory\"\n                            },\n                            \"use-cases\": {\n                                \"title\": \"Use Cases\"\n                            }\n                        }\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"set-theory\",\n                        \"route\": \"/overview/set-theory\"\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"use-cases\",\n                        \"route\": \"/overview/use-cases\"\n                    }\n                ]\n            },\n            {\n                \"kind\": \"Folder\",\n                \"name\": \"runtime\",\n                \"route\": \"/runtime\",\n                \"children\": [\n                    {\n                        \"kind\": \"Meta\",\n                        \"data\": {\n                            \"runtime-evm\": {\n                                \"title\": \"EVM\"\n                            },\n                            \"runtime-identity\": {\n                                \"title\": \"Identity\"\n                            }\n                        }\n                    },\n                    {\n                        \"kind\": \"Folder\",\n                        \"name\": \"runtime-evm\",\n                        \"route\": \"/runtime/runtime-evm\",\n                        \"children\": [\n                            {\n                                \"kind\": \"Meta\",\n                                \"data\": {\n                                    \"inputs\": {\n                                        \"title\": \"Inputs\"\n                                    },\n                                    \"mutations\": {\n                                        \"title\": \"Mutations\"\n                                    },\n                                    \"outputs\": {\n                                        \"title\": \"Outputs\"\n                                    }\n                                }\n                            },\n                            {\n                                \"kind\": \"MdxPage\",\n                                \"name\": \"inputs\",\n                                \"route\": \"/runtime/runtime-evm/inputs\"\n                            },\n                            {\n                                \"kind\": \"MdxPage\",\n                                \"name\": \"mutations\",\n                                \"route\": \"/runtime/runtime-evm/mutations\"\n                            },\n                            {\n                                \"kind\": \"MdxPage\",\n                                \"name\": \"outputs\",\n                                \"route\": \"/runtime/runtime-evm/outputs\"\n                            }\n                        ]\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"runtime-evm\",\n                        \"route\": \"/runtime/runtime-evm\"\n                    },\n                    {\n                        \"kind\": \"Folder\",\n                        \"name\": \"runtime-identity\",\n                        \"route\": \"/runtime/runtime-identity\",\n                        \"children\": [\n                            {\n                                \"kind\": \"Meta\",\n                                \"data\": {\n                                    \"inputs\": {\n                                        \"title\": \"Inputs\"\n                                    },\n                                    \"mutations\": {\n                                        \"title\": \"Mutations\"\n                                    },\n                                    \"outputs\": {\n                                        \"title\": \"Outputs\"\n                                    }\n                                }\n                            },\n                            {\n                                \"kind\": \"MdxPage\",\n                                \"name\": \"inputs\",\n                                \"route\": \"/runtime/runtime-identity/inputs\"\n                            },\n                            {\n                                \"kind\": \"MdxPage\",\n                                \"name\": \"mutations\",\n                                \"route\": \"/runtime/runtime-identity/mutations\"\n                            },\n                            {\n                                \"kind\": \"MdxPage\",\n                                \"name\": \"outputs\",\n                                \"route\": \"/runtime/runtime-identity/outputs\"\n                            }\n                        ]\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"runtime-identity\",\n                        \"route\": \"/runtime/runtime-identity\"\n                    }\n                ]\n            },\n            {\n                \"kind\": \"Folder\",\n                \"name\": \"schemas\",\n                \"route\": \"/schemas\",\n                \"children\": [\n                    {\n                        \"kind\": \"Meta\",\n                        \"data\": {\n                            \"schema-evm\": {\n                                \"title\": \"EVM\"\n                            },\n                            \"schema-identity\": {\n                                \"title\": \"Identity\"\n                            }\n                        }\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"schema-evm\",\n                        \"route\": \"/schemas/schema-evm\"\n                    },\n                    {\n                        \"kind\": \"MdxPage\",\n                        \"name\": \"schema-identity\",\n                        \"route\": \"/schemas/schema-identity\"\n                    }\n                ]\n            }\n        ],\n        \"flexsearch\": {\n            \"codeblocks\": true\n        },\n        \"title\": \"EVM Web3 Set Runtime\"\n    },\n    pageNextRoute: \"/schemas/schema-identity\",\n    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    themeConfig: _Users_metasudo_workspace_district_labs_code_web3_sets_apps_docs_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/*@jsxRuntime automatic @jsxImportSource react*/ \n\nfunction _createMdxContent(props) {\n    const _components = Object.assign({\n        h1: \"h1\"\n    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components.h1, {\n        children: \"EVM Web3 Set Runtime\"\n    }, void 0, false, {\n        fileName: \"/Users/metasudo/workspace/district-labs/code/web3-sets/apps/docs/pages/schemas/schema-identity.md\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, this);\n}\nfunction MDXContent() {\n    let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    const { wrapper: MDXLayout  } = Object.assign({}, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);\n    return MDXLayout ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MDXLayout, {\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_createMdxContent, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/Users/metasudo/workspace/district-labs/code/web3-sets/apps/docs/pages/schemas/schema-identity.md\",\n            lineNumber: 24,\n            columnNumber: 44\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/metasudo/workspace/district-labs/code/web3-sets/apps/docs/pages/schemas/schema-identity.md\",\n        lineNumber: 24,\n        columnNumber: 22\n    }, this) : _createMdxContent(props);\n}\n_c = MDXContent;\nif (true) {\n    __nextraPageOptions.hot = module.hot;\n    __nextraPageOptions.pageOptsChecksum = \"0000000b1fb93b3\";\n}\nif (false) {}\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__.setupNextraPage)(__nextraPageOptions));\nvar _c;\n$RefreshReg$(_c, \"MDXContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksOERBQUNBO1FBQVcsR0FBR1AsS0FBSztrQkFBRSw0RUFBQ0Q7WUFBbUIsR0FBR0MsS0FBSzs7Ozs7Ozs7OztlQUFtQkQsa0JBQWtCQyxNQUFNO0FBQ2xIO0tBSFNUO0FBTVQsSUFBSWlCLElBQXlCLEVBQWM7SUFDekNsQixvQkFBb0JtQixHQUFHLEdBQUdDLFVBQVU7SUFDcENwQixvQkFBb0JxQixnQkFBZ0IsR0FBRztBQUN6QyxDQUFDO0FBQ0QsSUFBSSxLQUFrQixFQUFhckIsRUFBMkM7QUFFOUUsK0RBQWVILGtFQUFlQSxDQUFDRyxvQkFBb0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NoZW1hcy9zY2hlbWEtaWRlbnRpdHkubWQ/N2M4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR1cE5leHRyYVBhZ2UgfSBmcm9tICduZXh0cmEvc2V0dXAtcGFnZSdcbmltcG9ydCBfX25leHRyYV9sYXlvdXQgZnJvbSAnbmV4dHJhLXRoZW1lLWRvY3MnXG5pbXBvcnQgX19uZXh0cmFfdGhlbWVDb25maWcgZnJvbSAnL1VzZXJzL21ldGFzdWRvL3dvcmtzcGFjZS9kaXN0cmljdC1sYWJzL2NvZGUvd2ViMy1zZXRzL2FwcHMvZG9jcy90aGVtZS5jb25maWcudHN4J1xuXG5pbXBvcnQgJ25leHRyYS10aGVtZS1kb2NzL3N0eWxlLmNzcydcblxuY29uc3QgX19uZXh0cmFQYWdlT3B0aW9ucyA9IHtcbiAgTURYQ29udGVudCxcbiAgcGFnZU9wdHM6IHtcImZpbGVQYXRoXCI6XCJwYWdlcy9zY2hlbWFzL3NjaGVtYS1pZGVudGl0eS5tZFwiLFwicm91dGVcIjpcIi9zY2hlbWFzL3NjaGVtYS1pZGVudGl0eVwiLFwiaGVhZGluZ3NcIjpbe1wiZGVwdGhcIjoxLFwidmFsdWVcIjpcIkVWTSBXZWIzIFNldCBSdW50aW1lXCIsXCJpZFwiOlwiZXZtLXdlYjMtc2V0LXJ1bnRpbWVcIn1dLFwicGFnZU1hcFwiOlt7XCJraW5kXCI6XCJNZXRhXCIsXCJkYXRhXCI6e1wiaW5kZXhcIjpcIkludHJvZHVjdGlvblwiLFwib3ZlcnZpZXdcIjp7XCJ0aXRsZVwiOlwiT3ZlcnZpZXdcIn0sXCJhcmNoaXRlY3R1cmVcIjp7XCJ0aXRsZVwiOlwiQXJjaGl0ZWN0dXJlXCJ9LFwic2NoZW1hc1wiOntcInRpdGxlXCI6XCJTY2hlbWFzXCJ9LFwiZXhhbXBsZXNcIjp7XCJ0aXRsZVwiOlwiRXhhbXBsZSBTZXRzXCJ9LFwicnVudGltZVwiOntcInRpdGxlXCI6XCJSdW50aW1lXCJ9LFwiYmFja2xvZ1wiOntcInRpdGxlXCI6XCJCYWNrbG9nXCIsXCJ0eXBlXCI6XCJwYWdlXCJ9fX0se1wia2luZFwiOlwiRm9sZGVyXCIsXCJuYW1lXCI6XCJhcmNoaXRlY3R1cmVcIixcInJvdXRlXCI6XCIvYXJjaGl0ZWN0dXJlXCIsXCJjaGlsZHJlblwiOlt7XCJraW5kXCI6XCJNZXRhXCIsXCJkYXRhXCI6e1wiZW50aXRpZXNcIjp7XCJ0aXRsZVwiOlwiRW50aXRpZXNcIn0sXCJjb25kaXRpb25zXCI6e1widGl0bGVcIjpcIkNvbmRpdGlvbnNcIn0sXCJydWxlc1wiOntcInRpdGxlXCI6XCJSdWxlc1wifSxcInN0YXRlLWFydGlmYWN0c1wiOntcInRpdGxlXCI6XCJTdGF0ZSBBcnRpZmFjdHNcIn19fSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJjb25kaXRpb25zXCIsXCJyb3V0ZVwiOlwiL2FyY2hpdGVjdHVyZS9jb25kaXRpb25zXCJ9LHtcImtpbmRcIjpcIk1keFBhZ2VcIixcIm5hbWVcIjpcImVudGl0aWVzXCIsXCJyb3V0ZVwiOlwiL2FyY2hpdGVjdHVyZS9lbnRpdGllc1wifSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJydWxlc1wiLFwicm91dGVcIjpcIi9hcmNoaXRlY3R1cmUvcnVsZXNcIn0se1wia2luZFwiOlwiTWR4UGFnZVwiLFwibmFtZVwiOlwic3RhdGUtYXJ0aWZhY3RzXCIsXCJyb3V0ZVwiOlwiL2FyY2hpdGVjdHVyZS9zdGF0ZS1hcnRpZmFjdHNcIn1dfSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJiYWNrbG9nXCIsXCJyb3V0ZVwiOlwiL2JhY2tsb2dcIn0se1wia2luZFwiOlwiRm9sZGVyXCIsXCJuYW1lXCI6XCJleGFtcGxlc1wiLFwicm91dGVcIjpcIi9leGFtcGxlc1wiLFwiY2hpbGRyZW5cIjpbe1wia2luZFwiOlwiTWV0YVwiLFwiZGF0YVwiOntcImV4YW1wbGVzLWV2bVwiOntcInRpdGxlXCI6XCJFVk1cIn0sXCJleGFtcGxlcy1pZGVudGl0eVwiOntcInRpdGxlXCI6XCJJZGVudGl0eVwifX19LHtcImtpbmRcIjpcIkZvbGRlclwiLFwibmFtZVwiOlwiZXhhbXBsZXMtZXZtXCIsXCJyb3V0ZVwiOlwiL2V4YW1wbGVzL2V4YW1wbGVzLWV2bVwiLFwiY2hpbGRyZW5cIjpbe1wia2luZFwiOlwiTWV0YVwiLFwiZGF0YVwiOntcImlucHV0c1wiOntcInRpdGxlXCI6XCJCYXNpY1wifSxcIm11dGF0aW9uc1wiOntcInRpdGxlXCI6XCJBZHZhbmNlZFwifSxcIm91dHB1dHNcIjp7XCJ0aXRsZVwiOlwiQXJndW1lbnQgSW5qZWN0aW9uXCJ9fX1dfSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJleGFtcGxlcy1ldm1cIixcInJvdXRlXCI6XCIvZXhhbXBsZXMvZXhhbXBsZXMtZXZtXCJ9LHtcImtpbmRcIjpcIkZvbGRlclwiLFwibmFtZVwiOlwiZXhhbXBsZXMtaWRlbnRpdHlcIixcInJvdXRlXCI6XCIvZXhhbXBsZXMvZXhhbXBsZXMtaWRlbnRpdHlcIixcImNoaWxkcmVuXCI6W3tcImtpbmRcIjpcIk1ldGFcIixcImRhdGFcIjp7XCJpbnB1dHNcIjp7XCJ0aXRsZVwiOlwiQmFzaWNcIn0sXCJtdXRhdGlvbnNcIjp7XCJ0aXRsZVwiOlwiQWR2YW5jZWRcIn0sXCJvdXRwdXRzXCI6e1widGl0bGVcIjpcIkFyZ3VtZW50IEluamVjdGlvblwifSxcImFkdmFuY2VkXCI6XCJBZHZhbmNlZFwiLFwiYXJndW1lbnQtaW5qZWN0aW9uXCI6XCJBcmd1bWVudCBJbmplY3Rpb25cIixcImJhc2ljXCI6XCJCYXNpY1wifX0se1wia2luZFwiOlwiTWR4UGFnZVwiLFwibmFtZVwiOlwiYWR2YW5jZWRcIixcInJvdXRlXCI6XCIvZXhhbXBsZXMvZXhhbXBsZXMtaWRlbnRpdHkvYWR2YW5jZWRcIn0se1wia2luZFwiOlwiTWR4UGFnZVwiLFwibmFtZVwiOlwiYXJndW1lbnQtaW5qZWN0aW9uXCIsXCJyb3V0ZVwiOlwiL2V4YW1wbGVzL2V4YW1wbGVzLWlkZW50aXR5L2FyZ3VtZW50LWluamVjdGlvblwifSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJiYXNpY1wiLFwicm91dGVcIjpcIi9leGFtcGxlcy9leGFtcGxlcy1pZGVudGl0eS9iYXNpY1wifV19LHtcImtpbmRcIjpcIk1keFBhZ2VcIixcIm5hbWVcIjpcImV4YW1wbGVzLWlkZW50aXR5XCIsXCJyb3V0ZVwiOlwiL2V4YW1wbGVzL2V4YW1wbGVzLWlkZW50aXR5XCJ9XX0se1wia2luZFwiOlwiTWR4UGFnZVwiLFwibmFtZVwiOlwiaW5kZXhcIixcInJvdXRlXCI6XCIvXCJ9LHtcImtpbmRcIjpcIkZvbGRlclwiLFwibmFtZVwiOlwib3ZlcnZpZXdcIixcInJvdXRlXCI6XCIvb3ZlcnZpZXdcIixcImNoaWxkcmVuXCI6W3tcImtpbmRcIjpcIk1ldGFcIixcImRhdGFcIjp7XCJzZXQtdGhlb3J5XCI6e1widGl0bGVcIjpcIlNldCBUaGVvcnlcIn0sXCJ1c2UtY2FzZXNcIjp7XCJ0aXRsZVwiOlwiVXNlIENhc2VzXCJ9fX0se1wia2luZFwiOlwiTWR4UGFnZVwiLFwibmFtZVwiOlwic2V0LXRoZW9yeVwiLFwicm91dGVcIjpcIi9vdmVydmlldy9zZXQtdGhlb3J5XCJ9LHtcImtpbmRcIjpcIk1keFBhZ2VcIixcIm5hbWVcIjpcInVzZS1jYXNlc1wiLFwicm91dGVcIjpcIi9vdmVydmlldy91c2UtY2FzZXNcIn1dfSx7XCJraW5kXCI6XCJGb2xkZXJcIixcIm5hbWVcIjpcInJ1bnRpbWVcIixcInJvdXRlXCI6XCIvcnVudGltZVwiLFwiY2hpbGRyZW5cIjpbe1wia2luZFwiOlwiTWV0YVwiLFwiZGF0YVwiOntcInJ1bnRpbWUtZXZtXCI6e1widGl0bGVcIjpcIkVWTVwifSxcInJ1bnRpbWUtaWRlbnRpdHlcIjp7XCJ0aXRsZVwiOlwiSWRlbnRpdHlcIn19fSx7XCJraW5kXCI6XCJGb2xkZXJcIixcIm5hbWVcIjpcInJ1bnRpbWUtZXZtXCIsXCJyb3V0ZVwiOlwiL3J1bnRpbWUvcnVudGltZS1ldm1cIixcImNoaWxkcmVuXCI6W3tcImtpbmRcIjpcIk1ldGFcIixcImRhdGFcIjp7XCJpbnB1dHNcIjp7XCJ0aXRsZVwiOlwiSW5wdXRzXCJ9LFwibXV0YXRpb25zXCI6e1widGl0bGVcIjpcIk11dGF0aW9uc1wifSxcIm91dHB1dHNcIjp7XCJ0aXRsZVwiOlwiT3V0cHV0c1wifX19LHtcImtpbmRcIjpcIk1keFBhZ2VcIixcIm5hbWVcIjpcImlucHV0c1wiLFwicm91dGVcIjpcIi9ydW50aW1lL3J1bnRpbWUtZXZtL2lucHV0c1wifSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJtdXRhdGlvbnNcIixcInJvdXRlXCI6XCIvcnVudGltZS9ydW50aW1lLWV2bS9tdXRhdGlvbnNcIn0se1wia2luZFwiOlwiTWR4UGFnZVwiLFwibmFtZVwiOlwib3V0cHV0c1wiLFwicm91dGVcIjpcIi9ydW50aW1lL3J1bnRpbWUtZXZtL291dHB1dHNcIn1dfSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJydW50aW1lLWV2bVwiLFwicm91dGVcIjpcIi9ydW50aW1lL3J1bnRpbWUtZXZtXCJ9LHtcImtpbmRcIjpcIkZvbGRlclwiLFwibmFtZVwiOlwicnVudGltZS1pZGVudGl0eVwiLFwicm91dGVcIjpcIi9ydW50aW1lL3J1bnRpbWUtaWRlbnRpdHlcIixcImNoaWxkcmVuXCI6W3tcImtpbmRcIjpcIk1ldGFcIixcImRhdGFcIjp7XCJpbnB1dHNcIjp7XCJ0aXRsZVwiOlwiSW5wdXRzXCJ9LFwibXV0YXRpb25zXCI6e1widGl0bGVcIjpcIk11dGF0aW9uc1wifSxcIm91dHB1dHNcIjp7XCJ0aXRsZVwiOlwiT3V0cHV0c1wifX19LHtcImtpbmRcIjpcIk1keFBhZ2VcIixcIm5hbWVcIjpcImlucHV0c1wiLFwicm91dGVcIjpcIi9ydW50aW1lL3J1bnRpbWUtaWRlbnRpdHkvaW5wdXRzXCJ9LHtcImtpbmRcIjpcIk1keFBhZ2VcIixcIm5hbWVcIjpcIm11dGF0aW9uc1wiLFwicm91dGVcIjpcIi9ydW50aW1lL3J1bnRpbWUtaWRlbnRpdHkvbXV0YXRpb25zXCJ9LHtcImtpbmRcIjpcIk1keFBhZ2VcIixcIm5hbWVcIjpcIm91dHB1dHNcIixcInJvdXRlXCI6XCIvcnVudGltZS9ydW50aW1lLWlkZW50aXR5L291dHB1dHNcIn1dfSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJydW50aW1lLWlkZW50aXR5XCIsXCJyb3V0ZVwiOlwiL3J1bnRpbWUvcnVudGltZS1pZGVudGl0eVwifV19LHtcImtpbmRcIjpcIkZvbGRlclwiLFwibmFtZVwiOlwic2NoZW1hc1wiLFwicm91dGVcIjpcIi9zY2hlbWFzXCIsXCJjaGlsZHJlblwiOlt7XCJraW5kXCI6XCJNZXRhXCIsXCJkYXRhXCI6e1wic2NoZW1hLWV2bVwiOntcInRpdGxlXCI6XCJFVk1cIn0sXCJzY2hlbWEtaWRlbnRpdHlcIjp7XCJ0aXRsZVwiOlwiSWRlbnRpdHlcIn19fSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJzY2hlbWEtZXZtXCIsXCJyb3V0ZVwiOlwiL3NjaGVtYXMvc2NoZW1hLWV2bVwifSx7XCJraW5kXCI6XCJNZHhQYWdlXCIsXCJuYW1lXCI6XCJzY2hlbWEtaWRlbnRpdHlcIixcInJvdXRlXCI6XCIvc2NoZW1hcy9zY2hlbWEtaWRlbnRpdHlcIn1dfV0sXCJmbGV4c2VhcmNoXCI6e1wiY29kZWJsb2Nrc1wiOnRydWV9LFwidGl0bGVcIjpcIkVWTSBXZWIzIFNldCBSdW50aW1lXCJ9LFxuICBwYWdlTmV4dFJvdXRlOiBcIi9zY2hlbWFzL3NjaGVtYS1pZGVudGl0eVwiLFxuICBuZXh0cmFMYXlvdXQ6IF9fbmV4dHJhX2xheW91dCx0aGVtZUNvbmZpZzogX19uZXh0cmFfdGhlbWVDb25maWdcbn1cbi8qQGpzeFJ1bnRpbWUgYXV0b21hdGljIEBqc3hJbXBvcnRTb3VyY2UgcmVhY3QqL1xuaW1wb3J0IHt1c2VNRFhDb21wb25lbnRzIGFzIF9wcm92aWRlQ29tcG9uZW50c30gZnJvbSBcIm5leHRyYS9tZHhcIjtcbmltcG9ydCAkTmV4dEltYWdlTmV4dHJhIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5mdW5jdGlvbiBfY3JlYXRlTWR4Q29udGVudChwcm9wcykge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCJcbiAgfSwgX3Byb3ZpZGVDb21wb25lbnRzKCksIHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gPF9jb21wb25lbnRzLmgxPntcIkVWTSBXZWIzIFNldCBSdW50aW1lXCJ9PC9fY29tcG9uZW50cy5oMT47XG59XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3Qge3dyYXBwZXI6IE1EWExheW91dH0gPSBPYmplY3QuYXNzaWduKHt9LCBfcHJvdmlkZUNvbXBvbmVudHMoKSwgcHJvcHMuY29tcG9uZW50cyk7XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+PF9jcmVhdGVNZHhDb250ZW50IHsuLi5wcm9wc30gLz48L01EWExheW91dD4gOiBfY3JlYXRlTWR4Q29udGVudChwcm9wcyk7XG59XG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgX19uZXh0cmFQYWdlT3B0aW9ucy5ob3QgPSBtb2R1bGUuaG90XG4gIF9fbmV4dHJhUGFnZU9wdGlvbnMucGFnZU9wdHNDaGVja3N1bSA9IFwiMDAwMDAwMGIxZmI5M2IzXCJcbn1cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgX19uZXh0cmFQYWdlT3B0aW9ucy5keW5hbWljTWV0YU1vZHVsZXMgPSBbXVxuXG5leHBvcnQgZGVmYXVsdCBzZXR1cE5leHRyYVBhZ2UoX19uZXh0cmFQYWdlT3B0aW9ucykiXSwibmFtZXMiOlsic2V0dXBOZXh0cmFQYWdlIiwiX19uZXh0cmFfbGF5b3V0IiwiX19uZXh0cmFfdGhlbWVDb25maWciLCJfX25leHRyYVBhZ2VPcHRpb25zIiwiTURYQ29udGVudCIsInBhZ2VPcHRzIiwicGFnZU5leHRSb3V0ZSIsIm5leHRyYUxheW91dCIsInRoZW1lQ29uZmlnIiwidXNlTURYQ29tcG9uZW50cyIsIl9wcm92aWRlQ29tcG9uZW50cyIsIiROZXh0SW1hZ2VOZXh0cmEiLCJfY3JlYXRlTWR4Q29udGVudCIsInByb3BzIiwiX2NvbXBvbmVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJoMSIsImNvbXBvbmVudHMiLCJ3cmFwcGVyIiwiTURYTGF5b3V0IiwicHJvY2VzcyIsImhvdCIsIm1vZHVsZSIsInBhZ2VPcHRzQ2hlY2tzdW0iLCJkeW5hbWljTWV0YU1vZHVsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/schemas/schema-identity.md\n"));

/***/ })

});