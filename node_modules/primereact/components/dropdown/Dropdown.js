"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _FilterUtils = _interopRequireDefault(require("../utils/FilterUtils"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropdownPanel = require("./DropdownPanel");

var _DropdownItem = require("./DropdownItem");

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

var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      filter: '',
      overlayVisible: null
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onEditableInputClick = _this.onEditableInputClick.bind(_assertThisInitialized(_this));
    _this.onEditableInputChange = _this.onEditableInputChange.bind(_assertThisInitialized(_this));
    _this.onEditableInputFocus = _this.onEditableInputFocus.bind(_assertThisInitialized(_this));
    _this.onOptionClick = _this.onOptionClick.bind(_assertThisInitialized(_this));
    _this.onFilterInputChange = _this.onFilterInputChange.bind(_assertThisInitialized(_this));
    _this.onFilterInputKeyDown = _this.onFilterInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onPanelClick = _this.onPanelClick.bind(_assertThisInitialized(_this));
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "onClick",
    value: function onClick(event) {
      var _this2 = this;

      if (this.props.disabled) {
        return;
      }

      if (!this.isClearClicked(event)) {
        this.focusInput.focus();

        if (this.panel.element.offsetParent) {
          this.hide();
        } else {
          this.show();

          if (this.props.filter && this.props.filterInputAutoFocus) {
            setTimeout(function () {
              _this2.filterInput.focus();
            }, 200);
          }
        }
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      _DomHandler.default.addClass(this.container, 'p-focus');

      this.focus = true;

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      _DomHandler.default.removeClass(this.container, 'p-focus');

      this.focus = false;

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: "onPanelClick",
    value: function onPanelClick(event) {
      event.stopPropagation();
    }
  }, {
    key: "onUpKey",
    value: function onUpKey(event) {
      if (this.props.options) {
        var selectedItemIndex = this.findOptionIndex(this.props.value);
        var prevItem = this.findPrevVisibleItem(selectedItemIndex);

        if (prevItem) {
          this.selectItem({
            originalEvent: event,
            option: prevItem
          });
        }
      }

      event.preventDefault();
    }
  }, {
    key: "onDownKey",
    value: function onDownKey(event) {
      if (this.props.options) {
        if (!this.panel.element.offsetParent && event.altKey) {
          this.show();
        } else {
          var selectedItemIndex = this.findOptionIndex(this.props.value);
          var nextItem = this.findNextVisibleItem(selectedItemIndex);

          if (nextItem) {
            this.selectItem({
              originalEvent: event,
              option: nextItem
            });
          }
        }
      }

      event.preventDefault();
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      switch (event.which) {
        //down
        case 40:
          this.onDownKey(event);
          break;
        //up

        case 38:
          this.onUpKey(event);
          break;
        //space

        case 32:
          if (!this.panel.element.offsetParent) {
            this.show();
            event.preventDefault();
          }

          break;
        //enter

        case 13:
          this.hide();
          event.preventDefault();
          break;
        //escape and tab

        case 27:
        case 9:
          this.hide();
          break;

        default:
          this.search(event);
          break;
      }
    }
  }, {
    key: "search",
    value: function search(event) {
      var _this3 = this;

      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      var char = String.fromCharCode(event.keyCode);
      this.previousSearchChar = this.currentSearchChar;
      this.currentSearchChar = char;
      if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + char : char;
      var searchIndex = this.props.value ? this.findOptionIndex(this.props.value) : -1;
      var newOption = this.searchOption(++searchIndex);

      if (newOption) {
        this.selectItem({
          originalEvent: event,
          option: newOption
        });
        this.selectedOptionUpdated = true;
      }

      this.searchTimeout = setTimeout(function () {
        _this3.searchValue = null;
      }, 250);
    }
  }, {
    key: "searchOption",
    value: function searchOption(index) {
      var option;

      if (this.searchValue) {
        option = this.searchOptionInRange(index, this.props.options.length);

        if (!option) {
          option = this.searchOptionInRange(0, index);
        }
      }

      return option;
    }
  }, {
    key: "searchOptionInRange",
    value: function searchOptionInRange(start, end) {
      for (var i = start; i < end; i++) {
        var opt = this.props.options[i];
        var label = this.getOptionLabel(opt).toString().toLocaleLowerCase(this.props.filterLocale);

        if (label.startsWith(this.searchValue.toLocaleLowerCase(this.props.filterLocale))) {
          return opt;
        }
      }

      return null;
    }
  }, {
    key: "filter",
    value: function filter(options) {
      var filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
      var searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];

      var items = _FilterUtils.default.filter(options, searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);

      return items && items.length ? items : null;
    }
  }, {
    key: "findNextVisibleItem",
    value: function findNextVisibleItem(index) {
      var i = index + 1;

      if (i === this.props.options.length) {
        return null;
      }

      var option = this.props.options[i];

      if (option.disabled) {
        return this.findNextVisibleItem(i);
      }

      if (this.hasFilter()) {
        if (this.filter([option])) return option;else return this.findNextVisibleItem(i);
      } else {
        return option;
      }
    }
  }, {
    key: "findPrevVisibleItem",
    value: function findPrevVisibleItem(index) {
      var i = index - 1;

      if (i === -1) {
        return null;
      }

      var option = this.props.options[i];

      if (option.disabled) {
        return this.findPrevVisibleItem(i);
      }

      if (this.hasFilter()) {
        if (this.filter([option])) return option;else return this.findPrevVisibleItem(i);
      } else {
        return option;
      }
    }
  }, {
    key: "onEditableInputClick",
    value: function onEditableInputClick(event) {
      this.bindDocumentClickListener();
      event.stopPropagation();
    }
  }, {
    key: "onEditableInputChange",
    value: function onEditableInputChange(event) {
      this.props.onChange({
        originalEvent: event.originalEvent,
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
  }, {
    key: "onEditableInputFocus",
    value: function onEditableInputFocus(event) {
      _DomHandler.default.addClass(this.container, 'p-focus');

      this.focus = true;
      this.hide();

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: "onOptionClick",
    value: function onOptionClick(event) {
      var _this4 = this;

      var option = event.option;

      if (!option.disabled) {
        this.selectItem(event);
        this.focusInput.focus();
      }

      setTimeout(function () {
        _this4.hide();
      }, 100);
    }
  }, {
    key: "onFilterInputChange",
    value: function onFilterInputChange(event) {
      this.setState({
        filter: event.target.value
      });
    }
  }, {
    key: "resetFilter",
    value: function resetFilter() {
      this.setState({
        filter: ''
      });
    }
  }, {
    key: "onFilterInputKeyDown",
    value: function onFilterInputKeyDown(event) {
      switch (event.which) {
        //down
        case 40:
          this.onDownKey(event);
          break;
        //up

        case 38:
          this.onUpKey(event);
          break;
        //enter

        case 13:
          this.hide();
          event.preventDefault();
          break;

        default:
          break;
      }
    }
  }, {
    key: "clear",
    value: function clear(event) {
      this.props.onChange({
        originalEvent: event,
        value: null,
        stopPropagation: function stopPropagation() {},
        preventDefault: function preventDefault() {},
        target: {
          name: this.props.name,
          id: this.props.id,
          value: null
        }
      });
      this.updateEditableLabel();
    }
  }, {
    key: "selectItem",
    value: function selectItem(event) {
      var currentSelectedOption = this.findOption(this.props.value);

      if (currentSelectedOption !== event.option) {
        this.updateEditableLabel(event.option);
        var optionValue = this.getOptionValue(event.option);
        this.props.onChange({
          originalEvent: event.originalEvent,
          value: optionValue,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: optionValue
          }
        });
      }
    }
  }, {
    key: "findOptionIndex",
    value: function findOptionIndex(value) {
      var index = -1;

      if (this.props.options) {
        for (var i = 0; i < this.props.options.length; i++) {
          var optionValue = this.getOptionValue(this.props.options[i]);

          if (value === null && optionValue == null || _ObjectUtils.default.equals(value, optionValue, this.props.dataKey)) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "findOption",
    value: function findOption(value) {
      var index = this.findOptionIndex(value);
      return index !== -1 ? this.props.options[index] : null;
    }
  }, {
    key: "show",
    value: function show() {
      var _this5 = this;

      this.panel.element.style.zIndex = String(_DomHandler.default.generateZIndex());
      this.panel.element.style.display = 'block';
      setTimeout(function () {
        _DomHandler.default.addClass(_this5.panel.element, 'p-input-overlay-visible');

        _DomHandler.default.removeClass(_this5.panel.element, 'p-input-overlay-hidden');
      }, 1);
      this.alignPanel();
      this.bindDocumentClickListener();
      this.setState({
        overlayVisible: true
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this6 = this;

      if (this.panel && this.panel.element && this.panel.element.offsetParent) {
        _DomHandler.default.addClass(this.panel.element, 'p-input-overlay-hidden');

        _DomHandler.default.removeClass(this.panel.element, 'p-input-overlay-visible');

        this.unbindDocumentClickListener();
        this.hideTimeout = setTimeout(function () {
          _this6.panel.element.style.display = 'none';

          _DomHandler.default.removeClass(_this6.panel.element, 'p-input-overlay-hidden');
        }, 150);
        this.setState({
          overlayVisible: false
        });
      }
    }
  }, {
    key: "alignPanel",
    value: function alignPanel() {
      if (this.props.appendTo) {
        this.panel.element.style.minWidth = _DomHandler.default.getWidth(this.container) + 'px';

        _DomHandler.default.absolutePosition(this.panel.element, this.container);
      } else {
        _DomHandler.default.relativePosition(this.panel.element, this.container);
      }
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this7 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this7.isOutsideClicked(event)) {
            _this7.hide();
          }
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "unbindDocumentClickListener",
    value: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(event) {
      return this.container && !(this.container.isSameNode(event.target) || this.isClearClicked(event) || this.container.contains(event.target) || this.panel && this.panel.element && this.panel.element.contains(event.target));
    }
  }, {
    key: "isClearClicked",
    value: function isClearClicked(event) {
      return _DomHandler.default.hasClass(event.target, 'p-dropdown-clear-icon');
    }
  }, {
    key: "updateEditableLabel",
    value: function updateEditableLabel(option) {
      if (this.editableInput) {
        this.editableInput.value = option ? this.getOptionLabel(option) : this.props.value || '';
      }
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      return this.state.filter && this.state.filter.trim().length > 0;
    }
  }, {
    key: "renderHiddenSelect",
    value: function renderHiddenSelect(selectedOption) {
      var _this8 = this;

      var placeHolderOption = /*#__PURE__*/_react.default.createElement("option", {
        value: ""
      }, this.props.placeholder);

      var option = selectedOption ? /*#__PURE__*/_react.default.createElement("option", {
        value: selectedOption.value
      }, this.getOptionLabel(selectedOption)) : null;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "p-hidden-accessible p-dropdown-hidden-select"
      }, /*#__PURE__*/_react.default.createElement("select", {
        ref: function ref(el) {
          return _this8.nativeSelect = el;
        },
        required: this.props.required,
        name: this.props.name,
        tabIndex: "-1",
        "aria-hidden": "true"
      }, placeHolderOption, option));
    }
  }, {
    key: "renderKeyboardHelper",
    value: function renderKeyboardHelper() {
      var _this9 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "p-hidden-accessible"
      }, /*#__PURE__*/_react.default.createElement("input", {
        ref: function ref(el) {
          return _this9.focusInput = el;
        },
        id: this.props.inputId,
        type: "text",
        readOnly: true,
        "aria-haspopup": "listbox",
        onFocus: this.onInputFocus,
        onBlur: this.onInputBlur,
        onKeyDown: this.onInputKeyDown,
        disabled: this.props.disabled,
        tabIndex: this.props.tabIndex,
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy
      }));
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(label) {
      var _this10 = this;

      if (this.props.editable) {
        var value = label || this.props.value || '';
        return /*#__PURE__*/_react.default.createElement("input", {
          ref: function ref(el) {
            return _this10.editableInput = el;
          },
          type: "text",
          defaultValue: value,
          className: "p-dropdown-label p-inputtext",
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          maxLength: this.props.maxLength,
          onClick: this.onEditableInputClick,
          onInput: this.onEditableInputChange,
          onFocus: this.onEditableInputFocus,
          onBlur: this.onInputBlur,
          "aria-label": this.props.ariaLabel,
          "aria-labelledby": this.props.ariaLabelledBy,
          "aria-haspopup": "listbox"
        });
      } else {
        var className = (0, _classnames.default)('p-dropdown-label p-inputtext', {
          'p-placeholder': label === null && this.props.placeholder,
          'p-dropdown-label-empty': label === null && !this.props.placeholder
        });
        return /*#__PURE__*/_react.default.createElement("label", {
          className: className
        }, label || this.props.placeholder || 'empty');
      }
    }
  }, {
    key: "renderClearIcon",
    value: function renderClearIcon() {
      if (this.props.value != null && this.props.showClear && !this.props.disabled) {
        return /*#__PURE__*/_react.default.createElement("i", {
          className: "p-dropdown-clear-icon pi pi-times",
          onClick: this.clear
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderDropdownIcon",
    value: function renderDropdownIcon() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "p-dropdown-trigger",
        role: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": this.state.overlayVisible
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "p-dropdown-trigger-icon pi pi-chevron-down p-clickable"
      }));
    }
  }, {
    key: "renderItems",
    value: function renderItems(selectedOption) {
      var _this11 = this;

      var items = this.props.options;

      if (items && this.hasFilter()) {
        items = this.filter(items);
      }

      if (items) {
        return items.map(function (option) {
          var optionLabel = _this11.getOptionLabel(option);

          return /*#__PURE__*/_react.default.createElement(_DropdownItem.DropdownItem, {
            key: _this11.getOptionKey(option),
            label: optionLabel,
            option: option,
            template: _this11.props.itemTemplate,
            selected: selectedOption === option,
            disabled: option.disabled,
            onClick: _this11.onOptionClick
          });
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderFilter",
    value: function renderFilter() {
      var _this12 = this;

      if (this.props.filter) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "p-dropdown-filter-container"
        }, /*#__PURE__*/_react.default.createElement("input", {
          ref: function ref(el) {
            return _this12.filterInput = el;
          },
          type: "text",
          autoComplete: "off",
          className: "p-dropdown-filter p-inputtext p-component",
          placeholder: this.props.filterPlaceholder,
          onKeyDown: this.onFilterInputKeyDown,
          onChange: this.onFilterInputChange,
          value: this.state.filter
        }), /*#__PURE__*/_react.default.createElement("span", {
          className: "p-dropdown-filter-icon pi pi-search"
        }));
      } else {
        return null;
      }
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
    key: "getOptionKey",
    value: function getOptionKey(option) {
      return this.props.dataKey ? _ObjectUtils.default.resolveFieldData(option, this.props.dataKey) : this.getOptionLabel(option);
    }
  }, {
    key: "checkValidity",
    value: function checkValidity() {
      return this.nativeSelect.checkValidity();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus && this.focusInput) {
        this.focusInput.focus();
      }

      if (this.props.tooltip) {
        this.renderTooltip();
      }

      this.nativeSelect.selectedIndex = 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }

      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.filter) {
        this.alignPanel();
      }

      if (this.panel.element.offsetParent) {
        var highlightItem = _DomHandler.default.findSingle(this.panel.element, 'li.p-highlight');

        if (highlightItem) {
          _DomHandler.default.scrollInView(this.panel.itemsWrapper, highlightItem);
        }
      }

      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }

      if (this.state.filter && (!this.props.options || this.props.options.length === 0)) {
        this.setState({
          filter: ''
        });
      }

      this.nativeSelect.selectedIndex = 1;
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
      var _this13 = this;

      var className = (0, _classnames.default)('p-dropdown p-component', this.props.className, {
        'p-disabled': this.props.disabled,
        'p-inputwrapper-filled': this.props.value,
        'p-inputwrapper-focus': this.focus,
        'p-dropdown-clearable': this.props.showClear && !this.props.disabled
      });
      var selectedOption = this.findOption(this.props.value);
      var label = selectedOption ? this.getOptionLabel(selectedOption) : null;
      var hiddenSelect = this.renderHiddenSelect(selectedOption);
      var keyboardHelper = this.renderKeyboardHelper();
      var labelElement = this.renderLabel(label);
      var dropdownIcon = this.renderDropdownIcon();
      var items = this.renderItems(selectedOption);
      var filterElement = this.renderFilter();
      var clearIcon = this.renderClearIcon();

      if (this.props.editable && this.editableInput) {
        var value = label || this.props.value || '';
        this.editableInput.value = value;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        id: this.props.id,
        ref: function ref(el) {
          return _this13.container = el;
        },
        className: className,
        style: this.props.style,
        onClick: this.onClick,
        onMouseDown: this.props.onMouseDown,
        onContextMenu: this.props.onContextMenu
      }, keyboardHelper, hiddenSelect, labelElement, clearIcon, dropdownIcon, /*#__PURE__*/_react.default.createElement(_DropdownPanel.DropdownPanel, {
        ref: function ref(el) {
          return _this13.panel = el;
        },
        appendTo: this.props.appendTo,
        panelStyle: this.props.panelStyle,
        panelClassName: this.props.panelClassName,
        scrollHeight: this.props.scrollHeight,
        filter: filterElement,
        onClick: this.onPanelClick
      }, items));
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.Dropdown = Dropdown;

_defineProperty(Dropdown, "defaultProps", {
  id: null,
  name: null,
  value: null,
  options: null,
  optionLabel: null,
  optionValue: null,
  itemTemplate: null,
  style: null,
  className: null,
  scrollHeight: '200px',
  filter: false,
  filterBy: null,
  filterMatchMode: 'contains',
  filterPlaceholder: null,
  filterLocale: undefined,
  editable: false,
  placeholder: null,
  required: false,
  disabled: false,
  appendTo: null,
  tabIndex: null,
  autoFocus: false,
  filterInputAutoFocus: true,
  panelClassName: null,
  panelStyle: null,
  dataKey: null,
  inputId: null,
  showClear: false,
  maxLength: null,
  tooltip: null,
  tooltipOptions: null,
  ariaLabel: null,
  ariaLabelledBy: null,
  onChange: null,
  onFocus: null,
  onBlur: null,
  onMouseDown: null,
  onContextMenu: null
});

_defineProperty(Dropdown, "propTypes", {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.any,
  options: _propTypes.default.array,
  optionLabel: _propTypes.default.string,
  optionValue: _propTypes.default.string,
  itemTemplate: _propTypes.default.func,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  scrollHeight: _propTypes.default.string,
  filter: _propTypes.default.bool,
  filterBy: _propTypes.default.string,
  filterMatchMode: _propTypes.default.string,
  filterPlaceholder: _propTypes.default.string,
  filterLocale: _propTypes.default.string,
  editable: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  appendTo: _propTypes.default.any,
  tabIndex: _propTypes.default.number,
  autoFocus: _propTypes.default.bool,
  filterInputAutoFocus: _propTypes.default.bool,
  lazy: _propTypes.default.bool,
  panelClassName: _propTypes.default.string,
  panelStyle: _propTypes.default.object,
  dataKey: _propTypes.default.string,
  inputId: _propTypes.default.string,
  showClear: _propTypes.default.bool,
  maxLength: _propTypes.default.number,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  ariaLabel: _propTypes.default.string,
  ariaLabelledBy: _propTypes.default.string,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  onContextMenu: _propTypes.default.func
});