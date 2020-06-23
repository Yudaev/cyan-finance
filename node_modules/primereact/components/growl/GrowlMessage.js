"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrowlMessage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GrowlMessage = /*#__PURE__*/function (_Component) {
  _inherits(GrowlMessage, _Component);

  var _super = _createSuper(GrowlMessage);

  function GrowlMessage(props) {
    var _this;

    _classCallCheck(this, GrowlMessage);

    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GrowlMessage, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.message.sticky) {
        this.timeout = setTimeout(function () {
          _this2.onClose(null);
        }, this.props.message.life || 3000);
      }
    }
  }, {
    key: "onClose",
    value: function onClose() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      if (this.props.onClose) {
        this.props.onClose(this.props.message);
      }
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      if (this.props.onClick && !(_DomHandler.default.hasClass(event.target, 'p-growl-icon-close') || _DomHandler.default.hasClass(event.target, 'p-growl-icon-close-icon'))) {
        this.props.onClick(this.props.message);
      }
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      if (this.props.message.closable !== false) {
        return /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          className: "p-growl-icon-close p-link",
          onClick: this.onClose
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "p-growl-icon-close-icon pi pi-times"
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var className = (0, _classnames.default)('p-growl-item-container p-highlight', {
        'p-growl-message-info': this.props.message.severity === 'info',
        'p-growl-message-warn': this.props.message.severity === 'warn',
        'p-growl-message-error': this.props.message.severity === 'error',
        'p-growl-message-success': this.props.message.severity === 'success'
      });
      var iconClassName = (0, _classnames.default)('p-growl-image pi', {
        'pi-info-circle': this.props.message.severity === 'info',
        'pi-exclamation-triangle': this.props.message.severity === 'warn',
        'pi-times': this.props.message.severity === 'error',
        'pi-check': this.props.message.severity === 'success'
      });
      var closeIcon = this.renderCloseIcon();
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(el) {
          _this3.element = el;
        },
        className: className,
        "aria-live": "polite",
        onClick: this.onClick
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "p-growl-item",
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, closeIcon, /*#__PURE__*/_react.default.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "p-growl-message"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "p-growl-title"
      }, this.props.message.summary), this.props.message.detail && /*#__PURE__*/_react.default.createElement("div", {
        className: "p-growl-details"
      }, this.props.message.detail))));
    }
  }]);

  return GrowlMessage;
}(_react.Component);

exports.GrowlMessage = GrowlMessage;

_defineProperty(GrowlMessage, "defaultProps", {
  message: null,
  onClose: null,
  onClick: null
});

_defineProperty(GrowlMessage, "propTypes", {
  message: _propTypes.default.object,
  onClose: _propTypes.default.func,
  onClick: _propTypes.default.func
});