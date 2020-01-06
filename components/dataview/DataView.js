"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataView = exports.DataViewLayoutOptions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paginator = require("../paginator/Paginator");

var _classnames = _interopRequireDefault(require("classnames"));

var _ObjectUtils = _interopRequireDefault(require("../utils/ObjectUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DataViewLayoutOptions =
/*#__PURE__*/
function (_Component) {
  _inherits(DataViewLayoutOptions, _Component);

  function DataViewLayoutOptions(props) {
    var _this;

    _classCallCheck(this, DataViewLayoutOptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataViewLayoutOptions).call(this, props));
    _this.changeLayout = _this.changeLayout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DataViewLayoutOptions, [{
    key: "changeLayout",
    value: function changeLayout(event, layoutMode) {
      this.props.onChange({
        originalEvent: event,
        value: layoutMode
      });
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0, _classnames.default)('p-dataview-layout-options p-selectbutton p-buttonset', this.props.className);
      var buttonListClass = (0, _classnames.default)("p-button p-button-icon-only", {
        'p-highlight': this.props.layout === 'list'
      });
      var buttonGridClass = (0, _classnames.default)("p-button p-button-icon-only", {
        'p-highlight': this.props.layout === 'grid'
      });
      return _react.default.createElement("div", {
        id: this.props.id,
        style: this.props.style,
        className: className
      }, _react.default.createElement("button", {
        className: buttonListClass,
        onClick: function onClick(event) {
          return _this2.changeLayout(event, 'list');
        }
      }, _react.default.createElement("i", {
        className: "pi pi-bars p-button-icon-left"
      }), _react.default.createElement("span", {
        className: "p-button-text p-clickable"
      }, "p-btn")), _react.default.createElement("button", {
        className: buttonGridClass,
        onClick: function onClick(event) {
          return _this2.changeLayout(event, 'grid');
        }
      }, _react.default.createElement("i", {
        className: "pi pi-th-large p-button-icon-left"
      }), _react.default.createElement("span", {
        className: "p-button-text p-clickable"
      }, "p-btn")));
    }
  }]);

  return DataViewLayoutOptions;
}(_react.Component);

exports.DataViewLayoutOptions = DataViewLayoutOptions;

_defineProperty(DataViewLayoutOptions, "defaultProps", {
  id: null,
  style: null,
  className: null,
  layout: null,
  onChange: null
});

_defineProperty(DataViewLayoutOptions, "propsTypes", {
  id: _propTypes.default.string,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  layout: null,
  onChange: _propTypes.default.func.isRequired
});

var DataViewItem =
/*#__PURE__*/
function (_Component2) {
  _inherits(DataViewItem, _Component2);

  function DataViewItem() {
    _classCallCheck(this, DataViewItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(DataViewItem).apply(this, arguments));
  }

  _createClass(DataViewItem, [{
    key: "render",
    value: function render() {
      return this.props.template(this.props.item, this.props.layout);
    }
  }]);

  return DataViewItem;
}(_react.Component);

_defineProperty(DataViewItem, "defaultProps", {
  template: null,
  item: null,
  layout: null
});

_defineProperty(DataViewItem, "propsTypes", {
  template: _propTypes.default.func,
  item: _propTypes.default.number,
  layout: _propTypes.default.string
});

var DataView =
/*#__PURE__*/
function (_Component3) {
  _inherits(DataView, _Component3);

  function DataView(props) {
    var _this3;

    _classCallCheck(this, DataView);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(DataView).call(this, props));

    if (!_this3.props.onPage) {
      _this3.state = {
        first: _this3.props.first,
        rows: _this3.props.rows
      };
    }

    _this3.sortChange = false;
    _this3.onPageChange = _this3.onPageChange.bind(_assertThisInitialized(_assertThisInitialized(_this3)));
    return _this3;
  }

  _createClass(DataView, [{
    key: "getTotalRecords",
    value: function getTotalRecords() {
      if (this.props.totalRecords) return this.props.totalRecords;else return this.props.value ? this.props.value.length : 0;
    }
  }, {
    key: "createPaginator",
    value: function createPaginator(position) {
      var className = 'p-paginator-' + position;
      var first = this.props.onPage ? this.props.first : this.state.first;
      var rows = this.props.onPage ? this.props.rows : this.state.rows;
      var totalRecords = this.getTotalRecords();
      return _react.default.createElement(_Paginator.Paginator, {
        first: first,
        rows: rows,
        pageLinkSize: this.props.pageLinkSize,
        className: className,
        onPageChange: this.onPageChange,
        template: this.props.paginatorTemplate,
        totalRecords: totalRecords,
        rowsPerPageOptions: this.props.rowsPerPageOptions,
        currentPageReportTemplate: this.props.currentPageReportTemplate,
        leftContent: this.props.paginatorLeft,
        rightContent: this.props.paginatorRight
      });
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(event) {
      if (this.props.onPage) {
        this.props.onPage({
          originalEvent: event,
          first: event.first,
          rows: event.rows
        });
      } else {
        this.setState({
          first: event.first,
          rows: event.rows
        });
      }
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return !this.props.value || this.props.value.length === 0;
    }
  }, {
    key: "sort",
    value: function sort() {
      var _this4 = this;

      if (this.props.value) {
        var value = _toConsumableArray(this.props.value);

        value.sort(function (data1, data2) {
          var value1 = _ObjectUtils.default.resolveFieldData(data1, _this4.props.sortField);

          var value2 = _ObjectUtils.default.resolveFieldData(data2, _this4.props.sortField);

          var result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return _this4.props.sortOrder * result;
        });
        return value;
      } else {
        return null;
      }
    }
  }, {
    key: "renderTopPaginator",
    value: function renderTopPaginator() {
      if (this.props.paginator && (this.props.paginatorPosition !== 'bottom' || this.props.paginatorPosition === 'both')) {
        return this.createPaginator('top');
      } else {
        return null;
      }
    }
  }, {
    key: "renderBottomPaginator",
    value: function renderBottomPaginator() {
      if (this.props.paginator && (this.props.paginatorPosition !== 'top' || this.props.paginatorPosition === 'both')) {
        return this.createPaginator('bottom');
      } else {
        return null;
      }
    }
  }, {
    key: "renderEmptyMessage",
    value: function renderEmptyMessage() {
      return _react.default.createElement("div", {
        className: "p-col-12"
      }, this.props.emptyMessage);
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      if (this.props.header) {
        return _react.default.createElement("div", {
          className: "p-dataview-header"
        }, this.props.header);
      } else {
        return null;
      }
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (this.props.footer) return _react.default.createElement("div", {
        className: "p-dataview-footer"
      }, " ", this.props.footer);else return null;
    }
  }, {
    key: "renderItems",
    value: function renderItems(value) {
      var _this5 = this;

      if (value && value.length) {
        if (this.props.paginator) {
          var rows = this.props.onPage ? this.props.rows : this.state.rows;
          var first = this.props.onPage ? this.props.first : this.state.first;
          var last = rows + first;
          var items = [];

          for (var i = first; i < last; i++) {
            items.push(_react.default.createElement(DataViewItem, {
              key: i,
              template: this.props.itemTemplate,
              layout: this.props.layout,
              item: value[i]
            }));
          }

          return items;
        } else {
          return value.map(function (item, index) {
            return _react.default.createElement(DataViewItem, {
              key: index,
              template: _this5.props.itemTemplate,
              layout: _this5.props.layout,
              item: item
            });
          });
        }
      } else {
        return this.renderEmptyMessage();
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(value) {
      var items = this.renderItems(value);
      return _react.default.createElement("div", {
        className: "p-dataview-content"
      }, _react.default.createElement("div", {
        className: "p-grid"
      }, items));
    }
  }, {
    key: "processData",
    value: function processData() {
      var data = this.props.value;

      if (data && data.length) {
        if (this.props.sortField) {
          data = this.sort();
        }
      }

      return data;
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.processData();
      var className = (0, _classnames.default)('p-dataview p-component', {
        'p-dataview-list': this.props.layout === 'list',
        'p-dataview-grid': this.props.layout === 'grid'
      }, this.props.className);
      var topPaginator = this.renderTopPaginator();
      var bottomPaginator = this.renderBottomPaginator();
      var header = this.renderHeader();
      var footer = this.renderFooter();
      var content = this.renderContent(value);
      return _react.default.createElement("div", {
        id: this.props.id,
        style: this.props.style,
        className: className
      }, header, topPaginator, content, bottomPaginator, footer);
    }
  }]);

  return DataView;
}(_react.Component);

exports.DataView = DataView;

_defineProperty(DataView, "defaultProps", {
  id: null,
  header: null,
  footer: null,
  value: null,
  layout: 'list',
  rows: null,
  first: 0,
  totalRecords: null,
  paginator: false,
  paginatorPosition: 'bottom',
  alwaysShowPaginator: true,
  paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  paginatorLeft: null,
  paginatorRight: null,
  pageLinkSize: 5,
  rowsPerPageOptions: null,
  currentPageReportTemplate: '({currentPage} of {totalPages})',
  emptyMessage: 'No records found',
  sortField: null,
  sortOrder: null,
  style: null,
  className: null,
  itemTemplate: null,
  onPage: null
});

_defineProperty(DataView, "propsTypes", {
  id: _propTypes.default.string,
  header: _propTypes.default.string,
  footer: _propTypes.default.string,
  value: _propTypes.default.array,
  layout: _propTypes.default.string,
  rows: _propTypes.default.number,
  first: _propTypes.default.number,
  totalRecords: _propTypes.default.number,
  paginator: _propTypes.default.bool,
  paginatorPosition: _propTypes.default.string,
  alwaysShowPaginator: _propTypes.default.bool,
  paginatorTemplate: _propTypes.default.string,
  paginatorLeft: _propTypes.default.any,
  paginatorRight: _propTypes.default.any,
  pageLinkSize: _propTypes.default.number,
  rowsPerPageOptions: _propTypes.default.array,
  currentPageReportTemplate: _propTypes.default.string,
  emptyMessage: _propTypes.default.string,
  sortField: _propTypes.default.string,
  sortOrder: _propTypes.default.number,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  itemTemplate: _propTypes.default.func.isRequired,
  onPage: _propTypes.default.func
});