'use strict';
import React from 'react';
import Settings from '../settings';
import StyleSheet from 'react-style';
import BaseStyles from '../styles/base.styles.js';
import windowDimensions from './utils/windowDimensions.jsx';
import Logo from './Logo.jsx';
import ALink from './ALink.jsx';

var styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: '140px',
    borderBottom: `1px solid ${Settings.colors.lightGray}`,
    position: 'relative',
    padding: '0'
  },

  // Brand
  brand: {
    position: 'absolute',
    top: 0
  },

  brand_title: {
    color: Settings.colors.blue,
    display: 'inline-block',
    transform: 'rotate(270deg)',
    WebkitTransform: 'rotate(270deg)',
    msTransform: 'rotate(270deg)',
    fontSize: '40px',
    textAlign: 'center',
    width: '138px',
    top: '51px',
    left: '-20px',
    position: 'absolute'
  },

  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: '100px',
    marginTop: '20px'
  },


  // Nav List...
  container: {
    position: 'relative'
  },

  ol: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '0 15px'
  },

  li: {
    display: 'inline-block',
    marginRight: '60px'
  },

  a: {
    fontSize: '30px',
    color: Settings.colors.darkGray,
    lineHeight: '142px',
    height: '142px',
    textDecoration: 'none',
    display: 'inline-block'
  },

  aActive: {
    borderBottomWidth: '3px',
    borderBottomColor: Settings.colors.blue,
    borderBottomStyle: 'solid'
  },

  aHover: {
    color: Settings.colors.blue
  }
});

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this._animate.bind(this);

    this.state = {
      left: this.props.windowWidth >= 1000 ? 0 : -300
    };
  }

  _animate(final_width) {
    this.interval = setInterval(() => {
      if(this.state.left == final_width) {
        clearInterval(this.interval)
      } else {
        let l = this.state.left + (final_width === 0 ? 5 : -5);
        this.setState({
          left: l
        });
      }
    }, 10);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.windowWidth >= 1000 !== this.props.windowWidth >= 1000) {
      this._animate( nextProps.windowWidth >= 1000 ? 0 : -300);
    }
  }

  render() {
    return (
      <nav styles={styles.nav}>
        <div styles={[styles.brand, { left: this.state.left }]}>
          <div styles={styles.brand_title}>gThirty</div>
          <a href='#app' styles={styles.logo}>
            <Logo size={100} />
          </a>
        </div>

        <div styles={[BaseStyles.container, styles.container]}>
          <ol styles={[BaseStyles.resetList, styles.ol]}>
            <li styles={styles.li}>
              <ALink
                activeStyles={styles.aActive}
                hoverStyles={styles.aHover}
                styles={styles.a}
                to='index'>
                  About
              </ALink>
            </li>
            <li styles={styles.li}>
              <ALink
                activeStyles={styles.aActive}
                hoverStyles={styles.aHover}
                styles={styles.a}
                to='thoughts'>
                  Thoughts
              </ALink>
            </li>
          </ol>
        </div>

      </nav>
    );
  }
}

export default windowDimensions(Nav);
