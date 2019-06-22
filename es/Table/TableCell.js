import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

require("./TableCell.css");

var Styles = {
  "cell": "TableCell-cell",
  "head": "TableCell-head"
};

var TableCell =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableCell, _React$Component);

  function TableCell() {
    _classCallCheck(this, TableCell);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableCell).apply(this, arguments));
  }

  _createClass(TableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          head = _this$props.head,
          other = _objectWithoutProperties(_this$props, ["children", "className", "head"]);

      var Component = head ? 'th' : 'td';
      var classnames = makeClass(Styles.cell, _defineProperty({}, Styles.head, head), className);
      return React.createElement(Component, _extends({
        className: classnames
      }, other), children);
    }
  }]);

  return TableCell;
}(React.Component);

TableCell.defaultProps = {
  children: null,
  className: '',
  head: false
};
export default TableCell;