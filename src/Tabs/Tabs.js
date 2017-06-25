import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Tabs.css';
import Variables from '../variables';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.setInkbarStyles = this.setInkbarStyles.bind(this);
    this.makeTabs = this.makeTabs.bind(this);
    this.registerInkBar = this.registerInkBar.bind(this);
    this.registerTabBar = this.registerTabBar.bind(this);
    this.tabs = {};
    this.state = {
      inkBarLeft: 0,
      inkBarWidth: 0
    };
  }

  componentDidMount() {
    this.setInkbarStyles();
    this.timeout = setTimeout(() => (
      this.inkbar.style.transition = 'all 250ms ease'
    ), 0);
    window.addEventListener('resize', this.setInkbarStyles);
  }

  componentWillReceiveProps({index}) {
    if (this.props.index !== index) {
      this.setInkbarStyles(index);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setInkbarStyles);
    clearTimeout(this.timeout);
  }

  onClick(e, index) {
    this.props.onChange(e, index);
  }

  setInkbarStyles(nextIndex) {
    const index = typeof nextIndex === 'number' ? nextIndex : this.props.index;
    const currentTab = this.tabs[index];
    if (currentTab) {
      const {width, left} = currentTab.getBoundingClientRect();
      const tabBarLeft = this.tabBar.getBoundingClientRect().left;
      const inkBarLeft = `${left - tabBarLeft}px`;
      const inkBarWidth = `${width}px`;
      this.setState({
        inkBarLeft,
        inkBarWidth
      });
    }
  }

  makeTabs() {
    const {children, textColor} = this.props;
    return React.Children.map(children, (tab, i) => {
      const other = {};
      return React.cloneElement(tab, {
        onClick: e => (this.onClick(e, i)),
        domRef: (c) => {
          this.tabs[i] = c;
        },
        style: {
          boxShadow: 'none',
          ...other
        },
        textColor
      });
    });
  }

  registerTabBar(c) {
    this.tabBar = c;
  }

  registerInkBar(c) {
    this.inkbar = c;
  }

  render() {
    const {barColor} = this.props;
    return (
      <div>
        <div
          className={Styles.tabs}
          ref={this.registerTabBar}
          style={{
            backgroundColor: barColor
          }}
        >
          {this.makeTabs()}
          <div
            className={Styles.inkbar}
            style={{
              left: this.state.inkBarLeft,
              width: this.state.inkBarWidth,
              backgroundColor: this.props.inkBarColor
            }}
            ref={this.registerInkBar}
          />
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  barColor: Variables.$primary,
  children: null,
  index: 0,
  inkBarColor: Variables.$accent,
  onChange: () => {},
  textColor: '#fff'
};

Tabs.propTypes = {
  barColor: PropTypes.string,
  children: PropTypes.node,
  index: PropTypes.number,
  inkBarColor: PropTypes.string,
  onChange: PropTypes.func,
  textColor: PropTypes.string
};

export default Tabs;