module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/opt/web/components/Header.js';



var linkStyle = {
  marginRight: '3em'
};

var containerStyle = {
  paddingTop: '2em'
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: containerStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        'Home'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: '/join', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        'Join'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
var _jsxFileName = '/opt/web/components/MyLayout.js';





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
      __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Grid"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Row"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Col"],
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

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/join.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__);

var _jsxFileName = '/opt/web/pages/join.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// pages/about.js







var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

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

  _createClass(_class, [{
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
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Row"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Col"],
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
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Row"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Col"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            this.state.users.list === false ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Alert"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                }
              },
              'Loading...'
            ) : this.state.users.list.length === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Alert"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              },
              'No users'
            ) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Table"],
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
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Row"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Col"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Button"],
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
          __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"],
          { show: this.state.visible, onHide: this.toggleModal, __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"].Header,
            { closeButton: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"].Title,
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
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"].Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["FormGroup"],
              { controlId: 'formInlineName', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["ControlLabel"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                  }
                },
                'User name'
              ),
              ' ',
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["FormControl"], {
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
            __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Modal"].Footer,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Button"],
              { onClick: this.toggleModal, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 143
                }
              },
              'Close'
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_bootstrap__["Button"],
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
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/join.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=join.js.map