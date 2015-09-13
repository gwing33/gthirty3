import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { State, Link } from 'react-router';
import reactMixin from 'react-mixin';
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

@onHover
@reactMixin.decorate(State)
class ALink extends Component {
  static propTypes = {
    children: PropTypes.any,
    to: PropTypes.string.isRequired,
    params: PropTypes.object,
    query: PropTypes.object,
    isActive: PropTypes.bool,
    activeStyles: PropTypes.object,
    hoverStyles: PropTypes.object
  };

  static defaultProps = {
    activeStyles: {},
    hoverStyles: {},
    styles: {}
  };

  render() {
    const props = this.props;
    const isActive = this.isActive(props.to, props.params, props.query);

    const styls = [
      styles.base,
      props.styles,
      isActive ? props.activeStyles : {},
      props.isHover ? styles.hover : {},
      props.isHover ? props.hoverStyles : {}
    ];

    return (
      <Link to={props.to} params={props.params} query={props.query} styles={styls}>
        {this.props.children}
      </Link>
    );
  }
}

export default ALink;
