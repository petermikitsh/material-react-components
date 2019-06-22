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
import Paper from '../Paper';

require("./Dialog.css");

var Styles = {
  "root": "Dialog-root",
  "fadeout": "Dialog-fadeout",
  "open": "Dialog-open",
  "fadein": "Dialog-fadein",
  "backdrop": "Dialog-backdrop",
  "dialog": "Dialog-dialog",
  "title": "Dialog-title",
  "description": "Dialog-description",
  "actions": "Dialog-actions"
};

var DialogInner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DialogInner, _React$Component);

  function DialogInner(props) {
    var _this;

    _classCallCheck(this, DialogInner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DialogInner).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTouchMove", function (e) {
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerRoot", function (c) {
      _this.root = c;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerActions", function (c) {
      _this.actions = c;
    });

    _this.onBackwardTab = _this.onBackwardTab.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onForwardTab = _this.onForwardTab.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DialogInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', this.onKeyDown);
      this.lastFocusBeforeDialog = document.activeElement;
      this.root.focus();
      this.lastOnTouchMove = document.ontouchmove || null;
      document.ontouchmove = this.onTouchMove;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.ontouchmove = this.lastOnTouchMove;
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (this.props.open) {
        var keyCode = e.keyCode;
        var isTab = keyCode === 9;
        var isEsc = keyCode === 27;

        if (isTab) {
          if (this.actions.children.length <= 1) {
            e.preventDefault();
          } else if (e.shiftKey) {
            this.onBackwardTab(e);
          } else {
            this.onForwardTab(e);
          }
        }

        if (isEsc) {
          this.props.onClose();
        }
      }
    }
  }, {
    key: "onForwardTab",
    value: function onForwardTab(e) {
      if (document.activeElement === this.actions.lastChild) {
        e.preventDefault();
        this.actions.firstChild.focus();
      }
    }
  }, {
    key: "onBackwardTab",
    value: function onBackwardTab(e) {
      if (document.activeElement === this.actions.firstChild) {
        e.preventDefault();
        this.actions.lastChild.focus();
      }
    }
  }, {
    key: "componentWillLeave",
    value: function componentWillLeave(callback) {
      var _this2 = this;

      this.root.style.animationName = Styles.fadeout;
      window.removeEventListener('keydown', this.onKeyDown);

      if (this.lastFocusBeforeDialog.focus) {
        this.lastFocusBeforeDialog.focus();
      }

      setTimeout(function () {
        _this2.root.style.animationName = '';
        document.body.style.overflow = '';
        callback();
      }, 350);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          actions = _this$props.actions,
          className = _this$props.className,
          description = _this$props.description,
          onClose = _this$props.onClose,
          open = _this$props.open,
          title = _this$props.title,
          other = _objectWithoutProperties(_this$props, ["actions", "className", "description", "onClose", "open", "title"]);

      return React.createElement("div", _extends({}, other, {
        ref: this.registerRoot,
        className: makeClass(Styles.root, _defineProperty({}, Styles.open, open), className),
        onKeyDown: false ? this.onKeyDown : this.ontouchmove,
        role: "document",
        tabIndex: -1
      }), React.createElement("div", {
        onClick: this.props.onClose,
        className: Styles.backdrop
      }), React.createElement(Paper, {
        elevation: 25,
        className: Styles.dialog
      }, React.createElement("div", {
        className: Styles.title
      }, title), React.createElement("div", {
        className: Styles.description
      }, description), React.createElement("div", {
        ref: this.registerActions,
        className: Styles.actions
      }, actions)));
    }
  }]);

  return DialogInner;
}(React.Component);

DialogInner.defaultProps = {
  actions: [],
  className: null,
  description: null,
  onClose: function onClose() {},
  open: false,
  title: null
};
export default DialogInner;