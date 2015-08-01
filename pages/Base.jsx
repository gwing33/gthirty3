'use strict';
import React from 'react';
import { RouteHandler } from 'react-router';

import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';

class Base extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <RouteHandler />
      </div>
    );
  }
}

export default Base;
