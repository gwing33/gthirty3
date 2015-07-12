'use strict';
import React from 'react';
import { Link, RouteHandler } from 'react-router';

import Logo from '../components/logo.jsx';
import Header from '../components/header.jsx';

import StyleSheet from 'react-style';
import BaseStyles from '../styles/base.styles.js';

var styles = StyleSheet.create({
  nav: {
    width: '100%'
  },

  ol: {
  }
});

class Base extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <nav styles={styles.nav}>
          <ol styles={[BaseStyles.resetList, styles.ol]}>
            <li>
              <span>gThirty3</span>
              <Logo size={100} />
            </li>
            <li>
              <Link to="app">About</Link>
            </li>
          </ol>
        </nav>

        <RouteHandler />
      </div>
    );
  }
}

export default Base;
