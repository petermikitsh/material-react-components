import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import PropTypes from 'prop-types';
import React from 'react';

var TableHead =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableHead, _React$Component);

  function TableHead() {
    _classCallCheck(this, TableHead);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableHead).apply(this, arguments));
  }

  _createClass(TableHead, [{
    key: "renderChildren",
    value: function renderChildren() {
      var children = this.props.children;
      return React.Children.map(children, function (child) {
        return React.cloneElement(child, {
          head: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["children"]);

      return React.createElement("thead", other, this.renderChildren());
    }
  }]);

  return TableHead;
}(React.Component);

TableHead.defaultProps = {
  children: null
};
export default TableHead;