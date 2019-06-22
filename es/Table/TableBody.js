import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import PropTypes from 'prop-types';
import React from 'react';

var TableBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableBody, _React$Component);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableBody).apply(this, arguments));
  }

  _createClass(TableBody, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement("tbody", other, children);
    }
  }]);

  return TableBody;
}(React.Component);

TableBody.defaultProps = {
  children: null
};
export default TableBody;