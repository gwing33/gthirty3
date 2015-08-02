'use strict';
import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { State, Link } from 'react-router';
import reactMixin from 'react-mixin';
import onHover from './utils/onHover.jsx';

@onHover
@reactMixin.decorate(State)
class ALink extends Component {
  render() {
    let props = this.props;
    let is_active = this.isActive(props.to , props.params, props.query);

    let styles = [
      props.styles,
      is_active ? props.activeStyles : {},
      props.isHover ? props.hoverStyles : {}
    ];

    return (
      <Link to={props.to} params={props.params} query={props.query} styles={styles}>
        {this.props.children}
      </Link>
    );
  }
}

ALink.propTypes = {
  to: PropTypes.string.isRequired,
  params: PropTypes.object,
  query: PropTypes.object,
  isActive: PropTypes.bool,
  activeStyles: PropTypes.object,
  hoverStyles: PropTypes.object
};

ALink.defaultProps = {
  activeStyles: {},
  hoverStyles: {},
  styles: {}
};

export default ALink;
