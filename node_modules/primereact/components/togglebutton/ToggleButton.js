"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

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

var ToggleButton = /*#__PURE__*/function (_Component) {
  _inherits(ToggleButton, _Component);

  var _super = _createSuper(ToggleButton);

  function ToggleButton(props) {
    var _this;

    _classCallCheck(this, ToggleButton);

    _this = _super.call(this, props);
    _this.state = {};
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ToggleButton, [{
    key: "toggle",
    value: function toggle(e) {
      if (!this.props.disabled && this.props.onChange) {
        this.props.onChange({
          originalEvent: e,
          value: !this.props.checked,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: !this.props.checked
          }
        });
        this.input.focus();
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      this.setState({
        focused: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      this.setState({
        focused: false
      });

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter') {
        this.toggle(event);
        event.preventDefault();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _Tooltip.default({
        target: this.container,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0, _classnames.default)('p-button p-togglebutton p-component', this.props.className, {
        'p-button-text-icon-left': this.props.onIcon && this.props.offIcon,
        'p-button-text-only': !this.props.onIcon && !this.props.offIcon && (this.props.onLabel || this.props.offLabel),
        'p-highlight': this.props.checked,
        'p-disabled': this.props.disabled,
        'p-focus': this.state.focused
      }),
          iconClassName = null;

      if (this.props.onIcon || this.props.offIcon) {
        iconClassName = (0, _classnames.default)('p-c', this.props.checked ? this.props.onIcon : this.props.offIcon, {
          'p-button-icon-only': this.props.onIcon && this.props.offIcon && (!this.props.onLabel || !this.props.offLabel),
          'p-button-icon-left': this.props.onIcon && this.props.offIcon
        });
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(el) {
          return _this2.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style,
        onClick: this.toggle
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "p-hidden-accessible"
      }, /*#__PURE__*/_react.default.createElement("input", {
        ref: function ref(el) {
          return _this2.input = el;
        },
        type: "checkbox",
        onFocus: this.onInputFocus,
        onBlur: this.onInputBlur,
        onKeyDown: this.onKeyDown,
        tabIndex: this.props.tabIndex,
        role: "button",
        "aria-pressed": this.props.checked,
        "aria-labelledby": this.props.ariaLabelledBy,
        disabled: this.props.disabled
      })), this.props.onIcon && this.props.offIcon && /*#__PURE__*/_react.default.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "p-button-text p-unselectable-text"
      }, this.props.checked ? this.props.onLabel : this.props.offLabel));
    }
  }]);

  return ToggleButton;
}(_react.Component);

exports.ToggleButton = ToggleButton;

_defineProperty(ToggleButton, "defaultProps", {
  id: null,
  onIcon: null,
  offIcon: null,
  onLabel: 'Yes',
  offLabel: 'No',
  style: null,
  className: null,
  checked: false,
  tabIndex: 0,
  tooltip: null,
  tooltipOptions: null,
  ariaLabelledBy: null,
  onChange: null,
  onFocus: null,
  onBlur: null
});

_defineProperty(ToggleButton, "propTypes", {
  id: _propTypes.default.string,
  onIcon: _propTypes.default.string,
  offIcon: _propTypes.default.string,
  onLabel: _propTypes.default.string,
  offLabel: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  checked: _propTypes.default.bool,
  tabIndex: _propTypes.default.number,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  ariaLabelledBy: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func
});