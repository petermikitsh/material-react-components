import PropTypes from 'prop-types';
import React from 'react';

class TableHead extends React.Component {
  renderChildren() {
    const {children} = this.props;
    return React.Children.map(children, child => (
      React.cloneElement(child, {head: true})
    ));
  }

  render() {
    const {children, ...other} = this.props;
    return (
      <thead {...other}>
        {this.renderChildren()}
      </thead>
    );
  }
}

TableHead.propTypes = {
  children: PropTypes.node
};

TableHead.defaultProps = {
  children: null
};

export default TableHead;
