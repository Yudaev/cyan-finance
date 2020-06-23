"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _InputText = require("../inputtext/InputText");

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

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

var Spinner = /*#__PURE__*/function (_Component) {
  _inherits(Spinner, _Component);

  var _super = _createSuper(Spinner);

  function Spinner(props) {
    var _this;

    _classCallCheck(this, Spinner);

    _this = _super.call(this, props);

    if (_this.props.value && _this.props.value.toString().indexOf('.') > 0) {
      _this.precision = _this.props.value.toString().split(/[.]/)[1].length;
    } else if (_this.props.step % 1 !== 0) {
      // If step is not an integer then extract the length of the decimal part
      _this.precision = _this.props.step.toString().split(/[,]|[.]/)[1].length;
    }

    if (_this.props.formatInput) {
      _this.localeDecimalSeparator = 1.1.toLocaleString().substring(1, 2);
      _this.localeThousandSeparator = 1000 .toLocaleString().substring(1, 2);
      _this.thousandRegExp = new RegExp("[".concat(_this.props.thousandSeparator || _this.localeThousandSeparator, "]"), 'gim');

      if (_this.props.decimalSeparator && _this.props.thousandSeparator && _this.props.decimalSeparator === _this.props.thousandSeparator) {
        console.warn("thousandSeparator and decimalSeparator cannot have the same value.");
      }
    }

    _this.formatValue(_this.props.value);

    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onUpButtonMouseLeave = _this.onUpButtonMouseLeave.bind(_assertThisInitialized(_this));
    _this.onUpButtonMouseDown = _this.onUpButtonMouseDown.bind(_assertThisInitialized(_this));
    _this.onUpButtonMouseUp = _this.onUpButtonMouseUp.bind(_assertThisInitialized(_this));
    _this.onUpButtonKeyDown = _this.onUpButtonKeyDown.bind(_assertThisInitialized(_this));
    _this.onUpButtonKeyUp = _this.onUpButtonKeyUp.bind(_assertThisInitialized(_this));
    _this.onDownButtonMouseLeave = _this.onDownButtonMouseLeave.bind(_assertThisInitialized(_this));
    _this.onDownButtonMouseDown = _this.onDownButtonMouseDown.bind(_assertThisInitialized(_this));
    _this.onDownButtonMouseUp = _this.onDownButtonMouseUp.bind(_assertThisInitialized(_this));
    _this.onDownButtonKeyDown = _this.onDownButtonKeyDown.bind(_assertThisInitialized(_this));
    _this.onDownButtonKeyUp = _this.onDownButtonKeyUp.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Spinner, [{
    key: "repeat",
    value: function repeat(event, interval, dir) {
      var _this2 = this;

      var i = interval || 500;
      this.clearTimer();
      this.timer = setTimeout(function () {
        _this2.repeat(event, 40, dir);
      }, i);
      this.spin(event, dir);
    }
  }, {
    key: "spin",
    value: function spin(event, dir) {
      var step = this.props.step * dir;
      var currentValue;
      var newValue;
      if (this.props.value) currentValue = typeof this.props.value === 'string' ? this.parseValue(this.props.value) : this.props.value;else currentValue = 0;
      if (this.precision) newValue = parseFloat(this.toFixed(currentValue + step, this.precision));else newValue = currentValue + step;

      if (this.props.maxlength !== null && this.props.value.toString().length > this.props.maxlength) {
        newValue = currentValue;
      }

      if (this.props.min !== null && newValue < this.props.min) {
        newValue = this.props.min;
      }

      if (this.props.max !== null && newValue > this.props.max) {
        newValue = this.props.max;
      }

      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: newValue,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: newValue
          }
        });
      }
    }
  }, {
    key: "toFixed",
    value: function toFixed(value, precision) {
      var power = Math.pow(10, precision || 0);
      return String(Math.round(value * power) / power);
    }
  }, {
    key: "onUpButtonMouseDown",
    value: function onUpButtonMouseDown(event) {
      if (!this.props.disabled) {
        this.inputEl.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
      }
    }
  }, {
    key: "onUpButtonMouseUp",
    value: function onUpButtonMouseUp(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonMouseLeave",
    value: function onUpButtonMouseLeave(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonKeyUp",
    value: function onUpButtonKeyUp(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonKeyDown",
    value: function onUpButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, 1);
      }
    }
  }, {
    key: "onDownButtonMouseDown",
    value: function onDownButtonMouseDown(event, focusInput) {
      if (!this.props.disabled) {
        this.inputEl.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
      }
    }
  }, {
    key: "onDownButtonMouseUp",
    value: function onDownButtonMouseUp(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonMouseLeave",
    value: function onDownButtonMouseLeave(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonKeyUp",
    value: function onDownButtonKeyUp(event) {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonKeyDown",
    value: function onDownButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, -1);
      }
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      if (event.which === 38) {
        this.spin(event, 1);
        event.preventDefault();
      } else if (event.which === 40) {
        this.spin(event, -1);
        event.preventDefault();
      }
    }
  }, {
    key: "parseValue",
    value: function parseValue(val) {
      var value = val.trim();

      if (val === '') {
        value = this.props.min != null ? this.props.min : null;
      } else {
        if (this.props.formatInput) {
          val = val.replace(this.thousandRegExp, '');
        }

        if (this.precision) {
          val = this.props.formatInput ? val.replace(this.props.decimalSeparator || this.localeDecimalSeparator, '.') : val.replace(',', '.');
          value = parseFloat(val);
        } else {
          value = parseInt(val, 10);
        }

        if (!isNaN(value)) {
          if (this.props.max !== null && value > this.props.max) {
            value = this.props.max;
          }

          if (this.props.min !== null && value < this.props.min) {
            value = this.props.min;
          }
        } else {
          value = null;
        }
      }

      return value;
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      _DomHandler.default.addClass(this.element, 'p-inputwrapper-focus');
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event) {
      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: event.target.value,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: event.target.value
          }
        });
      }
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      _DomHandler.default.removeClass(this.element, 'p-inputwrapper-focus');

      if (this.props.onChange) {
        var parsedValue = this.parseValue(event.target.value);
        this.props.onChange({
          originalEvent: event,
          value: parsedValue,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: parsedValue
          }
        });
      }

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: "formatValue",
    value: function formatValue(value) {
      if (value != null) {
        if (this.props.formatInput) {
          value = value.toLocaleString(undefined, {
            maximumFractionDigits: 20
          });

          if (this.props.decimalSeparator && this.props.thousandSeparator) {
            value = value.split(this.localeDecimalSeparator);

            if (this.precision && value[1]) {
              value[1] = (this.props.decimalSeparator || this.localeDecimalSeparator) + value[1];
            }

            if (this.props.thousandSeparator && value[0].length > 3) {
              value[0] = value[0].replace(new RegExp("[".concat(this.localeThousandSeparator, "]"), 'gim'), this.props.thousandSeparator);
            }

            value = value.join('');
          }
        }

        this.formattedValue = value.toString();
      }
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
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
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.formatValue(nextProps.value);
      }

      return true;
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
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "renderInputElement",
    value: function renderInputElement() {
      var _this3 = this;

      var className = (0, _classnames.default)('p-spinner-input', this.props.inputClassName);
      return /*#__PURE__*/_react.default.createElement(_InputText.InputText, {
        ref: function ref(el) {
          return _this3.inputEl = _reactDom.default.findDOMNode(el);
        },
        id: this.props.inputId,
        style: this.props.inputStyle,
        className: className,
        value: this.formattedValue || '',
        type: "text",
        size: this.props.size,
        tabIndex: this.props.tabIndex,
        maxLength: this.props.maxlength,
        disabled: this.props.disabled,
        required: this.props.required,
        pattern: this.props.pattern,
        placeholder: this.props.placeholder,
        readOnly: this.props.readonly,
        name: this.props.name,
        onKeyDown: this.onInputKeyDown,
        onBlur: this.onInputBlur,
        onChange: this.onInputChange,
        onFocus: this.onInputFocus,
        "aria-valuemin": this.props.min,
        "aria-valuemax": this.props.max,
        "aria-valuenow": this.formattedValue || '',
        "aria-labelledby": this.props.ariaLabelledBy
      });
    }
  }, {
    key: "renderUpButton",
    value: function renderUpButton() {
      var className = (0, _classnames.default)("p-spinner-button p-spinner-button-up p-button p-component", {
        'p-disabled': this.props.disabled
      });
      return /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: className,
        onMouseLeave: this.onUpButtonMouseLeave,
        onMouseDown: this.onUpButtonMouseDown,
        onMouseUp: this.onUpButtonMouseUp,
        onKeyDown: this.onUpButtonKeyDown,
        onKeyUp: this.onUpButtonKeyUp,
        disabled: this.props.disabled,
        tabIndex: this.props.tabIndex
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "p-spinner-button-icon pi pi-caret-up"
      }));
    }
  }, {
    key: "renderDownButton",
    value: function renderDownButton() {
      var className = (0, _classnames.default)("p-spinner-button p-spinner-button-down p-button p-component", {
        'p-disabled': this.props.disabled
      });
      return /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: className,
        onMouseLeave: this.onDownButtonMouseLeave,
        onMouseDown: this.onDownButtonMouseDown,
        onMouseUp: this.onDownButtonMouseUp,
        onKeyDown: this.onDownButtonKeyDown,
        onKeyUp: this.onDownButtonKeyUp,
        disabled: this.props.disabled,
        tabIndex: this.props.tabIndex
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "p-spinner-button-icon pi pi-caret-down"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var className = (0, _classnames.default)("p-spinner p-component", this.props.className, {
        'p-inputwrapper-filled': this.props.value != null
      });
      var inputElement = this.renderInputElement();
      var upButton = this.renderUpButton();
      var downButton = this.renderDownButton();
      return /*#__PURE__*/_react.default.createElement("span", {
        ref: function ref(el) {
          return _this4.element = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, inputElement, upButton, downButton);
    }
  }]);

  return Spinner;
}(_react.Component);

exports.Spinner = Spinner;

_defineProperty(Spinner, "defaultProps", {
  id: null,
  value: null,
  name: null,
  step: 1,
  min: null,
  max: null,
  formatInput: false,
  decimalSeparator: null,
  thousandSeparator: null,
  disabled: false,
  required: false,
  tabIndex: null,
  pattern: null,
  placeholder: null,
  readonly: false,
  maxlength: null,
  size: null,
  style: null,
  className: null,
  inputId: null,
  inputStyle: null,
  inputClassName: null,
  tooltip: null,
  tooltipOptions: null,
  ariaLabelledBy: null,
  onChange: null,
  onBlur: null
});

_defineProperty(Spinner, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.any,
  name: _propTypes.default.string,
  step: _propTypes.default.number,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  formatInput: _propTypes.default.bool,
  decimalSeparator: _propTypes.default.string,
  thousandSeparator: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  tabIndex: _propTypes.default.number,
  pattern: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readonly: _propTypes.default.bool,
  maxlength: _propTypes.default.number,
  size: _propTypes.default.number,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  inputId: _propTypes.default.string,
  inputStyle: _propTypes.default.object,
  inputClassName: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  ariaLabelledBy: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func
});