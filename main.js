/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/Jellee-Roman.ttf */ \"./src/asset/Jellee-Roman.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n\tfont-family: \"Jellee\";\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\n:root {\n\t--logo-text: #E0163D;\n\t--text: #231F20;\n\t--primary-bg: #FFFFFF;\n}\n\nbody,\nhtml {\n\theight: 100%;\n\tmargin: 0;\n\tfont-family: \"Quicksand\", sans-serif;\n}\n\n.container {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 0.5fr 5fr 1fr;\n\theight: 100%;\n\tbox-sizing: border-box;\n}\n\n.jolly-header {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tjustify-items: center;\n\tbackground-color: var(--logo-text);\n\tpadding-top: 1rem;\n\twidth: 100%;\n}\n\n.logo-heading {\n\tdisplay: flex;\n\twidth: fit-content;\n\tjustify-content: center;\n\talign-items: center;\n\tcursor: pointer;\n}\n\n.title,\n.resto-img {\n\tpointer-events: none;\n}\n\n.title {\n\tcolor: var(--primary-bg);\n\tfont-size: 2rem;\n\talign-self: center;\n}\n\n.resto-img {\n\twidth: auto;\n\theight: 75px;\n}\n\nfooter {\n\tdisplay: flex;\n\tgrid-row: 4;\n\tbackground-color: var(--logo-text);\n\tcolor: var(--primary-bg);\n\twidth: 100%;\n\theight: 100px;\n\tjustify-content: center;\n}\n\nfooter p {\n\tmargin: 0;\n\talign-self: center;\n\tfont-weight: 500;\n}\n\nnav {\n\tdisplay: flex;\n\tgap: 30px;\n}\n\nnav button {\n\tpadding: 1rem 1.2rem 1rem 1.2rem;\n\tfont-size: 1rem;\n\tfont-family: \"Quicksand\";\n\tfont-weight: 700;\n\tletter-spacing: 2px;\n\tcolor: var(--primary-bg);\n\tborder: none;\n\tborder-radius: 7px;\n\tbackground-color: var(---logo-text);\n}\n\nnav #home-btn,\nnav #menu-btn,\nnav #about-btn {\n\tcursor: pointer;\n}\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: (--primary-bg);\n}\n\n#menu-div,\n#home-div,\n#about-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#menu-div {\n\tgap: 2rem;\n}\n\n.heading-text-container {\n\tdisplay: none;\n}\n\n.heading {\n\tfont-weight: 600;\n\tfont-size: 1.5rem;\n}\n\n.text {\n\tfont-weight: 700;\n}\n\n.slideshow-container {\n\twidth: 800px;\n\tposition: relative;\n\tmargin: auto;\n}\n\n.feature-container {\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title-link-menu {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tjustify-items: center;\n}\n\n#link-to-menu {\n\talign-self: center;\n\ttext-decoration: none;\n\tcolor: var(--logo-text);\n\tfont-weight: 600;\n}\n\n.featured {\n\tdisplay: flex;\n\tjustify-content: center;\n\ttext-align: center;\n\tgap: 30px;\n}\n\n.featured p {\n\tfont-size: 1rem;\n\tfont-weight: 700;\n}\n\n.myBox {\n\twidth: 176px;\n\theight: auto;\n}\n\n.myBox>img {\n\tobject-fit: cover;\n\tobject-position: center;\n\n}\n\n.mySlides {\n\tdisplay: none;\n}\n\n.mySlides>img {\n\twidth: 100%;\n\theight: 456px;\n\tobject-fit: cover;\n\tobject-position: center;\n}\n\n.mySlides.active {\n\tdisplay: block;\n}\n\n.prev,\n.next {\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 50%;\n\twidth: auto;\n\tmargin-top: -22px;\n\tpadding: 16px;\n\tcolor: white;\n\tfont-weight: bold;\n\tfont-size: 18px;\n\ttransition: 0.6s ease;\n\tborder-radius: 0 3px 3px 0;\n\tuser-select: none;\n\tbackground-color: rgba(0, 0, 0, 0.8);\n}\n\n.next {\n\tright: 0;\n\tborder-radius: 3px 0 0 3px;\n}\n\n/* will add dot in HomeSlideshow soon */\n.dot {\n\tcursor: pointer;\n\theight: 15px;\n\twidth: 15;\n\tmargin: 0 2px;\n\tbackground-color: #bbb;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n\ttransition: backround-color 0.6s ease;\n}\n\n.fade {\n\tanimation-name: fade;\n\tanimation-duration: 1.5s\n}\n\n@keyframes fade {\n\tfrom {\n\t\topacity: .4\n\t}\n\n\tto {\n\t\topacity: 1\n\t}\n}\n\n.title-container {\n\tmargin-top: 3rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.title-container p {\n\tmargin: 0;\n\tcolor: var(--logo-text);\n\tfont-weight: 700;\n\tfont-size: 1.3rem;\n}\n\n.title-container h2 {\n\tmargin: 0;\n\tfont-size: 3rem;\n\tfont-weight: bold;\n}\n\n.carousel-container {\n\twidth: 80%;\n\tdisplay: flex;\n\tposition: relative;\n\tmargin: 10px auto;\n\tmin-height: 60px;\n}\n\n.carousel-container .carousel-inner {\n\toverflow: hidden;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\ttransform: 2s;\n\tpadding: 0 30px;\n}\n\n.carousel-container .text-box {\n\tflex-shrink: 0;\n\tpadding: 12px 16px;\n}\n\n.text-box p {\n\tmargin: 0;\n\tfont-weight: 600;\n}\n\n.nav-btns {\n\tdisplay: flex;\n\tposition: absolute;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0 30px;\n\tleft: 0;\n\t/* left and right acts as width 100% */\n\tright: 0;\n\tpointer-events: none;\n}\n\n.nav-btns button {\n\tpointer-events: auto;\n}\n\n.left,\n.right {\n\tcursor: pointer;\n\twidth: auto;\n\tpadding: 16px;\n\tcolor: black;\n\tfont-weight: bold;\n\tfont-size: 18px;\n}\n\n.left {\n\tborder-radius: 3px 0 0 3px;\n}\n\n.right {\n\tborder-radius: 0 3px 3px 0;\n}\n\n.nav-btns button {\n\tbackground: rgba(222, 222, 222, 0.6);\n}\n\n.nav-btns button:hover {\n\tbackground: rgba(222, 222, 222, 0.2);\n}\n\n.wrapper {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n\tgrid-template-rows: 100px 1fr 1fr 1fr;\n}\n\n.category-title-div {\n\tdisplay: grid;\n\tgrid-column: 3/4;\n\tgrid-row: 1;\n}\n\n.category-heading {\n\tdisplay: flex;\n\tjustify-self: center;\n\talign-self: center;\n}\n\n.grid-wrapper {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: repeat(3, 1fr);\n\tgrid-column: 2/5;\n\tgrid-row: 2/5;\n}\n\n/* i don't need to use these, subgrid is enough */\n/* grid-template-columns: repeat(3, 1fr); */\n/* grid-template-rows: repeat(3, 1fr); */\n.cards-wrapper {\n\tdisplay: grid;\n\tgrid-template-columns: subgrid;\n\tgrid-template-rows: subgrid;\n\tgrid-column: 1/4;\n\tgrid-row: 1/4;\n\tgap: 3rem;\n}\n\n.card-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tpadding: 7px;\n\tflex: 1;\n}\n\n.card-div p {\n\tfont-size: 1.3rem;\n\tfont-weight: 700;\n}\n\n.img-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.img-wrapper img {\n\twidth: auto;\n\theight: 200px;\n}\n\n.meal-btns-container {\n\tdisplay: flex;\n\tgap: 20px;\n\tflex-shrink: 0;\n}\n\n.view-btn,\n.order-btn {\n\tpadding: 12px 15px 12px 15px;\n\tborder-radius: 25px;\n\tfont-family: \"Quicksand\";\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.view-btn {\n\tbackground-color: var(--primary-bg);\n\tcolor: var(--text);\n\tborder: 1px solid gray;\n}\n\n.order-btn {\n\tbackground-color: var(--logo-text);\n\tcolor: var(--primary-bg);\n\tborder: none;\n}\n\n.store-header {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tpadding-left: 4rem;\n}\n\n.store-heading {\n\tmargin: 0;\n\tfont-size: 2.5rem;\n\tpadding: 30px 0px 30px 0px;\n\tborder-bottom: 1px solid #e3e3e3;\n}\n\n.info-container {\n\tmargin-left: 4rem;\n\tmargin-top: 2rem;\n\twidth: 650px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-direction: column;\n}\n\n.tags {\n\tdisplay: flex;\n\tgap: 7px;\n}\n\n.tags p:nth-child(4) {\n\tbackground-color: #E2FCD7;\n\tcolor: #0A5F2E;\n}\n\n.tags p {\n\tbackground-color: #FFF0E5;\n\tborder-radius: 20px;\n\tpadding: 9px 18px 9px 18px;\n\tcolor: #A45418;\n\tfont-weight: 500;\n}\n\n.store-btns {\n\tdisplay: flex;\n\tpadding: 10px 0px 20px 0px;\n\tgap: 15px;\n}\n\n.store-btns button {\n\tpadding: 15px 25px 15px 25px;\n\tborder-radius: 25px;\n\tfont-size: 1.1rem;\n\tfont-family: \"Quicksand\";\n\tfont-weight: 500;\n}\n\n.directions-btn {\n\tcolor: var(--text);\n\tbackground-color: var(--primary-bg);\n\tborder: 1px solid #e3e3e3;\n}\n\n.view-menu-btn {\n\tcolor: var(--primary-bg);\n\tbackground-color: var(--logo-text);\n\tborder: none;\n\n}\n\n.view-menu-btn:hover {\n\tbackground-color: #AE0016;\n}\n\n.contact-store {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.telephone {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.telephone img {\n\theight: 25px !important;\n\twidth: 25px !important\n}\n\n.telephone p {\n\tcolor: var(--logo-text);\n\tmargin: 0;\n\tfont-weight: 500;\n\talign-self: center;\n}\n\n.mail {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n.mail img {\n\theight: 25px !important;\n\twidth: 25px !important\n}\n\n.mail p {\n\tmargin: 0;\n\tcolor: var(--logo-text);\n\tfont-weight: 500;\n\talign-self: center;\n}\n\n.location-store {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 0;\n}\n\n.location-store p {\n\tfont-weight: 500;\n}\n\n.opening-hours-store {\n\tdisplay: flex;\n}\n\n.open-heading {\n\tdisplay: flex;\n\tgap: 25px;\n}\n\n.open-sign {\n\tbackground-color: #E2FCD7;\n\tcolor: #0A5F2E;\n\tborder-radius: 20px;\n\tpadding: 9px 18px 9px 18px;\n\tfont-weight: 700;\n}\n\n.sched {\n\twidth: 500px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.day-sched {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.day-sched p {\n\tfont-weight: 500;\n}\n\n\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n\t.carousel-container {\n\t\twidth: 80%;\n\t}\n}\n\n/* i just saw this from a git repo and honestly i don't know what i am doing */\n/* maybe i should also add the .carousel-inner and .nav-btns  */\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n\t.carousel-container {\n\t\twidth: 80%;\n\t}\n}\n\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n\t.carousel-container {\n\t\twidth: 80%;\n\t}\n}\n\n/* Large devices (laptops/desktops, 992px and up) */\n@media only screen and (min-width: 992px) {\n\t.carousel-container {\n\t\twidth: 85%;\n\t}\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/asset/Jellee-Roman.ttf"
/*!************************************!*\
  !*** ./src/asset/Jellee-Roman.ttf ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6bb8ef104512f1831eff.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/asset/Jellee-Roman.ttf?\n}");

/***/ },

/***/ "./src/asset/bee-svgrepo-com.svg"
/*!***************************************!*\
  !*** ./src/asset/bee-svgrepo-com.svg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"062de81f2aed127c41d0.svg\";\n\n//# sourceURL=webpack://restaurant/./src/asset/bee-svgrepo-com.svg?\n}");

/***/ },

/***/ "./src/asset/img/burgersteak.jpg"
/*!***************************************!*\
  !*** ./src/asset/img/burgersteak.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2fae873d5893071de85f.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/asset/img/burgersteak.jpg?\n}");

/***/ },

/***/ "./src/asset/img/chickenjoy.jpeg"
/*!***************************************!*\
  !*** ./src/asset/img/chickenjoy.jpeg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ff0b5e3ff5f39a84a14d.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/asset/img/chickenjoy.jpeg?\n}");

/***/ },

/***/ "./src/asset/img/featured/no_image.svg"
/*!*********************************************!*\
  !*** ./src/asset/img/featured/no_image.svg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ee97e8e7380876ecf9f4.svg\";\n\n//# sourceURL=webpack://restaurant/./src/asset/img/featured/no_image.svg?\n}");

/***/ },

/***/ "./src/asset/img/spaghetti.jpg"
/*!*************************************!*\
  !*** ./src/asset/img/spaghetti.jpg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f868ac27eddb2353bf6f.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/asset/img/spaghetti.jpg?\n}");

/***/ },

/***/ "./src/asset/mail-svgrepo-com.svg"
/*!****************************************!*\
  !*** ./src/asset/mail-svgrepo-com.svg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"690e4502390f92e6aed9.svg\";\n\n//# sourceURL=webpack://restaurant/./src/asset/mail-svgrepo-com.svg?\n}");

/***/ },

/***/ "./src/asset/telephone-svgrepo-com.svg"
/*!*********************************************!*\
  !*** ./src/asset/telephone-svgrepo-com.svg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a30605c5e962a37d6233.svg\";\n\n//# sourceURL=webpack://restaurant/./src/asset/telephone-svgrepo-com.svg?\n}");

/***/ },

/***/ "./src/HeadingLogo.js"
/*!****************************!*\
  !*** ./src/HeadingLogo.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeadingLogo: () => (/* binding */ HeadingLogo)\n/* harmony export */ });\n/* harmony import */ var _asset_bee_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/bee-svgrepo-com.svg */ \"./src/asset/bee-svgrepo-com.svg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _slideshow_FeatureSlideshow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow/FeatureSlideshow.js */ \"./src/slideshow/FeatureSlideshow.js\");\n/* harmony import */ var _slideshow_HomeSlideshow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slideshow/HomeSlideshow.js */ \"./src/slideshow/HomeSlideshow.js\");\n\n\n\n\n\nfunction HeadingLogo() {\n\tconst contentDiv = document.querySelector(\"#content\")\n\tconst header = document.querySelector(\".jolly-header\");\n\tconst logoheadingContainer = document.createElement(\"a\");\n\tconst img = document.createElement(\"img\");\n\tconst p = document.createElement(\"p\");\n\n\tlogoheadingContainer.className = \"logo-heading\"\n\timg.src = _asset_bee_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__;\n\timg.classList.add(\"resto-img\");\n\tp.classList.add(\"title\")\n\tp.textContent = \"JollyBae\";\n\n\tlogoheadingContainer.append(p, img);\n\theader.prepend(logoheadingContainer);\n\tdocument.querySelector(\".container\").append(header);\n\n\tlogoheadingContainer.addEventListener('click', () => {\n\t\tcontentDiv.replaceChildren()\n\t\t;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.Home)()\n\t\t;(0,_slideshow_HomeSlideshow_js__WEBPACK_IMPORTED_MODULE_3__.HomeSlideshow)()\n\t\t;(0,_slideshow_FeatureSlideshow_js__WEBPACK_IMPORTED_MODULE_2__.FeatureSlideshow)()\n\t})\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/HeadingLogo.js?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   About: () => (/* binding */ About)\n/* harmony export */ });\n\nfunction About() {\n\tconst contentDiv = document.querySelector(\"#content\");\n\tconst aboutDiv = document.createElement(\"div\")\n\taboutDiv.setAttribute(\"id\", \"about-div\")\n\n\n\tconst storeHeader = document.createElement(\"header\");\n\tstoreHeader.className = \"store-header\"\n\n\tconst storeLocation = document.createElement(\"h2\")\n\tstoreLocation.textContent = \"JollyBae Restaurant Near Me - Manila Ermita\"\n\tstoreLocation.className = \"store-heading\"\n\n\tstoreHeader.append(storeLocation)\n\taboutDiv.append(storeHeader)\n\tcontentDiv.append(aboutDiv)\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?\n}");

/***/ },

/***/ "./src/category/CardLoader.js"
/*!************************************!*\
  !*** ./src/category/CardLoader.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardLoader: () => (/* binding */ CardLoader)\n/* harmony export */ });\n\n// accepts meal image and meal name\nfunction CardLoader(src, text) {\n\tconst cardDiv = document.createElement(\"div\")\n\tcardDiv.className = \"card-div\"\n\tconst imgWrapper = document.createElement(\"div\")\n\timgWrapper.className = \"img-wrapper\"\n\n\tconst img = document.createElement(\"img\")\n\timg.src = src\n\timgWrapper.append(img)\n\n\tconst mealName = document.createElement(\"p\");\n\tmealName.textContent = text\n\n\tconst viewBtn = document.createElement('button')\n\tviewBtn.className = \"view-btn\"\n\tviewBtn.textContent = \"View Meal\"\n\n\tconst orderBtn = document.createElement('button')\n\torderBtn.className = \"order-btn\"\n\torderBtn.textContent = \"Order Now\"\n\n\tconst btnContainer = document.createElement(\"div\")\n\tbtnContainer.className = \"meal-btns-container\"\n\tbtnContainer.append(viewBtn, orderBtn)\n\n\tcardDiv.append(imgWrapper, mealName, btnContainer)\n\n\treturn cardDiv;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/category/CardLoader.js?\n}");

/***/ },

/***/ "./src/category/TextLoader.js"
/*!************************************!*\
  !*** ./src/category/TextLoader.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TextLoader: () => (/* binding */ TextLoader)\n/* harmony export */ });\n\nfunction TextLoader(text) {\n\tconst p = document.createElement(\"p\");\n\tp.text = text;\n\treturn p;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/category/TextLoader.js?\n}");

/***/ },

/***/ "./src/category/ViewMenu.js"
/*!**********************************!*\
  !*** ./src/category/ViewMenu.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ViewMenu: () => (/* binding */ ViewMenu)\n/* harmony export */ });\n/* harmony import */ var _CardLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardLoader.js */ \"./src/category/CardLoader.js\");\n/* harmony import */ var _category_categories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category/categories.js */ \"./src/category/categories.js\");\n\n\n\nfunction ViewMenu() {\n\tconst menuDiv = document.querySelector(\"#menu-div\")\n\n\tconst categoryTitleDiv = document.createElement(\"div\")\n\tcategoryTitleDiv.className = \"category-title-div\"\n\n\tconst categoryHeading = document.createElement(\"h2\");\n\tcategoryHeading.textContent = \"Breakfast\"\n\tcategoryHeading.className = \"category-heading\"\n\tcategoryTitleDiv.append(categoryHeading)\n\n\tconst wrapper = document.createElement(\"div\")\n\twrapper.className = \"wrapper\"\n\twrapper.append(categoryTitleDiv)\n\n\tconst gridWrapper = document.createElement(\"div\")\n\tgridWrapper.className = \"grid-wrapper\"\n\n\tconst cardsWrapper = document.createElement(\"div\")\n\tcardsWrapper.className = \"cards-wrapper\"\n\n\n\t_category_categories_js__WEBPACK_IMPORTED_MODULE_1__.meals.forEach((meal) => {\n\t\tconst card = (0,_CardLoader_js__WEBPACK_IMPORTED_MODULE_0__.CardLoader)(meal.img, meal.text)\n\t\tcardsWrapper.append(card)\n\t})\n\n\t// gridWrapper.style.gridTemplateColumns = `repeat(${meals.length}, 250px)`\n\t// gridWrapper.style.gridTemplateRows = `repeat(3, 1fr)`\n\n\n\tgridWrapper.append(cardsWrapper)\n\twrapper.append(gridWrapper)\n\tmenuDiv.append(wrapper)\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/category/ViewMenu.js?\n}");

/***/ },

/***/ "./src/category/categories.js"
/*!************************************!*\
  !*** ./src/category/categories.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categories: () => (/* binding */ categories),\n/* harmony export */   meals: () => (/* binding */ meals)\n/* harmony export */ });\n/* harmony import */ var _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/img/featured/no_image.svg */ \"./src/asset/img/featured/no_image.svg\");\n\n\nconst categories = [\n\t{ text: \"Breakfast\" },\n\t{ text: \"Lunch\" },\n\t{ text: \"Burger Steak\" },\n\t{ text: \"Super Meals\" },\n\t{ text: \"Sundaes\" },\n\t{ text: \"For Kids\" },\n\t{ text: \"Best Sellers\" },\n\t{ text: \"Budget Meal\" },\n\t{ text: \"Dinner\" },\n\t{ text: \"Burgers\" },\n\t{ text: \"Chicken Fillet\" },\n\t{ text: \"Fries\" },\n\t{ text: \"For Teens\" },\n]\n\nconst meals = [\n\t{ img: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__, text: \"1-pc. Breakfast Happy Chicken\" },\n\t{ img: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__, text: \"1-pc. Breakfast Happy Chicken w/ Drink\" },\n\t{ img: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__, text: \"1-pc. Breakfast Happy Chicken Spicy Solo\" },\n\t{ img: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__, text: \"Longganisa Solo\" },\n\t{ img: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__, text: \"Longganisa w/ Drink\" },\n\t{ img: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__, text: \"Beef Tapa Solo\" },\n\t{ img: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__, text: \"Beef Tapa w/ Drink\" },\n\t{ img: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__, text: \"Corned Beef Solo\" },\n\t{ img: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_0__, text: \"Corned Beef w/ Drink\" },\n]\n\n\n//# sourceURL=webpack://restaurant/./src/category/categories.js?\n}");

/***/ },

/***/ "./src/container.js"
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Container: () => (/* binding */ Container)\n/* harmony export */ });\n\nfunction Container() {\n\tconst div = document.createElement(\"div\");\n\tdiv.classList.add(\"container\")\n\tdocument.body.append(div);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/container.js?\n}");

/***/ },

/***/ "./src/footer.js"
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: () => (/* binding */ Footer)\n/* harmony export */ });\n// footer.js\n\nfunction Footer() {\n\tconst footer = document.createElement(\"footer\");\n\tconst p = document.createElement(\"p\");\n\n\tp.textContent = \"Copyright 2026 - JollyBae Restaurant\"\n\tfooter.append(p);\n\tdocument.querySelector(\".container\").append(footer);\n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/footer.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\n\nfunction Home() {\n\tconst contentDiv = document.querySelector(\"#content\");\n\tconst adjacentHeader = document.querySelector(\"header\");\n\tconst div = document.createElement(\"div\") // #home-div\n\tconst title = document.createElement(\"h2\");\n\tconst p = document.createElement(\"p\");\n\tconst headingTextContainer = document.createElement(\"div\");\n\n\theadingTextContainer.classList.add(\"heading-text-container\")\n\tdiv.setAttribute(\"id\", \"home-div\")\n\ttitle.textContent = \"JollyBae\"\n\ttitle.setAttribute(\"class\", \"heading\");\n\tp.classList.add(\"text\");\n\tp.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur sed, expedita quae ullam dolorem quas beatae unde iure id alias porro omnis aperiam, molestias recusandae accusantium! Aliquam, quaerat doloremque!\"\n\n\theadingTextContainer.append(title, p);\n\tdiv.append(headingTextContainer);\n\tcontentDiv.append(div);\n\tadjacentHeader.insertAdjacentElement(\"afterend\", contentDiv); // inserts the #content div, after the header tag\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.js */ \"./src/container.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _HeadingLogo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeadingLogo.js */ \"./src/HeadingLogo.js\");\n/* harmony import */ var _slideshow_HomeSlideshow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideshow/HomeSlideshow.js */ \"./src/slideshow/HomeSlideshow.js\");\n/* harmony import */ var _slideshow_FeatureSlideshow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideshow/FeatureSlideshow.js */ \"./src/slideshow/FeatureSlideshow.js\");\n/* harmony import */ var _category_ViewMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category/ViewMenu.js */ \"./src/category/ViewMenu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _store_StoreInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/StoreInfo.js */ \"./src/store/StoreInfo.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Restaurant {\n\tconstructor() {\n\t\tthis.contentDiv = document.querySelector(\"#content\");\n\t\tthis.homeBtn = document.querySelector(\"#home-btn\");\n\t\tthis.menuBtn = document.querySelector(\"#menu-btn\");\n\t\tthis.aboutBtn = document.querySelector(\"#about-btn\");\n\t}\n\n\tinitListeners() {\n\t\tthis.homeBtn.addEventListener('click', this.loadThisPage);\n\t\tthis.menuBtn.addEventListener('click', this.loadThisPage);\n\t\tthis.aboutBtn.addEventListener('click', this.loadThisPage);\n\t}\n\n\tinitialPageLoad() {\n\t\t;(0,_container_js__WEBPACK_IMPORTED_MODULE_1__.Container)();\n\t\t(0,_HeadingLogo_js__WEBPACK_IMPORTED_MODULE_3__.HeadingLogo)();\n\t\t(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.Home)();\n\t\t(0,_slideshow_HomeSlideshow_js__WEBPACK_IMPORTED_MODULE_4__.HomeSlideshow)();\n\t\t(0,_slideshow_FeatureSlideshow_js__WEBPACK_IMPORTED_MODULE_5__.FeatureSlideshow)();\n\t\t(0,_footer_js__WEBPACK_IMPORTED_MODULE_9__.Footer)();\n\t}\n\n\tloadThisPage = (event) => {\n\t\tlet id = event.target.id;\n\t\tif (id === \"home-btn\") {\n\t\t\tthis.contentDiv.replaceChildren();\n\t\t\t(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.Home)();\n\t\t\t(0,_slideshow_HomeSlideshow_js__WEBPACK_IMPORTED_MODULE_4__.HomeSlideshow)();\n\t\t\t(0,_slideshow_FeatureSlideshow_js__WEBPACK_IMPORTED_MODULE_5__.FeatureSlideshow)();\n\t\t}\n\t\tif (id === \"menu-btn\") {\n\t\t\tthis.contentDiv.replaceChildren();\n\t\t\t(0,_menu_js__WEBPACK_IMPORTED_MODULE_7__.Menu)();\n\t\t\t(0,_category_ViewMenu_js__WEBPACK_IMPORTED_MODULE_6__.ViewMenu)();\n\t\t}\n\t\tif (id === \"about-btn\") {\n\t\t\tthis.contentDiv.replaceChildren();\n\t\t\t(0,_about_js__WEBPACK_IMPORTED_MODULE_8__.About)();\n\t\t\t(0,_store_StoreInfo_js__WEBPACK_IMPORTED_MODULE_10__.StoreInfo)();\n\t\t}\n\t}\n\n}\n\nconst resto = new Restaurant();\nresto.initListeners();\nresto.initialPageLoad();\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _category_categories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category/categories.js */ \"./src/category/categories.js\");\n/* harmony import */ var _category_TextLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category/TextLoader.js */ \"./src/category/TextLoader.js\");\n\n\n\nfunction Menu() {\n\tconst contentDiv = document.querySelector(\"#content\");\n\tconst menuDiv = document.createElement(\"div\");\n\tconst titleContainer = document.createElement(\"div\");\n\tconst title = document.createElement(\"h2\");\n\tconst p = document.createElement(\"p\");\n\n\n\ttitleContainer.classList.add(\"title-container\")\n\tmenuDiv.setAttribute(\"id\", \"menu-div\")\n\ttitle.textContent = \"Menu\"\n\ttitle.classList.add(\"heading\")\n\tp.textContent = \"Menu\"\n\n\tconst carouselContainer = document.createElement(\"div\");\n\tconst carouselInner = document.createElement(\"div\");\n\tcarouselContainer.classList.add(\"carousel-container\")\n\n\t_category_categories_js__WEBPACK_IMPORTED_MODULE_0__.categories.forEach((category) => {\n\t\tconst textDiv = document.createElement(\"div\");\n\t\ttextDiv.classList.add(\"text-box\")\n\t\tconst text = (0,_category_TextLoader_js__WEBPACK_IMPORTED_MODULE_1__.TextLoader)(category);\n\t\ttext.textContent = category.text;\n\n\t\ttextDiv.append(text);\n\t\tcarouselInner.append(textDiv);\n\t})\n\n\n\n\tconst navBtns = document.createElement(\"div\")\n\tconst prevBtn = document.createElement(\"button\");  // left\n\tconst nextBtn = document.createElement(\"button\"); // right\n\n\tprevBtn.type = \"button\"\n\tnextBtn.type = \"button\"\n\tcarouselInner.classList.add(\"carousel-inner\")\n\tnavBtns.classList.add(\"nav-btns\")\n\tprevBtn.classList.add(\"left\")\n\tnextBtn.classList.add(\"right\")\n\tprevBtn.textContent = \"\\u276E\"\n\tnextBtn.textContent = \"\\u276F\"\n\n\tnavBtns.append(prevBtn, nextBtn)\n\tcarouselContainer.append(carouselInner, navBtns)\n\n\ttitleContainer.append(p, title);\n\tmenuDiv.append(titleContainer, carouselContainer);\n\tcontentDiv.appendChild(menuDiv);\n\n\n\tdocument.querySelectorAll('.carousel-container').forEach((carousel) => {\n\t\tconst inner = carousel.querySelector(\".carousel-inner\")\n\t\tconst slides = inner.children;\n\n\t\tcarousel.querySelector(\".nav-btns .left\").addEventListener('click', () => {\n\t\t\tinner.prepend(slides[slides.length - 1]);\n\t\t})\n\n\t\tcarousel.querySelector(\".nav-btns .right\").addEventListener('click', () => {\n\t\t\tinner.append(slides[0]);\n\t\t})\n\t})\n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?\n}");

/***/ },

/***/ "./src/slideshow/FeatureSlideshow.js"
/*!*******************************************!*\
  !*** ./src/slideshow/FeatureSlideshow.js ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FeatureSlideshow: () => (/* binding */ FeatureSlideshow)\n/* harmony export */ });\n/* harmony import */ var _slides_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slides.js */ \"./src/slideshow/slides.js\");\n/* harmony import */ var _imageLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageLoader.js */ \"./src/slideshow/imageLoader.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.js */ \"./src/menu.js\");\n/* harmony import */ var _category_ViewMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category/ViewMenu.js */ \"./src/category/ViewMenu.js\");\n\n\n\n\n\nfunction FeatureSlideshow() {\n\t// let currentIndex = 0;\n\tconst slideBoxes = [];\n\n\tconst homeDiv = document.querySelector(\"#home-div\")\n\n\tconst featureContainer = document.createElement(\"div\");\n\tconst featured = document.createElement(\"div\");\n\n\tconst titleLinkToMenuDiv = document.createElement(\"div\");\n\tconst title = document.createElement(\"h2\");\n\tconst linkToMenu = document.createElement(\"a\");\n\n\tfeatureContainer.classList.add(\"feature-container\");\n\tfeatured.classList.add(\"featured\");\n\n\ttitle.textContent = \"Featured Menu\"\n\tlinkToMenu.textContent = \"View All\"\n\tlinkToMenu.href = \"#\"\n\tlinkToMenu.setAttribute(\"id\", \"link-to-menu\")\n\ttitleLinkToMenuDiv.classList.add(\"title-link-menu\")\n\ttitleLinkToMenuDiv.append(title, linkToMenu);\n\n\t_slides_js__WEBPACK_IMPORTED_MODULE_0__.featureSlides.forEach(slide => {\n\t\tconst slideBox = document.createElement(\"div\");\n\t\tslideBox.classList.add(\"myBox\", \"fade\");\n\n\t\tconst img = (0,_imageLoader_js__WEBPACK_IMPORTED_MODULE_1__.imageLoader)(slide.src, slide.alt);\n\t\tconst featureText = document.createElement(\"p\");\n\t\tfeatureText.textContent = slide.alt;\n\t\tslideBox.append(img, featureText);\n\t\tfeatured.append(slideBox);\n\t\tslideBoxes.push(slideBox);\n\t})\n\n\tlinkToMenu.addEventListener('click', (event) => {\n\t\tevent.preventDefault();\n\t\tdocument.querySelector(\"#content\").replaceChildren();\n\t\t(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.Menu)()\n\t\t;(0,_category_ViewMenu_js__WEBPACK_IMPORTED_MODULE_3__.ViewMenu)()\n\t});\n\n\tfeatureContainer.prepend(titleLinkToMenuDiv, featured);\n\thomeDiv.append(featureContainer);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/slideshow/FeatureSlideshow.js?\n}");

/***/ },

/***/ "./src/slideshow/HomeSlideshow.js"
/*!****************************************!*\
  !*** ./src/slideshow/HomeSlideshow.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeSlideshow: () => (/* binding */ HomeSlideshow)\n/* harmony export */ });\n/* harmony import */ var _slides_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slides.js */ \"./src/slideshow/slides.js\");\n/* harmony import */ var _imageLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageLoader.js */ \"./src/slideshow/imageLoader.js\");\n\n\n\n\nfunction HomeSlideshow() {\n\tlet currentIndex = 0;\n\tconst slideBoxes = [];\n\tconst homeDiv = document.querySelector(\"#home-div\");\n\n\tconst container = document.createElement(\"div\");\n\tcontainer.classList.add(\"slideshow-container\");\n\n\t_slides_js__WEBPACK_IMPORTED_MODULE_0__.slides.forEach(slide => {\n\t\tconst slideBox = document.createElement(\"div\")\n\t\tslideBox.classList.add(\"mySlides\", \"fade\");\n\n\t\tconst img = (0,_imageLoader_js__WEBPACK_IMPORTED_MODULE_1__.imageLoader)(slide.src, slide.alt);\n\t\tslideBox.append(img)\n\t\tcontainer.append(slideBox);\n\t\tslideBoxes.push(slideBox);\n\t})\n\n\t// idk why i used a tags here\n\tconst prevBtn = document.createElement(\"a\");\n\tconst nextBtn = document.createElement(\"a\");\n\tprevBtn.classList.add(\"prev\")\n\tnextBtn.classList.add(\"next\")\n\tprevBtn.textContent = \"\\u276E\"\n\tnextBtn.textContent = \"\\u276F\"\n\n\n\tcontainer.append(prevBtn, nextBtn);\n\thomeDiv.prepend(container);\n\n\tconst firstChild = document.querySelector(\".slideshow-container > :first-child\");\n\tfirstChild.classList.add(\"active\");\n\n\tfunction showSlide(i) {\n\t\tslideBoxes.forEach((box, idx) => {\n\t\t\tbox.classList.toggle('active', idx === i)\n\t\t})\n\t}\n\n\tnextBtn.addEventListener(\"click\", () => {\n\t\tcurrentIndex = (currentIndex + 1) % _slides_js__WEBPACK_IMPORTED_MODULE_0__.slides.length;\n\t\tshowSlide(currentIndex);\n\t})\n\n\tprevBtn.addEventListener(\"click\", () => {\n\t\tcurrentIndex = (currentIndex - 1 + _slides_js__WEBPACK_IMPORTED_MODULE_0__.slides.length) % _slides_js__WEBPACK_IMPORTED_MODULE_0__.slides.length;\n\t\tshowSlide(currentIndex);\n\t})\n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/slideshow/HomeSlideshow.js?\n}");

/***/ },

/***/ "./src/slideshow/imageLoader.js"
/*!**************************************!*\
  !*** ./src/slideshow/imageLoader.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   imageLoader: () => (/* binding */ imageLoader)\n/* harmony export */ });\n\nfunction imageLoader(src, alt) {\n\tconst img = document.createElement(\"img\")\n\timg.src = src;\n\timg.alt = alt;\n\timg.style = \"width: 100%\";\n\treturn img;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/slideshow/imageLoader.js?\n}");

/***/ },

/***/ "./src/slideshow/slides.js"
/*!*********************************!*\
  !*** ./src/slideshow/slides.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   featureSlides: () => (/* binding */ featureSlides),\n/* harmony export */   slides: () => (/* binding */ slides)\n/* harmony export */ });\n/* harmony import */ var _asset_img_burgersteak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/img/burgersteak.jpg */ \"./src/asset/img/burgersteak.jpg\");\n/* harmony import */ var _asset_img_chickenjoy_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/img/chickenjoy.jpeg */ \"./src/asset/img/chickenjoy.jpeg\");\n/* harmony import */ var _asset_img_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/img/spaghetti.jpg */ \"./src/asset/img/spaghetti.jpg\");\n/* harmony import */ var _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/img/featured/no_image.svg */ \"./src/asset/img/featured/no_image.svg\");\n\n// home slideshow, for the main slideshow\n\n\n\n\n// featured items, for the featured slideshow\n\n\n\n\nconst slides = [\n\t{ src: _asset_img_burgersteak_jpg__WEBPACK_IMPORTED_MODULE_0__, alt: \"burgersteak\" },\n\t{ src: _asset_img_chickenjoy_jpeg__WEBPACK_IMPORTED_MODULE_1__, alt: \"chickenjoy\" },\n\t{ src: _asset_img_spaghetti_jpg__WEBPACK_IMPORTED_MODULE_2__, alt: \"spaghetti\" }\n]\n\nconst featureSlides = [\n\t{ src: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_3__, alt: \"Breakfast\" },\n\t{ src: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_3__, alt: \"Lunch\" },\n\t{ src: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_3__, alt: \"Burger Steak & Chicken Fillet\" },\n\t{ src: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_3__, alt: \"Super Meals\" },\n\t{ src: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_3__, alt: \"Sundaes and Fries\" },\n\t{ src: _asset_img_featured_no_image_svg__WEBPACK_IMPORTED_MODULE_3__, alt: \"For the Kids Meal\" },\n]\n\n\n//# sourceURL=webpack://restaurant/./src/slideshow/slides.js?\n}");

/***/ },

/***/ "./src/store/StoreInfo.js"
/*!********************************!*\
  !*** ./src/store/StoreInfo.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StoreInfo: () => (/* binding */ StoreInfo)\n/* harmony export */ });\n/* harmony import */ var _asset_telephone_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/telephone-svgrepo-com.svg */ \"./src/asset/telephone-svgrepo-com.svg\");\n/* harmony import */ var _asset_mail_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/mail-svgrepo-com.svg */ \"./src/asset/mail-svgrepo-com.svg\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.js */ \"./src/menu.js\");\n/* harmony import */ var _category_ViewMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category/ViewMenu.js */ \"./src/category/ViewMenu.js\");\n\n\n\n\n\n\nfunction StoreInfo() {\n\tconst infoContainer = document.createElement(\"div\")\n\tinfoContainer.className = \"info-container\"\n\n\tconst tags = document.createElement(\"div\")\n\ttags.className = \"tags\"\n\n\tconst tag1 = document.createElement(\"p\")\n\ttag1.textContent = \"Dine-in\"\n\tconst tag2 = document.createElement(\"p\")\n\ttag2.textContent = \"Delivery\"\n\tconst tag3 = document.createElement(\"p\")\n\ttag3.textContent = \"Pickup\"\n\tconst tag4 = document.createElement(\"p\")\n\ttag4.textContent = \"24hrs\"\n\n\ttags.append(tag1, tag2, tag3, tag4)\n\n\tconst buttons = document.createElement(\"div\")\n\tbuttons.className = \"store-btns\"\n\n\tconst btn1 = document.createElement(\"button\")\n\tbtn1.textContent = \"Directions\"\n\tbtn1.className = \"directions-btn\"\n\tconst btn2 = document.createElement(\"button\")\n\tbtn2.textContent = \"View Menu\"\n\tbtn2.className = \"view-menu-btn\"\n\n\tbuttons.append(btn1, btn2)\n\n\tconst contactStore = document.createElement(\"div\")\n\tcontactStore.className = \"contact-store\"\n\n\tconst contactHeading = document.createElement(\"h3\")\n\tcontactHeading.textContent = \"Contact Store\"\n\tcontactHeading.className = \"contact-heading\"\n\n\tconst tel = document.createElement(\"div\")\n\ttel.className = \"telephone\"\n\tconst telephone = document.createElement(\"p\")\n\tconst telIcon = document.createElement(\"img\")\n\ttelIcon.src = _asset_telephone_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__\n\ttelephone.textContent = \"09123456745\"\n\ttel.append(telIcon, telephone)\n\n\tconst mail = document.createElement(\"div\")\n\tmail.className = \"mail\"\n\tconst email = document.createElement(\"p\")\n\tconst mailIcon = document.createElement(\"img\")\n\tmailIcon.src = _asset_mail_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__\n\temail.textContent = \"chickenandspag@jollybae.com.ph\"\n\tmail.append(mailIcon, email)\n\n\tconst locationStore = document.createElement(\"div\")\n\tlocationStore.className = \"location-store\"\n\tconst locationHeading = document.createElement(\"h3\")\n\tlocationHeading.className = \"location-heading\"\n\tlocationHeading.textContent = \"Location\"\n\tconst location = document.createElement(\"p\")\n\tlocation.textContent = \"B23 L19 Purok 8 Barangay Maharlika, Ermita, Manila\"\n\tlocationStore.append(locationHeading, location)\n\n\tconst openingHoursStore = document.createElement(\"div\")\n\topeningHoursStore.className = \"opening-hours-store\"\n\tconst openHeading = document.createElement(\"div\")\n\topenHeading.className = \"open-heading\"\n\n\tconst openingHours = document.createElement(\"h3\")\n\topeningHours.className = \"opening-hours\"\n\topeningHours.textContent = \"Opening Hours\"\n\n\tconst openSign = document.createElement(\"p\")\n\topenSign.className = \"open-sign\"\n\topenSign.textContent = \"Open\"\n\n\topenHeading.append(openingHours, openSign)\n\topeningHoursStore.append(openHeading)\n\n\tconst sched = document.createElement(\"div\")\n\tsched.className = \"sched\"\n\tconst days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\n\n\tdays.forEach((day) => {\n\t\tconst div = document.createElement(\"div\")\n\t\tdiv.className = \"day-sched\"\n\t\tconst whatDay = document.createElement(\"p\")\n\t\tconst open = document.createElement(\"p\")\n\t\twhatDay.textContent = `${day}`\n\t\topen.textContent = \"Open 24 hours\"\n\t\tdiv.append(whatDay, open)\n\t\tsched.append(div)\n\t})\n\n\tcontactStore.append(contactHeading, tel, mail, locationStore, openingHoursStore, sched)\n\n\n\n\tinfoContainer.append(tags, buttons, contactStore);\n\tconst aboutDiv = document.querySelector(\"#about-div\")\n\taboutDiv.append(infoContainer);\n\n\tconst viewMenuBtn = document.querySelector(\".view-menu-btn\")\n\tviewMenuBtn.addEventListener('click', (event) => {\n\t\tevent.preventDefault();\n\t\tdocument.querySelector(\"#content\").replaceChildren();\n\t\t(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.Menu)()\n\t\t;(0,_category_ViewMenu_js__WEBPACK_IMPORTED_MODULE_3__.ViewMenu)()\n\t})\n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/store/StoreInfo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;