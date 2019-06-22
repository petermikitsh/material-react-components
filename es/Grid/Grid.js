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

require("./Grid.css");

var Styles = {
  "root": "Grid-root",
  "margin-0": "Grid-margin-0",
  "margin-8": "Grid-margin-8",
  "margin-16": "Grid-margin-16",
  "margin-24": "Grid-margin-24",
  "margin-40": "Grid-margin-40",
  "gutter": "Grid-gutter",
  "gutter-8": "Grid-gutter-8",
  "gutterChild": "Grid-gutterChild",
  "gutter-16": "Grid-gutter-16",
  "gutter-24": "Grid-gutter-24",
  "gutter-40": "Grid-gutter-40"
};

var Grid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          margin = _this$props.margin,
          gutter = _this$props.gutter,
          other = _objectWithoutProperties(_this$props, ["children", "className", "margin", "gutter"]);

      var rootClasses = makeClass(Styles.root, Styles["margin-".concat(margin)], className);
      var gutterClasses = makeClass(Styles.gutter, Styles["gutter-".concat(gutter)]);
      return React.createElement("div", {
        className: rootClasses
      }, React.createElement("div", _extends({
        className: gutterClasses
      }, other), children));
    }
  }]);

  return Grid;
}(React.Component);

Grid.defaultProps = {
  children: null,
  className: null,
  gutter: 0,
  margin: 0
};
export default Grid;