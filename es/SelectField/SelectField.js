import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import DropDownIcon from 'material-design-icons/navigation/svg/production/ic_arrow_drop_down_24px.svg';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';

require("./SelectField.css");

var Styles = {
  "root": "SelectField-root",
  "icon": "SelectField-icon",
  "helperText": "SelectField-helperText",
  "label": "SelectField-label",
  "hasValue": "SelectField-hasValue",
  "inkbar": "SelectField-inkbar",
  "select": "SelectField-select",
  "stretch": "SelectField-stretch"
};

var SelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectField, _React$Component);

  function SelectField(props) {
    var _this;

    _classCallCheck(this, SelectField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectField).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SelectField, [{
    key: "onChange",
    value: function onChange() {
      var _this$props;

      (_this$props = this.props).onChange.apply(_this$props, arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          errorColor = _this$props2.errorColor,
          helperText = _this$props2.helperText,
          id = _this$props2.id,
          label = _this$props2.label,
          value = _this$props2.value,
          other = _objectWithoutProperties(_this$props2, ["children", "disabled", "errorColor", "helperText", "id", "label", "value"]);

      return React.createElement("div", {
        className: Styles.root
      }, React.createElement("label", {
        className: makeClass(Styles.label, _defineProperty({}, Styles.hasValue, value)),
        htmlFor: id,
        style: {
          color: errorColor
        }
      }, label), React.createElement("select", _extends({
        "aria-invalid": Boolean(errorColor),
        className: Styles.select,
        disabled: disabled,
        id: id,
        onChange: this.onChange,
        value: value
      }, other), children), React.createElement(DropDownIcon, {
        className: Styles.icon,
        focusable: "false"
      }), React.createElement("div", {
        className: Styles.inkbar,
        style: {
          borderBottomColor: errorColor
        }
      }), React.createElement(Typography, {
        className: Styles.helperText,
        style: {
          color: errorColor
        },
        type: "caption"
      }, helperText));
    }
  }]);

  return SelectField;
}(React.Component);

SelectField.defaultProps = {
  children: null,
  disabled: false,
  errorColor: null,
  helperText: null,
  id: null,
  label: null,
  onChange: function onChange() {},
  value: {}
};
export default SelectField;