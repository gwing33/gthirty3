'use strict';
import React from 'react';
import BaseStyles from '../styles/base.styles.js';
import StyleSheet from 'react-style';
import { Link } from 'react-router';
import Settings from '../settings';
import Backdrop from '../components/Backdrop.jsx';
import Button from '../components/Button.jsx';

var styles = StyleSheet.create({

  backdrop: {
    backgroundColor: Settings.colors.blue
  },

  link: {
    textAlign: 'center',
    padding: '40px',
    display: 'block'
  },

  white: {
    color: '#ffffff'
  }

});

class Thoughts extends React.Component {
  render() {
    return (
      <div styles={[BaseStyles.container, { padding: '60px 15px' }]}>

        <h2>THOUGHTS</h2>
        <p>
          Various ideas on what I'm really passionate about.
        </p>

        <Backdrop styles={styles.backdrop}>
          <Link to='style-guide' styles={styles.link}>
            <h3 styles={styles.white}>
              The Branding & Style Guidelines
            </h3>
            <p styles={styles.white}>
              Exploring the benefits of style guides.
            </p>

            <Button>
              Explore the Thought
            </Button>
          </Link>
        </Backdrop>

      </div>
    );
  }
}

export default Thoughts;
