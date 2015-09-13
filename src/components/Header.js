import React from 'react';
import StyleSheet from 'react-style';
import BaseStyles, { colors } from 'styles/base.styles.js';
import ResponsiveUtil from 'utils/ResponsiveUtil';

import windowDimensions from './utils/windowDimensions.js';

import Social from './Social.js';
import Logo from './Logo.js';
import Backdrop from './Backdrop.js';
import Title from './Title.js';

const styles = StyleSheet.create({
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
    borderBottom: `1px solid ${colors.darkestGray}`
  },

  h1: {
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
      <Backdrop styles={styles.backdrop}>
        <header styles={[styles.header, padding]}>
          <div styles={[BaseStyles.container, styles.content]}>
            <div>
              <Logo size={ResponsiveUtil.calcOffWidth(100, 150)} fill="#1D1E21" />
            </div>
            <Title styles={[styles.h1, h1]}>
              Gerald Leenerts III
              <span styles={[styles.subtitle, subtitle]}>UI/UX Designer + Engineer</span>
            </Title>
          </div>

          <Social />
        </header>
      </Backdrop>
    );
  }
}

export default Header;
