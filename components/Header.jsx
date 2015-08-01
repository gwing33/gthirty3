'use strict';
import React from 'react';
import Settings from '../settings';
import StyleSheet from 'react-style';
import BaseStyles from '../styles/base.styles.js';
import ResponsiveUtil from '../utils/ResponsiveUtil';
import windowDimensions from './utils/windowDimensions.jsx';
import Social from './Social.jsx';
import Logo from './Logo.jsx';
import Backdrop from './Backdrop.jsx';

var styles = StyleSheet.create({
  backdrop: { backgroundColor: '#56595C' },

  content: {
    paddingTop: 0,
    paddingBottom: 0,
    position: 'relative',
    zIndex: '100',
    color: '#fff'
  },

  header: {
    padding: '15px',
    borderBottom: `1px solid ${Settings.colors.darkestGray}`
  },

  h1: {
    fontWeight: '300',
    margin: '57px 0 0 0',
    color: '#fff'
  },
  subtitle: {
    display: 'block',
    color: '#fff'
  }
});

@windowDimensions
class Header extends React.Component {
  render() {
    let padding = {
      paddingTop: ResponsiveUtil.calcOffWidth(40, 150),
      paddingBottom: ResponsiveUtil.calcOffWidth(80, 120)
    };

    let h1 = {
      fontSize: ResponsiveUtil.calcOffWidth(40, 75) + 'px'
    };

    let subtitle = {
      fontSize: ResponsiveUtil.calcOffWidth(20, 30) + 'px'
    };

    return (
      <Backdrop styles={styles.backdrop}>
        <header styles={[styles.header, padding]}>
          <div styles={[BaseStyles.container, styles.content]}>
            <div>
              <Logo size={ResponsiveUtil.calcOffWidth(100, 150)} fill="#1D1E21" />
            </div>
            <h1 styles={[styles.h1, h1]}>
              Gerald Leenerts III
              <span styles={[styles.subtitle, subtitle]}>UI/UX Designer + Engineer</span>
            </h1>
          </div>

          <Social />
        </header>
      </Backdrop>
    );
  }
}

export default Header;
