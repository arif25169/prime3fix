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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OverlayPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(OverlayPanel, _Component);

  function OverlayPanel(props) {
    var _this;

    _classCallCheck(this, OverlayPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OverlayPanel).call(this, props));
    _this.onPanelClick = _this.onPanelClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onCloseClick = _this.onCloseClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(OverlayPanel, [{
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      if (!this.documentClickListener) {
        this.documentClickListener = this.onDocumentClick.bind(this);
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();
    }
  }, {
    key: "onDocumentClick",
    value: function onDocumentClick() {
      if (!this.selfClick && !this.targetEvent) {
        this.hide();
      }

      this.selfClick = false;
      this.targetEvent = false;
    }
  }, {
    key: "onPanelClick",
    value: function onPanelClick() {
      if (this.props.dismissable) {
        this.selfClick = true;
      }
    }
  }, {
    key: "onCloseClick",
    value: function onCloseClick(event) {
      this.hide();

      if (this.dismissable) {
        this.selfClick = true;
      }

      event.preventDefault();
    }
  }, {
    key: "toggle",
    value: function toggle(event, target) {
      var currentTarget = target || event.currentTarget || event.target;
      if (this.isVisible()) this.hide();else this.show(event, currentTarget);
    }
  }, {
    key: "show",
    value: function show(event, target) {
      if (this.props.dismissable) {
        if (this.documentClickListener) {
          this.targetEvent = true;
        }

        this.bindDocumentClickListener();
      }

      this.container.style.zIndex = String(_DomHandler.default.generateZIndex());

      if (this.isVisible()) {
        _DomHandler.default.absolutePosition(this.container, target);
      } else {
        this.container.style.display = 'block';

        _DomHandler.default.absolutePosition(this.container, target);

        _DomHandler.default.fadeIn(this.container, 250);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.isVisible()) {
        this.container.style.display = 'none';
        this.unbindDocumentClickListener();
      }
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      return this.container && this.container.offsetParent;
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      if (this.props.showCloseIcon) {
        return _react.default.createElement("button", {
          className: "p-overlaypanel-close p-link",
          onClick: this.onCloseClick
        }, _react.default.createElement("span", {
          className: "p-overlaypanel-close-icon pi pi-times"
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this2 = this;

      var className = (0, _classnames.default)('p-overlaypanel p-component', this.props.className);
      var closeIcon = this.renderCloseIcon();
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style,
        onClick: this.onPanelClick,
        ref: function ref(el) {
          _this2.container = el;
        }
      }, _react.default.createElement("div", {
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
  appendTo: null
});

_defineProperty(OverlayPanel, "propTypes", {
  id: _propTypes.default.string,
  dismissable: _propTypes.default.bool,
  showCloseIcon: _propTypes.default.bool,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  appendTo: _propTypes.default.any
});