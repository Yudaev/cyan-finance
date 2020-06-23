"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _FilterUtils = _interopRequireDefault(require("../utils/FilterUtils"));

var _ListBoxItem = require("./ListBoxItem");

var _ListBoxHeader = require("./ListBoxHeader");

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

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

var ListBox = /*#__PURE__*/function (_Component) {
  _inherits(ListBox, _Component);

  var _super = _createSuper(ListBox);

  function ListBox() {
    var _this;

    _classCallCheck(this, ListBox);

    _this = _super.call(this);
    _this.state = {
      filter: ''
    };
    _this.onFilter = _this.onFilter.bind(_assertThisInitialized(_this));
    _this.onOptionClick = _this.onOptionClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ListBox, [{
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
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "onOptionClick",
    value: function onOptionClick(event) {
      if (this.props.disabled) {
        return;
      }

      if (this.props.multiple) this.onOptionClickMultiple(event.originalEvent, event.option);else this.onOptionClickSingle(event.originalEvent, event.option);
      this.optionTouched = false;
    }
  }, {
    key: "onOptionTouchEnd",
    value: function onOptionTouchEnd() {
      if (this.props.disabled) {
        return;
      }

      this.optionTouched = true;
    }
  }, {
    key: "onOptionClickSingle",
    value: function onOptionClickSingle(event, option) {
      var selected = this.isSelected(option);
      var valueChanged = false;
      var value = null;
      var metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

      if (metaSelection) {
        var metaKey = event.metaKey || event.ctrlKey;

        if (selected) {
          if (metaKey) {
            value = null;
            valueChanged = true;
          }
        } else {
          value = this.getOptionValue(option);
          valueChanged = true;
        }
      } else {
        value = selected ? null : this.getOptionValue(option);
        valueChanged = true;
      }

      if (valueChanged) {
        this.updateModel(event, value);
      }
    }
  }, {
    key: "onOptionClickMultiple",
    value: function onOptionClickMultiple(event, option) {
      var selected = this.isSelected(option);
      var valueChanged = false;
      var value = null;
      var metaSelection = this.optionTouched ? false : this.props.metaKeySelection;

      if (metaSelection) {
        var metaKey = event.metaKey || event.ctrlKey;

        if (selected) {
          if (metaKey) value = this.removeOption(option);else value = [this.getOptionValue(option)];
          valueChanged = true;
        } else {
          value = metaKey ? this.props.value || [] : [];
          value = [].concat(_toConsumableArray(value), [this.getOptionValue(option)]);
          valueChanged = true;
        }
      } else {
        if (selected) value = this.removeOption(option);else value = [].concat(_toConsumableArray(this.props.value || []), [this.getOptionValue(option)]);
        valueChanged = true;
      }

      if (valueChanged) {
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
    key: "onFilter",
    value: function onFilter(event) {
      this.setState({
        filter: event.query
      });
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
    key: "removeOption",
    value: function removeOption(option) {
      var _this2 = this;

      return this.props.value.filter(function (val) {
        return !_ObjectUtils.default.equals(val, _this2.getOptionValue(option), _this2.props.dataKey);
      });
    }
  }, {
    key: "isSelected",
    value: function isSelected(option) {
      var selected = false;
      var optionValue = this.getOptionValue(option);

      if (this.props.multiple) {
        if (this.props.value) {
          var _iterator = _createForOfIteratorHelper(this.props.value),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var val = _step.value;

              if (_ObjectUtils.default.equals(val, optionValue, this.props.dataKey)) {
                selected = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      } else {
        selected = _ObjectUtils.default.equals(this.props.value, optionValue, this.props.dataKey);
      }

      return selected;
    }
  }, {
    key: "filter",
    value: function filter(option) {
      var filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
      var optionLabel = this.getOptionLabel(option).toLocaleLowerCase(this.props.filterLocale);
      return optionLabel.indexOf(filterValue) > -1;
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      return this.state.filter && this.state.filter.trim().length > 0;
    }
  }, {
    key: "getOptionLabel",
    value: function getOptionLabel(option) {
      return this.props.optionLabel ? _ObjectUtils.default.resolveFieldData(option, this.props.optionLabel) : option['label'] !== undefined ? option['label'] : option;
    }
  }, {
    key: "getOptionValue",
    value: function getOptionValue(option) {
      return this.props.optionValue ? _ObjectUtils.default.resolveFieldData(option, this.props.optionValue) : option['value'] !== undefined ? option['value'] : option;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var className = (0, _classnames.default)('p-listbox p-inputtext p-component', this.props.className, {
        'p-disabled': this.props.disabled
      });
      var items = this.props.options;
      var header;

      if (this.props.options) {
        if (this.hasFilter()) {
          var filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
          var searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];
          items = _FilterUtils.default.filter(items, searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);
        }

        items = items.map(function (option, index) {
          var optionLabel = _this3.getOptionLabel(option);

          return /*#__PURE__*/_react.default.createElement(_ListBoxItem.ListBoxItem, {
            key: optionLabel,
            label: optionLabel,
            option: option,
            template: _this3.props.itemTemplate,
            selected: _this3.isSelected(option),
            onClick: _this3.onOptionClick,
            onTouchEnd: function onTouchEnd(e) {
              return _this3.onOptionTouchEnd(e, option, index);
            },
            tabIndex: _this3.props.tabIndex
          });
        });
      }

      if (this.props.filter) {
        header = /*#__PURE__*/_react.default.createElement(_ListBoxHeader.ListBoxHeader, {
          filter: this.state.filter,
          onFilter: this.onFilter,
          disabled: this.props.disabled,
          filterPlaceholder: this.props.filterPlaceholder
        });
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(el) {
          return _this3.element = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, header, /*#__PURE__*/_react.default.createElement("div", {
        className: "p-listbox-list-wrapper",
        style: this.props.listStyle
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "p-listbox-list",
        role: "listbox",
        "aria-multiselectable": this.props.multiple
      }, items)));
    }
  }]);

  return ListBox;
}(_react.Component);

exports.ListBox = ListBox;

_defineProperty(ListBox, "defaultProps", {
  id: null,
  value: null,
  options: null,
  optionLabel: null,
  optionValue: null,
  itemTemplate: null,
  style: null,
  listStyle: null,
  className: null,
  disabled: null,
  dataKey: null,
  multiple: false,
  metaKeySelection: false,
  filter: false,
  filterBy: null,
  filterMatchMode: 'contains',
  filterPlaceholder: null,
  filterLocale: undefined,
  tabIndex: '0',
  tooltip: null,
  tooltipOptions: null,
  ariaLabelledBy: null,
  onChange: null
});

_defineProperty(ListBox, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.any,
  options: _propTypes.default.array,
  optionLabel: _propTypes.default.string,
  optionValue: _propTypes.default.string,
  itemTemplate: _propTypes.default.func,
  style: _propTypes.default.object,
  listStyle: _propTypes.default.object,
  className: _propTypes.default.string,
  dataKey: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  metaKeySelection: _propTypes.default.bool,
  filter: _propTypes.default.bool,
  filterBy: _propTypes.default.string,
  filterMatchMode: _propTypes.default.string,
  filterPlaceholder: _propTypes.default.string,
  filterLocale: _propTypes.default.string,
  tabIndex: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  ariaLabelledBy: _propTypes.default.string,
  onChange: _propTypes.default.func
});