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
      console.log('open');

      this.setState({
        isStreaming: true
      });
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
            lineNumber: 62
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["e" /* Row */],
          { style: { paddingTop: 120 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Col */],
            { lg: 7, offset: 1, __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            this.state.isStreaming === true ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_youtube__["a" /* default */], {
              videoId: '7DtRPJ2crTA',
              opts: videoOpts,
              onReady: this.onVideoReady,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            }) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["d" /* Jumbotron */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'h1',
                {
                  className: 'jsx-1381602460',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                },
                'Live stream Demo'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-1381602460',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  }
                },
                'To be able to join video stream you have to open a payment channel.'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-1381602460',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["a" /* Button */],
                  { bsStyle: 'primary', onClick: this.openStream, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79
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
                lineNumber: 85
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-1381602460',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
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
                  lineNumber: 88
                }
              },
              'Add funds'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '1381602460',
          css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\');.jsx-1381602460{font-family:\'Open Sans\',sans-serif;color:#333;}h2.jsx-1381602460{font-weight:300;margin:0 0 2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0cmVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR2tCLEFBRXFGLEFBQ3hDLEFBSWxCLGdCQUNELGVBQ2pCLElBTFcsV0FPYiIsImZpbGUiOiJwYWdlcy9zdHJlYW0uanMiLCJzb3VyY2VSb290IjoiL29wdC93ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b24sIEltYWdlLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblZpZGVvUmVhZHkgPSB0aGlzLm9uVmlkZW9SZWFkeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlblN0cmVhbSA9IHRoaXMub3BlblN0cmVhbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW5jeTogJ0VUSCcsXG4gICAgICBwcmljZTogMC4wMSxcbiAgICAgIGlzU3RyZWFtaW5nOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjcyMDAvYXBpL3YxLjAvaXNzdWVzJyk7XG4gICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgXG4gICAgLy8gICBpc3N1ZXM6IHtcbiAgICAvLyAgICAgbGlzdDogcmVzLnN0YXR1cyA9PT0gMjA0ID8gW10gOiByZXMuZGF0YVxuICAgIC8vICAgfSBcbiAgICAvLyB9KTtcbiAgfVxuICAvLyBcblxuICBvblZpZGVvUmVhZHkoZXZlbnQpIHtcbiAgICAvLyBldmVudC50YXJnZXQucGF1c2VWaWRlbygpO1xuICB9XG5cbiAgb3BlblN0cmVhbSgpIHtcbiAgICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNTdHJlYW1pbmc6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgY2xvc2VTdHJlYW0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1N0cmVhbWluZzogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHZpZGVvT3B0cyA9IHtcbiAgICAgIGhlaWdodDogJzM5MCcsXG4gICAgICB3aWR0aDogJzY0MCcsXG4gICAgICBwbGF5ZXJWYXJzOiB7IC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcbiAgICAgICAgYXV0b3BsYXk6IDFcbiAgICAgIH1cbiAgICB9XG5cblxuXG4gIHJldHVybihcbiAgICA8TGF5b3V0PlxuICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nVG9wOiAxMjB9fT5cbiAgICAgICAgPENvbCBsZz17N30gb2Zmc2V0PXsxfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmlzU3RyZWFtaW5nID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8WW91VHViZVxuICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCI3RHRSUEoyY3JUQVwiXG4gICAgICAgICAgICAgICAgb3B0cz17dmlkZW9PcHRzfVxuICAgICAgICAgICAgICAgIG9uUmVhZHk9e3RoaXMub25WaWRlb1JlYWR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEp1bWJvdHJvbj5cbiAgICAgICAgICAgICAgICA8aDE+TGl2ZSBzdHJlYW0gRGVtbzwvaDE+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBUbyBiZSBhYmxlIHRvIGpvaW4gdmlkZW8gc3RyZWFtIHlvdSBoYXZlIHRvIG9wZW4gYSBwYXltZW50IGNoYW5uZWwuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub3BlblN0cmVhbX0+T3BlbiBjaGFubmVsPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IFxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBsZz17NH0+XG5cbiAgICAgICAgICA8aDI+UHJpY2U6IHt0aGlzLnN0YXRlLnByaWNlfSB7dGhpcy5zdGF0ZS5jdXJyZW5jeX0vc2VjPC9oMj5cbiAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgYnNTaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBmdW5kc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDAnKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogIzMzMztcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBtYXJnaW46IDAgMCAyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/stream.js */'
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
//# sourceMappingURL=3.0512ba0d1a9ec3473479.hot-update.js.map