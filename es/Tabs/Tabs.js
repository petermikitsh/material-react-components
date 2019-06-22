import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { findDOMNode } from 'react-dom';
import makeClass from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Variables from '../variables';
import ScrollbarSize from './ScrollbarSize';

require("./Tabs.css");

var Styles = {
  "tabs": "Tabs-tabs",
  "tabsInner": "Tabs-tabsInner",
  "tabList": "Tabs-tabList",
  "tabListFixed": "Tabs-tabListFixed",
  "indicator": "Tabs-indicator"
};

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      indicatorLeft: 0,
      indicatorWidth: 0,
      scrollbarHeight: 0,
      indexChanged: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (e, index) {
      _this.props.onChange(e, index);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMetadata", function (nextIndex) {
      var meta = {};

      if (_this.tabsInner) {
        meta.tabsMeta = _this.tabsInner.getBoundingClientRect();
        meta.tabsMeta.scrollLeft = _this.tabsInner.scrollLeft;
      }

      var index = typeof nextIndex === 'number' ? nextIndex : _this.props.index;
      var currentTab = findDOMNode(_this.tabs[index]);

      if (currentTab) {
        meta.tabMeta = currentTab.getBoundingClientRect();
      }

      return meta;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setIndicatorStyles", function (nextIndex) {
      var _this$getMetadata = _this.getMetadata(nextIndex),
          tabsMeta = _this$getMetadata.tabsMeta,
          tabMeta = _this$getMetadata.tabMeta;

      var indicatorLeft = "".concat(tabMeta.left + (tabsMeta.scrollLeft - tabsMeta.left), "px");
      var indicatorWidth = "".concat(tabMeta.width, "px");

      if (_this.state.indicatorLeft !== indicatorLeft || _this.state.indicatorWidth !== indicatorWidth) {
        _this.setState({
          indicatorLeft: indicatorLeft,
          indicatorWidth: indicatorWidth
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tabs", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollbarSizeLoad", function (_ref) {
      var scrollbarHeight = _ref.scrollbarHeight;

      _this.setState({
        scrollbarHeight: scrollbarHeight
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollbarSizeChange", function (scrollbarHeight) {
      _this.setState({
        scrollbarHeight: scrollbarHeight
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerTab", function (c) {
      if (c) {
        _this.tabs[c.props.index] = c;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "registerTabsInner", function (c) {
      _this.tabsInner = c;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderTabs", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          indicatorColor = _this$props.indicatorColor,
          textColor = _this$props.textColor,
          type = _this$props.type;
      var indexChanged = _this.state.indexChanged;
      return React.Children.map(children, function (tab, i) {
        return React.cloneElement(tab, {
          index: i,
          indexChanged: indexChanged,
          indicatorColor: indicatorColor,
          onClick: function onClick(e) {
            return _this.onClick(e, i);
          },
          ref: _this.registerTab,
          selected: i === _this.props.index,
          style: {
            boxShadow: 'none'
          },
          textColor: textColor,
          type: type
        });
      });
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setIndicatorStyles();
      window.addEventListener('resize', this.setIndicatorStyles);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.index !== nextProps.index) {
        this.setState({
          indexChanged: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var index = _ref2.index,
          type = _ref2.type;

      if (this.props.index !== index || this.props.type !== type) {
        this.setIndicatorStyles();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setIndicatorStyles);
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          barColor = _this$props2.barColor,
          className = _this$props2.className,
          style = _this$props2.style,
          type = _this$props2.type,
          indicatorColor = _this$props2.indicatorColor,
          textColor = _this$props2.textColor,
          index = _this$props2.index,
          other = _objectWithoutProperties(_this$props2, ["barColor", "className", "style", "type", "indicatorColor", "textColor", "index"]);

      var isFixed = type === 'fixed';
      var isCentered = type === 'centered';
      var scrollbarHeight = this.state.scrollbarHeight;
      return React.createElement("div", _extends({}, other, {
        className: Styles.tabs,
        style: {
          backgroundColor: barColor
        }
      }), React.createElement("div", {
        ref: this.registerTabsInner,
        className: Styles.tabsInner,
        style: {
          textAlign: isCentered ? 'center' : 'left',
          margin: "0 0 -".concat(scrollbarHeight, "px")
        }
      }, React.createElement("div", {
        className: makeClass(Styles.tabList, _defineProperty({}, Styles.tabListFixed, isFixed)),
        role: "tablist"
      }, this.renderTabs()), this.state.indexChanged && React.createElement("div", {
        "aria-hidden": true,
        className: Styles.indicator,
        style: {
          width: this.state.indicatorWidth,
          backgroundColor: this.props.indicatorColor,
          transform: "translateX(".concat(this.state.indicatorLeft, ")")
        }
      })), React.createElement("div", {
        "aria-hidden": true
      }, React.createElement(ScrollbarSize, {
        onLoad: this.scrollbarSizeLoad,
        onChange: this.scrollbarSizeChange
      })));
    }
  }]);

  return Tabs;
}(React.Component);

Tabs.defaultProps = {
  barColor: Variables.$primary,
  children: null,
  className: null,
  index: 0,
  indicatorColor: Variables.$accent,
  onChange: function onChange() {},
  style: {},
  textColor: '#fff',
  type: 'fixed'
};
export default Tabs;