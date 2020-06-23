"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputNumber = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _InputText = require("../inputtext/InputText");

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var InputNumber = /*#__PURE__*/function (_Component) {
  _inherits(InputNumber, _Component);

  var _super = _createSuper(InputNumber);

  function InputNumber(props) {
    var _this;

    _classCallCheck(this, InputNumber);

    _this = _super.call(this, props);

    _this.constructParser();

    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onInputKeyPress = _this.onInputKeyPress.bind(_assertThisInitialized(_this));
    _this.onInputClick = _this.onInputClick.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onPaste = _this.onPaste.bind(_assertThisInitialized(_this));
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

  _createClass(InputNumber, [{
    key: "getOptions",
    value: function getOptions() {
      return {
        localeMatcher: this.props.localeMatcher,
        style: this.props.mode,
        currency: this.props.currency,
        currencyDisplay: this.props.currencyDisplay,
        useGrouping: this.props.useGrouping,
        minimumFractionDigits: this.props.minFractionDigits,
        maximumFractionDigits: this.props.maxFractionDigits
      };
    }
  }, {
    key: "constructParser",
    value: function constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.props.locale, this.getOptions());

      var numerals = _toConsumableArray(new Intl.NumberFormat(this.props.locale, {
        useGrouping: false
      }).format(9876543210)).reverse();

      var index = new Map(numerals.map(function (d, i) {
        return [d, i];
      }));
      this._numeral = new RegExp("[".concat(numerals.join(''), "]"), 'g');
      this._decimal = this.getDecimalExpression();
      this._group = this.getGroupingExpression();
      this._minusSign = this.getMinusSignExpression();
      this._currency = this.getCurrencyExpression();
      this._suffix = new RegExp("[".concat(this.props.suffix || '', "]"), 'g');
      this._prefix = new RegExp("[".concat(this.props.prefix || '', "]"), 'g');

      this._index = function (d) {
        return index.get(d);
      };
    }
  }, {
    key: "getDecimalExpression",
    value: function getDecimalExpression() {
      var formatter = new Intl.NumberFormat(this.props.locale, {
        useGrouping: false
      });
      return new RegExp("[".concat(formatter.format(1.1).trim().replace(this._numeral, ''), "]"), 'g');
    }
  }, {
    key: "getGroupingExpression",
    value: function getGroupingExpression() {
      var formatter = new Intl.NumberFormat(this.props.locale, {
        useGrouping: true
      });
      return new RegExp("[".concat(formatter.format(1000).trim().replace(this._numeral, ''), "]"), 'g');
    }
  }, {
    key: "getMinusSignExpression",
    value: function getMinusSignExpression() {
      var formatter = new Intl.NumberFormat(this.props.locale, {
        useGrouping: false
      });
      return new RegExp("[".concat(formatter.format(-1).trim().replace(this._numeral, ''), "]"), 'g');
    }
  }, {
    key: "getCurrencyExpression",
    value: function getCurrencyExpression() {
      if (this.props.currency) {
        var formatter = new Intl.NumberFormat(this.props.locale, {
          style: 'currency',
          currency: this.props.currency,
          currencyDisplay: this.props.currencyDisplay
        });
        return new RegExp("[".concat(formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._decimal, '').replace(this._group, ''), "]"), 'g');
      } else {
        return new RegExp("[]", 'g');
      }
    }
  }, {
    key: "formatValue",
    value: function formatValue(value) {
      if (value != null) {
        if (this.props.format) {
          var formatter = new Intl.NumberFormat(this.props.locale, this.getOptions());
          var formattedValue = formatter.format(value);

          if (this.props.prefix) {
            formattedValue = this.props.prefix + formattedValue;
          }

          if (this.props.suffix) {
            formattedValue = formattedValue + this.props.suffix;
          }

          return formattedValue;
        }

        return value;
      }

      return '';
    }
  }, {
    key: "parseValue",
    value: function parseValue(text) {
      var filteredText = text.trim().replace(/\s/g, '').replace(this._currency, '').replace(this._group, '').replace(this._suffix, '').replace(this._prefix, '').replace(this._minusSign, '-').replace(this._decimal, '.').replace(this._numeral, this._index);

      if (filteredText) {
        var parsedValue = +filteredText;
        return isNaN(parsedValue) ? null : parsedValue;
      } else {
        return null;
      }
    }
  }, {
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
      var currentValue = this.props.value || 0;
      var newValue = currentValue + step;

      if (this.props.min !== null && newValue < this.props.min) {
        newValue = this.props.min;
      }

      if (this.props.max !== null && newValue > this.props.max) {
        newValue = this.props.max;
      }

      this.updateInput(newValue, 'spin');
      this.updateModel(event, newValue);
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
    value: function onUpButtonMouseUp() {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonMouseLeave",
    value: function onUpButtonMouseLeave() {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonKeyUp",
    value: function onUpButtonKeyUp() {
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
    value: function onDownButtonMouseUp() {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonMouseLeave",
    value: function onDownButtonMouseLeave() {
      if (!this.props.disabled) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonKeyUp",
    value: function onDownButtonKeyUp() {
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
    key: "onInput",
    value: function onInput(event) {
      if (this.isSpecialChar) {
        event.target.value = this.lastValue;
      }

      this.isSpecialChar = false;
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      this.lastValue = event.target.value;

      if (event.shiftKey || event.altKey) {
        this.isSpecialChar = true;
        return;
      }

      var selectionStart = event.target.selectionStart;
      var selectionEnd = event.target.selectionEnd;
      var inputValue = event.target.value;

      if (event.altKey) {
        event.preventDefault();
      }

      switch (event.which) {
        //up
        case 38:
          this.spin(event, 1);
          event.preventDefault();
          break;
        //down

        case 40:
          this.spin(event, -1);
          event.preventDefault();
          break;
        //left

        case 37:
          var prevChar = inputValue.charAt(selectionStart - 1);

          if (!this.isNumeralChar(prevChar)) {
            event.preventDefault();
          }

          break;
        //right

        case 39:
          var currentChar = inputValue.charAt(selectionStart);

          if (!this.isNumeralChar(currentChar)) {
            event.preventDefault();
          }

          break;
        //backspace

        case 8:
          event.preventDefault();
          var newValueStr = null;

          if (selectionStart === selectionEnd) {
            var deleteChar = inputValue.charAt(selectionStart - 1);
            var decimalCharIndex = inputValue.search(this._decimal);
            this._decimal.lastIndex = 0;

            if (this.isNumeralChar(deleteChar)) {
              if (this._group.test(deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
              } else if (this._decimal.test(deleteChar)) {
                this._decimal.lastIndex = 0;
                this.inputEl.setSelectionRange(selectionStart - 1, selectionStart - 1);
              } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            }

            if (newValueStr != null) {
              this.updateValue(event, newValueStr, 'delete-single');
            }
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, 'delete-range');
          }

          break;

        default:
          break;
      }
    }
  }, {
    key: "onInputKeyPress",
    value: function onInputKeyPress(event) {
      event.preventDefault();
      var code = event.which || event.keyCode;
      var char = String.fromCharCode(code);

      if (48 <= code && code <= 57 || this.isMinusSign(char)) {
        this.insert(event, char);
      }
    }
  }, {
    key: "onPaste",
    value: function onPaste(event) {
      event.preventDefault();
      var data = (event.clipboardData || window['clipboardData']).getData('Text');

      if (data) {
        var filteredData = this.parseValue(data);

        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    }
  }, {
    key: "isMinusSign",
    value: function isMinusSign(char) {
      if (this._minusSign.test(char)) {
        this._minusSign.lastIndex = 0;
        return true;
      }

      return false;
    }
  }, {
    key: "insert",
    value: function insert(event, text) {
      var selectionStart = this.inputEl.selectionStart;
      var selectionEnd = this.inputEl.selectionEnd;
      var inputValue = this.inputEl.value.trim();
      var maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
      var newValueStr;
      var decimalCharIndex = inputValue.search(this._decimal);
      this._decimal.lastIndex = 0;

      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length);
          this.updateValue(event, newValueStr, 'insert');
        }
      } else {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, 'insert');
      }
    }
  }, {
    key: "insertText",
    value: function insertText(value, text, start, end) {
      var newValueStr;
      if (end - start === value.length) newValueStr = text;else if (start === 0) newValueStr = text + value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start) + text;else newValueStr = value.slice(0, start) + text + value.slice(end);
      return newValueStr;
    }
  }, {
    key: "deleteRange",
    value: function deleteRange(value, start, end) {
      var newValueStr;
      if (end - start === value.length) newValueStr = '';else if (start === 0) newValueStr = value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start);else newValueStr = value.slice(0, start) + value.slice(end);
      return newValueStr;
    }
  }, {
    key: "initCursor",
    value: function initCursor() {
      var selectionStart = this.inputEl.selectionStart;
      var inputValue = this.inputEl.value;
      var valueLength = inputValue.length;
      var index = null;
      var char = inputValue.charAt(selectionStart);

      if (this.isNumeralChar(char)) {
        return;
      } //left


      var i = selectionStart - 1;

      while (i >= 0) {
        char = inputValue.charAt(i);

        if (this.isNumeralChar(char)) {
          index = i;
          break;
        } else {
          i--;
        }
      }

      if (index !== null) {
        this.inputEl.setSelectionRange(index + 1, index + 1);
      } else {
        i = selectionStart + 1;

        while (i < valueLength) {
          char = inputValue.charAt(i);

          if (this.isNumeralChar(char)) {
            index = i;
            break;
          } else {
            i++;
          }
        }

        if (index !== null) {
          this.inputEl.setSelectionRange(index, index);
        }
      }
    }
  }, {
    key: "onInputClick",
    value: function onInputClick() {
      this.initCursor();
    }
  }, {
    key: "isNumeralChar",
    value: function isNumeralChar(char) {
      if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
        this.resetRegex();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "resetRegex",
    value: function resetRegex() {
      this._numeral.lastIndex = 0;
      this._decimal.lastIndex = 0;
      this._group.lastIndex = 0;
      this._minusSign.lastIndex = 0;
    }
  }, {
    key: "updateValue",
    value: function updateValue(event, valueStr, operation) {
      if (valueStr != null) {
        var newValue = this.parseValue(valueStr);
        var valid = this.isWithinRange(newValue);

        if (valid) {
          this.updateInput(newValue, operation);
          this.updateModel(event, newValue);
        }
      }
    }
  }, {
    key: "isWithinRange",
    value: function isWithinRange(value) {
      return value == null || (this.props.min == null || value > this.props.min) && (this.props.max == null || value < this.props.max);
    }
  }, {
    key: "updateInput",
    value: function updateInput(value, operation) {
      var currentLength = this.inputEl.value.length;

      if (currentLength === 0) {
        this.inputEl.value = this.formatValue(value);
        this.inputEl.setSelectionRange(0, 0);
        this.initCursor();
        this.inputEl.setSelectionRange(this.inputEl.selectionStart + 1, this.inputEl.selectionStart + 1);
      } else {
        var selectionStart = this.inputEl.selectionEnd;
        var selectionEnd = this.inputEl.selectionEnd;
        this.inputEl.value = this.formatValue(value);
        var newLength = this.inputEl.value.length;

        if (newLength === currentLength) {
          if (operation === 'insert') this.inputEl.setSelectionRange(selectionEnd + 1, selectionEnd + 1);else if (operation === 'delete-single') this.inputEl.setSelectionRange(selectionEnd - 1, selectionEnd - 1);else if (operation === 'delete-range') this.inputEl.setSelectionRange(selectionStart, selectionStart);else if (operation === 'spin') this.inputEl.setSelectionRange(selectionStart, selectionEnd);
        } else {
          selectionEnd = selectionEnd + (newLength - currentLength);
          this.inputEl.setSelectionRange(selectionEnd, selectionEnd);
        }
      }

      this.inputEl.setAttribute('aria-valuenow', value);
    }
  }, {
    key: "updateModel",
    value: function updateModel(event, value) {
      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: value,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: value
          }
        });
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      this.focus = true;

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      this.focus = false;

      if (this.props.onBlur) {
        this.props.onBlur(event);
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
    key: "isStacked",
    value: function isStacked() {
      return this.props.showButtons && this.props.buttonLayout === 'stacked';
    }
  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.props.showButtons && this.props.buttonLayout === 'horizontal';
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.showButtons && this.props.buttonLayout === 'vertical';
    }
  }, {
    key: "getInputMode",
    value: function getInputMode() {
      return this.props.inputMode || (this.props.mode === 'decimal' && !this.props.minFractionDigits ? 'numeric' : 'decimal');
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

      var formattedValue = this.formatValue(this.props.value);

      if (this.inputEl.value !== formattedValue) {
        this.inputEl.value = formattedValue;
        this.inputEl.setAttribute('aria-valuenow', this.props.value);
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

      var className = (0, _classnames.default)('p-inputnumber-input', this.props.inputClassName);
      var valueToRender = this.formatValue(this.props.value);
      return /*#__PURE__*/_react.default.createElement(_InputText.InputText, {
        ref: function ref(el) {
          return _this3.inputEl = _reactDom.default.findDOMNode(el);
        },
        id: this.props.inputId,
        style: this.props.inputStyle,
        role: "spinbutton",
        className: className,
        defaultValue: valueToRender,
        type: this.props.type,
        size: this.props.size,
        tabIndex: this.props.tabIndex,
        inputMode: this.getInputMode(),
        maxLength: this.props.maxlength,
        disabled: this.props.disabled,
        required: this.props.required,
        pattern: this.props.pattern,
        placeholder: this.props.placeholder,
        readOnly: this.props.readonly,
        name: this.props.name,
        onKeyDown: this.onInputKeyDown,
        onKeyPress: this.onInputKeyPress,
        onInput: this.onInput,
        onClick: this.onInputClick,
        onBlur: this.onInputBlur,
        onFocus: this.onInputFocus,
        onPaste: this.onPaste,
        "aria-valuemin": this.props.min,
        "aria-valuemax": this.props.max,
        "aria-valuenow": this.props.value,
        "aria-labelledby": this.props.ariaLabelledBy
      });
    }
  }, {
    key: "renderUpButton",
    value: function renderUpButton() {
      var className = (0, _classnames.default)("p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component", this.props.incrementButtonClassName, {
        'p-disabled': this.props.disabled
      });
      var icon = (0, _classnames.default)('p-inputnumber-button-icon', this.props.incrementButtonIcon);
      return /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: className,
        onMouseLeave: this.onUpButtonMouseLeave,
        onMouseDown: this.onUpButtonMouseDown,
        onMouseUp: this.onUpButtonMouseUp,
        onKeyDown: this.onUpButtonKeyDown,
        onKeyUp: this.onUpButtonKeyUp,
        disabled: this.props.disabled,
        tabIndex: "-1"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: icon
      }));
    }
  }, {
    key: "renderDownButton",
    value: function renderDownButton() {
      var className = (0, _classnames.default)("p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component", this.props.decrementButtonClassName, {
        'p-disabled': this.props.disabled
      });
      var icon = (0, _classnames.default)('p-inputnumber-button-icon', this.props.decrementButtonIcon);
      return /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: className,
        onMouseLeave: this.onDownButtonMouseLeave,
        onMouseDown: this.onDownButtonMouseDown,
        onMouseUp: this.onDownButtonMouseUp,
        onKeyDown: this.onDownButtonKeyDown,
        onKeyUp: this.onDownButtonKeyUp,
        disabled: this.props.disabled,
        tabIndex: "-1"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: icon
      }));
    }
  }, {
    key: "renderButtonGroup",
    value: function renderButtonGroup() {
      var upButton = this.props.showButtons && this.renderUpButton();
      var downButton = this.props.showButtons && this.renderDownButton();

      if (this.isStacked()) {
        return /*#__PURE__*/_react.default.createElement("span", {
          className: "p-inputnumber-button-group"
        }, upButton, downButton);
      }

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, upButton, downButton);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var className = (0, _classnames.default)('p-inputnumber p-component', this.props.className, {
        'p-inputwrapper-filled': this.props.value != null,
        'p-inputwrapper-focus': this.focus,
        'p-inputnumber-buttons-stacked': this.isStacked(),
        'p-inputnumber-buttons-horizontal': this.isHorizontal(),
        'p-inputnumber-buttons-vertical': this.isVertical()
      });
      var inputElement = this.renderInputElement();
      var buttonGroup = this.renderButtonGroup();
      return /*#__PURE__*/_react.default.createElement("span", {
        ref: function ref(el) {
          return _this4.element = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, inputElement, buttonGroup);
    }
  }]);

  return InputNumber;
}(_react.Component);

exports.InputNumber = InputNumber;

_defineProperty(InputNumber, "defaultProps", {
  value: null,
  format: true,
  showButtons: false,
  buttonLayout: 'stacked',
  incrementButtonClassName: null,
  decrementButtonClassName: null,
  incrementButtonIcon: 'pi pi-caret-up',
  decrementButtonIcon: 'pi pi-caret-down',
  locale: undefined,
  localeMatcher: undefined,
  mode: 'decimal',
  suffix: null,
  prefix: null,
  currency: undefined,
  currencyDisplay: undefined,
  useGrouping: true,
  minFractionDigits: undefined,
  maxFractionDigits: undefined,
  id: null,
  name: null,
  type: 'text',
  step: 1,
  min: null,
  max: null,
  disabled: false,
  required: false,
  tabIndex: null,
  pattern: null,
  inputMode: null,
  placeholder: null,
  readonly: false,
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
  onBlur: null,
  onFocus: null
});

_defineProperty(InputNumber, "propTypes", {
  value: _propTypes.default.number,
  format: _propTypes.default.bool,
  showButtons: _propTypes.default.bool,
  buttonLayout: _propTypes.default.string,
  incrementButtonClassName: _propTypes.default.string,
  decrementButtonClassName: _propTypes.default.string,
  incrementButtonIcon: _propTypes.default.string,
  decrementButtonIcon: _propTypes.default.string,
  locale: _propTypes.default.string,
  localeMatcher: _propTypes.default.string,
  mode: _propTypes.default.string,
  suffix: _propTypes.default.string,
  prefix: _propTypes.default.string,
  currency: _propTypes.default.string,
  currencyDisplay: _propTypes.default.string,
  useGrouping: _propTypes.default.bool,
  minFractionDigits: _propTypes.default.number,
  maxFractionDigits: _propTypes.default.number,
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  step: _propTypes.default.number,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  tabIndex: _propTypes.default.number,
  pattern: _propTypes.default.string,
  inputMode: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readonly: _propTypes.default.bool,
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
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func
});