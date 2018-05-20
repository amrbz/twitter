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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_youtube__ = __webpack_require__("./node_modules/react-youtube/es/YouTube.js");

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

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.onVideoReady = _this.onVideoReady.bind(_this);
    // this.handleOk = this.handleOk.bind(this);
    _this.state = {
      currency: 'ETH',
      price: 0.01,
      isStreaming: false
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
    key: 'onVideoReady',

    // 

    value: function onVideoReady(event) {
      // event.target.pauseVideo();
    }
  }, {
    key: 'openStream',
    value: function openStream() {
      this.setState({
        isStreaming: true
      });
    }
  }, {
    key: 'closeStream',
    value: function closeStream() {
      this.setState({
        isStreaming: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var videoOpts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["e" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            this.isStreaming === true ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_youtube__["a" /* default */], {
              videoId: '7DtRPJ2crTA',
              opts: videoOpts,
              onReady: this.onVideoReady,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            }) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["d" /* Jumbotron */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'h1',
                {
                  className: 'jsx-3147097103',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                'Live stream Demo'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-3147097103',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                'To be able to join video stream you have to open a payment channel.'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-3147097103',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["a" /* Button */],
                  { bsStyle: 'primary', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77
                    }
                  },
                  'Open channel'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Col */],
            { lg: 4, __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-3147097103',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
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
                bsSize: 'large',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              },
              'Add funds'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '3147097103',
          css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\');.jsx-3147097103{font-family:\'Open Sans\',sans-serif;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0cmVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RmtCLEFBRXFGLEFBQ3hDLG1DQUN6QixXQUdiIiwiZmlsZSI6InBhZ2VzL3N0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiIvb3B0L3dlYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiwgSW1hZ2UsIEp1bWJvdHJvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uVmlkZW9SZWFkeSA9IHRoaXMub25WaWRlb1JlYWR5LmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVPayA9IHRoaXMuaGFuZGxlT2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVuY3k6ICdFVEgnLFxuICAgICAgcHJpY2U6IDAuMDEsXG4gICAgICBpc1N0cmVhbWluZzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo3MjAwL2FwaS92MS4wL2lzc3VlcycpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IFxuICAgIC8vICAgaXNzdWVzOiB7XG4gICAgLy8gICAgIGxpc3Q6IHJlcy5zdGF0dXMgPT09IDIwNCA/IFtdIDogcmVzLmRhdGFcbiAgICAvLyAgIH0gXG4gICAgLy8gfSk7XG4gIH1cbiAgLy8gXG5cbiAgb25WaWRlb1JlYWR5KGV2ZW50KSB7XG4gICAgLy8gZXZlbnQudGFyZ2V0LnBhdXNlVmlkZW8oKTtcbiAgfVxuXG4gIG9wZW5TdHJlYW0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1N0cmVhbWluZzogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBjbG9zZVN0cmVhbSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU3RyZWFtaW5nOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB2aWRlb09wdHMgPSB7XG4gICAgICBoZWlnaHQ6ICczOTAnLFxuICAgICAgd2lkdGg6ICc2NDAnLFxuICAgICAgcGxheWVyVmFyczogeyAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXG4gICAgICAgIGF1dG9wbGF5OiAxXG4gICAgICB9XG4gICAgfVxuXG5cblxuICByZXR1cm4oXG4gICAgPExheW91dD5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbGc9ezh9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdHJlYW1pbmcgPT09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxZb3VUdWJlXG4gICAgICAgICAgICAgICAgdmlkZW9JZD1cIjdEdFJQSjJjclRBXCJcbiAgICAgICAgICAgICAgICBvcHRzPXt2aWRlb09wdHN9XG4gICAgICAgICAgICAgICAgb25SZWFkeT17dGhpcy5vblZpZGVvUmVhZHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SnVtYm90cm9uPlxuICAgICAgICAgICAgICAgIDxoMT5MaXZlIHN0cmVhbSBEZW1vPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFRvIGJlIGFibGUgdG8gam9pbiB2aWRlbyBzdHJlYW0geW91IGhhdmUgdG8gb3BlbiBhIHBheW1lbnQgY2hhbm5lbC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCI+T3BlbiBjaGFubmVsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IFxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBsZz17NH0+XG5cbiAgICAgICAgICA8aDI+UHJpY2U6IHt0aGlzLnN0YXRlLnByaWNlfSB7dGhpcy5zdGF0ZS5jdXJyZW5jeX0vc2VjPC9oMj5cbiAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgYnNTaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBmdW5kc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDAnKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogIzMzMztcblxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/stream.js */'
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
//# sourceMappingURL=3.f16310ae91777c0a52a9.hot-update.js.map