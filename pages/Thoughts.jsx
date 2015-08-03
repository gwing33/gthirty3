'use strict';
import React from 'react';
import BaseStyles from '../styles/base.styles.js';
import StyleSheet from 'react-style';
import { Link } from 'react-router';
import Settings from '../settings';

import Title from '../components/Title.jsx';
import Backdrop from '../components/Backdrop.jsx';
import Button from '../components/Button.jsx';

var styles = StyleSheet.create({

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

        <Title importance='2'>THOUGHTS</Title>
        <p>
          Various ideas on what I'm really passionate about.
        </p>

        <Backdrop styles={{ backgroundColor: Settings.colors.green, marginBottom: '60px' }}>
          <Link to='style-guide' styles={styles.link}>
            <Title importance='3' styles={styles.white}>
              The Branding & Style Guidelines
            </Title>
            <p styles={styles.white}>
              Exploring the benefits of style guides.
            </p>

            <Button>
              Explore the Thought
            </Button>
          </Link>
        </Backdrop>

        <Backdrop styles={{ backgroundColor: Settings.colors.blue}}>
          <Link to='user-flows' styles={styles.link}>
            <Title importance='3' styles={styles.white}>
              User Flows and Stories
            </Title>
            <p styles={styles.white}>
              Starting a project and understanding your target.
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
