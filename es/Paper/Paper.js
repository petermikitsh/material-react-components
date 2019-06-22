import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

require("./Paper.css");

var Styles = {
  "root": "Paper-root",
  "elevation1": "Paper-elevation1",
  "elevation2": "Paper-elevation2",
  "elevation3": "Paper-elevation3",
  "elevation4": "Paper-elevation4",
  "elevation5": "Paper-elevation5",
  "elevation6": "Paper-elevation6",
  "elevation7": "Paper-elevation7",
  "elevation8": "Paper-elevation8",
  "elevation9": "Paper-elevation9",
  "elevation10": "Paper-elevation10",
  "elevation11": "Paper-elevation11",
  "elevation12": "Paper-elevation12",
  "elevation13": "Paper-elevation13",
  "elevation14": "Paper-elevation14",
  "elevation15": "Paper-elevation15",
  "elevation16": "Paper-elevation16",
  "elevation17": "Paper-elevation17",
  "elevation18": "Paper-elevation18",
  "elevation19": "Paper-elevation19",
  "elevation20": "Paper-elevation20",
  "elevation21": "Paper-elevation21",
  "elevation22": "Paper-elevation22",
  "elevation23": "Paper-elevation23",
  "elevation24": "Paper-elevation24",
  "elevation25": "Paper-elevation25"
};

var Paper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Paper, _React$Component);

  function Paper() {
    _classCallCheck(this, Paper);

    return _possibleConstructorReturn(this, _getPrototypeOf(Paper).apply(this, arguments));
  }

  _createClass(Paper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          backgroundColor = _this$props.backgroundColor,
          children = _this$props.children,
          className = _this$props.className,
          elevation = _this$props.elevation,
          style = _this$props.style,
          other = _objectWithoutProperties(_this$props, ["backgroundColor", "children", "className", "elevation", "style"]);

      return React.createElement("div", _extends({}, other, {
        className: makeClass(className, Styles.root, Styles["elevation".concat(elevation)]),
        style: _objectSpread({}, style, {
          backgroundColor: backgroundColor
        })
      }), children);
    }
  }]);

  return Paper;
}(React.Component);

Paper.defaultProps = {
  backgroundColor: '#fff',
  children: null,
  className: '',
  elevation: 1,
  style: {}
};
export default Paper;