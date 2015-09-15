import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Radium from 'radium';
import { colors } from '../styles/base.styles';

// Shit hack.
const newRadium = Radium; // This is to avoid the linter.
const NewLink = newRadium(Link); // This is to wrap the Link so Radium will apply styles.

const styles = {
  base: {
    color: colors.darkGray,

    ':hover': {
      color: colors.blue
    },
  }
};

@Radium
class ALink extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.any,
    to: PropTypes.string.isRequired,
    params: PropTypes.object,
    query: PropTypes.object,
    activeStyle: PropTypes.object,
  };

  static contextTypes = {
    router: PropTypes.any
  };

  static defaultProps = {
    activeStyle: {},
    styles: {}
  };

  render() {
    const {
      children,
      to, params, query,
      style, activeStyle
    } = this.props;

    const isActive = this.context.router.state.location.pathname === to;

    return (
      <NewLink to={to} params={params} query={query} style={_.flatten([ styles.base, style, isActive ? activeStyle : {} ])}>
        {children}
      </NewLink>
    );
  }
}

export default ALink;
