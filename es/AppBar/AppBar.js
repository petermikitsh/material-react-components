import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Paper from '../Paper';
import Typography from '../Typography';
import Variables from '../variables';

require("./AppBar.css");

var Styles = {
  "root": "AppBar-root",
  "header": "AppBar-header",
  "headerColor": "AppBar-headerColor",
  "primary": "AppBar-primary",
  "secondary": "AppBar-secondary",
  "headerNoPrimary": "AppBar-headerNoPrimary"
};

function AppBar(_ref) {
  var backgroundColor = _ref.backgroundColor,
      className = _ref.className,
      elevation = _ref.elevation,
      children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary,
      other = _objectWithoutProperties(_ref, ["backgroundColor", "className", "elevation", "children", "primary", "secondary"]);

  return React.createElement(Paper, _extends({}, other, {
    backgroundColor: backgroundColor,
    className: makeClass(Styles.root, className),
    elevation: elevation
  }), primary && React.createElement("span", {
    className: Styles.primary
  }, primary), React.createElement(Typography, {
    component: "span",
    className: makeClass(Styles.header, Styles.headerColor, _defineProperty({}, Styles.headerNoPrimary, !primary)),
    type: "title"
  }, children), secondary && React.createElement("span", {
    className: Styles.secondary
  }, secondary));
}

AppBar.defaultProps = {
  backgroundColor: Variables.$primary,
  className: '',
  children: null,
  elevation: 4,
  primary: null,
  secondary: null
};
export default AppBar;