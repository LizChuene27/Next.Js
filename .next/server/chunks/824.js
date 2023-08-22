"use strict";
exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 9824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Header.js



const linkStyle = {
    marginRight: 15,
    textDecoration: "none",
    color: "black"
};
const Header = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                legacyBehavior: true,
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: linkStyle,
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                legacyBehavior: true,
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: linkStyle,
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                legacyBehavior: true,
                href: "/projects",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: linkStyle,
                    children: "Projects"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                legacyBehavior: true,
                href: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    style: linkStyle,
                    children: "Contact"
                })
            })
        ]
    });
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout.js
// components/Layout.js





const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
};
const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                    crossOrigin: "anonymous"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: layoutStyle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    props.children
                ]
            })
        ]
    });
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;