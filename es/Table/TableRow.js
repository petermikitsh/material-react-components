import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import PropTypes from 'prop-types';
import React from 'react';

var TableRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableRow, _React$Component);

  function TableRow() {
    _classCallCheck(this, TableRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableRow).apply(this, arguments));
  }

  _createClass(TableRow, [{
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props = this.props,
          children = _this$props.children,
          head = _this$props.head;
      return React.Children.map(children, function (child) {
        return React.cloneElement(child, {
          head: head
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          head = _this$props2.head,
          other = _objectWithoutProperties(_this$props2, ["children", "head"]);

      return React.createElement("tr", other, this.renderChildren());
    }
  }]);

  return TableRow;
}(React.Component);

TableRow.defaultProps = {
  children: null,
  head: false
};
export default TableRow;