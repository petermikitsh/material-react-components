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
import DOMBodyRender from '../utils/DOMBodyRender';
import Typography from '../Typography';

require("./SnackBar.css");

var Styles = {
  "root": "SnackBar-root",
  "overlay": "SnackBar-overlay",
  "snackbar": "SnackBar-snackbar",
  "show": "SnackBar-show",
  "snackbarWrapper": "SnackBar-snackbarWrapper",
  "message": "SnackBar-message",
  "button": "SnackBar-button",
  "delay": "SnackBar-delay",
  "hide": "SnackBar-hide"
};

var SnackBarItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SnackBarItem, _React$Component);

  function SnackBarItem(props) {
    var _this;

    _classCallCheck(this, SnackBarItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SnackBarItem).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerAction", function (c) {
      _this.action = c;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerSnackbar", function (c) {
      _this.snackbar = c;
    });

    _this.handleOverlayClick = _this.handleOverlayClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.makeAction = _this.makeAction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SnackBarItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.action) {
        findDOMNode(this.action).focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "componentWillEnter",
    value: function componentWillEnter(cb) {
      this.timeout = setTimeout(function () {
        cb();
      }, 550);
    }
  }, {
    key: "componentWillLeave",
    value: function componentWillLeave(cb) {
      var _this2 = this;

      this.props.handleTransition();
      this.snackbar.style.animationDelay = '0ms';
      this.snackbar.style.animationName = Styles.hide;
      this.timeout = setTimeout(function () {
        cb();

        _this2.props.handleTransition();
      }, 550);
    }
  }, {
    key: "handleOverlayClick",
    value: function handleOverlayClick() {
      if (!this.props.transitioning) {
        this.props.onClose();
      }
    }
  }, {
    key: "makeAction",
    value: function makeAction() {
      var _this3 = this;

      var action = this.props.action;
      return React.cloneElement(action, {
        className: makeClass(action.props.className, Styles.button),
        onClick: function onClick() {
          _this3.handleOverlayClick();

          if (action.props.onClick) {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            action.props.onClick(args);
          }
        },
        ref: this.registerAction
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          action = _this$props.action,
          delay = _this$props.delay,
          message = _this$props.message;
      return React.createElement(DOMBodyRender, null, React.createElement("div", {
        className: Styles.root
      }, React.createElement("div", {
        className: Styles.overlay,
        onClick: this.handleOverlayClick
      }), React.createElement("div", {
        className: Styles.snackbarWrapper
      }, React.createElement("div", {
        ref: this.registerSnackbar,
        className: makeClass(Styles.snackbar, _defineProperty({}, Styles.delay, delay))
      }, React.createElement(Typography, {
        type: "body1",
        className: Styles.message
      }, message), action && this.makeAction()))));
    }
  }]);

  return SnackBarItem;
}(React.Component);

SnackBarItem.defaultProps = {
  action: null,
  delay: false,
  handleTransition: function handleTransition() {},
  message: null,
  onClose: function onClose() {},
  transitioning: false
};
export default SnackBarItem;