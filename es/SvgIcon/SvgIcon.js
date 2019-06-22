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
import Button from '../Button';

require("./SvgIcon.css");

var Styles = {
  "root": "SvgIcon-root"
};
/* This wrapper is a necessary abstraction since IE11 makes
 * SVG's tab key focusable, even when tabindex = -1.
 */

var SvgIcon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SvgIcon, _React$Component);

  function SvgIcon() {
    _classCallCheck(this, SvgIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(SvgIcon).apply(this, arguments));
  }

  _createClass(SvgIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          buttonProps = _this$props.buttonProps,
          component = _this$props.component,
          other = _objectWithoutProperties(_this$props, ["buttonProps", "component"]);

      var Component = component;
      return React.createElement(Button, _extends({
        icon: true
      }, buttonProps, {
        className: makeClass(Styles.root, buttonProps.className)
      }), React.createElement(Component, _extends({
        focusable: "false"
      }, other)));
    }
  }]);

  return SvgIcon;
}(React.Component);

SvgIcon.defaultProps = {
  buttonProps: {
    className: null
  }
};
export default SvgIcon;