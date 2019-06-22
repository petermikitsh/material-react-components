import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

require("./RippleItem.css");

var Styles = {
  "container": "RippleItem-container",
  "containerLeaving": "RippleItem-containerLeaving",
  "exit": "RippleItem-exit",
  "containerPulsating": "RippleItem-containerPulsating",
  "pulsate": "RippleItem-pulsate",
  "ripple": "RippleItem-ripple",
  "rippleVisible": "RippleItem-rippleVisible",
  "enter": "RippleItem-enter",
  "rippleFast": "RippleItem-rippleFast"
};

var RippleItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RippleItem, _React$Component);

  function RippleItem(props) {
    var _this;

    _classCallCheck(this, RippleItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RippleItem).call(this, props));
    _this.rippleStyles = _this.rippleStyles.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      rippleVisible: false,
      rippleLeaving: false
    };
    return _this;
  }

  _createClass(RippleItem, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: "componentWillLeave",
    value: function componentWillLeave(cb) {
      var _this2 = this;

      this.stop(function () {
        _this2.leaveTimer = setTimeout(function () {
          cb();
        }, 550);
      });
    }
  }, {
    key: "componentWillEnter",
    value: function componentWillEnter(cb) {
      this.start(cb);
    }
  }, {
    key: "start",
    value: function start(cb) {
      this.setState({
        rippleVisible: true
      }, cb);
    }
  }, {
    key: "stop",
    value: function stop(cb) {
      this.setState({
        rippleLeaving: true
      }, cb);
    }
  }, {
    key: "rippleStyles",
    value: function rippleStyles() {
      var _this$props = this.props,
          color = _this$props.color,
          rippleSize = _this$props.rippleSize,
          rippleX = _this$props.rippleX,
          rippleY = _this$props.rippleY;
      var rippleStyles = {
        backgroundColor: color,
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
      };
      return rippleStyles;
    }
  }, {
    key: "render",
    value: function render() {
      var _makeClass, _makeClass2;

      var pulsate = this.props.pulsate;
      var _this$state = this.state,
          rippleLeaving = _this$state.rippleLeaving,
          rippleVisible = _this$state.rippleVisible;
      var containerClasses = makeClass(Styles.container, (_makeClass = {}, _defineProperty(_makeClass, Styles.containerLeaving, rippleLeaving), _defineProperty(_makeClass, Styles.containerPulsating, pulsate && !rippleLeaving), _makeClass));
      var rippleClasses = makeClass(Styles.ripple, (_makeClass2 = {}, _defineProperty(_makeClass2, Styles.rippleVisible, rippleVisible), _defineProperty(_makeClass2, Styles.rippleFast, pulsate), _makeClass2));
      return React.createElement("span", {
        className: containerClasses
      }, React.createElement("span", {
        className: rippleClasses,
        style: this.rippleStyles()
      }));
    }
  }]);

  return RippleItem;
}(React.Component);

RippleItem.defaultProps = {
  color: 'rgba(0, 0, 0, 0.87)',
  rippleX: 0,
  rippleY: 0,
  rippleSize: 0,
  pulsate: false
};
export default RippleItem;