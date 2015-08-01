'use strict';
import React from 'react';
import BaseStyles from '../styles/base.styles.js';
import StyleSheet from 'react-style';
import { Link } from 'react-router';

class Thoughts extends React.Component {
  render() {
    return (
      <div styles={[BaseStyles.container, { padding: '60px 15px' }]}>

        <h2>THOUGHTS</h2>
        <p>
          Various ideas on what I'm really passionate about.
        </p>

        <Link to='style-guide'>
          <h3>
            The Branding & Style Guidelines
          </h3>
          <p>
            Exploring the benefits of style guides.
          </p>
        </Link>

      </div>
    );
  }
}

export default Thoughts;
