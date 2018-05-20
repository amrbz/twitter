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
    _this.addFunds = _this.addFunds.bind(_this);
    _this.state = {
      currency: 'ETH',
      price: 0.01,
      isStreaming: false,
      balance: 0.07
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
        isStreaming: true,
        balance: Math.round((ths.state.balance + this.state.price) * 100) / 100
      });

      var ths = this;
      var downloadTimer = setInterval(function () {
        ths.setState({
          balance: Math.round((ths.state.balance - ths.state.price) * 100) / 100
        });

        if (ths.state.balance <= 0) {
          ths.setState({
            isStreaming: false
          });
          clearInterval(downloadTimer);
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
    key: 'addFunds',
    value: function addFunds() {
      this.setState({
        balance: Math.round((this.state.balance + 0.07) * 100) / 100
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
            lineNumber: 84
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["e" /* Row */],
          { style: { paddingTop: 120 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            },
            this.state.isStreaming === true ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_youtube__["a" /* default */], {
              videoId: 'tekErV6FwdE',
              opts: videoOpts,
              onReady: this.onVideoReady,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            }) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["d" /* Jumbotron */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'h1',
                {
                  className: 'jsx-64204075',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                  }
                },
                'Live stream Demo'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-64204075',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  }
                },
                'To be able to join video stream you have to open a payment channel.'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-64204075',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["a" /* Button */],
                  { bsStyle: 'primary', onClick: this.openStream, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
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
                lineNumber: 107
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-64204075',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
                }
              },
              'Balance: ',
              this.state.balance,
              ' ',
              this.state.currency
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-64204075',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
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
                onClick: this.addFunds,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              'Add funds'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '64204075',
          css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\');.jsx-64204075{font-family:\'Open Sans\',sans-serif;color:#333;}h2.jsx-64204075{font-weight:300;margin:0 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0cmVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SG9CLEFBRXVGLEFBQ3hDLEFBSWxCLGdCQUNELGVBQ2pCLElBTFcsV0FPYiIsImZpbGUiOiJwYWdlcy9zdHJlYW0uanMiLCJzb3VyY2VSb290IjoiL29wdC93ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b24sIEltYWdlLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblZpZGVvUmVhZHkgPSB0aGlzLm9uVmlkZW9SZWFkeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlblN0cmVhbSA9IHRoaXMub3BlblN0cmVhbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRnVuZHMgPSB0aGlzLmFkZEZ1bmRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbmN5OiAnRVRIJyxcbiAgICAgIHByaWNlOiAwLjAxLFxuICAgICAgaXNTdHJlYW1pbmc6IGZhbHNlLFxuICAgICAgYmFsYW5jZTogMC4wN1xuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6NzIwMC9hcGkvdjEuMC9pc3N1ZXMnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAvLyAgIGlzc3Vlczoge1xuICAgIC8vICAgICBsaXN0OiByZXMuc3RhdHVzID09PSAyMDQgPyBbXSA6IHJlcy5kYXRhXG4gICAgLy8gICB9IFxuICAgIC8vIH0pO1xuICB9XG4gIC8vIFxuXG4gIG9uVmlkZW9SZWFkeShldmVudCkge1xuICAgIC8vIGV2ZW50LnRhcmdldC5wYXVzZVZpZGVvKCk7XG4gIH1cblxuICBvcGVuU3RyZWFtKCkge1xuICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1N0cmVhbWluZzogdHJ1ZSxcbiAgICAgIGJhbGFuY2U6IE1hdGgucm91bmQoKHRocy5zdGF0ZS5iYWxhbmNlICsgdGhpcy5zdGF0ZS5wcmljZSkgKiAxMDApIC8gMTAwXG4gICAgfSlcblxuICAgIGNvbnN0IHRocyA9IHRoaXNcbiAgICBsZXQgZG93bmxvYWRUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRocy5zZXRTdGF0ZSh7XG4gICAgICAgIGJhbGFuY2U6IE1hdGgucm91bmQoKHRocy5zdGF0ZS5iYWxhbmNlIC0gdGhzLnN0YXRlLnByaWNlKSAqIDEwMCkgLyAxMDBcbiAgICAgIH0pXG5cbiAgICAgIGlmKHRocy5zdGF0ZS5iYWxhbmNlIDw9IDApIHtcbiAgICAgICAgdGhzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1N0cmVhbWluZzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgY2xlYXJJbnRlcnZhbChkb3dubG9hZFRpbWVyKVxuICAgICAgfVxuICAgIH0sMTAwMCk7XG4gIH1cblxuICBjbG9zZVN0cmVhbSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU3RyZWFtaW5nOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuXG4gIGFkZEZ1bmRzKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYmFsYW5jZTogTWF0aC5yb3VuZCgodGhpcy5zdGF0ZS5iYWxhbmNlICsgMC4wNykgKiAxMDApLzEwMFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdmlkZW9PcHRzID0ge1xuICAgICAgaGVpZ2h0OiAnNDAwJyxcbiAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICAgIHBsYXllclZhcnM6IHsgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xuICAgICAgICBhdXRvcGxheTogMVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTIwfX0+XG4gICAgICAgICAgPENvbCBsZz17OH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNTdHJlYW1pbmcgPT09IHRydWUgPyAoXG4gICAgICAgICAgICAgICAgPFlvdVR1YmVcbiAgICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJ0ZWtFclY2RndkRVwiXG4gICAgICAgICAgICAgICAgICBvcHRzPXt2aWRlb09wdHN9XG4gICAgICAgICAgICAgICAgICBvblJlYWR5PXt0aGlzLm9uVmlkZW9SZWFkeX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24+XG4gICAgICAgICAgICAgICAgICA8aDE+TGl2ZSBzdHJlYW0gRGVtbzwvaDE+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVG8gYmUgYWJsZSB0byBqb2luIHZpZGVvIHN0cmVhbSB5b3UgaGF2ZSB0byBvcGVuIGEgcGF5bWVudCBjaGFubmVsLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9wZW5TdHJlYW19Pk9wZW4gY2hhbm5lbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IFxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbGc9ezR9PlxuXG4gICAgICAgICAgICA8aDI+QmFsYW5jZToge3RoaXMuc3RhdGUuYmFsYW5jZX0ge3RoaXMuc3RhdGUuY3VycmVuY3l9PC9oMj5cbiAgICAgICAgICAgIDxoMj5QcmljZToge3RoaXMuc3RhdGUucHJpY2V9IHt0aGlzLnN0YXRlLmN1cnJlbmN5fS9zZWM8L2gyPlxuICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBic1NpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkRnVuZHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCBmdW5kc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDAnKTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG5cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=pages/stream.js */'
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
//# sourceMappingURL=3.36ff095a402eda1fe3df.hot-update.js.map