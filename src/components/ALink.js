import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// import reactMixin from 'react-mixin';
import onHover from './utils/onHover.js';
import StyleSheet from 'react-style';
import { colors } from 'styles/base.styles';

const styles = StyleSheet.create({
//  active: { },
  hover: {
    color: colors.blue
  },
  base: {
    color: colors.darkGray
  }
});

// @reactMixin.decorate(State)
@onHover
class ALink extends Component {
  static propTypes = {
    children: PropTypes.any,
    styles: PropTypes.any,
    to: PropTypes.string.isRequired,
    params: PropTypes.object,
    query: PropTypes.object,
    isHover: PropTypes.bool,
    activeStyles: PropTypes.object,
    hoverStyles: PropTypes.object
  };

  static contextTypes = {
    router: PropTypes.any
  };

  static defaultProps = {
    activeStyles: {},
    hoverStyles: {},
    styles: {}
  };

  render() {
    const {
      children,
      to,
      params,
      query,
      isHover,
      activeStyles,
      hoverStyles
    } = this.props;
    const isActive = this.context.router.state.location.pathname === to;
    const styls = [
      styles.base,
      this.props.styles,
      isActive ? activeStyles : {},
      isHover ? styles.hover : {},
      isHover ? hoverStyles : {}
    ];

    return (
      <Link to={to} params={params} query={query} styles={styls}>
        {children}
      </Link>
    );
  }
}

export default ALink;
