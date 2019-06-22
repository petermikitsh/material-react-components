import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import React from 'react';
import PropTypes from 'prop-types';
import { render, unmountComponentAtNode } from 'react-dom';

var DOMBodyRender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DOMBodyRender, _React$Component);

  function DOMBodyRender(props) {
    var _this;

    _classCallCheck(this, DOMBodyRender);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DOMBodyRender).call(this, props));
    _this.node = null;
    _this.renderNode = _this.renderNode.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.unrenderNode = _this.unrenderNode.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DOMBodyRender, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderNode();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderNode();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unrenderNode();
    }
  }, {
    key: "unrenderNode",
    value: function unrenderNode() {
      if (!this.node) {
        return;
      }

      unmountComponentAtNode(this.node);

      if (document && document.body) {
        document.body.removeChild(this.node);
      }
    }
  }, {
    key: "renderNode",
    value: function renderNode() {
      if (!this.node) {
        this.node = document.createElement('div');

        if (document && document.body) {
          document.body.appendChild(this.node);
        }
      }

      render(this.props.children, this.node);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return DOMBodyRender;
}(React.Component);

DOMBodyRender.defaultProps = {
  children: null
};
export default DOMBodyRender;