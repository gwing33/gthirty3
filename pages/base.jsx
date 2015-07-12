'use strict';

import React from 'react';
import { Link, RouteHandler } from 'react-router';
import Logo from '../components/logo.jsx';

class Base extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Logo size={150} fill="#1D1E21" />
          <h1>Gerald Leenerts III</h1>
          <nav>
            <ol>
              <li>
                <Link to="app">About</Link>
              </li>
            </ol>
          </nav>
        </header>
        <div>
          <RouteHandler />
        </div>
      </div>
    );
  }
}

export default Base;
