"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _UITreeNode = require("./UITreeNode");

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

var Tree =
/*#__PURE__*/
function (_Component) {
  _inherits(Tree, _Component);

  function Tree(props) {
    var _this;

    _classCallCheck(this, Tree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tree).call(this, props));

    if (!_this.props.onToggle) {
      _this.state = {
        expandedKeys: _this.props.expandedKeys
      };
    }

    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDragStart = _this.onDragStart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDragEnd = _this.onDragEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDropPoint = _this.onDropPoint.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Tree, [{
    key: "getExpandedKeys",
    value: function getExpandedKeys() {
      return this.props.onToggle ? this.props.expandedKeys : this.state.expandedKeys;
    }
  }, {
    key: "onToggle",
    value: function onToggle(event) {
      if (this.props.onToggle) {
        this.props.onToggle(event);
      } else {
        this.setState({
          expandedKeys: event.value
        });
      }
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event) {
      this.dragState = {
        path: event.path,
        index: event.index
      };
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd() {
      this.dragState = null;
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      if (this.validateDropNode(this.dragState.path, event.path)) {
        var value = JSON.parse(JSON.stringify(this.props.value));
        var dragPaths = this.dragState.path.split('-');
        dragPaths.pop();
        var dragNodeParent = this.findNode(value, dragPaths);
        var dragNode = dragNodeParent ? dragNodeParent.children[this.dragState.index] : value[this.dragState.index];
        var dropNode = this.findNode(value, event.path.split('-'));
        if (dropNode.children) dropNode.children.push(dragNode);else dropNode.children = [dragNode];
        if (dragNodeParent) dragNodeParent.children.splice(this.dragState.index, 1);else value.splice(this.dragState.index, 1);

        if (this.props.onDragDrop) {
          this.props.onDragDrop({
            originalEvent: event.originalEvent,
            value: value
          });
        }
      }
    }
  }, {
    key: "onDropPoint",
    value: function onDropPoint(event) {
      if (this.validateDropPoint(event)) {
        var value = JSON.parse(JSON.stringify(this.props.value));
        var dragPaths = this.dragState.path.split('-');
        dragPaths.pop();
        var dropPaths = event.path.split('-');
        dropPaths.pop();
        var dragNodeParent = this.findNode(value, dragPaths);
        var dropNodeParent = this.findNode(value, dropPaths);
        var dragNode = dragNodeParent ? dragNodeParent.children[this.dragState.index] : value[this.dragState.index];
        var siblings = this.areSiblings(this.dragState.path, event.path);
        if (dragNodeParent) dragNodeParent.children.splice(this.dragState.index, 1);else value.splice(this.dragState.index, 1);

        if (event.position < 0) {
          var dropIndex = siblings ? this.dragState.index > event.index ? event.index : event.index - 1 : event.index;
          if (dropNodeParent) dropNodeParent.children.splice(dropIndex, 0, dragNode);else value.splice(dropIndex, 0, dragNode);
        } else {
          if (dropNodeParent) dropNodeParent.children.push(dragNode);else value.push(dragNode);
        }

        if (this.props.onDragDrop) {
          this.props.onDragDrop({
            originalEvent: event.originalEvent,
            value: value
          });
        }
      }
    }
  }, {
    key: "validateDrop",
    value: function validateDrop(dragPath, dropPath) {
      if (!dragPath) {
        return false;
      } else {
        //same node
        if (dragPath === dropPath) {
          return false;
        } //parent dropped on an descendant


        if (dropPath.indexOf(dragPath) === 0) {
          return false;
        }

        return true;
      }
    }
  }, {
    key: "validateDropNode",
    value: function validateDropNode(dragPath, dropPath) {
      var validateDrop = this.validateDrop(dragPath, dropPath);

      if (validateDrop) {
        //child dropped on parent
        if (dragPath.indexOf('-') > 0 && dragPath.substring(0, dragPath.lastIndexOf('-')) === dropPath) {
          return false;
        }

        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "validateDropPoint",
    value: function validateDropPoint(event) {
      var validateDrop = this.validateDrop(this.dragState.path, event.path);

      if (validateDrop) {
        //child dropped to next sibling's drop point
        if (event.position === -1 && this.areSiblings(this.dragState.path, event.path) && this.dragState.index + 1 === event.index) {
          return false;
        }

        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "areSiblings",
    value: function areSiblings(path1, path2) {
      if (path1.length === 1 && path2.length === 1) return true;else return path1.substring(0, path1.lastIndexOf('-')) === path2.substring(0, path2.lastIndexOf('-'));
    }
  }, {
    key: "findNode",
    value: function findNode(value, path) {
      if (path.length === 0) {
        return null;
      } else {
        var index = parseInt(path[0], 10);
        var nextSearchRoot = value.children ? value.children[index] : value[index];

        if (path.length === 1) {
          return nextSearchRoot;
        } else {
          path.shift();
          return this.findNode(nextSearchRoot, path);
        }
      }
    }
  }, {
    key: "renderRootChild",
    value: function renderRootChild(node, index, last) {
      return _react.default.createElement(_UITreeNode.UITreeNode, {
        key: node.key || node.label,
        node: node,
        index: index,
        last: last,
        path: String(index),
        selectionMode: this.props.selectionMode,
        selectionKeys: this.props.selectionKeys,
        onSelectionChange: this.props.onSelectionChange,
        metaKeySelection: this.props.metaKeySelection,
        contextMenuSelectionKey: this.props.contextMenuSelectionKey,
        onContextMenuSelectionChange: this.props.onContextMenuSelectionChange,
        onContextMenu: this.props.onContextMenu,
        propagateSelectionDown: this.props.propagateSelectionDown,
        propagateSelectionUp: this.props.propagateSelectionUp,
        onExpand: this.props.onExpand,
        onCollapse: this.props.onCollapse,
        onSelect: this.props.onSelect,
        onUnselect: this.props.onUnselect,
        expandedKeys: this.getExpandedKeys(),
        onToggle: this.onToggle,
        nodeTemplate: this.props.nodeTemplate,
        dragdropScope: this.props.dragdropScope,
        onDragStart: this.onDragStart,
        onDragEnd: this.onDragEnd,
        onDrop: this.onDrop,
        onDropPoint: this.onDropPoint
      });
    }
  }, {
    key: "renderRootChildren",
    value: function renderRootChildren() {
      var _this2 = this;

      return this.props.value.map(function (node, index) {
        return _this2.renderRootChild(node, index, index === _this2.props.value.length - 1);
      });
    }
  }, {
    key: "renderModel",
    value: function renderModel() {
      if (this.props.value) {
        var rootNodes = this.renderRootChildren();
        return _react.default.createElement("ul", {
          className: "p-tree-container",
          role: "tree",
          "aria-label": this.props.ariaLabel,
          "aria-labelledby": this.props.ariaLabelledBy
        }, rootNodes);
      } else {
        return null;
      }
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      if (this.props.loading) {
        var icon = (0, _classnames.default)('p-tree-loading-icon pi-spin', this.props.loadingIcon);
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: "p-tree-loading-mask p-component-overlay"
        }), _react.default.createElement("div", {
          className: "p-tree-loading-content"
        }, _react.default.createElement("i", {
          className: icon
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0, _classnames.default)('p-tree p-component', {
        'p-tree-selectable': this.props.selectionMode,
        'p-tree-loading': this.props.loading
      });
      var loader = this.renderLoader();
      var content = this.renderModel();
      return _react.default.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, loader, content);
    }
  }]);

  return Tree;
}(_react.Component);

exports.Tree = Tree;

_defineProperty(Tree, "defaultProps", {
  id: null,
  value: null,
  selectionMode: null,
  selectionKeys: null,
  onSelectionChange: null,
  contextMenuSelectionKey: null,
  onContextMenuSelectionChange: null,
  expandedKeys: null,
  style: null,
  className: null,
  metaKeySelection: true,
  propagateSelectionUp: true,
  propagateSelectionDown: true,
  loading: false,
  loadingIcon: 'pi pi-spinner',
  dragdropScope: null,
  nodeTemplate: null,
  onSelect: null,
  onUnselect: null,
  onExpand: null,
  onCollapse: null,
  onToggle: null,
  onDragDrop: null,
  onContextMenu: null
});

_defineProperty(Tree, "propsTypes", {
  id: _propTypes.default.string,
  value: _propTypes.default.any.isRequired,
  selectionMode: _propTypes.default.string,
  selectionKeys: _propTypes.default.any,
  onSelectionChange: _propTypes.default.func,
  contextMenuSelectionKey: _propTypes.default.any,
  onContextMenuSelectionChange: _propTypes.default.func,
  expandedKeys: _propTypes.default.object,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  metaKeySelection: _propTypes.default.bool,
  propagateSelectionUp: _propTypes.default.bool,
  propagateSelectionDown: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  loadingIcon: _propTypes.default.string,
  dragdropScope: _propTypes.default.string,
  nodeTemplate: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onUnselect: _propTypes.default.func,
  onExpand: _propTypes.default.func,
  onCollapse: _propTypes.default.func,
  onToggle: _propTypes.default.func,
  onDragDrop: _propTypes.default.func,
  onContextMenu: _propTypes.default.func
});