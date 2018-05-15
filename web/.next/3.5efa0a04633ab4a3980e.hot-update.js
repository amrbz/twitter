webpackHotUpdate(3,{

/***/ "./node_modules/react-intl/lib/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addLocaleData */
/* unused harmony export intlShape */
/* unused harmony export injectIntl */
/* unused harmony export defineMessages */
/* unused harmony export IntlProvider */
/* unused harmony export FormattedDate */
/* unused harmony export FormattedTime */
/* unused harmony export FormattedRelative */
/* unused harmony export FormattedNumber */
/* unused harmony export FormattedPlural */
/* unused harmony export FormattedMessage */
/* unused harmony export FormattedHTMLMessage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_data_index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_data_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__locale_data_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intl_messageformat__ = __webpack_require__("./node_modules/intl-messageformat/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_intl_messageformat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat__ = __webpack_require__("./node_modules/intl-relativeformat/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_intl_relativeformat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_intl_format_cache__ = __webpack_require__("./node_modules/intl-format-cache/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_intl_format_cache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_intl_format_cache__);
/*
 * Copyright 2017, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */









// GENERATED FILE
var defaultLocaleData = { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
  }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } };

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

function addLocaleData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var locales = Array.isArray(data) ? data : [data];

  locales.forEach(function (localeData) {
    if (localeData && localeData.locale) {
      __WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a.__addLocaleData(localeData);
      __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a.__addLocaleData(localeData);
    }
  });
}

function hasLocaleData(locale) {
  var localeParts = (locale || '').split('-');

  while (localeParts.length > 0) {
    if (hasIMFAndIRFLocaleData(localeParts.join('-'))) {
      return true;
    }

    localeParts.pop();
  }

  return false;
}

function hasIMFAndIRFLocaleData(locale) {
  var normalizedLocale = locale && locale.toLowerCase();

  return !!(__WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a.__localeData__[normalizedLocale] && __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a.__localeData__[normalizedLocale]);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var bool = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool;
var number = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number;
var string = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string;
var func = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func;
var object = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object;
var oneOf = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf;
var shape = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape;
var any = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any;
var oneOfType = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType;

var localeMatcher = oneOf(['best fit', 'lookup']);
var narrowShortLong = oneOf(['narrow', 'short', 'long']);
var numeric2digit = oneOf(['numeric', '2-digit']);
var funcReq = func.isRequired;

var intlConfigPropTypes = {
  locale: string,
  formats: object,
  messages: object,
  textComponent: any,

  defaultLocale: string,
  defaultFormats: object
};

var intlFormatPropTypes = {
  formatDate: funcReq,
  formatTime: funcReq,
  formatRelative: funcReq,
  formatNumber: funcReq,
  formatPlural: funcReq,
  formatMessage: funcReq,
  formatHTMLMessage: funcReq
};

var intlShape = shape(_extends({}, intlConfigPropTypes, intlFormatPropTypes, {
  formatters: object,
  now: funcReq
}));

var messageDescriptorPropTypes = {
  id: string.isRequired,
  description: oneOfType([string, object]),
  defaultMessage: string
};

var dateTimeFormatPropTypes = {
  localeMatcher: localeMatcher,
  formatMatcher: oneOf(['basic', 'best fit']),

  timeZone: string,
  hour12: bool,

  weekday: narrowShortLong,
  era: narrowShortLong,
  year: numeric2digit,
  month: oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
  day: numeric2digit,
  hour: numeric2digit,
  minute: numeric2digit,
  second: numeric2digit,
  timeZoneName: oneOf(['short', 'long'])
};

var numberFormatPropTypes = {
  localeMatcher: localeMatcher,

  style: oneOf(['decimal', 'currency', 'percent']),
  currency: string,
  currencyDisplay: oneOf(['symbol', 'code', 'name']),
  useGrouping: bool,

  minimumIntegerDigits: number,
  minimumFractionDigits: number,
  maximumFractionDigits: number,
  minimumSignificantDigits: number,
  maximumSignificantDigits: number
};

var relativeFormatPropTypes = {
  style: oneOf(['best fit', 'numeric']),
  units: oneOf(['second', 'minute', 'hour', 'day', 'month', 'year'])
};

var pluralFormatPropTypes = {
  style: oneOf(['cardinal', 'ordinal'])
};

/*
HTML escaping and shallow-equals implementations are the same as React's
(on purpose.) Therefore, it has the following Copyright and Licensing:

Copyright 2013-2014, Facebook, Inc.
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE
file in the root directory of React's source tree.
*/

var intlConfigPropNames = Object.keys(intlConfigPropTypes);

var ESCAPED_CHARS = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  "'": '&#x27;'
};

var UNSAFE_CHARS_REGEX = /[&><"']/g;

function escape(str) {
  return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
    return ESCAPED_CHARS[match];
  });
}

function filterProps(props, whitelist) {
  var defaults$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return whitelist.reduce(function (filtered, name) {
    if (props.hasOwnProperty(name)) {
      filtered[name] = props[name];
    } else if (defaults$$1.hasOwnProperty(name)) {
      filtered[name] = defaults$$1[name];
    }

    return filtered;
  }, {});
}

function invariantIntlContext() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      intl = _ref.intl;

  __WEBPACK_IMPORTED_MODULE_5_invariant___default()(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
}

function shallowEquals(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

function shouldIntlComponentUpdate(_ref2, nextProps, nextState) {
  var props = _ref2.props,
      state = _ref2.state,
      _ref2$context = _ref2.context,
      context = _ref2$context === undefined ? {} : _ref2$context;
  var nextContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _context$intl = context.intl,
      intl = _context$intl === undefined ? {} : _context$intl;
  var _nextContext$intl = nextContext.intl,
      nextIntl = _nextContext$intl === undefined ? {} : _nextContext$intl;


  return !shallowEquals(nextProps, props) || !shallowEquals(nextState, state) || !(nextIntl === intl || shallowEquals(filterProps(nextIntl, intlConfigPropNames), filterProps(intl, intlConfigPropNames)));
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

// Inspired by react-redux's `connect()` HOC factory function implementation:
// https://github.com/rackt/react-redux

function getDisplayName(Component$$1) {
  return Component$$1.displayName || Component$$1.name || 'Component';
}

function injectIntl(WrappedComponent) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$intlPropName = options.intlPropName,
      intlPropName = _options$intlPropName === undefined ? 'intl' : _options$intlPropName,
      _options$withRef = options.withRef,
      withRef = _options$withRef === undefined ? false : _options$withRef;

  var InjectIntl = function (_Component) {
    inherits(InjectIntl, _Component);

    function InjectIntl(props, context) {
      classCallCheck(this, InjectIntl);

      var _this = possibleConstructorReturn(this, (InjectIntl.__proto__ || Object.getPrototypeOf(InjectIntl)).call(this, props, context));

      invariantIntlContext(context);
      return _this;
    }

    createClass(InjectIntl, [{
      key: 'getWrappedInstance',
      value: function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_5_invariant___default()(withRef, '[React Intl] To access the wrapped instance, ' + 'the `{withRef: true}` option must be set when calling: ' + '`injectIntl()`');

        return this.refs.wrappedInstance;
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(WrappedComponent, _extends({}, this.props, defineProperty({}, intlPropName, this.context.intl), {
          ref: withRef ? 'wrappedInstance' : null
        }));
      }
    }]);
    return InjectIntl;
  }(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

  InjectIntl.displayName = 'InjectIntl(' + getDisplayName(WrappedComponent) + ')';
  InjectIntl.contextTypes = {
    intl: intlShape
  };
  InjectIntl.WrappedComponent = WrappedComponent;


  return InjectIntl;
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

function defineMessages(messageDescriptors) {
  // This simply returns what's passed-in because it's meant to be a hook for
  // babel-plugin-react-intl.
  return messageDescriptors;
}

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

// This is a "hack" until a proper `intl-pluralformat` package is created.

function resolveLocale(locales) {
  // IntlMessageFormat#_resolveLocale() does not depend on `this`.
  return __WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a.prototype._resolveLocale(locales);
}

function findPluralFunction(locale) {
  // IntlMessageFormat#_findPluralFunction() does not depend on `this`.
  return __WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a.prototype._findPluralRuleFunction(locale);
}

var IntlPluralFormat = function IntlPluralFormat(locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  classCallCheck(this, IntlPluralFormat);

  var useOrdinal = options.style === 'ordinal';
  var pluralFn = findPluralFunction(resolveLocale(locales));

  this.format = function (value) {
    return pluralFn(value, useOrdinal);
  };
};

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var DATE_TIME_FORMAT_OPTIONS = Object.keys(dateTimeFormatPropTypes);
var NUMBER_FORMAT_OPTIONS = Object.keys(numberFormatPropTypes);
var RELATIVE_FORMAT_OPTIONS = Object.keys(relativeFormatPropTypes);
var PLURAL_FORMAT_OPTIONS = Object.keys(pluralFormatPropTypes);

var RELATIVE_FORMAT_THRESHOLDS = {
  second: 60, // seconds to minute
  minute: 60, // minutes to hour
  hour: 24, // hours to day
  day: 30, // days to month
  month: 12 // months to year
};

function updateRelativeFormatThresholds(newThresholds) {
  var thresholds = __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a.thresholds;
  thresholds.second = newThresholds.second;
  thresholds.minute = newThresholds.minute;
  thresholds.hour = newThresholds.hour;
  thresholds.day = newThresholds.day;
  thresholds.month = newThresholds.month;
}

function getNamedFormat(formats, type, name) {
  var format = formats && formats[type] && formats[type][name];
  if (format) {
    return format;
  }

  if (true) {
    console.error('[React Intl] No ' + type + ' format named: ' + name);
  }
}

function formatDate(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats;
  var format = options.format;


  var date = new Date(value);
  var defaults$$1 = format && getNamedFormat(formats, 'date', format);
  var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);

  try {
    return state.getDateTimeFormat(locale, filteredOptions).format(date);
  } catch (e) {
    if (true) {
      console.error('[React Intl] Error formatting date.\n' + e);
    }
  }

  return String(date);
}

function formatTime(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats;
  var format = options.format;


  var date = new Date(value);
  var defaults$$1 = format && getNamedFormat(formats, 'time', format);
  var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);

  if (!filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second) {
    // Add default formatting options if hour, minute, or second isn't defined.
    filteredOptions = _extends({}, filteredOptions, { hour: 'numeric', minute: 'numeric' });
  }

  try {
    return state.getDateTimeFormat(locale, filteredOptions).format(date);
  } catch (e) {
    if (true) {
      console.error('[React Intl] Error formatting time.\n' + e);
    }
  }

  return String(date);
}

function formatRelative(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats;
  var format = options.format;


  var date = new Date(value);
  var now = new Date(options.now);
  var defaults$$1 = format && getNamedFormat(formats, 'relative', format);
  var filteredOptions = filterProps(options, RELATIVE_FORMAT_OPTIONS, defaults$$1);

  // Capture the current threshold values, then temporarily override them with
  // specific values just for this render.
  var oldThresholds = _extends({}, __WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a.thresholds);
  updateRelativeFormatThresholds(RELATIVE_FORMAT_THRESHOLDS);

  try {
    return state.getRelativeFormat(locale, filteredOptions).format(date, {
      now: isFinite(now) ? now : state.now()
    });
  } catch (e) {
    if (true) {
      console.error('[React Intl] Error formatting relative time.\n' + e);
    }
  } finally {
    updateRelativeFormatThresholds(oldThresholds);
  }

  return String(date);
}

function formatNumber(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats;
  var format = options.format;


  var defaults$$1 = format && getNamedFormat(formats, 'number', format);
  var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults$$1);

  try {
    return state.getNumberFormat(locale, filteredOptions).format(value);
  } catch (e) {
    if (true) {
      console.error('[React Intl] Error formatting number.\n' + e);
    }
  }

  return String(value);
}

function formatPlural(config, state, value) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale;


  var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);

  try {
    return state.getPluralFormat(locale, filteredOptions).format(value);
  } catch (e) {
    if (true) {
      console.error('[React Intl] Error formatting plural.\n' + e);
    }
  }

  return 'other';
}

function formatMessage(config, state) {
  var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var locale = config.locale,
      formats = config.formats,
      messages = config.messages,
      defaultLocale = config.defaultLocale,
      defaultFormats = config.defaultFormats;
  var id = messageDescriptor.id,
      defaultMessage = messageDescriptor.defaultMessage;

  // `id` is a required field of a Message Descriptor.

  __WEBPACK_IMPORTED_MODULE_5_invariant___default()(id, '[React Intl] An `id` must be provided to format a message.');

  var message = messages && messages[id];
  var hasValues = Object.keys(values).length > 0;

  // Avoid expensive message formatting for simple messages without values. In
  // development messages will always be formatted in case of missing values.
  if (!hasValues && "development" === 'production') {
    return message || defaultMessage || id;
  }

  var formattedMessage = void 0;

  if (message) {
    try {
      var formatter = state.getMessageFormat(message, locale, formats);

      formattedMessage = formatter.format(values);
    } catch (e) {
      if (true) {
        console.error('[React Intl] Error formatting message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : '') + ('\n' + e));
      }
    }
  } else {
    if (true) {
      // This prevents warnings from littering the console in development
      // when no `messages` are passed into the <IntlProvider> for the
      // default locale, and a default message is in the source.
      if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
        console.error('[React Intl] Missing message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : ''));
      }
    }
  }

  if (!formattedMessage && defaultMessage) {
    try {
      var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);

      formattedMessage = _formatter.format(values);
    } catch (e) {
      if (true) {
        console.error('[React Intl] Error formatting the default message for: "' + id + '"' + ('\n' + e));
      }
    }
  }

  if (!formattedMessage) {
    if (true) {
      console.error('[React Intl] Cannot format message: "' + id + '", ' + ('using message ' + (message || defaultMessage ? 'source' : 'id') + ' as fallback.'));
    }
  }

  return formattedMessage || message || defaultMessage || id;
}

function formatHTMLMessage(config, state, messageDescriptor) {
  var rawValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  // Process all the values before they are used when formatting the ICU
  // Message string. Since the formatted message might be injected via
  // `innerHTML`, all String-based values need to be HTML-escaped.
  var escapedValues = Object.keys(rawValues).reduce(function (escaped, name) {
    var value = rawValues[name];
    escaped[name] = typeof value === 'string' ? escape(value) : value;
    return escaped;
  }, {});

  return formatMessage(config, state, messageDescriptor, escapedValues);
}



var format = Object.freeze({
	formatDate: formatDate,
	formatTime: formatTime,
	formatRelative: formatRelative,
	formatNumber: formatNumber,
	formatPlural: formatPlural,
	formatMessage: formatMessage,
	formatHTMLMessage: formatHTMLMessage
});

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var intlConfigPropNames$1 = Object.keys(intlConfigPropTypes);
var intlFormatPropNames = Object.keys(intlFormatPropTypes);

// These are not a static property on the `IntlProvider` class so the intl
// config values can be inherited from an <IntlProvider> ancestor.
var defaultProps = {
  formats: {},
  messages: {},
  textComponent: 'span',

  defaultLocale: 'en',
  defaultFormats: {}
};

var IntlProvider = function (_Component) {
  inherits(IntlProvider, _Component);

  function IntlProvider(props) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, IntlProvider);

    var _this = possibleConstructorReturn(this, (IntlProvider.__proto__ || Object.getPrototypeOf(IntlProvider)).call(this, props, context));

    __WEBPACK_IMPORTED_MODULE_5_invariant___default()(typeof Intl !== 'undefined', '[React Intl] The `Intl` APIs must be available in the runtime, ' + 'and do not appear to be built-in. An `Intl` polyfill should be loaded.\n' + 'See: http://formatjs.io/guides/runtime-environments/');

    var intlContext = context.intl;

    // Used to stabilize time when performing an initial rendering so that
    // all relative times use the same reference "now" time.

    var initialNow = void 0;
    if (isFinite(props.initialNow)) {
      initialNow = Number(props.initialNow);
    } else {
      // When an `initialNow` isn't provided via `props`, look to see an
      // <IntlProvider> exists in the ancestry and call its `now()`
      // function to propagate its value for "now".
      initialNow = intlContext ? intlContext.now() : Date.now();
    }

    // Creating `Intl*` formatters is expensive. If there's a parent
    // `<IntlProvider>`, then its formatters will be used. Otherwise, this
    // memoize the `Intl*` constructors and cache them for the lifecycle of
    // this IntlProvider instance.

    var _ref = intlContext || {},
        _ref$formatters = _ref.formatters,
        formatters = _ref$formatters === undefined ? {
      getDateTimeFormat: __WEBPACK_IMPORTED_MODULE_6_intl_format_cache___default()(Intl.DateTimeFormat),
      getNumberFormat: __WEBPACK_IMPORTED_MODULE_6_intl_format_cache___default()(Intl.NumberFormat),
      getMessageFormat: __WEBPACK_IMPORTED_MODULE_6_intl_format_cache___default()(__WEBPACK_IMPORTED_MODULE_1_intl_messageformat___default.a),
      getRelativeFormat: __WEBPACK_IMPORTED_MODULE_6_intl_format_cache___default()(__WEBPACK_IMPORTED_MODULE_2_intl_relativeformat___default.a),
      getPluralFormat: __WEBPACK_IMPORTED_MODULE_6_intl_format_cache___default()(IntlPluralFormat)
    } : _ref$formatters;

    _this.state = _extends({}, formatters, {

      // Wrapper to provide stable "now" time for initial render.
      now: function now() {
        return _this._didDisplay ? Date.now() : initialNow;
      }
    });
    return _this;
  }

  createClass(IntlProvider, [{
    key: 'getConfig',
    value: function getConfig() {
      var intlContext = this.context.intl;

      // Build a whitelisted config object from `props`, defaults, and
      // `context.intl`, if an <IntlProvider> exists in the ancestry.

      var config = filterProps(this.props, intlConfigPropNames$1, intlContext);

      // Apply default props. This must be applied last after the props have
      // been resolved and inherited from any <IntlProvider> in the ancestry.
      // This matches how React resolves `defaultProps`.
      for (var propName in defaultProps) {
        if (config[propName] === undefined) {
          config[propName] = defaultProps[propName];
        }
      }

      if (!hasLocaleData(config.locale)) {
        var _config = config,
            locale = _config.locale,
            defaultLocale = _config.defaultLocale,
            defaultFormats = _config.defaultFormats;


        if (true) {
          console.error('[React Intl] Missing locale data for locale: "' + locale + '". ' + ('Using default locale: "' + defaultLocale + '" as fallback.'));
        }

        // Since there's no registered locale data for `locale`, this will
        // fallback to the `defaultLocale` to make sure things can render.
        // The `messages` are overridden to the `defaultProps` empty object
        // to maintain referential equality across re-renders. It's assumed
        // each <FormattedMessage> contains a `defaultMessage` prop.
        config = _extends({}, config, {
          locale: defaultLocale,
          formats: defaultFormats,
          messages: defaultProps.messages
        });
      }

      return config;
    }
  }, {
    key: 'getBoundFormatFns',
    value: function getBoundFormatFns(config, state) {
      return intlFormatPropNames.reduce(function (boundFormatFns, name) {
        boundFormatFns[name] = format[name].bind(null, config, state);
        return boundFormatFns;
      }, {});
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var config = this.getConfig();

      // Bind intl factories and current config to the format functions.
      var boundFormatFns = this.getBoundFormatFns(config, this.state);

      var _state = this.state,
          now = _state.now,
          formatters = objectWithoutProperties(_state, ['now']);


      return {
        intl: _extends({}, config, boundFormatFns, {
          formatters: formatters,
          now: now
        })
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._didDisplay = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react__["Children"].only(this.props.children);
    }
  }]);
  return IntlProvider;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

IntlProvider.displayName = 'IntlProvider';
IntlProvider.contextTypes = {
  intl: intlShape
};
IntlProvider.childContextTypes = {
  intl: intlShape.isRequired
};
 true ? IntlProvider.propTypes = _extends({}, intlConfigPropTypes, {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element.isRequired,
  initialNow: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedDate = function (_Component) {
  inherits(FormattedDate, _Component);

  function FormattedDate(props, context) {
    classCallCheck(this, FormattedDate);

    var _this = possibleConstructorReturn(this, (FormattedDate.__proto__ || Object.getPrototypeOf(FormattedDate)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedDate, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatDate = _context$intl.formatDate,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedDate = formatDate(value, this.props);

      if (typeof children === 'function') {
        return children(formattedDate);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedDate
      );
    }
  }]);
  return FormattedDate;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedDate.displayName = 'FormattedDate';
FormattedDate.contextTypes = {
  intl: intlShape
};
 true ? FormattedDate.propTypes = _extends({}, dateTimeFormatPropTypes, {
  value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any.isRequired,
  format: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedTime = function (_Component) {
  inherits(FormattedTime, _Component);

  function FormattedTime(props, context) {
    classCallCheck(this, FormattedTime);

    var _this = possibleConstructorReturn(this, (FormattedTime.__proto__ || Object.getPrototypeOf(FormattedTime)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedTime, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatTime = _context$intl.formatTime,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedTime = formatTime(value, this.props);

      if (typeof children === 'function') {
        return children(formattedTime);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedTime
      );
    }
  }]);
  return FormattedTime;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedTime.displayName = 'FormattedTime';
FormattedTime.contextTypes = {
  intl: intlShape
};
 true ? FormattedTime.propTypes = _extends({}, dateTimeFormatPropTypes, {
  value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any.isRequired,
  format: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var SECOND = 1000;
var MINUTE = 1000 * 60;
var HOUR = 1000 * 60 * 60;
var DAY = 1000 * 60 * 60 * 24;

// The maximum timer delay value is a 32-bit signed integer.
// See: https://mdn.io/setTimeout
var MAX_TIMER_DELAY = 2147483647;

function selectUnits(delta) {
  var absDelta = Math.abs(delta);

  if (absDelta < MINUTE) {
    return 'second';
  }

  if (absDelta < HOUR) {
    return 'minute';
  }

  if (absDelta < DAY) {
    return 'hour';
  }

  // The maximum scheduled delay will be measured in days since the maximum
  // timer delay is less than the number of milliseconds in 25 days.
  return 'day';
}

function getUnitDelay(units) {
  switch (units) {
    case 'second':
      return SECOND;
    case 'minute':
      return MINUTE;
    case 'hour':
      return HOUR;
    case 'day':
      return DAY;
    default:
      return MAX_TIMER_DELAY;
  }
}

function isSameDate(a, b) {
  if (a === b) {
    return true;
  }

  var aTime = new Date(a).getTime();
  var bTime = new Date(b).getTime();

  return isFinite(aTime) && isFinite(bTime) && aTime === bTime;
}

var FormattedRelative = function (_Component) {
  inherits(FormattedRelative, _Component);

  function FormattedRelative(props, context) {
    classCallCheck(this, FormattedRelative);

    var _this = possibleConstructorReturn(this, (FormattedRelative.__proto__ || Object.getPrototypeOf(FormattedRelative)).call(this, props, context));

    invariantIntlContext(context);

    var now = isFinite(props.initialNow) ? Number(props.initialNow) : context.intl.now();

    // `now` is stored as state so that `render()` remains a function of
    // props + state, instead of accessing `Date.now()` inside `render()`.
    _this.state = { now: now };
    return _this;
  }

  createClass(FormattedRelative, [{
    key: 'scheduleNextUpdate',
    value: function scheduleNextUpdate(props, state) {
      var _this2 = this;

      // Cancel and pending update because we're scheduling a new update.
      clearTimeout(this._timer);

      var value = props.value,
          units = props.units,
          updateInterval = props.updateInterval;

      var time = new Date(value).getTime();

      // If the `updateInterval` is falsy, including `0` or we don't have a
      // valid date, then auto updates have been turned off, so we bail and
      // skip scheduling an update.
      if (!updateInterval || !isFinite(time)) {
        return;
      }

      var delta = time - state.now;
      var unitDelay = getUnitDelay(units || selectUnits(delta));
      var unitRemainder = Math.abs(delta % unitDelay);

      // We want the largest possible timer delay which will still display
      // accurate information while reducing unnecessary re-renders. The delay
      // should be until the next "interesting" moment, like a tick from
      // "1 minute ago" to "2 minutes ago" when the delta is 120,000ms.
      var delay = delta < 0 ? Math.max(updateInterval, unitDelay - unitRemainder) : Math.max(updateInterval, unitRemainder);

      this._timer = setTimeout(function () {
        _this2.setState({ now: _this2.context.intl.now() });
      }, delay);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scheduleNextUpdate(this.props, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var nextValue = _ref.value;

      // When the `props.value` date changes, `state.now` needs to be updated,
      // and the next update can be rescheduled.
      if (!isSameDate(nextValue, this.props.value)) {
        this.setState({ now: this.context.intl.now() });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.scheduleNextUpdate(nextProps, nextState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatRelative = _context$intl.formatRelative,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedRelative = formatRelative(value, _extends({}, this.props, this.state));

      if (typeof children === 'function') {
        return children(formattedRelative);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedRelative
      );
    }
  }]);
  return FormattedRelative;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedRelative.displayName = 'FormattedRelative';
FormattedRelative.contextTypes = {
  intl: intlShape
};
FormattedRelative.defaultProps = {
  updateInterval: 1000 * 10
};
 true ? FormattedRelative.propTypes = _extends({}, relativeFormatPropTypes, {
  value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any.isRequired,
  format: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  updateInterval: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,
  initialNow: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedNumber = function (_Component) {
  inherits(FormattedNumber, _Component);

  function FormattedNumber(props, context) {
    classCallCheck(this, FormattedNumber);

    var _this = possibleConstructorReturn(this, (FormattedNumber.__proto__ || Object.getPrototypeOf(FormattedNumber)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedNumber, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatNumber = _context$intl.formatNumber,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          children = _props.children;


      var formattedNumber = formatNumber(value, this.props);

      if (typeof children === 'function') {
        return children(formattedNumber);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedNumber
      );
    }
  }]);
  return FormattedNumber;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedNumber.displayName = 'FormattedNumber';
FormattedNumber.contextTypes = {
  intl: intlShape
};
 true ? FormattedNumber.propTypes = _extends({}, numberFormatPropTypes, {
  value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any.isRequired,
  format: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedPlural = function (_Component) {
  inherits(FormattedPlural, _Component);

  function FormattedPlural(props, context) {
    classCallCheck(this, FormattedPlural);

    var _this = possibleConstructorReturn(this, (FormattedPlural.__proto__ || Object.getPrototypeOf(FormattedPlural)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedPlural, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatPlural = _context$intl.formatPlural,
          Text = _context$intl.textComponent;
      var _props = this.props,
          value = _props.value,
          other = _props.other,
          children = _props.children;


      var pluralCategory = formatPlural(value, this.props);
      var formattedPlural = this.props[pluralCategory] || other;

      if (typeof children === 'function') {
        return children(formattedPlural);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        Text,
        null,
        formattedPlural
      );
    }
  }]);
  return FormattedPlural;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedPlural.displayName = 'FormattedPlural';
FormattedPlural.contextTypes = {
  intl: intlShape
};
FormattedPlural.defaultProps = {
  style: 'cardinal'
};
 true ? FormattedPlural.propTypes = _extends({}, pluralFormatPropTypes, {
  value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any.isRequired,

  other: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node.isRequired,
  zero: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  one: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  two: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  few: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  many: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedMessage = function (_Component) {
  inherits(FormattedMessage, _Component);

  function FormattedMessage(props, context) {
    classCallCheck(this, FormattedMessage);

    var _this = possibleConstructorReturn(this, (FormattedMessage.__proto__ || Object.getPrototypeOf(FormattedMessage)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedMessage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var values = this.props.values;
      var nextValues = nextProps.values;


      if (!shallowEquals(nextValues, values)) {
        return true;
      }

      // Since `values` has already been checked, we know they're not
      // different, so the current `values` are carried over so the shallow
      // equals comparison on the other props isn't affected by the `values`.
      var nextPropsToCheck = _extends({}, nextProps, {
        values: values
      });

      for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        next[_key - 1] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatMessage = _context$intl.formatMessage,
          Text = _context$intl.textComponent;
      var _props = this.props,
          id = _props.id,
          description = _props.description,
          defaultMessage = _props.defaultMessage,
          values = _props.values,
          _props$tagName = _props.tagName,
          Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
          children = _props.children;


      var tokenDelimiter = void 0;
      var tokenizedValues = void 0;
      var elements = void 0;

      var hasValues = values && Object.keys(values).length > 0;
      if (hasValues) {
        // Creates a token with a random UID that should not be guessable or
        // conflict with other parts of the `message` string.
        var uid = Math.floor(Math.random() * 0x10000000000).toString(16);

        var generateToken = function () {
          var counter = 0;
          return function () {
            return 'ELEMENT-' + uid + '-' + (counter += 1);
          };
        }();

        // Splitting with a delimiter to support IE8. When using a regex
        // with a capture group IE8 does not include the capture group in
        // the resulting array.
        tokenDelimiter = '@__' + uid + '__@';
        tokenizedValues = {};
        elements = {};

        // Iterates over the `props` to keep track of any React Element
        // values so they can be represented by the `token` as a placeholder
        // when the `message` is formatted. This allows the formatted
        // message to then be broken-up into parts with references to the
        // React Elements inserted back in.
        Object.keys(values).forEach(function (name) {
          var value = values[name];

          if (Object(__WEBPACK_IMPORTED_MODULE_4_react__["isValidElement"])(value)) {
            var token = generateToken();
            tokenizedValues[name] = tokenDelimiter + token + tokenDelimiter;
            elements[token] = value;
          } else {
            tokenizedValues[name] = value;
          }
        });
      }

      var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
      var formattedMessage = formatMessage(descriptor, tokenizedValues || values);

      var nodes = void 0;

      var hasElements = elements && Object.keys(elements).length > 0;
      if (hasElements) {
        // Split the message into parts so the React Element values captured
        // above can be inserted back into the rendered message. This
        // approach allows messages to render with React Elements while
        // keeping React's virtual diffing working properly.
        nodes = formattedMessage.split(tokenDelimiter).filter(function (part) {
          return !!part;
        }).map(function (part) {
          return elements[part] || part;
        });
      } else {
        nodes = [formattedMessage];
      }

      if (typeof children === 'function') {
        return children.apply(undefined, toConsumableArray(nodes));
      }

      // Needs to use `createElement()` instead of JSX, otherwise React will
      // warn about a missing `key` prop with rich-text message formatting.
      return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"].apply(undefined, [Component$$1, null].concat(toConsumableArray(nodes)));
    }
  }]);
  return FormattedMessage;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedMessage.displayName = 'FormattedMessage';
FormattedMessage.contextTypes = {
  intl: intlShape
};
FormattedMessage.defaultProps = {
  values: {}
};
 true ? FormattedMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
  values: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  tagName: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

var FormattedHTMLMessage = function (_Component) {
  inherits(FormattedHTMLMessage, _Component);

  function FormattedHTMLMessage(props, context) {
    classCallCheck(this, FormattedHTMLMessage);

    var _this = possibleConstructorReturn(this, (FormattedHTMLMessage.__proto__ || Object.getPrototypeOf(FormattedHTMLMessage)).call(this, props, context));

    invariantIntlContext(context);
    return _this;
  }

  createClass(FormattedHTMLMessage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var values = this.props.values;
      var nextValues = nextProps.values;


      if (!shallowEquals(nextValues, values)) {
        return true;
      }

      // Since `values` has already been checked, we know they're not
      // different, so the current `values` are carried over so the shallow
      // equals comparison on the other props isn't affected by the `values`.
      var nextPropsToCheck = _extends({}, nextProps, {
        values: values
      });

      for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        next[_key - 1] = arguments[_key];
      }

      return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$intl = this.context.intl,
          formatHTMLMessage = _context$intl.formatHTMLMessage,
          Text = _context$intl.textComponent;
      var _props = this.props,
          id = _props.id,
          description = _props.description,
          defaultMessage = _props.defaultMessage,
          rawValues = _props.values,
          _props$tagName = _props.tagName,
          Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
          children = _props.children;


      var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
      var formattedHTMLMessage = formatHTMLMessage(descriptor, rawValues);

      if (typeof children === 'function') {
        return children(formattedHTMLMessage);
      }

      // Since the message presumably has HTML in it, we need to set
      // `innerHTML` in order for it to be rendered and not escaped by React.
      // To be safe, all string prop values were escaped when formatting the
      // message. It is assumed that the message is not UGC, and came from the
      // developer making it more like a template.
      //
      // Note: There's a perf impact of using this component since there's no
      // way for React to do its virtual DOM diffing.
      var html = { __html: formattedHTMLMessage };
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component$$1, { dangerouslySetInnerHTML: html });
    }
  }]);
  return FormattedHTMLMessage;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

FormattedHTMLMessage.displayName = 'FormattedHTMLMessage';
FormattedHTMLMessage.contextTypes = {
  intl: intlShape
};
FormattedHTMLMessage.defaultProps = {
  values: {}
};
 true ? FormattedHTMLMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
  values: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
  tagName: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
}) : void 0;

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

addLocaleData(defaultLocaleData);

/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

addLocaleData(__WEBPACK_IMPORTED_MODULE_0__locale_data_index_js___default.a);




/***/ }),

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
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(FormattedRelative, { value: Date.now(), __source: {
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
          css: '@import url(\'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700\');.jsx-1513795630{font-family:\'IBM Plex Sans\',sans-serif;}h1.jsx-1513795630{font-size:4em;font-weight:300;margin:1.4em 0 0.4em 0;display:block;border-radius:4px;}h2.jsx-1513795630{font-size:2em;font-weight:300;margin:3.4em 0 1em 0;}span.glyphClass.jsx-1513795630{cursor:pointer;margin-right:2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUlzQixBQUU2RixBQUN4QyxBQUd4QixBQVFBLEFBTUMsY0FiQyxBQVFBLENBTUMsZUFiTSxBQVFGLEVBTXZCLE9BQ0YsWUFORSxFQVJnQixjQUNJLGtCQUNwQiIsImZpbGUiOiJwYWdlcy91c2VyLmpzIiwic291cmNlUm9vdCI6Ii9vcHQvd2ViIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYWJvdXQuanNcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyBJbnRsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBSb3csIENvbCwgTW9kYWwsIEJ1dHRvbiwgQmFkZ2UsIEFsZXJ0LCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBDb250cm9sTGFiZWwsIFRhYmxlLCBQYW5lbCwgR2x5cGhpY29uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTsgICAgIFxuICAgICAgdGhpcy5hZGRUd2VldCA9IHRoaXMuYWRkVHdlZXQuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHVzZXJJZDogcHJvcHMudXJsLnF1ZXJ5LnVzZXJJZCxcbiAgICAgICAgdXNlcjogZmFsc2UsXG4gICAgICAgIHR4UGVuZGluZzogZmFsc2UsXG4gICAgICAgIHR3ZWV0czoge1xuICAgICAgICAgIGxpc3Q6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo3NjEwL2FwaS92MS4wL3VzZXJzLyR7dGhpcy5zdGF0ZS51c2VySWR9YCwge1xuICAgICAgICB9KSxcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjc2MTAvYXBpL3YxLjAvdHdlZXRzLyR7dGhpcy5zdGF0ZS51c2VySWR9YCwge1xuICAgICAgICB9KVxuICAgICAgXSlcbiAgICAgIC50aGVuKGF4aW9zLnNwcmVhZCgodXNlcnNSZXMsIHR3ZWV0c1JlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndXNlcnNSZXMnLCB1c2Vyc1Jlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0d2VldHNSZXMnLCB0d2VldHNSZXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcjogdXNlcnNSZXMuZGF0YSxcbiAgICAgICAgICB0d2VldHM6IHtcbiAgICAgICAgICAgIGxpc3Q6IHR3ZWV0c1Jlcy5zdGF0dXMgPT09IDIwNCA/IFtdIDogdHdlZXRzUmVzLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIH0pKTtcbiAgICB9XG4gICAgXG4gICAgYWRkVHdlZXQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHhQZW5kaW5nOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IHJlcSA9IGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6NzYxMC9hcGkvdjEuMC90d2VldHMnLCB7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMuc3RhdGUubWVzc2FnZSxcbiAgICAgICAgdXNlcklkOiB0aGlzLnN0YXRlLnVzZXJJZCxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBhcnIgPSB0aGlzLnN0YXRlLnR3ZWV0cy5saXN0ID09PSBmYWxzZSAmJiB0aGlzLnN0YXRlLnR3ZWV0cy5sZW5ndGggPT09IDAgPyBcbiAgICAgICAgICAgIFtyZXNwb25zZS5kYXRhXSA6IFtyZXNwb25zZS5kYXRhXS5jb25jYXQodGhpcy5zdGF0ZS50d2VldHMubGlzdCk7XG4gICAgICAgICAgXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0d2VldHM6IHtcbiAgICAgICAgICAgICAgbGlzdDogYXJyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICB0eFBlbmRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIGxnPXs0fT5cbiAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnVzZXIgPT09IGZhbHNlID8gJy0nIDogdGhpcy5zdGF0ZS51c2VyLnVzZXJOYW1lfTwvaDE+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbGc9ezh9PlxuICAgICAgICAgICAgICA8aDI+VHdlZXRzPC9oMj5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjb250cm9sSWQ9XCJmb3JtSW5saW5lTmFtZVwiPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIiBcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbnl0aGluZyB0byBzYXk/XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICBic1N0eWxlPVwicHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkVHdlZXR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUudHhQZW5kaW5nfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkIHJlY29yZFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnR3ZWV0cy5saXN0ID09PSBmYWxzZSA/IG51bGwgOiBcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudHdlZXRzLmxpc3QubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICA8QWxlcnQga2V5PXtgdHdlZXRzX25vX2NvbnRldG50YH0+XG4gICAgICAgICAgICAgICAgICAgICAgTm8gcmVjb3Jkc1xuICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50d2VldHMubGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFBhbmVsIGtleT17YHR3ZWV0XyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWwuSGVhZGluZz48Rm9ybWF0dGVkUmVsYXRpdmUgdmFsdWU9e0RhdGUubm93KCl9IC8+PC9QYW5lbC5IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsLkJvZHk+e2l0ZW0ubWVzc2FnZX08L1BhbmVsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydnbHlwaENsYXNzJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdseXBoaWNvbiBnbHlwaD1cImhlYXJ0LWVtcHR5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydnbHlwaENsYXNzJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdseXBoaWNvbiBnbHlwaD1cInJldHdlZXRcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzVweCd9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZT4yPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1JQk0rUGxleCtTYW5zOjMwMCw0MDAsNzAwJyk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDEuNGVtIDAgMC40ZW0gMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAzLjRlbSAwIDFlbSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuLmdseXBoQ2xhc3Mge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApXG4gICAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=pages/user.js */'
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
//# sourceMappingURL=3.5efa0a04633ab4a3980e.hot-update.js.map