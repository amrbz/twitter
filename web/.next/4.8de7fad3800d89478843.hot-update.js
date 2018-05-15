webpackHotUpdate(4,{

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = '/opt/web/components/MyLayout.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '0px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        'Decentralized Twitter'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', integrity: 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u', crossorigin: 'anonymous', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["h" /* Grid */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["k" /* Row */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["c" /* Col */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          })
        )
      ),
      props.children
    )
  );
};

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(layoutStyle, 'layoutStyle', '/opt/web/components/MyLayout.js');
  reactHotLoader.register(Layout, 'Layout', '/opt/web/components/MyLayout.js');
  reactHotLoader.register(_default, 'default', '/opt/web/components/MyLayout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Badge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");











// TODO: `pullRight` doesn't belong here. There's no special handling here.

var propTypes = {
  pullRight: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool
};

var defaultProps = {
  pullRight: false
};

var Badge = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Badge, _React$Component);

  function Badge() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Badge);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));
  }

  Badge.prototype.hasContent = function hasContent(children) {
    var result = false;

    __WEBPACK_IMPORTED_MODULE_6_react___default.a.Children.forEach(children, function (child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });

    return result;
  };

  Badge.prototype.render = function render() {
    var _props = this.props,
        pullRight = _props.pullRight,
        className = _props.className,
        children = _props.children,
        props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['pullRight', 'className', 'children']);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      'pull-right': pullRight,

      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });

    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      'span',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, elementProps, { className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, classes) }),
      children
    );
  };

  return Badge;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["a" /* bsClass */])('badge', Badge));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Accordion__ = __webpack_require__("./node_modules/react-bootstrap/es/Accordion.js");
/* unused harmony reexport Accordion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Alert__ = __webpack_require__("./node_modules/react-bootstrap/es/Alert.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Alert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Badge__ = __webpack_require__("./node_modules/react-bootstrap/es/Badge.js");
/* unused harmony reexport Badge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Breadcrumb__ = __webpack_require__("./node_modules/react-bootstrap/es/Breadcrumb.js");
/* unused harmony reexport Breadcrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BreadcrumbItem__ = __webpack_require__("./node_modules/react-bootstrap/es/BreadcrumbItem.js");
/* unused harmony reexport BreadcrumbItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__("./node_modules/react-bootstrap/es/Button.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ButtonGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ButtonGroup.js");
/* unused harmony reexport ButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ButtonToolbar__ = __webpack_require__("./node_modules/react-bootstrap/es/ButtonToolbar.js");
/* unused harmony reexport ButtonToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Carousel__ = __webpack_require__("./node_modules/react-bootstrap/es/Carousel.js");
/* unused harmony reexport Carousel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CarouselItem__ = __webpack_require__("./node_modules/react-bootstrap/es/CarouselItem.js");
/* unused harmony reexport CarouselItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Checkbox__ = __webpack_require__("./node_modules/react-bootstrap/es/Checkbox.js");
/* unused harmony reexport Checkbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Clearfix__ = __webpack_require__("./node_modules/react-bootstrap/es/Clearfix.js");
/* unused harmony reexport Clearfix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CloseButton__ = __webpack_require__("./node_modules/react-bootstrap/es/CloseButton.js");
/* unused harmony reexport CloseButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ControlLabel__ = __webpack_require__("./node_modules/react-bootstrap/es/ControlLabel.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_13__ControlLabel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Col__ = __webpack_require__("./node_modules/react-bootstrap/es/Col.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_14__Col__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Collapse__ = __webpack_require__("./node_modules/react-bootstrap/es/Collapse.js");
/* unused harmony reexport Collapse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Dropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/Dropdown.js");
/* unused harmony reexport Dropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__DropdownButton__ = __webpack_require__("./node_modules/react-bootstrap/es/DropdownButton.js");
/* unused harmony reexport DropdownButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Fade__ = __webpack_require__("./node_modules/react-bootstrap/es/Fade.js");
/* unused harmony reexport Fade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Form__ = __webpack_require__("./node_modules/react-bootstrap/es/Form.js");
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__FormControl__ = __webpack_require__("./node_modules/react-bootstrap/es/FormControl.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_20__FormControl__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__FormGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_21__FormGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Glyphicon__ = __webpack_require__("./node_modules/react-bootstrap/es/Glyphicon.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_22__Glyphicon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Grid__ = __webpack_require__("./node_modules/react-bootstrap/es/Grid.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_23__Grid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__HelpBlock__ = __webpack_require__("./node_modules/react-bootstrap/es/HelpBlock.js");
/* unused harmony reexport HelpBlock */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Image__ = __webpack_require__("./node_modules/react-bootstrap/es/Image.js");
/* unused harmony reexport Image */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__InputGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/InputGroup.js");
/* unused harmony reexport InputGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Jumbotron__ = __webpack_require__("./node_modules/react-bootstrap/es/Jumbotron.js");
/* unused harmony reexport Jumbotron */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Label__ = __webpack_require__("./node_modules/react-bootstrap/es/Label.js");
/* unused harmony reexport Label */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ListGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ListGroup.js");
/* unused harmony reexport ListGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ListGroupItem__ = __webpack_require__("./node_modules/react-bootstrap/es/ListGroupItem.js");
/* unused harmony reexport ListGroupItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Media__ = __webpack_require__("./node_modules/react-bootstrap/es/Media.js");
/* unused harmony reexport Media */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__MenuItem__ = __webpack_require__("./node_modules/react-bootstrap/es/MenuItem.js");
/* unused harmony reexport MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Modal__ = __webpack_require__("./node_modules/react-bootstrap/es/Modal.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_33__Modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ModalBody__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalBody.js");
/* unused harmony reexport ModalBody */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ModalFooter__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalFooter.js");
/* unused harmony reexport ModalFooter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ModalHeader__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalHeader.js");
/* unused harmony reexport ModalHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ModalTitle__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalTitle.js");
/* unused harmony reexport ModalTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Nav__ = __webpack_require__("./node_modules/react-bootstrap/es/Nav.js");
/* unused harmony reexport Nav */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Navbar__ = __webpack_require__("./node_modules/react-bootstrap/es/Navbar.js");
/* unused harmony reexport Navbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__NavbarBrand__ = __webpack_require__("./node_modules/react-bootstrap/es/NavbarBrand.js");
/* unused harmony reexport NavbarBrand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__NavDropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/NavDropdown.js");
/* unused harmony reexport NavDropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__NavItem__ = __webpack_require__("./node_modules/react-bootstrap/es/NavItem.js");
/* unused harmony reexport NavItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__Overlay__ = __webpack_require__("./node_modules/react-bootstrap/es/Overlay.js");
/* unused harmony reexport Overlay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__OverlayTrigger__ = __webpack_require__("./node_modules/react-bootstrap/es/OverlayTrigger.js");
/* unused harmony reexport OverlayTrigger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__PageHeader__ = __webpack_require__("./node_modules/react-bootstrap/es/PageHeader.js");
/* unused harmony reexport PageHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__PageItem__ = __webpack_require__("./node_modules/react-bootstrap/es/PageItem.js");
/* unused harmony reexport PageItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__Pager__ = __webpack_require__("./node_modules/react-bootstrap/es/Pager.js");
/* unused harmony reexport Pager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__Pagination__ = __webpack_require__("./node_modules/react-bootstrap/es/Pagination.js");
/* unused harmony reexport Pagination */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__Panel__ = __webpack_require__("./node_modules/react-bootstrap/es/Panel.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_49__Panel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__PanelGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelGroup.js");
/* unused harmony reexport PanelGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__Popover__ = __webpack_require__("./node_modules/react-bootstrap/es/Popover.js");
/* unused harmony reexport Popover */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ProgressBar__ = __webpack_require__("./node_modules/react-bootstrap/es/ProgressBar.js");
/* unused harmony reexport ProgressBar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__Radio__ = __webpack_require__("./node_modules/react-bootstrap/es/Radio.js");
/* unused harmony reexport Radio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ResponsiveEmbed__ = __webpack_require__("./node_modules/react-bootstrap/es/ResponsiveEmbed.js");
/* unused harmony reexport ResponsiveEmbed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__Row__ = __webpack_require__("./node_modules/react-bootstrap/es/Row.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_55__Row__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* unused harmony reexport SafeAnchor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__SplitButton__ = __webpack_require__("./node_modules/react-bootstrap/es/SplitButton.js");
/* unused harmony reexport SplitButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__Tab__ = __webpack_require__("./node_modules/react-bootstrap/es/Tab.js");
/* unused harmony reexport Tab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__TabContainer__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContainer.js");
/* unused harmony reexport TabContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__TabContent__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContent.js");
/* unused harmony reexport TabContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__Table__ = __webpack_require__("./node_modules/react-bootstrap/es/Table.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_61__Table__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__TabPane__ = __webpack_require__("./node_modules/react-bootstrap/es/TabPane.js");
/* unused harmony reexport TabPane */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__Tabs__ = __webpack_require__("./node_modules/react-bootstrap/es/Tabs.js");
/* unused harmony reexport Tabs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__Thumbnail__ = __webpack_require__("./node_modules/react-bootstrap/es/Thumbnail.js");
/* unused harmony reexport Thumbnail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ToggleButton__ = __webpack_require__("./node_modules/react-bootstrap/es/ToggleButton.js");
/* unused harmony reexport ToggleButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ToggleButtonGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ToggleButtonGroup.js");
/* unused harmony reexport ToggleButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__Tooltip__ = __webpack_require__("./node_modules/react-bootstrap/es/Tooltip.js");
/* unused harmony reexport Tooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__Well__ = __webpack_require__("./node_modules/react-bootstrap/es/Well.js");
/* unused harmony reexport Well */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__utils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/index.js");
/* unused harmony reexport utils */













































































































































/***/ }),

/***/ "./pages/join.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _jsxFileName = '/opt/web/pages/join.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// pages/about.js







var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.createUser = _this.createUser.bind(_this);
    _this.state = {
      visible: false,
      txPending: false,
      users: {
        list: false
      },
      userName: ''
    };
    return _this;
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get('http://127.0.0.1:7610/api/v1.0/users');

              case 2:
                res = _context.sent;

                // console.log(res);
                this.setState({
                  users: {
                    list: res.status === 204 ? [] : res.data
                  }
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'toggleModal',
    value: function toggleModal(e) {
      this.setState({
        visible: !this.state.visible
      });
    }
  }, {
    key: 'createUser',
    value: function createUser(e) {
      var _this2 = this;

      this.setState({
        txPending: true
      });
      var req = __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('http://127.0.0.1:7610/api/v1.0/users', {
        userName: this.state.userName
      }).then(function (response) {
        console.log(response);
        if (response.status === 201) {

          var arr = _this2.state.users.list === false && _this2.state.issues.users.length === 0 ? [response.data] : [response.data].concat(_this2.state.users.list);

          _this2.setState({
            users: {
              list: arr
            },
            visible: false,
            txPending: false
          });
        }
      }).catch(function (e) {
        console.error(e);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["c" /* Col */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-383642245',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 74
                }
              },
              'Join'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-383642245',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              'Users'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["c" /* Col */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            this.state.users.list === false ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Alert */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                }
              },
              'Loading...'
            ) : this.state.users.list.length === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Alert */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              },
              'No users'
            ) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["l" /* Table */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'thead',
                {
                  className: 'jsx-383642245',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'tr',
                  {
                    className: 'jsx-383642245',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'th',
                    {
                      className: 'jsx-383642245',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                      }
                    },
                    'User name'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'th',
                    {
                      className: 'jsx-383642245',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                      }
                    },
                    'Address'
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'th',
                    {
                      className: 'jsx-383642245',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 89
                      }
                    },
                    'Tx ID'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'tbody',
                {
                  className: 'jsx-383642245',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  }
                },
                this.state.users.list.map(function (item, index) {
                  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'tr',
                    { key: 'issue_' + index, className: 'jsx-383642245',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'td',
                      {
                        className: 'jsx-383642245',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 96
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
                        { href: '/user?userId=' + item.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                          'a',
                          {
                            className: 'jsx-383642245',
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 98
                            }
                          },
                          item.userName
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'td',
                      {
                        className: 'jsx-383642245',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 101
                        }
                      },
                      item.address
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      'td',
                      {
                        className: 'jsx-383642245',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 102
                        }
                      },
                      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
                        { href: 'https://wavesexplorer.com/tx/' + item.txid, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                          }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                          'a',
                          { target: '_blank', className: 'jsx-383642245',
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 104
                            }
                          },
                          item.txid
                        )
                      )
                    )
                  );
                })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["c" /* Col */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Button */],
              { bsStyle: 'primary', onClick: this.toggleModal, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 119
                }
              },
              'Add user'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["i" /* Modal */],
          { show: this.state.visible, onHide: this.toggleModal, __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["i" /* Modal */].Header,
            { closeButton: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["i" /* Modal */].Title,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
                }
              },
              'New user'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["i" /* Modal */].Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["f" /* FormGroup */],
              { controlId: 'formInlineName', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["d" /* ControlLabel */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                  }
                },
                'User name'
              ),
              ' ',
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["e" /* FormControl */], {
                type: 'text',
                value: this.state.userName,
                placeholder: 'Enter user name',
                onChange: function onChange(e) {
                  return _this3.setState({ userName: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["i" /* Modal */].Footer,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Button */],
              { onClick: this.toggleModal, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 143
                }
              },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Button */],
              {
                bsStyle: 'primary',
                onClick: this.createUser,
                disabled: this.state.txPending,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 144
                }
              },
              'Create account'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '383642245',
          css: '@import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700\');.jsx-383642245{font-family:\'IBM Plex Sans\',sans-serif;}h1.jsx-383642245{font-size:4em;font-weight:300;margin:1.4em 0;display:block;border-radius:4px;}h2.jsx-383642245{font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2pvaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpzQixBQUU2RixBQUN4QyxBQUd0QixBQVFFLGNBUEEsRUFRcEIsY0FQbUIsU0FRckIsTUFQb0IsY0FDSSxrQkFDdEIiLCJmaWxlIjoicGFnZXMvam9pbi5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L3dlYiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2Fib3V0LmpzXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJvdywgQ29sLCBNb2RhbCwgQnV0dG9uLCBBbGVydCwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgQ29udHJvbExhYmVsLCBUYWJsZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jcmVhdGVVc2VyID0gdGhpcy5jcmVhdGVVc2VyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgdHhQZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcnM6IHtcbiAgICAgICAgICBsaXN0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB1c2VyTmFtZTogJycsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjc2MTAvYXBpL3YxLjAvdXNlcnMnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgIHVzZXJzOiB7XG4gICAgICAgICAgbGlzdDogcmVzLnN0YXR1cyA9PT0gMjA0ID8gW10gOiByZXMuZGF0YVxuICAgICAgICB9IFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTW9kYWwoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGU6ICF0aGlzLnN0YXRlLnZpc2libGUsXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZVVzZXIoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHR4UGVuZGluZzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICBjb25zdCByZXEgPSBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjc2MTAvYXBpL3YxLjAvdXNlcnMnLCB7XG4gICAgICAgIHVzZXJOYW1lOiB0aGlzLnN0YXRlLnVzZXJOYW1lLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGFyciA9IHRoaXMuc3RhdGUudXNlcnMubGlzdCA9PT0gZmFsc2UgJiYgdGhpcy5zdGF0ZS5pc3N1ZXMudXNlcnMubGVuZ3RoID09PSAwID8gXG4gICAgICAgICAgICBbcmVzcG9uc2UuZGF0YV0gOiBbcmVzcG9uc2UuZGF0YV0uY29uY2F0KHRoaXMuc3RhdGUudXNlcnMubGlzdCk7XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB1c2Vyczoge1xuICAgICAgICAgICAgICBsaXN0OiBhcnJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHR4UGVuZGluZzogZmFsc2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgPGgxPkpvaW48L2gxPlxuICAgICAgICAgICAgICA8aDI+VXNlcnM8L2gyPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubGlzdCA9PT0gZmFsc2UgPyAoPEFsZXJ0PkxvYWRpbmcuLi48L0FsZXJ0PikgOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubGlzdC5sZW5ndGggPT09IDAgPyAoPEFsZXJ0Pk5vIHVzZXJzPC9BbGVydD4pIDpcbiAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXIgbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZGRyZXNzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlR4IElEPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudXNlcnMubGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YGlzc3VlXyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcj91c2VySWQ9JHtpdGVtLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnVzZXJOYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5hZGRyZXNzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BodHRwczovL3dhdmVzZXhwbG9yZXIuY29tL3R4LyR7aXRlbS50eGlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPntpdGVtLnR4aWR9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsfT5cbiAgICAgICAgICAgICAgICBBZGQgdXNlclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIFxuICAgICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnZpc2libGV9IG9uSGlkZT17dGhpcy50b2dnbGVNb2RhbH0+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+TmV3IHVzZXI8L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1JbmxpbmVOYW1lXCI+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5Vc2VyIG5hbWU8L0NvbnRyb2xMYWJlbD57JyAnfVxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyTmFtZX0gXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHVzZXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe3VzZXJOYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuXG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNyZWF0ZVVzZXJ9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUudHhQZW5kaW5nfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIGFjY291bnRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JQk0rUGxleCtTYW5zOjMwMCw0MDAsNzAwJyk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEuNGVtIDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKVxuICAgIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/join.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/opt/web/pages/join.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/join")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.8de7fad3800d89478843.hot-update.js.map