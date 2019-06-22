import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

require("./Table.css");

var Styles = {
  "container": "Table-container",
  "table": "Table-table"
};

var Table =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["children", "className"]);

      return React.createElement("div", {
        className: makeClass(Styles.container, className)
      }, React.createElement("table", _extends({
        className: Styles.table
      }, other), children));
    }
  }]);

  return Table;
}(React.Component);

Table.defaultProps = {
  children: null,
  className: ''
};
export default Table;