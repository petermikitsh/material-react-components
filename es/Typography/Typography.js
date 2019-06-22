import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

require("./Typography.css");

var Styles = {
  "display4": "Typography-display4",
  "display3": "Typography-display3",
  "display2": "Typography-display2",
  "display1": "Typography-display1",
  "headline": "Typography-headline",
  "title": "Typography-title",
  "subheading": "Typography-subheading",
  "body2": "Typography-body2",
  "body1": "Typography-body1",
  "caption": "Typography-caption",
  "button": "Typography-button"
};

function Typography(_ref) {
  var children = _ref.children,
      className = _ref.className,
      component = _ref.component,
      type = _ref.type,
      other = _objectWithoutProperties(_ref, ["children", "className", "component", "type"]);

  var Component = component;
  return React.createElement(Component, _extends({}, other, {
    className: makeClass([Styles[type]], className)
  }), children);
}

Typography.defaultProps = {
  children: null,
  className: null,
  component: 'div',
  type: 'body1'
};
export default Typography;