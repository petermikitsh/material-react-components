import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';

require("./BottomNavigationItem.css");

var Styles = {
  "root": "BottomNavigationItem-root"
};

function BottomNavigationItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement(Button, _extends({}, other, {
    className: makeClass(Styles.root, className)
  }), children);
}

BottomNavigationItem.defaultProps = {
  children: null,
  className: null
};
export default BottomNavigationItem;