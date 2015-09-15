import React from 'react';
import Radium from 'radium';
import BaseStyles, { colors } from '../styles/base.styles.js';
import ResponsiveUtil from '../utils/ResponsiveUtil';

import windowDimensions from './utils/windowDimensions.js';

import Social from './Social.js';
import Logo from './Logo.js';
import Backdrop from './Backdrop.js';
import Title from './Title.js';

const styles = {
  backdrop: { backgroundColor: '#56595C' },

  content: {
    paddingTop: 0,
    paddingBottom: 0,
    position: 'relative',
    zIndex: '100',
    color: '#ffffff'
  },

  header: {
    paddingTop: '15px',
    paddingRight: '15px',
    paddingBottom: '15px',
    paddingLeft: '15px',
    borderBottom: `1px solid ${colors.darkestGray}`
  },

  h1: {
    margin: '57px 0 0 0',
    color: '#ffffff'
  },

  subtitle: {
    display: 'block',
    color: '#ffffff'
  }
};

@Radium
@windowDimensions
class Header extends React.Component {
  render() {
    const padding = {
      paddingTop: ResponsiveUtil.calcOffWidth(40, 150),
      paddingBottom: ResponsiveUtil.calcOffWidth(80, 120)
    };

    const h1 = {
      fontSize: ResponsiveUtil.calcOffWidth(40, 75) + 'px'
    };

    const subtitle = {
      fontSize: ResponsiveUtil.calcOffWidth(20, 30) + 'px'
    };

    return (
      <Backdrop style={styles.backdrop}>
        <header style={[styles.header, padding]}>
          <div style={[BaseStyles.container, styles.content]}>
            <div>
              <Logo size={ResponsiveUtil.calcOffWidth(100, 150)} fill="#1D1E21" />
            </div>
            <Title style={[styles.h1, h1]}>
              Gerald Leenerts III
              <span style={[styles.subtitle, subtitle]}>UI/UX Designer + Engineer</span>
            </Title>
          </div>

          <Social />
        </header>
      </Backdrop>
    );
  }
}

export default Header;
