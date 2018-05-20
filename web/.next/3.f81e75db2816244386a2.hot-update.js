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
    _this.openStream = _this.openStream.bind(_this);
    _this.state = {
      currency: 'ETH',
      price: 0.01,
      isStreaming: false,
      balance: 0.05
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
      console.log('open');

      this.setState({
        isStreaming: true
      });

      var timeleft = this.state.balance / this.state.price;

      var downloadTimer = setInterval(function () {
        // document.getElementById("progressBar").value = 10 - --timeleft;
        this.setState({
          balance: this.state.balance - this.state.price
        });
        if (timeleft <= 0) {
          this.setState({
            isStreaming: false
          });
        }
      }, 1000);
    }
  }, {
    key: 'closeStream',
    value: function closeStream() {
      this.setState({
        isStreaming: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var videoOpts = {
        height: '400',
        width: '90%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["e" /* Row */],
          { style: { paddingTop: 120 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            this.state.isStreaming === true ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_youtube__["a" /* default */], {
              videoId: '7DtRPJ2crTA',
              opts: videoOpts,
              onReady: this.onVideoReady,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            }) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["d" /* Jumbotron */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'h1',
                {
                  className: 'jsx-93260153',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  }
                },
                'Live stream Demo'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-93260153',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  }
                },
                'To be able to join video stream you have to open a payment channel.'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-93260153',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["a" /* Button */],
                  { bsStyle: 'primary', onClick: this.openStream, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 92
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
                lineNumber: 98
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-93260153',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                }
              },
              'Balance: ',
              this.state.balance,
              ' ',
              this.state.currency,
              '/sec'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-93260153',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 101
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
                  lineNumber: 102
                }
              },
              'Add funds'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '93260153',
          css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\');.jsx-93260153{font-family:\'Open Sans\',sans-serif;color:#333;}h2.jsx-93260153{font-weight:300;margin:0 0 1em;}h2.jsx-93260153:last-child{margin-bottom:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0cmVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R29CLEFBRXVGLEFBQ3hDLEFBSWxCLEFBS0UsZ0JBSkgsRUFLakIsYUFKQSxJQUxXLFdBV2IiLCJmaWxlIjoicGFnZXMvc3RyZWFtLmpzIiwic291cmNlUm9vdCI6Ii9vcHQvd2ViIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uLCBJbWFnZSwgSnVtYm90cm9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25WaWRlb1JlYWR5ID0gdGhpcy5vblZpZGVvUmVhZHkuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5TdHJlYW0gPSB0aGlzLm9wZW5TdHJlYW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVuY3k6ICdFVEgnLFxuICAgICAgcHJpY2U6IDAuMDEsXG4gICAgICBpc1N0cmVhbWluZzogZmFsc2UsXG4gICAgICBiYWxhbmNlOiAwLjA1XG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo3MjAwL2FwaS92MS4wL2lzc3VlcycpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IFxuICAgIC8vICAgaXNzdWVzOiB7XG4gICAgLy8gICAgIGxpc3Q6IHJlcy5zdGF0dXMgPT09IDIwNCA/IFtdIDogcmVzLmRhdGFcbiAgICAvLyAgIH0gXG4gICAgLy8gfSk7XG4gIH1cbiAgLy8gXG5cbiAgb25WaWRlb1JlYWR5KGV2ZW50KSB7XG4gICAgLy8gZXZlbnQudGFyZ2V0LnBhdXNlVmlkZW8oKTtcbiAgfVxuXG4gIG9wZW5TdHJlYW0oKSB7XG4gICAgY29uc29sZS5sb2coJ29wZW4nKTtcbiAgICBcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU3RyZWFtaW5nOiB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IHRpbWVsZWZ0ID0gdGhpcy5zdGF0ZS5iYWxhbmNlIC8gdGhpcy5zdGF0ZS5wcmljZTtcblxuICAgIGxldCBkb3dubG9hZFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzQmFyXCIpLnZhbHVlID0gMTAgLSAtLXRpbWVsZWZ0O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJhbGFuY2U6IHRoaXMuc3RhdGUuYmFsYW5jZSAtIHRoaXMuc3RhdGUucHJpY2VcbiAgICAgIH0pXG4gICAgICBpZih0aW1lbGVmdCA8PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzU3RyZWFtaW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sMTAwMCk7XG4gIH1cblxuICBjbG9zZVN0cmVhbSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU3RyZWFtaW5nOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdmlkZW9PcHRzID0ge1xuICAgICAgaGVpZ2h0OiAnNDAwJyxcbiAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICAgIHBsYXllclZhcnM6IHsgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xuICAgICAgICBhdXRvcGxheTogMVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTIwfX0+XG4gICAgICAgICAgPENvbCBsZz17OH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNTdHJlYW1pbmcgPT09IHRydWUgPyAoXG4gICAgICAgICAgICAgICAgPFlvdVR1YmVcbiAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCI3RHRSUEoyY3JUQVwiXG4gICAgICAgICAgICAgICAgICBvcHRzPXt2aWRlb09wdHN9XG4gICAgICAgICAgICAgICAgICBvblJlYWR5PXt0aGlzLm9uVmlkZW9SZWFkeX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24+XG4gICAgICAgICAgICAgICAgICA8aDE+TGl2ZSBzdHJlYW0gRGVtbzwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVG8gYmUgYWJsZSB0byBqb2luIHZpZGVvIHN0cmVhbSB5b3UgaGF2ZSB0byBvcGVuIGEgcGF5bWVudCBjaGFubmVsLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9wZW5TdHJlYW19Pk9wZW4gY2hhbm5lbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IFxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbGc9ezR9PlxuXG4gICAgICAgICAgICA8aDI+QmFsYW5jZToge3RoaXMuc3RhdGUuYmFsYW5jZX0ge3RoaXMuc3RhdGUuY3VycmVuY3l9L3NlYzwvaDI+XG4gICAgICAgICAgICA8aDI+UHJpY2U6IHt0aGlzLnN0YXRlLnByaWNlfSB7dGhpcy5zdGF0ZS5jdXJyZW5jeX0vc2VjPC9oMj5cbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgIGJzU3R5bGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgYnNTaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgZnVuZHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNzAwJyk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/stream.js */'
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
//# sourceMappingURL=3.f81e75db2816244386a2.hot-update.js.map