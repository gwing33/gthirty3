'use strict';
import React from 'react';
import Logo from '../components/logo.jsx';
import Icon from '../components/icon.jsx';
import StyleSheet from 'react-style';
import BaseStyles from '../styles/base.styles.js';

var styles = StyleSheet.create({
  content: {
    padding: '150px 0 120px 0',
    position: 'relative',
    zIndex: '100',
    color: '#fff'
  },
  header: {
    backgroundColor: '#56595C',
    overflow: 'hidden',
    position: 'relative'
  },
  divBg: {
    position: 'absolute',
    width: '200%',
    transform: 'rotate(-10deg)',
    height: '100%',
    left: '-50%'
  },
  div1: {
    backgroundColor: '#4C4E51',
    top: '-85%',
    zIndex: '10',
  },
  div2: {
    backgroundColor: '#515356',
    top: '-33%',
    zIndex: '1',
  },

  h1: {
    fontSize: '70px',
    fontWeight: '300',
    margin: '57px 0 0 0'
  },
  subtitle: {
    display: 'block',
    fontSize: '30px'
  }


});

class Header extends React.Component {
  render() {
    return (
      <header styles={styles.header}>
        <div styles={[styles.divBg, styles.div1]} />
        <div styles={[styles.divBg, styles.div2]} />
        <div styles={[BaseStyles.container, tyles.content]}>
          <Logo size={150} fill="#1D1E21" />
          <h1 styles={styles.h1}>
            Gerald Leenerts III
            <span styles={styles.subtitle}>Technical UX Designer</span>
          </h1>
        </div>

        <ul styles={[BaseStyles.resetList]}>
          <li>
            <a href='https://www.linkedin.com/pub/gerald-leenerts/10/a23/2a6' target='_blank'>
              <Icon />
            </a>
            <div />
          </li>
          <li>
            <a href='https://plus.google.com/+GeraldLeenerts/posts' target='_blank'>
              <Icon />
            </a>
            <div />
          </li>
          <li>
            <a href='https://github.com/gwing33' target='_blank'>
              <Icon />
            </a>
            <div />
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
