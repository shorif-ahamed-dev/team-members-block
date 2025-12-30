/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/team-members/block.json"
/*!*************************************!*\
  !*** ./src/team-members/block.json ***!
  \*************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/team-members","version":"0.1.0","title":"Team Members","category":"text","icon":"groups","description":"This is team members block","example":{},"supports":{"html":false},"attributes":{"columns":{"type":"number","default":2}},"textdomain":"team-members","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/team-members/edit.js"
/*!**********************************!*\
  !*** ./src/team-members/edit.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    columns
  } = attributes;
  const onChangeColumns = columns => {
    setAttributes({
      columns
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: `has-${columns}-columns`
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Columns', 'team-members'),
          min: 1,
          max: 6,
          onChange: onChangeColumns,
          value: columns
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
      allowedBlocks: ['create-block/team-member'],
      template: [['create-block/team-member'], ['create-block/team-member'], ['create-block/team-member']]
      // templateLock="all"
    })]
  });
}

/***/ },

/***/ "./src/team-members/save.js"
/*!**********************************!*\
  !*** ./src/team-members/save.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    columns
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      className: `has-${columns}-columns`
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ },

/***/ "./src/team-members/style.scss"
/*!*************************************!*\
  !*** ./src/team-members/style.scss ***!
  \*************************************/
() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nMissing math operator.\n\u001b[34m  ╷\u001b[0m\n\u001b[34m8 │\u001b[0m                 width: calc(\u001b[31m100% / #{$i}- 20px\u001b[0m);\n\u001b[34m  │\u001b[0m \u001b[31m                            ^^^^^^^^^^^^^^^^^^\u001b[0m\n\u001b[34m  ╵\u001b[0m\n  src/team-members/style.scss 8:17  root stylesheet\n    at tryRunOrWebpackError (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/HookWebpackError.js:114:9)\n    at __webpack_require_module__ (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5578:12)\n    at __webpack_require__ (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5525:18)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5613:20\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/Hook.js:21:14)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5500:43\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3463:5)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5463:16\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3463:5)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5431:15\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3527:9)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5377:8\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:3781:6\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/HookWebpackError.js:95:2\n    at Hook.eval [as callAsync] (eval at create (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:15:1)\n    at Cache.store (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Cache.js:114:20)\n    at ItemCacheFacade.store (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:3780:11\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Cache.js:100:5\n    at Hook.eval [as callAsync] (eval at create (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:16:1)\n    at Cache.get (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Cache.js:82:18)\n    at ItemCacheFacade.get (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:3747:9)\n    at codeGen (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5365:11)\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3463:5)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5395:14\n    at processQueue (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:84:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nMissing math operator.\n\u001b[34m  ╷\u001b[0m\n\u001b[34m8 │\u001b[0m                 width: calc(\u001b[31m100% / #{$i}- 20px\u001b[0m);\n\u001b[34m  │\u001b[0m \u001b[31m                            ^^^^^^^^^^^^^^^^^^\u001b[0m\n\u001b[34m  ╵\u001b[0m\n  src/team-members/style.scss 8:17  root stylesheet\n    at Object.<anonymous> (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/src/team-members/style.scss:1:7)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:551:10\n    at Hook.eval [as call] (eval at create (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/Hook.js:16:14)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5580:39\n    at tryRunOrWebpackError (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/HookWebpackError.js:109:7)\n    at __webpack_require_module__ (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5578:12)\n    at __webpack_require__ (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5525:18)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5613:20\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/Hook.js:21:14)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5500:43\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3463:5)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5463:16\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3463:5)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5431:15\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3527:9)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5377:8\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:3781:6\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/HookWebpackError.js:95:2\n    at Hook.eval [as callAsync] (eval at create (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:15:1)\n    at Cache.store (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Cache.js:114:20)\n    at ItemCacheFacade.store (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:3780:11\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Cache.js:100:5\n    at Hook.eval [as callAsync] (eval at create (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:16:1)\n    at Cache.get (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Cache.js:82:18)\n    at ItemCacheFacade.get (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:3747:9)\n    at codeGen (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5365:11)\n    at symbolIterator (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/neo-async/async.js:3463:5)\n    at /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/Compilation.js:5395:14\n    at processQueue (/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:84:11)\n\nGenerated code for /Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Users/th29/projects/wp-block-dev/wp-content/plugins/team-members/src/team-members/style.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nMissing math operator.\\n\\u001b[34m  ╷\\u001b[0m\\n\\u001b[34m8 │\\u001b[0m                 width: calc(\\u001b[31m100% / #{$i}- 20px\\u001b[0m);\\n\\u001b[34m  │\\u001b[0m \\u001b[31m                            ^^^^^^^^^^^^^^^^^^\\u001b[0m\\n\\u001b[34m  ╵\\u001b[0m\\n  src/team-members/style.scss 8:17  root stylesheet\");");

/***/ },

/***/ "./src/team-members/team-member/edit.js"
/*!**********************************************!*\
  !*** ./src/team-members/team-member/edit.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Edit({
  attributes,
  setAttributes
}) {
  const {
    name,
    bio
  } = attributes;
  const onChangeName = name => {
    setAttributes({
      name
    });
  };
  const onChangeBio = bio => {
    setAttributes({
      bio
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Name", 'team-member'),
      tagName: "h4",
      onChange: onChangeName,
      value: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Bio", 'team-member'),
      tagName: "p",
      onChange: onChangeBio,
      value: bio
    })]
  });
}

/***/ },

/***/ "./src/team-members/team-member/index.js"
/*!***********************************************!*\
  !*** ./src/team-members/team-member/index.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/team-members/team-member/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/team-members/team-member/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/team-member', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Team Member', 'team-members'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A team member item', 'team-members'),
  icon: 'admin-users',
  parent: ['create-block/team-members'],
  supports: {
    reusable: false,
    html: false
  },
  attributes: {
    name: {
      type: "string",
      source: "html",
      selector: 'h4'
    },
    bio: {
      type: 'string',
      source: 'html',
      selector: 'p'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/team-members/team-member/save.js"
/*!**********************************************!*\
  !*** ./src/team-members/team-member/save.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Save({
  attributes
}) {
  const {
    name,
    bio
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Name", 'team-member'),
      tagName: "h4",
      value: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Member Bio", 'team-member'),
      tagName: "p",
      value: bio
    })]
  });
}

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./src/team-members/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/team-members/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/team-members/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/team-members/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/team-members/block.json");
/* harmony import */ var _team_member__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-member */ "./src/team-members/team-member/index.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map