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

var GridStyles = {
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

require("./GridItem.css");

var Styles = {
  "root": "GridItem-root",
  "xs-1": "GridItem-xs-1",
  "xs-2": "GridItem-xs-2",
  "xs-3": "GridItem-xs-3",
  "xs-4": "GridItem-xs-4",
  "xs-5": "GridItem-xs-5",
  "xs-6": "GridItem-xs-6",
  "xs-7": "GridItem-xs-7",
  "xs-8": "GridItem-xs-8",
  "xs-9": "GridItem-xs-9",
  "xs-10": "GridItem-xs-10",
  "xs-11": "GridItem-xs-11",
  "xs-12": "GridItem-xs-12",
  "sm-1": "GridItem-sm-1",
  "sm-2": "GridItem-sm-2",
  "sm-3": "GridItem-sm-3",
  "sm-4": "GridItem-sm-4",
  "sm-5": "GridItem-sm-5",
  "sm-6": "GridItem-sm-6",
  "sm-7": "GridItem-sm-7",
  "sm-8": "GridItem-sm-8",
  "sm-9": "GridItem-sm-9",
  "sm-10": "GridItem-sm-10",
  "sm-11": "GridItem-sm-11",
  "sm-12": "GridItem-sm-12",
  "md-1": "GridItem-md-1",
  "md-2": "GridItem-md-2",
  "md-3": "GridItem-md-3",
  "md-4": "GridItem-md-4",
  "md-5": "GridItem-md-5",
  "md-6": "GridItem-md-6",
  "md-7": "GridItem-md-7",
  "md-8": "GridItem-md-8",
  "md-9": "GridItem-md-9",
  "md-10": "GridItem-md-10",
  "md-11": "GridItem-md-11",
  "md-12": "GridItem-md-12",
  "lg-1": "GridItem-lg-1",
  "lg-2": "GridItem-lg-2",
  "lg-3": "GridItem-lg-3",
  "lg-4": "GridItem-lg-4",
  "lg-5": "GridItem-lg-5",
  "lg-6": "GridItem-lg-6",
  "lg-7": "GridItem-lg-7",
  "lg-8": "GridItem-lg-8",
  "lg-9": "GridItem-lg-9",
  "lg-10": "GridItem-lg-10",
  "lg-11": "GridItem-lg-11",
  "lg-12": "GridItem-lg-12"
};

var GridItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridItem, _React$Component);

  function GridItem() {
    _classCallCheck(this, GridItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridItem).apply(this, arguments));
  }

  _createClass(GridItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          other = _objectWithoutProperties(_this$props, ["children", "className", "xs", "sm", "md", "lg"]);

      var classes = makeClass(Styles.root, GridStyles.gutterChild, Styles["xs-".concat(xs)], Styles["sm-".concat(sm)], Styles["md-".concat(md)], Styles["lg-".concat(lg)]);
      return React.createElement("div", _extends({}, other, {
        className: makeClass(className, classes)
      }), children);
    }
  }]);

  return GridItem;
}(React.Component);

GridItem.defaultProps = {
  children: null,
  className: null,
  xs: 12,
  sm: 0,
  md: 0,
  lg: 0
};
export default GridItem;