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
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

require("./List.css");

var Styles = {
  "root": "List-root"
};

var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerRoot", function (c) {
      _this.root = c;
    });

    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(List, [{
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var _this$props;

      var keyCode = e.keyCode;
      var isDown = keyCode === 40;
      var isUp = keyCode === 38;

      if (isDown || isUp) {
        e.preventDefault();
        var nodeOfInterest = isUp ? 'previousElementSibling' : 'nextElementSibling';
        var nextListItem = e.target.parentElement;

        if (nextListItem && nextListItem[nodeOfInterest]) {
          nextListItem[nodeOfInterest].firstChild.focus();
        }
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$props = this.props).onKeyDown.apply(_this$props, [e].concat(args));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          arrowNavigation = _this$props2.arrowNavigation,
          children = _this$props2.children,
          className = _this$props2.className,
          onKeyDown = _this$props2.onKeyDown,
          other = _objectWithoutProperties(_this$props2, ["arrowNavigation", "children", "className", "onKeyDown"]);

      return React.createElement("div", _extends({}, other, {
        ref: this.registerRoot,
        className: makeClass(Styles.root, className)
      }), React.Children.map(children, function (child) {
        var props = {
          buttonProps: _objectSpread({}, child.props.buttonProps, {
            focusRippleDisabled: true
          })
        };

        if (arrowNavigation) {
          props.onKeyDown = _this2.onKeyDown;
        }

        return React.cloneElement(child, props);
      }));
    }
  }]);

  return List;
}(React.Component);

List.defaultProps = {
  arrowNavigation: false,
  children: null,
  className: null,
  onKeyDown: function onKeyDown() {},
  style: {}
};
export default List;