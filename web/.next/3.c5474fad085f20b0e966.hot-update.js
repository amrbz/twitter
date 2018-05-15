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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

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




var moment = __webpack_require__("./node_modules/moment/moment.js");

// import englishLocaleData from 'react-intl/locale-data/en';
// import { IntlProvide } from 'react-intl';



var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.addTweet = _this.addTweet.bind(_this);
    _this.changeUser = _this.changeUser.bind(_this);

    _this.state = {
      userId: props.url.query.userId,
      visitorId: props.url.query.userId,
      user: false,
      txPending: false,
      retweet: null,
      tweets: {
        list: false
      },
      users: {
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

                __WEBPACK_IMPORTED_MODULE_5_axios___default.a.all([__WEBPACK_IMPORTED_MODULE_5_axios___default.a.get('http://127.0.0.1:7610/api/v1.0/users', {}), __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get('http://127.0.0.1:7610/api/v1.0/users/' + this.state.userId, {}), __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get('http://127.0.0.1:7610/api/v1.0/tweets/' + this.state.userId, {})]).then(__WEBPACK_IMPORTED_MODULE_5_axios___default.a.spread(function (usersRes, userRes, tweetsRes) {
                  console.log('usersRes', usersRes);
                  console.log('userRes', userRes);
                  console.log('tweetsRes', tweetsRes);

                  _this2.setState({
                    user: userRes.data,
                    users: {
                      list: usersRes.status === 204 ? [] : usersRes.data
                    },
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
      var req = __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('http://127.0.0.1:7610/api/v1.0/tweets', {
        message: this.state.message,
        userId: this.state.userId,
        retweet: this.state.retweet
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
    key: 'changeUser',
    value: function changeUser(e) {
      this.setState({
        visitorId: e.target.dataset.visitorid
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var users = this.state.users.list === false ? null : this.state.users.list.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["c" /* Button */],
          {
            key: 'user_' + index,
            bsStyle: _this4.state.visitorId === item.id ? 'success' : 'default',
            style: { marginRight: 10 },
            onClick: _this4.changeUser,
            'data-visitorid': item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          },
          item.userName
        );
      });

      var isAdmin = this.state.userId === this.state.visitorId;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["l" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["d" /* Col */],
            { lg: 4, __source: {
                fileName: _jsxFileName,
                lineNumber: 122
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-601104555',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 123
                }
              },
              this.state.user === false ? '-' : this.state.user.userName
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'p',
              {
                className: 'jsx-601104555',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 125
                }
              },
              users
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["d" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-601104555',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 129
                }
              },
              'Tweets'
            ),
            isAdmin ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-601104555',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 132
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormGroup */],
                { controlId: 'formInlineName', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["f" /* FormControl */], {
                  componentClass: 'textarea',
                  value: this.state.message,
                  placeholder: 'Anything to say?',
                  onChange: function onChange(e) {
                    return _this4.setState({ message: e.target.value });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["c" /* Button */],
                {
                  bsStyle: 'primary',
                  onClick: this.addTweet,
                  disabled: this.state.txPending,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                  }
                },
                'Add record'
              )
            ) : null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
              className: 'jsx-601104555',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 152
              }
            }),
            this.state.tweets.list === false ? null : this.state.tweets.list.length === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Alert */],
              { key: 'tweets_no_contetnt', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 156
                }
              },
              'No records'
            ) : this.state.tweets.list.map(function (item, index) {
              var day = moment.unix(item.created);
              return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Panel */],
                { key: 'tweet_' + index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Panel */].Heading,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 164
                    }
                  },
                  'Posted ',
                  day.fromNow()
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Panel */].Body,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 165
                    }
                  },
                  item.message
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Panel */].Footer,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 166
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'span',
                    {
                      className: 'jsx-601104555' + ' ' + 'glyphClass',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 167
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* Glyphicon */], { glyph: 'heart-empty', style: { marginRight: '5px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 168
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Badge */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 169
                        }
                      },
                      '0'
                    )
                  ),
                  isAdmin ? null : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'span',
                    {
                      className: 'jsx-601104555' + ' ' + 'glyphClass',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 173
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* Glyphicon */], { glyph: 'retweet', style: { marginRight: '5px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 174
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Badge */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 175
                        }
                      },
                      '0'
                    )
                  )
                )
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '601104555',
          css: '@import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700\');.jsx-601104555{font-family:\'IBM Plex Sans\',sans-serif;}h1.jsx-601104555{font-size:4em;font-weight:300;margin:1.4em 0 0.4em 0;display:block;border-radius:4px;}h2.jsx-601104555{font-size:2em;font-weight:300;margin:3.4em 0 1em 0;}span.glyphClass.jsx-601104555{cursor:pointer;margin-right:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkx3QixBQUUrRixBQUN4QyxBQUd4QixBQVFBLEFBTUMsY0FiQyxBQVFBLENBTUMsZUFiTSxBQVFGLEVBTXZCLE9BQ0YsWUFORSxFQVJnQixjQUNJLGtCQUNwQiIsImZpbGUiOiJwYWdlcy91c2VyLmpzIiwic291cmNlUm9vdCI6Ii9vcHQvd2ViIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYWJvdXQuanNcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuLy8gaW1wb3J0IGVuZ2xpc2hMb2NhbGVEYXRhIGZyb20gJ3JlYWN0LWludGwvbG9jYWxlLWRhdGEvZW4nO1xuLy8gaW1wb3J0IHsgSW50bFByb3ZpZGUgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSb3csIENvbCwgTW9kYWwsIEJ1dHRvbiwgQmFkZ2UsIEFsZXJ0LCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBDb250cm9sTGFiZWwsIFRhYmxlLCBQYW5lbCwgR2x5cGhpY29uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTsgICAgIFxuICAgICAgdGhpcy5hZGRUd2VldCA9IHRoaXMuYWRkVHdlZXQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY2hhbmdlVXNlciA9IHRoaXMuY2hhbmdlVXNlci5iaW5kKHRoaXMpO1xuXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB1c2VySWQ6IHByb3BzLnVybC5xdWVyeS51c2VySWQsXG4gICAgICAgIHZpc2l0b3JJZDogcHJvcHMudXJsLnF1ZXJ5LnVzZXJJZCxcbiAgICAgICAgdXNlcjogZmFsc2UsXG4gICAgICAgIHR4UGVuZGluZzogZmFsc2UsXG4gICAgICAgIHJldHdlZXQ6IG51bGwsXG4gICAgICAgIHR3ZWV0czoge1xuICAgICAgICAgIGxpc3Q6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB1c2Vyczoge1xuICAgICAgICAgIGxpc3Q6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjc2MTAvYXBpL3YxLjAvdXNlcnNgLCB7XG4gICAgICAgIH0pLFxuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6NzYxMC9hcGkvdjEuMC91c2Vycy8ke3RoaXMuc3RhdGUudXNlcklkfWAsIHtcbiAgICAgICAgfSksXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo3NjEwL2FwaS92MS4wL3R3ZWV0cy8ke3RoaXMuc3RhdGUudXNlcklkfWAsIHtcbiAgICAgICAgfSlcbiAgICAgIF0pXG4gICAgICAudGhlbihheGlvcy5zcHJlYWQoKHVzZXJzUmVzLCB1c2VyUmVzLCB0d2VldHNSZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJzUmVzJywgdXNlcnNSZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygndXNlclJlcycsIHVzZXJSZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygndHdlZXRzUmVzJywgdHdlZXRzUmVzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXI6IHVzZXJSZXMuZGF0YSxcbiAgICAgICAgICB1c2Vyczoge1xuICAgICAgICAgICAgbGlzdDogdXNlcnNSZXMuc3RhdHVzID09PSAyMDQgPyBbXSA6IHVzZXJzUmVzLmRhdGFcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR3ZWV0czoge1xuICAgICAgICAgICAgbGlzdDogdHdlZXRzUmVzLnN0YXR1cyA9PT0gMjA0ID8gW10gOiB0d2VldHNSZXMuZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSkpO1xuICAgIH1cbiAgICBcbiAgICBhZGRUd2VldCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0eFBlbmRpbmc6IHRydWUsXG4gICAgICB9KVxuICAgICAgY29uc3QgcmVxID0gYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo3NjEwL2FwaS92MS4wL3R3ZWV0cycsIHtcbiAgICAgICAgbWVzc2FnZTogdGhpcy5zdGF0ZS5tZXNzYWdlLFxuICAgICAgICB1c2VySWQ6IHRoaXMuc3RhdGUudXNlcklkLFxuICAgICAgICByZXR3ZWV0OiB0aGlzLnN0YXRlLnJldHdlZXRcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBhcnIgPSB0aGlzLnN0YXRlLnR3ZWV0cy5saXN0ID09PSBmYWxzZSAmJiB0aGlzLnN0YXRlLnR3ZWV0cy5sZW5ndGggPT09IDAgPyBcbiAgICAgICAgICAgIFtyZXNwb25zZS5kYXRhXSA6IFtyZXNwb25zZS5kYXRhXS5jb25jYXQodGhpcy5zdGF0ZS50d2VldHMubGlzdCk7XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0d2VldHM6IHtcbiAgICAgICAgICAgICAgbGlzdDogYXJyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICB0eFBlbmRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVVzZXIoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2l0b3JJZDogZS50YXJnZXQuZGF0YXNldC52aXNpdG9yaWRcbiAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcblxuICAgICAgXG4gICAgICBjb25zdCB1c2VycyA9IHRoaXMuc3RhdGUudXNlcnMubGlzdCA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICB0aGlzLnN0YXRlLnVzZXJzLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICBrZXk9e2B1c2VyXyR7aW5kZXh9YH1cbiAgICAgICAgICAgIGJzU3R5bGU9e3RoaXMuc3RhdGUudmlzaXRvcklkID09PSBpdGVtLmlkID8gJ3N1Y2Nlc3MnIDogJ2RlZmF1bHQnfSBcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VVc2VyfVxuICAgICAgICAgICAgZGF0YS12aXNpdG9yaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW0udXNlck5hbWV9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGlzQWRtaW4gPSB0aGlzLnN0YXRlLnVzZXJJZCA9PT0gdGhpcy5zdGF0ZS52aXNpdG9ySWQ7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgbGc9ezR9PlxuICAgICAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS51c2VyID09PSBmYWxzZSA/ICctJyA6IHRoaXMuc3RhdGUudXNlci51c2VyTmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxwPnt1c2Vyc308L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBsZz17OH0+XG4gICAgICAgICAgICAgICAgPGgyPlR3ZWV0czwvaDI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaXNBZG1pbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1JbmxpbmVOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW55dGhpbmcgdG8gc2F5P1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJzU3R5bGU9XCJwcmltYXJ5XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZFR3ZWV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUudHhQZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCByZWNvcmRcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnR3ZWV0cy5saXN0ID09PSBmYWxzZSA/IG51bGwgOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50d2VldHMubGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IGtleT17YHR3ZWV0c19ub19jb250ZXRudGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gcmVjb3Jkc1xuICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50d2VldHMubGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXkgPSBtb21lbnQudW5peChpdGVtLmNyZWF0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsIGtleT17YHR3ZWV0XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsLkhlYWRpbmc+UG9zdGVkIHtkYXkuZnJvbU5vdygpfTwvUGFuZWwuSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWwuQm9keT57aXRlbS5tZXNzYWdlfTwvUGFuZWwuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnZ2x5cGhDbGFzcyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2x5cGhpY29uIGdseXBoPVwiaGVhcnQtZW1wdHlcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2U+MDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRtaW4gPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2dseXBoQ2xhc3MnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJyZXR3ZWV0XCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZT4wPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SUJNK1BsZXgrU2FuczozMDAsNDAwLDcwMCcpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMS40ZW0gMCAwLjRlbSAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMy40ZW0gMCAxZW0gMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNwYW4uZ2x5cGhDbGFzcyB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApXG4gICAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=pages/user.js */'
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
//# sourceMappingURL=3.c5474fad085f20b0e966.hot-update.js.map