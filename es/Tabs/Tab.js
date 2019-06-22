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
import Variables from '../variables';

require("./Tab.css");

var Styles = {
  "tab": "Tab-tab",
  "tabFixed": "Tab-tabFixed",
  "button": "Tab-button",
  "label": "Tab-label",
  "indicator": "Tab-indicator"
};

var Tab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderIndicator", function () {
      return React.createElement("div", {
        "aria-hidden": true,
        className: Styles.indicator,
        style: {
          backgroundColor: _this.props.indicatorColor
        }
      });
    });

    return _this;
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          selected = _this$props.selected,
          type = _this$props.type,
          index = _this$props.index,
          indexChanged = _this$props.indexChanged,
          indicatorColor = _this$props.indicatorColor,
          other = _objectWithoutProperties(_this$props, ["label", "selected", "type", "index", "indexChanged", "indicatorColor"]);

      var showInitialIndicator = selected && !indexChanged;
      var isFixed = type === 'fixed';
      return React.createElement(Button, _extends({}, other, {
        className: makeClass(Styles.button, _defineProperty({}, Styles.tabFixed, isFixed)),
        role: "tab",
        "aria-selected": selected
      }), React.createElement("div", {
        className: Styles.label
      }, label), showInitialIndicator && this.renderIndicator());
    }
  }]);

  return Tab;
}(React.Component);

Tab.defaultProps = {
  index: null,
  indexChanged: true,
  indicatorColor: Variables.$accent,
  label: null,
  selected: false,
  type: 'fixed'
};
export default Tab;