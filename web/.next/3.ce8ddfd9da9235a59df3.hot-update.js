webpackHotUpdate(3,{

/***/ "./pages/user.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_intl__ = __webpack_require__("./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _jsxFileName = '/opt/web/pages/user.js';

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

    _this.addTweet = _this.addTweet.bind(_this);
    _this.state = {
      userId: props.url.query.userId,
      user: false,
      txPending: false,
      tweets: {
        list: false
      },
      message: ''
    };
    return _this;
  }

  _createClass(_default, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                __WEBPACK_IMPORTED_MODULE_6_axios___default.a.all([__WEBPACK_IMPORTED_MODULE_6_axios___default.a.get('http://127.0.0.1:7610/api/v1.0/users/' + this.state.userId, {}), __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get('http://127.0.0.1:7610/api/v1.0/tweets/' + this.state.userId, {})]).then(__WEBPACK_IMPORTED_MODULE_6_axios___default.a.spread(function (usersRes, tweetsRes) {
                  console.log('usersRes', usersRes);
                  console.log('tweetsRes', tweetsRes);

                  _this2.setState({
                    user: usersRes.data,
                    tweets: {
                      list: tweetsRes.status === 204 ? [] : tweetsRes.data
                    }
                  });
                }));

              case 1:
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
    key: 'addTweet',
    value: function addTweet() {
      var _this3 = this;

      this.setState({
        txPending: true
      });
      var req = __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('http://127.0.0.1:7610/api/v1.0/tweets', {
        message: this.state.message,
        userId: this.state.userId
      }).then(function (response) {
        console.log(response);
        if (response.status === 201) {

          var arr = _this3.state.tweets.list === false && _this3.state.tweets.length === 0 ? [response.data] : [response.data].concat(_this3.state.tweets.list);

          _this3.setState({
            tweets: {
              list: arr
            },
            message: '',
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
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["j" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["d" /* Col */],
            { lg: 4, __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-1513795630',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              },
              this.state.user === false ? '-' : this.state.user.userName
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["d" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-1513795630',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              },
              'Tweets'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["f" /* FormGroup */],
              { controlId: 'formInlineName', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["e" /* FormControl */], {
                componentClass: 'textarea',
                value: this.state.message,
                placeholder: 'Anything to say?',
                onChange: function onChange(e) {
                  return _this4.setState({ message: e.target.value });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["c" /* Button */],
              {
                bsStyle: 'primary',
                onClick: this.addTweet,
                disabled: this.state.txPending,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                }
              },
              'Add record'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
              className: 'jsx-1513795630',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            }),
            this.state.tweets.list === false ? null : this.state.tweets.list.length === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["a" /* Alert */],
              { key: 'tweets_no_contetnt', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                }
              },
              'No records'
            ) : this.state.tweets.list.map(function (item, index) {
              return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["i" /* Panel */],
                { key: 'tweet_' + index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["i" /* Panel */].Heading,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_intl__["a" /* FormattedRelative */], { value: Date.now(), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["i" /* Panel */].Body,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112
                    }
                  },
                  item.message
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["i" /* Panel */].Footer,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 113
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'span',
                    {
                      className: 'jsx-1513795630' + ' ' + 'glyphClass',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["g" /* Glyphicon */], { glyph: 'heart-empty', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                      }
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'span',
                    {
                      className: 'jsx-1513795630' + ' ' + 'glyphClass',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["g" /* Glyphicon */], { glyph: 'retweet', style: { marginRight: '5px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["b" /* Badge */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 119
                        }
                      },
                      '2'
                    )
                  )
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '1513795630',
          css: '@import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700\');.jsx-1513795630{font-family:\'IBM Plex Sans\',sans-serif;}h1.jsx-1513795630{font-size:4em;font-weight:300;margin:1.4em 0 0.4em 0;display:block;border-radius:4px;}h2.jsx-1513795630{font-size:2em;font-weight:300;margin:3.4em 0 1em 0;}span.glyphClass.jsx-1513795630{cursor:pointer;margin-right:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUlzQixBQUU2RixBQUN4QyxBQUd4QixBQVFBLEFBTUMsY0FiQyxBQVFBLENBTUMsZUFiTSxBQVFGLEVBTXZCLE9BQ0YsWUFORSxFQVJnQixjQUNJLGtCQUNwQiIsImZpbGUiOiJwYWdlcy91c2VyLmpzIiwic291cmNlUm9vdCI6Ii9vcHQvd2ViIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYWJvdXQuanNcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyBJbnRsUHJvdmlkZXIsIEZvcm1hdHRlZFJlbGF0aXZlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUm93LCBDb2wsIE1vZGFsLCBCdXR0b24sIEJhZGdlLCBBbGVydCwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgQ29udHJvbExhYmVsLCBUYWJsZSwgUGFuZWwsIEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7ICAgICBcbiAgICAgIHRoaXMuYWRkVHdlZXQgPSB0aGlzLmFkZFR3ZWV0LmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB1c2VySWQ6IHByb3BzLnVybC5xdWVyeS51c2VySWQsXG4gICAgICAgIHVzZXI6IGZhbHNlLFxuICAgICAgICB0eFBlbmRpbmc6IGZhbHNlLFxuICAgICAgICB0d2VldHM6IHtcbiAgICAgICAgICBsaXN0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgICBheGlvcy5hbGwoW1xuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6NzYxMC9hcGkvdjEuMC91c2Vycy8ke3RoaXMuc3RhdGUudXNlcklkfWAsIHtcbiAgICAgICAgfSksXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo3NjEwL2FwaS92MS4wL3R3ZWV0cy8ke3RoaXMuc3RhdGUudXNlcklkfWAsIHtcbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgICAudGhlbihheGlvcy5zcHJlYWQoKHVzZXJzUmVzLCB0d2VldHNSZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJzUmVzJywgdXNlcnNSZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygndHdlZXRzUmVzJywgdHdlZXRzUmVzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXI6IHVzZXJzUmVzLmRhdGEsXG4gICAgICAgICAgdHdlZXRzOiB7XG4gICAgICAgICAgICBsaXN0OiB0d2VldHNSZXMuc3RhdHVzID09PSAyMDQgPyBbXSA6IHR3ZWV0c1Jlcy5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICB9KSk7XG4gICAgfVxuICAgIFxuICAgIGFkZFR3ZWV0KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHR4UGVuZGluZzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICBjb25zdCByZXEgPSBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjc2MTAvYXBpL3YxLjAvdHdlZXRzJywge1xuICAgICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLm1lc3NhZ2UsXG4gICAgICAgIHVzZXJJZDogdGhpcy5zdGF0ZS51c2VySWQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgYXJyID0gdGhpcy5zdGF0ZS50d2VldHMubGlzdCA9PT0gZmFsc2UgJiYgdGhpcy5zdGF0ZS50d2VldHMubGVuZ3RoID09PSAwID8gXG4gICAgICAgICAgICBbcmVzcG9uc2UuZGF0YV0gOiBbcmVzcG9uc2UuZGF0YV0uY29uY2F0KHRoaXMuc3RhdGUudHdlZXRzLmxpc3QpO1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHdlZXRzOiB7XG4gICAgICAgICAgICAgIGxpc3Q6IGFyclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgdHhQZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBsZz17NH0+XG4gICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS51c2VyID09PSBmYWxzZSA/ICctJyA6IHRoaXMuc3RhdGUudXNlci51c2VyTmFtZX08L2gxPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIGxnPXs4fT5cbiAgICAgICAgICAgICAgPGgyPlR3ZWV0czwvaDI+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUlubGluZU5hbWVcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCIgXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSBcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW55dGhpbmcgdG8gc2F5P1wiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZFR3ZWV0fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnR4UGVuZGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFkZCByZWNvcmRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50d2VldHMubGlzdCA9PT0gZmFsc2UgPyBudWxsIDogXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnR3ZWV0cy5saXN0Lmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IGtleT17YHR3ZWV0c19ub19jb250ZXRudGB9PlxuICAgICAgICAgICAgICAgICAgICAgIE5vIHJlY29yZHNcbiAgICAgICAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudHdlZXRzLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbCBrZXk9e2B0d2VldF8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsLkhlYWRpbmc+PEZvcm1hdHRlZFJlbGF0aXZlIHZhbHVlPXtEYXRlLm5vdygpfSAvPjwvUGFuZWwuSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbC5Cb2R5PntpdGVtLm1lc3NhZ2V9PC9QYW5lbC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnZ2x5cGhDbGFzcyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJoZWFydC1lbXB0eVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnZ2x5cGhDbGFzcyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJyZXR3ZWV0XCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2U+MjwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SUJNK1BsZXgrU2FuczozMDAsNDAwLDcwMCcpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBTYW5zJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxLjRlbSAwIDAuNGVtIDA7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMy40ZW0gMCAxZW0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3Bhbi5nbHlwaENsYXNzIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKVxuICAgIH1cbn1cblxuIl19 */\n/*@ sourceURL=pages/user.js */'
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

  reactHotLoader.register(_default, 'default', '/opt/web/pages/user.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/user")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.ce8ddfd9da9235a59df3.hot-update.js.map