import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
// For now, highlight is causing issues. Going to comment out for now.
// import Highlight from 'react-highlight';

@Radium
class CodeDemo extends Component {
  static propTypes = {
    children: PropTypes.any,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    usage: PropTypes.string.isRequired,
    description: PropTypes.string
  };

  render() {
    const desc = this.props.description ? <p>{this.props.description}</p> : '';

    return (
      <div style={{ marginTop: '80px' }}>
        <hr />

        <div style={{ padding: '40px 0' }}>
          {this.props.children}
        </div>

        {desc}
      </div>
    );
  }
}

export default CodeDemo;
