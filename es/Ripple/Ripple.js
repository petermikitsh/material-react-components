import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import PropTypes from 'prop-types';
import React from 'react';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';
import RippleItem from './RippleItem';

require("./Ripple.css");

var Styles = {
  "root": "Ripple-root"
};
/* Usage note: the parent DOM element must have relative positioning. */

var Ripple =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Ripple, _React$Component);

  function Ripple(props) {
    var _this;

    _classCallCheck(this, Ripple);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ripple).call(this, props));
    _this.add = _this.add.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.remove = _this.remove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.ignoringMouseDown = false;
    _this.state = {
      nextKey: 0,
      ripples: []
    };
    return _this;
  }

  _createClass(Ripple, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.color !== nextProps.color || this.state.ripples.length !== nextState.ripples.length || this.state.nextKey !== nextState.nextKey;
    }
  }, {
    key: "add",
    value: function add(e, options) {
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      if (e.type === 'mousedown' && this.ignoringMouseDown) {
        this.ignoringMouseDown = false;
        return;
      }

      if (e.type === 'touchstart') {
        this.ignoringMouseDown = true;
      }

      var centered = options && options.centered ? options.centered : false;
      var pulsate = options && options.pulsate ? options.pulsate : false;

      var _e$target$getBounding = e.target.getBoundingClientRect(),
          left = _e$target$getBounding.left,
          top = _e$target$getBounding.top,
          bottom = _e$target$getBounding.bottom,
          right = _e$target$getBounding.right,
          height = _e$target$getBounding.height,
          width = _e$target$getBounding.width;

      var props = {};

      if (centered) {
        props.rippleX = width / 2;
        props.rippleY = height / 2;
      } else {
        var clientX = e.clientX ? e.clientX : e.touches[0].clientX;
        var clientY = e.clientY ? e.clientY : e.touches[0].clientY;
        props.rippleX = clientX - left;
        props.rippleY = clientY - top;
      }

      var rippleSize = centered ? Math.sqrt((2 * Math.pow(width, 2) + Math.pow(height, 2)) / 3) : Math.sqrt(Math.pow(right - left, 2) + Math.pow(bottom - top, 2)) * 2;
      var ripples = this.state.ripples;
      ripples = _toConsumableArray(ripples).concat([React.createElement(RippleItem, _extends({
        key: this.state.nextKey,
        color: this.props.color,
        pulsate: pulsate,
        rippleSize: rippleSize
      }, props))]);
      this.setState(function (prevState) {
        return {
          nextKey: prevState.nextKey + 1,
          ripples: ripples
        };
      }, cb);
    }
  }, {
    key: "remove",
    value: function remove(e, opts) {
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var ripples = this.state.ripples;
      this.setState({
        ripples: opts && opts.removeAll ? [] : ripples.slice(1)
      }, cb);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(ReactTransitionGroup, {
        component: "span",
        transitionEnterTimeout: 550,
        transitionLeaveTimeout: 550,
        className: Styles.root
      }, this.state.ripples);
    }
  }]);

  return Ripple;
}(React.Component);

_defineProperty(Ripple, "defaultProps", {
  color: 'rgba(0, 0, 0, 0.87)'
});

export default Ripple;