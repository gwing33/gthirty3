'use strict';
import React from 'react';
import Settings from '../settings';
import StyleSheet from 'react-style';
import BaseStyles from '../styles/base.styles.js';

import Social from './social.jsx';
import Logo from './logo.jsx';


var styles = StyleSheet.create({
  content: {
    padding: '150px 0 120px 0',
    position: 'relative',
    zIndex: '100',
    color: '#fff'
  },
  header: {
    backgroundColor: '#56595C',
    borderBottom: `1px solid ${Settings.colors.darkestGray}`,
    overflow: 'hidden',
    position: 'relative'
  },
  divBg: {
    //backgroundColor: `rgba(${Settings.colors.rgb.blue},0.1)`,
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
    zIndex: '5',
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
        <div styles={[BaseStyles.container, styles.content]}>
          <Logo size={150} fill="#1D1E21" />
          <h1 styles={styles.h1}>
            Gerald Leenerts III
            <span styles={styles.subtitle}>Technical UX Designer</span>
          </h1>
        </div>

        <Social />
      </header>
    );
  }
}

export default Header;
