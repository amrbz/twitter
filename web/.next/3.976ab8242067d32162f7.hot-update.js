webpackHotUpdate(3,{

/***/ "./pages/stream.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _jsxFileName = '/opt/web/pages/stream.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    // this.toggleModal = this.toggleModal.bind(this);
    // this.handleOk = this.handleOk.bind(this);
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = {
      currency: 'ETH',
      price: 0.01
    };
    return _this;
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
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
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-2995179947',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          'Live stream Demo'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["e" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["d" /* Image */], { src: 'http://via.placeholder.com/800x450', responsive: true, rounded: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Col */],
            { lg: 4, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-2995179947',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              'Price: ',
              this.state.price,
              ' ',
              this.state.currency,
              '/sec'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["a" /* Button */],
              {
                bsStyle: 'primary',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              'Join stream'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '2995179947',
          css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\');.jsx-2995179947{font-family:\'Open Sans\',sans-serif;color:#333;}h1.jsx-2995179947{font-size:4em;font-weight:400;margin:1em 0 1.4em 0;}h2.jsx-2995179947{font-weight:300;margin-top:0;margin-bottom:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0cmVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG9CLEFBRXVGLEFBQ3hDLEFBSXBCLEFBTUUsY0FMQSxFQU1ILGFBQ0ssQ0FOSSxLQUxiLFdBYWIsQ0FERSxJQU5BIiwiZmlsZSI6InBhZ2VzL3N0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L3dlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIHRoaXMudG9nZ2xlTW9kYWwgPSB0aGlzLnRvZ2dsZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVPayA9IHRoaXMuaGFuZGxlT2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVuY3k6ICdFVEgnLFxuICAgICAgcHJpY2U6IDAuMDFcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjcyMDAvYXBpL3YxLjAvaXNzdWVzJyk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgXG4gICAgLy8gICBpc3N1ZXM6IHtcbiAgICAvLyAgICAgbGlzdDogcmVzLnN0YXR1cyA9PT0gMjA0ID8gW10gOiByZXMuZGF0YVxuICAgIC8vICAgfSBcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TGl2ZSBzdHJlYW0gRGVtbzwvaDE+XG4gICAgICAgIFxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbGc9ezh9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwMHg0NTBcIiByZXNwb25zaXZlIHJvdW5kZWQgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGxnPXs0fT5cblxuICAgICAgICAgICAgPGgyPlByaWNlOiB7dGhpcy5zdGF0ZS5wcmljZX0ge3RoaXMuc3RhdGUuY3VycmVuY3l9L3NlYzwvaDI+XG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICBic1N0eWxlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEpvaW4gc3RyZWFtXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNzAwJyk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAxZW0gMCAxLjRlbSAwIDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/stream.js */'
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

  reactHotLoader.register(_default, 'default', '/opt/web/pages/stream.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/stream")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.976ab8242067d32162f7.hot-update.js.map