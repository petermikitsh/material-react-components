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

require("./TextFieldAnimations.css");

var Animations = {
  "sink": "TextFieldAnimations-sink",
  "float": "TextFieldAnimations-float"
};

require("./TextField.css");

var Styles = {
  "root": "TextField-root",
  "input": "TextField-input",
  "inkbar": "TextField-inkbar",
  "stretch": "TextField-stretch",
  "label": "TextField-label",
  "hasPlaceholder": "TextField-hasPlaceholder",
  "hasValue": "TextField-hasValue",
  "helper": "TextField-helper",
  "shadow": "TextField-shadow",
  "textarea": "TextField-textarea"
};

var TextField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField(props) {
    var _this;

    _classCallCheck(this, TextField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextField).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerShadowTextArea", function (c) {
      _this.shadow = c;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerFormElement", function (c) {
      _this.formElement = c;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerLabel", function (c) {
      _this.label = c;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getColor", function () {
      var fallback = 'rgba(0,0,0,.54)';
      var _this$props = _this.props,
          errorColor = _this$props.errorColor,
          primaryColor = _this$props.primaryColor;
      var focused = _this.state.focused;

      if (errorColor) {
        return errorColor;
      }

      if (focused) {
        return primaryColor || fallback;
      }

      return fallback;
    });

    _this.fixHeight = _this.fixHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      focused: false
    };
    return _this;
  }

  _createClass(TextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.fixHeight);

      if (this.props.multiline) {
        this.fixHeight();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value,
          placeholder = _ref.placeholder;
      var oldValue = this.props.value;
      var oldPlaceholder = this.props.placeholder;

      if (document.activeElement !== this.formElement) {
        if (!oldValue && value && !placeholder || !oldPlaceholder && placeholder) {
          this.label.style.animationName = Animations.float;
        } else if (oldValue && !value && !placeholder || !value && oldPlaceholder && !placeholder) {
          this.label.style.animationName = Animations.sink;
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var multiline = _ref2.multiline;

      if (!multiline && this.props.multiline) {
        this.fixHeight();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.fixHeight);
      this.label.style.animationName = '';
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          placeholder = _this$props2.placeholder;

      if (!value && !placeholder) {
        this.label.style.animationName = Animations.sink;
      }

      this.setState({
        focused: false
      });
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.fixHeight(e);
      this.props.onChange(e);
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          placeholder = _this$props3.placeholder;

      if (!value && !placeholder) {
        this.label.style.animationName = Animations.float;
      }

      this.setState({
        focused: true
      });
    }
  }, {
    key: "fixHeight",
    value: function fixHeight(e) {
      /* Reset height to auto to ensure textfield height decreases when text is removed */
      if (this.props.multiline) {
        if (e && e.target && e.target.value) {
          this.shadow.value = e.target.value;
        }

        var newHeight = this.shadow.scrollHeight + 20;
        this.formElement.style.height = "".concat(newHeight, "px");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _makeClass;

      var _this$props4 = this.props,
          errorColor = _this$props4.errorColor,
          helperText = _this$props4.helperText,
          label = _this$props4.label,
          labelId = _this$props4.labelId,
          placeholder = _this$props4.placeholder,
          value = _this$props4.value,
          multiline = _this$props4.multiline,
          primaryColor = _this$props4.primaryColor,
          width = _this$props4.width,
          other = _objectWithoutProperties(_this$props4, ["errorColor", "helperText", "label", "labelId", "placeholder", "value", "multiline", "primaryColor", "width"]);

      var FormComponent = multiline ? 'textarea' : 'input';
      var notEmpty = value && value.length > 0;
      return React.createElement("div", {
        className: Styles.root,
        style: {
          width: width
        }
      }, multiline && React.createElement("textarea", {
        ref: this.registerShadowTextArea,
        className: Styles.shadow,
        readOnly: true,
        tabIndex: -1,
        value: value
      }), React.createElement(FormComponent, _extends({}, other, {
        ref: this.registerFormElement,
        "aria-labelledby": labelId,
        className: makeClass(Styles.input, (_makeClass = {}, _defineProperty(_makeClass, Styles.textarea, multiline), _defineProperty(_makeClass, Styles.hasPlaceholder, placeholder), _defineProperty(_makeClass, Styles.hasValue, notEmpty), _makeClass)),
        onBlur: this.onBlur,
        onChange: this.onChange,
        onFocus: this.onFocus,
        placeholder: placeholder,
        value: value
      })), React.createElement("label", {
        ref: this.registerLabel,
        className: Styles.label,
        id: labelId,
        style: {
          color: this.getColor()
        }
      }, label), React.createElement("div", {
        className: Styles.inkbar,
        style: {
          borderBottomColor: this.getColor()
        }
      }), React.createElement("div", {
        className: Styles.helper,
        style: {
          color: errorColor || 'rgba(0,0,0,.54)'
        }
      }, helperText));
    }
  }]);

  return TextField;
}(React.Component);

TextField.defaultProps = {
  errorColor: null,
  helperText: null,
  labelId: null,
  placeholder: null,
  primaryColor: null,
  multiline: false,
  width: '100%'
};
export default TextField;