import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class NotFound extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        Page Not Found
      </div>
    );
  }
}

export default NotFound;
