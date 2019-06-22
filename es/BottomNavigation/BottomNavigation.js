import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';

require("./BottomNavigation.css");

var Styles = {
  "root": "BottomNavigation-root"
};

function BottomNavigation(_ref) {
  var children = _ref.children,
      other = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement("div", _extends({}, other, {
    className: Styles.root
  }), children);
}

BottomNavigation.defaultProps = {
  children: null
};
export default BottomNavigation;