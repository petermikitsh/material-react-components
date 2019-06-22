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

require("./Switch.css");

var Styles = {
  "root": "Switch-root",
  "disabled": "Switch-disabled",
  "switchWrapper": "Switch-switchWrapper",
  "input": "Switch-input",
  "track": "Switch-track",
  "thumb": "Switch-thumb",
  "thumbKeyboardFocus": "Switch-thumbKeyboardFocus",
  "label": "Switch-label"
};

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerInput", function (c) {
      _this.input = c;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getTrackColor", function () {
      var _this$props = _this.props,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          primaryColor = _this$props.primaryColor;

      if (disabled) {
        return '#bdbdbd';
      }

      if (checked) {
        return primaryColor || '#2196f3';
      }

      return '#000';
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getThumbColor", function () {
      var _this$props2 = _this.props,
          checked = _this$props2.checked,
          disabled = _this$props2.disabled,
          primaryColor = _this$props2.primaryColor;

      if (disabled && checked) {
        return '#bdbdbd';
      }

      if (checked) {
        return primaryColor || '#2196f3';
      }

      return '#FFF';
    });

    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyUp = _this.onKeyUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getTrackColor = _this.getTrackColor.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getThumbColor = _this.getThumbColor.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      keyboardFocused: false
    };
    return _this;
  }

  _createClass(Switch, [{
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        keyboardFocused: false
      });
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.input.click();
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(_ref) {
      var keyCode = _ref.keyCode;
      var isTab = keyCode === 9;
      var isSpace = keyCode === 32;
      this.setState({
        keyboardFocused: isTab || isSpace
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          checked = _this$props3.checked,
          disabled = _this$props3.disabled,
          label = _this$props3.label,
          labelId = _this$props3.labelId,
          onChange = _this$props3.onChange,
          primaryColor = _this$props3.primaryColor,
          style = _this$props3.style,
          props = _objectWithoutProperties(_this$props3, ["checked", "disabled", "label", "labelId", "onChange", "primaryColor", "style"]);

      var keyboardFocused = this.state.keyboardFocused;
      return React.createElement("div", {
        className: makeClass(Styles.root, _defineProperty({}, Styles.disabled, disabled)),
        onMouseUp: this.onMouseUp,
        style: style
      }, React.createElement("div", {
        className: Styles.switchWrapper
      }, React.createElement("input", _extends({}, props, {
        ref: this.registerInput,
        "aria-labelledby": labelId,
        checked: checked,
        className: Styles.input,
        disabled: disabled,
        onBlur: this.onBlur,
        onChange: onChange,
        onKeyUp: this.onKeyUp,
        type: "checkbox"
      })), React.createElement("div", {
        className: Styles.track,
        style: {
          backgroundColor: this.getTrackColor()
        }
      }), React.createElement("div", {
        className: makeClass(Styles.thumb, _defineProperty({}, Styles.thumbKeyboardFocus, keyboardFocused)),
        style: {
          backgroundColor: this.getThumbColor()
        }
      })), React.createElement("label", {
        id: labelId,
        className: Styles.label
      }, label));
    }
  }]);

  return Switch;
}(React.Component);

Switch.defaultProps = {
  checked: false,
  disabled: false,
  label: null,
  labelId: null,
  primaryColor: null,
  style: {}
};
export default Switch;