"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

var OverlayPanel = /*#__PURE__*/function (_Component) {
  _inherits(OverlayPanel, _Component);

  var _super = _createSuper(OverlayPanel);

  function OverlayPanel(props) {
    var _this;

    _classCallCheck(this, OverlayPanel);

    _this = _super.call(this, props);
    _this.onCloseClick = _this.onCloseClick.bind(_assertThisInitialized(_this));
    _this.onPanelClick = _this.onPanelClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OverlayPanel, [{
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this2 = this;

      if (!this.documentClickListener && this.props.dismissable) {
        this.documentClickListener = function (event) {
          if (!_this2.isPanelClicked && _this2.isOutsideClicked(event)) {
            _this2.hide();
          }

          _this2.isPanelClicked = false;
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
      return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();
    }
  }, {
    key: "onCloseClick",
    value: function onCloseClick(event) {
      this.hide();
      event.preventDefault();
    }
  }, {
    key: "onPanelClick",
    value: function onPanelClick() {
      this.isPanelClicked = true;
    }
  }, {
    key: "toggle",
    value: function toggle(event, target) {
      var _this3 = this;

      if (this.isVisible()) {
        this.hide();

        if (this.hasTargetChanged(event, target)) {
          this.target = target || event.currentTarget || event.target;
          setTimeout(function () {
            _this3.show(event, _this3.target);
          }, 200);
        }
      } else {
        this.show(event, target);
      }
    }
  }, {
    key: "show",
    value: function show(event, target) {
      this.target = target || event.currentTarget || event.target;
      this.bindDocumentClickListener();
      this.container.style.zIndex = String(_DomHandler.default.generateZIndex());

      if (this.isVisible()) {
        this.align();
      } else {
        this.container.style.display = 'block';
        this.align();

        _DomHandler.default.fadeIn(this.container, 250);
      }
    }
  }, {
    key: "align",
    value: function align() {
      if (this.target) {
        _DomHandler.default.absolutePosition(this.container, this.target);

        if (_DomHandler.default.getOffset(this.container).top < _DomHandler.default.getOffset(this.target).top) {
          _DomHandler.default.addClass(this.container, 'p-overlaypanel-flipped');
        }
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.isVisible()) {
        this.container.style.display = 'none';

        _DomHandler.default.removeClass(this.container, 'p-overlaypanel-flipped');

        this.unbindDocumentClickListener();

        if (this.props.onHide) {
          this.props.onHide();
        }
      }
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.container && this.container.offsetParent;
    }
  }, {
    key: "hasTargetChanged",
    value: function hasTargetChanged(event, target) {
      return this.target != null && this.target !== (target || event.currentTarget || event.target);
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      if (this.props.showCloseIcon) {
        return /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          className: "p-overlaypanel-close p-link",
          onClick: this.onCloseClick,
          "aria-label": this.props.ariaCloseLabel
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "p-overlaypanel-close-icon pi pi-times"
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this4 = this;

      var className = (0, _classnames.default)('p-overlaypanel p-component', this.props.className);
      var closeIcon = this.renderCloseIcon();
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(el) {
          return _this4.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style,
        onClick: this.onPanelClick
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "p-overlaypanel-content"
      }, this.props.children), closeIcon);
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();

      if (this.props.appendTo) {
        return _reactDom.default.createPortal(element, this.props.appendTo);
      } else {
        return element;
      }
    }
  }]);

  return OverlayPanel;
}(_react.Component);

exports.OverlayPanel = OverlayPanel;

_defineProperty(OverlayPanel, "defaultProps", {
  id: null,
  dismissable: true,
  showCloseIcon: false,
  style: null,
  className: null,
  appendTo: null,
  ariaCloseLabel: 'close',
  onHide: null
});

_defineProperty(OverlayPanel, "propTypes", {
  id: _propTypes.default.string,
  dismissable: _propTypes.default.bool,
  showCloseIcon: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  appendTo: _propTypes.default.any,
  ariaCloseLabel: _propTypes.default.string,
  onHide: _propTypes.default.func
});