import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import React from 'react';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';

var SnackBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SnackBar, _React$Component);

  function SnackBar(props) {
    var _this;

    _classCallCheck(this, SnackBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SnackBar).call(this, props));
    _this.queue = _this.queue.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.dequeue = _this.dequeue.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTransition = _this.handleTransition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      delay: false,
      index: 0,
      SnackBarItems: [],
      transitioning: false
    };
    return _this;
  }

  _createClass(SnackBar, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.transitioning !== nextState.transitioning || nextState.SnackBarItems.length === 1 || this.state.SnackBarItems.length - 1 === nextState.SnackBarItems.length;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "queue",
    value: function queue(SnackBarItem) {
      var _this2 = this;

      this.timeout = setTimeout(function () {
        _this2.setState(function (prevState) {
          var newElement = React.cloneElement(SnackBarItem, {
            key: prevState.index
          });
          return {
            delay: prevState.SnackBarItems.length !== 0,
            index: prevState.index + 1,
            SnackBarItems: _toConsumableArray(prevState.SnackBarItems).concat([newElement])
          };
        });
      });
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      this.setState(function (prevState) {
        var newitems = prevState.SnackBarItems.slice(1);
        return {
          delay: !newitems.length !== 0,
          SnackBarItems: newitems
        };
      });
    }
  }, {
    key: "handleTransition",
    value: function handleTransition() {
      this.setState(function (prevState) {
        return {
          transitioning: !prevState.transitioning
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.state.SnackBarItems[0];
      return React.createElement(ReactTransitionGroup, {
        component: "span"
      }, item && React.cloneElement(item, {
        onClose: this.dequeue,
        delay: this.state.delay,
        handleTransition: this.handleTransition,
        transitioning: this.state.transitioning
      }));
    }
  }]);

  return SnackBar;
}(React.Component);

export default SnackBar;