import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import Typography from '../Typography';

require("./ListItem.css");

var Styles = {
  "root": "ListItem-root",
  "button": "ListItem-button",
  "avatar": "ListItem-avatar",
  "text": "ListItem-text",
  "textWithAvatarOrAction": "ListItem-textWithAvatarOrAction",
  "action": "ListItem-action",
  "primary": "ListItem-primary",
  "primaryText": "ListItem-primaryText",
  "secondary": "ListItem-secondary",
  "secondaryText": "ListItem-secondaryText"
};

var ListItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerButton", function (c) {
      _this.Button = c;
    });

    return _this;
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          action = _this$props.action,
          buttonProps = _this$props.buttonProps,
          avatar = _this$props.avatar,
          className = _this$props.className,
          primary = _this$props.primary,
          secondary = _this$props.secondary,
          other = _objectWithoutProperties(_this$props, ["action", "buttonProps", "avatar", "className", "primary", "secondary"]);

      return React.createElement("div", _extends({}, other, {
        className: makeClass(Styles.root, className)
      }), React.createElement(Button, _extends({}, buttonProps, {
        ref: this.registerButton,
        className: Styles.button
      }), avatar && React.createElement("div", {
        className: Styles.avatar
      }, React.cloneElement(avatar, {
        focusable: 'false'
      })), React.createElement("div", {
        className: makeClass(Styles.text, _defineProperty({}, Styles.textWithAvatarOrAction, avatar || action))
      }, primary && React.createElement(Typography, {
        className: makeClass(Styles.primary, Styles.primaryText),
        type: "subheading"
      }, primary), secondary && React.createElement(Typography, {
        className: makeClass(Styles.secondary, Styles.secondaryText),
        type: "body1"
      }, secondary))), action && React.createElement("div", {
        className: Styles.action
      }, action));
    }
  }]);

  return ListItem;
}(React.Component);

ListItem.defaultProps = {
  action: null,
  avatar: null,
  buttonProps: {},
  className: null,
  primary: null,
  secondary: null
};
export default ListItem;