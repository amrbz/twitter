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
    _this.retweet = _this.retweet.bind(_this);
    _this.changeUser = _this.changeUser.bind(_this);

    _this.state = {
      userId: props.url.query.userId,
      visitorId: props.url.query.userId,
      user: false,
      txPending: false,
      retweetId: null,
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
    key: 'retweet',
    value: function retweet(e) {
      var _this4 = this;

      this.setState({
        retweetId: e.target.dataset.retweetid
      });

      var req = __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('http://127.0.0.1:7610/api/v1.0/tweets', {
        userId: this.state.visitorId,
        retweetId: this.state.retweet
      }).then(function (response) {
        console.log(response);
        if (response.status === 201) {

          // const arr = this.state.tweets.list === false && this.state.tweets.length === 0 ? 
          //   [response.data] : [response.data].concat(this.state.tweets.list);

          _this4.setState({
            // tweets: {
            //   list: arr
            // },
            // message: '',
            retweetId: null
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
      var _this5 = this;

      var users = this.state.users.list === false ? null : this.state.users.list.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["c" /* Button */],
          {
            key: 'user_' + index,
            bsStyle: _this5.state.visitorId === item.id ? 'success' : 'default',
            style: { marginRight: 10 },
            onClick: _this5.changeUser,
            'data-visitorid': item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
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
            lineNumber: 152
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["l" /* Row */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["d" /* Col */],
            { lg: 4, __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h1',
              {
                className: 'jsx-601104555',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 155
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
                  lineNumber: 157
                }
              },
              users
            )
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["d" /* Col */],
            { lg: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'h2',
              {
                className: 'jsx-601104555',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 161
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
                  lineNumber: 164
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["g" /* FormGroup */],
                { controlId: 'formInlineName', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["f" /* FormControl */], {
                  componentClass: 'textarea',
                  value: this.state.message,
                  placeholder: 'Anything to say?',
                  onChange: function onChange(e) {
                    return _this5.setState({ message: e.target.value });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
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
                    lineNumber: 173
                  }
                },
                'Add record'
              )
            ) : null,
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('hr', {
              className: 'jsx-601104555',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 184
              }
            }),
            this.state.tweets.list === false ? null : this.state.tweets.list.length === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["a" /* Alert */],
              { key: 'tweets_no_contetnt', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 188
                }
              },
              'No records'
            ) : this.state.tweets.list.map(function (item, index) {
              var day = moment.unix(item.created);
              return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Panel */],
                { key: 'tweet_' + index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Panel */].Heading,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 196
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
                      lineNumber: 197
                    }
                  },
                  item.message
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["k" /* Panel */].Footer,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 198
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'span',
                    {
                      className: 'jsx-601104555' + ' ' + 'glyphClass',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 199
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* Glyphicon */], { glyph: 'heart-empty', style: { marginRight: '5px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 200
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Badge */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 201
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
                        lineNumber: 205
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["h" /* Glyphicon */], {
                      glyph: 'retweet',
                      style: { marginRight: '5px' },
                      onClick: _this5.retweet,
                      'data-retweetid': item.id,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 206
                      }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["b" /* Badge */],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 212
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
          css: '@import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700\');.jsx-601104555{font-family:\'IBM Plex Sans\',sans-serif;}h1.jsx-601104555{font-size:4em;font-weight:300;margin:1.4em 0 0.4em 0;display:block;border-radius:4px;}h2.jsx-601104555{font-size:2em;font-weight:300;margin:3.4em 0 1em 0;}span.glyphClass.jsx-601104555{cursor:pointer;margin-right:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa093QixBQUUrRixBQUN4QyxBQUd4QixBQVFBLEFBTUMsY0FiQyxBQVFBLENBTUMsZUFiTSxBQVFGLEVBTXZCLE9BQ0YsWUFORSxFQVJnQixjQUNJLGtCQUNwQiIsImZpbGUiOiJwYWdlcy91c2VyLmpzIiwic291cmNlUm9vdCI6Ii9vcHQvd2ViIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYWJvdXQuanNcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcblxuLy8gaW1wb3J0IGVuZ2xpc2hMb2NhbGVEYXRhIGZyb20gJ3JlYWN0LWludGwvbG9jYWxlLWRhdGEvZW4nO1xuLy8gaW1wb3J0IHsgSW50bFByb3ZpZGUgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSb3csIENvbCwgTW9kYWwsIEJ1dHRvbiwgQmFkZ2UsIEFsZXJ0LCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBDb250cm9sTGFiZWwsIFRhYmxlLCBQYW5lbCwgR2x5cGhpY29uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTsgICAgIFxuICAgICAgdGhpcy5hZGRUd2VldCA9IHRoaXMuYWRkVHdlZXQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMucmV0d2VldCA9IHRoaXMucmV0d2VldC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jaGFuZ2VVc2VyID0gdGhpcy5jaGFuZ2VVc2VyLmJpbmQodGhpcyk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHVzZXJJZDogcHJvcHMudXJsLnF1ZXJ5LnVzZXJJZCxcbiAgICAgICAgdmlzaXRvcklkOiBwcm9wcy51cmwucXVlcnkudXNlcklkLFxuICAgICAgICB1c2VyOiBmYWxzZSxcbiAgICAgICAgdHhQZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgcmV0d2VldElkOiBudWxsLFxuICAgICAgICB0d2VldHM6IHtcbiAgICAgICAgICBsaXN0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcnM6IHtcbiAgICAgICAgICBsaXN0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo3NjEwL2FwaS92MS4wL3VzZXJzYCwge1xuICAgICAgICB9KSxcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjc2MTAvYXBpL3YxLjAvdXNlcnMvJHt0aGlzLnN0YXRlLnVzZXJJZH1gLCB7XG4gICAgICAgIH0pLFxuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6NzYxMC9hcGkvdjEuMC90d2VldHMvJHt0aGlzLnN0YXRlLnVzZXJJZH1gLCB7XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgICAgLnRoZW4oYXhpb3Muc3ByZWFkKCh1c2Vyc1JlcywgdXNlclJlcywgdHdlZXRzUmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2Vyc1JlcycsIHVzZXJzUmVzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJSZXMnLCB1c2VyUmVzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3R3ZWV0c1JlcycsIHR3ZWV0c1Jlcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VyOiB1c2VyUmVzLmRhdGEsXG4gICAgICAgICAgdXNlcnM6IHtcbiAgICAgICAgICAgIGxpc3Q6IHVzZXJzUmVzLnN0YXR1cyA9PT0gMjA0ID8gW10gOiB1c2Vyc1Jlcy5kYXRhXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0d2VldHM6IHtcbiAgICAgICAgICAgIGxpc3Q6IHR3ZWV0c1Jlcy5zdGF0dXMgPT09IDIwNCA/IFtdIDogdHdlZXRzUmVzLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIH0pKTtcbiAgICB9XG4gICAgXG4gICAgYWRkVHdlZXQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHhQZW5kaW5nOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IHJlcSA9IGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6NzYxMC9hcGkvdjEuMC90d2VldHMnLCB7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZSxcbiAgICAgICAgdXNlcklkOiB0aGlzLnN0YXRlLnVzZXJJZCxcbiAgICAgICAgcmV0d2VldDogdGhpcy5zdGF0ZS5yZXR3ZWV0XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgYXJyID0gdGhpcy5zdGF0ZS50d2VldHMubGlzdCA9PT0gZmFsc2UgJiYgdGhpcy5zdGF0ZS50d2VldHMubGVuZ3RoID09PSAwID8gXG4gICAgICAgICAgICBbcmVzcG9uc2UuZGF0YV0gOiBbcmVzcG9uc2UuZGF0YV0uY29uY2F0KHRoaXMuc3RhdGUudHdlZXRzLmxpc3QpO1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHdlZXRzOiB7XG4gICAgICAgICAgICAgIGxpc3Q6IGFyclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgdHhQZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR3ZWV0KGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZXR3ZWV0SWQ6IGUudGFyZ2V0LmRhdGFzZXQucmV0d2VldGlkLFxuICAgICAgfSlcblxuICAgICAgY29uc3QgcmVxID0gYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo3NjEwL2FwaS92MS4wL3R3ZWV0cycsIHtcbiAgICAgICAgdXNlcklkOiB0aGlzLnN0YXRlLnZpc2l0b3JJZCxcbiAgICAgICAgcmV0d2VldElkOiB0aGlzLnN0YXRlLnJldHdlZXRcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBjb25zdCBhcnIgPSB0aGlzLnN0YXRlLnR3ZWV0cy5saXN0ID09PSBmYWxzZSAmJiB0aGlzLnN0YXRlLnR3ZWV0cy5sZW5ndGggPT09IDAgPyBcbiAgICAgICAgICAvLyAgIFtyZXNwb25zZS5kYXRhXSA6IFtyZXNwb25zZS5kYXRhXS5jb25jYXQodGhpcy5zdGF0ZS50d2VldHMubGlzdCk7XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAvLyB0d2VldHM6IHtcbiAgICAgICAgICAgIC8vICAgbGlzdDogYXJyXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8gbWVzc2FnZTogJycsXG4gICAgICAgICAgICByZXR3ZWV0SWQ6IG51bGwsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICB9XG5cbiAgICBjaGFuZ2VVc2VyKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpdG9ySWQ6IGUudGFyZ2V0LmRhdGFzZXQudmlzaXRvcmlkXG4gICAgICB9KVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG5cbiAgICAgIFxuICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnN0YXRlLnVzZXJzLmxpc3QgPT09IGZhbHNlID8gbnVsbCA6IChcbiAgICAgICAgdGhpcy5zdGF0ZS51c2Vycy5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAga2V5PXtgdXNlcl8ke2luZGV4fWB9XG4gICAgICAgICAgICBic1N0eWxlPXt0aGlzLnN0YXRlLnZpc2l0b3JJZCA9PT0gaXRlbS5pZCA/ICdzdWNjZXNzJyA6ICdkZWZhdWx0J30gXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlVXNlcn1cbiAgICAgICAgICAgIGRhdGEtdmlzaXRvcmlkPXtpdGVtLmlkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpdGVtLnVzZXJOYW1lfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBpc0FkbWluID0gdGhpcy5zdGF0ZS51c2VySWQgPT09IHRoaXMuc3RhdGUudmlzaXRvcklkO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIGxnPXs0fT5cbiAgICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUudXNlciA9PT0gZmFsc2UgPyAnLScgOiB0aGlzLnN0YXRlLnVzZXIudXNlck5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cD57dXNlcnN9PC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgbGc9ezh9PlxuICAgICAgICAgICAgICAgIDxoMj5Ud2VldHM8L2gyPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlzQWRtaW4gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtSW5saW5lTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFueXRoaW5nIHRvIHNheT9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICBic1N0eWxlPVwicHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRUd2VldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnR4UGVuZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgcmVjb3JkXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50d2VldHMubGlzdCA9PT0gZmFsc2UgPyBudWxsIDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudHdlZXRzLmxpc3QubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCBrZXk9e2B0d2VldHNfbm9fY29udGV0bnRgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHJlY29yZHNcbiAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudHdlZXRzLmxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gbW9tZW50LnVuaXgoaXRlbS5jcmVhdGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbCBrZXk9e2B0d2VldF8ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbC5IZWFkaW5nPlBvc3RlZCB7ZGF5LmZyb21Ob3coKX08L1BhbmVsLkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsLkJvZHk+e2l0ZW0ubWVzc2FnZX08L1BhbmVsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2dseXBoQ2xhc3MnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdseXBoaWNvbiBnbHlwaD1cImhlYXJ0LWVtcHR5XCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlPjA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FkbWluID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydnbHlwaENsYXNzJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2x5cGhpY29uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbHlwaD1cInJldHdlZXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmV0d2VldH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcmV0d2VldGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZT4wPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SUJNK1BsZXgrU2FuczozMDAsNDAwLDcwMCcpO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMS40ZW0gMCAwLjRlbSAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMy40ZW0gMCAxZW0gMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNwYW4uZ2x5cGhDbGFzcyB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApXG4gICAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=pages/user.js */'
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
//# sourceMappingURL=3.f718b7fbbc39b1b91753.hot-update.js.map