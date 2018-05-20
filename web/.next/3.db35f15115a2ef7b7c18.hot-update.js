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
      balance: 0.14
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
        // balance: Math.round((this.state.balance + this.state.price) * 100) / 100
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
                'Please donate'
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
          css: '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\');.jsx-64204075{font-family:\'Open Sans\',sans-serif;color:#333;}h2.jsx-64204075{font-weight:300;margin:0 0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0cmVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SG9CLEFBRXVGLEFBQ3hDLEFBSWxCLGdCQUNELGVBQ2pCLElBTFcsV0FPYiIsImZpbGUiOiJwYWdlcy9zdHJlYW0uanMiLCJzb3VyY2VSb290IjoiL29wdC93ZWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b24sIEltYWdlLCBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblZpZGVvUmVhZHkgPSB0aGlzLm9uVmlkZW9SZWFkeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlblN0cmVhbSA9IHRoaXMub3BlblN0cmVhbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRnVuZHMgPSB0aGlzLmFkZEZ1bmRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbmN5OiAnRVRIJyxcbiAgICAgIHByaWNlOiAwLjAxLFxuICAgICAgaXNTdHJlYW1pbmc6IGZhbHNlLFxuICAgICAgYmFsYW5jZTogMC4xNFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6NzIwMC9hcGkvdjEuMC9pc3N1ZXMnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAvLyAgIGlzc3Vlczoge1xuICAgIC8vICAgICBsaXN0OiByZXMuc3RhdHVzID09PSAyMDQgPyBbXSA6IHJlcy5kYXRhXG4gICAgLy8gICB9IFxuICAgIC8vIH0pO1xuICB9XG4gIC8vIFxuXG4gIG9uVmlkZW9SZWFkeShldmVudCkge1xuICAgIC8vIGV2ZW50LnRhcmdldC5wYXVzZVZpZGVvKCk7XG4gIH1cblxuICBvcGVuU3RyZWFtKCkge1xuICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1N0cmVhbWluZzogdHJ1ZSxcbiAgICAgIC8vIGJhbGFuY2U6IE1hdGgucm91bmQoKHRoaXMuc3RhdGUuYmFsYW5jZSArIHRoaXMuc3RhdGUucHJpY2UpICogMTAwKSAvIDEwMFxuICAgIH0pXG5cbiAgICBjb25zdCB0aHMgPSB0aGlzXG4gICAgbGV0IGRvd25sb2FkVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aHMuc2V0U3RhdGUoe1xuICAgICAgICBiYWxhbmNlOiBNYXRoLnJvdW5kKCh0aHMuc3RhdGUuYmFsYW5jZSAtIHRocy5zdGF0ZS5wcmljZSkgKiAxMDApIC8gMTAwXG4gICAgICB9KVxuXG4gICAgICBpZih0aHMuc3RhdGUuYmFsYW5jZSA8PSAwKSB7XG4gICAgICAgIHRocy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNTdHJlYW1pbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZG93bmxvYWRUaW1lcilcbiAgICAgIH1cbiAgICB9LDEwMDApO1xuICB9XG5cbiAgY2xvc2VTdHJlYW0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1N0cmVhbWluZzogZmFsc2VcbiAgICB9KVxuICB9XG5cblxuICBhZGRGdW5kcygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJhbGFuY2U6IE1hdGgucm91bmQoKHRoaXMuc3RhdGUuYmFsYW5jZSArIDAuMDcpICogMTAwKS8xMDBcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHZpZGVvT3B0cyA9IHtcbiAgICAgIGhlaWdodDogJzQwMCcsXG4gICAgICB3aWR0aDogJzkwJScsXG4gICAgICBwbGF5ZXJWYXJzOiB7IC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcbiAgICAgICAgYXV0b3BsYXk6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Um93IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDEyMH19PlxuICAgICAgICAgIDxDb2wgbGc9ezh9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzU3RyZWFtaW5nID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgIDxZb3VUdWJlXG4gICAgICAgICAgICAgICAgICB2aWRlb0lkPVwidGVrRXJWNkZ3ZEVcIlxuICAgICAgICAgICAgICAgICAgb3B0cz17dmlkZW9PcHRzfVxuICAgICAgICAgICAgICAgICAgb25SZWFkeT17dGhpcy5vblZpZGVvUmVhZHl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uPlxuICAgICAgICAgICAgICAgICAgPGgxPlBsZWFzZSBkb25hdGU8L2gxPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRvIGJlIGFibGUgdG8gam9pbiB2aWRlbyBzdHJlYW0geW91IGhhdmUgdG8gb3BlbiBhIHBheW1lbnQgY2hhbm5lbC5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5vcGVuU3RyZWFtfT5PcGVuIGNoYW5uZWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGxnPXs0fT5cblxuICAgICAgICAgICAgPGgyPkJhbGFuY2U6IHt0aGlzLnN0YXRlLmJhbGFuY2V9IHt0aGlzLnN0YXRlLmN1cnJlbmN5fTwvaDI+XG4gICAgICAgICAgICA8aDI+UHJpY2U6IHt0aGlzLnN0YXRlLnByaWNlfSB7dGhpcy5zdGF0ZS5jdXJyZW5jeX0vc2VjPC9oMj5cbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgIGJzU3R5bGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgYnNTaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZEZ1bmRzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgZnVuZHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNzAwJyk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/stream.js */'
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
//# sourceMappingURL=3.db35f15115a2ef7b7c18.hot-update.js.map