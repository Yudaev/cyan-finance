"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoComplete = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _InputText = require("../inputtext/InputText");

var _Button = require("../button/Button");

var _DomHandler = _interopRequireDefault(require("../utils/DomHandler"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

var _AutoCompletePanel = require("./AutoCompletePanel");

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("../tooltip/Tooltip"));

var _UniqueComponentId = _interopRequireDefault(require("../utils/UniqueComponentId"));

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

var AutoComplete = /*#__PURE__*/function (_Component) {
  _inherits(AutoComplete, _Component);

  var _super = _createSuper(AutoComplete);

  function AutoComplete(props) {
    var _this;

    _classCallCheck(this, AutoComplete);

    _this = _super.call(this, props);
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputClick = _this.onInputClick.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onDropdownClick = _this.onDropdownClick.bind(_assertThisInitialized(_this));
    _this.onMultiContainerClick = _this.onMultiContainerClick.bind(_assertThisInitialized(_this));
    _this.onMultiInputFocus = _this.onMultiInputFocus.bind(_assertThisInitialized(_this));
    _this.onMultiInputBlur = _this.onMultiInputBlur.bind(_assertThisInitialized(_this));
    _this.selectItem = _this.selectItem.bind(_assertThisInitialized(_this));
    _this.listId = (0, _UniqueComponentId.default)() + '_list';
    return _this;
  }

  _createClass(AutoComplete, [{
    key: "onInputChange",
    value: function onInputChange(event) {
      var _this2 = this;

      //Cancel the search request if user types within the timeout
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      var query = event.target.value;

      if (!this.props.multiple) {
        this.updateModel(event, query);
      }

      if (query.length === 0) {
        this.hidePanel();

        if (this.props.onClear) {
          this.props.onClear(event);
        }
      } else {
        if (query.length >= this.props.minLength) {
          this.timeout = setTimeout(function () {
            _this2.search(event, query, 'input');
          }, this.props.delay);
        } else {
          this.hidePanel();
        }
      }
    }
  }, {
    key: "onInputClick",
    value: function onInputClick(event) {
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: "search",
    value: function search(event, query, source) {
      //allow empty string but not undefined or null
      if (query === undefined || query === null) {
        return;
      } //do not search blank values on input change


      if (source === 'input' && query.trim().length === 0) {
        return;
      }

      if (this.props.completeMethod) {
        this.searching = true;
        this.showLoader();
        this.props.completeMethod({
          originalEvent: event,
          query: query
        });
      }
    }
  }, {
    key: "selectItem",
    value: function selectItem(event, option) {
      if (this.props.multiple) {
        this.inputEl.value = '';

        if (!this.isSelected(option)) {
          var newValue = this.props.value ? [].concat(_toConsumableArray(this.props.value), [option]) : [option];
          this.updateModel(event, newValue);
        }
      } else {
        this.updateInputField(option);
        this.updateModel(event, option);
      }

      if (this.props.onSelect) {
        this.props.onSelect({
          originalEvent: event,
          value: option
        });
      }

      this.inputEl.focus();
      this.hidePanel();
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

      this.ariaSelected = value;
    }
  }, {
    key: "formatValue",
    value: function formatValue(value) {
      if (value) {
        if (this.props.selectedItemTemplate && (this.props.multiple ? this.isSelected(value) : this.findOptionIndex(value) > -1)) {
          var resolvedFieldData = this.props.selectedItemTemplate(value);
          return resolvedFieldData ? resolvedFieldData : value;
        } else if (this.props.field) {
          var _resolvedFieldData = _ObjectUtils.default.resolveFieldData(value, this.props.field);

          return _resolvedFieldData !== null && _resolvedFieldData !== undefined ? _resolvedFieldData : value;
        } else return value;
      } else return '';
    }
  }, {
    key: "updateInputField",
    value: function updateInputField(value) {
      var formattedValue = this.formatValue(value);
      this.inputEl.value = formattedValue;
    }
  }, {
    key: "showPanel",
    value: function showPanel() {
      var _this3 = this;

      if (this.focus) {
        this.alignPanel();

        if (this.panel && this.panel.element && !this.panel.element.offsetParent) {
          this.panel.element.style.zIndex = String(_DomHandler.default.generateZIndex());
          this.panel.element.style.display = "block";
          setTimeout(function () {
            if (_this3.panel && _this3.panel.element) {
              _DomHandler.default.addClass(_this3.panel.element, 'p-input-overlay-visible');

              _DomHandler.default.removeClass(_this3.panel.element, 'p-input-overlay-hidden');
            }
          }, 1);
          this.alignPanel();
          this.bindDocumentClickListener();
        }
      }
    }
  }, {
    key: "alignPanel",
    value: function alignPanel() {
      if (this.panel.element.offsetParent) {
        var target = this.props.multiple ? this.multiContainer : this.inputEl;

        if (this.props.appendTo) {
          this.panel.element.style.minWidth = _DomHandler.default.getWidth(target) + 'px';

          _DomHandler.default.absolutePosition(this.panel.element, target);
        } else {
          _DomHandler.default.relativePosition(this.panel.element, target);
        }
      }
    }
  }, {
    key: "hidePanel",
    value: function hidePanel() {
      var _this4 = this;

      _DomHandler.default.addClass(this.panel.element, 'p-input-overlay-hidden');

      _DomHandler.default.removeClass(this.panel.element, 'p-input-overlay-visible');

      setTimeout(function () {
        if (_this4.panel && _this4.panel.element) {
          _this4.panel.element.style.display = 'none';

          _DomHandler.default.removeClass(_this4.panel.element, 'p-input-overlay-hidden');
        }
      }, 150);
      this.unbindDocumentClickListener();
    }
  }, {
    key: "onDropdownClick",
    value: function onDropdownClick(event) {
      if (this.panel && this.panel.element && !this.panel.element.offsetParent) {
        this.focus = true;
        this.inputEl.focus();
        if (this.props.dropdownMode === 'blank') this.search(event, '', 'dropdown');else if (this.props.dropdownMode === 'current') this.search(event, this.inputEl.value, 'dropdown');

        if (this.props.onDropdownClick) {
          this.props.onDropdownClick({
            originalEvent: event,
            query: this.inputEl.value
          });
        }
      } else {
        this.hidePanel();
      }
    }
  }, {
    key: "removeItem",
    value: function removeItem(event, index) {
      var removedValue = this.props.value[index];
      var newValue = this.props.value.filter(function (val, i) {
        return index !== i;
      });
      this.updateModel(event, newValue);

      if (this.props.onUnselect) {
        this.props.onUnselect({
          originalEvent: event,
          value: removedValue
        });
      }
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      if (this.isPanelVisible()) {
        var highlightItem = _DomHandler.default.findSingle(this.panel.element, 'li.p-highlight');

        switch (event.which) {
          //down
          case 40:
            if (highlightItem) {
              var nextElement = highlightItem.nextElementSibling;

              if (nextElement) {
                _DomHandler.default.addClass(nextElement, 'p-highlight');

                _DomHandler.default.removeClass(highlightItem, 'p-highlight');

                _DomHandler.default.scrollInView(this.panel.element, nextElement);
              }
            } else {
              _DomHandler.default.addClass(this.panel.element.firstChild.firstChild, 'p-highlight');
            }

            event.preventDefault();
            break;
          //up

          case 38:
            if (highlightItem) {
              var previousElement = highlightItem.previousElementSibling;

              if (previousElement) {
                _DomHandler.default.addClass(previousElement, 'p-highlight');

                _DomHandler.default.removeClass(highlightItem, 'p-highlight');

                _DomHandler.default.scrollInView(this.panel.element, previousElement);
              }
            }

            event.preventDefault();
            break;
          //enter,tab

          case 13:
            if (highlightItem) {
              this.selectItem(event, this.props.suggestions[_DomHandler.default.index(highlightItem)]);
              this.hidePanel();
            }

            event.preventDefault();
            break;
          //escape

          case 27:
            this.hidePanel();
            event.preventDefault();
            break;
          //tab

          case 9:
            if (highlightItem) {
              this.selectItem(event, this.props.suggestions[_DomHandler.default.index(highlightItem)]);
            }

            this.hidePanel();
            break;

          default:
            break;
        }
      }

      if (this.props.multiple) {
        switch (event.which) {
          //backspace
          case 8:
            if (this.props.value && this.props.value.length && !this.inputEl.value) {
              var removedValue = this.props.value[this.props.value.length - 1];
              var newValue = this.props.value.slice(0, -1);

              if (this.props.onUnselect) {
                this.props.onUnselect({
                  originalEvent: event,
                  value: removedValue
                });
              }

              this.updateModel(event, newValue);
            }

            break;

          default:
            break;
        }
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      this.focus = true;

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }

      _DomHandler.default.addClass(this.container, 'p-inputwrapper-focus');
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      this.focus = false;

      if (this.props.onBlur) {
        this.props.onBlur(event);
      }

      _DomHandler.default.removeClass(this.container, 'p-inputwrapper-focus');
    }
  }, {
    key: "onMultiContainerClick",
    value: function onMultiContainerClick(event) {
      this.inputEl.focus();

      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: "onMultiInputFocus",
    value: function onMultiInputFocus(event) {
      this.onInputFocus(event);

      _DomHandler.default.addClass(this.multiContainer, 'p-focus');
    }
  }, {
    key: "onMultiInputBlur",
    value: function onMultiInputBlur(event) {
      this.onInputBlur(event);

      _DomHandler.default.removeClass(this.multiContainer, 'p-focus');
    }
  }, {
    key: "isSelected",
    value: function isSelected(val) {
      var selected = false;

      if (this.props.value && this.props.value.length) {
        for (var i = 0; i < this.props.value.length; i++) {
          if (_ObjectUtils.default.equals(this.props.value[i], val)) {
            selected = true;
            break;
          }
        }
      }

      return selected;
    }
  }, {
    key: "findOptionIndex",
    value: function findOptionIndex(option) {
      var index = -1;

      if (this.props.suggestions) {
        for (var i = 0; i < this.props.suggestions.length; i++) {
          if (_ObjectUtils.default.equals(option, this.props.suggestions[i])) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus && this.inputEl) {
        this.inputEl.focus();
      }

      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.suggestions !== this.props.suggestions && this.searching) {
        if (this.props.suggestions && this.props.suggestions.length) this.showPanel();else this.hidePanel();
        this.hideLoader();
        this.searching = false;
      }

      if (this.inputEl && !this.props.multiple) {
        this.updateInputField(this.props.value);
      }

      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "showLoader",
    value: function showLoader() {
      this.loader.style.visibility = 'visible';
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.loader.style.visibility = 'hidden';
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
    key: "renderSimpleAutoComplete",
    value: function renderSimpleAutoComplete() {
      var _this5 = this;

      var inputClassName = (0, _classnames.default)('p-autocomplete-input', this.props.inputClassName, {
        'p-autocomplete-dd-input': this.props.dropdown
      });
      return /*#__PURE__*/_react.default.createElement(_InputText.InputText, {
        ref: function ref(el) {
          return _this5.inputEl = _reactDom.default.findDOMNode(el);
        },
        id: this.props.inputId,
        type: this.props.type,
        name: this.props.name,
        defaultValue: this.formatValue(this.props.value),
        role: "searchbox",
        "aria-autocomplete": "list",
        "aria-controls": this.listId,
        "aria-labelledby": this.props.ariaLabelledBy,
        className: inputClassName,
        style: this.props.inputStyle,
        autoComplete: "off",
        readOnly: this.props.readonly,
        disabled: this.props.disabled,
        placeholder: this.props.placeholder,
        size: this.props.size,
        maxLength: this.props.maxlength,
        tabIndex: this.props.tabindex,
        onBlur: this.onInputBlur,
        onFocus: this.onInputFocus,
        onChange: this.onInputChange,
        onMouseDown: this.props.onMouseDown,
        onKeyUp: this.props.onKeyUp,
        onKeyDown: this.onInputKeyDown,
        onKeyPress: this.props.onKeyPress,
        onContextMenu: this.props.onContextMenu,
        onClick: this.onInputClick,
        onDoubleClick: this.props.onDblClick
      });
    }
  }, {
    key: "renderChips",
    value: function renderChips() {
      var _this6 = this;

      if (this.props.value && this.props.value.length) {
        return this.props.value.map(function (val, index) {
          return /*#__PURE__*/_react.default.createElement("li", {
            key: index + 'multi-item',
            className: "p-autocomplete-token p-highlight"
          }, !_this6.props.disabled && /*#__PURE__*/_react.default.createElement("span", {
            className: "p-autocomplete-token-icon pi pi-fw pi-times",
            onClick: function onClick(e) {
              return _this6.removeItem(e, index);
            }
          }), /*#__PURE__*/_react.default.createElement("span", {
            className: "p-autocomplete-token-label"
          }, _this6.formatValue(val)));
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderMultiInput",
    value: function renderMultiInput() {
      var _this7 = this;

      return /*#__PURE__*/_react.default.createElement("li", {
        className: "p-autocomplete-input-token"
      }, /*#__PURE__*/_react.default.createElement("input", {
        ref: function ref(el) {
          return _this7.inputEl = el;
        },
        type: this.props.type,
        disabled: this.props.disabled,
        placeholder: this.props.placeholder,
        role: "searchbox",
        "aria-autocomplete": "list",
        "aria-controls": this.listId,
        "aria-labelledby": this.props.ariaLabelledBy,
        autoComplete: "off",
        tabIndex: this.props.tabindex,
        onChange: this.onInputChange,
        id: this.props.inputId,
        name: this.props.name,
        style: this.props.inputStyle,
        className: this.props.inputClassName,
        maxLength: this.props.maxlength,
        onKeyUp: this.props.onKeyUp,
        onKeyDown: this.onInputKeyDown,
        onKeyPress: this.props.onKeyPress,
        onFocus: this.onMultiInputFocus,
        onBlur: this.onMultiInputBlur
      }));
    }
  }, {
    key: "renderMultipleAutoComplete",
    value: function renderMultipleAutoComplete() {
      var _this8 = this;

      var multiContainerClass = (0, _classnames.default)("p-autocomplete-multiple-container p-component p-inputtext", {
        'p-disabled': this.props.disabled
      });
      var tokens = this.renderChips();
      var input = this.renderMultiInput();
      return /*#__PURE__*/_react.default.createElement("ul", {
        ref: function ref(el) {
          _this8.multiContainer = el;
        },
        className: multiContainerClass,
        onContextMenu: this.props.onContextMenu,
        onMouseDown: this.props.onMouseDown,
        onClick: this.onMultiContainerClick,
        onDoubleClick: this.props.onDblClick
      }, tokens, input);
    }
  }, {
    key: "renderDropdown",
    value: function renderDropdown() {
      return /*#__PURE__*/_react.default.createElement(_Button.Button, {
        type: "button",
        icon: "pi pi-fw pi-chevron-down",
        className: "p-autocomplete-dropdown",
        disabled: this.props.disabled,
        onClick: this.onDropdownClick
      });
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var _this9 = this;

      return /*#__PURE__*/_react.default.createElement("i", {
        ref: function ref(el) {
          return _this9.loader = el;
        },
        className: "p-autocomplete-loader pi pi-spinner pi-spin",
        style: {
          visibility: 'hidden'
        }
      });
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this10 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (event.which === 3) {
            return;
          }

          if (_this10.isOutsideClicked(event)) {
            _this10.hidePanel();
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
    key: "isPanelVisible",
    value: function isPanelVisible() {
      return this.panel.element.offsetParent != null;
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(event) {
      return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target) || this.panel && this.panel.element && this.panel.element.contains(event.target));
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      var input, dropdown;
      var className = (0, _classnames.default)('p-autocomplete p-component', this.props.className, {
        'p-autocomplete-dd': this.props.dropdown,
        'p-autocomplete-multiple': this.props.multiple,
        'p-inputwrapper-filled': this.props.value,
        'p-inputwrapper-focus': this.focus
      });
      var loader = this.renderLoader();
      if (this.props.multiple) input = this.renderMultipleAutoComplete();else input = this.renderSimpleAutoComplete();

      if (this.props.dropdown) {
        dropdown = this.renderDropdown();
      }

      return /*#__PURE__*/_react.default.createElement("span", {
        ref: function ref(el) {
          return _this11.container = el;
        },
        id: this.props.id,
        style: this.props.style,
        className: className,
        "aria-haspopup": "listbox",
        "aria-expanded": this.panel && this.isPanelVisible(),
        "aria-owns": this.listId
      }, input, loader, dropdown, /*#__PURE__*/_react.default.createElement(_AutoCompletePanel.AutoCompletePanel, {
        ref: function ref(el) {
          return _this11.panel = el;
        },
        suggestions: this.props.suggestions,
        field: this.props.field,
        listId: this.listId,
        appendTo: this.props.appendTo,
        itemTemplate: this.props.itemTemplate,
        onItemClick: this.selectItem,
        ariaSelected: this.ariaSelected
      }));
    }
  }]);

  return AutoComplete;
}(_react.Component);

exports.AutoComplete = AutoComplete;

_defineProperty(AutoComplete, "defaultProps", {
  id: null,
  value: null,
  name: null,
  type: 'text',
  suggestions: null,
  field: null,
  scrollHeight: '200px',
  dropdown: false,
  dropdownMode: 'blank',
  multiple: false,
  minLength: 1,
  delay: 300,
  style: null,
  className: null,
  inputId: null,
  inputStyle: null,
  inputClassName: null,
  placeholder: null,
  readonly: false,
  disabled: false,
  maxlength: null,
  size: null,
  appendTo: null,
  tabindex: null,
  autoFocus: false,
  tooltip: null,
  tooltipOptions: null,
  ariaLabelledBy: null,
  completeMethod: null,
  itemTemplate: null,
  selectedItemTemplate: null,
  onChange: null,
  onFocus: null,
  onBlur: null,
  onSelect: null,
  onUnselect: null,
  onDropdownClick: null,
  onClick: null,
  onDblClick: null,
  onMouseDown: null,
  onKeyUp: null,
  onKeyPress: null,
  onContextMenu: null,
  onClear: null
});

_defineProperty(AutoComplete, "propTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.any,
  name: _propTypes.default.string,
  type: _propTypes.default.string,
  suggestions: _propTypes.default.array,
  field: _propTypes.default.string,
  scrollHeight: _propTypes.default.string,
  dropdown: _propTypes.default.bool,
  dropdownMode: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  minLength: _propTypes.default.number,
  delay: _propTypes.default.number,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  inputId: _propTypes.default.string,
  inputStyle: _propTypes.default.object,
  inputClassName: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  readonly: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  maxlength: _propTypes.default.number,
  size: _propTypes.default.number,
  appendTo: _propTypes.default.any,
  tabindex: _propTypes.default.number,
  autoFocus: _propTypes.default.bool,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  ariaLabelledBy: _propTypes.default.string,
  completeMethod: _propTypes.default.func,
  itemTemplate: _propTypes.default.func,
  selectedItemTemplate: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onUnselect: _propTypes.default.func,
  onDropdownClick: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onDblClick: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,
  onKeyUp: _propTypes.default.func,
  onKeyPress: _propTypes.default.func,
  onContextMenu: _propTypes.default.func,
  onClear: _propTypes.default.func
});