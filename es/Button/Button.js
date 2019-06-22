import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { findDOMNode } from 'react-dom';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import tinycolor from 'tinycolor2';
import Ripple from '../Ripple';
import variables from '../variables';
import Typography from '../Typography';

require("./Button.css");

var Styles = {
  "root": "Button-root",
  "hasBackground": "Button-hasBackground",
  "fab": "Button-fab",
  "label": "Button-label",
  "isNotFab": "Button-isNotFab",
  "isIcon": "Button-isIcon",
  "lightText": "Button-lightText",
  "darkText": "Button-darkText"
};
var touchEvents = ['mouseDown', 'mouseUp', 'touchStart', 'touchEnd'];

function rippleMiddleware(instance, eventName, cb) {
  return function (e) {
    if (!instance.props.focusRippleDisabled || instance.props.focusRippleDisabled && touchEvents.indexOf(eventName) > -1) {
      return cb.call(instance, e);
    }

    return true;
  };
}

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hover: false,
      mouseFocused: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseDown", rippleMiddleware(_assertThisInitialized(_assertThisInitialized(_this)), 'mouseDown', function (e) {
      e.persist();

      _this.setState({
        mouseFocused: true
      });

      if (findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))) === document.activeElement) {
        _this.ripple.remove(e, {}, function () {
          _this.ripple.add(e, {
            centered: _this.props.icon
          });
        });
      } else {
        _this.ripple.add(e, {
          centered: _this.props.icon
        });
      }
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseUp", rippleMiddleware(_assertThisInitialized(_assertThisInitialized(_this)), 'mouseUp', function (e) {
      _this.ripple.remove(e);
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", rippleMiddleware(_assertThisInitialized(_assertThisInitialized(_this)), 'mouseEnter', function () {
      _this.setState({
        hover: true
      });
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", rippleMiddleware(_assertThisInitialized(_assertThisInitialized(_this)), 'mouseLeave', function () {
      _this.setState({
        hover: false
      });
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", rippleMiddleware(_assertThisInitialized(_assertThisInitialized(_this)), 'keyDown', function (e) {
      var _this$props;

      _this.setState({
        mouseFocused: false
      });

      var keyCode = e.keyCode;
      var isEnter = keyCode === 13;
      var isSpace = keyCode === 32;
      var isAnchorTag = findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))).tagName === 'A';

      if (isEnter || !isAnchorTag && isSpace) {
        e.persist();

        _this.ripple.remove(e, {}, function () {
          return _this.ripple.add(e, {
            pulsate: true,
            centered: true
          });
        });
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (_this$props = _this.props).onKeyDown.apply(_this$props, [e].concat(args));
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", rippleMiddleware(_assertThisInitialized(_assertThisInitialized(_this)), 'focus', function (e) {
      if (!_this.state.mouseFocused) {
        _this.ripple.add(e, {
          pulsate: !_this.props.icon,
          centered: true
        });
      }
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", rippleMiddleware(_assertThisInitialized(_assertThisInitialized(_this)), 'blur', function (e) {
      _this.ripple.remove(e);

      _this.setState({
        mouseFocused: false
      });
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchStart", rippleMiddleware(_assertThisInitialized(_assertThisInitialized(_this)), 'touchStart', function (e) {
      _this.ripple.add(e, {
        centered: _this.props.icon
      });
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchEnd", rippleMiddleware(_assertThisInitialized(_assertThisInitialized(_this)), 'touchEnd', function (e) {
      _this.ripple.remove(e);
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTextColor", function () {
      var _this$props2 = _this.props,
          buttonColor = _this$props2.buttonColor,
          textColor = _this$props2.textColor;

      if (buttonColor && !textColor) {
        return _this.readableTextColor();
      }

      if (textColor) {
        return textColor;
      }

      return variables.$black87;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getBackgroundColor", function () {
      var _this$props3 = _this.props,
          buttonColor = _this$props3.buttonColor,
          icon = _this$props3.icon,
          textColor = _this$props3.textColor;
      var hover = _this.state.hover;

      if (hover && !icon) {
        if (buttonColor) {
          return tinycolor(buttonColor).darken(5).toString();
        }

        if (textColor) {
          return tinycolor(textColor).setAlpha(0.15).toString();
        }

        return tinycolor('rgba(0, 0, 0, 0.12)').toString();
      }

      return buttonColor;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "readableTextColor", function () {
      var buttonColor = _this.props.buttonColor;
      var colors = [variables.$white, variables.$black87];
      return tinycolor.mostReadable(buttonColor, colors).toString();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerRipple", function (c) {
      _this.ripple = c;
    });

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _makeClass;

      var _this$props4 = this.props,
          buttonColor = _this$props4.buttonColor,
          children = _this$props4.children,
          className = _this$props4.className,
          component = _this$props4.component,
          focusRippleDisabled = _this$props4.focusRippleDisabled,
          icon = _this$props4.icon,
          fab = _this$props4.fab,
          style = _this$props4.style,
          textColor = _this$props4.textColor,
          other = _objectWithoutProperties(_this$props4, ["buttonColor", "children", "className", "component", "focusRippleDisabled", "icon", "fab", "style", "textColor"]);

      var Component = component;
      var readableTextColor = this.readableTextColor();
      return React.createElement(Component, _extends({
        tabIndex: 0
      }, other, {
        className: makeClass(Styles.root, (_makeClass = {}, _defineProperty(_makeClass, Styles.hasBackground, buttonColor), _defineProperty(_makeClass, Styles.isIcon, icon), _defineProperty(_makeClass, Styles.fab, fab), _defineProperty(_makeClass, Styles.isNotFab, !fab), _defineProperty(_makeClass, Styles.lightText, readableTextColor === variables.$white), _defineProperty(_makeClass, Styles.darkText, readableTextColor !== variables.$black87), _makeClass), className),
        onKeyDown: this.onKeyDown,
        onBlur: this.onBlur,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onTouchEnd,
        onFocus: this.onFocus,
        style: _objectSpread({
          backgroundColor: this.getBackgroundColor()
        }, style)
      }), React.createElement(Typography, {
        type: "button",
        className: Styles.label,
        style: {
          color: this.getTextColor()
        }
      }, children), React.createElement(Ripple, {
        ref: this.registerRipple,
        color: icon ? variables.$black87 : textColor
      }));
    }
  }]);

  return Button;
}(React.Component);

Button.defaultProps = {
  buttonColor: null,
  children: null,
  className: null,
  component: 'button',
  fab: false,
  focusRippleDisabled: false,
  icon: false,
  onKeyDown: function onKeyDown() {},
  style: null,
  textColor: null
};
export default Button;