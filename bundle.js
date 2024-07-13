/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Inter.ttf */ "./src/font/Inter.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-size: 16px;
    --brand-purple: #5A3F59;
    --dark-purple: #3F2C3F;
    --darker-purple: #282228;
    --danger-red: rgb(164, 28, 28);
}

body {
    margin: 0px;
    padding: 0px;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    font-family: 'Inter', 'Helvetica', sans-serif;
    background-color: var(--brand-purple);
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) 4fr;
    grid-template-rows: 100px min-content 1fr;
    grid-auto-rows: none;
    grid-template-areas: 
    "header header"
    "sidebar toolbar"
    "sidebar content"
    ;
    overflow-x: hidden;

    * {
        background-color: transparent;
    }
}

@font-face {
    font-family: 'Inter';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

header {
    background-color: var(--brand-purple);
    color: #fff;
    padding: 1rem 2rem;
    display: flex;
    grid-area: header;
    align-self: center;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    > #logo-box {
        display: flex;
        gap: .5rem;
        align-items: center;
        font-size: 2rem;

        > svg {
            height: 100%;
            max-height: 2.5rem;
        }
    }

    #demo-prompt {
        position: sticky;
        display: flex;
        margin-left: auto;
        align-items: center;
        background-color: #3F2C3F98;
        gap: 2rem;
        padding: 1.2rem 1rem 1.2rem 1.5rem;
        border-radius: .3rem;

        span {
            color: #ffffffce;
        }

        .button-group {
            display: flex;
            gap: 1rem;
            

            button {
                border: 2px solid --brand-purple;
                border: none;
                padding: .4rem .8rem;
                font-weight: 800;
                color: #fff9;
                cursor: pointer;
            }

            #load-demo-button {
                border: 1px solid #ffffff30;
                background-color: var(--dark-purple);
                
                &:hover {
                    background-color: #282228;
                    color: white;
                }
            }

            #dismiss-demo-button {
                &:hover {
                    text-decoration: underline;
                    color: #ffffffdd;
                }
            }
        }
    }
}

#sidebar-wrapper {
    position: relative;
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: stretch;
    background-color: #3F2C3F;
    align-items: stretch;
}


#sidebar {
    position: sticky;
    top: 0;
    padding: 1rem 2rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    h1 {
        margin: 0px;
        padding: 0px;
        margin-bottom: 1rem;
        font-size: 1.3rem;
        font-weight: 200;
        background-color: var(--brand-purple);
        padding: .3rem .5rem .3rem;
        text-align: right;
        align-self: flex-end;
        width: 80%;
    }
    

    ul {
        margin: 0px;
        padding: 0px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: .3rem;
        align-items: flex-end;
        
    }

    button {
        border: none;
        color: #fff;
        padding: .3rem .6rem .3rem 1rem;
        background-color: var(--darker-purple);
        font-size: 1.2rem;
        cursor: pointer;
        text-align: right;

        &.active {
            background-color: var(--brand-purple);
            color: #fff;
            font-weight: 500;
            font-style: italic;
        }

        &:hover ,&.active.project-filter-button {
            background-color: #fff;
            color: var(--brand-purple);
            font-weight: 200;
        }

        &#show-all-projects {
            background-color: #eee;
            color: var(--dark-purple);
            margin-bottom: 1rem;
            align-self: flex-end;
            padding: .2rem .4rem .2rem 1rem;

            &:hover {
                background-color: var(--darker-purple);
                color: #fff;
            }
        }
    }

    #priority-button-group {
        display: flex;
        margin-bottom: 1rem;
        align-self: flex-end;

        .priority-button {
            font-size: .8rem;
            text-align: center;
            box-sizing: border-box;

            &:not(:last-child){
                border-right: 2px solid var(--dark-purple);
            }

            &.active {
                background-color: #000;
                font-weight: 500;
                font-style: normal;

                &#priority-button-low {
                    color: yellowgreen;
                }

                &#priority-button-medium {
                    color: orange;
                }

                &#priority-button-high {
                    color: orangered;
                }

                &#priority-button-all {
                    &.active:hover{
                        background-color: var(--brand-purple);
                        color: #fff;
                    }
                }
            }
        }
    }
}

#content {
    background-color: #dad8d8;
    align-self: stretch;
    grid-area: content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    .no-content-alert {
        flex-direction: column;
        align-items: stretch;
        background-color: #fff;

        .top-text, .bottom-text {
            padding: 1rem 3rem 1rem 1.5rem;
        }

        .top-text {
            font-weight: 500;
            background-color: var(--dark-purple);
            color: #fff;
        }

        .bottom-text {
            font-size: .8rem;
            padding-top: .8rem;

            button {
                display: block;
                margin-top: 1rem;
                margin-bottom: -.2rem;
                background-color: var(--dark-purple);
                color: #fff;
                border: none;
                cursor: pointer;
                font-size: 1rem;
                padding: .4rem .7rem;
                border-radius: 4px;

                &:hover{
                    background-color: var(--brand-purple);
                }
            }
        }

        
    }

    #only-filtered-alert {
        display: none;
    }

    #no-todos-alert {
        display: none;
    }

    &:has(.todo[project-filtered], .todo[time-filtered], .todo[priority-filtered]):not(:has(.todo:not([project-filtered]):not([time-filtered]):not([priority-filtered]))){

        #only-filtered-alert{
            display: flex;
        }
    }

    &:not(:has(.todo)){
        #no-todos-alert {
            display: flex;
        }
    }

}

#toolbar {
    position: sticky;
    top: 0;
    background-color: var(--darker-purple);
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    justify-content: center;
    grid-area: "toolbar";

    span {
        color: #fff;
        font-size: .8rem;
        padding: .2rem .6rem;
        background-color: var(--dark-purple);
        cursor: default;
    }

    #sort-button-group {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-left: 3rem;

        button:not(.active){
            background-color: #111;

            &:hover {
                background-color: var(--brand-purple);
                color: #fff;
            }
        }

        button.active {
            background-color: #eee;
            color: var(--dark-purple);
            font-weight: 600;
        }
    }

    button {
        border: none;
        padding: .2rem 1rem;
        color: #fff;
        background-color: var(--brand-purple);
        border-radius: 1.2rem;
        cursor: pointer;

        &:hover {
            background-color: var(--dark-purple);
        }

        &:active {
            background-color: #fff;
            color: var(--brand-purple);
        }
    }

    #new-todo-button {
        margin-left: auto;
        margin-right: 3rem;
    }

    #sort-order-toggle {
        margin-left: 1rem;
        font-size: .8rem;

        &[data-currently="descending"]{

            &::after {
                position: relative;
                top: -4px;
                content: '⌄';
            }
        }

        &[data-currently="ascending"]{

            &::after {
                position: relative;
                top: 2px;
                content: '⌃';
            }
        }
    }

}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,uBAAuB;IACvB,sBAAsB;IACtB,wBAAwB;IACxB,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,6CAA6C;IAC7C,qCAAqC;IACrC,aAAa;IACb,mDAAmD;IACnD,yCAAyC;IACzC,oBAAoB;IACpB;;;;IAIA;IACA,kBAAkB;;IAElB;QACI,6BAA6B;IACjC;AACJ;;AAEA;IACI,oBAAoB;IACpB,4CAA0B;AAC9B;;AAEA;IACI,qCAAqC;IACrC,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,kBAAkB;;IAElB,yBAAyB,EAAE,WAAW;IACtC,qBAAqB,EAAE,oBAAoB;IAC3C,iBAAiB,EAAE,oBAAoB;;IAEvC;QACI,aAAa;QACb,UAAU;QACV,mBAAmB;QACnB,eAAe;;QAEf;YACI,YAAY;YACZ,kBAAkB;QACtB;IACJ;;IAEA;QACI,gBAAgB;QAChB,aAAa;QACb,iBAAiB;QACjB,mBAAmB;QACnB,2BAA2B;QAC3B,SAAS;QACT,kCAAkC;QAClC,oBAAoB;;QAEpB;YACI,gBAAgB;QACpB;;QAEA;YACI,aAAa;YACb,SAAS;;;YAGT;gBACI,gCAAgC;gBAChC,YAAY;gBACZ,oBAAoB;gBACpB,gBAAgB;gBAChB,YAAY;gBACZ,eAAe;YACnB;;YAEA;gBACI,2BAA2B;gBAC3B,oCAAoC;;gBAEpC;oBACI,yBAAyB;oBACzB,YAAY;gBAChB;YACJ;;YAEA;gBACI;oBACI,0BAA0B;oBAC1B,gBAAgB;gBACpB;YACJ;QACJ;IACJ;AACJ;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,wBAAwB;IACxB,yBAAyB;IACzB,oBAAoB;AACxB;;;AAGA;IACI,gBAAgB;IAChB,MAAM;IACN,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;;;IAGtB,yBAAyB,EAAE,WAAW;IACtC,qBAAqB,EAAE,oBAAoB;IAC3C,iBAAiB,EAAE,oBAAoB;;IAEvC;QACI,WAAW;QACX,YAAY;QACZ,mBAAmB;QACnB,iBAAiB;QACjB,gBAAgB;QAChB,qCAAqC;QACrC,0BAA0B;QAC1B,iBAAiB;QACjB,oBAAoB;QACpB,UAAU;IACd;;;IAGA;QACI,WAAW;QACX,YAAY;QACZ,qBAAqB;QACrB,aAAa;QACb,sBAAsB;QACtB,qBAAqB;QACrB,aAAa;QACb,sBAAsB;QACtB,UAAU;QACV,qBAAqB;;IAEzB;;IAEA;QACI,YAAY;QACZ,WAAW;QACX,+BAA+B;QAC/B,sCAAsC;QACtC,iBAAiB;QACjB,eAAe;QACf,iBAAiB;;QAEjB;YACI,qCAAqC;YACrC,WAAW;YACX,gBAAgB;YAChB,kBAAkB;QACtB;;QAEA;YACI,sBAAsB;YACtB,0BAA0B;YAC1B,gBAAgB;QACpB;;QAEA;YACI,sBAAsB;YACtB,yBAAyB;YACzB,mBAAmB;YACnB,oBAAoB;YACpB,+BAA+B;;YAE/B;gBACI,sCAAsC;gBACtC,WAAW;YACf;QACJ;IACJ;;IAEA;QACI,aAAa;QACb,mBAAmB;QACnB,oBAAoB;;QAEpB;YACI,gBAAgB;YAChB,kBAAkB;YAClB,sBAAsB;;YAEtB;gBACI,0CAA0C;YAC9C;;YAEA;gBACI,sBAAsB;gBACtB,gBAAgB;gBAChB,kBAAkB;;gBAElB;oBACI,kBAAkB;gBACtB;;gBAEA;oBACI,aAAa;gBACjB;;gBAEA;oBACI,gBAAgB;gBACpB;;gBAEA;oBACI;wBACI,qCAAqC;wBACrC,WAAW;oBACf;gBACJ;YACJ;QACJ;IACJ;AACJ;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;;IAEnB;QACI,sBAAsB;QACtB,oBAAoB;QACpB,sBAAsB;;QAEtB;YACI,8BAA8B;QAClC;;QAEA;YACI,gBAAgB;YAChB,oCAAoC;YACpC,WAAW;QACf;;QAEA;YACI,gBAAgB;YAChB,kBAAkB;;YAElB;gBACI,cAAc;gBACd,gBAAgB;gBAChB,qBAAqB;gBACrB,oCAAoC;gBACpC,WAAW;gBACX,YAAY;gBACZ,eAAe;gBACf,eAAe;gBACf,oBAAoB;gBACpB,kBAAkB;;gBAElB;oBACI,qCAAqC;gBACzC;YACJ;QACJ;;;IAGJ;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;;IAEA;;QAEI;YACI,aAAa;QACjB;IACJ;;IAEA;QACI;YACI,aAAa;QACjB;IACJ;;AAEJ;;AAEA;IACI,gBAAgB;IAChB,MAAM;IACN,sCAAsC;IACtC,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;;IAEpB;QACI,WAAW;QACX,gBAAgB;QAChB,oBAAoB;QACpB,oCAAoC;QACpC,eAAe;IACnB;;IAEA;QACI,aAAa;QACb,mBAAmB;QACnB,UAAU;QACV,iBAAiB;;QAEjB;YACI,sBAAsB;;YAEtB;gBACI,qCAAqC;gBACrC,WAAW;YACf;QACJ;;QAEA;YACI,sBAAsB;YACtB,yBAAyB;YACzB,gBAAgB;QACpB;IACJ;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,WAAW;QACX,qCAAqC;QACrC,qBAAqB;QACrB,eAAe;;QAEf;YACI,oCAAoC;QACxC;;QAEA;YACI,sBAAsB;YACtB,0BAA0B;QAC9B;IACJ;;IAEA;QACI,iBAAiB;QACjB,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;QACjB,gBAAgB;;QAEhB;;YAEI;gBACI,kBAAkB;gBAClB,SAAS;gBACT,YAAY;YAChB;QACJ;;QAEA;;YAEI;gBACI,kBAAkB;gBAClB,QAAQ;gBACR,YAAY;YAChB;QACJ;IACJ;;AAEJ","sourcesContent":[":root {\n    font-size: 16px;\n    --brand-purple: #5A3F59;\n    --dark-purple: #3F2C3F;\n    --darker-purple: #282228;\n    --danger-red: rgb(164, 28, 28);\n}\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    width: 100vw;\n    max-width: 100vw;\n    height: 100vh;\n    font-family: 'Inter', 'Helvetica', sans-serif;\n    background-color: var(--brand-purple);\n    display: grid;\n    grid-template-columns: minmax(min-content, 1fr) 4fr;\n    grid-template-rows: 100px min-content 1fr;\n    grid-auto-rows: none;\n    grid-template-areas: \n    \"header header\"\n    \"sidebar toolbar\"\n    \"sidebar content\"\n    ;\n    overflow-x: hidden;\n\n    * {\n        background-color: transparent;\n    }\n}\n\n@font-face {\n    font-family: 'Inter';\n    src: url(./font/Inter.ttf);\n}\n\nheader {\n    background-color: var(--brand-purple);\n    color: #fff;\n    padding: 1rem 2rem;\n    display: flex;\n    grid-area: header;\n    align-self: center;\n\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none; /* Standard syntax */\n\n    > #logo-box {\n        display: flex;\n        gap: .5rem;\n        align-items: center;\n        font-size: 2rem;\n\n        > svg {\n            height: 100%;\n            max-height: 2.5rem;\n        }\n    }\n\n    #demo-prompt {\n        position: sticky;\n        display: flex;\n        margin-left: auto;\n        align-items: center;\n        background-color: #3F2C3F98;\n        gap: 2rem;\n        padding: 1.2rem 1rem 1.2rem 1.5rem;\n        border-radius: .3rem;\n\n        span {\n            color: #ffffffce;\n        }\n\n        .button-group {\n            display: flex;\n            gap: 1rem;\n            \n\n            button {\n                border: 2px solid --brand-purple;\n                border: none;\n                padding: .4rem .8rem;\n                font-weight: 800;\n                color: #fff9;\n                cursor: pointer;\n            }\n\n            #load-demo-button {\n                border: 1px solid #ffffff30;\n                background-color: var(--dark-purple);\n                \n                &:hover {\n                    background-color: #282228;\n                    color: white;\n                }\n            }\n\n            #dismiss-demo-button {\n                &:hover {\n                    text-decoration: underline;\n                    color: #ffffffdd;\n                }\n            }\n        }\n    }\n}\n\n#sidebar-wrapper {\n    position: relative;\n    grid-area: sidebar;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: stretch;\n    background-color: #3F2C3F;\n    align-items: stretch;\n}\n\n\n#sidebar {\n    position: sticky;\n    top: 0;\n    padding: 1rem 2rem;\n    color: #fff;\n    display: flex;\n    flex-direction: column;\n    \n\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none; /* Standard syntax */\n\n    h1 {\n        margin: 0px;\n        padding: 0px;\n        margin-bottom: 1rem;\n        font-size: 1.3rem;\n        font-weight: 200;\n        background-color: var(--brand-purple);\n        padding: .3rem .5rem .3rem;\n        text-align: right;\n        align-self: flex-end;\n        width: 80%;\n    }\n    \n\n    ul {\n        margin: 0px;\n        padding: 0px;\n        list-style-type: none;\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 1.5rem;\n        display: flex;\n        flex-direction: column;\n        gap: .3rem;\n        align-items: flex-end;\n        \n    }\n\n    button {\n        border: none;\n        color: #fff;\n        padding: .3rem .6rem .3rem 1rem;\n        background-color: var(--darker-purple);\n        font-size: 1.2rem;\n        cursor: pointer;\n        text-align: right;\n\n        &.active {\n            background-color: var(--brand-purple);\n            color: #fff;\n            font-weight: 500;\n            font-style: italic;\n        }\n\n        &:hover ,&.active.project-filter-button {\n            background-color: #fff;\n            color: var(--brand-purple);\n            font-weight: 200;\n        }\n\n        &#show-all-projects {\n            background-color: #eee;\n            color: var(--dark-purple);\n            margin-bottom: 1rem;\n            align-self: flex-end;\n            padding: .2rem .4rem .2rem 1rem;\n\n            &:hover {\n                background-color: var(--darker-purple);\n                color: #fff;\n            }\n        }\n    }\n\n    #priority-button-group {\n        display: flex;\n        margin-bottom: 1rem;\n        align-self: flex-end;\n\n        .priority-button {\n            font-size: .8rem;\n            text-align: center;\n            box-sizing: border-box;\n\n            &:not(:last-child){\n                border-right: 2px solid var(--dark-purple);\n            }\n\n            &.active {\n                background-color: #000;\n                font-weight: 500;\n                font-style: normal;\n\n                &#priority-button-low {\n                    color: yellowgreen;\n                }\n\n                &#priority-button-medium {\n                    color: orange;\n                }\n\n                &#priority-button-high {\n                    color: orangered;\n                }\n\n                &#priority-button-all {\n                    &.active:hover{\n                        background-color: var(--brand-purple);\n                        color: #fff;\n                    }\n                }\n            }\n        }\n    }\n}\n\n#content {\n    background-color: #dad8d8;\n    align-self: stretch;\n    grid-area: content;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: center;\n\n    .no-content-alert {\n        flex-direction: column;\n        align-items: stretch;\n        background-color: #fff;\n\n        .top-text, .bottom-text {\n            padding: 1rem 3rem 1rem 1.5rem;\n        }\n\n        .top-text {\n            font-weight: 500;\n            background-color: var(--dark-purple);\n            color: #fff;\n        }\n\n        .bottom-text {\n            font-size: .8rem;\n            padding-top: .8rem;\n\n            button {\n                display: block;\n                margin-top: 1rem;\n                margin-bottom: -.2rem;\n                background-color: var(--dark-purple);\n                color: #fff;\n                border: none;\n                cursor: pointer;\n                font-size: 1rem;\n                padding: .4rem .7rem;\n                border-radius: 4px;\n\n                &:hover{\n                    background-color: var(--brand-purple);\n                }\n            }\n        }\n\n        \n    }\n\n    #only-filtered-alert {\n        display: none;\n    }\n\n    #no-todos-alert {\n        display: none;\n    }\n\n    &:has(.todo[project-filtered], .todo[time-filtered], .todo[priority-filtered]):not(:has(.todo:not([project-filtered]):not([time-filtered]):not([priority-filtered]))){\n\n        #only-filtered-alert{\n            display: flex;\n        }\n    }\n\n    &:not(:has(.todo)){\n        #no-todos-alert {\n            display: flex;\n        }\n    }\n\n}\n\n#toolbar {\n    position: sticky;\n    top: 0;\n    background-color: var(--darker-purple);\n    display: flex;\n    align-items: center;\n    padding: .5rem 1rem;\n    justify-content: center;\n    grid-area: \"toolbar\";\n\n    span {\n        color: #fff;\n        font-size: .8rem;\n        padding: .2rem .6rem;\n        background-color: var(--dark-purple);\n        cursor: default;\n    }\n\n    #sort-button-group {\n        display: flex;\n        align-items: center;\n        gap: .5rem;\n        margin-left: 3rem;\n\n        button:not(.active){\n            background-color: #111;\n\n            &:hover {\n                background-color: var(--brand-purple);\n                color: #fff;\n            }\n        }\n\n        button.active {\n            background-color: #eee;\n            color: var(--dark-purple);\n            font-weight: 600;\n        }\n    }\n\n    button {\n        border: none;\n        padding: .2rem 1rem;\n        color: #fff;\n        background-color: var(--brand-purple);\n        border-radius: 1.2rem;\n        cursor: pointer;\n\n        &:hover {\n            background-color: var(--dark-purple);\n        }\n\n        &:active {\n            background-color: #fff;\n            color: var(--brand-purple);\n        }\n    }\n\n    #new-todo-button {\n        margin-left: auto;\n        margin-right: 3rem;\n    }\n\n    #sort-order-toggle {\n        margin-left: 1rem;\n        font-size: .8rem;\n\n        &[data-currently=\"descending\"]{\n\n            &::after {\n                position: relative;\n                top: -4px;\n                content: '⌄';\n            }\n        }\n\n        &[data-currently=\"ascending\"]{\n\n            &::after {\n                position: relative;\n                top: 2px;\n                content: '⌃';\n            }\n        }\n    }\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todo.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todo.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.todo {
    background-color: lightblue;
    width: 80%;
    max-width: 800px;

    &.hidden, *.hidden {
        display: none;
    }

    .todo-checkbox:hover {
        background-color: #fff;
    }

    &[completed] {

        .todo-title, .todo-title-input {
        text-decoration: line-through;
        font-style: italic;
        }

        .todo-header {
            background-color: #251925;
        }

        .todo-footer {
            
        }

        .todo-checkbox {
            background-color: #eee;
        }

        .todo-checkbox:hover {
            background-color: transparent;
        }
    } 

    .todo-header, .todo-footer {
        color: #fff;
        padding: .5rem 1rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */

    }

    .todo-header {
        background-color: var(--dark-purple);
        flex-wrap: wrap;
        cursor: pointer;

        &:hover {
            background-color: #675067;
        }

        &:focus {
            background-color: #675067;
            outline: none;
        }

        .todo-title {
            font-size: 1.1rem;
            color: #fff;

            
        }

        .todo-checkbox:hover ~ .todo-title  {
            text-decoration: line-through;
        }

        &:not([completed]) .todo-checkbox:hover ~ .todo-title  {
            text-decoration: none;
        }


        .todo-due-date {
            color: #fff;

            &.past-date {
                opacity: .4;
            }
        }

        .todo-due-date, .todo-due-date-input {
            margin-left: auto;
        }

        .todo-checkbox {
            border: 2px solid #fff;
            border-radius: 50%;
            box-sizing: border-box;
            height: 1rem;
            width: auto;
            aspect-ratio: 1/1;


        }
    }

    .todo-footer {
        background-color: var(--brand-purple);

        .todo-priority {
            background-color: #222;
            padding: .2rem 1rem;
        }
        
        .todo-projects {
            color: #fff;
            opacity: .7;
        }

        .todo-delete-button {
            margin-left: auto;
            background-color: var(--darker-purple);
            padding: .2rem 1rem;
            color: #fff;
            border-radius: .2rem;

            &:hover {
                background-color: var(--danger-red);
            }

            svg {
                height: 14px;
                fill: #fff;
            }
        }

    }

    .todo-body {
        background-color: #fff;
        padding: 1rem;
        display: flex;
        flex-direction: column;

        .todo-description {
            color: #000;
            cursor: pointer;
            font-size: .9rem;
            margin-bottom: .5rem;
        }

        .todo-description-input {
            resize: none;
            width: 100%;
            overflow: auto;
            height: 3rem;
            font-family: inherit;
            padding: .4rem;
            border: 1px solid #eee;
            background-color: #eee;
            box-sizing: border-box;

            &:focus {
                background-color: #e3e3e3;
            }
        }

        p, ul {
            padding: 0px;
            margin: 0px;
        }

        .todo-checklist {

            .todo-check-item {
                padding: .5rem 1rem;
                border-bottom: 1px solid #ddd;
                display: flex;
                align-items: center;
                gap: .5rem;

                &:hover {
                    background-color: #67506711;
                }

                &[completed] {
                    .todo-check-item-title {
                        text-decoration: line-through;
                    }

                    .todo-check-item-button {
                        background-color: var(--brand-purple);
                    }

                    .todo-check-item-button:hover {
                        background-color: transparent;
                    }

                    .todo-check-item-button:hover ~ .todo-check-item-title  {
                        text-decoration: none;
                    }
                }

                &:not([completed]) {
                    .todo-check-item-button:hover ~ .todo-check-item-title  {
                        text-decoration: line-through;
                    }

                    .todo-check-item-button:hover {
                        background-color: var(--brand-purple);
                    }
                }


                .todo-check-item-button{
                    border: 2px solid var(--brand-purple);
                    border-radius: 50%;
                    box-sizing: border-box;
                    height: 1rem;
                    width: auto;
                    aspect-ratio: 1/1;

                }

                .todo-check-item-title-input {
                    background-color: #444;
                }
            }

            &:not(:empty){
                margin-top: .6rem;
            }

            

        }

        .todo-checklist-add {
            margin-top: .8rem;
            align-self: flex-start;
            padding: .4rem .8rem;
            background-color: var(--dark-purple);
            color: #fff;

            &:hover {
                background-color: var(--brand-purple);
            }
        }

        

        

        
    }

    &[closed] .todo-body {
        display: none;
    }

    .todo-footer {

        input {
            background-color: var(--dark-purple);
        }
    }

    input {
        border: none;
        color: #fff;
        background-color: var(--brand-purple);
        padding: .2rem .4rem;
        &::placeholder {
            color: #fff9;
        }
    }

    button {
        border: none;
        cursor: pointer;


    }

    &[project-filtered], &[time-filtered], &[priority-filtered]{
        display: none;
    }

    &[data-priority="low"] .todo-priority:before{
        content: 'low';
        color: greenyellow;
    }

    &[data-priority="medium"] .todo-priority:before{
        content: 'medium';
        color: orange;
    }

    &[data-priority="high"] .todo-priority:before{
        content: 'high';
        color: orangered;
    }
}`, "",{"version":3,"sources":["webpack://./src/todo.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,UAAU;IACV,gBAAgB;;IAEhB;QACI,aAAa;IACjB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;;QAEI;QACA,6BAA6B;QAC7B,kBAAkB;QAClB;;QAEA;YACI,yBAAyB;QAC7B;;QAEA;;QAEA;;QAEA;YACI,sBAAsB;QAC1B;;QAEA;YACI,6BAA6B;QACjC;IACJ;;IAEA;QACI,WAAW;QACX,mBAAmB;QACnB,aAAa;QACb,SAAS;QACT,mBAAmB;QACnB,yBAAyB,EAAE,WAAW;QACtC,qBAAqB,EAAE,oBAAoB;QAC3C,iBAAiB,EAAE,oBAAoB;;IAE3C;;IAEA;QACI,oCAAoC;QACpC,eAAe;QACf,eAAe;;QAEf;YACI,yBAAyB;QAC7B;;QAEA;YACI,yBAAyB;YACzB,aAAa;QACjB;;QAEA;YACI,iBAAiB;YACjB,WAAW;;;QAGf;;QAEA;YACI,6BAA6B;QACjC;;QAEA;YACI,qBAAqB;QACzB;;;QAGA;YACI,WAAW;;YAEX;gBACI,WAAW;YACf;QACJ;;QAEA;YACI,iBAAiB;QACrB;;QAEA;YACI,sBAAsB;YACtB,kBAAkB;YAClB,sBAAsB;YACtB,YAAY;YACZ,WAAW;YACX,iBAAiB;;;QAGrB;IACJ;;IAEA;QACI,qCAAqC;;QAErC;YACI,sBAAsB;YACtB,mBAAmB;QACvB;;QAEA;YACI,WAAW;YACX,WAAW;QACf;;QAEA;YACI,iBAAiB;YACjB,sCAAsC;YACtC,mBAAmB;YACnB,WAAW;YACX,oBAAoB;;YAEpB;gBACI,mCAAmC;YACvC;;YAEA;gBACI,YAAY;gBACZ,UAAU;YACd;QACJ;;IAEJ;;IAEA;QACI,sBAAsB;QACtB,aAAa;QACb,aAAa;QACb,sBAAsB;;QAEtB;YACI,WAAW;YACX,eAAe;YACf,gBAAgB;YAChB,oBAAoB;QACxB;;QAEA;YACI,YAAY;YACZ,WAAW;YACX,cAAc;YACd,YAAY;YACZ,oBAAoB;YACpB,cAAc;YACd,sBAAsB;YACtB,sBAAsB;YACtB,sBAAsB;;YAEtB;gBACI,yBAAyB;YAC7B;QACJ;;QAEA;YACI,YAAY;YACZ,WAAW;QACf;;QAEA;;YAEI;gBACI,mBAAmB;gBACnB,6BAA6B;gBAC7B,aAAa;gBACb,mBAAmB;gBACnB,UAAU;;gBAEV;oBACI,2BAA2B;gBAC/B;;gBAEA;oBACI;wBACI,6BAA6B;oBACjC;;oBAEA;wBACI,qCAAqC;oBACzC;;oBAEA;wBACI,6BAA6B;oBACjC;;oBAEA;wBACI,qBAAqB;oBACzB;gBACJ;;gBAEA;oBACI;wBACI,6BAA6B;oBACjC;;oBAEA;wBACI,qCAAqC;oBACzC;gBACJ;;;gBAGA;oBACI,qCAAqC;oBACrC,kBAAkB;oBAClB,sBAAsB;oBACtB,YAAY;oBACZ,WAAW;oBACX,iBAAiB;;gBAErB;;gBAEA;oBACI,sBAAsB;gBAC1B;YACJ;;YAEA;gBACI,iBAAiB;YACrB;;;;QAIJ;;QAEA;YACI,iBAAiB;YACjB,sBAAsB;YACtB,oBAAoB;YACpB,oCAAoC;YACpC,WAAW;;YAEX;gBACI,qCAAqC;YACzC;QACJ;;;;;;;IAOJ;;IAEA;QACI,aAAa;IACjB;;IAEA;;QAEI;YACI,oCAAoC;QACxC;IACJ;;IAEA;QACI,YAAY;QACZ,WAAW;QACX,qCAAqC;QACrC,oBAAoB;QACpB;YACI,YAAY;QAChB;IACJ;;IAEA;QACI,YAAY;QACZ,eAAe;;;IAGnB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,cAAc;QACd,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;QACjB,aAAa;IACjB;;IAEA;QACI,eAAe;QACf,gBAAgB;IACpB;AACJ","sourcesContent":[".todo {\n    background-color: lightblue;\n    width: 80%;\n    max-width: 800px;\n\n    &.hidden, *.hidden {\n        display: none;\n    }\n\n    .todo-checkbox:hover {\n        background-color: #fff;\n    }\n\n    &[completed] {\n\n        .todo-title, .todo-title-input {\n        text-decoration: line-through;\n        font-style: italic;\n        }\n\n        .todo-header {\n            background-color: #251925;\n        }\n\n        .todo-footer {\n            \n        }\n\n        .todo-checkbox {\n            background-color: #eee;\n        }\n\n        .todo-checkbox:hover {\n            background-color: transparent;\n        }\n    } \n\n    .todo-header, .todo-footer {\n        color: #fff;\n        padding: .5rem 1rem;\n        display: flex;\n        gap: 1rem;\n        align-items: center;\n        -webkit-user-select: none; /* Safari */\n        -ms-user-select: none; /* IE 10 and IE 11 */\n        user-select: none; /* Standard syntax */\n\n    }\n\n    .todo-header {\n        background-color: var(--dark-purple);\n        flex-wrap: wrap;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #675067;\n        }\n\n        &:focus {\n            background-color: #675067;\n            outline: none;\n        }\n\n        .todo-title {\n            font-size: 1.1rem;\n            color: #fff;\n\n            \n        }\n\n        .todo-checkbox:hover ~ .todo-title  {\n            text-decoration: line-through;\n        }\n\n        &:not([completed]) .todo-checkbox:hover ~ .todo-title  {\n            text-decoration: none;\n        }\n\n\n        .todo-due-date {\n            color: #fff;\n\n            &.past-date {\n                opacity: .4;\n            }\n        }\n\n        .todo-due-date, .todo-due-date-input {\n            margin-left: auto;\n        }\n\n        .todo-checkbox {\n            border: 2px solid #fff;\n            border-radius: 50%;\n            box-sizing: border-box;\n            height: 1rem;\n            width: auto;\n            aspect-ratio: 1/1;\n\n\n        }\n    }\n\n    .todo-footer {\n        background-color: var(--brand-purple);\n\n        .todo-priority {\n            background-color: #222;\n            padding: .2rem 1rem;\n        }\n        \n        .todo-projects {\n            color: #fff;\n            opacity: .7;\n        }\n\n        .todo-delete-button {\n            margin-left: auto;\n            background-color: var(--darker-purple);\n            padding: .2rem 1rem;\n            color: #fff;\n            border-radius: .2rem;\n\n            &:hover {\n                background-color: var(--danger-red);\n            }\n\n            svg {\n                height: 14px;\n                fill: #fff;\n            }\n        }\n\n    }\n\n    .todo-body {\n        background-color: #fff;\n        padding: 1rem;\n        display: flex;\n        flex-direction: column;\n\n        .todo-description {\n            color: #000;\n            cursor: pointer;\n            font-size: .9rem;\n            margin-bottom: .5rem;\n        }\n\n        .todo-description-input {\n            resize: none;\n            width: 100%;\n            overflow: auto;\n            height: 3rem;\n            font-family: inherit;\n            padding: .4rem;\n            border: 1px solid #eee;\n            background-color: #eee;\n            box-sizing: border-box;\n\n            &:focus {\n                background-color: #e3e3e3;\n            }\n        }\n\n        p, ul {\n            padding: 0px;\n            margin: 0px;\n        }\n\n        .todo-checklist {\n\n            .todo-check-item {\n                padding: .5rem 1rem;\n                border-bottom: 1px solid #ddd;\n                display: flex;\n                align-items: center;\n                gap: .5rem;\n\n                &:hover {\n                    background-color: #67506711;\n                }\n\n                &[completed] {\n                    .todo-check-item-title {\n                        text-decoration: line-through;\n                    }\n\n                    .todo-check-item-button {\n                        background-color: var(--brand-purple);\n                    }\n\n                    .todo-check-item-button:hover {\n                        background-color: transparent;\n                    }\n\n                    .todo-check-item-button:hover ~ .todo-check-item-title  {\n                        text-decoration: none;\n                    }\n                }\n\n                &:not([completed]) {\n                    .todo-check-item-button:hover ~ .todo-check-item-title  {\n                        text-decoration: line-through;\n                    }\n\n                    .todo-check-item-button:hover {\n                        background-color: var(--brand-purple);\n                    }\n                }\n\n\n                .todo-check-item-button{\n                    border: 2px solid var(--brand-purple);\n                    border-radius: 50%;\n                    box-sizing: border-box;\n                    height: 1rem;\n                    width: auto;\n                    aspect-ratio: 1/1;\n\n                }\n\n                .todo-check-item-title-input {\n                    background-color: #444;\n                }\n            }\n\n            &:not(:empty){\n                margin-top: .6rem;\n            }\n\n            \n\n        }\n\n        .todo-checklist-add {\n            margin-top: .8rem;\n            align-self: flex-start;\n            padding: .4rem .8rem;\n            background-color: var(--dark-purple);\n            color: #fff;\n\n            &:hover {\n                background-color: var(--brand-purple);\n            }\n        }\n\n        \n\n        \n\n        \n    }\n\n    &[closed] .todo-body {\n        display: none;\n    }\n\n    .todo-footer {\n\n        input {\n            background-color: var(--dark-purple);\n        }\n    }\n\n    input {\n        border: none;\n        color: #fff;\n        background-color: var(--brand-purple);\n        padding: .2rem .4rem;\n        &::placeholder {\n            color: #fff9;\n        }\n    }\n\n    button {\n        border: none;\n        cursor: pointer;\n\n\n    }\n\n    &[project-filtered], &[time-filtered], &[priority-filtered]{\n        display: none;\n    }\n\n    &[data-priority=\"low\"] .todo-priority:before{\n        content: 'low';\n        color: greenyellow;\n    }\n\n    &[data-priority=\"medium\"] .todo-priority:before{\n        content: 'medium';\n        color: orange;\n    }\n\n    &[data-priority=\"high\"] .todo-priority:before{\n        content: 'high';\n        color: orangered;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/quarterOfYear.js":
/*!****************************************************!*\
  !*** ./node_modules/dayjs/plugin/quarterOfYear.js ***!
  \****************************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,(function(){"use strict";var t="month",n="quarter";return function(e,i){var r=i.prototype;r.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var s=r.add;r.add=function(e,i){return e=Number(e),this.$utils().p(i)===n?this.add(3*e,t):s.bind(this)(e,i)};var u=r.startOf;r.startOf=function(e,i){var r=this.$utils(),s=!!r.u(i)||i;if(r.p(e)===n){var o=this.quarter()-1;return s?this.month(3*o).startOf(t).startOf("day"):this.month(3*o+2).endOf(t).endOf("day")}return u.bind(this)(e,i)}}}));

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/todo.css":
/*!**********************!*\
  !*** ./src/todo.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/svg/trash-can-outline.svg":
/*!***************************************!*\
  !*** ./src/svg/trash-can-outline.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z\"></path></svg>"

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ "./src/library.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.js */ "./src/user.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisMonth.mjs");






class DOM{

    constructor(){
        this.content = document.querySelector('#content');
        this.button = {
            filterTimeAll: document.querySelector('#filter-time-all'),
            filterTimeDay: document.querySelector('#filter-time-today'),
            filterTimeWeek: document.querySelector('#filter-time-week'),
            filterTimeMonth: document.querySelector('#filter-time-month')
        }
        this.applyTimeListeners();
        this.applyPriorityListeners();
        document.querySelector('#show-all-projects').addEventListener('click', () => {
            this.removeProjectFilter();
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectFilter(null);
        });
        document.querySelector('#remove-all-filters').addEventListener('click', () => {
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTimeFilter('all');
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectFilter(null);
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updatePriorityFilter(null);
            this.applyTimeFilter('all');
            this.applyProjectFilter(null);
            this.applyPriorityFilter(null);
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            document.querySelector('#priority-button-all').classList.add('active');
        })
        switch (_user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.priorityFilter){
            case (null):
                document.querySelector('#priority-button-all').classList.add('active');
                break;
            case ('low'):
                document.querySelector('#priority-button-low').classList.add('active');
                break;
            case ('medium'):
                document.querySelector('#priority-button-medium').classList.add('active');
                break;
            case ('high'):
                document.querySelector('#priority-button-high').classList.add('active');
                break;
        }
        //console.log(user.state)
        const sortOrderToggle = document.querySelector('#sort-order-toggle');
        sortOrderToggle.dataset.currently = _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.sortOrder;
        sortOrderToggle.addEventListener('click', (e) => {
            e.preventDefault();
            let newOrder = '';
            if (_user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.sortOrder === 'ascending'){
                newOrder = 'descending';
            }else{
                newOrder = 'ascending';
            }
            sortOrderToggle.dataset.currently = newOrder;
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateSortOrder(newOrder);
            _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].sortList(undefined, undefined);
            this.applySort();
        });
        this.applySortListeners();
        switch (_user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.sortAttribute){
            case 'date':
                document.querySelector('#sort-by-date').classList.add('active');
                break
            case 'priority':
                document.querySelector('#sort-by-priority').classList.add('active');
                break
            case 'title':
                document.querySelector('#sort-by-title').classList.add('active');
        }
        
    }

    drawAllTodos(){
        //console.log('drawing todos')
        //console.log(library.list);
        for (const todo of _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].list){
            //console.log(todo.card.element.reference)
            this.content.appendChild(todo.card.element.reference);
            const element = document.querySelector(`[data-id="${todo.id}"]`);
            todo.card.assignElement(element);
        }
    }

    applyTimeListeners(){
        this.button.filterTimeAll.addEventListener('click', () => this.applyTimeFilter('all'));
        this.button.filterTimeDay.addEventListener('click', () => this.applyTimeFilter('today'));
        this.button.filterTimeWeek.addEventListener('click', () => this.applyTimeFilter('week'));
        this.button.filterTimeMonth.addEventListener('click', () => this.applyTimeFilter('month'));
    }

    applyPriorityListeners(){
        const priorityAll = document.querySelector('#priority-button-all');
        priorityAll.addEventListener('click', () => {
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updatePriorityFilter(null);
            this.applyPriorityFilter();
            priorityAll.classList.add('active')
        });
        const priorityLow = document.querySelector('#priority-button-low');
        priorityLow.addEventListener('click', () => {
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updatePriorityFilter('low');
            this.applyPriorityFilter();
            priorityLow.classList.add('active')
        });
        const priorityMedium = document.querySelector('#priority-button-medium');
        priorityMedium.addEventListener('click', () => {
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updatePriorityFilter('medium');
            this.applyPriorityFilter();
            priorityMedium.classList.add('active')
        });
        const priorityHigh = document.querySelector('#priority-button-high');
        priorityHigh.addEventListener('click', () => {
            document.querySelectorAll('.priority-button').forEach((button) => button.classList.remove('active'));
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updatePriorityFilter('high');
            this.applyPriorityFilter();
            priorityHigh.classList.add('active')
        });
        
    }

    applySortListeners(){
        const sortDate = document.querySelector('#sort-by-date');
        const sortPriority = document.querySelector('#sort-by-priority');
        const sortTitle = document.querySelector('#sort-by-title');

        sortDate.addEventListener('click', (e) => {
            sortDate.classList.add('active');
            sortPriority.classList.remove('active');
            sortTitle.classList.remove('active');
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateSortAttribute('date');
            _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].sortList(undefined, undefined);
            this.applySort();
        })

        sortPriority.addEventListener('click', (e) => {
            sortPriority.classList.add('active');
            sortDate.classList.remove('active');
            sortTitle.classList.remove('active');
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateSortAttribute('priority');
            _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].sortList(undefined, undefined);
            this.applySort();
        })

        sortTitle.addEventListener('click', (e) => {
            sortTitle.classList.add('active');
            sortDate.classList.remove('active');
            sortPriority.classList.remove('active');
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateSortAttribute('title');
            _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].sortList(undefined, undefined);
            this.applySort();
        })
    }

    applyProjectFilter(filteredProject){
        if (filteredProject === undefined){
            filteredProject = _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.projectFilter;
        }
        if (filteredProject === null){
            this.removeProjectFilter();
            return;
        }
        _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.activeProject = filteredProject;
        const elements = Array.from(this.content.querySelectorAll('.todo'));
        for (const element of elements){
            let elementID = element.dataset.id;
            let todo = _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(elementID);
            if (!todo.projects.includes(filteredProject)){
                element.setAttribute('project-filtered', '')
            }else{
                element.removeAttribute('project-filtered');
            }
        }

        const projectButtons = document.querySelectorAll('.project-filter-button');
        projectButtons.forEach((button) => {
            if (button.dataset.project === filteredProject){
                button.classList.add('active');
            }else{
                button.classList.remove('active');
            }
        });

        const anyFiltered = document.querySelector('.todo:not([project-filtered])');
        if (anyFiltered === null){
            this.removeProjectFilter();
            _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectFilter(null);
        }

    }

    removeProjectFilter(){
        document.querySelectorAll('.todo').forEach((element) => element.removeAttribute('project-filtered'));
        document.querySelectorAll('.project-filter-button').forEach((button) => button.classList.remove('active'));
    }

    applyTimeFilter(period){
        //console.log('applying time filter')

        if (period == undefined){
            period = _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.applyTimeFilter;
        }

        if (period === null){
            period = 'all';
        }

        const elements = Array.from(this.content.querySelectorAll('.todo'));

        const buttons = [this.button.filterTimeAll, this.button.filterTimeDay, this.button.filterTimeWeek, this.button.filterTimeMonth];

        buttons.forEach((button) => {
            button.classList.remove('active');
        })

        //console.log('entering time filter switch')
        switch (period){
            case 'all':
                //console.log('Applying active class to: All');
                this.button.filterTimeAll.classList.add('active');
                break;
            case 'today':
                this.button.filterTimeDay.classList.add('active');
                break;
            case 'week':
                this.button.filterTimeWeek.classList.add('active');
                break;
            case 'month':
                this.button.filterTimeMonth.classList.add('active');
                break;
        }
        

        for (const element of elements){
            let elementID = element.dataset.id;
            let todo = _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(elementID);
            let timeDifference = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(todo.dueDate, new Date())
            //console.log(timeDifference)
            switch (period){
                case 'today':
                    if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isToday)(todo.dueDate)){
                        element.setAttribute('time-filtered', '');
                    }else{
                        element.removeAttribute('time-filtered');
                    }
                    break;
                case 'week':
                    if (((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isThisWeek)(todo.dueDate) && timeDifference >= 0) || (timeDifference < 7 && timeDifference >= 0)){
                        element.removeAttribute('time-filtered');
                    }else{
                        element.setAttribute('time-filtered', '');
                    }
                    break;
                case 'month':
                    if (((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isThisMonth)(todo.dueDate) && timeDifference >= 0)  || (timeDifference < 28 && timeDifference >= 0)){
                        element.removeAttribute('time-filtered');
                    }else{
                        element.setAttribute('time-filtered', '');
                    }
                    break;
                case 'all':
                    element.removeAttribute('time-filtered');
                    break;
            }
        }

        _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTimeFilter(period);
    }

    applyPriorityFilter(priority){
        if (priority === undefined){
            priority = _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.priorityFilter;
        }
        if (priority === null){
            document.querySelectorAll('.todo').forEach((element) => element.removeAttribute('priority-filtered'));
            return;
        }
        //console.log(`applying priority filter ${priority}`)
        const elements = Array.from(this.content.querySelectorAll('.todo'));
        for (const element of elements){
            let elementID = element.dataset.id;
            let todo = _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(elementID);
            //console.log(todo)
            //console.log(`todo priority ${todo.priority} | filter priority ${priority}`)
            if (todo.priority !== priority){
                element.setAttribute('priority-filtered', '')
                //console.log('filtering')
            }else{
                element.removeAttribute('priority-filtered');
                //console.log('unfiltering')
            }
        }
    }

    drawProjectFilterButtons(){
        //return
        let projectList = [];
        for (let i = 0; i < _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectReference.length; i++){
            projectList.push(_library_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectReference[i].name)
        }
        projectList.sort();
        
        let projectFiltersUL = document.querySelector('#project-filters');
        projectFiltersUL.textContent = '';

        const buildButton = (projectName) => {
            const element = document.createElement('li');
            const button = document.createElement('button');
            button.classList.add('project-filter-button');
            button.dataset.project = projectName;
            button.textContent = '#' + projectName;
            button.addEventListener('click', (e) => {
                this.applyProjectFilter(e.target.dataset.project);
                _user_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectFilter(e.target.dataset.project);
            });
            element.appendChild(button);
            return element
        }

        projectList.forEach((project) => {
            projectFiltersUL.appendChild(buildButton(project))
        })
    }

    applySort(){
        let list = _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].list;
        for (let i = list.length - 1; i >= 0; i--){
            this.content.prepend(list[i].card.element.reference)
        }
        
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DOM());

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ "./src/library.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.js */ "./src/user.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isTomorrow.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisYear.mjs");
/* harmony import */ var _svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/trash-can-outline.svg */ "./src/svg/trash-can-outline.svg");
/* harmony import */ var _svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__);









class Card{
    constructor(todo){
        this.id = todo.id;
        this.element = this.buildElement(todo);
        //console.log('constructed')
    }

    assignElement(element){
        //console.log('assigning element')
        this.element = {
            reference: element,
            header: element.querySelector('.todo-header'),
            title: element.querySelector('.todo-title'),
            titleInput: element.querySelector('.todo-title-input'),
            dueDate: element.querySelector('.todo-due-date'),
            dueDateInput: element.querySelector('.todo-due-date-input'),
            checkBox: element.querySelector('.todo-checkbox'),
            body: element.querySelector('.todo-body'),
            description: element.querySelector('.todo-description'),
            descriptionInput: element.querySelector('.todo-description-input'),
            checkList: element.querySelector('.todo-checklist'),
            checkListAdd: element.querySelector('.todo-checklist-add'),
            footer: element.querySelector('.todo-footer'),
            priority: element.querySelector('.todo-priority'),
            projects: element.querySelector('.todo-projects'),
            projectsInput: element.querySelector('.todo-projects-input'),
            deleteButton: element.querySelector('.todo-delete-button')
        }
        // console.log(this.element.description)
        // console.log(this.element.descriptionInput)
    }

    buildElement(todo){
        const element = document.createElement('div');
        element.dataset.id = todo.id;
        element.classList.add('todo');
        if (todo.closed){
            element.setAttribute('closed', "")
        }
        if (todo.completed){
            element.setAttribute('completed', '')
        }
        // Header
        const header = document.createElement('header');
        header.classList.add('todo-header');
        header.setAttribute('tabindex', 0)
        const title = document.createElement('button');
        title.classList.add('todo-title');
        title.textContent = todo.title;
        title.addEventListener('click', (e) => this.editTitle(e));
        const titleInput = document.createElement('input');
        titleInput.value = todo.title;
        titleInput.classList.add('todo-title-input');
        titleInput.setAttribute('placeholder', 'Enter title');
        titleInput.addEventListener('focusout', (e) => this.processNewTitle(e));
        titleInput.addEventListener('keypress', (e) => {
             let a = e.which || e.keyCode || e.charCode;
        
             if (a == 13) {
                 e.preventDefault();
                 this.processNewTitle(e);
             }  
        });
        if (!todo.title){
            title.classList.add('hidden');
        }else{
            titleInput.classList.add('hidden');
        }
        titleInput.addEventListener('click', (e) => e.stopPropagation());
        const dueDate = document.createElement('button');
        dueDate.classList.add('todo-due-date');
        let dueDateText = null;
        if (todo.dueDate){
            dueDateText = this.getHumanDate(todo.dueDate);
        }
        dueDate.textContent = dueDateText;
        dueDate.addEventListener('click', (e) => this.editDueDate(e))
        const dueDateInput = document.createElement('input');
        dueDateInput.classList.add('todo-due-date-input');
        dueDateInput.setAttribute('placeholder', 'due date');
        if (!todo.dueDate){
            dueDate.classList.add('hidden');
        }else{
            dueDateInput.classList.add('hidden');
        }
        dueDateInput.addEventListener('focusout', (e) => this.processNewDueDate(e));
        dueDateInput.addEventListener('keypress', (e) => {
             let a = e.which || e.keyCode || e.charCode;
            
             if (a == 13) {
                 e.preventDefault();
                 this.processNewDueDate(e);
             }  
        });
        dueDateInput.addEventListener('click', (e) => e.stopPropagation());
        const checkBox = document.createElement('button');
        checkBox.classList.add('todo-checkbox');
        checkBox.addEventListener('click', (e) => this.toggleCompleted(e));
        header.appendChild(checkBox);
        header.appendChild(title);
        header.appendChild(titleInput);
        header.appendChild(dueDate);
        header.appendChild(dueDateInput);  
        header.addEventListener('click', (e) => this.toggleCardClosed(e));
        header.addEventListener('keypress', (e) => {
            let a = e.which || e.keyCode || e.charCode;
            const activeElement = document.activeElement;
            if (!activeElement.classList.contains('todo-header')){
                return
            }
            if (a == 13 || a == 32) {
                e.preventDefault();
                this.toggleCardClosed(e);
            }  
       });
        //Body
        const body = document.createElement('div');
        body.classList.add('todo-body');
        const description = document.createElement('p');
        description.classList.add('todo-description');
        description.textContent = todo.description;
        const descriptionInput = document.createElement('textarea');
        descriptionInput.classList.add('todo-description-input');
        descriptionInput.setAttribute('placeholder', 'Enter description')
        if (todo.description){
            descriptionInput.classList.add('hidden');
            descriptionInput.value = todo.description;
        }else{
            description.classList.add('hidden');
        }
        description.addEventListener('click', (e) => this.editDescription(e));
        descriptionInput.addEventListener('focusout', (e) => this.processNewDescription(e));
        descriptionInput.addEventListener('keypress', (e) => {
            let a = e.which || e.keyCode || e.charCode;
       
            if (a == 13) {
                e.preventDefault();
                this.processNewDescription(e);
            }  
       });
        // Checklist
        const checkList = document.createElement('div');
        checkList.classList.add('todo-checklist');
        for (const item of todo.checklist){
            this.drawCheckItem(item, false, checkList);
        }
        const checkListAddButton = document.createElement('button');
        checkListAddButton.classList.add('todo-checklist-add');
        if (todo.checklist.length < 1){
            checkListAddButton.textContent = '+ add checklist';
        }else{
            checkListAddButton.textContent = '+ new item'
        }
        checkListAddButton.addEventListener('click', (e) => {
            this.createNewCheckItem();
        })
        body.appendChild(description);
        body.appendChild(descriptionInput);
        body.appendChild(checkList);
        body.appendChild(checkListAddButton);
        // Footer
        const footer = document.createElement('div');
        footer.classList.add('todo-footer');
        const priority = document.createElement('button');
        priority.classList.add('todo-priority');
        priority.addEventListener('click', (e) => this.incrementPriority(e));
        element.dataset.priority = todo.priority;
        const projects = document.createElement('button');
        projects.classList.add('todo-projects');
        projects.textContent = this.getProjectHashtags();
        projects.addEventListener('click', (e) => this.editProjects(e));
        const projectsInput = document.createElement('input');
        projectsInput.classList.add('todo-projects-input');
        if (todo.projects.length > 0){
            projectsInput.classList.add('hidden');
        }else{
            projectsInput.setAttribute('placeholder', 'Enter projects');
            projects.classList.add('hidden');
        }
        projectsInput.addEventListener('focusout', (e) => {
            this.processNewProjects(e);
        });
        projectsInput.addEventListener('keypress', (e) => {
            let a = e.which || e.keyCode || e.charCode;
       
            if (a == 13) {
                e.preventDefault();
                this.processNewProjects(e);
            }  
       });
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('todo-delete-button');
        //deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => this.deleteSelf());
        deleteButton.innerHTML = (_svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3___default())
        // const trashIcon = document.createElement('img');
        // trashIcon.classList.add('todo-trash-icon');
        // trashIcon.setAttribute('src', trashCanIcon);
        // trashIcon.setAttribute('height', '14');
        // trashIcon.setAttribute('fill', 'green')
        // deleteButton.append(trashIcon)
        footer.appendChild(priority);
        footer.appendChild(projects);
        footer.appendChild(projectsInput);
        footer.appendChild(deleteButton);
        // Put it all together
        element.appendChild(header);
        element.appendChild(body);
        element.appendChild(footer);

        return element
    }

    updateElement(key){
        const todo = _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id);
        switch (key){
            case 'completed':
                if (todo.completed){
                    this.element.reference.setAttribute('completed', '')
                }else{
                    this.element.reference.removeAttribute('completed')
                }
            case 'title':
                this.element.title.textContent = todo.title;
                break
            case 'due-date':
                let pastDate;
                this.element.dueDate.textContent = this.getHumanDate(todo.dueDate);
                if (pastDate){
                    this.element.dueDate.classList.add('past-date')
                }

                break
            case 'description':
                this.element.description.textContent = todo.description;
            case 'projects':
                const hashtags = this.getProjectHashtags();
                this.element.projects.textContent = hashtags;
                this.element.projectsInput.value = hashtags;
        }
        //console.log(JSON.parse(localStorage.getItem('todos')))


    }

    getHumanDate(date){
        //console.log(date)
        const timeDifference = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInDays)(date, new Date())
        //console.log(timeDifference)
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isToday)(date)){
            return 'Today'
        }else if (date < new Date ()){
            // return second arg if past date
            return((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(date, 'LLLL do y'))
        }else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isTomorrow)(date)){
            return 'Tomorrow'
         }else if (timeDifference < 7 ){
             return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(date, 'EEEE')
        // }else if (isWithin7Days()){
        //     return formatDate(date, 'EEEE')
        }else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.isThisYear)(date)){
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(date, 'LLLL do')
        }else{
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(date, 'LLLL do y')
        }
    }

    getProjectHashtags(){
        const projectList = _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id).projects;
        let string = '';
        for (let i = 0; i < projectList.length; i++){
            string += `#${projectList[i]} `;
        }
        string.trim()
        return string;
    }

    toggleCardClosed(e){
        e.stopPropagation();
        if (this.element.reference.hasAttribute('closed')){
            this.element.reference.removeAttribute('closed');
            _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(this.id, 'closed', false);
        }else{
            this.element.reference.setAttribute('closed', '')
            _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(this.id, 'closed', true);
        }    
    }

    toggleCompleted(e){
        e.stopPropagation();
        const todo = _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id);
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(this.id, 'completed', !todo.completed);
        this.updateElement('completed')
    }

    editTitle(e){
        e.stopPropagation();
        e.preventDefault();
        this.element.title.classList.add('hidden');
        this.element.titleInput.classList.remove('hidden');
        this.element.titleInput.focus();
        const valueLength = this.element.titleInput.value.length;
        this.element.titleInput.setSelectionRange(valueLength, valueLength);

    }

    processNewTitle(e){
        e.stopPropagation();
        const value = this.element.titleInput.value;
        if (value === ''){
            return
        }
        const todo = _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id);
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(this.id, 'title', value);
        if (todo.title){
            this.element.title.classList.remove('hidden');
            this.element.titleInput.classList.add('hidden');
        }
        this.updateElement('title');
    }

    editDueDate(e){
        e.stopPropagation();
        e.preventDefault();
        this.element.dueDate.classList.add('hidden');
        this.element.dueDateInput.classList.remove('hidden');
        this.element.dueDateInput.focus();
    }


    processNewDueDate(e){
        e.stopPropagation();
        const value = this.element.dueDateInput.value;
        const todo = _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id);
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(this.id, 'dueDate', value);
        if (todo.dueDate){
            this.element.dueDate.classList.remove('hidden');
            this.element.dueDateInput.classList.add('hidden');
            this.updateElement('due-date');
        }else{
            this.element.dueDateInput.value = null;
        }
    }

    editDescription(e){
        e.stopPropagation();
        const value = _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id).description;
        //this.element.descriptionInput.value = value;
        this.element.description.classList.add('hidden');
        this.element.descriptionInput.classList.remove('hidden');
        const valueLength = this.element.descriptionInput.value.length;
        this.element.descriptionInput.focus();
        this.element.descriptionInput.setSelectionRange(valueLength, valueLength)
    }

    processNewDescription(e){
        e.stopPropagation();
        const value = this.element.descriptionInput.value;
        if (value === null || value === ''){
            return
        }
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(this.id, 'description', value);
        this.updateElement('description');
        this.element.descriptionInput.classList.add('hidden');
        this.element.description.classList.remove('hidden');
    }

    incrementPriority(e){
        const todo = _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id);
        todo.incrementPriority();
        this.element.reference.dataset.priority = todo.priority;
    }

    editProjects(e){
        this.element.projectsInput.value = this.getProjectHashtags()
        this.element.projects.classList.add('hidden');
        this.element.projectsInput.classList.remove('hidden');
        this.element.projectsInput.focus();
        const valueLength = this.element.projectsInput.value.length;
        this.element.projectsInput.setSelectionRange(valueLength, valueLength);
    }

    processNewProjects(e){
        const newList = this.parseProjectsInput(this.element.projectsInput.value);
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(this.id, 'projects', newList);
        this.updateElement('projects');
        if (_user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.projectFilter !== null){
            _DOM_js__WEBPACK_IMPORTED_MODULE_2__["default"].applyProjectFilter(_user_js__WEBPACK_IMPORTED_MODULE_1__["default"].state.projectFilter);
        }
        if (newList.length === 0){
            return
        }
        this.element.projects.classList.remove('hidden');
        this.element.projectsInput.classList.add('hidden');

        

    }

    deleteSelf(){
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(this.id);
    }

    parseProjectsInput(input){
        function isAlNum(char) {
            return /^[a-zA-Z0-9-]+$/.test(char);
        };
        const projectList = [];
        let word = '';
        for (let i = 0; i < input.length; i++){
            if (isAlNum(input[i])){
                word += input[i];
            }else{
                if (word !== ''){
                    if (!projectList.includes(word)){
                        projectList.push(word);
                    }
                    word = '';
                }
            }
        }
        if (word !== ''){
            if (!projectList.includes(word)){
                projectList.push(word);
            }
        }
        return projectList;
    }

    createNewCheckItem(){
        const checkItem = {
            title: null,
            completed: false,
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])()
        };
        this.element.checkListAdd.textContent = '+ new item'
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id).checklist.push(checkItem);
        this.drawCheckItem(checkItem, true, this.element.checkList);
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateListInStorage();
    }

    drawCheckItem(item, brandNew = false, element = false){
        //console.log('drawing check item');
        //console.log({item})
        const checkItem = document.createElement('div');
        checkItem.dataset.id = item.id;
        checkItem.classList.add('todo-check-item');
        if (item.completed){
            checkItem.setAttribute('completed', '');
        }
        const checkItemTitle = document.createElement('button');
        checkItemTitle.classList.add('todo-check-item-title');
        const checkItemTitleInput = document.createElement('input');
        checkItemTitleInput.classList.add('todo-check-item-title-input');
        checkItemTitleInput.setAttribute('placeholder', 'Enter checklist item');
        if (item.title){
            checkItemTitle.textContent = item.title;
            checkItemTitleInput.classList.add('hidden');
            checkItemTitleInput.value = item.title;
        }else{
            checkItemTitle.classList.add('hidden');
        }
        checkItemTitle.addEventListener('click', (e) => {
            checkItemTitle.classList.add('hidden');
            checkItemTitleInput.classList.remove('hidden');
            checkItemTitleInput.focus();
        })
        checkItemTitleInput.addEventListener('focusout', (e) => this.processNewCheckItemTitle(item.id));
        checkItemTitleInput.addEventListener('keypress', (e) => {
             let a = e.which || e.keyCode || e.charCode;
        
             if (a == 13) {
                 e.preventDefault();
                 this.processNewCheckItemTitle(item.id);
             }  
        });
        const checkItemButton = document.createElement('button');
        checkItemButton.classList.add('todo-check-item-button');
        checkItemButton.addEventListener('click', (e) => this.toggleCheckItemComplete(item.id, checkItem))
        checkItem.appendChild(checkItemButton);
        checkItem.appendChild(checkItemTitle);
        checkItem.appendChild(checkItemTitleInput);
        element.appendChild(checkItem);
        if (brandNew){
            checkItemTitleInput.focus();
        }
    }
            

    processNewCheckItemTitle(itemID){
        //console.log(this);
        const todo = _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id);
        const itemObject = todo.getCheckItemByID(itemID);
        const itemElement = this.element.checkList.querySelector(`[data-id="${itemID}"]`);
        const titleInput = itemElement.querySelector('.todo-check-item-title-input');
        const value = titleInput.value.trim();
        if (value === ''){
            todo.removeCheckItemByID(itemID);
            try{
                itemElement.remove();
            }
            catch (DOMException){

            }
            if (todo.checklist.length < 1){
                this.element.checkListAdd.textContent = '+ add checklist';
            }
            _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateListInStorage();
            return
        }
        const titleDisplay = itemElement.querySelector('.todo-check-item-title')
        titleDisplay.textContent = value;
        titleInput.classList.add('hidden');
        titleInput.value = value;
        titleDisplay.classList.remove('hidden');
        itemObject.title = value;
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateListInStorage();
    }

    toggleCheckItemComplete(itemID, element){
        const todo = _library__WEBPACK_IMPORTED_MODULE_0__["default"].getTodoByID(this.id);
        const item = todo.getCheckItemByID(itemID);
        if (!item.completed){
            item.completed = true;
            element.setAttribute('completed', '')
        }else{
            item.completed = false;
            element.removeAttribute('completed')
        }
        _library__WEBPACK_IMPORTED_MODULE_0__["default"].updateListInStorage();
    }
}



/***/ }),

/***/ "./src/demo.js":
/*!*********************!*\
  !*** ./src/demo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/add.mjs");
/* harmony import */ var _demo_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-data.json */ "./src/demo-data.json");
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.js */ "./src/library.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.js */ "./src/user.js");






class Demo{
    constructor(){
        this.dismissed = localStorage.getItem('demo_dismissed');
        this.accepted = localStorage.getItem('demo_accepted');
        //console.log(this.dismissed);
        // turning off whie i work
        //this.dismissed = 'false';
        const loadDemoButton = document.querySelector('#load-demo-button');
        loadDemoButton.addEventListener('click', (e) => this.loadDemo());
        const dismissDemoButton = document.querySelector('#dismiss-demo-button');
        dismissDemoButton.addEventListener('click', (e) => {
            document.querySelector('#demo-prompt').remove();
            localStorage.setItem('demo_dismissed', 'true');
        })
        if (this.dismissed === 'true'){
            //console.log('demo previously dismissed');
            document.querySelector('#demo-prompt').remove();
            //console.log('deleted demo pompt element')
            return
        }else if (this.accepted === 'true'){
            document.querySelector('#demo-prompt').remove();
            return
        }
        
    }

    loadDemo(){
        _library_js__WEBPACK_IMPORTED_MODULE_1__["default"].list = _demo_data_json__WEBPACK_IMPORTED_MODULE_0__;
        //
        const today = new Date();
        const firstTodoDate = new Date(_library_js__WEBPACK_IMPORTED_MODULE_1__["default"].list[1]._dueDate);
        //console.log(firstTodoDate)
        let daysDifference = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInDays)(today, firstTodoDate);
        //daysDifference++;
        //console.log(`days difference ${daysDifference}`)
        if (daysDifference > 0){
            // account for time travellers
            for (let todo of _library_js__WEBPACK_IMPORTED_MODULE_1__["default"].list){
                todo._dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.add)(todo._dueDate, {days: daysDifference});
                //console.log(`adding ${daysDifference} to todo`)
                //console.log(todo._dueDate)
            }
        }
        localStorage.setItem('demo_accepted', 'true')
        _library_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateListInStorage();
        //console.log(library.list)
        _user_js__WEBPACK_IMPORTED_MODULE_2__["default"].updatePriorityFilter(null);
        _user_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateProjectFilter(null);
        _user_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateTimeFilter('week');
        _user_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateSortAttribute('time');
        _user_js__WEBPACK_IMPORTED_MODULE_2__["default"].updateSortOrder('ascending');
        //return
        location.reload();

    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Demo());

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ "./src/card.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.js */ "./src/user.js");






class Library { 
    constructor(){
        this.list = [];
        this.projectReference = [];
        //console.log(this.list)
        document.querySelector('#new-todo-button').addEventListener('click', () => this.buildTodo(undefined, true));
        
    }

    initialise(){
        //console.log('initialising library')
        const storage = this.retrieveTodosFromStorage();
        //console.log(storage)
        this.buildAllTodos(storage);
        this.buildProjectReference();
        //this.buildProjectReference();
    }

    retrieveTodosFromStorage(){
        const storage = localStorage.getItem('todos');
        if (storage === null){
            //console.log('no todos found in storage')
            return [];
        }else{
            //console.log('found todos in storage')
            return JSON.parse(storage);
        }
        
        //console.log('parsing storage')
        //console.log(todoStorage);
    }

    updateListInStorage(){
        //console.log('Updating storage')
        //console.log(this.list);
        const stringed = JSON.stringify(this.list);
        localStorage.setItem('todos', stringed)
    }

    buildTodo(object = {}, brandNew = false){
        //console.log('building todo')
        const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](object.id, object._title, object.description, object.dueDate, object.createdDate, object.completed, object.priority, object.checklist, object.projects, object.closed, object._dueDate);
        if (brandNew && _user_js__WEBPACK_IMPORTED_MODULE_3__["default"].state.projectFilter !== null){
            todo.projects = [_user_js__WEBPACK_IMPORTED_MODULE_3__["default"].state.projectFilter];
        }
        this.list.push(todo);
        todo.buildCard()
        todo.card.assignElement(todo.card.element);
        if (brandNew){
            content.prepend(todo.card.element.reference);
            todo.card.element.titleInput.focus();
            this.updateListInStorage();
        }else{
            //content.appendChild(todo.card.element.reference)
        }
    }

    buildAllTodos(storage){
        //console.log(`building ${storage.length} todo(s)`)
        for (const todo of storage){
            this.buildTodo(todo)
        }
    }

    updateTodo(id, key, value){
        const todo = this.getTodoByID(id);
        if (key === 'projects'){
            this.buildProjectReference();
        }
        todo[key] = value;
        this.updateListInStorage();
    }

    drawAllTodos(){
        //console.log('drawing todos');
        //console.log(this.list)
        
    }

    getTodoByID(id){
        //console.log(`Finding todo with id ${id}`)
        for (const todo of this.list){
            if (id === todo.id){
                return todo
            }
        }
        throw new Error(`Couldn't find todo with id ${id}`)
    }

    getCardByID(id){
        //console.log(`getting card by id ${id}`);
        const card = document.querySelector(`[data-id="${id}"]`);
        return card;
    }

    getIndexByID(id){
        return this.list.findIndex(todo => {
            return todo.id === id
        })
    }

    deleteTodo(id){
        const index = this.getIndexByID(id);
        this.list.splice(index, 1);
        this.getCardByID(id).remove();
        this.updateListInStorage();
        this.buildProjectReference();
        _DOM_js__WEBPACK_IMPORTED_MODULE_2__["default"].applyProjectFilter();
    }

    buildProjectReference(){
        this.projectReference = [];
        for (const todo of this.list){
            let todoProjects = todo.projects;
            for (const project of todoProjects){
                let existingProject = this.projectExists(project);
                if (!existingProject){
                    this.projectReference.push({
                        "name": project,
                        idList: [
                            todo.id
                        ]
                    })
                }else{
                    existingProject.idList.push(todo.id)
                }
            }
        }

        _DOM_js__WEBPACK_IMPORTED_MODULE_2__["default"].drawProjectFilterButtons();


    }

    projectExists(searchTerm){
        for (const project of this.projectReference){
            if (project.name === searchTerm){
                return project
            }
        }
        return false
    }

    sortList(attribute, order){

        if (attribute === undefined){
            attribute = _user_js__WEBPACK_IMPORTED_MODULE_3__["default"].state.sortAttribute;
        }

        if (order === undefined){
            order = _user_js__WEBPACK_IMPORTED_MODULE_3__["default"].state.sortOrder;
        }

        //console.log(`sorting by ${attribute} ${order}`)

        //console.log(this.list)

        const sortByDueDate = () => {
            this.list.sort((a, b) => {
                const dateA = a.dueDate;
                const dateB = b.dueDate;

                // if (isSameDay(dateA, dateB)){
                //     return 0
                // }

                if (dateA === null && dateB === null){
                    return 0
                }

                if (dateA < dateB){
                    return -1;
                }else if( dateA > dateB){
                    return 1;
                }else if(dateA instanceof Date && dateB === null){
                    return 1
                }else if(dateB instanceof Date && dateA === null){
                    return -1
                }else{
                    return 0
                }
            })
        }

        const sortByPriority = () => {
            this.list.sort((a, b) => {
                let priorityA = a.priority;
                let priorityB = b.priority;

                function convertToNumber(priority){
                    switch (priority){
                        case 'low':
                            return 1;
                        case 'medium':
                            return 2;
                        case 'high':
                            return 3;
                    }
                }
                priorityA = convertToNumber(priorityA);
                priorityB = convertToNumber(priorityB);

                if (priorityA < priorityB){
                    return 1;
                }else if (priorityA > priorityB){
                    return -1
                }else{
                    return 0
                }
            })
        }

        const sortByTitle = () => {
            this.list.sort((a, b) => {
                if (typeof(a.title) === 'string' && b.title === null){
                    return -1
                }else if (typeof(b.title) === 'string' && a.title === null){
                    return 1
                }else if (a.title === null && b.title === null){
                    return 0
                }
                return a.title.localeCompare(b.title);
            })
        }

        if (attribute === 'date' && order === 'ascending'){
            sortByPriority();
            sortByDueDate();
        }else if (attribute === 'date' && order === 'descending'){
            sortByPriority();
            sortByDueDate();
            this.list.reverse();
        }else if (attribute === 'priority' && order === 'ascending'){
            sortByDueDate();
            sortByPriority();
            this.list.reverse();
        }else if (attribute === 'priority' && order === 'descending'){
            sortByDueDate();
            sortByPriority();
        }else if (attribute === 'title' && order === 'ascending'){
            sortByPriority();
            sortByDueDate();
            sortByTitle();
        }else if (attribute === 'title' && order === 'descending'){
            sortByPriority();
            sortByDueDate();
            sortByTitle();
            this.list.reverse();
        }

        this.updateListInStorage();

        //console.log(this.list)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Library());

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ "./src/library.js");
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.js */ "./src/card.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var chrono_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chrono-node */ "./node_modules/chrono-node/dist/esm/index.js");









class Todo {
    constructor(id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(), title = null, description = null, dueDate = null, createdDate = new Date(), completed = false, priority = 'low', checklist = [], projects = [], closed = true, _dueDate){
        this.id = id;
        this.title = title;
        if (_dueDate){
            dueDate = _dueDate;
        }
        this.description = description;
        this.dueDate = dueDate;
        this.createdDate = createdDate;
        this.completed = completed;
        this.priority = priority;
        this.checklist = checklist;
        this.projects = projects;
        this.closed = closed;
        //this.buildCard()
    }

    set dueDate(input){
        if (input === null || typeof(input) === Date){
            this._dueDate = input;
            return    
        }

        let attempt = Todo._parseDueDate(input);
        if (attempt){
            this._dueDate = attempt;
            _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateListInStorage();
            return
        }
        attempt = Todo._parseDueDate(`in ${input}`);
        if (attempt){
            this._dueDate = attempt;
            _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateListInStorage();
            return
        }        
    }

    get dueDate(){
        return this._dueDate;
    }

    set title(input){
        if (typeof(input) === 'string'){
            input = input.trim();
        }
        this._title = input;
    }

    get title(){
        return this._title;
    }

    incrementPriority(){
        if (this.priority === 'low'){
            this.priority = 'medium';
        }else if (this.priority === 'medium'){
            this.priority = 'high';
        }else if (this.priority === 'high'){
            this.priority = 'low';
        }
        _library_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateListInStorage();
    }

    static _parseDueDate(input){
        const today = new Date()
        let parseAttempt = chrono_node__WEBPACK_IMPORTED_MODULE_3__.parseDate(input, today,{forwardDate: true});
        //console.log(parseAttempt)
        if (parseAttempt){
            //console.log(`date ${input} was valid`)
            return parseAttempt
        }
        return false
    }

    buildCard(){
         this.card = new _card_js__WEBPACK_IMPORTED_MODULE_1__["default"](this)
    }

    getCheckItemByID(id){
        for (let item of this.checklist){
            if (item.id === id){
                return item
            }
        }
    }

    removeCheckItemByID(id){
        for (let i = 0; i < this.checklist.length; i++){
            if (this.checklist[i].id === id){
                this.checklist.splice(i, 1);
            }
        }
    }
}

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class User{
    constructor(){
        this.state = {
            projectFilter: null,
            timeFilter: 'all',
            priorityFilter: null,
            sortAttribute: 'date',
            sortOrder: 'ascending'
        }
        let storage = this.retrieveUserFromStorage();
        if (storage){
            this.state = storage;
        }
    }

    retrieveUserFromStorage(){
        const storage = localStorage.getItem('user');
        if (storage === null){
            //console.log(`no user in storage`)
            return false;
        }
        return JSON.parse(storage);
    }

    updateUserInStorage(){
        //console.log('Updating user storage')
        const stringed = JSON.stringify(this.state);
        localStorage.setItem('user', stringed)
    }

    updateTimeFilter(period){
        this.state.timeFilter = period;
        this.updateUserInStorage();
    }

    updateProjectFilter(project){
        this.state.projectFilter = project;
        this.updateUserInStorage();
    }

    updatePriorityFilter(priority){
        this.state.priorityFilter = priority;
        this.updateUserInStorage();
    }

    updateSortAttribute(attribute){
        this.state.sortAttribute = attribute;
        this.updateUserInStorage();
    }
    
    updateSortOrder(order){
        this.state.sortOrder = order;
        this.updateUserInStorage();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new User());

/***/ }),

/***/ "./src/font/Inter.ttf":
/*!****************************!*\
  !*** ./src/font/Inter.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "853e01975d2783d9fa29.ttf";

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/calculation/mergingCalculation.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/calculation/mergingCalculation.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeDateTimeComponent: () => (/* binding */ mergeDateTimeComponent),
/* harmony export */   mergeDateTimeResult: () => (/* binding */ mergeDateTimeResult)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");


function mergeDateTimeResult(dateResult, timeResult) {
    const result = dateResult.clone();
    const beginDate = dateResult.start;
    const beginTime = timeResult.start;
    result.start = mergeDateTimeComponent(beginDate, beginTime);
    if (dateResult.end != null || timeResult.end != null) {
        const endDate = dateResult.end == null ? dateResult.start : dateResult.end;
        const endTime = timeResult.end == null ? timeResult.start : timeResult.end;
        const endDateTime = mergeDateTimeComponent(endDate, endTime);
        if (dateResult.end == null && endDateTime.date().getTime() < result.start.date().getTime()) {
            const nextDayJs = endDateTime.dayjs().add(1, "day");
            if (endDateTime.isCertain("day")) {
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_0__.assignSimilarDate)(endDateTime, nextDayJs);
            }
            else {
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_0__.implySimilarDate)(endDateTime, nextDayJs);
            }
        }
        result.end = endDateTime;
    }
    return result;
}
function mergeDateTimeComponent(dateComponent, timeComponent) {
    const dateTimeComponent = dateComponent.clone();
    if (timeComponent.isCertain("hour")) {
        dateTimeComponent.assign("hour", timeComponent.get("hour"));
        dateTimeComponent.assign("minute", timeComponent.get("minute"));
        if (timeComponent.isCertain("second")) {
            dateTimeComponent.assign("second", timeComponent.get("second"));
            if (timeComponent.isCertain("millisecond")) {
                dateTimeComponent.assign("millisecond", timeComponent.get("millisecond"));
            }
            else {
                dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
            }
        }
        else {
            dateTimeComponent.imply("second", timeComponent.get("second"));
            dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
        }
    }
    else {
        dateTimeComponent.imply("hour", timeComponent.get("hour"));
        dateTimeComponent.imply("minute", timeComponent.get("minute"));
        dateTimeComponent.imply("second", timeComponent.get("second"));
        dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
    }
    if (timeComponent.isCertain("timezoneOffset")) {
        dateTimeComponent.assign("timezoneOffset", timeComponent.get("timezoneOffset"));
    }
    if (timeComponent.isCertain("meridiem")) {
        dateTimeComponent.assign("meridiem", timeComponent.get("meridiem"));
    }
    else if (timeComponent.get("meridiem") != null && dateTimeComponent.get("meridiem") == null) {
        dateTimeComponent.imply("meridiem", timeComponent.get("meridiem"));
    }
    if (dateTimeComponent.get("meridiem") == _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM && dateTimeComponent.get("hour") < 12) {
        if (timeComponent.isCertain("hour")) {
            dateTimeComponent.assign("hour", dateTimeComponent.get("hour") + 12);
        }
        else {
            dateTimeComponent.imply("hour", dateTimeComponent.get("hour") + 12);
        }
    }
    dateTimeComponent.addTags(dateComponent.tags());
    dateTimeComponent.addTags(timeComponent.tags());
    return dateTimeComponent;
}
//# sourceMappingURL=mergingCalculation.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/calculation/years.js":
/*!****************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/calculation/years.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMostLikelyADYear: () => (/* binding */ findMostLikelyADYear),
/* harmony export */   findYearClosestToRef: () => (/* binding */ findYearClosestToRef)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

function findMostLikelyADYear(yearNumber) {
    if (yearNumber < 100) {
        if (yearNumber > 50) {
            yearNumber = yearNumber + 1900;
        }
        else {
            yearNumber = yearNumber + 2000;
        }
    }
    return yearNumber;
}
function findYearClosestToRef(refDate, day, month) {
    const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(refDate);
    let dateMoment = refMoment;
    dateMoment = dateMoment.month(month - 1);
    dateMoment = dateMoment.date(day);
    dateMoment = dateMoment.year(refMoment.year());
    const nextYear = dateMoment.add(1, "y");
    const lastYear = dateMoment.add(-1, "y");
    if (Math.abs(nextYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
        dateMoment = nextYear;
    }
    else if (Math.abs(lastYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
        dateMoment = lastYear;
    }
    return dateMoment.year();
}
//# sourceMappingURL=years.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/chrono.js":
/*!*****************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/chrono.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* binding */ Chrono),
/* harmony export */   ParsingContext: () => (/* binding */ ParsingContext)
/* harmony export */ });
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _locales_en_configuration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locales/en/configuration.js */ "./node_modules/chrono-node/dist/esm/locales/en/configuration.js");


class Chrono {
    constructor(configuration) {
        this.defaultConfig = new _locales_en_configuration_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        configuration = configuration || this.defaultConfig.createCasualConfiguration();
        this.parsers = [...configuration.parsers];
        this.refiners = [...configuration.refiners];
    }
    clone() {
        return new Chrono({
            parsers: [...this.parsers],
            refiners: [...this.refiners],
        });
    }
    parseDate(text, referenceDate, option) {
        const results = this.parse(text, referenceDate, option);
        return results.length > 0 ? results[0].start.date() : null;
    }
    parse(text, referenceDate, option) {
        const context = new ParsingContext(text, referenceDate, option);
        let results = [];
        this.parsers.forEach((parser) => {
            const parsedResults = Chrono.executeParser(context, parser);
            results = results.concat(parsedResults);
        });
        results.sort((a, b) => {
            return a.index - b.index;
        });
        this.refiners.forEach(function (refiner) {
            results = refiner.refine(context, results);
        });
        return results;
    }
    static executeParser(context, parser) {
        const results = [];
        const pattern = parser.pattern(context);
        const originalText = context.text;
        let remainingText = context.text;
        let match = pattern.exec(remainingText);
        while (match) {
            const index = match.index + originalText.length - remainingText.length;
            match.index = index;
            const result = parser.extract(context, match);
            if (!result) {
                remainingText = originalText.substring(match.index + 1);
                match = pattern.exec(remainingText);
                continue;
            }
            let parsedResult = null;
            if (result instanceof _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult) {
                parsedResult = result;
            }
            else if (result instanceof _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents) {
                parsedResult = context.createParsingResult(match.index, match[0]);
                parsedResult.start = result;
            }
            else {
                parsedResult = context.createParsingResult(match.index, match[0], result);
            }
            const parsedIndex = parsedResult.index;
            const parsedText = parsedResult.text;
            context.debug(() => console.log(`${parser.constructor.name} extracted (at index=${parsedIndex}) '${parsedText}'`));
            results.push(parsedResult);
            remainingText = originalText.substring(parsedIndex + parsedText.length);
            match = pattern.exec(remainingText);
        }
        return results;
    }
}
class ParsingContext {
    constructor(text, refDate, option) {
        this.text = text;
        this.reference = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone(refDate);
        this.option = option ?? {};
        this.refDate = this.reference.instant;
    }
    createParsingComponents(components) {
        if (components instanceof _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents) {
            return components;
        }
        return new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(this.reference, components);
    }
    createParsingResult(index, textOrEndIndex, startComponents, endComponents) {
        const text = typeof textOrEndIndex === "string" ? textOrEndIndex : this.text.substring(index, textOrEndIndex);
        const start = startComponents ? this.createParsingComponents(startComponents) : null;
        const end = endComponents ? this.createParsingComponents(endComponents) : null;
        return new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult(this.reference, index, text, start, end);
    }
    debug(block) {
        if (this.option.debug) {
            if (this.option.debug instanceof Function) {
                this.option.debug(block);
            }
            else {
                const handler = this.option.debug;
                handler.debug(block);
            }
        }
    }
}
//# sourceMappingURL=chrono.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/abstractRefiners.js":
/*!**********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/abstractRefiners.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Filter: () => (/* binding */ Filter),
/* harmony export */   MergingRefiner: () => (/* binding */ MergingRefiner)
/* harmony export */ });
class Filter {
    refine(context, results) {
        return results.filter((r) => this.isValid(context, r));
    }
}
class MergingRefiner {
    refine(context, results) {
        if (results.length < 2) {
            return results;
        }
        const mergedResults = [];
        let curResult = results[0];
        let nextResult = null;
        for (let i = 1; i < results.length; i++) {
            nextResult = results[i];
            const textBetween = context.text.substring(curResult.index + curResult.text.length, nextResult.index);
            if (!this.shouldMergeResults(textBetween, curResult, nextResult, context)) {
                mergedResults.push(curResult);
                curResult = nextResult;
            }
            else {
                const left = curResult;
                const right = nextResult;
                const mergedResult = this.mergeResults(textBetween, left, right, context);
                context.debug(() => {
                    console.log(`${this.constructor.name} merged ${left} and ${right} into ${mergedResult}`);
                });
                curResult = mergedResult;
            }
        }
        if (curResult != null) {
            mergedResults.push(curResult);
        }
        return mergedResults;
    }
}
//# sourceMappingURL=abstractRefiners.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js":
/*!**************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createParsingComponentsAtWeekday: () => (/* binding */ createParsingComponentsAtWeekday),
/* harmony export */   getBackwardDaysToWeekday: () => (/* binding */ getBackwardDaysToWeekday),
/* harmony export */   getDaysForwardToWeekday: () => (/* binding */ getDaysForwardToWeekday),
/* harmony export */   getDaysToWeekday: () => (/* binding */ getDaysToWeekday),
/* harmony export */   getDaysToWeekdayClosest: () => (/* binding */ getDaysToWeekdayClosest)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");



function createParsingComponentsAtWeekday(reference, weekday, modifier) {
    const refDate = reference.getDateWithAdjustedTimezone();
    const daysToWeekday = getDaysToWeekday(refDate, weekday, modifier);
    let components = new _results_js__WEBPACK_IMPORTED_MODULE_0__.ParsingComponents(reference);
    components = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_1__.addImpliedTimeUnits)(components, { "day": daysToWeekday });
    components.assign("weekday", weekday);
    return components;
}
function getDaysToWeekday(refDate, weekday, modifier) {
    const refWeekday = refDate.getDay();
    switch (modifier) {
        case "this":
            return getDaysForwardToWeekday(refDate, weekday);
        case "last":
            return getBackwardDaysToWeekday(refDate, weekday);
        case "next":
            if (refWeekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SUNDAY) {
                return weekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SUNDAY ? 7 : weekday;
            }
            if (refWeekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SATURDAY) {
                if (weekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SATURDAY)
                    return 7;
                if (weekday == _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SUNDAY)
                    return 8;
                return 1 + weekday;
            }
            if (weekday < refWeekday && weekday != _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday.SUNDAY) {
                return getDaysForwardToWeekday(refDate, weekday);
            }
            else {
                return getDaysForwardToWeekday(refDate, weekday) + 7;
            }
    }
    return getDaysToWeekdayClosest(refDate, weekday);
}
function getDaysToWeekdayClosest(refDate, weekday) {
    const backward = getBackwardDaysToWeekday(refDate, weekday);
    const forward = getDaysForwardToWeekday(refDate, weekday);
    return forward < -backward ? forward : backward;
}
function getDaysForwardToWeekday(refDate, weekday) {
    const refWeekday = refDate.getDay();
    let forwardCount = weekday - refWeekday;
    if (forwardCount < 0) {
        forwardCount += 7;
    }
    return forwardCount;
}
function getBackwardDaysToWeekday(refDate, weekday) {
    const refWeekday = refDate.getDay();
    let backwardCount = weekday - refWeekday;
    if (backwardCount >= 0) {
        backwardCount -= 7;
    }
    return backwardCount;
}
//# sourceMappingURL=weekdays.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/casualReferences.js":
/*!**********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/casualReferences.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afternoon: () => (/* binding */ afternoon),
/* harmony export */   evening: () => (/* binding */ evening),
/* harmony export */   lastNight: () => (/* binding */ lastNight),
/* harmony export */   midnight: () => (/* binding */ midnight),
/* harmony export */   morning: () => (/* binding */ morning),
/* harmony export */   noon: () => (/* binding */ noon),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   theDayAfter: () => (/* binding */ theDayAfter),
/* harmony export */   theDayBefore: () => (/* binding */ theDayBefore),
/* harmony export */   today: () => (/* binding */ today),
/* harmony export */   tomorrow: () => (/* binding */ tomorrow),
/* harmony export */   tonight: () => (/* binding */ tonight),
/* harmony export */   yesterday: () => (/* binding */ yesterday),
/* harmony export */   yesterdayEvening: () => (/* binding */ yesterdayEvening)
/* harmony export */ });
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types.js */ "./node_modules/chrono-node/dist/esm/types.js");




function now(reference) {
    const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarTime)(component, targetDate);
    if (reference.timezoneOffset !== null) {
        component.assign("timezoneOffset", targetDate.utcOffset());
    }
    component.addTag("casualReference/now");
    return component;
}
function today(reference) {
    const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.implySimilarTime)(component, targetDate);
    component.addTag("casualReference/today");
    return component;
}
function yesterday(reference) {
    return theDayBefore(reference, 1).addTag("casualReference/yesterday");
}
function theDayBefore(reference, numDay) {
    return theDayAfter(reference, -numDay);
}
function tomorrow(reference) {
    return theDayAfter(reference, 1).addTag("casualReference/tomorrow");
}
function theDayAfter(reference, nDays) {
    let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    targetDate = targetDate.add(nDays, "day");
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.implySimilarTime)(component, targetDate);
    return component;
}
function tonight(reference, implyHour = 22) {
    const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
    component.imply("hour", implyHour);
    component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
    component.addTag("casualReference/tonight");
    return component;
}
function lastNight(reference, implyHour = 0) {
    let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    if (targetDate.hour() < 6) {
        targetDate = targetDate.add(-1, "day");
    }
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
    component.imply("hour", implyHour);
    return component;
}
function evening(reference, implyHour = 20) {
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
    component.imply("hour", implyHour);
    component.addTag("casualReference/evening");
    return component;
}
function yesterdayEvening(reference, implyHour = 20) {
    let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    targetDate = targetDate.add(-1, "day");
    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
    component.imply("hour", implyHour);
    component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
    component.addTag("casualReference/yesterday");
    component.addTag("casualReference/evening");
    return component;
}
function midnight(reference) {
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(reference.instant);
    if (targetDate.hour() > 2) {
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.implyTheNextDay)(component, targetDate);
    }
    component.assign("hour", 0);
    component.imply("minute", 0);
    component.imply("second", 0);
    component.imply("millisecond", 0);
    component.addTag("casualReference/midnight");
    return component;
}
function morning(reference, implyHour = 6) {
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
    component.imply("hour", implyHour);
    component.imply("minute", 0);
    component.imply("second", 0);
    component.imply("millisecond", 0);
    component.addTag("casualReference/morning");
    return component;
}
function afternoon(reference, implyHour = 15) {
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
    component.imply("hour", implyHour);
    component.imply("minute", 0);
    component.imply("second", 0);
    component.imply("millisecond", 0);
    component.addTag("casualReference/afternoon");
    return component;
}
function noon(reference) {
    const component = new _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents(reference, {});
    component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
    component.imply("hour", 12);
    component.imply("minute", 0);
    component.imply("second", 0);
    component.imply("millisecond", 0);
    component.addTag("casualReference/noon");
    return component;
}
//# sourceMappingURL=casualReferences.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractParserWithWordBoundaryChecking: () => (/* binding */ AbstractParserWithWordBoundaryChecking)
/* harmony export */ });
class AbstractParserWithWordBoundaryChecking {
    constructor() {
        this.cachedInnerPattern = null;
        this.cachedPattern = null;
    }
    innerPatternHasChange(context, currentInnerPattern) {
        return this.innerPattern(context) !== currentInnerPattern;
    }
    patternLeftBoundary() {
        return `(\\W|^)`;
    }
    pattern(context) {
        if (this.cachedInnerPattern) {
            if (!this.innerPatternHasChange(context, this.cachedInnerPattern)) {
                return this.cachedPattern;
            }
        }
        this.cachedInnerPattern = this.innerPattern(context);
        this.cachedPattern = new RegExp(`${this.patternLeftBoundary()}${this.cachedInnerPattern.source}`, this.cachedInnerPattern.flags);
        return this.cachedPattern;
    }
    extract(context, match) {
        const header = match[1] ?? "";
        match.index = match.index + header.length;
        match[0] = match[0].substring(header.length);
        for (let i = 2; i < match.length; i++) {
            match[i - 1] = match[i];
        }
        return this.innerExtract(context, match);
    }
}
//# sourceMappingURL=AbstractParserWithWordBoundary.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractTimeExpressionParser: () => (/* binding */ AbstractTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");

function primaryTimePattern(leftBoundary, primaryPrefix, primarySuffix, flags) {
    return new RegExp(`${leftBoundary}` +
        `${primaryPrefix}` +
        `(\\d{1,4})` +
        `(?:` +
        `(?:\\.|:|：)` +
        `(\\d{1,2})` +
        `(?:` +
        `(?::|：)` +
        `(\\d{2})` +
        `(?:\\.(\\d{1,6}))?` +
        `)?` +
        `)?` +
        `(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?` +
        `${primarySuffix}`, flags);
}
function followingTimePatten(followingPhase, followingSuffix) {
    return new RegExp(`^(${followingPhase})` +
        `(\\d{1,4})` +
        `(?:` +
        `(?:\\.|\\:|\\：)` +
        `(\\d{1,2})` +
        `(?:` +
        `(?:\\.|\\:|\\：)` +
        `(\\d{1,2})(?:\\.(\\d{1,6}))?` +
        `)?` +
        `)?` +
        `(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?` +
        `${followingSuffix}`, "i");
}
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const MILLI_SECOND_GROUP = 5;
const AM_PM_HOUR_GROUP = 6;
class AbstractTimeExpressionParser {
    constructor(strictMode = false) {
        this.cachedPrimaryPrefix = null;
        this.cachedPrimarySuffix = null;
        this.cachedPrimaryTimePattern = null;
        this.cachedFollowingPhase = null;
        this.cachedFollowingSuffix = null;
        this.cachedFollowingTimePatten = null;
        this.strictMode = strictMode;
    }
    patternFlags() {
        return "i";
    }
    primaryPatternLeftBoundary() {
        return `(^|\\s|T|\\b)`;
    }
    primarySuffix() {
        return `(?!/)(?=\\W|$)`;
    }
    followingSuffix() {
        return `(?!/)(?=\\W|$)`;
    }
    pattern(context) {
        return this.getPrimaryTimePatternThroughCache();
    }
    extract(context, match) {
        const startComponents = this.extractPrimaryTimeComponents(context, match);
        if (!startComponents) {
            if (match[0].match(/^\d{4}/)) {
                match.index += 4;
                return null;
            }
            match.index += match[0].length;
            return null;
        }
        const index = match.index + match[1].length;
        const text = match[0].substring(match[1].length);
        const result = context.createParsingResult(index, text, startComponents);
        match.index += match[0].length;
        const remainingText = context.text.substring(match.index);
        const followingPattern = this.getFollowingTimePatternThroughCache();
        const followingMatch = followingPattern.exec(remainingText);
        if (text.match(/^\d{3,4}/) && followingMatch) {
            if (followingMatch[0].match(/^\s*([+-])\s*\d{2,4}$/)) {
                return null;
            }
            if (followingMatch[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/)) {
                return null;
            }
        }
        if (!followingMatch ||
            followingMatch[0].match(/^\s*([+-])\s*\d{3,4}$/)) {
            return this.checkAndReturnWithoutFollowingPattern(result);
        }
        result.end = this.extractFollowingTimeComponents(context, followingMatch, result);
        if (result.end) {
            result.text += followingMatch[0];
        }
        return this.checkAndReturnWithFollowingPattern(result);
    }
    extractPrimaryTimeComponents(context, match, strict = false) {
        const components = context.createParsingComponents();
        let minute = 0;
        let meridiem = null;
        let hour = parseInt(match[HOUR_GROUP]);
        if (hour > 100) {
            if (this.strictMode || match[MINUTE_GROUP] != null) {
                return null;
            }
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (hour > 24) {
            return null;
        }
        if (match[MINUTE_GROUP] != null) {
            if (match[MINUTE_GROUP].length == 1 && !match[AM_PM_HOUR_GROUP]) {
                return null;
            }
            minute = parseInt(match[MINUTE_GROUP]);
        }
        if (minute >= 60) {
            return null;
        }
        if (hour > 12) {
            meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                }
            }
            if (ampm == "p") {
                meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
                if (hour != 12) {
                    hour += 12;
                }
            }
        }
        components.assign("hour", hour);
        components.assign("minute", minute);
        if (meridiem !== null) {
            components.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
            }
            else {
                components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
            }
        }
        if (match[MILLI_SECOND_GROUP] != null) {
            const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
            if (millisecond >= 1000)
                return null;
            components.assign("millisecond", millisecond);
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            components.assign("second", second);
        }
        return components;
    }
    extractFollowingTimeComponents(context, match, result) {
        const components = context.createParsingComponents();
        if (match[MILLI_SECOND_GROUP] != null) {
            const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
            if (millisecond >= 1000)
                return null;
            components.assign("millisecond", millisecond);
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            components.assign("second", second);
        }
        let hour = parseInt(match[HOUR_GROUP]);
        let minute = 0;
        let meridiem = -1;
        if (match[MINUTE_GROUP] != null) {
            minute = parseInt(match[MINUTE_GROUP]);
        }
        else if (hour > 100) {
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (minute >= 60 || hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12) {
                return null;
            }
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                    if (!components.isCertain("day")) {
                        components.imply("day", components.get("day") + 1);
                    }
                }
            }
            if (ampm == "p") {
                meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
                if (hour != 12)
                    hour += 12;
            }
            if (!result.start.isCertain("meridiem")) {
                if (meridiem == _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM) {
                    result.start.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
                    if (result.start.get("hour") == 12) {
                        result.start.assign("hour", 0);
                    }
                }
                else {
                    result.start.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
                    if (result.start.get("hour") != 12) {
                        result.start.assign("hour", result.start.get("hour") + 12);
                    }
                }
            }
        }
        components.assign("hour", hour);
        components.assign("minute", minute);
        if (meridiem >= 0) {
            components.assign("meridiem", meridiem);
        }
        else {
            const startAtPM = result.start.isCertain("meridiem") && result.start.get("hour") > 12;
            if (startAtPM) {
                if (result.start.get("hour") - 12 > hour) {
                    components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
                }
                else if (hour <= 12) {
                    components.assign("hour", hour + 12);
                    components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
                }
            }
            else if (hour > 12) {
                components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
            }
            else if (hour <= 12) {
                components.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
            }
        }
        if (components.date().getTime() < result.start.date().getTime()) {
            components.imply("day", components.get("day") + 1);
        }
        return components;
    }
    checkAndReturnWithoutFollowingPattern(result) {
        if (result.text.match(/^\d$/)) {
            return null;
        }
        if (result.text.match(/^\d\d\d+$/)) {
            return null;
        }
        if (result.text.match(/\d[apAP]$/)) {
            return null;
        }
        const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)$/);
        if (endingWithNumbers) {
            const endingNumbers = endingWithNumbers[1];
            if (this.strictMode) {
                return null;
            }
            if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
                return null;
            }
            const endingNumberVal = parseInt(endingNumbers);
            if (endingNumberVal > 24) {
                return null;
            }
        }
        return result;
    }
    checkAndReturnWithFollowingPattern(result) {
        if (result.text.match(/^\d+-\d+$/)) {
            return null;
        }
        const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
        if (endingWithNumbers) {
            if (this.strictMode) {
                return null;
            }
            const startingNumbers = endingWithNumbers[1];
            const endingNumbers = endingWithNumbers[2];
            if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
                return null;
            }
            const endingNumberVal = parseInt(endingNumbers);
            const startingNumberVal = parseInt(startingNumbers);
            if (endingNumberVal > 24 || startingNumberVal > 24) {
                return null;
            }
        }
        return result;
    }
    getPrimaryTimePatternThroughCache() {
        const primaryPrefix = this.primaryPrefix();
        const primarySuffix = this.primarySuffix();
        if (this.cachedPrimaryPrefix === primaryPrefix && this.cachedPrimarySuffix === primarySuffix) {
            return this.cachedPrimaryTimePattern;
        }
        this.cachedPrimaryTimePattern = primaryTimePattern(this.primaryPatternLeftBoundary(), primaryPrefix, primarySuffix, this.patternFlags());
        this.cachedPrimaryPrefix = primaryPrefix;
        this.cachedPrimarySuffix = primarySuffix;
        return this.cachedPrimaryTimePattern;
    }
    getFollowingTimePatternThroughCache() {
        const followingPhase = this.followingPhase();
        const followingSuffix = this.followingSuffix();
        if (this.cachedFollowingPhase === followingPhase && this.cachedFollowingSuffix === followingSuffix) {
            return this.cachedFollowingTimePatten;
        }
        this.cachedFollowingTimePatten = followingTimePatten(followingPhase, followingSuffix);
        this.cachedFollowingPhase = followingPhase;
        this.cachedFollowingSuffix = followingSuffix;
        return this.cachedFollowingTimePatten;
    }
}
//# sourceMappingURL=AbstractTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/parsers/ISOFormatParser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/parsers/ISOFormatParser.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ISOFormatParser)
/* harmony export */ });
/* harmony import */ var _AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");

const PATTERN = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})" +
    "(?:T" +
    "([0-9]{1,2}):([0-9]{1,2})" +
    "(?:" +
    ":([0-9]{1,2})(?:\\.(\\d{1,4}))?" +
    ")?" +
    "(?:" +
    "Z|([+-]\\d{2}):?(\\d{2})?" +
    ")?" +
    ")?" +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NUMBER_GROUP = 2;
const DATE_NUMBER_GROUP = 3;
const HOUR_NUMBER_GROUP = 4;
const MINUTE_NUMBER_GROUP = 5;
const SECOND_NUMBER_GROUP = 6;
const MILLISECOND_NUMBER_GROUP = 7;
const TZD_HOUR_OFFSET_GROUP = 8;
const TZD_MINUTE_OFFSET_GROUP = 9;
class ISOFormatParser extends _AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const components = {};
        components["year"] = parseInt(match[YEAR_NUMBER_GROUP]);
        components["month"] = parseInt(match[MONTH_NUMBER_GROUP]);
        components["day"] = parseInt(match[DATE_NUMBER_GROUP]);
        if (match[HOUR_NUMBER_GROUP] != null) {
            components["hour"] = parseInt(match[HOUR_NUMBER_GROUP]);
            components["minute"] = parseInt(match[MINUTE_NUMBER_GROUP]);
            if (match[SECOND_NUMBER_GROUP] != null) {
                components["second"] = parseInt(match[SECOND_NUMBER_GROUP]);
            }
            if (match[MILLISECOND_NUMBER_GROUP] != null) {
                components["millisecond"] = parseInt(match[MILLISECOND_NUMBER_GROUP]);
            }
            if (match[TZD_HOUR_OFFSET_GROUP] == null) {
                components["timezoneOffset"] = 0;
            }
            else {
                const hourOffset = parseInt(match[TZD_HOUR_OFFSET_GROUP]);
                let minuteOffset = 0;
                if (match[TZD_MINUTE_OFFSET_GROUP] != null) {
                    minuteOffset = parseInt(match[TZD_MINUTE_OFFSET_GROUP]);
                }
                let offset = hourOffset * 60;
                if (offset < 0) {
                    offset -= minuteOffset;
                }
                else {
                    offset += minuteOffset;
                }
                components["timezoneOffset"] = offset;
            }
        }
        return components;
    }
}
//# sourceMappingURL=ISOFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlashDateFormatParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");

const PATTERN = new RegExp("([^\\d]|^)" +
    "([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})" +
    "(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?" +
    "(\\W|$)", "i");
const OPENING_GROUP = 1;
const ENDING_GROUP = 5;
const FIRST_NUMBERS_GROUP = 2;
const SECOND_NUMBERS_GROUP = 3;
const YEAR_GROUP = 4;
class SlashDateFormatParser {
    constructor(littleEndian) {
        this.groupNumberMonth = littleEndian ? SECOND_NUMBERS_GROUP : FIRST_NUMBERS_GROUP;
        this.groupNumberDay = littleEndian ? FIRST_NUMBERS_GROUP : SECOND_NUMBERS_GROUP;
    }
    pattern() {
        return PATTERN;
    }
    extract(context, match) {
        if (match[OPENING_GROUP].length == 0 && match.index > 0 && match.index < context.text.length) {
            const previousChar = context.text[match.index - 1];
            if (previousChar >= "0" && previousChar <= "9") {
                return;
            }
        }
        const index = match.index + match[OPENING_GROUP].length;
        const text = match[0].substr(match[OPENING_GROUP].length, match[0].length - match[OPENING_GROUP].length - match[ENDING_GROUP].length);
        if (text.match(/^\d\.\d$/) || text.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) {
            return;
        }
        if (!match[YEAR_GROUP] && match[0].indexOf("/") < 0) {
            return;
        }
        const result = context.createParsingResult(index, text);
        let month = parseInt(match[this.groupNumberMonth]);
        let day = parseInt(match[this.groupNumberDay]);
        if (month < 1 || month > 12) {
            if (month > 12) {
                if (day >= 1 && day <= 12 && month <= 31) {
                    [day, month] = [month, day];
                }
                else {
                    return null;
                }
            }
        }
        if (day < 1 || day > 31) {
            return null;
        }
        result.start.assign("day", day);
        result.start.assign("month", month);
        if (match[YEAR_GROUP]) {
            const rawYearNumber = parseInt(match[YEAR_GROUP]);
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_0__.findMostLikelyADYear)(rawYearNumber);
            result.start.assign("year", year);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_0__.findYearClosestToRef)(context.refDate, day, month);
            result.start.imply("year", year);
        }
        return result;
    }
}
//# sourceMappingURL=SlashDateFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractRefiners.js */ "./node_modules/chrono-node/dist/esm/common/abstractRefiners.js");

class AbstractMergeDateRangeRefiner extends _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        return !currentResult.end && !nextResult.end && textBetween.match(this.patternBetween()) != null;
    }
    mergeResults(textBetween, fromResult, toResult) {
        if (!fromResult.start.isOnlyWeekdayComponent() && !toResult.start.isOnlyWeekdayComponent()) {
            toResult.start.getCertainComponents().forEach((key) => {
                if (!fromResult.start.isCertain(key)) {
                    fromResult.start.imply(key, toResult.start.get(key));
                }
            });
            fromResult.start.getCertainComponents().forEach((key) => {
                if (!toResult.start.isCertain(key)) {
                    toResult.start.imply(key, fromResult.start.get(key));
                }
            });
        }
        if (fromResult.start.date().getTime() > toResult.start.date().getTime()) {
            let fromMoment = fromResult.start.dayjs();
            let toMoment = toResult.start.dayjs();
            if (toResult.start.isOnlyWeekdayComponent() && toMoment.add(7, "days").isAfter(fromMoment)) {
                toMoment = toMoment.add(7, "days");
                toResult.start.imply("day", toMoment.date());
                toResult.start.imply("month", toMoment.month() + 1);
                toResult.start.imply("year", toMoment.year());
            }
            else if (fromResult.start.isOnlyWeekdayComponent() && fromMoment.add(-7, "days").isBefore(toMoment)) {
                fromMoment = fromMoment.add(-7, "days");
                fromResult.start.imply("day", fromMoment.date());
                fromResult.start.imply("month", fromMoment.month() + 1);
                fromResult.start.imply("year", fromMoment.year());
            }
            else if (toResult.start.isDateWithUnknownYear() && toMoment.add(1, "years").isAfter(fromMoment)) {
                toMoment = toMoment.add(1, "years");
                toResult.start.imply("year", toMoment.year());
            }
            else if (fromResult.start.isDateWithUnknownYear() && fromMoment.add(-1, "years").isBefore(toMoment)) {
                fromMoment = fromMoment.add(-1, "years");
                fromResult.start.imply("year", fromMoment.year());
            }
            else {
                [toResult, fromResult] = [fromResult, toResult];
            }
        }
        const result = fromResult.clone();
        result.start = fromResult.start;
        result.end = toResult.start;
        result.index = Math.min(fromResult.index, toResult.index);
        if (fromResult.index < toResult.index) {
            result.text = fromResult.text + textBetween + toResult.text;
        }
        else {
            result.text = toResult.text + textBetween + fromResult.text;
        }
        return result;
    }
}
//# sourceMappingURL=AbstractMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractRefiners.js */ "./node_modules/chrono-node/dist/esm/common/abstractRefiners.js");
/* harmony import */ var _calculation_mergingCalculation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/mergingCalculation.js */ "./node_modules/chrono-node/dist/esm/calculation/mergingCalculation.js");


class AbstractMergeDateTimeRefiner extends _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        return (((currentResult.start.isOnlyDate() && nextResult.start.isOnlyTime()) ||
            (nextResult.start.isOnlyDate() && currentResult.start.isOnlyTime())) &&
            textBetween.match(this.patternBetween()) != null);
    }
    mergeResults(textBetween, currentResult, nextResult) {
        const result = currentResult.start.isOnlyDate()
            ? (0,_calculation_mergingCalculation_js__WEBPACK_IMPORTED_MODULE_1__.mergeDateTimeResult)(currentResult, nextResult)
            : (0,_calculation_mergingCalculation_js__WEBPACK_IMPORTED_MODULE_1__.mergeDateTimeResult)(nextResult, currentResult);
        result.index = currentResult.index;
        result.text = currentResult.text + textBetween + nextResult.text;
        return result;
    }
}
//# sourceMappingURL=AbstractMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneAbbrRefiner.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneAbbrRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExtractTimezoneAbbrRefiner)
/* harmony export */ });
/* harmony import */ var _timezone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../timezone.js */ "./node_modules/chrono-node/dist/esm/timezone.js");

const TIMEZONE_NAME_PATTERN = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class ExtractTimezoneAbbrRefiner {
    constructor(timezoneOverrides) {
        this.timezoneOverrides = timezoneOverrides;
    }
    refine(context, results) {
        const timezoneOverrides = context.option.timezones ?? {};
        results.forEach((result) => {
            const suffix = context.text.substring(result.index + result.text.length);
            const match = TIMEZONE_NAME_PATTERN.exec(suffix);
            if (!match) {
                return;
            }
            const timezoneAbbr = match[1].toUpperCase();
            const refDate = result.start.date() ?? result.refDate ?? new Date();
            const tzOverrides = { ...this.timezoneOverrides, ...timezoneOverrides };
            const extractedTimezoneOffset = (0,_timezone_js__WEBPACK_IMPORTED_MODULE_0__.toTimezoneOffset)(timezoneAbbr, refDate, tzOverrides);
            if (extractedTimezoneOffset == null) {
                return;
            }
            context.debug(() => {
                console.log(`Extracting timezone: '${timezoneAbbr}' into: ${extractedTimezoneOffset} for: ${result.start}`);
            });
            const currentTimezoneOffset = result.start.get("timezoneOffset");
            if (currentTimezoneOffset !== null && extractedTimezoneOffset != currentTimezoneOffset) {
                if (result.start.isCertain("timezoneOffset")) {
                    return;
                }
                if (timezoneAbbr != match[1]) {
                    return;
                }
            }
            if (result.start.isOnlyDate()) {
                if (timezoneAbbr != match[1]) {
                    return;
                }
            }
            result.text += match[0];
            if (!result.start.isCertain("timezoneOffset")) {
                result.start.assign("timezoneOffset", extractedTimezoneOffset);
            }
            if (result.end != null && !result.end.isCertain("timezoneOffset")) {
                result.end.assign("timezoneOffset", extractedTimezoneOffset);
            }
        });
        return results;
    }
}
//# sourceMappingURL=ExtractTimezoneAbbrRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneOffsetRefiner.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneOffsetRefiner.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExtractTimezoneOffsetRefiner)
/* harmony export */ });
const TIMEZONE_OFFSET_PATTERN = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
const TIMEZONE_OFFSET_SIGN_GROUP = 1;
const TIMEZONE_OFFSET_HOUR_OFFSET_GROUP = 2;
const TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP = 3;
class ExtractTimezoneOffsetRefiner {
    refine(context, results) {
        results.forEach(function (result) {
            if (result.start.isCertain("timezoneOffset")) {
                return;
            }
            const suffix = context.text.substring(result.index + result.text.length);
            const match = TIMEZONE_OFFSET_PATTERN.exec(suffix);
            if (!match) {
                return;
            }
            context.debug(() => {
                console.log(`Extracting timezone: '${match[0]}' into : ${result}`);
            });
            const hourOffset = parseInt(match[TIMEZONE_OFFSET_HOUR_OFFSET_GROUP]);
            const minuteOffset = parseInt(match[TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP] || "0");
            let timezoneOffset = hourOffset * 60 + minuteOffset;
            if (timezoneOffset > 14 * 60) {
                return;
            }
            if (match[TIMEZONE_OFFSET_SIGN_GROUP] === "-") {
                timezoneOffset = -timezoneOffset;
            }
            if (result.end != null) {
                result.end.assign("timezoneOffset", timezoneOffset);
            }
            result.start.assign("timezoneOffset", timezoneOffset);
            result.text += match[0];
        });
        return results;
    }
}
//# sourceMappingURL=ExtractTimezoneOffsetRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/refiners/ForwardDateRefiner.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/ForwardDateRefiner.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForwardDateRefiner)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");


class ForwardDateRefiner {
    refine(context, results) {
        if (!context.option.forwardDate) {
            return results;
        }
        results.forEach(function (result) {
            let refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
            if (result.start.isOnlyTime() && refMoment.isAfter(result.start.dayjs())) {
                refMoment = refMoment.add(1, "day");
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_1__.implySimilarDate)(result.start, refMoment);
                if (result.end && result.end.isOnlyTime()) {
                    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_1__.implySimilarDate)(result.end, refMoment);
                    if (result.start.dayjs().isAfter(result.end.dayjs())) {
                        refMoment = refMoment.add(1, "day");
                        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_1__.implySimilarDate)(result.end, refMoment);
                    }
                }
            }
            if (result.start.isOnlyWeekdayComponent() && refMoment.isAfter(result.start.dayjs())) {
                if (refMoment.day() >= result.start.get("weekday")) {
                    refMoment = refMoment.day(result.start.get("weekday") + 7);
                }
                else {
                    refMoment = refMoment.day(result.start.get("weekday"));
                }
                result.start.imply("day", refMoment.date());
                result.start.imply("month", refMoment.month() + 1);
                result.start.imply("year", refMoment.year());
                context.debug(() => {
                    console.log(`Forward weekly adjusted for ${result} (${result.start})`);
                });
                if (result.end && result.end.isOnlyWeekdayComponent()) {
                    if (refMoment.day() > result.end.get("weekday")) {
                        refMoment = refMoment.day(result.end.get("weekday") + 7);
                    }
                    else {
                        refMoment = refMoment.day(result.end.get("weekday"));
                    }
                    result.end.imply("day", refMoment.date());
                    result.end.imply("month", refMoment.month() + 1);
                    result.end.imply("year", refMoment.year());
                    context.debug(() => {
                        console.log(`Forward weekly adjusted for ${result} (${result.end})`);
                    });
                }
            }
            if (result.start.isDateWithUnknownYear() && refMoment.isAfter(result.start.dayjs())) {
                for (let i = 0; i < 3 && refMoment.isAfter(result.start.dayjs()); i++) {
                    result.start.imply("year", result.start.get("year") + 1);
                    context.debug(() => {
                        console.log(`Forward yearly adjusted for ${result} (${result.start})`);
                    });
                    if (result.end && !result.end.isCertain("year")) {
                        result.end.imply("year", result.end.get("year") + 1);
                        context.debug(() => {
                            console.log(`Forward yearly adjusted for ${result} (${result.end})`);
                        });
                    }
                }
            }
        });
        return results;
    }
}
//# sourceMappingURL=ForwardDateRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/refiners/MergeWeekdayComponentRefiner.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/MergeWeekdayComponentRefiner.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MergeWeekdayComponentRefiner)
/* harmony export */ });
/* harmony import */ var _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractRefiners.js */ "./node_modules/chrono-node/dist/esm/common/abstractRefiners.js");

class MergeWeekdayComponentRefiner extends _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
    mergeResults(textBetween, currentResult, nextResult) {
        const newResult = nextResult.clone();
        newResult.index = currentResult.index;
        newResult.text = currentResult.text + textBetween + newResult.text;
        newResult.start.assign("weekday", currentResult.start.get("weekday"));
        if (newResult.end) {
            newResult.end.assign("weekday", currentResult.start.get("weekday"));
        }
        return newResult;
    }
    shouldMergeResults(textBetween, currentResult, nextResult) {
        const weekdayThenNormalDate = currentResult.start.isOnlyWeekdayComponent() &&
            !currentResult.start.isCertain("hour") &&
            nextResult.start.isCertain("day");
        return weekdayThenNormalDate && textBetween.match(/^,?\s*$/) != null;
    }
}
//# sourceMappingURL=MergeWeekdayComponentRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/refiners/OverlapRemovalRefiner.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/OverlapRemovalRefiner.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OverlapRemovalRefiner)
/* harmony export */ });
class OverlapRemovalRefiner {
    refine(context, results) {
        if (results.length < 2) {
            return results;
        }
        const filteredResults = [];
        let prevResult = results[0];
        for (let i = 1; i < results.length; i++) {
            const result = results[i];
            if (result.index >= prevResult.index + prevResult.text.length) {
                filteredResults.push(prevResult);
                prevResult = result;
                continue;
            }
            let kept = null;
            let removed = null;
            if (result.text.length > prevResult.text.length) {
                kept = result;
                removed = prevResult;
            }
            else {
                kept = prevResult;
                removed = result;
            }
            context.debug(() => {
                console.log(`${this.constructor.name} remove ${removed} by ${kept}`);
            });
            prevResult = kept;
        }
        if (prevResult != null) {
            filteredResults.push(prevResult);
        }
        return filteredResults;
    }
}
//# sourceMappingURL=OverlapRemovalRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/common/refiners/UnlikelyFormatFilter.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/common/refiners/UnlikelyFormatFilter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnlikelyFormatFilter)
/* harmony export */ });
/* harmony import */ var _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstractRefiners.js */ "./node_modules/chrono-node/dist/esm/common/abstractRefiners.js");

class UnlikelyFormatFilter extends _abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.Filter {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    isValid(context, result) {
        if (result.text.replace(" ", "").match(/^\d*(\.\d*)?$/)) {
            context.debug(() => {
                console.log(`Removing unlikely result '${result.text}'`);
            });
            return false;
        }
        if (!result.start.isValidDate()) {
            context.debug(() => {
                console.log(`Removing invalid result: ${result} (${result.start})`);
            });
            return false;
        }
        if (result.end && !result.end.isValidDate()) {
            context.debug(() => {
                console.log(`Removing invalid result: ${result} (${result.end})`);
            });
            return false;
        }
        if (this.strictMode) {
            return this.isStrictModeValid(context, result);
        }
        return true;
    }
    isStrictModeValid(context, result) {
        if (result.start.isOnlyWeekdayComponent()) {
            context.debug(() => {
                console.log(`(Strict) Removing weekday only component: ${result} (${result.end})`);
            });
            return false;
        }
        if (result.start.isOnlyTime() && (!result.start.isCertain("hour") || !result.start.isCertain("minute"))) {
            context.debug(() => {
                console.log(`(Strict) Removing uncertain time component: ${result} (${result.end})`);
            });
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=UnlikelyFormatFilter.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/configurations.js":
/*!*************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/configurations.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   includeCommonConfiguration: () => (/* binding */ includeCommonConfiguration)
/* harmony export */ });
/* harmony import */ var _common_refiners_ExtractTimezoneAbbrRefiner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/refiners/ExtractTimezoneAbbrRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneAbbrRefiner.js");
/* harmony import */ var _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/refiners/ExtractTimezoneOffsetRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneOffsetRefiner.js");
/* harmony import */ var _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/refiners/OverlapRemovalRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/OverlapRemovalRefiner.js");
/* harmony import */ var _common_refiners_ForwardDateRefiner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/refiners/ForwardDateRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/ForwardDateRefiner.js");
/* harmony import */ var _common_refiners_UnlikelyFormatFilter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/refiners/UnlikelyFormatFilter.js */ "./node_modules/chrono-node/dist/esm/common/refiners/UnlikelyFormatFilter.js");
/* harmony import */ var _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/parsers/ISOFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/ISOFormatParser.js");
/* harmony import */ var _common_refiners_MergeWeekdayComponentRefiner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/refiners/MergeWeekdayComponentRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/MergeWeekdayComponentRefiner.js");







function includeCommonConfiguration(configuration, strictMode = false) {
    configuration.parsers.unshift(new _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
    configuration.refiners.unshift(new _common_refiners_MergeWeekdayComponentRefiner_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
    configuration.refiners.unshift(new _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
    configuration.refiners.unshift(new _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    configuration.refiners.push(new _common_refiners_ExtractTimezoneAbbrRefiner_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
    configuration.refiners.push(new _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    configuration.refiners.push(new _common_refiners_ForwardDateRefiner_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
    configuration.refiners.push(new _common_refiners_UnlikelyFormatFilter_js__WEBPACK_IMPORTED_MODULE_6__["default"](strictMode));
    return configuration;
}
//# sourceMappingURL=configurations.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_1__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_2__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_3__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   de: () => (/* reexport module object */ _locales_de_index_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   en: () => (/* reexport module object */ _locales_en_index_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   es: () => (/* reexport module object */ _locales_es_index_js__WEBPACK_IMPORTED_MODULE_11__),
/* harmony export */   fr: () => (/* reexport module object */ _locales_fr_index_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   ja: () => (/* reexport module object */ _locales_ja_index_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   nl: () => (/* reexport module object */ _locales_nl_index_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   pt: () => (/* reexport module object */ _locales_pt_index_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   ru: () => (/* reexport module object */ _locales_ru_index_js__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   strict: () => (/* binding */ strict),
/* harmony export */   uk: () => (/* reexport module object */ _locales_uk_index_js__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   zh: () => (/* reexport module object */ _locales_zh_index_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _locales_en_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locales/en/index.js */ "./node_modules/chrono-node/dist/esm/locales/en/index.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _locales_de_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/de/index.js */ "./node_modules/chrono-node/dist/esm/locales/de/index.js");
/* harmony import */ var _locales_fr_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/fr/index.js */ "./node_modules/chrono-node/dist/esm/locales/fr/index.js");
/* harmony import */ var _locales_ja_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locales/ja/index.js */ "./node_modules/chrono-node/dist/esm/locales/ja/index.js");
/* harmony import */ var _locales_pt_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locales/pt/index.js */ "./node_modules/chrono-node/dist/esm/locales/pt/index.js");
/* harmony import */ var _locales_nl_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locales/nl/index.js */ "./node_modules/chrono-node/dist/esm/locales/nl/index.js");
/* harmony import */ var _locales_zh_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locales/zh/index.js */ "./node_modules/chrono-node/dist/esm/locales/zh/index.js");
/* harmony import */ var _locales_ru_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locales/ru/index.js */ "./node_modules/chrono-node/dist/esm/locales/ru/index.js");
/* harmony import */ var _locales_es_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locales/es/index.js */ "./node_modules/chrono-node/dist/esm/locales/es/index.js");
/* harmony import */ var _locales_uk_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locales/uk/index.js */ "./node_modules/chrono-node/dist/esm/locales/uk/index.js");
















const strict = _locales_en_index_js__WEBPACK_IMPORTED_MODULE_0__.strict;
const casual = _locales_en_index_js__WEBPACK_IMPORTED_MODULE_0__.casual;
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");


const WEEKDAY_DICTIONARY = {
    "sonntag": 0,
    "so": 0,
    "montag": 1,
    "mo": 1,
    "dienstag": 2,
    "di": 2,
    "mittwoch": 3,
    "mi": 3,
    "donnerstag": 4,
    "do": 4,
    "freitag": 5,
    "fr": 5,
    "samstag": 6,
    "sa": 6,
};
const MONTH_DICTIONARY = {
    "januar": 1,
    "jänner": 1,
    "janner": 1,
    "jan": 1,
    "jan.": 1,
    "februar": 2,
    "feber": 2,
    "feb": 2,
    "feb.": 2,
    "märz": 3,
    "maerz": 3,
    "mär": 3,
    "mär.": 3,
    "mrz": 3,
    "mrz.": 3,
    "april": 4,
    "apr": 4,
    "apr.": 4,
    "mai": 5,
    "juni": 6,
    "jun": 6,
    "jun.": 6,
    "juli": 7,
    "jul": 7,
    "jul.": 7,
    "august": 8,
    "aug": 8,
    "aug.": 8,
    "september": 9,
    "sep": 9,
    "sep.": 9,
    "sept": 9,
    "sept.": 9,
    "oktober": 10,
    "okt": 10,
    "okt.": 10,
    "november": 11,
    "nov": 11,
    "nov.": 11,
    "dezember": 12,
    "dez": 12,
    "dez.": 12,
};
const INTEGER_WORD_DICTIONARY = {
    "eins": 1,
    "eine": 1,
    "einem": 1,
    "einen": 1,
    "einer": 1,
    "zwei": 2,
    "drei": 3,
    "vier": 4,
    "fünf": 5,
    "fuenf": 5,
    "sechs": 6,
    "sieben": 7,
    "acht": 8,
    "neun": 9,
    "zehn": 10,
    "elf": 11,
    "zwölf": 12,
    "zwoelf": 12,
};
const TIME_UNIT_DICTIONARY = {
    sek: "second",
    sekunde: "second",
    sekunden: "second",
    min: "minute",
    minute: "minute",
    minuten: "minute",
    h: "hour",
    std: "hour",
    stunde: "hour",
    stunden: "hour",
    tag: "d",
    tage: "d",
    tagen: "d",
    woche: "week",
    wochen: "week",
    monat: "month",
    monate: "month",
    monaten: "month",
    monats: "month",
    quartal: "quarter",
    quartals: "quarter",
    quartale: "quarter",
    quartalen: "quarter",
    a: "year",
    j: "year",
    jr: "year",
    jahr: "year",
    jahre: "year",
    jahren: "year",
    jahres: "year",
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "ein" || num === "einer" || num === "einem" || num === "einen" || num === "eine") {
        return 1;
    }
    else if (num.match(/wenigen/)) {
        return 2;
    }
    else if (num.match(/halb/) || num.match(/halben/)) {
        return 0.5;
    }
    else if (num.match(/einigen/)) {
        return 3;
    }
    else if (num.match(/mehreren/)) {
        return 7;
    }
    return parseFloat(num);
}
const YEAR_PATTERN = `(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)`;
function parseYear(match) {
    if (/v/i.test(match)) {
        return -parseInt(match.replace(/[^0-9]+/gi, ""));
    }
    if (/n/i.test(match)) {
        return parseInt(match.replace(/[^0-9]+/gi, ""));
    }
    if (/z/i.test(match)) {
        return parseInt(match.replace(/[^0-9]+/gi, ""));
    }
    const rawYearNumber = parseInt(match);
    return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js");
/* harmony import */ var _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/parsers/ISOFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/ISOFormatParser.js");
/* harmony import */ var _parsers_DETimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/DETimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeExpressionParser.js");
/* harmony import */ var _parsers_DEWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/DEWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DEWeekdayParser.js");
/* harmony import */ var _parsers_DESpecificTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/DESpecificTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DESpecificTimeExpressionParser.js");
/* harmony import */ var _refiners_DEMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refiners/DEMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/de/refiners/DEMergeDateRangeRefiner.js");
/* harmony import */ var _refiners_DEMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./refiners/DEMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/de/refiners/DEMergeDateTimeRefiner.js");
/* harmony import */ var _parsers_DECasualDateParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/DECasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DECasualDateParser.js");
/* harmony import */ var _parsers_DECasualTimeParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/DECasualTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DECasualTimeParser.js");
/* harmony import */ var _parsers_DEMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/DEMonthNameLittleEndianParser.js */ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DEMonthNameLittleEndianParser.js");
/* harmony import */ var _parsers_DETimeUnitRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/DETimeUnitRelativeFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeUnitRelativeFormatParser.js");
/* harmony import */ var _parsers_DETimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/DETimeUnitWithinFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeUnitWithinFormatParser.js");


















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new _parsers_DECasualTimeParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    option.parsers.unshift(new _parsers_DECasualDateParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
    option.parsers.unshift(new _parsers_DETimeUnitRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
    return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
    return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_6__.includeCommonConfiguration)({
        parsers: [
            new _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](),
            new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](littleEndian),
            new _parsers_DETimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
            new _parsers_DESpecificTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](),
            new _parsers_DEMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
            new _parsers_DEWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](),
            new _parsers_DETimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](),
        ],
        refiners: [new _refiners_DEMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_14__["default"](), new _refiners_DEMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_15__["default"]()],
    }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DECasualDateParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DECasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DECasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var _DECasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DECasualTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DECasualTimeParser.js");
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");





const PATTERN = new RegExp(`(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)` +
    `(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const TIME_GROUP = 2;
class DECasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return PATTERN;
    }
    innerExtract(context, match) {
        let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const dateKeyword = (match[DATE_GROUP] || "").toLowerCase();
        const timeKeyword = (match[TIME_GROUP] || "").toLowerCase();
        let component = context.createParsingComponents();
        switch (dateKeyword) {
            case "jetzt":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
                break;
            case "heute":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.today(context.reference);
                break;
            case "morgen":
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
                break;
            case "übermorgen":
            case "uebermorgen":
                targetDate = targetDate.add(1, "day");
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
                break;
            case "gestern":
                targetDate = targetDate.add(-1, "day");
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.implySimilarTime)(component, targetDate);
                break;
            case "vorgestern":
                targetDate = targetDate.add(-2, "day");
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.implySimilarTime)(component, targetDate);
                break;
            default:
                if (dateKeyword.match(/letzte\s*nacht/)) {
                    if (targetDate.hour() > 6) {
                        targetDate = targetDate.add(-1, "day");
                    }
                    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
                    component.imply("hour", 0);
                }
                break;
        }
        if (timeKeyword) {
            component = _DECasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"].extractTimeComponents(component, timeKeyword);
        }
        return component;
    }
}
//# sourceMappingURL=DECasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DECasualTimeParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DECasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DECasualTimeParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");





class DECasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const timeKeywordPattern = match[2].toLowerCase();
        const component = context.createParsingComponents();
        (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.implySimilarTime)(component, targetDate);
        return DECasualTimeParser.extractTimeComponents(component, timeKeywordPattern);
    }
    static extractTimeComponents(component, timeKeywordPattern) {
        switch (timeKeywordPattern) {
            case "morgen":
                component.imply("hour", 6);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
                break;
            case "vormittag":
                component.imply("hour", 9);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
                break;
            case "mittag":
            case "mittags":
                component.imply("hour", 12);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
                break;
            case "nachmittag":
                component.imply("hour", 15);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
                break;
            case "abend":
                component.imply("hour", 18);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
                break;
            case "nacht":
                component.imply("hour", 22);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
                break;
            case "mitternacht":
                if (component.get("hour") > 1) {
                    component = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_4__.addImpliedTimeUnits)(component, { "day": 1 });
                }
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
                break;
        }
        return component;
    }
}
//# sourceMappingURL=DECasualTimeParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DEMonthNameLittleEndianParser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DEMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DEMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/de/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");





const PATTERN = new RegExp("(?:am\\s*?)?" +
    "(?:den\\s*?)?" +
    `([0-9]{1,2})\\.` +
    `(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*` +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` +
    `(?:(?:-|/|,?\\s*)(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}(?![^\\s]\\d)))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class DEMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = parseInt(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = parseInt(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
//# sourceMappingURL=DEMonthNameLittleEndianParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DESpecificTimeExpressionParser.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DESpecificTimeExpressionParser.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DESpecificTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");

const FIRST_REG_PATTERN = new RegExp("(^|\\s|T)" +
    "(?:(?:um|von)\\s*)?" +
    "(\\d{1,2})(?:h|:)?" +
    "(?:(\\d{1,2})(?:m|:)?)?" +
    "(?:(\\d{1,2})(?:s)?)?" +
    "(?:\\s*Uhr)?" +
    "(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?" +
    "(?=\\W|$)", "i");
const SECOND_REG_PATTERN = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|bis(?:\\s+um)?|\\?)\\s*" +
    "(\\d{1,2})(?:h|:)?" +
    "(?:(\\d{1,2})(?:m|:)?)?" +
    "(?:(\\d{1,2})(?:s)?)?" +
    "(?:\\s*Uhr)?" +
    "(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?" +
    "(?=\\W|$)", "i");
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const AM_PM_HOUR_GROUP = 5;
class DESpecificTimeExpressionParser {
    pattern(context) {
        return FIRST_REG_PATTERN;
    }
    extract(context, match) {
        const result = context.createParsingResult(match.index + match[1].length, match[0].substring(match[1].length));
        if (result.text.match(/^\d{4}$/)) {
            match.index += match[0].length;
            return null;
        }
        result.start = DESpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), match);
        if (!result.start) {
            match.index += match[0].length;
            return null;
        }
        const remainingText = context.text.substring(match.index + match[0].length);
        const secondMatch = SECOND_REG_PATTERN.exec(remainingText);
        if (secondMatch) {
            result.end = DESpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), secondMatch);
            if (result.end) {
                result.text += secondMatch[0];
            }
        }
        return result;
    }
    static extractTimeComponent(extractingComponents, match) {
        let hour = 0;
        let minute = 0;
        let meridiem = null;
        hour = parseInt(match[HOUR_GROUP]);
        if (match[MINUTE_GROUP] != null) {
            minute = parseInt(match[MINUTE_GROUP]);
        }
        if (minute >= 60 || hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP].toLowerCase();
            if (ampm.match(/morgen|vormittag/)) {
                meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                }
            }
            if (ampm.match(/nachmittag|abend/)) {
                meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
                if (hour != 12) {
                    hour += 12;
                }
            }
            if (ampm.match(/nacht/)) {
                if (hour == 12) {
                    meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
                    hour = 0;
                }
                else if (hour < 6) {
                    meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
                }
                else {
                    meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
                    hour += 12;
                }
            }
        }
        extractingComponents.assign("hour", hour);
        extractingComponents.assign("minute", minute);
        if (meridiem !== null) {
            extractingComponents.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                extractingComponents.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
            }
            else {
                extractingComponents.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
            }
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            extractingComponents.assign("second", second);
        }
        return extractingComponents;
    }
}
//# sourceMappingURL=DESpecificTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeExpressionParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DETimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js");

class DETimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:um|von)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|bis)\\s*";
    }
    extractPrimaryTimeComponents(context, match) {
        if (match[0].match(/^\s*\d{4}\s*$/)) {
            return null;
        }
        return super.extractPrimaryTimeComponents(context, match);
    }
}
//# sourceMappingURL=DETimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeUnitRelativeFormatParser.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeUnitRelativeFormatParser.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DETimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/de/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");





class DETimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    constructor() {
        super();
    }
    innerPattern() {
        return new RegExp(`(?:\\s*((?:nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?` +
            `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER_PATTERN})?` +
            `(?:\\s*(nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?` +
            `\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNIT_DICTIONARY)})`, "i");
    }
    innerExtract(context, match) {
        const num = match[2] ? (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseNumberPattern)(match[2]) : 1;
        const unit = _constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNIT_DICTIONARY[match[4].toLowerCase()];
        let timeUnits = {};
        timeUnits[unit] = num;
        let modifier = match[1] || match[3] || "";
        modifier = modifier.toLowerCase();
        if (!modifier) {
            return;
        }
        if (/vor/.test(modifier) || /letzte/.test(modifier) || /vergangen/.test(modifier)) {
            timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_3__.reverseTimeUnits)(timeUnits);
        }
        return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=DETimeUnitRelativeFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeUnitWithinFormatParser.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DETimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DETimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/de/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



class DETimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp(`(?:in|für|während)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
        return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=DETimeUnitWithinFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/parsers/DEWeekdayParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/parsers/DEWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DEWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/de/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ "./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js");




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:a[mn]\\s*?)?" +
    "(?:(diese[mn]|letzte[mn]|n(?:ä|ae)chste[mn])\\s*)?" +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(diese|letzte|n(?:ä|ae)chste)\\s*woche)?" +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const SUFFIX_GROUP = 3;
const WEEKDAY_GROUP = 2;
class DEWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[SUFFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord.match(/letzte/)) {
            modifier = "last";
        }
        else if (modifierWord.match(/chste/)) {
            modifier = "next";
        }
        else if (modifierWord.match(/diese/)) {
            modifier = "this";
        }
        return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, offset, modifier);
    }
}
//# sourceMappingURL=DEWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/refiners/DEMergeDateRangeRefiner.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/refiners/DEMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DEMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class DEMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
    }
}
//# sourceMappingURL=DEMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/de/refiners/DEMergeDateTimeRefiner.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/de/refiners/DEMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DEMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class DEMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return new RegExp("^\\s*(T|um|am|,|-)?\\s*$");
    }
}
//# sourceMappingURL=DEMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/configuration.js":
/*!***********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/configuration.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENDefaultConfiguration)
/* harmony export */ });
/* harmony import */ var _parsers_ENTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/ENTimeUnitWithinFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitWithinFormatParser.js");
/* harmony import */ var _parsers_ENMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/ENMonthNameLittleEndianParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameLittleEndianParser.js");
/* harmony import */ var _parsers_ENMonthNameMiddleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/ENMonthNameMiddleEndianParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameMiddleEndianParser.js");
/* harmony import */ var _parsers_ENMonthNameParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/ENMonthNameParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameParser.js");
/* harmony import */ var _parsers_ENCasualYearMonthDayParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/ENCasualYearMonthDayParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualYearMonthDayParser.js");
/* harmony import */ var _parsers_ENSlashMonthFormatParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/ENSlashMonthFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENSlashMonthFormatParser.js");
/* harmony import */ var _parsers_ENTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/ENTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeExpressionParser.js");
/* harmony import */ var _parsers_ENTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/ENTimeUnitAgoFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitAgoFormatParser.js");
/* harmony import */ var _parsers_ENTimeUnitLaterFormatParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/ENTimeUnitLaterFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitLaterFormatParser.js");
/* harmony import */ var _refiners_ENMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./refiners/ENMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateRangeRefiner.js");
/* harmony import */ var _refiners_ENMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refiners/ENMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateTimeRefiner.js");
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _parsers_ENCasualDateParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/ENCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualDateParser.js");
/* harmony import */ var _parsers_ENCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/ENCasualTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualTimeParser.js");
/* harmony import */ var _parsers_ENWeekdayParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ENWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENWeekdayParser.js");
/* harmony import */ var _parsers_ENRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ENRelativeDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENRelativeDateFormatParser.js");
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js");
/* harmony import */ var _parsers_ENTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ENTimeUnitCasualRelativeFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitCasualRelativeFormatParser.js");
/* harmony import */ var _refiners_ENMergeRelativeAfterDateRefiner_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./refiners/ENMergeRelativeAfterDateRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeAfterDateRefiner.js");
/* harmony import */ var _refiners_ENMergeRelativeFollowByDateRefiner_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./refiners/ENMergeRelativeFollowByDateRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeFollowByDateRefiner.js");
/* harmony import */ var _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/refiners/OverlapRemovalRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/OverlapRemovalRefiner.js");





















class ENDefaultConfiguration {
    createCasualConfiguration(littleEndian = false) {
        const option = this.createConfiguration(false, littleEndian);
        option.parsers.push(new _parsers_ENCasualDateParser_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
        option.parsers.push(new _parsers_ENCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
        option.parsers.push(new _parsers_ENMonthNameParser_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
        option.parsers.push(new _parsers_ENRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
        option.parsers.push(new _parsers_ENTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
        return option;
    }
    createConfiguration(strictMode = true, littleEndian = false) {
        const options = (0,_configurations_js__WEBPACK_IMPORTED_MODULE_5__.includeCommonConfiguration)({
            parsers: [
                new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](littleEndian),
                new _parsers_ENTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](strictMode),
                new _parsers_ENMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](),
                new _parsers_ENMonthNameMiddleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](littleEndian),
                new _parsers_ENWeekdayParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](),
                new _parsers_ENCasualYearMonthDayParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
                new _parsers_ENSlashMonthFormatParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](),
                new _parsers_ENTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](strictMode),
                new _parsers_ENTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_14__["default"](strictMode),
                new _parsers_ENTimeUnitLaterFormatParser_js__WEBPACK_IMPORTED_MODULE_15__["default"](strictMode),
            ],
            refiners: [new _refiners_ENMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__["default"]()],
        }, strictMode);
        options.refiners.unshift(new _refiners_ENMergeRelativeFollowByDateRefiner_js__WEBPACK_IMPORTED_MODULE_17__["default"]());
        options.refiners.unshift(new _refiners_ENMergeRelativeAfterDateRefiner_js__WEBPACK_IMPORTED_MODULE_18__["default"]());
        options.refiners.unshift(new _common_refiners_OverlapRemovalRefiner_js__WEBPACK_IMPORTED_MODULE_19__["default"]());
        options.refiners.push(new _refiners_ENMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__["default"]());
        options.refiners.push(new _refiners_ENMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_20__["default"]());
        return options;
    }
}
//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FULL_MONTH_NAME_DICTIONARY: () => (/* binding */ FULL_MONTH_NAME_DICTIONARY),
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   ORDINAL_WORD_DICTIONARY: () => (/* binding */ ORDINAL_WORD_DICTIONARY),
/* harmony export */   TIME_UNITS_NO_ABBR_PATTERN: () => (/* binding */ TIME_UNITS_NO_ABBR_PATTERN),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   TIME_UNIT_DICTIONARY_NO_ABBR: () => (/* binding */ TIME_UNIT_DICTIONARY_NO_ABBR),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");


const WEEKDAY_DICTIONARY = {
    sunday: 0,
    sun: 0,
    "sun.": 0,
    monday: 1,
    mon: 1,
    "mon.": 1,
    tuesday: 2,
    tue: 2,
    "tue.": 2,
    wednesday: 3,
    wed: 3,
    "wed.": 3,
    thursday: 4,
    thurs: 4,
    "thurs.": 4,
    thur: 4,
    "thur.": 4,
    thu: 4,
    "thu.": 4,
    friday: 5,
    fri: 5,
    "fri.": 5,
    saturday: 6,
    sat: 6,
    "sat.": 6,
};
const FULL_MONTH_NAME_DICTIONARY = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
};
const MONTH_DICTIONARY = {
    ...FULL_MONTH_NAME_DICTIONARY,
    jan: 1,
    "jan.": 1,
    feb: 2,
    "feb.": 2,
    mar: 3,
    "mar.": 3,
    apr: 4,
    "apr.": 4,
    jun: 6,
    "jun.": 6,
    jul: 7,
    "jul.": 7,
    aug: 8,
    "aug.": 8,
    sep: 9,
    "sep.": 9,
    sept: 9,
    "sept.": 9,
    oct: 10,
    "oct.": 10,
    nov: 11,
    "nov.": 11,
    dec: 12,
    "dec.": 12,
};
const INTEGER_WORD_DICTIONARY = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
};
const ORDINAL_WORD_DICTIONARY = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19,
    twentieth: 20,
    "twenty first": 21,
    "twenty-first": 21,
    "twenty second": 22,
    "twenty-second": 22,
    "twenty third": 23,
    "twenty-third": 23,
    "twenty fourth": 24,
    "twenty-fourth": 24,
    "twenty fifth": 25,
    "twenty-fifth": 25,
    "twenty sixth": 26,
    "twenty-sixth": 26,
    "twenty seventh": 27,
    "twenty-seventh": 27,
    "twenty eighth": 28,
    "twenty-eighth": 28,
    "twenty ninth": 29,
    "twenty-ninth": 29,
    "thirtieth": 30,
    "thirty first": 31,
    "thirty-first": 31,
};
const TIME_UNIT_DICTIONARY_NO_ABBR = {
    second: "second",
    seconds: "second",
    minute: "minute",
    minutes: "minute",
    hour: "hour",
    hours: "hour",
    day: "d",
    days: "d",
    week: "week",
    weeks: "week",
    month: "month",
    months: "month",
    quarter: "quarter",
    quarters: "quarter",
    year: "year",
    years: "year",
};
const TIME_UNIT_DICTIONARY = {
    s: "second",
    sec: "second",
    second: "second",
    seconds: "second",
    m: "minute",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minutes: "minute",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    hour: "hour",
    hours: "hour",
    d: "d",
    day: "d",
    days: "d",
    w: "w",
    week: "week",
    weeks: "week",
    mo: "month",
    mon: "month",
    mos: "month",
    month: "month",
    months: "month",
    qtr: "quarter",
    quarter: "quarter",
    quarters: "quarter",
    y: "year",
    yr: "year",
    year: "year",
    years: "year",
    ...TIME_UNIT_DICTIONARY_NO_ABBR,
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "a" || num === "an" || num == "the") {
        return 1;
    }
    else if (num.match(/few/)) {
        return 3;
    }
    else if (num.match(/half/)) {
        return 0.5;
    }
    else if (num.match(/couple/)) {
        return 2;
    }
    else if (num.match(/several/)) {
        return 7;
    }
    return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return ORDINAL_WORD_DICTIONARY[num];
    }
    num = num.replace(/(?:st|nd|rd|th)$/i, "");
    return parseInt(num);
}
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])`;
function parseYear(match) {
    if (/BE/i.test(match)) {
        match = match.replace(/BE/i, "");
        return parseInt(match) - 543;
    }
    if (/BCE?/i.test(match)) {
        match = match.replace(/BCE?/i, "");
        return -parseInt(match);
    }
    if (/(AD|CE)/i.test(match)) {
        match = match.replace(/(AD|CE)/i, "");
        return parseInt(match);
    }
    const rawYearNumber = parseInt(match);
    return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const SINGLE_TIME_UNIT_NO_ABBR_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY_NO_ABBR)})`;
const TIME_UNIT_CONNECTOR_PATTERN = `\\s{0,5},?(?:\\s*and)?\\s{0,5}`;
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
const TIME_UNITS_NO_ABBR_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_NO_ABBR_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length).trim();
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   GB: () => (/* binding */ GB),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   configuration: () => (/* binding */ configuration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _configuration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.js */ "./node_modules/chrono-node/dist/esm/locales/en/configuration.js");






const configuration = new _configuration_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(configuration.createCasualConfiguration(false));
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(configuration.createConfiguration(true, false));
const GB = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(configuration.createCasualConfiguration(true));
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualDateParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");




const PATTERN = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class ENCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return PATTERN;
    }
    innerExtract(context, match) {
        let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const lowerText = match[0].toLowerCase();
        let component = context.createParsingComponents();
        switch (lowerText) {
            case "now":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
                break;
            case "today":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.today(context.reference);
                break;
            case "yesterday":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.yesterday(context.reference);
                break;
            case "tomorrow":
            case "tmr":
            case "tmrw":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.tomorrow(context.reference);
                break;
            case "tonight":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.tonight(context.reference);
                break;
            default:
                if (lowerText.match(/last\s*night/)) {
                    if (targetDate.hour() > 6) {
                        targetDate = targetDate.add(-1, "day");
                    }
                    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
                    component.imply("hour", 0);
                }
                break;
        }
        component.addTag("parser/ENCasualDateParser");
        return component;
    }
}
//# sourceMappingURL=ENCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualTimeParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");


const PATTERN = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class ENCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        let component = null;
        switch (match[1].toLowerCase()) {
            case "afternoon":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.afternoon(context.reference);
                break;
            case "evening":
            case "night":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.evening(context.reference);
                break;
            case "midnight":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.midnight(context.reference);
                break;
            case "morning":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.morning(context.reference);
                break;
            case "noon":
            case "midday":
                component = _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.noon(context.reference);
                break;
        }
        if (component) {
            component.addTag("parser/ENCasualTimeParser");
        }
        return component;
    }
}
//# sourceMappingURL=ENCasualTimeParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualYearMonthDayParser.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualYearMonthDayParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENCasualYearMonthDayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



const PATTERN = new RegExp(`([0-9]{4})[\\.\\/\\s]` +
    `(?:(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})|([0-9]{1,2}))[\\.\\/\\s]` +
    `([0-9]{1,2})` +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const MONTH_NUMBER_GROUP = 3;
const DATE_NUMBER_GROUP = 4;
class ENCasualYearMonthDayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = match[MONTH_NUMBER_GROUP]
            ? parseInt(match[MONTH_NUMBER_GROUP])
            : _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        if (month < 1 || month > 12) {
            return null;
        }
        const year = parseInt(match[YEAR_NUMBER_GROUP]);
        const day = parseInt(match[DATE_NUMBER_GROUP]);
        return {
            day: day,
            month: month,
            year: year,
        };
    }
}
//# sourceMappingURL=ENCasualYearMonthDayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameLittleEndianParser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");






const PATTERN = new RegExp(`(?:on\\s{0,3})?` +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` +
    `(?:` +
    `\\s{0,3}(?:to|\\-|\\–|until|through|till)?\\s{0,3}` +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` +
    ")?" +
    `(?:-|/|\\s{0,3}(?:of)?\\s{0,3})` +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY)})` +
    "(?:" +
    `(?:-|/|,?\\s{0,3})` +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.YEAR_PATTERN}(?!\\w))` +
    ")?" +
    "(?=\\W|$)", "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class ENMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseYear)(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
//# sourceMappingURL=ENMonthNameLittleEndianParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameMiddleEndianParser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameMiddleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMonthNameMiddleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");






const PATTERN = new RegExp(`(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` +
    "(?:-|/|\\s*,?\\s*)" +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})(?!\\s*(?:am|pm))\\s*` +
    "(?:" +
    "(?:to|\\-)\\s*" +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})\\s*` +
    ")?" +
    "(?:" +
    `(?:-|/|\\s*,\\s*|\\s+)` +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN})` +
    ")?" +
    "(?=\\W|$)(?!\\:\\d)", "i");
const MONTH_NAME_GROUP = 1;
const DATE_GROUP = 2;
const DATE_TO_GROUP = 3;
const YEAR_GROUP = 4;
class ENMonthNameMiddleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    constructor(shouldSkipYearLikeDate) {
        super();
        this.shouldSkipYearLikeDate = shouldSkipYearLikeDate;
    }
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
        if (day > 31) {
            return null;
        }
        if (this.shouldSkipYearLikeDate) {
            if (!match[DATE_TO_GROUP] && !match[YEAR_GROUP] && match[DATE_GROUP].match(/^2[0-5]$/)) {
                return null;
            }
        }
        const components = context
            .createParsingComponents({
            day: day,
            month: month,
        })
            .addTag("parser/ENMonthNameMiddleEndianParser");
        if (match[YEAR_GROUP]) {
            const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
            components.assign("year", year);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
            components.imply("year", year);
        }
        if (!match[DATE_TO_GROUP]) {
            return components;
        }
        const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
        const result = context.createParsingResult(match.index, match[0]);
        result.start = components;
        result.end = components.clone();
        result.end.assign("day", endDate);
        return result;
    }
}
//# sourceMappingURL=ENMonthNameMiddleEndianParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameParser.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMonthNameParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");





const PATTERN = new RegExp(`((?:in)\\s*)?` +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` +
    `\\s*` +
    `(?:` +
    `[,-]?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN})?` +
    ")?" +
    "(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
const PREFIX_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const YEAR_GROUP = 3;
class ENMonthNameParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const monthName = match[MONTH_NAME_GROUP].toLowerCase();
        if (match[0].length <= 3 && !_constants_js__WEBPACK_IMPORTED_MODULE_1__.FULL_MONTH_NAME_DICTIONARY[monthName]) {
            return null;
        }
        const result = context.createParsingResult(match.index + (match[PREFIX_GROUP] || "").length, match.index + match[0].length);
        result.start.imply("day", 1);
        result.start.addTag("parser/ENMonthNameParser");
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[monthName];
        result.start.assign("month", month);
        if (match[YEAR_GROUP]) {
            const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
            result.start.assign("year", year);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, 1, month);
            result.start.imply("year", year);
        }
        return result;
    }
}
//# sourceMappingURL=ENMonthNameParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENRelativeDateFormatParser.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENRelativeDateFormatParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENRelativeDateFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");





const PATTERN = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.TIME_UNIT_DICTIONARY)})(?=\\s*)` + "(?=\\W|$)", "i");
const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class ENRelativeDateFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_3__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
        const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
        const timeunit = _constants_js__WEBPACK_IMPORTED_MODULE_2__.TIME_UNIT_DICTIONARY[unitWord];
        if (modifier == "next" || modifier.startsWith("after")) {
            const timeUnits = {};
            timeUnits[timeunit] = 1;
            return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        if (modifier == "last" || modifier == "past") {
            const timeUnits = {};
            timeUnits[timeunit] = -1;
            return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        const components = context.createParsingComponents();
        let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
        if (unitWord.match(/week/i)) {
            date = date.add(-date.get("d"), "d");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.imply("year", date.year());
        }
        else if (unitWord.match(/month/i)) {
            date = date.add(-date.date() + 1, "d");
            components.imply("day", date.date());
            components.assign("year", date.year());
            components.assign("month", date.month() + 1);
        }
        else if (unitWord.match(/year/i)) {
            date = date.add(-date.date() + 1, "d");
            date = date.add(-date.month(), "month");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.assign("year", date.year());
        }
        return components;
    }
}
//# sourceMappingURL=ENRelativeDateFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENSlashMonthFormatParser.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENSlashMonthFormatParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENSlashMonthFormatParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");

const PATTERN = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})" + "", "i");
const MONTH_GROUP = 1;
const YEAR_GROUP = 2;
class ENSlashMonthFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const year = parseInt(match[YEAR_GROUP]);
        const month = parseInt(match[MONTH_GROUP]);
        return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
    }
}
//# sourceMappingURL=ENSlashMonthFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeExpressionParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js");


class ENTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
    constructor(strictMode) {
        super(strictMode);
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|to|until|through|till|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:at|from)\\s*)??";
    }
    primarySuffix() {
        return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(context, match) {
        const components = super.extractPrimaryTimeComponents(context, match);
        if (!components) {
            return components;
        }
        if (match[0].endsWith("night")) {
            const hour = components.get("hour");
            if (hour >= 6 && hour < 12) {
                components.assign("hour", components.get("hour") + 12);
                components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM);
            }
            else if (hour < 6) {
                components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
            }
        }
        if (match[0].endsWith("afternoon")) {
            components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM);
            const hour = components.get("hour");
            if (hour >= 0 && hour <= 6) {
                components.assign("hour", components.get("hour") + 12);
            }
        }
        if (match[0].endsWith("morning")) {
            components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
            const hour = components.get("hour");
            if (hour < 12) {
                components.assign("hour", components.get("hour"));
            }
        }
        return components.addTag("parser/ENTimeExpressionParser");
    }
}
//# sourceMappingURL=ENTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitAgoFormatParser.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");




const PATTERN = new RegExp(`(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
const STRICT_PATTERN = new RegExp(`(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class ENTimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN : PATTERN;
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
        const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
    }
}
//# sourceMappingURL=ENTimeUnitAgoFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitCasualRelativeFormatParser.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitCasualRelativeFormatParser.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeUnitCasualRelativeFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");




const PATTERN = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_NO_ABBR = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitCasualRelativeFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    constructor(allowAbbreviations = true) {
        super();
        this.allowAbbreviations = allowAbbreviations;
    }
    innerPattern() {
        return this.allowAbbreviations ? PATTERN : PATTERN_NO_ABBR;
    }
    innerExtract(context, match) {
        const prefix = match[1].toLowerCase();
        let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[2]);
        switch (prefix) {
            case "last":
            case "past":
            case "-":
                timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
                break;
        }
        return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=ENTimeUnitCasualRelativeFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitLaterFormatParser.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitLaterFormatParser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeUnitLaterFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



const PATTERN = new RegExp(`(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})\\s{0,5}(?:later|after|from now|henceforth|forward|out)` + "(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp(`(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i");
const GROUP_NUM_TIMEUNITS = 1;
class ENTimeUnitLaterFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN : PATTERN;
    }
    innerExtract(context, match) {
        const fragments = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[GROUP_NUM_TIMEUNITS]);
        return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, fragments);
    }
}
//# sourceMappingURL=ENTimeUnitLaterFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitWithinFormatParser.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



const PATTERN_WITH_OPTIONAL_PREFIX = new RegExp(`(?:(?:within|in|for)\\s*)?` +
    `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_WITH_PREFIX = new RegExp(`(?:within|in|for)\\s*` +
    `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_WITH_PREFIX_STRICT = new RegExp(`(?:within|in|for)\\s*` +
    `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern(context) {
        if (this.strictMode) {
            return PATTERN_WITH_PREFIX_STRICT;
        }
        return context.option.forwardDate ? PATTERN_WITH_OPTIONAL_PREFIX : PATTERN_WITH_PREFIX;
    }
    innerExtract(context, match) {
        if (match[0].match(/^for\s*the\s*\w+/)) {
            return null;
        }
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
        return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=ENTimeUnitWithinFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/parsers/ENWeekdayParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/parsers/ENWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ "./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js");




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:on\\s*?)?" +
    "(?:(this|last|past|next)\\s*)?" +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(this|last|past|next)\\s*week)?" +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class ENWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord == "last" || modifierWord == "past") {
            modifier = "last";
        }
        else if (modifierWord == "next") {
            modifier = "next";
        }
        else if (modifierWord == "this") {
            modifier = "this";
        }
        return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
    }
}
//# sourceMappingURL=ENWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateRangeRefiner.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class ENMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(to|-|–|until|through|till)\s*$/i;
    }
}
//# sourceMappingURL=ENMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateTimeRefiner.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class ENMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return new RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|:)?\\s*$");
    }
}
//# sourceMappingURL=ENMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeAfterDateRefiner.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeAfterDateRefiner.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMergeRelativeAfterDateRefiner)
/* harmony export */ });
/* harmony import */ var _common_abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/abstractRefiners.js */ "./node_modules/chrono-node/dist/esm/common/abstractRefiners.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");




function IsPositiveFollowingReference(result) {
    return result.text.match(/^[+-]/i) != null;
}
function IsNegativeFollowingReference(result) {
    return result.text.match(/^-/i) != null;
}
class ENMergeRelativeAfterDateRefiner extends _common_abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        if (!textBetween.match(/^\s*$/i)) {
            return false;
        }
        return IsPositiveFollowingReference(nextResult) || IsNegativeFollowingReference(nextResult);
    }
    mergeResults(textBetween, currentResult, nextResult, context) {
        let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(nextResult.text);
        if (IsNegativeFollowingReference(nextResult)) {
            timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        }
        const components = _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(new _results_js__WEBPACK_IMPORTED_MODULE_3__.ReferenceWithTimezone(currentResult.start.date()), timeUnits);
        return new _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingResult(currentResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
    }
}
//# sourceMappingURL=ENMergeRelativeAfterDateRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeFollowByDateRefiner.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeFollowByDateRefiner.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ENMergeRelativeFollowByDateRefiner)
/* harmony export */ });
/* harmony import */ var _common_abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/abstractRefiners.js */ "./node_modules/chrono-node/dist/esm/common/abstractRefiners.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/en/constants.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");




function hasImpliedEarlierReferenceDate(result) {
    return result.text.match(/\s+(before|from)$/i) != null;
}
function hasImpliedLaterReferenceDate(result) {
    return result.text.match(/\s+(after|since)$/i) != null;
}
class ENMergeRelativeFollowByDateRefiner extends _common_abstractRefiners_js__WEBPACK_IMPORTED_MODULE_0__.MergingRefiner {
    patternBetween() {
        return /^\s*$/i;
    }
    shouldMergeResults(textBetween, currentResult, nextResult) {
        if (!textBetween.match(this.patternBetween())) {
            return false;
        }
        if (!hasImpliedEarlierReferenceDate(currentResult) && !hasImpliedLaterReferenceDate(currentResult)) {
            return false;
        }
        return !!nextResult.start.get("day") && !!nextResult.start.get("month") && !!nextResult.start.get("year");
    }
    mergeResults(textBetween, currentResult, nextResult) {
        let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(currentResult.text);
        if (hasImpliedEarlierReferenceDate(currentResult)) {
            timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        }
        const components = _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(new _results_js__WEBPACK_IMPORTED_MODULE_3__.ReferenceWithTimezone(nextResult.start.date()), timeUnits);
        return new _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingResult(nextResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
    }
}
//# sourceMappingURL=ENMergeRelativeFollowByDateRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");

const WEEKDAY_DICTIONARY = {
    "domingo": 0,
    "dom": 0,
    "lunes": 1,
    "lun": 1,
    "martes": 2,
    "mar": 2,
    "miércoles": 3,
    "miercoles": 3,
    "mié": 3,
    "mie": 3,
    "jueves": 4,
    "jue": 4,
    "viernes": 5,
    "vie": 5,
    "sábado": 6,
    "sabado": 6,
    "sáb": 6,
    "sab": 6,
};
const MONTH_DICTIONARY = {
    "enero": 1,
    "ene": 1,
    "ene.": 1,
    "febrero": 2,
    "feb": 2,
    "feb.": 2,
    "marzo": 3,
    "mar": 3,
    "mar.": 3,
    "abril": 4,
    "abr": 4,
    "abr.": 4,
    "mayo": 5,
    "may": 5,
    "may.": 5,
    "junio": 6,
    "jun": 6,
    "jun.": 6,
    "julio": 7,
    "jul": 7,
    "jul.": 7,
    "agosto": 8,
    "ago": 8,
    "ago.": 8,
    "septiembre": 9,
    "setiembre": 9,
    "sep": 9,
    "sep.": 9,
    "octubre": 10,
    "oct": 10,
    "oct.": 10,
    "noviembre": 11,
    "nov": 11,
    "nov.": 11,
    "diciembre": 12,
    "dic": 12,
    "dic.": 12,
};
const INTEGER_WORD_DICTIONARY = {
    "uno": 1,
    "dos": 2,
    "tres": 3,
    "cuatro": 4,
    "cinco": 5,
    "seis": 6,
    "siete": 7,
    "ocho": 8,
    "nueve": 9,
    "diez": 10,
    "once": 11,
    "doce": 12,
    "trece": 13,
};
const TIME_UNIT_DICTIONARY = {
    "sec": "second",
    "segundo": "second",
    "segundos": "second",
    "min": "minute",
    "mins": "minute",
    "minuto": "minute",
    "minutos": "minute",
    "h": "hour",
    "hr": "hour",
    "hrs": "hour",
    "hora": "hour",
    "horas": "hour",
    "día": "d",
    "días": "d",
    "semana": "week",
    "semanas": "week",
    "mes": "month",
    "meses": "month",
    "cuarto": "quarter",
    "cuartos": "quarter",
    "año": "year",
    "años": "year",
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|un?|uno?|una?|algunos?|unos?|demi-?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "un" || num === "una" || num === "uno") {
        return 1;
    }
    else if (num.match(/algunos?/)) {
        return 3;
    }
    else if (num.match(/unos?/)) {
        return 3;
    }
    else if (num.match(/media?/)) {
        return 0.5;
    }
    return parseFloat(num);
}
const YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
function parseYear(match) {
    if (match.match(/^[0-9]{1,4}$/)) {
        let yearNumber = parseInt(match);
        if (yearNumber < 100) {
            if (yearNumber > 50) {
                yearNumber = yearNumber + 1900;
            }
            else {
                yearNumber = yearNumber + 2000;
            }
        }
        return yearNumber;
    }
    if (match.match(/a\.?\s*c\.?/i)) {
        match = match.replace(/a\.?\s*c\.?/i, "");
        return -parseInt(match);
    }
    return parseInt(match);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js");
/* harmony import */ var _parsers_ESWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/ESWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESWeekdayParser.js");
/* harmony import */ var _parsers_ESTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/ESTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESTimeExpressionParser.js");
/* harmony import */ var _refiners_ESMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refiners/ESMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/es/refiners/ESMergeDateTimeRefiner.js");
/* harmony import */ var _refiners_ESMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./refiners/ESMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/es/refiners/ESMergeDateRangeRefiner.js");
/* harmony import */ var _parsers_ESMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/ESMonthNameLittleEndianParser.js */ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESMonthNameLittleEndianParser.js");
/* harmony import */ var _parsers_ESCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ESCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESCasualDateParser.js");
/* harmony import */ var _parsers_ESCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/ESCasualTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESCasualTimeParser.js");
/* harmony import */ var _parsers_ESTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/ESTimeUnitWithinFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESTimeUnitWithinFormatParser.js");















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.push(new _parsers_ESCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    option.parsers.push(new _parsers_ESCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
    return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
    return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_5__.includeCommonConfiguration)({
        parsers: [
            new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](littleEndian),
            new _parsers_ESWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](),
            new _parsers_ESTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](),
            new _parsers_ESMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
            new _parsers_ESTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](),
        ],
        refiners: [new _refiners_ESMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__["default"](), new _refiners_ESMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_12__["default"]()],
    }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESCasualDateParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");


class ESCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(ahora|hoy|mañana|ayer)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "ahora":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.now(context.reference);
            case "hoy":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
            case "mañana":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
            case "ayer":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
        }
        return component;
    }
}
//# sourceMappingURL=ESCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESCasualTimeParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");




class ESCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const component = context.createParsingComponents();
        switch (match[1].toLowerCase()) {
            case "tarde":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "noche":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                component.imply("hour", 22);
                break;
            case "mañana":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "medianoche":
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;
            case "mediodia":
            case "mediodía":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                component.imply("hour", 12);
                break;
        }
        return component;
    }
}
//# sourceMappingURL=ESCasualTimeParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESMonthNameLittleEndianParser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/es/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");





const PATTERN = new RegExp(`([0-9]{1,2})(?:º|ª|°)?` +
    "(?:\\s*(?:desde|de|\\-|\\–|ao?|\\s)\\s*([0-9]{1,2})(?:º|ª|°)?)?\\s*(?:de)?\\s*" +
    `(?:-|/|\\s*(?:de|,)?\\s*)` +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` +
    `(?:\\s*(?:de|,)?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class ESMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = parseInt(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = parseInt(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
//# sourceMappingURL=ESMonthNameLittleEndianParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESTimeExpressionParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js");

class ESTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:l)?|\\?)\\s*";
    }
}
//# sourceMappingURL=ESTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESTimeUnitWithinFormatParser.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/es/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



class ESTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp(`(?:en|por|durante|de|dentro de)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
        return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=ESTimeUnitWithinFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/parsers/ESWeekdayParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/parsers/ESWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/es/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ "./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js");




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:(este|esta|pasado|pr[oó]ximo)\\s*)?" +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(este|esta|pasado|pr[óo]ximo)\\s*semana)?" +
    "(?=\\W|\\d|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class ESWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
        if (weekday === undefined) {
            return null;
        }
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let norm = prefix || postfix || "";
        norm = norm.toLowerCase();
        let modifier = null;
        if (norm == "pasado") {
            modifier = "this";
        }
        else if (norm == "próximo" || norm == "proximo") {
            modifier = "next";
        }
        else if (norm == "este") {
            modifier = "this";
        }
        return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
    }
}
//# sourceMappingURL=ESWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/refiners/ESMergeDateRangeRefiner.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/refiners/ESMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class ESMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(?:-)\s*$/i;
    }
}
//# sourceMappingURL=ESMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/es/refiners/ESMergeDateTimeRefiner.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/es/refiners/ESMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ESMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class ESMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return new RegExp("^\\s*(?:,|de|aslas|a)?\\s*$");
    }
}
//# sourceMappingURL=ESMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");

const WEEKDAY_DICTIONARY = {
    "dimanche": 0,
    "dim": 0,
    "lundi": 1,
    "lun": 1,
    "mardi": 2,
    "mar": 2,
    "mercredi": 3,
    "mer": 3,
    "jeudi": 4,
    "jeu": 4,
    "vendredi": 5,
    "ven": 5,
    "samedi": 6,
    "sam": 6,
};
const MONTH_DICTIONARY = {
    "janvier": 1,
    "jan": 1,
    "jan.": 1,
    "février": 2,
    "fév": 2,
    "fév.": 2,
    "fevrier": 2,
    "fev": 2,
    "fev.": 2,
    "mars": 3,
    "mar": 3,
    "mar.": 3,
    "avril": 4,
    "avr": 4,
    "avr.": 4,
    "mai": 5,
    "juin": 6,
    "jun": 6,
    "juillet": 7,
    "juil": 7,
    "jul": 7,
    "jul.": 7,
    "août": 8,
    "aout": 8,
    "septembre": 9,
    "sep": 9,
    "sep.": 9,
    "sept": 9,
    "sept.": 9,
    "octobre": 10,
    "oct": 10,
    "oct.": 10,
    "novembre": 11,
    "nov": 11,
    "nov.": 11,
    "décembre": 12,
    "decembre": 12,
    "dec": 12,
    "dec.": 12,
};
const INTEGER_WORD_DICTIONARY = {
    "un": 1,
    "deux": 2,
    "trois": 3,
    "quatre": 4,
    "cinq": 5,
    "six": 6,
    "sept": 7,
    "huit": 8,
    "neuf": 9,
    "dix": 10,
    "onze": 11,
    "douze": 12,
    "treize": 13,
};
const TIME_UNIT_DICTIONARY = {
    "sec": "second",
    "seconde": "second",
    "secondes": "second",
    "min": "minute",
    "mins": "minute",
    "minute": "minute",
    "minutes": "minute",
    "h": "hour",
    "hr": "hour",
    "hrs": "hour",
    "heure": "hour",
    "heures": "hour",
    "jour": "d",
    "jours": "d",
    "semaine": "week",
    "semaines": "week",
    "mois": "month",
    "trimestre": "quarter",
    "trimestres": "quarter",
    "ans": "year",
    "année": "year",
    "années": "year",
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|une?\\b|quelques?|demi-?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "une" || num === "un") {
        return 1;
    }
    else if (num.match(/quelques?/)) {
        return 3;
    }
    else if (num.match(/demi-?/)) {
        return 0.5;
    }
    return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:[0-9]{1,2}(?:er)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    num = num.replace(/(?:er)$/i, "");
    return parseInt(num);
}
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:AC|AD|p\\.\\s*C(?:hr?)?\\.\\s*n\\.)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
    if (/AC/i.test(match)) {
        match = match.replace(/BC/i, "");
        return -parseInt(match);
    }
    if (/AD/i.test(match) || /C/i.test(match)) {
        match = match.replace(/[^\d]+/i, "");
        return parseInt(match);
    }
    let yearNumber = parseInt(match);
    if (yearNumber < 100) {
        if (yearNumber > 50) {
            yearNumber = yearNumber + 1900;
        }
        else {
            yearNumber = yearNumber + 2000;
        }
    }
    return yearNumber;
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)("", SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _parsers_FRCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/FRCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRCasualDateParser.js");
/* harmony import */ var _parsers_FRCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/FRCasualTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRCasualTimeParser.js");
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js");
/* harmony import */ var _parsers_FRTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/FRTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeExpressionParser.js");
/* harmony import */ var _refiners_FRMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refiners/FRMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/fr/refiners/FRMergeDateTimeRefiner.js");
/* harmony import */ var _refiners_FRMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./refiners/FRMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/fr/refiners/FRMergeDateRangeRefiner.js");
/* harmony import */ var _parsers_FRWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/FRWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRWeekdayParser.js");
/* harmony import */ var _parsers_FRSpecificTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/FRSpecificTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRSpecificTimeExpressionParser.js");
/* harmony import */ var _parsers_FRMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/FRMonthNameLittleEndianParser.js */ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRMonthNameLittleEndianParser.js");
/* harmony import */ var _parsers_FRTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/FRTimeUnitAgoFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitAgoFormatParser.js");
/* harmony import */ var _parsers_FRTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/FRTimeUnitWithinFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitWithinFormatParser.js");
/* harmony import */ var _parsers_FRTimeUnitRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/FRTimeUnitRelativeFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitRelativeFormatParser.js");


















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new _parsers_FRCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    option.parsers.unshift(new _parsers_FRCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
    option.parsers.unshift(new _parsers_FRTimeUnitRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
    return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
    return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_6__.includeCommonConfiguration)({
        parsers: [
            new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](littleEndian),
            new _parsers_FRMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](),
            new _parsers_FRTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
            new _parsers_FRSpecificTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](),
            new _parsers_FRTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
            new _parsers_FRTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](),
            new _parsers_FRWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](),
        ],
        refiners: [new _refiners_FRMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_14__["default"](), new _refiners_FRMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_15__["default"]()],
    }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRCasualDateParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");





class FRCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "maintenant":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
            case "aujourd'hui":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.today(context.reference);
            case "hier":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.yesterday(context.reference);
            case "demain":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.tomorrow(context.reference);
            default:
                if (lowerText.match(/cette\s*nuit/)) {
                    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
                    component.imply("hour", 22);
                    component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_4__.Meridiem.PM);
                }
                else if (lowerText.match(/la\s*veille/)) {
                    targetDate = targetDate.add(-1, "day");
                    (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
                    component.imply("hour", 0);
                }
        }
        return component;
    }
}
//# sourceMappingURL=FRCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRCasualTimeParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");


class FRCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const suffixLower = match[2].toLowerCase();
        const component = context.createParsingComponents();
        switch (suffixLower) {
            case "après-midi":
            case "aprem":
                component.imply("hour", 14);
                component.imply("minute", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM);
                break;
            case "soir":
                component.imply("hour", 18);
                component.imply("minute", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.PM);
                break;
            case "matin":
                component.imply("hour", 8);
                component.imply("minute", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
                break;
            case "a midi":
                component.imply("hour", 12);
                component.imply("minute", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
                break;
            case "à minuit":
                component.imply("hour", 0);
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_1__.Meridiem.AM);
                break;
        }
        return component;
    }
}
//# sourceMappingURL=FRCasualTimeParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRMonthNameLittleEndianParser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/fr/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");






const PATTERN = new RegExp("(?:on\\s*?)?" +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` +
    `(?:\\s*(?:au|\\-|\\–|jusqu'au?|\\s)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN}))?` +
    `(?:-|/|\\s*(?:de)?\\s*)` +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY)})` +
    `(?:(?:-|/|,?\\s*)(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.YEAR_PATTERN}(?![^\\s]\\d)))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class FRMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseYear)(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
//# sourceMappingURL=FRMonthNameLittleEndianParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRSpecificTimeExpressionParser.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRSpecificTimeExpressionParser.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRSpecificTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");

const FIRST_REG_PATTERN = new RegExp("(^|\\s|T)" +
    "(?:(?:[àa])\\s*)?" +
    "(\\d{1,2})(?:h|:)?" +
    "(?:(\\d{1,2})(?:m|:)?)?" +
    "(?:(\\d{1,2})(?:s|:)?)?" +
    "(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?" +
    "(?=\\W|$)", "i");
const SECOND_REG_PATTERN = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*" +
    "(\\d{1,2})(?:h|:)?" +
    "(?:(\\d{1,2})(?:m|:)?)?" +
    "(?:(\\d{1,2})(?:s|:)?)?" +
    "(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?" +
    "(?=\\W|$)", "i");
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const AM_PM_HOUR_GROUP = 5;
class FRSpecificTimeExpressionParser {
    pattern(context) {
        return FIRST_REG_PATTERN;
    }
    extract(context, match) {
        const result = context.createParsingResult(match.index + match[1].length, match[0].substring(match[1].length));
        if (result.text.match(/^\d{4}$/)) {
            match.index += match[0].length;
            return null;
        }
        result.start = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), match);
        if (!result.start) {
            match.index += match[0].length;
            return null;
        }
        const remainingText = context.text.substring(match.index + match[0].length);
        const secondMatch = SECOND_REG_PATTERN.exec(remainingText);
        if (secondMatch) {
            result.end = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), secondMatch);
            if (result.end) {
                result.text += secondMatch[0];
            }
        }
        return result;
    }
    static extractTimeComponent(extractingComponents, match) {
        let hour = 0;
        let minute = 0;
        let meridiem = null;
        hour = parseInt(match[HOUR_GROUP]);
        if (match[MINUTE_GROUP] != null) {
            minute = parseInt(match[MINUTE_GROUP]);
        }
        if (minute >= 60 || hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                }
            }
            if (ampm == "p") {
                meridiem = _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM;
                if (hour != 12) {
                    hour += 12;
                }
            }
        }
        extractingComponents.assign("hour", hour);
        extractingComponents.assign("minute", minute);
        if (meridiem !== null) {
            extractingComponents.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                extractingComponents.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
            }
            else {
                extractingComponents.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
            }
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            extractingComponents.assign("second", second);
        }
        return extractingComponents;
    }
}
//# sourceMappingURL=FRSpecificTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeExpressionParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js");

class FRTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:[àa])\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*";
    }
    extractPrimaryTimeComponents(context, match) {
        if (match[0].match(/^\s*\d{4}\s*$/)) {
            return null;
        }
        return super.extractPrimaryTimeComponents(context, match);
    }
}
//# sourceMappingURL=FRTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitAgoFormatParser.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/fr/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");




class FRTimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    constructor() {
        super();
    }
    innerPattern() {
        return new RegExp(`il y a\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})(?=(?:\\W|$))`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
        const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
    }
}
//# sourceMappingURL=FRTimeUnitAgoFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitRelativeFormatParser.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitRelativeFormatParser.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/fr/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");





class FRTimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    constructor() {
        super();
    }
    innerPattern() {
        return new RegExp(`(?:les?|la|l'|du|des?)\\s*` +
            `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER_PATTERN})?` +
            `(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?` +
            `\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNIT_DICTIONARY)})` +
            `(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?`, "i");
    }
    innerExtract(context, match) {
        const num = match[1] ? (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseNumberPattern)(match[1]) : 1;
        const unit = _constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNIT_DICTIONARY[match[3].toLowerCase()];
        let timeUnits = {};
        timeUnits[unit] = num;
        let modifier = match[2] || match[4] || "";
        modifier = modifier.toLowerCase();
        if (!modifier) {
            return;
        }
        if (/derni[eè]re?s?/.test(modifier) || /pass[ée]e?s?/.test(modifier) || /pr[ée]c[ée]dents?/.test(modifier)) {
            timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_3__.reverseTimeUnits)(timeUnits);
        }
        return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=FRTimeUnitRelativeFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitWithinFormatParser.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/fr/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



class FRTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp(`(?:dans|en|pour|pendant|de)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
        return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=FRTimeUnitWithinFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRWeekdayParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/parsers/FRWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/fr/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ "./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js");




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:(?:ce)\\s*)?" +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(dernier|prochain)\\s*)?" +
    "(?=\\W|\\d|$)", "i");
const WEEKDAY_GROUP = 1;
const POSTFIX_GROUP = 2;
class FRWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
        if (weekday === undefined) {
            return null;
        }
        let suffix = match[POSTFIX_GROUP];
        suffix = suffix || "";
        suffix = suffix.toLowerCase();
        let modifier = null;
        if (suffix == "dernier") {
            modifier = "last";
        }
        else if (suffix == "prochain") {
            modifier = "next";
        }
        return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
    }
}
//# sourceMappingURL=FRWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/refiners/FRMergeDateRangeRefiner.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/refiners/FRMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class FRMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(à|a|au|-)\s*$/i;
    }
}
//# sourceMappingURL=FRMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/fr/refiners/FRMergeDateTimeRefiner.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/fr/refiners/FRMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FRMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class FRMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return new RegExp("^\\s*(T|à|a|au|vers|de|,|-)?\\s*$");
    }
}
//# sourceMappingURL=FRMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ja/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toHankaku: () => (/* binding */ toHankaku)
/* harmony export */ });
function toHankaku(text) {
    return String(text)
        .replace(/\u2019/g, "\u0027")
        .replace(/\u201D/g, "\u0022")
        .replace(/\u3000/g, "\u0020")
        .replace(/\uFFE5/g, "\u00A5")
        .replace(/[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g, alphaNum);
}
function alphaNum(token) {
    return String.fromCharCode(token.charCodeAt(0) - 65248);
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ja/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _parsers_JPStandardParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/JPStandardParser.js */ "./node_modules/chrono-node/dist/esm/locales/ja/parsers/JPStandardParser.js");
/* harmony import */ var _refiners_JPMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refiners/JPMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/ja/refiners/JPMergeDateRangeRefiner.js");
/* harmony import */ var _parsers_JPCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/JPCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/ja/parsers/JPCasualDateParser.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");








const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration());
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration() {
    const option = createConfiguration();
    option.parsers.unshift(new _parsers_JPCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    return option;
}
function createConfiguration() {
    return {
        parsers: [new _parsers_JPStandardParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]()],
        refiners: [new _refiners_JPMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_5__["default"]()],
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ja/parsers/JPCasualDateParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/parsers/JPCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JPCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");



const PATTERN = /今日|きょう|当日|とうじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;
function normalizeTextToKanji(text) {
    switch (text) {
        case "きょう":
            return "今日";
        case "とうじつ":
            return "当日";
        case "きのう":
            return "昨日";
        case "あした":
            return "明日";
        case "こんや":
            return "今夜";
        case "こんゆう":
            return "今夕";
        case "こんばん":
            return "今晩";
        case "けさ":
            return "今朝";
        default:
            return text;
    }
}
class JPCasualDateParser {
    pattern() {
        return PATTERN;
    }
    extract(context, match) {
        const text = normalizeTextToKanji(match[0]);
        const date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const components = context.createParsingComponents();
        switch (text) {
            case "昨日":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
            case "明日":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
            case "今日":
            case "当日":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
        }
        if (text == "今夜" || text == "今夕" || text == "今晩") {
            components.imply("hour", 22);
            components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
        }
        else if (text.match("今朝")) {
            components.imply("hour", 6);
            components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
        }
        components.assign("day", date.date());
        components.assign("month", date.month() + 1);
        components.assign("year", date.year());
        return components;
    }
}
//# sourceMappingURL=JPCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ja/parsers/JPStandardParser.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/parsers/JPStandardParser.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JPStandardParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ja/constants.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");



const PATTERN = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
const SPECIAL_YEAR_GROUP = 1;
const TYPICAL_YEAR_GROUP = 2;
const ERA_GROUP = 3;
const YEAR_NUMBER_GROUP = 4;
const MONTH_GROUP = 5;
const DAY_GROUP = 6;
class JPStandardParser {
    pattern() {
        return PATTERN;
    }
    extract(context, match) {
        const month = parseInt((0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.toHankaku)(match[MONTH_GROUP]));
        const day = parseInt((0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.toHankaku)(match[DAY_GROUP]));
        const components = context.createParsingComponents({
            day: day,
            month: month,
        });
        if (match[SPECIAL_YEAR_GROUP] && match[SPECIAL_YEAR_GROUP].match("同|今|本")) {
            const moment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
            components.assign("year", moment.year());
        }
        if (match[TYPICAL_YEAR_GROUP]) {
            const yearNumText = match[YEAR_NUMBER_GROUP];
            let year = yearNumText == "元" ? 1 : parseInt((0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.toHankaku)(yearNumText));
            if (match[ERA_GROUP] == "令和") {
                year += 2018;
            }
            else if (match[ERA_GROUP] == "平成") {
                year += 1988;
            }
            else if (match[ERA_GROUP] == "昭和") {
                year += 1925;
            }
            components.assign("year", year);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_2__.findYearClosestToRef)(context.refDate, day, month);
            components.imply("year", year);
        }
        return components;
    }
}
//# sourceMappingURL=JPStandardParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ja/refiners/JPMergeDateRangeRefiner.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ja/refiners/JPMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JPMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class JPMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(から|ー|-)\s*$/i;
    }
}
//# sourceMappingURL=JPMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   ORDINAL_WORD_DICTIONARY: () => (/* binding */ ORDINAL_WORD_DICTIONARY),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");


const WEEKDAY_DICTIONARY = {
    zondag: 0,
    zon: 0,
    "zon.": 0,
    zo: 0,
    "zo.": 0,
    maandag: 1,
    ma: 1,
    "ma.": 1,
    dinsdag: 2,
    din: 2,
    "din.": 2,
    di: 2,
    "di.": 2,
    woensdag: 3,
    woe: 3,
    "woe.": 3,
    wo: 3,
    "wo.": 3,
    donderdag: 4,
    dond: 4,
    "dond.": 4,
    do: 4,
    "do.": 4,
    vrijdag: 5,
    vrij: 5,
    "vrij.": 5,
    vr: 5,
    "vr.": 5,
    zaterdag: 6,
    zat: 6,
    "zat.": 6,
    "za": 6,
    "za.": 6,
};
const MONTH_DICTIONARY = {
    januari: 1,
    jan: 1,
    "jan.": 1,
    februari: 2,
    feb: 2,
    "feb.": 2,
    maart: 3,
    mar: 3,
    "mar.": 3,
    mrt: 3,
    "mrt.": 3,
    april: 4,
    apr: 4,
    "apr.": 4,
    mei: 5,
    juni: 6,
    jun: 6,
    "jun.": 6,
    juli: 7,
    jul: 7,
    "jul.": 7,
    augustus: 8,
    aug: 8,
    "aug.": 8,
    september: 9,
    sep: 9,
    "sep.": 9,
    sept: 9,
    "sept.": 9,
    oktober: 10,
    okt: 10,
    "okt.": 10,
    november: 11,
    nov: 11,
    "nov.": 11,
    december: 12,
    dec: 12,
    "dec.": 12,
};
const INTEGER_WORD_DICTIONARY = {
    een: 1,
    twee: 2,
    drie: 3,
    vier: 4,
    vijf: 5,
    zes: 6,
    zeven: 7,
    acht: 8,
    negen: 9,
    tien: 10,
    elf: 11,
    twaalf: 12,
};
const ORDINAL_WORD_DICTIONARY = {
    eerste: 1,
    tweede: 2,
    derde: 3,
    vierde: 4,
    vijfde: 5,
    zesde: 6,
    zevende: 7,
    achtste: 8,
    negende: 9,
    tiende: 10,
    elfde: 11,
    twaalfde: 12,
    dertiende: 13,
    veertiende: 14,
    vijftiende: 15,
    zestiende: 16,
    zeventiende: 17,
    achttiende: 18,
    negentiende: 19,
    twintigste: 20,
    "eenentwintigste": 21,
    "tweeëntwintigste": 22,
    "drieentwintigste": 23,
    "vierentwintigste": 24,
    "vijfentwintigste": 25,
    "zesentwintigste": 26,
    "zevenentwintigste": 27,
    "achtentwintig": 28,
    "negenentwintig": 29,
    "dertigste": 30,
    "eenendertigste": 31,
};
const TIME_UNIT_DICTIONARY = {
    sec: "second",
    second: "second",
    seconden: "second",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minuut: "minute",
    minuten: "minute",
    minuutje: "minute",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    uur: "hour",
    u: "hour",
    uren: "hour",
    dag: "d",
    dagen: "d",
    week: "week",
    weken: "week",
    maand: "month",
    maanden: "month",
    jaar: "year",
    jr: "year",
    jaren: "year",
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+[\\.,][0-9]+|halve?|half|paar)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "paar") {
        return 2;
    }
    else if (num === "half" || num.match(/halve?/)) {
        return 0.5;
    }
    return parseFloat(num.replace(",", "."));
}
const ORDINAL_NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:ste|de)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return ORDINAL_WORD_DICTIONARY[num];
    }
    num = num.replace(/(?:ste|de)$/i, "");
    return parseInt(num);
}
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear(match) {
    if (/voor Christus/i.test(match)) {
        match = match.replace(/voor Christus/i, "");
        return -parseInt(match);
    }
    if (/na Christus/i.test(match)) {
        match = match.replace(/na Christus/i, "");
        return parseInt(match);
    }
    const rawYearNumber = parseInt(match);
    return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,5}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:binnen|in)\\s*)?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length);
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _refiners_NLMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./refiners/NLMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/nl/refiners/NLMergeDateRangeRefiner.js");
/* harmony import */ var _refiners_NLMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./refiners/NLMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/nl/refiners/NLMergeDateTimeRefiner.js");
/* harmony import */ var _parsers_NLCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/NLCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualDateParser.js");
/* harmony import */ var _parsers_NLCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/NLCasualTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualTimeParser.js");
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js");
/* harmony import */ var _parsers_NLTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/NLTimeUnitWithinFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitWithinFormatParser.js");
/* harmony import */ var _parsers_NLWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/NLWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLWeekdayParser.js");
/* harmony import */ var _parsers_NLMonthNameMiddleEndianParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/NLMonthNameMiddleEndianParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLMonthNameMiddleEndianParser.js");
/* harmony import */ var _parsers_NLMonthNameParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/NLMonthNameParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLMonthNameParser.js");
/* harmony import */ var _parsers_NLSlashMonthFormatParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/NLSlashMonthFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLSlashMonthFormatParser.js");
/* harmony import */ var _parsers_NLTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parsers/NLTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeExpressionParser.js");
/* harmony import */ var _parsers_NLCasualYearMonthDayParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/NLCasualYearMonthDayParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualYearMonthDayParser.js");
/* harmony import */ var _parsers_NLCasualDateTimeParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/NLCasualDateTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualDateTimeParser.js");
/* harmony import */ var _parsers_NLTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/NLTimeUnitCasualRelativeFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitCasualRelativeFormatParser.js");
/* harmony import */ var _parsers_NLRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/NLRelativeDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLRelativeDateFormatParser.js");
/* harmony import */ var _parsers_NLTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./parsers/NLTimeUnitAgoFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitAgoFormatParser.js");
/* harmony import */ var _parsers_NLTimeUnitLaterFormatParser_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parsers/NLTimeUnitLaterFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitLaterFormatParser.js");























const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.unshift(new _parsers_NLCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    option.parsers.unshift(new _parsers_NLCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
    option.parsers.unshift(new _parsers_NLCasualDateTimeParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
    option.parsers.unshift(new _parsers_NLMonthNameParser_js__WEBPACK_IMPORTED_MODULE_6__["default"]());
    option.parsers.unshift(new _parsers_NLRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"]());
    option.parsers.unshift(new _parsers_NLTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_8__["default"]());
    return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
    return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_9__.includeCommonConfiguration)({
        parsers: [
            new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](littleEndian),
            new _parsers_NLTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
            new _parsers_NLMonthNameMiddleEndianParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](),
            new _parsers_NLMonthNameParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](),
            new _parsers_NLWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](),
            new _parsers_NLCasualYearMonthDayParser_js__WEBPACK_IMPORTED_MODULE_14__["default"](),
            new _parsers_NLSlashMonthFormatParser_js__WEBPACK_IMPORTED_MODULE_15__["default"](),
            new _parsers_NLTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_16__["default"](strictMode),
            new _parsers_NLTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_17__["default"](strictMode),
            new _parsers_NLTimeUnitLaterFormatParser_js__WEBPACK_IMPORTED_MODULE_18__["default"](strictMode),
        ],
        refiners: [new _refiners_NLMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_19__["default"](), new _refiners_NLMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_20__["default"]()],
    }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualDateParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");


class NLCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "nu":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.now(context.reference);
            case "vandaag":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
            case "morgen":
            case "morgend":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
            case "gisteren":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
        }
        return component;
    }
}
//# sourceMappingURL=NLCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualDateTimeParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualDateTimeParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLCasualDateTimeParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");




const DATE_GROUP = 1;
const TIME_OF_DAY_GROUP = 2;
class NLCasualDateTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const dateText = match[DATE_GROUP].toLowerCase();
        const timeText = match[TIME_OF_DAY_GROUP].toLowerCase();
        const component = context.createParsingComponents();
        const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        switch (dateText) {
            case "gisteren":
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate.add(-1, "day"));
                break;
            case "van":
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignSimilarDate)(component, targetDate);
                break;
            case "morgen":
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_2__.assignTheNextDay)(component, targetDate);
                break;
        }
        switch (timeText) {
            case "ochtend":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "middag":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.AM);
                component.imply("hour", 12);
                break;
            case "namiddag":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "avond":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_3__.Meridiem.PM);
                component.imply("hour", 20);
                break;
        }
        return component;
    }
}
//# sourceMappingURL=NLCasualDateTimeParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualTimeParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");




const DAY_GROUP = 1;
const MOMENT_GROUP = 2;
class NLCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const component = context.createParsingComponents();
        if (match[DAY_GROUP] === "deze") {
            component.assign("day", context.refDate.getDate());
            component.assign("month", context.refDate.getMonth() + 1);
            component.assign("year", context.refDate.getFullYear());
        }
        switch (match[MOMENT_GROUP].toLowerCase()) {
            case "namiddag":
            case "'s namiddags":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "avond":
            case "'s avonds'":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                component.imply("hour", 20);
                break;
            case "middernacht":
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;
            case "ochtend":
            case "'s ochtends":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "middag":
            case "'s middags":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                component.imply("hour", 12);
                break;
        }
        return component;
    }
}
//# sourceMappingURL=NLCasualTimeParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualYearMonthDayParser.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLCasualYearMonthDayParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLCasualYearMonthDayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



const PATTERN = new RegExp(`([0-9]{4})[\\.\\/\\s]` +
    `(?:(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})|([0-9]{1,2}))[\\.\\/\\s]` +
    `([0-9]{1,2})` +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NAME_GROUP = 2;
const MONTH_NUMBER_GROUP = 3;
const DATE_NUMBER_GROUP = 4;
class NLCasualYearMonthDayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = match[MONTH_NUMBER_GROUP]
            ? parseInt(match[MONTH_NUMBER_GROUP])
            : _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        if (month < 1 || month > 12) {
            return null;
        }
        const year = parseInt(match[YEAR_NUMBER_GROUP]);
        const day = parseInt(match[DATE_NUMBER_GROUP]);
        return {
            day: day,
            month: month,
            year: year,
        };
    }
}
//# sourceMappingURL=NLCasualYearMonthDayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLMonthNameMiddleEndianParser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLMonthNameMiddleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLMonthNameMiddleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");






const PATTERN = new RegExp("(?:on\\s*?)?" +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` +
    "(?:\\s*" +
    "(?:tot|\\-|\\–|until|through|till|\\s)\\s*" +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.ORDINAL_NUMBER_PATTERN})` +
    ")?" +
    "(?:-|/|\\s*(?:of)?\\s*)" +
    "(" +
    (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY) +
    ")" +
    "(?:" +
    "(?:-|/|,?\\s*)" +
    `(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.YEAR_PATTERN}(?![^\\s]\\d))` +
    ")?" +
    "(?=\\W|$)", "i");
const MONTH_NAME_GROUP = 3;
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const YEAR_GROUP = 4;
class NLMonthNameMiddleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_0__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        const components = context.createParsingComponents({
            day: day,
            month: month,
        });
        if (match[YEAR_GROUP]) {
            const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseYear)(match[YEAR_GROUP]);
            components.assign("year", year);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
            components.imply("year", year);
        }
        if (!match[DATE_TO_GROUP]) {
            return components;
        }
        const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
        const result = context.createParsingResult(match.index, match[0]);
        result.start = components;
        result.end = components.clone();
        result.end.assign("day", endDate);
        return result;
    }
}
//# sourceMappingURL=NLMonthNameMiddleEndianParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLMonthNameParser.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLMonthNameParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLMonthNameParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");





const PATTERN = new RegExp(`(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` +
    `\\s*` +
    `(?:` +
    `[,-]?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN})?` +
    ")?" +
    "(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
const MONTH_NAME_GROUP = 1;
const YEAR_GROUP = 2;
class NLMonthNameParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const components = context.createParsingComponents();
        components.imply("day", 1);
        const monthName = match[MONTH_NAME_GROUP];
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[monthName.toLowerCase()];
        components.assign("month", month);
        if (match[YEAR_GROUP]) {
            const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
            components.assign("year", year);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, 1, month);
            components.imply("year", year);
        }
        return components;
    }
}
//# sourceMappingURL=NLMonthNameParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLRelativeDateFormatParser.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLRelativeDateFormatParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLRelativeDateFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");





const PATTERN = new RegExp(`(dit|deze|(?:aan)?komend|volgend|afgelopen|vorig)e?\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.TIME_UNIT_DICTIONARY)})(?=\\s*)` +
    "(?=\\W|$)", "i");
const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class NLRelativeDateFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_3__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
        const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
        const timeunit = _constants_js__WEBPACK_IMPORTED_MODULE_2__.TIME_UNIT_DICTIONARY[unitWord];
        if (modifier == "volgend" || modifier == "komend" || modifier == "aankomend") {
            const timeUnits = {};
            timeUnits[timeunit] = 1;
            return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        if (modifier == "afgelopen" || modifier == "vorig") {
            const timeUnits = {};
            timeUnits[timeunit] = -1;
            return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        const components = context.createParsingComponents();
        let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
        if (unitWord.match(/week/i)) {
            date = date.add(-date.get("d"), "d");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.imply("year", date.year());
        }
        else if (unitWord.match(/maand/i)) {
            date = date.add(-date.date() + 1, "d");
            components.imply("day", date.date());
            components.assign("year", date.year());
            components.assign("month", date.month() + 1);
        }
        else if (unitWord.match(/jaar/i)) {
            date = date.add(-date.date() + 1, "d");
            date = date.add(-date.month(), "month");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.assign("year", date.year());
        }
        return components;
    }
}
//# sourceMappingURL=NLRelativeDateFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLSlashMonthFormatParser.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLSlashMonthFormatParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLSlashMonthFormatParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");

const PATTERN = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})" + "", "i");
const MONTH_GROUP = 1;
const YEAR_GROUP = 2;
class NLSlashMonthFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const year = parseInt(match[YEAR_GROUP]);
        const month = parseInt(match[MONTH_GROUP]);
        return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
    }
}
//# sourceMappingURL=NLSlashMonthFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeExpressionParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js");

class NLTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:om)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|om|\\?)\\s*";
    }
    primarySuffix() {
        return "(?:\\s*(?:uur))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(context, match) {
        if (match[0].match(/^\s*\d{4}\s*$/)) {
            return null;
        }
        return super.extractPrimaryTimeComponents(context, match);
    }
}
//# sourceMappingURL=NLTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitAgoFormatParser.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");




const PATTERN = new RegExp("" + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN + ")" + "(?:geleden|voor|eerder)(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp("" + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN + ")" + "geleden(?=(?:\\W|$))", "i");
class NLTimeUnitAgoFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN : PATTERN;
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
        const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
    }
}
//# sourceMappingURL=NLTimeUnitAgoFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitCasualRelativeFormatParser.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitCasualRelativeFormatParser.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeUnitCasualRelativeFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");




const PATTERN = new RegExp(`(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PREFIX_WORD_GROUP = 1;
const TIME_UNIT_WORD_GROUP = 2;
class NLTimeUnitCasualRelativeFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const prefix = match[PREFIX_WORD_GROUP].toLowerCase();
        let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[TIME_UNIT_WORD_GROUP]);
        switch (prefix) {
            case "vorig":
            case "afgelopen":
            case "-":
                timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
                break;
        }
        return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=NLTimeUnitCasualRelativeFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitLaterFormatParser.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitLaterFormatParser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeUnitLaterFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



const PATTERN = new RegExp("" + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN + ")" + "(later|na|vanaf nu|voortaan|vooruit|uit)" + "(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp("" + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN + ")" + "(later|vanaf nu)" + "(?=(?:\\W|$))", "i");
const GROUP_NUM_TIMEUNITS = 1;
class NLTimeUnitLaterFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN : PATTERN;
    }
    innerExtract(context, match) {
        const fragments = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[GROUP_NUM_TIMEUNITS]);
        return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, fragments);
    }
}
//# sourceMappingURL=NLTimeUnitLaterFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitWithinFormatParser.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



class NLTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp(`(?:binnen|in|binnen de|voor)\\s*` + "(" + _constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN + ")" + `(?=\\W|$)`, "i");
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
        return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=NLTimeUnitWithinFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLWeekdayParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/parsers/NLWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLWeekdayParser)
/* harmony export */ });
/* harmony import */ var _nl_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nl/constants.js */ "./node_modules/chrono-node/dist/esm/locales/nl/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ "./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js");




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:op\\s*?)?" +
    "(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?" +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_nl_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class NLWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const weekday = _nl_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord == "vorige") {
            modifier = "last";
        }
        else if (modifierWord == "volgende") {
            modifier = "next";
        }
        else if (modifierWord == "deze") {
            modifier = "this";
        }
        return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
    }
}
//# sourceMappingURL=NLWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/refiners/NLMergeDateRangeRefiner.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/refiners/NLMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class NLMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(tot|-)\s*$/i;
    }
}
//# sourceMappingURL=NLMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/nl/refiners/NLMergeDateTimeRefiner.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/nl/refiners/NLMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NLMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class NLMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return new RegExp("^\\s*(om|na|voor|in de|,|-)?\\s*$");
    }
}
//# sourceMappingURL=NLMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/pt/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
const WEEKDAY_DICTIONARY = {
    "domingo": 0,
    "dom": 0,
    "segunda": 1,
    "segunda-feira": 1,
    "seg": 1,
    "terça": 2,
    "terça-feira": 2,
    "ter": 2,
    "quarta": 3,
    "quarta-feira": 3,
    "qua": 3,
    "quinta": 4,
    "quinta-feira": 4,
    "qui": 4,
    "sexta": 5,
    "sexta-feira": 5,
    "sex": 5,
    "sábado": 6,
    "sabado": 6,
    "sab": 6,
};
const MONTH_DICTIONARY = {
    "janeiro": 1,
    "jan": 1,
    "jan.": 1,
    "fevereiro": 2,
    "fev": 2,
    "fev.": 2,
    "março": 3,
    "mar": 3,
    "mar.": 3,
    "abril": 4,
    "abr": 4,
    "abr.": 4,
    "maio": 5,
    "mai": 5,
    "mai.": 5,
    "junho": 6,
    "jun": 6,
    "jun.": 6,
    "julho": 7,
    "jul": 7,
    "jul.": 7,
    "agosto": 8,
    "ago": 8,
    "ago.": 8,
    "setembro": 9,
    "set": 9,
    "set.": 9,
    "outubro": 10,
    "out": 10,
    "out.": 10,
    "novembro": 11,
    "nov": 11,
    "nov.": 11,
    "dezembro": 12,
    "dez": 12,
    "dez.": 12,
};
const YEAR_PATTERN = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
function parseYear(match) {
    if (match.match(/^[0-9]{1,4}$/)) {
        let yearNumber = parseInt(match);
        if (yearNumber < 100) {
            if (yearNumber > 50) {
                yearNumber = yearNumber + 1900;
            }
            else {
                yearNumber = yearNumber + 2000;
            }
        }
        return yearNumber;
    }
    if (match.match(/a\.?\s*c\.?/i)) {
        match = match.replace(/a\.?\s*c\.?/i, "");
        return -parseInt(match);
    }
    return parseInt(match);
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/pt/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js");
/* harmony import */ var _parsers_PTWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/PTWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTWeekdayParser.js");
/* harmony import */ var _parsers_PTTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/PTTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTTimeExpressionParser.js");
/* harmony import */ var _refiners_PTMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./refiners/PTMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/pt/refiners/PTMergeDateTimeRefiner.js");
/* harmony import */ var _refiners_PTMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refiners/PTMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/pt/refiners/PTMergeDateRangeRefiner.js");
/* harmony import */ var _parsers_PTMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/PTMonthNameLittleEndianParser.js */ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTMonthNameLittleEndianParser.js");
/* harmony import */ var _parsers_PTCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/PTCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTCasualDateParser.js");
/* harmony import */ var _parsers_PTCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/PTCasualTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTCasualTimeParser.js");














const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration(littleEndian = true) {
    const option = createConfiguration(false, littleEndian);
    option.parsers.push(new _parsers_PTCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    option.parsers.push(new _parsers_PTCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
    return option;
}
function createConfiguration(strictMode = true, littleEndian = true) {
    return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_5__.includeCommonConfiguration)({
        parsers: [
            new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](littleEndian),
            new _parsers_PTWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](),
            new _parsers_PTTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](),
            new _parsers_PTMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
        ],
        refiners: [new _refiners_PTMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _refiners_PTMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_11__["default"]()],
    }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTCasualDateParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");


class PTCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "agora":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.now(context.reference);
            case "hoje":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
            case "amanha":
            case "amanhã":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
            case "ontem":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
        }
        return component;
    }
}
//# sourceMappingURL=PTCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTCasualTimeParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");




class PTCasualTimeParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(?:esta\s*)?(manha|manhã|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
    }
    innerExtract(context, match) {
        const targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const component = context.createParsingComponents();
        switch (match[1].toLowerCase()) {
            case "tarde":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                component.imply("hour", 15);
                break;
            case "noite":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                component.imply("hour", 22);
                break;
            case "manha":
            case "manhã":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                component.imply("hour", 6);
                break;
            case "meia-noite":
                (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignTheNextDay)(component, targetDate);
                component.imply("hour", 0);
                component.imply("minute", 0);
                component.imply("second", 0);
                break;
            case "meio-dia":
                component.imply("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                component.imply("hour", 12);
                break;
        }
        return component;
    }
}
//# sourceMappingURL=PTCasualTimeParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTMonthNameLittleEndianParser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/pt/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");





const PATTERN = new RegExp(`([0-9]{1,2})(?:º|ª|°)?` +
    "(?:\\s*(?:desde|de|\\-|\\–|ao?|\\s)\\s*([0-9]{1,2})(?:º|ª|°)?)?\\s*(?:de)?\\s*" +
    `(?:-|/|\\s*(?:de|,)?\\s*)` +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` +
    `(?:\\s*(?:de|,)?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}))?` +
    `(?=\\W|$)`, "i");
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class PTMonthNameLittleEndianParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = parseInt(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = parseInt(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
//# sourceMappingURL=PTMonthNameLittleEndianParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTTimeExpressionParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js");

class PTTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:ao?|às?|das|da|de|do)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:o)?|\\?)\\s*";
    }
}
//# sourceMappingURL=PTTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTWeekdayParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/parsers/PTWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/pt/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ "./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js");




const PATTERN = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:(este|esta|passado|pr[oó]ximo)\\s*)?" +
    `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY)})` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(este|esta|passado|pr[óo]ximo)\\s*semana)?" +
    "(?=\\W|\\d|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class PTWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_DICTIONARY[dayOfWeek];
        if (weekday === undefined) {
            return null;
        }
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let norm = prefix || postfix || "";
        norm = norm.toLowerCase();
        let modifier = null;
        if (norm == "passado") {
            modifier = "this";
        }
        else if (norm == "próximo" || norm == "proximo") {
            modifier = "next";
        }
        else if (norm == "este") {
            modifier = "this";
        }
        return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
    }
}
//# sourceMappingURL=PTWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/pt/refiners/PTMergeDateRangeRefiner.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/refiners/PTMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class PTMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(?:-)\s*$/i;
    }
}
//# sourceMappingURL=PTMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/pt/refiners/PTMergeDateTimeRefiner.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/pt/refiners/PTMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PTMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class PTMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return new RegExp("^\\s*(?:,|à)?\\s*$");
    }
}
//# sourceMappingURL=PTMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FULL_MONTH_NAME_DICTIONARY: () => (/* binding */ FULL_MONTH_NAME_DICTIONARY),
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   ORDINAL_WORD_DICTIONARY: () => (/* binding */ ORDINAL_WORD_DICTIONARY),
/* harmony export */   REGEX_PARTS: () => (/* binding */ REGEX_PARTS),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYear: () => (/* binding */ parseYear)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");


const REGEX_PARTS = {
    leftBoundary: "([^\\p{L}\\p{N}_]|^)",
    rightBoundary: "(?=[^\\p{L}\\p{N}_]|$)",
    flags: "iu",
};
const WEEKDAY_DICTIONARY = {
    воскресенье: 0,
    воскресенья: 0,
    вск: 0,
    "вск.": 0,
    понедельник: 1,
    понедельника: 1,
    пн: 1,
    "пн.": 1,
    вторник: 2,
    вторника: 2,
    вт: 2,
    "вт.": 2,
    среда: 3,
    среды: 3,
    среду: 3,
    ср: 3,
    "ср.": 3,
    четверг: 4,
    четверга: 4,
    чт: 4,
    "чт.": 4,
    пятница: 5,
    пятницу: 5,
    пятницы: 5,
    пт: 5,
    "пт.": 5,
    суббота: 6,
    субботу: 6,
    субботы: 6,
    сб: 6,
    "сб.": 6,
};
const FULL_MONTH_NAME_DICTIONARY = {
    январь: 1,
    января: 1,
    январе: 1,
    февраль: 2,
    февраля: 2,
    феврале: 2,
    март: 3,
    марта: 3,
    марте: 3,
    апрель: 4,
    апреля: 4,
    апреле: 4,
    май: 5,
    мая: 5,
    мае: 5,
    июнь: 6,
    июня: 6,
    июне: 6,
    июль: 7,
    июля: 7,
    июле: 7,
    август: 8,
    августа: 8,
    августе: 8,
    сентябрь: 9,
    сентября: 9,
    сентябре: 9,
    октябрь: 10,
    октября: 10,
    октябре: 10,
    ноябрь: 11,
    ноября: 11,
    ноябре: 11,
    декабрь: 12,
    декабря: 12,
    декабре: 12,
};
const MONTH_DICTIONARY = {
    ...FULL_MONTH_NAME_DICTIONARY,
    янв: 1,
    "янв.": 1,
    фев: 2,
    "фев.": 2,
    мар: 3,
    "мар.": 3,
    апр: 4,
    "апр.": 4,
    авг: 8,
    "авг.": 8,
    сен: 9,
    "сен.": 9,
    окт: 10,
    "окт.": 10,
    ноя: 11,
    "ноя.": 11,
    дек: 12,
    "дек.": 12,
};
const INTEGER_WORD_DICTIONARY = {
    один: 1,
    одна: 1,
    одной: 1,
    одну: 1,
    две: 2,
    два: 2,
    двух: 2,
    три: 3,
    трех: 3,
    трёх: 3,
    четыре: 4,
    четырех: 4,
    четырёх: 4,
    пять: 5,
    пяти: 5,
    шесть: 6,
    шести: 6,
    семь: 7,
    семи: 7,
    восемь: 8,
    восьми: 8,
    девять: 9,
    девяти: 9,
    десять: 10,
    десяти: 10,
    одиннадцать: 11,
    одиннадцати: 11,
    двенадцать: 12,
    двенадцати: 12,
};
const ORDINAL_WORD_DICTIONARY = {
    первое: 1,
    первого: 1,
    второе: 2,
    второго: 2,
    третье: 3,
    третьего: 3,
    четвертое: 4,
    четвертого: 4,
    пятое: 5,
    пятого: 5,
    шестое: 6,
    шестого: 6,
    седьмое: 7,
    седьмого: 7,
    восьмое: 8,
    восьмого: 8,
    девятое: 9,
    девятого: 9,
    десятое: 10,
    десятого: 10,
    одиннадцатое: 11,
    одиннадцатого: 11,
    двенадцатое: 12,
    двенадцатого: 12,
    тринадцатое: 13,
    тринадцатого: 13,
    четырнадцатое: 14,
    четырнадцатого: 14,
    пятнадцатое: 15,
    пятнадцатого: 15,
    шестнадцатое: 16,
    шестнадцатого: 16,
    семнадцатое: 17,
    семнадцатого: 17,
    восемнадцатое: 18,
    восемнадцатого: 18,
    девятнадцатое: 19,
    девятнадцатого: 19,
    двадцатое: 20,
    двадцатого: 20,
    "двадцать первое": 21,
    "двадцать первого": 21,
    "двадцать второе": 22,
    "двадцать второго": 22,
    "двадцать третье": 23,
    "двадцать третьего": 23,
    "двадцать четвертое": 24,
    "двадцать четвертого": 24,
    "двадцать пятое": 25,
    "двадцать пятого": 25,
    "двадцать шестое": 26,
    "двадцать шестого": 26,
    "двадцать седьмое": 27,
    "двадцать седьмого": 27,
    "двадцать восьмое": 28,
    "двадцать восьмого": 28,
    "двадцать девятое": 29,
    "двадцать девятого": 29,
    "тридцатое": 30,
    "тридцатого": 30,
    "тридцать первое": 31,
    "тридцать первого": 31,
};
const TIME_UNIT_DICTIONARY = {
    сек: "second",
    секунда: "second",
    секунд: "second",
    секунды: "second",
    секунду: "second",
    секундочка: "second",
    секундочки: "second",
    секундочек: "second",
    секундочку: "second",
    мин: "minute",
    минута: "minute",
    минут: "minute",
    минуты: "minute",
    минуту: "minute",
    минуток: "minute",
    минутки: "minute",
    минутку: "minute",
    минуточек: "minute",
    минуточки: "minute",
    минуточку: "minute",
    час: "hour",
    часов: "hour",
    часа: "hour",
    часу: "hour",
    часиков: "hour",
    часика: "hour",
    часике: "hour",
    часик: "hour",
    день: "d",
    дня: "d",
    дней: "d",
    суток: "d",
    сутки: "d",
    неделя: "week",
    неделе: "week",
    недели: "week",
    неделю: "week",
    недель: "week",
    недельке: "week",
    недельки: "week",
    неделек: "week",
    месяц: "month",
    месяце: "month",
    месяцев: "month",
    месяца: "month",
    квартал: "quarter",
    квартале: "quarter",
    кварталов: "quarter",
    год: "year",
    года: "year",
    году: "year",
    годов: "year",
    лет: "year",
    годик: "year",
    годика: "year",
    годиков: "year",
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|пол|несколько|пар(?:ы|у)|\\s{0,3})`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return INTEGER_WORD_DICTIONARY[num];
    }
    if (num.match(/несколько/)) {
        return 3;
    }
    else if (num.match(/пол/)) {
        return 0.5;
    }
    else if (num.match(/пар/)) {
        return 2;
    }
    else if (num === "") {
        return 1;
    }
    return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:го|ого|е|ое)?)`;
function parseOrdinalNumberPattern(match) {
    const num = match.toLowerCase();
    if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return ORDINAL_WORD_DICTIONARY[num];
    }
    return parseInt(num);
}
const year = "(?:\\s+(?:году|года|год|г|г.))?";
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}${year}\\s*(?:н.э.|до н.э.|н. э.|до н. э.)|[1-2][0-9]{3}${year}|[5-9][0-9]${year})`;
function parseYear(match) {
    if (/(год|года|г|г.)/i.test(match)) {
        match = match.replace(/(год|года|г|г.)/i, "");
    }
    if (/(до н.э.|до н. э.)/i.test(match)) {
        match = match.replace(/(до н.э.|до н. э.)/i, "");
        return -parseInt(match);
    }
    if (/(н. э.|н.э.)/i.test(match)) {
        match = match.replace(/(н. э.|н.э.)/i, "");
        return parseInt(match);
    }
    const rawYearNumber = parseInt(match);
    return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:около|примерно)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length).trim();
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _parsers_RUTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parsers/RUTimeUnitWithinFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitWithinFormatParser.js");
/* harmony import */ var _parsers_RUMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/RUMonthNameLittleEndianParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUMonthNameLittleEndianParser.js");
/* harmony import */ var _parsers_RUMonthNameParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/RUMonthNameParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUMonthNameParser.js");
/* harmony import */ var _parsers_RUTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/RUTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeExpressionParser.js");
/* harmony import */ var _parsers_RUTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/RUTimeUnitAgoFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitAgoFormatParser.js");
/* harmony import */ var _refiners_RUMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refiners/RUMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/ru/refiners/RUMergeDateRangeRefiner.js");
/* harmony import */ var _refiners_RUMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./refiners/RUMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/ru/refiners/RUMergeDateTimeRefiner.js");
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _parsers_RUCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/RUCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUCasualDateParser.js");
/* harmony import */ var _parsers_RUCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/RUCasualTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUCasualTimeParser.js");
/* harmony import */ var _parsers_RUWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/RUWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUWeekdayParser.js");
/* harmony import */ var _parsers_RURelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/RURelativeDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RURelativeDateFormatParser.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js");
/* harmony import */ var _parsers_RUTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/RUTimeUnitCasualRelativeFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitCasualRelativeFormatParser.js");



















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration() {
    const option = createConfiguration(false);
    option.parsers.unshift(new _parsers_RUCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    option.parsers.unshift(new _parsers_RUCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
    option.parsers.unshift(new _parsers_RUMonthNameParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
    option.parsers.unshift(new _parsers_RURelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"]());
    option.parsers.unshift(new _parsers_RUTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"]());
    return option;
}
function createConfiguration(strictMode = true) {
    return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_8__.includeCommonConfiguration)({
        parsers: [
            new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](true),
            new _parsers_RUTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](),
            new _parsers_RUMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
            new _parsers_RUWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](),
            new _parsers_RUTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](strictMode),
            new _parsers_RUTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_14__["default"](),
        ],
        refiners: [new _refiners_RUMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_15__["default"](), new _refiners_RUMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_16__["default"]()],
    }, strictMode);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractParserWithLeftBoundaryChecking: () => (/* binding */ AbstractParserWithLeftBoundaryChecking),
/* harmony export */   AbstractParserWithLeftRightBoundaryChecking: () => (/* binding */ AbstractParserWithLeftRightBoundaryChecking)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js");


class AbstractParserWithLeftBoundaryChecking extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    patternLeftBoundary() {
        return _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.leftBoundary;
    }
    innerPattern(context) {
        return new RegExp(this.innerPatternString(context), _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags);
    }
    innerPatternHasChange(context, currentInnerPattern) {
        return false;
    }
}
class AbstractParserWithLeftRightBoundaryChecking extends AbstractParserWithLeftBoundaryChecking {
    innerPattern(context) {
        return new RegExp(`${this.innerPatternString(context)}${_constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.rightBoundary}`, _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags);
    }
}
//# sourceMappingURL=AbstractParserWithWordBoundaryChecking.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUCasualDateParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js");


class RUCasualDateParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return `(?:с|со)?\\s*(сегодня|вчера|завтра|послезавтра|послепослезавтра|позапозавчера|позавчера)`;
    }
    innerExtract(context, match) {
        const lowerText = match[1].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "сегодня":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
            case "вчера":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
            case "завтра":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
            case "послезавтра":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayAfter(context.reference, 2);
            case "послепослезавтра":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayAfter(context.reference, 3);
            case "позавчера":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayBefore(context.reference, 2);
            case "позапозавчера":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayBefore(context.reference, 3);
        }
        return component;
    }
}
//# sourceMappingURL=RUCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUCasualTimeParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js");




class RUCasualTimeParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return `(сейчас|прошлым\\s*вечером|прошлой\\s*ночью|следующей\\s*ночью|сегодня\\s*ночью|этой\\s*ночью|ночью|этим утром|утром|утра|в\\s*полдень|вечером|вечера|в\\s*полночь)`;
    }
    innerExtract(context, match) {
        let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        if (lowerText === "сейчас") {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
        }
        if (lowerText === "вечером" || lowerText === "вечера") {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.evening(context.reference);
        }
        if (lowerText.endsWith("утром") || lowerText.endsWith("утра")) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.morning(context.reference);
        }
        if (lowerText.match(/в\s*полдень/)) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.noon(context.reference);
        }
        if (lowerText.match(/прошлой\s*ночью/)) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.lastNight(context.reference);
        }
        if (lowerText.match(/прошлым\s*вечером/)) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.yesterdayEvening(context.reference);
        }
        if (lowerText.match(/следующей\s*ночью/)) {
            const daysToAdd = targetDate.hour() < 22 ? 1 : 2;
            targetDate = targetDate.add(daysToAdd, "day");
            (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
            component.imply("hour", 0);
        }
        if (lowerText.match(/в\s*полночь/) || lowerText.endsWith("ночью")) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.midnight(context.reference);
        }
        return component;
    }
}
//# sourceMappingURL=RUCasualTimeParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUMonthNameLittleEndianParser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js");






const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class RUMonthNameLittleEndianParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return `(?:с)?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})` +
            `(?:` +
            `\\s{0,3}(?:по|-|–|до)?\\s{0,3}` +
            `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})` +
            `)?` +
            `(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})` +
            `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` +
            `(?:` +
            `(?:-|\\/|,?\\s{0,3})` +
            `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}(?![^\\s]\\d))` +
            `)?`;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYear)(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
//# sourceMappingURL=RUMonthNameLittleEndianParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUMonthNameParser.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUMonthNameParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUMonthNameParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js");





const MONTH_NAME_GROUP = 2;
const YEAR_GROUP = 3;
class RUMonthNameParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftBoundaryChecking {
    innerPatternString(context) {
        return (`((?:в)\\s*)?` +
            `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.MONTH_DICTIONARY)})` +
            `\\s*` +
            `(?:` +
            `[,-]?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_2__.YEAR_PATTERN})?` +
            `)?` +
            `(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`);
    }
    innerExtract(context, match) {
        const monthName = match[MONTH_NAME_GROUP].toLowerCase();
        if (match[0].length <= 3 && !_constants_js__WEBPACK_IMPORTED_MODULE_2__.FULL_MONTH_NAME_DICTIONARY[monthName]) {
            return null;
        }
        const result = context.createParsingResult(match.index, match.index + match[0].length);
        result.start.imply("day", 1);
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_2__.MONTH_DICTIONARY[monthName];
        result.start.assign("month", month);
        if (match[YEAR_GROUP]) {
            const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.parseYear)(match[YEAR_GROUP]);
            result.start.assign("year", year);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.refDate, 1, month);
            result.start.imply("year", year);
        }
        return result;
    }
}
//# sourceMappingURL=RUMonthNameParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RURelativeDateFormatParser.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RURelativeDateFormatParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RURelativeDateFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js");





const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class RURelativeDateFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return `(в прошлом|на прошлой|на следующей|в следующем|на этой|в этом)\\s*(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.TIME_UNIT_DICTIONARY)})`;
    }
    innerExtract(context, match) {
        const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
        const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
        const timeunit = _constants_js__WEBPACK_IMPORTED_MODULE_3__.TIME_UNIT_DICTIONARY[unitWord];
        if (modifier == "на следующей" || modifier == "в следующем") {
            const timeUnits = {};
            timeUnits[timeunit] = 1;
            return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        if (modifier == "в прошлом" || modifier == "на прошлой") {
            const timeUnits = {};
            timeUnits[timeunit] = -1;
            return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        const components = context.createParsingComponents();
        let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
        if (timeunit.match(/week/i)) {
            date = date.add(-date.get("d"), "d");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.imply("year", date.year());
        }
        else if (timeunit.match(/month/i)) {
            date = date.add(-date.date() + 1, "d");
            components.imply("day", date.date());
            components.assign("year", date.year());
            components.assign("month", date.month() + 1);
        }
        else if (timeunit.match(/year/i)) {
            date = date.add(-date.date() + 1, "d");
            date = date.add(-date.month(), "month");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.assign("year", date.year());
        }
        return components;
    }
}
//# sourceMappingURL=RURelativeDateFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeExpressionParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js");



class RUTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
    constructor(strictMode) {
        super(strictMode);
    }
    patternFlags() {
        return _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags;
    }
    primaryPatternLeftBoundary() {
        return `(^|\\s|T|(?:[^\\p{L}\\p{N}_]))`;
    }
    followingPhase() {
        return `\\s*(?:\\-|\\–|\\~|\\〜|до|и|по|\\?)\\s*`;
    }
    primaryPrefix() {
        return `(?:(?:в|с)\\s*)??`;
    }
    primarySuffix() {
        return `(?:\\s*(?:утра|вечера|после полудня))?(?!\\/)${_constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.rightBoundary}`;
    }
    extractPrimaryTimeComponents(context, match) {
        const components = super.extractPrimaryTimeComponents(context, match);
        if (components) {
            if (match[0].endsWith("вечера")) {
                const hour = components.get("hour");
                if (hour >= 6 && hour < 12) {
                    components.assign("hour", components.get("hour") + 12);
                    components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                }
                else if (hour < 6) {
                    components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                }
            }
            if (match[0].endsWith("после полудня")) {
                components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                const hour = components.get("hour");
                if (hour >= 0 && hour <= 6) {
                    components.assign("hour", components.get("hour") + 12);
                }
            }
            if (match[0].endsWith("утра")) {
                components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                const hour = components.get("hour");
                if (hour < 12) {
                    components.assign("hour", components.get("hour"));
                }
            }
        }
        return components;
    }
}
//# sourceMappingURL=RUTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitAgoFormatParser.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js");




class RUTimeUnitAgoFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftBoundaryChecking {
    innerPatternString(context) {
        return `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})\\s{0,5}назад(?=(?:\\W|$))`;
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
        const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
    }
}
//# sourceMappingURL=RUTimeUnitAgoFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitCasualRelativeFormatParser.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitCasualRelativeFormatParser.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUTimeUnitCasualRelativeFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js");




class RUTimeUnitCasualRelativeFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return `(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})`;
    }
    innerExtract(context, match) {
        const prefix = match[1].toLowerCase();
        let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[2]);
        switch (prefix) {
            case "последние":
            case "прошлые":
            case "-":
                timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
                break;
        }
        return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=RUTimeUnitCasualRelativeFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitWithinFormatParser.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



const PATTERN = `(?:(?:около|примерно)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})${_constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.rightBoundary}`;
class RUTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    patternLeftBoundary() {
        return _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.leftBoundary;
    }
    innerPattern(context) {
        return context.option.forwardDate
            ? new RegExp(PATTERN, _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.flags)
            : new RegExp(`(?:в течение|в течении)\\s*${PATTERN}`, _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.flags);
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
        return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=RUTimeUnitWithinFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUWeekdayParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/parsers/RUWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/ru/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ "./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/ru/parsers/AbstractParserWithWordBoundaryChecking.js");




const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class RUWeekdayParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return (`(?:(?:,|\\(|（)\\s*)?` +
            `(?:в\\s*?)?` +
            `(?:(эту|этот|прошлый|прошлую|следующий|следующую|следующего)\\s*)?` +
            `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.WEEKDAY_DICTIONARY)})` +
            `(?:\\s*(?:,|\\)|）))?` +
            `(?:\\s*на\\s*(этой|прошлой|следующей)\\s*неделе)?`);
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLowerCase();
        const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_2__.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord == "прошлый" || modifierWord == "прошлую" || modifierWord == "прошлой") {
            modifier = "last";
        }
        else if (modifierWord == "следующий" ||
            modifierWord == "следующую" ||
            modifierWord == "следующей" ||
            modifierWord == "следующего") {
            modifier = "next";
        }
        else if (modifierWord == "этот" || modifierWord == "эту" || modifierWord == "этой") {
            modifier = "this";
        }
        return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
    }
}
//# sourceMappingURL=RUWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/refiners/RUMergeDateRangeRefiner.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/refiners/RUMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class RUMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(и до|и по|до|по|-)\s*$/i;
    }
}
//# sourceMappingURL=RUMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/ru/refiners/RUMergeDateTimeRefiner.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/ru/refiners/RUMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RUMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class RUMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return new RegExp(`^\\s*(T|в|,|-)?\\s*$`);
    }
}
//# sourceMappingURL=RUMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FULL_MONTH_NAME_DICTIONARY: () => (/* binding */ FULL_MONTH_NAME_DICTIONARY),
/* harmony export */   INTEGER_WORD_DICTIONARY: () => (/* binding */ INTEGER_WORD_DICTIONARY),
/* harmony export */   MONTH_DICTIONARY: () => (/* binding */ MONTH_DICTIONARY),
/* harmony export */   NUMBER_PATTERN: () => (/* binding */ NUMBER_PATTERN),
/* harmony export */   ORDINAL_NUMBER_PATTERN: () => (/* binding */ ORDINAL_NUMBER_PATTERN),
/* harmony export */   ORDINAL_WORD_DICTIONARY: () => (/* binding */ ORDINAL_WORD_DICTIONARY),
/* harmony export */   REGEX_PARTS: () => (/* binding */ REGEX_PARTS),
/* harmony export */   TIME_UNITS_PATTERN: () => (/* binding */ TIME_UNITS_PATTERN),
/* harmony export */   TIME_UNIT_DICTIONARY: () => (/* binding */ TIME_UNIT_DICTIONARY),
/* harmony export */   WEEKDAY_DICTIONARY: () => (/* binding */ WEEKDAY_DICTIONARY),
/* harmony export */   YEAR_PATTERN: () => (/* binding */ YEAR_PATTERN),
/* harmony export */   parseNumberPattern: () => (/* binding */ parseNumberPattern),
/* harmony export */   parseOrdinalNumberPattern: () => (/* binding */ parseOrdinalNumberPattern),
/* harmony export */   parseTimeUnits: () => (/* binding */ parseTimeUnits),
/* harmony export */   parseYearPattern: () => (/* binding */ parseYearPattern)
/* harmony export */ });
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");


const REGEX_PARTS = {
    leftBoundary: "([^\\p{L}\\p{N}_]|^)",
    rightBoundary: "(?=[^\\p{L}\\p{N}_]|$)",
    flags: "iu",
};
const WEEKDAY_DICTIONARY = {
    "неділя": 0,
    "неділі": 0,
    "неділю": 0,
    "нд": 0,
    "нд.": 0,
    "понеділок": 1,
    "понеділка": 1,
    "пн": 1,
    "пн.": 1,
    "вівторок": 2,
    "вівторка": 2,
    "вт": 2,
    "вт.": 2,
    "середа": 3,
    "середи": 3,
    "середу": 3,
    "ср": 3,
    "ср.": 3,
    "четвер": 4,
    "четверга": 4,
    "четвергу": 4,
    "чт": 4,
    "чт.": 4,
    "п'ятниця": 5,
    "п'ятниці": 5,
    "п'ятницю": 5,
    "пт": 5,
    "пт.": 5,
    "субота": 6,
    "суботи": 6,
    "суботу": 6,
    "сб": 6,
    "сб.": 6,
};
const FULL_MONTH_NAME_DICTIONARY = {
    "січень": 1,
    "січня": 1,
    "січні": 1,
    "лютий": 2,
    "лютого": 2,
    "лютому": 2,
    "березень": 3,
    "березня": 3,
    "березні": 3,
    "квітень": 4,
    "квітня": 4,
    "квітні": 4,
    "травень": 5,
    "травня": 5,
    "травні": 5,
    "червень": 6,
    "червня": 6,
    "червні": 6,
    "липень": 7,
    "липня": 7,
    "липні": 7,
    "серпень": 8,
    "серпня": 8,
    "серпні": 8,
    "вересень": 9,
    "вересня": 9,
    "вересні": 9,
    "жовтень": 10,
    "жовтня": 10,
    "жовтні": 10,
    "листопад": 11,
    "листопада": 11,
    "листопаду": 11,
    "грудень": 12,
    "грудня": 12,
    "грудні": 12,
};
const MONTH_DICTIONARY = {
    ...FULL_MONTH_NAME_DICTIONARY,
    "січ": 1,
    "січ.": 1,
    "лют": 2,
    "лют.": 2,
    "бер": 3,
    "бер.": 3,
    "квіт": 4,
    "квіт.": 4,
    "трав": 5,
    "трав.": 5,
    "черв": 6,
    "черв.": 6,
    "лип": 7,
    "лип.": 7,
    "серп": 8,
    "серп.": 8,
    "сер": 8,
    "cер.": 8,
    "вер": 9,
    "вер.": 9,
    "верес": 9,
    "верес.": 9,
    "жовт": 10,
    "жовт.": 10,
    "листоп": 11,
    "листоп.": 11,
    "груд": 12,
    "груд.": 12,
};
const INTEGER_WORD_DICTIONARY = {
    "один": 1,
    "одна": 1,
    "одної": 1,
    "одну": 1,
    "дві": 2,
    "два": 2,
    "двох": 2,
    "три": 3,
    "трьох": 3,
    "чотири": 4,
    "чотирьох": 4,
    "п'ять": 5,
    "п'яти": 5,
    "шість": 6,
    "шести": 6,
    "сім": 7,
    "семи": 7,
    "вісім": 8,
    "восьми": 8,
    "дев'ять": 9,
    "дев'яти": 9,
    "десять": 10,
    "десяти": 10,
    "одинадцять": 11,
    "одинадцяти": 11,
    "дванадцять": 12,
    "дванадцяти": 12,
};
const ORDINAL_WORD_DICTIONARY = {
    "перше": 1,
    "першого": 1,
    "друге": 2,
    "другого": 2,
    "третє": 3,
    "третього": 3,
    "четверте": 4,
    "четвертого": 4,
    "п'яте": 5,
    "п'ятого": 5,
    "шосте": 6,
    "шостого": 6,
    "сьоме": 7,
    "сьомого": 7,
    "восьме": 8,
    "восьмого": 8,
    "дев'яте": 9,
    "дев'ятого": 9,
    "десяте": 10,
    "десятого": 10,
    "одинадцяте": 11,
    "одинадцятого": 11,
    "дванадцяте": 12,
    "дванадцятого": 12,
    "тринадцяте": 13,
    "тринадцятого": 13,
    "чотирнадцяте": 14,
    "чотинрнадцятого": 14,
    "п'ятнадцяте": 15,
    "п'ятнадцятого": 15,
    "шістнадцяте": 16,
    "шістнадцятого": 16,
    "сімнадцяте": 17,
    "сімнадцятого": 17,
    "вісімнадцяте": 18,
    "вісімнадцятого": 18,
    "дев'ятнадцяте": 19,
    "дев'ятнадцятого": 19,
    "двадцяте": 20,
    "двадцятого": 20,
    "двадцять перше": 21,
    "двадцять першого": 21,
    "двадцять друге": 22,
    "двадцять другого": 22,
    "двадцять третє": 23,
    "двадцять третього": 23,
    "двадцять четверте": 24,
    "двадцять четвертого": 24,
    "двадцять п'яте": 25,
    "двадцять п'ятого": 25,
    "двадцять шосте": 26,
    "двадцять шостого": 26,
    "двадцять сьоме": 27,
    "двадцять сьомого": 27,
    "двадцять восьме": 28,
    "двадцять восьмого": 28,
    "двадцять дев'яте": 29,
    "двадцять дев'ятого": 29,
    "тридцяте": 30,
    "тридцятого": 30,
    "тридцять перше": 31,
    "тридцять першого": 31,
};
const TIME_UNIT_DICTIONARY = {
    сек: "second",
    секунда: "second",
    секунд: "second",
    секунди: "second",
    секунду: "second",
    секундочок: "second",
    секундочки: "second",
    секундочку: "second",
    хв: "minute",
    хвилина: "minute",
    хвилин: "minute",
    хвилини: "minute",
    хвилину: "minute",
    хвилинок: "minute",
    хвилинки: "minute",
    хвилинку: "minute",
    хвилиночок: "minute",
    хвилиночки: "minute",
    хвилиночку: "minute",
    год: "hour",
    година: "hour",
    годин: "hour",
    години: "hour",
    годину: "hour",
    годинка: "hour",
    годинок: "hour",
    годинки: "hour",
    годинку: "hour",
    день: "d",
    дня: "d",
    днів: "d",
    дні: "d",
    доба: "d",
    добу: "d",
    тиждень: "week",
    тижню: "week",
    тижня: "week",
    тижні: "week",
    тижнів: "week",
    місяць: "month",
    місяців: "month",
    місяці: "month",
    місяця: "month",
    квартал: "quarter",
    кварталу: "quarter",
    квартала: "quarter",
    кварталів: "quarter",
    кварталі: "quarter",
    рік: "year",
    року: "year",
    році: "year",
    років: "year",
    роки: "year",
};
const NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|пів|декілька|пар(?:у)|\\s{0,3})`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return INTEGER_WORD_DICTIONARY[num];
    }
    if (num.match(/декілька/)) {
        return 2;
    }
    else if (num.match(/пів/)) {
        return 0.5;
    }
    else if (num.match(/пар/)) {
        return 2;
    }
    else if (num === "") {
        return 1;
    }
    return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:го|ого|е)?)`;
function parseOrdinalNumberPattern(match) {
    const num = match.toLowerCase();
    if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return ORDINAL_WORD_DICTIONARY[num];
    }
    return parseInt(num);
}
const year = "(?:\\s+(?:року|рік|р|р.))?";
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}${year}\\s*(?:н.е.|до н.е.|н. е.|до н. е.)|[1-2][0-9]{3}${year}|[5-9][0-9]${year})`;
function parseYearPattern(match) {
    if (/(рік|року|р|р.)/i.test(match)) {
        match = match.replace(/(рік|року|р|р.)/i, "");
    }
    if (/(до н.е.|до н. е.)/i.test(match)) {
        match = match.replace(/(до н.е.|до н. е.)/i, "");
        return -parseInt(match);
    }
    if (/(н. е.|н.е.)/i.test(match)) {
        match = match.replace(/(н. е.|н.е.)/i, "");
        return parseInt(match);
    }
    const rawYearNumber = parseInt(match);
    return (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_1__.findMostLikelyADYear)(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.matchAnyPattern)(TIME_UNIT_DICTIONARY)})`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = (0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_0__.repeatedTimeunitPattern)(`(?:(?:близько|приблизно)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length).trim();
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    return fragments;
}
function collectDateTimeFragment(fragments, match) {
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _parsers_UKTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parsers/UKTimeUnitWithinFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitWithinFormatParser.js");
/* harmony import */ var _parsers_UKMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parsers/UKMonthNameLittleEndianParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKMonthNameLittleEndianParser.js");
/* harmony import */ var _parsers_UKMonthNameParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/UKMonthNameParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKMonthNameParser.js");
/* harmony import */ var _parsers_UKTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parsers/UKTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeExpressionParser.js");
/* harmony import */ var _parsers_UKTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parsers/UKTimeUnitAgoFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitAgoFormatParser.js");
/* harmony import */ var _refiners_UKMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./refiners/UKMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/uk/refiners/UKMergeDateRangeRefiner.js");
/* harmony import */ var _refiners_UKMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./refiners/UKMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/uk/refiners/UKMergeDateTimeRefiner.js");
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _parsers_UKCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/UKCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKCasualDateParser.js");
/* harmony import */ var _parsers_UKCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/UKCasualTimeParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKCasualTimeParser.js");
/* harmony import */ var _parsers_UKWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parsers/UKWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKWeekdayParser.js");
/* harmony import */ var _parsers_UKRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/UKRelativeDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKRelativeDateFormatParser.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/parsers/SlashDateFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js");
/* harmony import */ var _parsers_UKTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/UKTimeUnitCasualRelativeFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitCasualRelativeFormatParser.js");
/* harmony import */ var _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/parsers/ISOFormatParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/ISOFormatParser.js");




















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration(true));
function createCasualConfiguration() {
    const option = createConfiguration(false);
    option.parsers.unshift(new _parsers_UKCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    option.parsers.unshift(new _parsers_UKCasualTimeParser_js__WEBPACK_IMPORTED_MODULE_4__["default"]());
    option.parsers.unshift(new _parsers_UKMonthNameParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
    option.parsers.unshift(new _parsers_UKRelativeDateFormatParser_js__WEBPACK_IMPORTED_MODULE_6__["default"]());
    option.parsers.unshift(new _parsers_UKTimeUnitCasualRelativeFormatParser_js__WEBPACK_IMPORTED_MODULE_7__["default"]());
    return option;
}
function createConfiguration(strictMode) {
    return (0,_configurations_js__WEBPACK_IMPORTED_MODULE_8__.includeCommonConfiguration)({
        parsers: [
            new _common_parsers_ISOFormatParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
            new _common_parsers_SlashDateFormatParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](true),
            new _parsers_UKTimeUnitWithinFormatParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
            new _parsers_UKMonthNameLittleEndianParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](),
            new _parsers_UKWeekdayParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](),
            new _parsers_UKTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_14__["default"](strictMode),
            new _parsers_UKTimeUnitAgoFormatParser_js__WEBPACK_IMPORTED_MODULE_15__["default"](),
        ],
        refiners: [new _refiners_UKMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_16__["default"](), new _refiners_UKMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_17__["default"]()],
    }, strictMode);
}
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractParserWithLeftBoundaryChecking: () => (/* binding */ AbstractParserWithLeftBoundaryChecking),
/* harmony export */   AbstractParserWithLeftRightBoundaryChecking: () => (/* binding */ AbstractParserWithLeftRightBoundaryChecking)
/* harmony export */ });
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js");


class AbstractParserWithLeftBoundaryChecking extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithWordBoundaryChecking {
    patternLeftBoundary() {
        return _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.leftBoundary;
    }
    innerPattern(context) {
        return new RegExp(this.innerPatternString(context), _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags);
    }
    innerPatternHasChange(context, currentInnerPattern) {
        return false;
    }
}
class AbstractParserWithLeftRightBoundaryChecking extends AbstractParserWithLeftBoundaryChecking {
    innerPattern(context) {
        return new RegExp(`${this.innerPatternString(context)}${_constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.rightBoundary}`, _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags);
    }
}
//# sourceMappingURL=AbstractParserWithWordBoundaryChecking.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKCasualDateParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKCasualDateParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKCasualDateParser)
/* harmony export */ });
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js");


class UKCasualDateParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return `(?:з|із|від)?\\s*(сьогодні|вчора|завтра|післязавтра|післяпіслязавтра|позапозавчора|позавчора)`;
    }
    innerExtract(context, match) {
        const lowerText = match[1].toLowerCase();
        const component = context.createParsingComponents();
        switch (lowerText) {
            case "сьогодні":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.today(context.reference);
            case "вчора":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.yesterday(context.reference);
            case "завтра":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.tomorrow(context.reference);
            case "післязавтра":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayAfter(context.reference, 2);
            case "післяпіслязавтра":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayAfter(context.reference, 3);
            case "позавчора":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayBefore(context.reference, 2);
            case "позапозавчора":
                return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_1__.theDayBefore(context.reference, 3);
        }
        return component;
    }
}
//# sourceMappingURL=UKCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKCasualTimeParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKCasualTimeParser.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKCasualTimeParser)
/* harmony export */ });
/* harmony import */ var _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/casualReferences.js */ "./node_modules/chrono-node/dist/esm/common/casualReferences.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js");




class UKCasualTimeParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return `(зараз|минулого\\s*вечора|минулої\\s*ночі|наступної\\s*ночі|сьогодні\\s*вночі|цієї\\s*ночі|цього ранку|вранці|ранку|зранку|опівдні|ввечері|вечора|опівночі|вночі)`;
    }
    innerExtract(context, match) {
        let targetDate = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
        const lowerText = match[0].toLowerCase();
        const component = context.createParsingComponents();
        if (lowerText === "зараз") {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.now(context.reference);
        }
        if (lowerText === "ввечері" || lowerText === "вечора") {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.evening(context.reference);
        }
        if (lowerText.endsWith("вранці") || lowerText.endsWith("ранку") || lowerText.endsWith("зранку")) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.morning(context.reference);
        }
        if (lowerText.endsWith("опівдні")) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.noon(context.reference);
        }
        if (lowerText.match(/минулої\s*ночі/)) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.lastNight(context.reference);
        }
        if (lowerText.match(/минулого\s*вечора/)) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.yesterdayEvening(context.reference);
        }
        if (lowerText.match(/наступної\s*ночі/)) {
            const daysToAdd = targetDate.hour() < 22 ? 1 : 2;
            targetDate = targetDate.add(daysToAdd, "day");
            (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(component, targetDate);
            component.imply("hour", 1);
        }
        if (lowerText.match(/цієї\s*ночі/)) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.midnight(context.reference);
        }
        if (lowerText.endsWith("опівночі") || lowerText.endsWith("вночі")) {
            return _common_casualReferences_js__WEBPACK_IMPORTED_MODULE_2__.midnight(context.reference);
        }
        return component;
    }
}
//# sourceMappingURL=UKCasualTimeParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKMonthNameLittleEndianParser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKMonthNameLittleEndianParser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKMonthNameLittleEndianParser)
/* harmony export */ });
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js");






const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP = 3;
const YEAR_GROUP = 4;
class UKMonthNameLittleEndianParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return (`(?:з|із)?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})` +
            `(?:` +
            `\\s{0,3}(?:по|-|–|до)?\\s{0,3}` +
            `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.ORDINAL_NUMBER_PATTERN})` +
            `)?` +
            `(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})` +
            `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY)})` +
            `(?:` +
            `(?:-|\\/|,?\\s{0,3})` +
            `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.YEAR_PATTERN}(?![^\\s]\\d))` +
            `)?`);
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_1__.MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        const day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_GROUP]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP]) {
            const yearNumber = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseYearPattern)(match[YEAR_GROUP]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.reference.instant, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP]) {
            const endDate = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseOrdinalNumberPattern)(match[DATE_TO_GROUP]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}
//# sourceMappingURL=UKMonthNameLittleEndianParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKMonthNameParser.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKMonthNameParser.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UkMonthNameParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js");
/* harmony import */ var _calculation_years_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../calculation/years.js */ "./node_modules/chrono-node/dist/esm/calculation/years.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js");





const MONTH_NAME_GROUP = 2;
const YEAR_GROUP = 3;
class UkMonthNameParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftBoundaryChecking {
    innerPatternString(context) {
        return (`((?:в|у)\\s*)?` +
            `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.MONTH_DICTIONARY)})` +
            `\\s*` +
            `(?:` +
            `[,-]?\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_2__.YEAR_PATTERN})?` +
            `)?` +
            `(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`);
    }
    innerExtract(context, match) {
        const monthName = match[MONTH_NAME_GROUP].toLowerCase();
        if (match[0].length <= 3 && !_constants_js__WEBPACK_IMPORTED_MODULE_2__.FULL_MONTH_NAME_DICTIONARY[monthName]) {
            return null;
        }
        const result = context.createParsingResult(match.index, match.index + match[0].length);
        result.start.imply("day", 1);
        const month = _constants_js__WEBPACK_IMPORTED_MODULE_2__.MONTH_DICTIONARY[monthName];
        result.start.assign("month", month);
        if (match[YEAR_GROUP]) {
            const year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.parseYearPattern)(match[YEAR_GROUP]);
            result.start.assign("year", year);
        }
        else {
            const year = (0,_calculation_years_js__WEBPACK_IMPORTED_MODULE_3__.findYearClosestToRef)(context.reference.instant, 1, month);
            result.start.imply("year", year);
        }
        return result;
    }
}
//# sourceMappingURL=UKMonthNameParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKRelativeDateFormatParser.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKRelativeDateFormatParser.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKRelativeDateFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js");





const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class UKRelativeDateFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return (`(в минулому|у минулому|на минулому|минулого|на наступному|в наступному|у наступному|наступного|на цьому|в цьому|у цьому|цього)\\s*` +
            `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_2__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_3__.TIME_UNIT_DICTIONARY)})(?=\\s*)`);
    }
    innerExtract(context, match) {
        const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
        const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
        const timeunit = _constants_js__WEBPACK_IMPORTED_MODULE_3__.TIME_UNIT_DICTIONARY[unitWord];
        if (modifier == "на наступному" ||
            modifier == "в наступному" ||
            modifier == "у наступному" ||
            modifier == "наступного") {
            const timeUnits = {};
            timeUnits[timeunit] = 1;
            return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        if (modifier == "на минулому" ||
            modifier == "в минулому" ||
            modifier == "у минулому" ||
            modifier == "минулого") {
            const timeUnits = {};
            timeUnits[timeunit] = -1;
            return _results_js__WEBPACK_IMPORTED_MODULE_4__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        const components = context.createParsingComponents();
        let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.reference.instant);
        if (timeunit.match(/week/i)) {
            date = date.add(-date.get("d"), "d");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.imply("year", date.year());
        }
        else if (timeunit.match(/month/i)) {
            date = date.add(-date.date() + 1, "d");
            components.imply("day", date.date());
            components.assign("year", date.year());
            components.assign("month", date.month() + 1);
        }
        else if (timeunit.match(/year/i)) {
            date = date.add(-date.date() + 1, "d");
            date = date.add(-date.month(), "month");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.assign("year", date.year());
        }
        return components;
    }
}
//# sourceMappingURL=UKRelativeDateFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeExpressionParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeExpressionParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/parsers/AbstractTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js");



class UKTimeExpressionParser extends _common_parsers_AbstractTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTimeExpressionParser {
    constructor(strictMode) {
        super(strictMode);
    }
    patternFlags() {
        return _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.flags;
    }
    primaryPatternLeftBoundary() {
        return `(^|\\s|T|(?:[^\\p{L}\\p{N}_]))`;
    }
    followingPhase() {
        return `\\s*(?:\\-|\\–|\\~|\\〜|до|і|по|\\?)\\s*`;
    }
    primaryPrefix() {
        return `(?:(?:в|у|о|об|з|із|від)\\s*)??`;
    }
    primarySuffix() {
        return `(?:\\s*(?:ранку|вечора|по обіді|після обіду))?(?!\\/)${_constants_js__WEBPACK_IMPORTED_MODULE_1__.REGEX_PARTS.rightBoundary}`;
    }
    extractPrimaryTimeComponents(context, match) {
        const components = super.extractPrimaryTimeComponents(context, match);
        if (components) {
            if (match[0].endsWith("вечора")) {
                const hour = components.get("hour");
                if (hour >= 6 && hour < 12) {
                    components.assign("hour", components.get("hour") + 12);
                    components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                }
                else if (hour < 6) {
                    components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                }
            }
            if (match[0].endsWith("по обіді") || match[0].endsWith("після обіду")) {
                components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.PM);
                const hour = components.get("hour");
                if (hour >= 0 && hour <= 6) {
                    components.assign("hour", components.get("hour") + 12);
                }
            }
            if (match[0].endsWith("ранку")) {
                components.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem.AM);
                const hour = components.get("hour");
                if (hour < 12) {
                    components.assign("hour", components.get("hour"));
                }
            }
        }
        return components;
    }
}
//# sourceMappingURL=UKTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitAgoFormatParser.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitAgoFormatParser.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKTimeUnitAgoFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js");




class UKTimeUnitAgoFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftBoundaryChecking {
    innerPatternString(context) {
        return `(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})\\s{0,5}тому(?=(?:\\W|$))`;
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[1]);
        const outputTimeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
        return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
    }
}
//# sourceMappingURL=UKTimeUnitAgoFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitCasualRelativeFormatParser.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitCasualRelativeFormatParser.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKTimeUnitCasualRelativeFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/timeunits.js */ "./node_modules/chrono-node/dist/esm/utils/timeunits.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js");




class UKTimeUnitCasualRelativeFormatParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return `(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${_constants_js__WEBPACK_IMPORTED_MODULE_1__.TIME_UNITS_PATTERN})`;
    }
    innerExtract(context, match) {
        const prefix = match[1].toLowerCase();
        let timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.parseTimeUnits)(match[3]);
        switch (prefix) {
            case "останні":
            case "минулі":
            case "-":
                timeUnits = (0,_utils_timeunits_js__WEBPACK_IMPORTED_MODULE_2__.reverseTimeUnits)(timeUnits);
                break;
        }
        return _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=UKTimeUnitCasualRelativeFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitWithinFormatParser.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKTimeUnitWithinFormatParser.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKTimeUnitWithinFormatParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");



const PATTERN = `(?:(?:приблизно|орієнтовно)\\s*(?:~\\s*)?)?(${_constants_js__WEBPACK_IMPORTED_MODULE_0__.TIME_UNITS_PATTERN})${_constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.rightBoundary}`;
class UKTimeUnitWithinFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    patternLeftBoundary() {
        return _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.leftBoundary;
    }
    innerPattern(context) {
        return context.option.forwardDate
            ? new RegExp(PATTERN, "i")
            : new RegExp(`(?:протягом|на протязі|протягом|упродовж|впродовж)\\s*${PATTERN}`, _constants_js__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARTS.flags);
    }
    innerExtract(context, match) {
        const timeUnits = (0,_constants_js__WEBPACK_IMPORTED_MODULE_0__.parseTimeUnits)(match[1]);
        return _results_js__WEBPACK_IMPORTED_MODULE_2__.ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}
//# sourceMappingURL=UKTimeUnitWithinFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKWeekdayParser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/parsers/UKWeekdayParser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKWeekdayParser)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/uk/constants.js");
/* harmony import */ var _utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/pattern.js */ "./node_modules/chrono-node/dist/esm/utils/pattern.js");
/* harmony import */ var _common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/calculation/weekdays.js */ "./node_modules/chrono-node/dist/esm/common/calculation/weekdays.js");
/* harmony import */ var _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractParserWithWordBoundaryChecking.js */ "./node_modules/chrono-node/dist/esm/locales/uk/parsers/AbstractParserWithWordBoundaryChecking.js");




const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class UKWeekdayParser extends _AbstractParserWithWordBoundaryChecking_js__WEBPACK_IMPORTED_MODULE_0__.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(context) {
        return (`(?:(?:,|\\(|（)\\s*)?` +
            `(?:в\\s*?)?` +
            `(?:у\\s*?)?` +
            `(?:(цей|минулого|минулий|попередній|попереднього|наступного|наступний|наступному)\\s*)?` +
            `(${(0,_utils_pattern_js__WEBPACK_IMPORTED_MODULE_1__.matchAnyPattern)(_constants_js__WEBPACK_IMPORTED_MODULE_2__.WEEKDAY_DICTIONARY)})` +
            `(?:\\s*(?:,|\\)|）))?` +
            `(?:\\s*(на|у|в)\\s*(цьому|минулому|наступному)\\s*тижні)?`);
    }
    innerExtract(context, match) {
        const dayOfWeek = match[WEEKDAY_GROUP].toLocaleLowerCase();
        const weekday = _constants_js__WEBPACK_IMPORTED_MODULE_2__.WEEKDAY_DICTIONARY[dayOfWeek];
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLocaleLowerCase();
        let modifier = null;
        if (modifierWord == "минулого" ||
            modifierWord == "минулий" ||
            modifierWord == "попередній" ||
            modifierWord == "попереднього") {
            modifier = "last";
        }
        else if (modifierWord == "наступного" || modifierWord == "наступний") {
            modifier = "next";
        }
        else if (modifierWord == "цей" || modifierWord == "цього" || modifierWord == "цьому") {
            modifier = "this";
        }
        return (0,_common_calculation_weekdays_js__WEBPACK_IMPORTED_MODULE_3__.createParsingComponentsAtWeekday)(context.reference, weekday, modifier);
    }
}
//# sourceMappingURL=UKWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/refiners/UKMergeDateRangeRefiner.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/refiners/UKMergeDateRangeRefiner.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class UKMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(і до|і по|до|по|-)\s*$/i;
    }
}
//# sourceMappingURL=UKMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/uk/refiners/UKMergeDateTimeRefiner.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/uk/refiners/UKMergeDateTimeRefiner.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UKMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class UKMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return new RegExp(`^\\s*(T|в|у|о|,|-)?\\s*$`);
    }
}
//# sourceMappingURL=UKMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/constants.js":
/*!************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/constants.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NUMBER: () => (/* binding */ NUMBER),
/* harmony export */   WEEKDAY_OFFSET: () => (/* binding */ WEEKDAY_OFFSET),
/* harmony export */   zhStringToNumber: () => (/* binding */ zhStringToNumber),
/* harmony export */   zhStringToYear: () => (/* binding */ zhStringToYear)
/* harmony export */ });
const NUMBER = {
    "零": 0,
    "〇": 0,
    "一": 1,
    "二": 2,
    "两": 2,
    "三": 3,
    "四": 4,
    "五": 5,
    "六": 6,
    "七": 7,
    "八": 8,
    "九": 9,
    "十": 10,
};
const WEEKDAY_OFFSET = {
    "天": 0,
    "日": 0,
    "一": 1,
    "二": 2,
    "三": 3,
    "四": 4,
    "五": 5,
    "六": 6,
};
function zhStringToNumber(text) {
    let number = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === "十") {
            number = number === 0 ? NUMBER[char] : number * NUMBER[char];
        }
        else {
            number += NUMBER[char];
        }
    }
    return number;
}
function zhStringToYear(text) {
    let string = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        string = string + NUMBER[char];
    }
    return parseInt(string);
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   hans: () => (/* binding */ hans),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/refiners/ExtractTimezoneOffsetRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneOffsetRefiner.js");
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _parsers_ZHHansCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ZHHansCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansCasualDateParser.js");
/* harmony import */ var _parsers_ZHHansDateParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/ZHHansDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDateParser.js");
/* harmony import */ var _parsers_ZHHansDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/ZHHansDeadlineFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDeadlineFormatParser.js");
/* harmony import */ var _parsers_ZHHansRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/ZHHansRelationWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansRelationWeekdayParser.js");
/* harmony import */ var _parsers_ZHHansTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/ZHHansTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansTimeExpressionParser.js");
/* harmony import */ var _parsers_ZHHansWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/ZHHansWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansWeekdayParser.js");
/* harmony import */ var _refiners_ZHHansMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./refiners/ZHHansMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/refiners/ZHHansMergeDateRangeRefiner.js");
/* harmony import */ var _refiners_ZHHansMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refiners/ZHHansMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/refiners/ZHHansMergeDateTimeRefiner.js");















const hans = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration());
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration() {
    const option = createConfiguration();
    option.parsers.unshift(new _parsers_ZHHansCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    return option;
}
function createConfiguration() {
    const configuration = (0,_configurations_js__WEBPACK_IMPORTED_MODULE_4__.includeCommonConfiguration)({
        parsers: [
            new _parsers_ZHHansDateParser_js__WEBPACK_IMPORTED_MODULE_5__["default"](),
            new _parsers_ZHHansRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](),
            new _parsers_ZHHansWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](),
            new _parsers_ZHHansTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](),
            new _parsers_ZHHansDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
        ],
        refiners: [new _refiners_ZHHansMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _refiners_ZHHansMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__["default"]()],
    });
    configuration.refiners = configuration.refiners.filter((refiner) => !(refiner instanceof _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_12__["default"]));
    return configuration;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansCasualDateParser.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansCasualDateParser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");


const NOW_GROUP = 1;
const DAY_GROUP_1 = 2;
const TIME_GROUP_1 = 3;
const TIME_GROUP_2 = 4;
const DAY_GROUP_3 = 5;
const TIME_GROUP_3 = 6;
class ZHHansCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return new RegExp("(现在|立(?:刻|即)|即刻)|" +
            "(今|明|前|大前|后|大后|昨)(早|晚)|" +
            "(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" +
            "(今|明|前|大前|后|大后|昨)(?:日|天)" +
            "(?:[\\s|,|，]*)" +
            "(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?", "i");
    }
    innerExtract(context, match) {
        const index = match.index;
        const result = context.createParsingResult(index, match[0]);
        const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        let startMoment = refMoment;
        if (match[NOW_GROUP]) {
            result.start.imply("hour", refMoment.hour());
            result.start.imply("minute", refMoment.minute());
            result.start.imply("second", refMoment.second());
            result.start.imply("millisecond", refMoment.millisecond());
        }
        else if (match[DAY_GROUP_1]) {
            const day1 = match[DAY_GROUP_1];
            const time1 = match[TIME_GROUP_1];
            if (day1 == "明") {
                if (refMoment.hour() > 1) {
                    startMoment = startMoment.add(1, "day");
                }
            }
            else if (day1 == "昨") {
                startMoment = startMoment.add(-1, "day");
            }
            else if (day1 == "前") {
                startMoment = startMoment.add(-2, "day");
            }
            else if (day1 == "大前") {
                startMoment = startMoment.add(-3, "day");
            }
            else if (day1 == "后") {
                startMoment = startMoment.add(2, "day");
            }
            else if (day1 == "大后") {
                startMoment = startMoment.add(3, "day");
            }
            if (time1 == "早") {
                result.start.imply("hour", 6);
            }
            else if (time1 == "晚") {
                result.start.imply("hour", 22);
                result.start.imply("meridiem", 1);
            }
        }
        else if (match[TIME_GROUP_2]) {
            const timeString2 = match[TIME_GROUP_2];
            const time2 = timeString2[0];
            if (time2 == "早" || time2 == "上") {
                result.start.imply("hour", 6);
            }
            else if (time2 == "下") {
                result.start.imply("hour", 15);
                result.start.imply("meridiem", 1);
            }
            else if (time2 == "中") {
                result.start.imply("hour", 12);
                result.start.imply("meridiem", 1);
            }
            else if (time2 == "夜" || time2 == "晚") {
                result.start.imply("hour", 22);
                result.start.imply("meridiem", 1);
            }
            else if (time2 == "凌") {
                result.start.imply("hour", 0);
            }
        }
        else if (match[DAY_GROUP_3]) {
            const day3 = match[DAY_GROUP_3];
            if (day3 == "明") {
                if (refMoment.hour() > 1) {
                    startMoment = startMoment.add(1, "day");
                }
            }
            else if (day3 == "昨") {
                startMoment = startMoment.add(-1, "day");
            }
            else if (day3 == "前") {
                startMoment = startMoment.add(-2, "day");
            }
            else if (day3 == "大前") {
                startMoment = startMoment.add(-3, "day");
            }
            else if (day3 == "后") {
                startMoment = startMoment.add(2, "day");
            }
            else if (day3 == "大后") {
                startMoment = startMoment.add(3, "day");
            }
            const timeString3 = match[TIME_GROUP_3];
            if (timeString3) {
                const time3 = timeString3[0];
                if (time3 == "早" || time3 == "上") {
                    result.start.imply("hour", 6);
                }
                else if (time3 == "下") {
                    result.start.imply("hour", 15);
                    result.start.imply("meridiem", 1);
                }
                else if (time3 == "中") {
                    result.start.imply("hour", 12);
                    result.start.imply("meridiem", 1);
                }
                else if (time3 == "夜" || time3 == "晚") {
                    result.start.imply("hour", 22);
                    result.start.imply("meridiem", 1);
                }
                else if (time3 == "凌") {
                    result.start.imply("hour", 0);
                }
            }
        }
        result.start.assign("day", startMoment.date());
        result.start.assign("month", startMoment.month() + 1);
        result.start.assign("year", startMoment.year());
        return result;
    }
}
//# sourceMappingURL=ZHHansCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDateParser.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDateParser.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/constants.js");



const YEAR_GROUP = 1;
const MONTH_GROUP = 2;
const DAY_GROUP = 3;
class ZHHansDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp("(" +
            "\\d{2,4}|" +
            "[" +
            Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") +
            "]{4}|" +
            "[" +
            Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") +
            "]{2}" +
            ")?" +
            "(?:\\s*)" +
            "(?:年)?" +
            "(?:[\\s|,|，]*)" +
            "(" +
            "\\d{1,2}|" +
            "[" +
            Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") +
            "]{1,3}" +
            ")" +
            "(?:\\s*)" +
            "(?:月)" +
            "(?:\\s*)" +
            "(" +
            "\\d{1,2}|" +
            "[" +
            Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") +
            "]{1,3}" +
            ")?" +
            "(?:\\s*)" +
            "(?:日|号)?");
    }
    innerExtract(context, match) {
        const startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const result = context.createParsingResult(match.index, match[0]);
        let month = parseInt(match[MONTH_GROUP]);
        if (isNaN(month))
            month = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToNumber)(match[MONTH_GROUP]);
        result.start.assign("month", month);
        if (match[DAY_GROUP]) {
            let day = parseInt(match[DAY_GROUP]);
            if (isNaN(day))
                day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToNumber)(match[DAY_GROUP]);
            result.start.assign("day", day);
        }
        else {
            result.start.imply("day", startMoment.date());
        }
        if (match[YEAR_GROUP]) {
            let year = parseInt(match[YEAR_GROUP]);
            if (isNaN(year))
                year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToYear)(match[YEAR_GROUP]);
            result.start.assign("year", year);
        }
        else {
            result.start.imply("year", startMoment.year());
        }
        return result;
    }
}
//# sourceMappingURL=ZHHansDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDeadlineFormatParser.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDeadlineFormatParser.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansDeadlineFormatParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/constants.js");



const PATTERN = new RegExp("(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+|半|几)(?:\\s*)" +
    "(?:个)?" +
    "(秒(?:钟)?|分钟|小时|钟|日|天|星期|礼拜|月|年)" +
    "(?:(?:之|过)?后|(?:之)?内)", "i");
const NUMBER_GROUP = 1;
const UNIT_GROUP = 2;
class ZHHansDeadlineFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        let number = parseInt(match[NUMBER_GROUP]);
        if (isNaN(number)) {
            number = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[NUMBER_GROUP]);
        }
        if (isNaN(number)) {
            const string = match[NUMBER_GROUP];
            if (string === "几") {
                number = 3;
            }
            else if (string === "半") {
                number = 0.5;
            }
            else {
                return null;
            }
        }
        let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const unit = match[UNIT_GROUP];
        const unitAbbr = unit[0];
        if (unitAbbr.match(/[日天星礼月年]/)) {
            if (unitAbbr == "日" || unitAbbr == "天") {
                date = date.add(number, "d");
            }
            else if (unitAbbr == "星" || unitAbbr == "礼") {
                date = date.add(number * 7, "d");
            }
            else if (unitAbbr == "月") {
                date = date.add(number, "month");
            }
            else if (unitAbbr == "年") {
                date = date.add(number, "year");
            }
            result.start.assign("year", date.year());
            result.start.assign("month", date.month() + 1);
            result.start.assign("day", date.date());
            return result;
        }
        if (unitAbbr == "秒") {
            date = date.add(number, "second");
        }
        else if (unitAbbr == "分") {
            date = date.add(number, "minute");
        }
        else if (unitAbbr == "小" || unitAbbr == "钟") {
            date = date.add(number, "hour");
        }
        result.start.imply("year", date.year());
        result.start.imply("month", date.month() + 1);
        result.start.imply("day", date.date());
        result.start.assign("hour", date.hour());
        result.start.assign("minute", date.minute());
        result.start.assign("second", date.second());
        return result;
    }
}
//# sourceMappingURL=ZHHansDeadlineFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansRelationWeekdayParser.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansRelationWeekdayParser.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansRelationWeekdayParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/constants.js");



const PATTERN = new RegExp("(?<prefix>上|下|这)(?:个)?(?:星期|礼拜|周)(?<weekday>" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET).join("|") + ")");
class ZHHansRelationWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const dayOfWeek = match.groups.weekday;
        const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET[dayOfWeek];
        if (offset === undefined)
            return null;
        let modifier = null;
        const prefix = match.groups.prefix;
        if (prefix == "上") {
            modifier = "last";
        }
        else if (prefix == "下") {
            modifier = "next";
        }
        else if (prefix == "这") {
            modifier = "this";
        }
        let startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        let startMomentFixed = false;
        const refOffset = startMoment.day();
        if (modifier == "last" || modifier == "past") {
            startMoment = startMoment.day(offset - 7);
            startMomentFixed = true;
        }
        else if (modifier == "next") {
            startMoment = startMoment.day(offset + 7);
            startMomentFixed = true;
        }
        else if (modifier == "this") {
            startMoment = startMoment.day(offset);
        }
        else {
            if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
                startMoment = startMoment.day(offset - 7);
            }
            else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
                startMoment = startMoment.day(offset + 7);
            }
            else {
                startMoment = startMoment.day(offset);
            }
        }
        result.start.assign("weekday", offset);
        if (startMomentFixed) {
            result.start.assign("day", startMoment.date());
            result.start.assign("month", startMoment.month() + 1);
            result.start.assign("year", startMoment.year());
        }
        else {
            result.start.imply("day", startMoment.date());
            result.start.imply("month", startMoment.month() + 1);
            result.start.imply("year", startMoment.year());
        }
        return result;
    }
}
//# sourceMappingURL=ZHHansRelationWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansTimeExpressionParser.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansTimeExpressionParser.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/constants.js");



const FIRST_REG_PATTERN = new RegExp("(?:从|自)?" +
    "(?:" +
    "(今|明|前|大前|后|大后|昨)(早|朝|晚)|" +
    "(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" +
    "(今|明|前|大前|后|大后|昨)(?:日|天)" +
    "(?:[\\s,，]*)" +
    "(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?" +
    ")?" +
    "(?:[\\s,，]*)" +
    "(?:(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)(?:\\s*)(?:点|时|:|：)" +
    "(?:\\s*)" +
    "(\\d+|半|正|整|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)?(?:\\s*)(?:分|:|：)?" +
    "(?:\\s*)" +
    "(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)?(?:\\s*)(?:秒)?)" +
    "(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const SECOND_REG_PATTERN = new RegExp("(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)" +
    "(?:" +
    "(今|明|前|大前|后|大后|昨)(早|朝|晚)|" +
    "(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" +
    "(今|明|前|大前|后|大后|昨)(?:日|天)" +
    "(?:[\\s,，]*)" +
    "(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?" +
    ")?" +
    "(?:[\\s,，]*)" +
    "(?:(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)(?:\\s*)(?:点|时|:|：)" +
    "(?:\\s*)" +
    "(\\d+|半|正|整|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)?(?:\\s*)(?:分|:|：)?" +
    "(?:\\s*)" +
    "(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)?(?:\\s*)(?:秒)?)" +
    "(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const DAY_GROUP_1 = 1;
const ZH_AM_PM_HOUR_GROUP_1 = 2;
const ZH_AM_PM_HOUR_GROUP_2 = 3;
const DAY_GROUP_3 = 4;
const ZH_AM_PM_HOUR_GROUP_3 = 5;
const HOUR_GROUP = 6;
const MINUTE_GROUP = 7;
const SECOND_GROUP = 8;
const AM_PM_HOUR_GROUP = 9;
class ZHHansTimeExpressionParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return FIRST_REG_PATTERN;
    }
    innerExtract(context, match) {
        if (match.index > 0 && context.text[match.index - 1].match(/\w/)) {
            return null;
        }
        const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const result = context.createParsingResult(match.index, match[0]);
        let startMoment = refMoment.clone();
        if (match[DAY_GROUP_1]) {
            const day1 = match[DAY_GROUP_1];
            if (day1 == "明") {
                if (refMoment.hour() > 1) {
                    startMoment = startMoment.add(1, "day");
                }
            }
            else if (day1 == "昨") {
                startMoment = startMoment.add(-1, "day");
            }
            else if (day1 == "前") {
                startMoment = startMoment.add(-2, "day");
            }
            else if (day1 == "大前") {
                startMoment = startMoment.add(-3, "day");
            }
            else if (day1 == "后") {
                startMoment = startMoment.add(2, "day");
            }
            else if (day1 == "大后") {
                startMoment = startMoment.add(3, "day");
            }
            result.start.assign("day", startMoment.date());
            result.start.assign("month", startMoment.month() + 1);
            result.start.assign("year", startMoment.year());
        }
        else if (match[DAY_GROUP_3]) {
            const day3 = match[DAY_GROUP_3];
            if (day3 == "明") {
                startMoment = startMoment.add(1, "day");
            }
            else if (day3 == "昨") {
                startMoment = startMoment.add(-1, "day");
            }
            else if (day3 == "前") {
                startMoment = startMoment.add(-2, "day");
            }
            else if (day3 == "大前") {
                startMoment = startMoment.add(-3, "day");
            }
            else if (day3 == "后") {
                startMoment = startMoment.add(2, "day");
            }
            else if (day3 == "大后") {
                startMoment = startMoment.add(3, "day");
            }
            result.start.assign("day", startMoment.date());
            result.start.assign("month", startMoment.month() + 1);
            result.start.assign("year", startMoment.year());
        }
        else {
            result.start.imply("day", startMoment.date());
            result.start.imply("month", startMoment.month() + 1);
            result.start.imply("year", startMoment.year());
        }
        let hour = 0;
        let minute = 0;
        let meridiem = -1;
        if (match[SECOND_GROUP]) {
            let second = parseInt(match[SECOND_GROUP]);
            if (isNaN(second)) {
                second = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[SECOND_GROUP]);
            }
            if (second >= 60)
                return null;
            result.start.assign("second", second);
        }
        hour = parseInt(match[HOUR_GROUP]);
        if (isNaN(hour)) {
            hour = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[HOUR_GROUP]);
        }
        if (match[MINUTE_GROUP]) {
            if (match[MINUTE_GROUP] == "半") {
                minute = 30;
            }
            else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
                minute = 0;
            }
            else {
                minute = parseInt(match[MINUTE_GROUP]);
                if (isNaN(minute)) {
                    minute = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[MINUTE_GROUP]);
                }
            }
        }
        else if (hour > 100) {
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (minute >= 60) {
            return null;
        }
        if (hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = 1;
        }
        if (match[AM_PM_HOUR_GROUP]) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            if (ampm == "p") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
            const zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
            const zhAMPM1 = zhAMPMString1[0];
            if (zhAMPM1 == "早") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM1 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
            const zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
            const zhAMPM2 = zhAMPMString2[0];
            if (zhAMPM2 == "上" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM2 == "下" || zhAMPM2 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
            const zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
            const zhAMPM3 = zhAMPMString3[0];
            if (zhAMPM3 == "上" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM3 == "下" || zhAMPM3 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        result.start.assign("hour", hour);
        result.start.assign("minute", minute);
        if (meridiem >= 0) {
            result.start.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                result.start.imply("meridiem", 0);
            }
            else {
                result.start.imply("meridiem", 1);
            }
        }
        match = SECOND_REG_PATTERN.exec(context.text.substring(result.index + result.text.length));
        if (!match) {
            if (result.text.match(/^\d+$/)) {
                return null;
            }
            return result;
        }
        let endMoment = startMoment.clone();
        result.end = context.createParsingComponents();
        if (match[DAY_GROUP_1]) {
            const day1 = match[DAY_GROUP_1];
            if (day1 == "明") {
                if (refMoment.hour() > 1) {
                    endMoment = endMoment.add(1, "day");
                }
            }
            else if (day1 == "昨") {
                endMoment = endMoment.add(-1, "day");
            }
            else if (day1 == "前") {
                endMoment = endMoment.add(-2, "day");
            }
            else if (day1 == "大前") {
                endMoment = endMoment.add(-3, "day");
            }
            else if (day1 == "后") {
                endMoment = endMoment.add(2, "day");
            }
            else if (day1 == "大后") {
                endMoment = endMoment.add(3, "day");
            }
            result.end.assign("day", endMoment.date());
            result.end.assign("month", endMoment.month() + 1);
            result.end.assign("year", endMoment.year());
        }
        else if (match[DAY_GROUP_3]) {
            const day3 = match[DAY_GROUP_3];
            if (day3 == "明") {
                endMoment = endMoment.add(1, "day");
            }
            else if (day3 == "昨") {
                endMoment = endMoment.add(-1, "day");
            }
            else if (day3 == "前") {
                endMoment = endMoment.add(-2, "day");
            }
            else if (day3 == "大前") {
                endMoment = endMoment.add(-3, "day");
            }
            else if (day3 == "后") {
                endMoment = endMoment.add(2, "day");
            }
            else if (day3 == "大后") {
                endMoment = endMoment.add(3, "day");
            }
            result.end.assign("day", endMoment.date());
            result.end.assign("month", endMoment.month() + 1);
            result.end.assign("year", endMoment.year());
        }
        else {
            result.end.imply("day", endMoment.date());
            result.end.imply("month", endMoment.month() + 1);
            result.end.imply("year", endMoment.year());
        }
        hour = 0;
        minute = 0;
        meridiem = -1;
        if (match[SECOND_GROUP]) {
            let second = parseInt(match[SECOND_GROUP]);
            if (isNaN(second)) {
                second = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[SECOND_GROUP]);
            }
            if (second >= 60)
                return null;
            result.end.assign("second", second);
        }
        hour = parseInt(match[HOUR_GROUP]);
        if (isNaN(hour)) {
            hour = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[HOUR_GROUP]);
        }
        if (match[MINUTE_GROUP]) {
            if (match[MINUTE_GROUP] == "半") {
                minute = 30;
            }
            else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
                minute = 0;
            }
            else {
                minute = parseInt(match[MINUTE_GROUP]);
                if (isNaN(minute)) {
                    minute = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[MINUTE_GROUP]);
                }
            }
        }
        else if (hour > 100) {
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (minute >= 60) {
            return null;
        }
        if (hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = 1;
        }
        if (match[AM_PM_HOUR_GROUP]) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            if (ampm == "p") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
            if (!result.start.isCertain("meridiem")) {
                if (meridiem == 0) {
                    result.start.imply("meridiem", 0);
                    if (result.start.get("hour") == 12) {
                        result.start.assign("hour", 0);
                    }
                }
                else {
                    result.start.imply("meridiem", 1);
                    if (result.start.get("hour") != 12) {
                        result.start.assign("hour", result.start.get("hour") + 12);
                    }
                }
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
            const zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
            const zhAMPM1 = zhAMPMString1[0];
            if (zhAMPM1 == "早") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM1 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
            const zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
            const zhAMPM2 = zhAMPMString2[0];
            if (zhAMPM2 == "上" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM2 == "下" || zhAMPM2 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
            const zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
            const zhAMPM3 = zhAMPMString3[0];
            if (zhAMPM3 == "上" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM3 == "下" || zhAMPM3 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        result.text = result.text + match[0];
        result.end.assign("hour", hour);
        result.end.assign("minute", minute);
        if (meridiem >= 0) {
            result.end.assign("meridiem", meridiem);
        }
        else {
            const startAtPM = result.start.isCertain("meridiem") && result.start.get("meridiem") == 1;
            if (startAtPM && result.start.get("hour") > hour) {
                result.end.imply("meridiem", 0);
            }
            else if (hour > 12) {
                result.end.imply("meridiem", 1);
            }
        }
        if (result.end.date().getTime() < result.start.date().getTime()) {
            result.end.imply("day", result.end.get("day") + 1);
        }
        return result;
    }
}
//# sourceMappingURL=ZHHansTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansWeekdayParser.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansWeekdayParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansWeekdayParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/constants.js");



const PATTERN = new RegExp("(?:星期|礼拜|周)(?<weekday>" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET).join("|") + ")");
class ZHHansWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const dayOfWeek = match.groups.weekday;
        const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET[dayOfWeek];
        if (offset === undefined)
            return null;
        let startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const startMomentFixed = false;
        const refOffset = startMoment.day();
        if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
            startMoment = startMoment.day(offset - 7);
        }
        else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
            startMoment = startMoment.day(offset + 7);
        }
        else {
            startMoment = startMoment.day(offset);
        }
        result.start.assign("weekday", offset);
        if (startMomentFixed) {
            result.start.assign("day", startMoment.date());
            result.start.assign("month", startMoment.month() + 1);
            result.start.assign("year", startMoment.year());
        }
        else {
            result.start.imply("day", startMoment.date());
            result.start.imply("month", startMoment.month() + 1);
            result.start.imply("year", startMoment.year());
        }
        return result;
    }
}
//# sourceMappingURL=ZHHansWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/refiners/ZHHansMergeDateRangeRefiner.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/refiners/ZHHansMergeDateRangeRefiner.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class ZHHansMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(至|到|-|~|～|－|ー)\s*$/i;
    }
}
//# sourceMappingURL=ZHHansMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hans/refiners/ZHHansMergeDateTimeRefiner.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hans/refiners/ZHHansMergeDateTimeRefiner.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHansMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class ZHHansMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*$/i;
    }
}
//# sourceMappingURL=ZHHansMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/constants.js":
/*!************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/constants.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NUMBER: () => (/* binding */ NUMBER),
/* harmony export */   WEEKDAY_OFFSET: () => (/* binding */ WEEKDAY_OFFSET),
/* harmony export */   zhStringToNumber: () => (/* binding */ zhStringToNumber),
/* harmony export */   zhStringToYear: () => (/* binding */ zhStringToYear)
/* harmony export */ });
const NUMBER = {
    "零": 0,
    "一": 1,
    "二": 2,
    "兩": 2,
    "三": 3,
    "四": 4,
    "五": 5,
    "六": 6,
    "七": 7,
    "八": 8,
    "九": 9,
    "十": 10,
    "廿": 20,
    "卅": 30,
};
const WEEKDAY_OFFSET = {
    "天": 0,
    "日": 0,
    "一": 1,
    "二": 2,
    "三": 3,
    "四": 4,
    "五": 5,
    "六": 6,
};
function zhStringToNumber(text) {
    let number = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === "十") {
            number = number === 0 ? NUMBER[char] : number * NUMBER[char];
        }
        else {
            number += NUMBER[char];
        }
    }
    return number;
}
function zhStringToYear(text) {
    let string = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        string = string + NUMBER[char];
    }
    return parseInt(string);
}
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_1__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   hant: () => (/* binding */ hant),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/refiners/ExtractTimezoneOffsetRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneOffsetRefiner.js");
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _parsers_ZHHantCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/ZHHantCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantCasualDateParser.js");
/* harmony import */ var _parsers_ZHHantDateParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers/ZHHantDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDateParser.js");
/* harmony import */ var _parsers_ZHHantDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parsers/ZHHantDeadlineFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDeadlineFormatParser.js");
/* harmony import */ var _parsers_ZHHantRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parsers/ZHHantRelationWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantRelationWeekdayParser.js");
/* harmony import */ var _parsers_ZHHantTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsers/ZHHantTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantTimeExpressionParser.js");
/* harmony import */ var _parsers_ZHHantWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsers/ZHHantWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantWeekdayParser.js");
/* harmony import */ var _refiners_ZHHantMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./refiners/ZHHantMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateRangeRefiner.js");
/* harmony import */ var _refiners_ZHHantMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./refiners/ZHHantMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateTimeRefiner.js");















const hant = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_0__.Chrono(createConfiguration());
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration() {
    const option = createConfiguration();
    option.parsers.unshift(new _parsers_ZHHantCasualDateParser_js__WEBPACK_IMPORTED_MODULE_3__["default"]());
    return option;
}
function createConfiguration() {
    const configuration = (0,_configurations_js__WEBPACK_IMPORTED_MODULE_4__.includeCommonConfiguration)({
        parsers: [
            new _parsers_ZHHantDateParser_js__WEBPACK_IMPORTED_MODULE_5__["default"](),
            new _parsers_ZHHantRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_6__["default"](),
            new _parsers_ZHHantWeekdayParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](),
            new _parsers_ZHHantTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](),
            new _parsers_ZHHantDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
        ],
        refiners: [new _refiners_ZHHantMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_10__["default"](), new _refiners_ZHHantMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_11__["default"]()],
    });
    configuration.refiners = configuration.refiners.filter((refiner) => !(refiner instanceof _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_12__["default"]));
    return configuration;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantCasualDateParser.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantCasualDateParser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantCasualDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");


const NOW_GROUP = 1;
const DAY_GROUP_1 = 2;
const TIME_GROUP_1 = 3;
const TIME_GROUP_2 = 4;
const DAY_GROUP_3 = 5;
const TIME_GROUP_3 = 6;
class ZHHantCasualDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return new RegExp("(而家|立(?:刻|即)|即刻)|" +
            "(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|" +
            "(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" +
            "(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)" +
            "(?:[\\s|,|，]*)" +
            "(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?", "i");
    }
    innerExtract(context, match) {
        const index = match.index;
        const result = context.createParsingResult(index, match[0]);
        const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        let startMoment = refMoment;
        if (match[NOW_GROUP]) {
            result.start.imply("hour", refMoment.hour());
            result.start.imply("minute", refMoment.minute());
            result.start.imply("second", refMoment.second());
            result.start.imply("millisecond", refMoment.millisecond());
        }
        else if (match[DAY_GROUP_1]) {
            const day1 = match[DAY_GROUP_1];
            const time1 = match[TIME_GROUP_1];
            if (day1 == "明" || day1 == "聽") {
                if (refMoment.hour() > 1) {
                    startMoment = startMoment.add(1, "day");
                }
            }
            else if (day1 == "昨" || day1 == "尋" || day1 == "琴") {
                startMoment = startMoment.add(-1, "day");
            }
            else if (day1 == "前") {
                startMoment = startMoment.add(-2, "day");
            }
            else if (day1 == "大前") {
                startMoment = startMoment.add(-3, "day");
            }
            else if (day1 == "後") {
                startMoment = startMoment.add(2, "day");
            }
            else if (day1 == "大後") {
                startMoment = startMoment.add(3, "day");
            }
            if (time1 == "早" || time1 == "朝") {
                result.start.imply("hour", 6);
            }
            else if (time1 == "晚") {
                result.start.imply("hour", 22);
                result.start.imply("meridiem", 1);
            }
        }
        else if (match[TIME_GROUP_2]) {
            const timeString2 = match[TIME_GROUP_2];
            const time2 = timeString2[0];
            if (time2 == "早" || time2 == "朝" || time2 == "上") {
                result.start.imply("hour", 6);
            }
            else if (time2 == "下" || time2 == "晏") {
                result.start.imply("hour", 15);
                result.start.imply("meridiem", 1);
            }
            else if (time2 == "中") {
                result.start.imply("hour", 12);
                result.start.imply("meridiem", 1);
            }
            else if (time2 == "夜" || time2 == "晚") {
                result.start.imply("hour", 22);
                result.start.imply("meridiem", 1);
            }
            else if (time2 == "凌") {
                result.start.imply("hour", 0);
            }
        }
        else if (match[DAY_GROUP_3]) {
            const day3 = match[DAY_GROUP_3];
            if (day3 == "明" || day3 == "聽") {
                if (refMoment.hour() > 1) {
                    startMoment = startMoment.add(1, "day");
                }
            }
            else if (day3 == "昨" || day3 == "尋" || day3 == "琴") {
                startMoment = startMoment.add(-1, "day");
            }
            else if (day3 == "前") {
                startMoment = startMoment.add(-2, "day");
            }
            else if (day3 == "大前") {
                startMoment = startMoment.add(-3, "day");
            }
            else if (day3 == "後") {
                startMoment = startMoment.add(2, "day");
            }
            else if (day3 == "大後") {
                startMoment = startMoment.add(3, "day");
            }
            const timeString3 = match[TIME_GROUP_3];
            if (timeString3) {
                const time3 = timeString3[0];
                if (time3 == "早" || time3 == "朝" || time3 == "上") {
                    result.start.imply("hour", 6);
                }
                else if (time3 == "下" || time3 == "晏") {
                    result.start.imply("hour", 15);
                    result.start.imply("meridiem", 1);
                }
                else if (time3 == "中") {
                    result.start.imply("hour", 12);
                    result.start.imply("meridiem", 1);
                }
                else if (time3 == "夜" || time3 == "晚") {
                    result.start.imply("hour", 22);
                    result.start.imply("meridiem", 1);
                }
                else if (time3 == "凌") {
                    result.start.imply("hour", 0);
                }
            }
        }
        result.start.assign("day", startMoment.date());
        result.start.assign("month", startMoment.month() + 1);
        result.start.assign("year", startMoment.year());
        return result;
    }
}
//# sourceMappingURL=ZHHantCasualDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDateParser.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDateParser.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantDateParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/constants.js");



const YEAR_GROUP = 1;
const MONTH_GROUP = 2;
const DAY_GROUP = 3;
class ZHHantDateParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_1__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return new RegExp("(" +
            "\\d{2,4}|" +
            "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{4}|" +
            "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{2}" +
            ")?" +
            "(?:\\s*)" +
            "(?:年)?" +
            "(?:[\\s|,|，]*)" +
            "(" +
            "\\d{1,2}|" +
            "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{1,2}" +
            ")" +
            "(?:\\s*)" +
            "(?:月)" +
            "(?:\\s*)" +
            "(" +
            "\\d{1,2}|" +
            "[" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_2__.NUMBER).join("") + "]{1,2}" +
            ")?" +
            "(?:\\s*)" +
            "(?:日|號)?");
    }
    innerExtract(context, match) {
        const startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const result = context.createParsingResult(match.index, match[0]);
        let month = parseInt(match[MONTH_GROUP]);
        if (isNaN(month))
            month = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToNumber)(match[MONTH_GROUP]);
        result.start.assign("month", month);
        if (match[DAY_GROUP]) {
            let day = parseInt(match[DAY_GROUP]);
            if (isNaN(day))
                day = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToNumber)(match[DAY_GROUP]);
            result.start.assign("day", day);
        }
        else {
            result.start.imply("day", startMoment.date());
        }
        if (match[YEAR_GROUP]) {
            let year = parseInt(match[YEAR_GROUP]);
            if (isNaN(year))
                year = (0,_constants_js__WEBPACK_IMPORTED_MODULE_2__.zhStringToYear)(match[YEAR_GROUP]);
            result.start.assign("year", year);
        }
        else {
            result.start.imply("year", startMoment.year());
        }
        return result;
    }
}
//# sourceMappingURL=ZHHantDateParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDeadlineFormatParser.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDeadlineFormatParser.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantDeadlineFormatParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/constants.js");



const PATTERN = new RegExp("(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+|半|幾)(?:\\s*)" +
    "(?:個)?" +
    "(秒(?:鐘)?|分鐘|小時|鐘|日|天|星期|禮拜|月|年)" +
    "(?:(?:之|過)?後|(?:之)?內)", "i");
const NUMBER_GROUP = 1;
const UNIT_GROUP = 2;
class ZHHantDeadlineFormatParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        let number = parseInt(match[NUMBER_GROUP]);
        if (isNaN(number)) {
            number = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[NUMBER_GROUP]);
        }
        if (isNaN(number)) {
            const string = match[NUMBER_GROUP];
            if (string === "幾") {
                number = 3;
            }
            else if (string === "半") {
                number = 0.5;
            }
            else {
                return null;
            }
        }
        let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const unit = match[UNIT_GROUP];
        const unitAbbr = unit[0];
        if (unitAbbr.match(/[日天星禮月年]/)) {
            if (unitAbbr == "日" || unitAbbr == "天") {
                date = date.add(number, "d");
            }
            else if (unitAbbr == "星" || unitAbbr == "禮") {
                date = date.add(number * 7, "d");
            }
            else if (unitAbbr == "月") {
                date = date.add(number, "month");
            }
            else if (unitAbbr == "年") {
                date = date.add(number, "year");
            }
            result.start.assign("year", date.year());
            result.start.assign("month", date.month() + 1);
            result.start.assign("day", date.date());
            return result;
        }
        if (unitAbbr == "秒") {
            date = date.add(number, "second");
        }
        else if (unitAbbr == "分") {
            date = date.add(number, "minute");
        }
        else if (unitAbbr == "小" || unitAbbr == "鐘") {
            date = date.add(number, "hour");
        }
        result.start.imply("year", date.year());
        result.start.imply("month", date.month() + 1);
        result.start.imply("day", date.date());
        result.start.assign("hour", date.hour());
        result.start.assign("minute", date.minute());
        result.start.assign("second", date.second());
        return result;
    }
}
//# sourceMappingURL=ZHHantDeadlineFormatParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantRelationWeekdayParser.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantRelationWeekdayParser.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantRelationWeekdayParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/constants.js");



const PATTERN = new RegExp("(?<prefix>上|今|下|這|呢)(?:個)?(?:星期|禮拜|週)(?<weekday>" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET).join("|") + ")");
class ZHHantRelationWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const dayOfWeek = match.groups.weekday;
        const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET[dayOfWeek];
        if (offset === undefined)
            return null;
        let modifier = null;
        const prefix = match.groups.prefix;
        if (prefix == "上") {
            modifier = "last";
        }
        else if (prefix == "下") {
            modifier = "next";
        }
        else if (prefix == "今" || prefix == "這" || prefix == "呢") {
            modifier = "this";
        }
        let startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        let startMomentFixed = false;
        const refOffset = startMoment.day();
        if (modifier == "last" || modifier == "past") {
            startMoment = startMoment.day(offset - 7);
            startMomentFixed = true;
        }
        else if (modifier == "next") {
            startMoment = startMoment.day(offset + 7);
            startMomentFixed = true;
        }
        else if (modifier == "this") {
            startMoment = startMoment.day(offset);
        }
        else {
            if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
                startMoment = startMoment.day(offset - 7);
            }
            else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
                startMoment = startMoment.day(offset + 7);
            }
            else {
                startMoment = startMoment.day(offset);
            }
        }
        result.start.assign("weekday", offset);
        if (startMomentFixed) {
            result.start.assign("day", startMoment.date());
            result.start.assign("month", startMoment.month() + 1);
            result.start.assign("year", startMoment.year());
        }
        else {
            result.start.imply("day", startMoment.date());
            result.start.imply("month", startMoment.month() + 1);
            result.start.imply("year", startMoment.year());
        }
        return result;
    }
}
//# sourceMappingURL=ZHHantRelationWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantTimeExpressionParser.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantTimeExpressionParser.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantTimeExpressionParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/constants.js");



const FIRST_REG_PATTERN = new RegExp("(?:由|從|自)?" +
    "(?:" +
    "(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|" +
    "(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" +
    "(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)" +
    "(?:[\\s,，]*)" +
    "(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?" +
    ")?" +
    "(?:[\\s,，]*)" +
    "(?:(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)(?:\\s*)(?:點|時|:|：)" +
    "(?:\\s*)" +
    "(\\d+|半|正|整|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)?(?:\\s*)(?:分|:|：)?" +
    "(?:\\s*)" +
    "(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)?(?:\\s*)(?:秒)?)" +
    "(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const SECOND_REG_PATTERN = new RegExp("(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)" +
    "(?:" +
    "(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|" +
    "(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|" +
    "(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)" +
    "(?:[\\s,，]*)" +
    "(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?" +
    ")?" +
    "(?:[\\s,，]*)" +
    "(?:(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)(?:\\s*)(?:點|時|:|：)" +
    "(?:\\s*)" +
    "(\\d+|半|正|整|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)?(?:\\s*)(?:分|:|：)?" +
    "(?:\\s*)" +
    "(\\d+|[" +
    Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.NUMBER).join("") +
    "]+)?(?:\\s*)(?:秒)?)" +
    "(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const DAY_GROUP_1 = 1;
const ZH_AM_PM_HOUR_GROUP_1 = 2;
const ZH_AM_PM_HOUR_GROUP_2 = 3;
const DAY_GROUP_3 = 4;
const ZH_AM_PM_HOUR_GROUP_3 = 5;
const HOUR_GROUP = 6;
const MINUTE_GROUP = 7;
const SECOND_GROUP = 8;
const AM_PM_HOUR_GROUP = 9;
class ZHHantTimeExpressionParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return FIRST_REG_PATTERN;
    }
    innerExtract(context, match) {
        if (match.index > 0 && context.text[match.index - 1].match(/\w/)) {
            return null;
        }
        const refMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const result = context.createParsingResult(match.index, match[0]);
        let startMoment = refMoment.clone();
        if (match[DAY_GROUP_1]) {
            var day1 = match[DAY_GROUP_1];
            if (day1 == "明" || day1 == "聽") {
                if (refMoment.hour() > 1) {
                    startMoment = startMoment.add(1, "day");
                }
            }
            else if (day1 == "昨" || day1 == "尋" || day1 == "琴") {
                startMoment = startMoment.add(-1, "day");
            }
            else if (day1 == "前") {
                startMoment = startMoment.add(-2, "day");
            }
            else if (day1 == "大前") {
                startMoment = startMoment.add(-3, "day");
            }
            else if (day1 == "後") {
                startMoment = startMoment.add(2, "day");
            }
            else if (day1 == "大後") {
                startMoment = startMoment.add(3, "day");
            }
            result.start.assign("day", startMoment.date());
            result.start.assign("month", startMoment.month() + 1);
            result.start.assign("year", startMoment.year());
        }
        else if (match[DAY_GROUP_3]) {
            var day3 = match[DAY_GROUP_3];
            if (day3 == "明" || day3 == "聽") {
                startMoment = startMoment.add(1, "day");
            }
            else if (day3 == "昨" || day3 == "尋" || day3 == "琴") {
                startMoment = startMoment.add(-1, "day");
            }
            else if (day3 == "前") {
                startMoment = startMoment.add(-2, "day");
            }
            else if (day3 == "大前") {
                startMoment = startMoment.add(-3, "day");
            }
            else if (day3 == "後") {
                startMoment = startMoment.add(2, "day");
            }
            else if (day3 == "大後") {
                startMoment = startMoment.add(3, "day");
            }
            result.start.assign("day", startMoment.date());
            result.start.assign("month", startMoment.month() + 1);
            result.start.assign("year", startMoment.year());
        }
        else {
            result.start.imply("day", startMoment.date());
            result.start.imply("month", startMoment.month() + 1);
            result.start.imply("year", startMoment.year());
        }
        let hour = 0;
        let minute = 0;
        let meridiem = -1;
        if (match[SECOND_GROUP]) {
            var second = parseInt(match[SECOND_GROUP]);
            if (isNaN(second)) {
                second = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[SECOND_GROUP]);
            }
            if (second >= 60)
                return null;
            result.start.assign("second", second);
        }
        hour = parseInt(match[HOUR_GROUP]);
        if (isNaN(hour)) {
            hour = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[HOUR_GROUP]);
        }
        if (match[MINUTE_GROUP]) {
            if (match[MINUTE_GROUP] == "半") {
                minute = 30;
            }
            else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
                minute = 0;
            }
            else {
                minute = parseInt(match[MINUTE_GROUP]);
                if (isNaN(minute)) {
                    minute = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[MINUTE_GROUP]);
                }
            }
        }
        else if (hour > 100) {
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (minute >= 60) {
            return null;
        }
        if (hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = 1;
        }
        if (match[AM_PM_HOUR_GROUP]) {
            if (hour > 12)
                return null;
            var ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            if (ampm == "p") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
            var zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
            var zhAMPM1 = zhAMPMString1[0];
            if (zhAMPM1 == "朝" || zhAMPM1 == "早") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM1 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
            var zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
            var zhAMPM2 = zhAMPMString2[0];
            if (zhAMPM2 == "上" || zhAMPM2 == "朝" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM2 == "下" || zhAMPM2 == "晏" || zhAMPM2 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
            var zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
            var zhAMPM3 = zhAMPMString3[0];
            if (zhAMPM3 == "上" || zhAMPM3 == "朝" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM3 == "下" || zhAMPM3 == "晏" || zhAMPM3 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        result.start.assign("hour", hour);
        result.start.assign("minute", minute);
        if (meridiem >= 0) {
            result.start.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                result.start.imply("meridiem", 0);
            }
            else {
                result.start.imply("meridiem", 1);
            }
        }
        match = SECOND_REG_PATTERN.exec(context.text.substring(result.index + result.text.length));
        if (!match) {
            if (result.text.match(/^\d+$/)) {
                return null;
            }
            return result;
        }
        let endMoment = startMoment.clone();
        result.end = context.createParsingComponents();
        if (match[DAY_GROUP_1]) {
            var day1 = match[DAY_GROUP_1];
            if (day1 == "明" || day1 == "聽") {
                if (refMoment.hour() > 1) {
                    endMoment = endMoment.add(1, "day");
                }
            }
            else if (day1 == "昨" || day1 == "尋" || day1 == "琴") {
                endMoment = endMoment.add(-1, "day");
            }
            else if (day1 == "前") {
                endMoment = endMoment.add(-2, "day");
            }
            else if (day1 == "大前") {
                endMoment = endMoment.add(-3, "day");
            }
            else if (day1 == "後") {
                endMoment = endMoment.add(2, "day");
            }
            else if (day1 == "大後") {
                endMoment = endMoment.add(3, "day");
            }
            result.end.assign("day", endMoment.date());
            result.end.assign("month", endMoment.month() + 1);
            result.end.assign("year", endMoment.year());
        }
        else if (match[DAY_GROUP_3]) {
            var day3 = match[DAY_GROUP_3];
            if (day3 == "明" || day3 == "聽") {
                endMoment = endMoment.add(1, "day");
            }
            else if (day3 == "昨" || day3 == "尋" || day3 == "琴") {
                endMoment = endMoment.add(-1, "day");
            }
            else if (day3 == "前") {
                endMoment = endMoment.add(-2, "day");
            }
            else if (day3 == "大前") {
                endMoment = endMoment.add(-3, "day");
            }
            else if (day3 == "後") {
                endMoment = endMoment.add(2, "day");
            }
            else if (day3 == "大後") {
                endMoment = endMoment.add(3, "day");
            }
            result.end.assign("day", endMoment.date());
            result.end.assign("month", endMoment.month() + 1);
            result.end.assign("year", endMoment.year());
        }
        else {
            result.end.imply("day", endMoment.date());
            result.end.imply("month", endMoment.month() + 1);
            result.end.imply("year", endMoment.year());
        }
        hour = 0;
        minute = 0;
        meridiem = -1;
        if (match[SECOND_GROUP]) {
            var second = parseInt(match[SECOND_GROUP]);
            if (isNaN(second)) {
                second = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[SECOND_GROUP]);
            }
            if (second >= 60)
                return null;
            result.end.assign("second", second);
        }
        hour = parseInt(match[HOUR_GROUP]);
        if (isNaN(hour)) {
            hour = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[HOUR_GROUP]);
        }
        if (match[MINUTE_GROUP]) {
            if (match[MINUTE_GROUP] == "半") {
                minute = 30;
            }
            else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
                minute = 0;
            }
            else {
                minute = parseInt(match[MINUTE_GROUP]);
                if (isNaN(minute)) {
                    minute = (0,_constants_js__WEBPACK_IMPORTED_MODULE_1__.zhStringToNumber)(match[MINUTE_GROUP]);
                }
            }
        }
        else if (hour > 100) {
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (minute >= 60) {
            return null;
        }
        if (hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = 1;
        }
        if (match[AM_PM_HOUR_GROUP]) {
            if (hour > 12)
                return null;
            var ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            if (ampm == "p") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
            if (!result.start.isCertain("meridiem")) {
                if (meridiem == 0) {
                    result.start.imply("meridiem", 0);
                    if (result.start.get("hour") == 12) {
                        result.start.assign("hour", 0);
                    }
                }
                else {
                    result.start.imply("meridiem", 1);
                    if (result.start.get("hour") != 12) {
                        result.start.assign("hour", result.start.get("hour") + 12);
                    }
                }
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
            var zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
            var zhAMPM1 = zhAMPMString1[0];
            if (zhAMPM1 == "朝" || zhAMPM1 == "早") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM1 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
            var zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
            var zhAMPM2 = zhAMPMString2[0];
            if (zhAMPM2 == "上" || zhAMPM2 == "朝" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM2 == "下" || zhAMPM2 == "晏" || zhAMPM2 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
            var zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
            var zhAMPM3 = zhAMPMString3[0];
            if (zhAMPM3 == "上" || zhAMPM3 == "朝" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
                meridiem = 0;
                if (hour == 12)
                    hour = 0;
            }
            else if (zhAMPM3 == "下" || zhAMPM3 == "晏" || zhAMPM3 == "晚") {
                meridiem = 1;
                if (hour != 12)
                    hour += 12;
            }
        }
        result.text = result.text + match[0];
        result.end.assign("hour", hour);
        result.end.assign("minute", minute);
        if (meridiem >= 0) {
            result.end.assign("meridiem", meridiem);
        }
        else {
            const startAtPM = result.start.isCertain("meridiem") && result.start.get("meridiem") == 1;
            if (startAtPM && result.start.get("hour") > hour) {
                result.end.imply("meridiem", 0);
            }
            else if (hour > 12) {
                result.end.imply("meridiem", 1);
            }
        }
        if (result.end.date().getTime() < result.start.date().getTime()) {
            result.end.imply("day", result.end.get("day") + 1);
        }
        return result;
    }
}
//# sourceMappingURL=ZHHantTimeExpressionParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantWeekdayParser.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantWeekdayParser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantWeekdayParser)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/parsers/AbstractParserWithWordBoundary.js */ "./node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/constants.js");



const PATTERN = new RegExp("(?:星期|禮拜|週)(?<weekday>" + Object.keys(_constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET).join("|") + ")");
class ZHHantWeekdayParser extends _common_parsers_AbstractParserWithWordBoundary_js__WEBPACK_IMPORTED_MODULE_2__.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const dayOfWeek = match.groups.weekday;
        const offset = _constants_js__WEBPACK_IMPORTED_MODULE_1__.WEEKDAY_OFFSET[dayOfWeek];
        if (offset === undefined)
            return null;
        let startMoment = dayjs__WEBPACK_IMPORTED_MODULE_0__(context.refDate);
        const startMomentFixed = false;
        const refOffset = startMoment.day();
        if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
            startMoment = startMoment.day(offset - 7);
        }
        else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
            startMoment = startMoment.day(offset + 7);
        }
        else {
            startMoment = startMoment.day(offset);
        }
        result.start.assign("weekday", offset);
        if (startMomentFixed) {
            result.start.assign("day", startMoment.date());
            result.start.assign("month", startMoment.month() + 1);
            result.start.assign("year", startMoment.year());
        }
        else {
            result.start.imply("day", startMoment.date());
            result.start.imply("month", startMoment.month() + 1);
            result.start.imply("year", startMoment.year());
        }
        return result;
    }
}
//# sourceMappingURL=ZHHantWeekdayParser.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateRangeRefiner.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateRangeRefiner.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantMergeDateRangeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/refiners/AbstractMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js");

class ZHHantMergeDateRangeRefiner extends _common_refiners_AbstractMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*(至|到|\-|\~|～|－|ー)\s*$/i;
    }
}
//# sourceMappingURL=ZHHantMergeDateRangeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateTimeRefiner.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateTimeRefiner.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZHHantMergeDateTimeRefiner)
/* harmony export */ });
/* harmony import */ var _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/refiners/AbstractMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js");

class ZHHantMergeDateTimeRefiner extends _common_refiners_AbstractMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    patternBetween() {
        return /^\s*$/i;
    }
}
//# sourceMappingURL=ZHHantMergeDateTimeRefiner.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/locales/zh/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/locales/zh/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chrono: () => (/* reexport safe */ _chrono_js__WEBPACK_IMPORTED_MODULE_2__.Chrono),
/* harmony export */   Meridiem: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_4__.Meridiem),
/* harmony export */   ParsingComponents: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingComponents),
/* harmony export */   ParsingResult: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_3__.ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* reexport safe */ _results_js__WEBPACK_IMPORTED_MODULE_3__.ReferenceWithTimezone),
/* harmony export */   Weekday: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_4__.Weekday),
/* harmony export */   casual: () => (/* binding */ casual),
/* harmony export */   createCasualConfiguration: () => (/* binding */ createCasualConfiguration),
/* harmony export */   createConfiguration: () => (/* binding */ createConfiguration),
/* harmony export */   hans: () => (/* reexport module object */ _hans_index_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   hant: () => (/* reexport module object */ _hant_index_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   strict: () => (/* binding */ strict)
/* harmony export */ });
/* harmony import */ var _configurations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configurations.js */ "./node_modules/chrono-node/dist/esm/configurations.js");
/* harmony import */ var _chrono_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chrono.js */ "./node_modules/chrono-node/dist/esm/chrono.js");
/* harmony import */ var _results_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../results.js */ "./node_modules/chrono-node/dist/esm/results.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types.js */ "./node_modules/chrono-node/dist/esm/types.js");
/* harmony import */ var _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/refiners/ExtractTimezoneOffsetRefiner.js */ "./node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneOffsetRefiner.js");
/* harmony import */ var _hans_parsers_ZHHansDateParser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hans/parsers/ZHHansDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDateParser.js");
/* harmony import */ var _hans_parsers_ZHHansDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hans/parsers/ZHHansDeadlineFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansDeadlineFormatParser.js");
/* harmony import */ var _hans_parsers_ZHHansRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hans/parsers/ZHHansRelationWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansRelationWeekdayParser.js");
/* harmony import */ var _hans_parsers_ZHHansTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hans/parsers/ZHHansTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansTimeExpressionParser.js");
/* harmony import */ var _hans_parsers_ZHHansWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hans/parsers/ZHHansWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/parsers/ZHHansWeekdayParser.js");
/* harmony import */ var _hant_parsers_ZHHantCasualDateParser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hant/parsers/ZHHantCasualDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantCasualDateParser.js");
/* harmony import */ var _hant_parsers_ZHHantDateParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hant/parsers/ZHHantDateParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDateParser.js");
/* harmony import */ var _hant_parsers_ZHHantDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hant/parsers/ZHHantDeadlineFormatParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantDeadlineFormatParser.js");
/* harmony import */ var _hant_parsers_ZHHantRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hant/parsers/ZHHantRelationWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantRelationWeekdayParser.js");
/* harmony import */ var _hant_parsers_ZHHantTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hant/parsers/ZHHantTimeExpressionParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantTimeExpressionParser.js");
/* harmony import */ var _hant_parsers_ZHHantWeekdayParser_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hant/parsers/ZHHantWeekdayParser.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/parsers/ZHHantWeekdayParser.js");
/* harmony import */ var _hant_refiners_ZHHantMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hant/refiners/ZHHantMergeDateRangeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateRangeRefiner.js");
/* harmony import */ var _hant_refiners_ZHHantMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hant/refiners/ZHHantMergeDateTimeRefiner.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/refiners/ZHHantMergeDateTimeRefiner.js");
/* harmony import */ var _hant_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hant/index.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hant/index.js");
/* harmony import */ var _hans_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hans/index.js */ "./node_modules/chrono-node/dist/esm/locales/zh/hans/index.js");






















const casual = new _chrono_js__WEBPACK_IMPORTED_MODULE_2__.Chrono(createCasualConfiguration());
const strict = new _chrono_js__WEBPACK_IMPORTED_MODULE_2__.Chrono(createConfiguration());
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
    return casual.parseDate(text, ref, option);
}
function createCasualConfiguration() {
    const option = createConfiguration();
    option.parsers.unshift(new _hant_parsers_ZHHantCasualDateParser_js__WEBPACK_IMPORTED_MODULE_5__["default"]());
    return option;
}
function createConfiguration() {
    const configuration = (0,_configurations_js__WEBPACK_IMPORTED_MODULE_6__.includeCommonConfiguration)({
        parsers: [
            new _hant_parsers_ZHHantDateParser_js__WEBPACK_IMPORTED_MODULE_7__["default"](),
            new _hans_parsers_ZHHansDateParser_js__WEBPACK_IMPORTED_MODULE_8__["default"](),
            new _hant_parsers_ZHHantRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
            new _hans_parsers_ZHHansRelationWeekdayParser_js__WEBPACK_IMPORTED_MODULE_10__["default"](),
            new _hant_parsers_ZHHantWeekdayParser_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
            new _hans_parsers_ZHHansWeekdayParser_js__WEBPACK_IMPORTED_MODULE_12__["default"](),
            new _hant_parsers_ZHHantTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_13__["default"](),
            new _hans_parsers_ZHHansTimeExpressionParser_js__WEBPACK_IMPORTED_MODULE_14__["default"](),
            new _hant_parsers_ZHHantDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_15__["default"](),
            new _hans_parsers_ZHHansDeadlineFormatParser_js__WEBPACK_IMPORTED_MODULE_16__["default"](),
        ],
        refiners: [new _hant_refiners_ZHHantMergeDateRangeRefiner_js__WEBPACK_IMPORTED_MODULE_17__["default"](), new _hant_refiners_ZHHantMergeDateTimeRefiner_js__WEBPACK_IMPORTED_MODULE_18__["default"]()],
    });
    configuration.refiners = configuration.refiners.filter((refiner) => !(refiner instanceof _common_refiners_ExtractTimezoneOffsetRefiner_js__WEBPACK_IMPORTED_MODULE_19__["default"]));
    return configuration;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/results.js":
/*!******************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/results.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParsingComponents: () => (/* binding */ ParsingComponents),
/* harmony export */   ParsingResult: () => (/* binding */ ParsingResult),
/* harmony export */   ReferenceWithTimezone: () => (/* binding */ ReferenceWithTimezone)
/* harmony export */ });
/* harmony import */ var dayjs_plugin_quarterOfYear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/plugin/quarterOfYear.js */ "./node_modules/dayjs/plugin/quarterOfYear.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dayjs.js */ "./node_modules/chrono-node/dist/esm/utils/dayjs.js");
/* harmony import */ var _timezone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timezone.js */ "./node_modules/chrono-node/dist/esm/timezone.js");




dayjs__WEBPACK_IMPORTED_MODULE_1__.extend(dayjs_plugin_quarterOfYear_js__WEBPACK_IMPORTED_MODULE_0__);
class ReferenceWithTimezone {
    constructor(input) {
        input = input ?? new Date();
        if (input instanceof Date) {
            this.instant = input;
        }
        else {
            this.instant = input.instant ?? new Date();
            this.timezoneOffset = (0,_timezone_js__WEBPACK_IMPORTED_MODULE_2__.toTimezoneOffset)(input.timezone, this.instant);
        }
    }
    getDateWithAdjustedTimezone() {
        return new Date(this.instant.getTime() + this.getSystemTimezoneAdjustmentMinute(this.instant) * 60000);
    }
    getSystemTimezoneAdjustmentMinute(date, overrideTimezoneOffset) {
        if (!date || date.getTime() < 0) {
            date = new Date();
        }
        const currentTimezoneOffset = -date.getTimezoneOffset();
        const targetTimezoneOffset = overrideTimezoneOffset ?? this.timezoneOffset ?? currentTimezoneOffset;
        return currentTimezoneOffset - targetTimezoneOffset;
    }
}
class ParsingComponents {
    constructor(reference, knownComponents) {
        this._tags = new Set();
        this.reference = reference;
        this.knownValues = {};
        this.impliedValues = {};
        if (knownComponents) {
            for (const key in knownComponents) {
                this.knownValues[key] = knownComponents[key];
            }
        }
        const refDayJs = dayjs__WEBPACK_IMPORTED_MODULE_1__(reference.instant);
        this.imply("day", refDayJs.date());
        this.imply("month", refDayJs.month() + 1);
        this.imply("year", refDayJs.year());
        this.imply("hour", 12);
        this.imply("minute", 0);
        this.imply("second", 0);
        this.imply("millisecond", 0);
    }
    get(component) {
        if (component in this.knownValues) {
            return this.knownValues[component];
        }
        if (component in this.impliedValues) {
            return this.impliedValues[component];
        }
        return null;
    }
    isCertain(component) {
        return component in this.knownValues;
    }
    getCertainComponents() {
        return Object.keys(this.knownValues);
    }
    imply(component, value) {
        if (component in this.knownValues) {
            return this;
        }
        this.impliedValues[component] = value;
        return this;
    }
    assign(component, value) {
        this.knownValues[component] = value;
        delete this.impliedValues[component];
        return this;
    }
    delete(component) {
        delete this.knownValues[component];
        delete this.impliedValues[component];
    }
    clone() {
        const component = new ParsingComponents(this.reference);
        component.knownValues = {};
        component.impliedValues = {};
        for (const key in this.knownValues) {
            component.knownValues[key] = this.knownValues[key];
        }
        for (const key in this.impliedValues) {
            component.impliedValues[key] = this.impliedValues[key];
        }
        return component;
    }
    isOnlyDate() {
        return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
    }
    isOnlyTime() {
        return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
    }
    isOnlyWeekdayComponent() {
        return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
    }
    isDateWithUnknownYear() {
        return this.isCertain("month") && !this.isCertain("year");
    }
    isValidDate() {
        const date = this.dateWithoutTimezoneAdjustment();
        if (date.getFullYear() !== this.get("year"))
            return false;
        if (date.getMonth() !== this.get("month") - 1)
            return false;
        if (date.getDate() !== this.get("day"))
            return false;
        if (this.get("hour") != null && date.getHours() != this.get("hour"))
            return false;
        if (this.get("minute") != null && date.getMinutes() != this.get("minute"))
            return false;
        return true;
    }
    toString() {
        return `[ParsingComponents {
            tags: ${JSON.stringify(Array.from(this._tags).sort())}, 
            knownValues: ${JSON.stringify(this.knownValues)}, 
            impliedValues: ${JSON.stringify(this.impliedValues)}}, 
            reference: ${JSON.stringify(this.reference)}]`;
    }
    dayjs() {
        return dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date());
    }
    date() {
        const date = this.dateWithoutTimezoneAdjustment();
        const timezoneAdjustment = this.reference.getSystemTimezoneAdjustmentMinute(date, this.get("timezoneOffset"));
        return new Date(date.getTime() + timezoneAdjustment * 60000);
    }
    addTag(tag) {
        this._tags.add(tag);
        return this;
    }
    addTags(tags) {
        for (const tag of tags) {
            this._tags.add(tag);
        }
        return this;
    }
    tags() {
        return new Set(this._tags);
    }
    dateWithoutTimezoneAdjustment() {
        const date = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
        date.setFullYear(this.get("year"));
        return date;
    }
    static createRelativeFromReference(reference, fragments) {
        let date = dayjs__WEBPACK_IMPORTED_MODULE_1__(reference.instant);
        for (const key in fragments) {
            date = date.add(fragments[key], key);
        }
        const components = new ParsingComponents(reference);
        if (fragments["hour"] || fragments["minute"] || fragments["second"]) {
            (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarTime)(components, date);
            (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.assignSimilarDate)(components, date);
            if (reference.timezoneOffset !== null) {
                components.assign("timezoneOffset", -reference.instant.getTimezoneOffset());
            }
        }
        else {
            (0,_utils_dayjs_js__WEBPACK_IMPORTED_MODULE_3__.implySimilarTime)(components, date);
            if (reference.timezoneOffset !== null) {
                components.imply("timezoneOffset", -reference.instant.getTimezoneOffset());
            }
            if (fragments["d"]) {
                components.assign("day", date.date());
                components.assign("month", date.month() + 1);
                components.assign("year", date.year());
            }
            else {
                if (fragments["week"]) {
                    components.imply("weekday", date.day());
                }
                components.imply("day", date.date());
                if (fragments["month"]) {
                    components.assign("month", date.month() + 1);
                    components.assign("year", date.year());
                }
                else {
                    components.imply("month", date.month() + 1);
                    if (fragments["year"]) {
                        components.assign("year", date.year());
                    }
                    else {
                        components.imply("year", date.year());
                    }
                }
            }
        }
        return components;
    }
}
class ParsingResult {
    constructor(reference, index, text, start, end) {
        this.reference = reference;
        this.refDate = reference.instant;
        this.index = index;
        this.text = text;
        this.start = start || new ParsingComponents(reference);
        this.end = end;
    }
    clone() {
        const result = new ParsingResult(this.reference, this.index, this.text);
        result.start = this.start ? this.start.clone() : null;
        result.end = this.end ? this.end.clone() : null;
        return result;
    }
    date() {
        return this.start.date();
    }
    tags() {
        const combinedTags = new Set(this.start.tags());
        if (this.end) {
            for (const tag of this.end.tags()) {
                combinedTags.add(tag);
            }
        }
        return combinedTags;
    }
    toString() {
        const tags = Array.from(this.tags()).sort();
        return `[ParsingResult {index: ${this.index}, text: '${this.text}', tags: ${JSON.stringify(tags)} ...}]`;
    }
}
//# sourceMappingURL=results.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/timezone.js":
/*!*******************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/timezone.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TIMEZONE_ABBR_MAP: () => (/* binding */ TIMEZONE_ABBR_MAP),
/* harmony export */   getLastWeekdayOfMonth: () => (/* binding */ getLastWeekdayOfMonth),
/* harmony export */   getNthWeekdayOfMonth: () => (/* binding */ getNthWeekdayOfMonth),
/* harmony export */   toTimezoneOffset: () => (/* binding */ toTimezoneOffset)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/chrono-node/dist/esm/types.js");


const TIMEZONE_ABBR_MAP = {
    ACDT: 630,
    ACST: 570,
    ADT: -180,
    AEDT: 660,
    AEST: 600,
    AFT: 270,
    AKDT: -480,
    AKST: -540,
    ALMT: 360,
    AMST: -180,
    AMT: -240,
    ANAST: 720,
    ANAT: 720,
    AQTT: 300,
    ART: -180,
    AST: -240,
    AWDT: 540,
    AWST: 480,
    AZOST: 0,
    AZOT: -60,
    AZST: 300,
    AZT: 240,
    BNT: 480,
    BOT: -240,
    BRST: -120,
    BRT: -180,
    BST: 60,
    BTT: 360,
    CAST: 480,
    CAT: 120,
    CCT: 390,
    CDT: -300,
    CEST: 120,
    CET: {
        timezoneOffsetDuringDst: 2 * 60,
        timezoneOffsetNonDst: 60,
        dstStart: (year) => getLastWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2),
        dstEnd: (year) => getLastWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.OCTOBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 3),
    },
    CHADT: 825,
    CHAST: 765,
    CKT: -600,
    CLST: -180,
    CLT: -240,
    COT: -300,
    CST: -360,
    CT: {
        timezoneOffsetDuringDst: -5 * 60,
        timezoneOffsetNonDst: -6 * 60,
        dstStart: (year) => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2, 2),
        dstEnd: (year) => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.NOVEMBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 1, 2),
    },
    CVT: -60,
    CXT: 420,
    ChST: 600,
    DAVT: 420,
    EASST: -300,
    EAST: -360,
    EAT: 180,
    ECT: -300,
    EDT: -240,
    EEST: 180,
    EET: 120,
    EGST: 0,
    EGT: -60,
    EST: -300,
    ET: {
        timezoneOffsetDuringDst: -4 * 60,
        timezoneOffsetNonDst: -5 * 60,
        dstStart: (year) => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2, 2),
        dstEnd: (year) => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.NOVEMBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 1, 2),
    },
    FJST: 780,
    FJT: 720,
    FKST: -180,
    FKT: -240,
    FNT: -120,
    GALT: -360,
    GAMT: -540,
    GET: 240,
    GFT: -180,
    GILT: 720,
    GMT: 0,
    GST: 240,
    GYT: -240,
    HAA: -180,
    HAC: -300,
    HADT: -540,
    HAE: -240,
    HAP: -420,
    HAR: -360,
    HAST: -600,
    HAT: -90,
    HAY: -480,
    HKT: 480,
    HLV: -210,
    HNA: -240,
    HNC: -360,
    HNE: -300,
    HNP: -480,
    HNR: -420,
    HNT: -150,
    HNY: -540,
    HOVT: 420,
    ICT: 420,
    IDT: 180,
    IOT: 360,
    IRDT: 270,
    IRKST: 540,
    IRKT: 540,
    IRST: 210,
    IST: 330,
    JST: 540,
    KGT: 360,
    KRAST: 480,
    KRAT: 480,
    KST: 540,
    KUYT: 240,
    LHDT: 660,
    LHST: 630,
    LINT: 840,
    MAGST: 720,
    MAGT: 720,
    MART: -510,
    MAWT: 300,
    MDT: -360,
    MESZ: 120,
    MEZ: 60,
    MHT: 720,
    MMT: 390,
    MSD: 240,
    MSK: 180,
    MST: -420,
    MT: {
        timezoneOffsetDuringDst: -6 * 60,
        timezoneOffsetNonDst: -7 * 60,
        dstStart: (year) => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2, 2),
        dstEnd: (year) => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.NOVEMBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 1, 2),
    },
    MUT: 240,
    MVT: 300,
    MYT: 480,
    NCT: 660,
    NDT: -90,
    NFT: 690,
    NOVST: 420,
    NOVT: 360,
    NPT: 345,
    NST: -150,
    NUT: -660,
    NZDT: 780,
    NZST: 720,
    OMSST: 420,
    OMST: 420,
    PDT: -420,
    PET: -300,
    PETST: 720,
    PETT: 720,
    PGT: 600,
    PHOT: 780,
    PHT: 480,
    PKT: 300,
    PMDT: -120,
    PMST: -180,
    PONT: 660,
    PST: -480,
    PT: {
        timezoneOffsetDuringDst: -7 * 60,
        timezoneOffsetNonDst: -8 * 60,
        dstStart: (year) => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.MARCH, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 2, 2),
        dstEnd: (year) => getNthWeekdayOfMonth(year, _types_js__WEBPACK_IMPORTED_MODULE_1__.Month.NOVEMBER, _types_js__WEBPACK_IMPORTED_MODULE_1__.Weekday.SUNDAY, 1, 2),
    },
    PWT: 540,
    PYST: -180,
    PYT: -240,
    RET: 240,
    SAMT: 240,
    SAST: 120,
    SBT: 660,
    SCT: 240,
    SGT: 480,
    SRT: -180,
    SST: -660,
    TAHT: -600,
    TFT: 300,
    TJT: 300,
    TKT: 780,
    TLT: 540,
    TMT: 300,
    TVT: 720,
    ULAT: 480,
    UTC: 0,
    UYST: -120,
    UYT: -180,
    UZT: 300,
    VET: -210,
    VLAST: 660,
    VLAT: 660,
    VUT: 660,
    WAST: 120,
    WAT: 60,
    WEST: 60,
    WESZ: 60,
    WET: 0,
    WEZ: 0,
    WFT: 720,
    WGST: -120,
    WGT: -180,
    WIB: 420,
    WIT: 540,
    WITA: 480,
    WST: 780,
    WT: 0,
    YAKST: 600,
    YAKT: 600,
    YAPT: 600,
    YEKST: 360,
    YEKT: 360,
};
function getNthWeekdayOfMonth(year, month, weekday, n, hour = 0) {
    let dayOfMonth = 0;
    let i = 0;
    while (i < n) {
        dayOfMonth++;
        const date = new Date(year, month - 1, dayOfMonth);
        if (date.getDay() === weekday)
            i++;
    }
    return new Date(year, month - 1, dayOfMonth, hour);
}
function getLastWeekdayOfMonth(year, month, weekday, hour = 0) {
    const oneIndexedWeekday = weekday === 0 ? 7 : weekday;
    const date = new Date(year, month - 1 + 1, 1, 12);
    const firstWeekdayNextMonth = date.getDay() === 0 ? 7 : date.getDay();
    let dayDiff;
    if (firstWeekdayNextMonth === oneIndexedWeekday)
        dayDiff = 7;
    else if (firstWeekdayNextMonth < oneIndexedWeekday)
        dayDiff = 7 + firstWeekdayNextMonth - oneIndexedWeekday;
    else
        dayDiff = firstWeekdayNextMonth - oneIndexedWeekday;
    date.setDate(date.getDate() - dayDiff);
    return new Date(year, month - 1, date.getDate(), hour);
}
function toTimezoneOffset(timezoneInput, date, timezoneOverrides = {}) {
    if (timezoneInput == null) {
        return null;
    }
    if (typeof timezoneInput === "number") {
        return timezoneInput;
    }
    const matchedTimezone = timezoneOverrides[timezoneInput] ?? TIMEZONE_ABBR_MAP[timezoneInput];
    if (matchedTimezone == null) {
        return null;
    }
    if (typeof matchedTimezone == "number") {
        return matchedTimezone;
    }
    if (date == null) {
        return null;
    }
    if (dayjs__WEBPACK_IMPORTED_MODULE_0__(date).isAfter(matchedTimezone.dstStart(date.getFullYear())) &&
        !dayjs__WEBPACK_IMPORTED_MODULE_0__(date).isAfter(matchedTimezone.dstEnd(date.getFullYear()))) {
        return matchedTimezone.timezoneOffsetDuringDst;
    }
    return matchedTimezone.timezoneOffsetNonDst;
}
//# sourceMappingURL=timezone.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/types.js":
/*!****************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/types.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Meridiem: () => (/* binding */ Meridiem),
/* harmony export */   Month: () => (/* binding */ Month),
/* harmony export */   Weekday: () => (/* binding */ Weekday)
/* harmony export */ });
var Meridiem;
(function (Meridiem) {
    Meridiem[Meridiem["AM"] = 0] = "AM";
    Meridiem[Meridiem["PM"] = 1] = "PM";
})(Meridiem || (Meridiem = {}));
var Weekday;
(function (Weekday) {
    Weekday[Weekday["SUNDAY"] = 0] = "SUNDAY";
    Weekday[Weekday["MONDAY"] = 1] = "MONDAY";
    Weekday[Weekday["TUESDAY"] = 2] = "TUESDAY";
    Weekday[Weekday["WEDNESDAY"] = 3] = "WEDNESDAY";
    Weekday[Weekday["THURSDAY"] = 4] = "THURSDAY";
    Weekday[Weekday["FRIDAY"] = 5] = "FRIDAY";
    Weekday[Weekday["SATURDAY"] = 6] = "SATURDAY";
})(Weekday || (Weekday = {}));
var Month;
(function (Month) {
    Month[Month["JANUARY"] = 1] = "JANUARY";
    Month[Month["FEBRUARY"] = 2] = "FEBRUARY";
    Month[Month["MARCH"] = 3] = "MARCH";
    Month[Month["APRIL"] = 4] = "APRIL";
    Month[Month["MAY"] = 5] = "MAY";
    Month[Month["JUNE"] = 6] = "JUNE";
    Month[Month["JULY"] = 7] = "JULY";
    Month[Month["AUGUST"] = 8] = "AUGUST";
    Month[Month["SEPTEMBER"] = 9] = "SEPTEMBER";
    Month[Month["OCTOBER"] = 10] = "OCTOBER";
    Month[Month["NOVEMBER"] = 11] = "NOVEMBER";
    Month[Month["DECEMBER"] = 12] = "DECEMBER";
})(Month || (Month = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/utils/dayjs.js":
/*!**********************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/utils/dayjs.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignSimilarDate: () => (/* binding */ assignSimilarDate),
/* harmony export */   assignSimilarTime: () => (/* binding */ assignSimilarTime),
/* harmony export */   assignTheNextDay: () => (/* binding */ assignTheNextDay),
/* harmony export */   implySimilarDate: () => (/* binding */ implySimilarDate),
/* harmony export */   implySimilarTime: () => (/* binding */ implySimilarTime),
/* harmony export */   implyTheNextDay: () => (/* binding */ implyTheNextDay)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types.js */ "./node_modules/chrono-node/dist/esm/types.js");

function assignTheNextDay(component, targetDayJs) {
    targetDayJs = targetDayJs.add(1, "day");
    assignSimilarDate(component, targetDayJs);
    implySimilarTime(component, targetDayJs);
}
function implyTheNextDay(component, targetDayJs) {
    targetDayJs = targetDayJs.add(1, "day");
    implySimilarDate(component, targetDayJs);
    implySimilarTime(component, targetDayJs);
}
function assignSimilarDate(component, targetDayJs) {
    component.assign("day", targetDayJs.date());
    component.assign("month", targetDayJs.month() + 1);
    component.assign("year", targetDayJs.year());
}
function assignSimilarTime(component, targetDayJs) {
    component.assign("hour", targetDayJs.hour());
    component.assign("minute", targetDayJs.minute());
    component.assign("second", targetDayJs.second());
    component.assign("millisecond", targetDayJs.millisecond());
    if (component.get("hour") < 12) {
        component.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.AM);
    }
    else {
        component.assign("meridiem", _types_js__WEBPACK_IMPORTED_MODULE_0__.Meridiem.PM);
    }
}
function implySimilarDate(component, targetDayJs) {
    component.imply("day", targetDayJs.date());
    component.imply("month", targetDayJs.month() + 1);
    component.imply("year", targetDayJs.year());
}
function implySimilarTime(component, targetDayJs) {
    component.imply("hour", targetDayJs.hour());
    component.imply("minute", targetDayJs.minute());
    component.imply("second", targetDayJs.second());
    component.imply("millisecond", targetDayJs.millisecond());
}
//# sourceMappingURL=dayjs.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/utils/pattern.js":
/*!************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/utils/pattern.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractTerms: () => (/* binding */ extractTerms),
/* harmony export */   matchAnyPattern: () => (/* binding */ matchAnyPattern),
/* harmony export */   repeatedTimeunitPattern: () => (/* binding */ repeatedTimeunitPattern)
/* harmony export */ });
function repeatedTimeunitPattern(prefix, singleTimeunitPattern, connectorPattern = "\\s{0,5},?\\s{0,5}") {
    const singleTimeunitPatternNoCapture = singleTimeunitPattern.replace(/\((?!\?)/g, "(?:");
    return `${prefix}${singleTimeunitPatternNoCapture}(?:${connectorPattern}${singleTimeunitPatternNoCapture}){0,10}`;
}
function extractTerms(dictionary) {
    let keys;
    if (dictionary instanceof Array) {
        keys = [...dictionary];
    }
    else if (dictionary instanceof Map) {
        keys = Array.from(dictionary.keys());
    }
    else {
        keys = Object.keys(dictionary);
    }
    return keys;
}
function matchAnyPattern(dictionary) {
    const joinedTerms = extractTerms(dictionary)
        .sort((a, b) => b.length - a.length)
        .join("|")
        .replace(/\./g, "\\.");
    return `(?:${joinedTerms})`;
}
//# sourceMappingURL=pattern.js.map

/***/ }),

/***/ "./node_modules/chrono-node/dist/esm/utils/timeunits.js":
/*!**************************************************************!*\
  !*** ./node_modules/chrono-node/dist/esm/utils/timeunits.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImpliedTimeUnits: () => (/* binding */ addImpliedTimeUnits),
/* harmony export */   reverseTimeUnits: () => (/* binding */ reverseTimeUnits)
/* harmony export */ });
function reverseTimeUnits(timeUnits) {
    const reversed = {};
    for (const key in timeUnits) {
        reversed[key] = -timeUnits[key];
    }
    return reversed;
}
function addImpliedTimeUnits(components, timeUnits) {
    const output = components.clone();
    let date = components.dayjs();
    for (const key in timeUnits) {
        date = date.add(timeUnits[key], key);
    }
    if ("day" in timeUnits || "d" in timeUnits || "week" in timeUnits || "month" in timeUnits || "year" in timeUnits) {
        output.imply("day", date.date());
        output.imply("month", date.month() + 1);
        output.imply("year", date.year());
    }
    if ("second" in timeUnits || "minute" in timeUnits || "hour" in timeUnits) {
        output.imply("second", date.second());
        output.imply("minute", date.minute());
        output.imply("hour", date.hour());
    }
    return output;
}
//# sourceMappingURL=timeunits.js.map

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/add.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/add.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/date-fns/addMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,\\-7
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const dateWithMonths =
    months || years ? (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__.addMonths)(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, dateWithDays.getTime() + msToAdd);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/addMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMonths: () => (/* binding */ addMonths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/constructNow.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructNow.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructNow: () => (/* binding */ constructNow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateType | number | string,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructNow);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/differenceInDays.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInDays: () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const sign = compareLocalAsc(_dateLeft, _dateRight);
  const difference = Math.abs((0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_dateLeft, _dateRight));

  _dateLeft.setDate(_dateLeft.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(
    compareLocalAsc(_dateLeft, _dateRight) === -sign,
  );
  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
  const diff =
    dateLeft.getFullYear() - dateRight.getFullYear() ||
    dateLeft.getMonth() - dateRight.getMonth() ||
    dateLeft.getDate() - dateRight.getDate() ||
    dateLeft.getHours() - dateRight.getHours() ||
    dateLeft.getMinutes() - dateRight.getMinutes() ||
    dateLeft.getSeconds() - dateRight.getSeconds() ||
    dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isSameMonth.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/isSameMonth.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameMonth: () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);
  return (
    _dateLeft.getFullYear() === _dateRight.getFullYear() &&
    _dateLeft.getMonth() === _dateRight.getMonth()
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameMonth);


/***/ }),

/***/ "./node_modules/date-fns/isSameWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateLeft, options);
  const dateRightStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateRight, options);

  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);


/***/ }),

/***/ "./node_modules/date-fns/isSameYear.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameYear.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameYear: () => (/* binding */ isSameYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
function isSameYear(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);
  return _dateLeft.getFullYear() === _dateRight.getFullYear();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameYear);


/***/ }),

/***/ "./node_modules/date-fns/isThisMonth.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/isThisMonth.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisMonth: () => (/* binding */ isThisMonth)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameMonth_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameMonth.mjs */ "./node_modules/date-fns/isSameMonth.mjs");



/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(date) {
  return (0,_isSameMonth_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameMonth)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisMonth);


/***/ }),

/***/ "./node_modules/date-fns/isThisWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isThisWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisWeek: () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameWeek.mjs */ "./node_modules/date-fns/isSameWeek.mjs");



/**
 * The {@link isThisWeek} function options.
 */

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(date, options) {
  return (0,_isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date), options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisWeek);


/***/ }),

/***/ "./node_modules/date-fns/isThisYear.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isThisYear.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisYear: () => (/* binding */ isThisYear)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameYear.mjs */ "./node_modules/date-fns/isSameYear.mjs");



/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * const result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear(date) {
  return (0,_isSameYear_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameYear)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisYear);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");



/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isTomorrow.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isTomorrow.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isTomorrow: () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");




/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_1__.addDays)((0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_2__.constructNow)(date), 1));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTomorrow);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./src/demo-data.json":
/*!****************************!*\
  !*** ./src/demo-data.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"id":"caac47e2-a218-4b3c-9e4a-ebb4aa3b57d0","_title":"set up todo app on github pages","description":null,"_dueDate":"2024-07-12T01:40:10.735Z","createdDate":"2024-07-13T01:31:56.400Z","completed":true,"priority":"high","checklist":[],"projects":["work"],"closed":true,"card":{"id":"caac47e2-a218-4b3c-9e4a-ebb4aa3b57d0","element":{"reference":{},"header":{},"title":{},"titleInput":{},"dueDate":{},"dueDateInput":{},"checkBox":{},"body":{},"description":{},"descriptionInput":{},"checkList":{},"checkListAdd":{},"footer":{},"priority":{},"projects":{},"projectsInput":{},"deleteButton":{}}}},{"id":"775aa65f-3ef4-4a89-943c-dd379b16f4f8","_title":"click any label to edit it","description":null,"_dueDate":"2024-07-13T01:40:06.003Z","createdDate":"2024-07-13T01:20:24.203Z","completed":false,"priority":"high","checklist":[],"projects":["tutorial"],"closed":true,"card":{"id":"775aa65f-3ef4-4a89-943c-dd379b16f4f8","element":{"reference":{},"header":{},"title":{},"titleInput":{},"dueDate":{},"dueDateInput":{},"checkBox":{},"body":{},"description":{},"descriptionInput":{},"checkList":{},"checkListAdd":{},"footer":{},"priority":{},"projects":{},"projectsInput":{},"deleteButton":{}}}},{"id":"a428111c-ebb4-4a74-b7a9-10cdb12373bd","_title":null,"description":"you can set due dates with language like \'tomorrow\' or \'3 weeks\'","_dueDate":"2024-07-14T01:40:14.316Z","createdDate":"2024-07-13T01:20:50.352Z","completed":true,"priority":"low","checklist":[],"projects":["tutorial"],"closed":false,"card":{"id":"a428111c-ebb4-4a74-b7a9-10cdb12373bd","element":{"reference":{},"header":{},"title":{},"titleInput":{},"dueDate":{},"dueDateInput":{},"checkBox":{},"body":{},"description":{},"descriptionInput":{},"checkList":{},"checkListAdd":{},"footer":{},"priority":{},"projects":{},"projectsInput":{},"deleteButton":{}}}},{"id":"542b3178-9a24-41e5-900b-ccb4daffa55e","_title":"add todos to projects","description":"enter \'work school\' in the below text box to add this todo to #work and #school","_dueDate":"2024-07-15T02:00:00.000Z","createdDate":"2024-07-13T01:26:55.855Z","completed":false,"priority":"medium","checklist":[],"projects":[],"closed":false,"card":{"id":"542b3178-9a24-41e5-900b-ccb4daffa55e","element":{"reference":{},"header":{},"title":{},"titleInput":{},"dueDate":{},"dueDateInput":{},"checkBox":{},"body":{},"description":{},"descriptionInput":{},"checkList":{},"checkListAdd":{},"footer":{},"priority":{},"projects":{},"projectsInput":{},"deleteButton":{}}}},{"id":"0eece257-bcb9-42f2-b8be-5a53104fce3e","_title":"the odin project","description":null,"_dueDate":"2024-10-16T01:28:39.373Z","createdDate":"2024-07-13T01:28:28.899Z","completed":false,"priority":"medium","checklist":[{"title":"prerequisites","completed":true,"id":"2ea8e78a-51c2-4e9c-80ca-b69452941f9b"},{"title":"foundations","completed":true,"id":"b7de2084-77f7-43ed-9b5a-46577fe10d5a"},{"title":"intermediate html","completed":true,"id":"f3afc5de-590c-4e7d-a44c-0391923ba3bd"},{"title":"intermediate javascript","completed":false,"id":"0fcfe3b7-8dd6-4422-8956-5bc02f69d566"}],"projects":["school"],"closed":false,"card":{"id":"0eece257-bcb9-42f2-b8be-5a53104fce3e","element":{"reference":{},"header":{},"title":{},"titleInput":{},"dueDate":{},"dueDateInput":{},"checkBox":{},"body":{},"description":{},"descriptionInput":{},"checkList":{},"checkListAdd":{},"footer":{},"priority":{},"projects":{},"projectsInput":{},"deleteButton":{}}}}]');

/***/ })

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _todo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.css */ "./src/todo.css");
/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo.js */ "./src/demo.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library.js */ "./src/library.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.js */ "./src/user.js");



//// CLEARS LOCAL STORAGE
//localStorage.removeItem('todos');
//localStorage.removeItem('user');
/////






_library_js__WEBPACK_IMPORTED_MODULE_4__["default"].initialise();

_DOM_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawAllTodos();

_DOM_js__WEBPACK_IMPORTED_MODULE_3__["default"].applyTimeFilter(_user_js__WEBPACK_IMPORTED_MODULE_5__["default"].state.timeFilter);
_DOM_js__WEBPACK_IMPORTED_MODULE_3__["default"].applyProjectFilter();
_DOM_js__WEBPACK_IMPORTED_MODULE_3__["default"].applyPriorityFilter()

_library_js__WEBPACK_IMPORTED_MODULE_4__["default"].sortList(undefined, undefined);

_DOM_js__WEBPACK_IMPORTED_MODULE_3__["default"].applySort();

console.log('Made by Odis during The Odin Project');
})();

/******/ })()
;