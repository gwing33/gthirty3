import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { State, Link } from 'react-router';
import reactMixin from 'react-mixin';

class ALink extends Component {
  constructor(props) {
    super(props);

    this.props = {
      activeStyles: {},
      hoverStyles: {},
      styles: {}
    };

    this.state = {
      isHover: false
    };
  }

  _onMouseEnter() {
    this.setState({ isHover: true });
  }

  _onMouseLeave() {
    this.setState({ isHover: false });
  }

  render() {
    let props = this.props;
    let is_active = this.isActive(props.to , props.params, props.query);

    let styles = [
      props.styles,
      is_active ? props.activeStyles : {},
      this.state.isHover ? props.hoverStyles : {}
    ];

    return (
      <Link
        to={props.to}
        params={props.params}
        query={props.query}
        styles={styles}
        onMouseEnter={this._onMouseEnter.bind(this)}
        onMouseLeave={this._onMouseLeave.bind(this)}>
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

reactMixin.onClass(ALink, State);

export default ALink;
