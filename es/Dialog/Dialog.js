import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import PropTypes from 'prop-types';
import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import DialogInner from './DialogInner';

function FirstChild(props) {
  var childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "register", function (c) {
      _this.inner = c;
    });

    return _this;
  }

  _createClass(Dialog, [{
    key: "render",
    value: function render() {
      return React.createElement(TransitionGroup, {
        component: FirstChild
      }, this.props.open && React.createElement(DialogInner, _extends({}, this.props, {
        ref: this.register
      })));
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.defaultProps = {
  open: false
};
export default Dialog;