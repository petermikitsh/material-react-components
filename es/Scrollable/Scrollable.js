import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

require("./Scrollable.css");

var Styles = {
  "root": "Scrollable-root"
};

var Scrollable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scrollable, _React$Component);

  function Scrollable() {
    _classCallCheck(this, Scrollable);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scrollable).apply(this, arguments));
  }

  _createClass(Scrollable, [{
    key: "render",
    value: function render() {
      var firstChild = React.Children.only(this.props.children);
      return React.cloneElement(firstChild, {
        className: makeClass(Styles.root, firstChild.props.className)
      });
    }
  }]);

  return Scrollable;
}(React.Component);

Scrollable.defaultProps = {
  children: null
};
export default Scrollable;