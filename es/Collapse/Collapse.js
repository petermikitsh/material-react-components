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

require("./Collapse.css");

var Styles = {
  "root": "Collapse-root"
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerRoot", function (c) {
      _this.root = c;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerInner", function (c) {
      _this.rootInner = c;
    });

    _this.state = {
      height: props.open ? null : 0
    };
    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.open) {
        this.setState({
          // eslint-disable-line react/no-did-mount-set-state
          height: "".concat(this.rootInner.offsetHeight, "px")
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var open = _ref.open;

      if (!this.props.open && open) {
        this.setState({
          height: "".concat(this.rootInner.offsetHeight, "px")
        });
      } else if (this.props.open && !open) {
        this.setState({
          height: '0'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          children = _this$props.children,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["open", "children", "className"]);

      return React.createElement("div", _extends({}, other, {
        ref: this.registerRoot,
        className: makeClass(Styles.root, className),
        style: {
          height: this.state.height,
          overflow: this.state.overflow
        }
      }), React.createElement("div", {
        ref: this.registerInner
      }, children));
    }
  }]);

  return Collapse;
}(React.Component);

Collapse.defaultProps = {
  children: null,
  className: null,
  open: false
};
export default Collapse;