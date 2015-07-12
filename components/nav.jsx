'use strict';
import React from 'react';
import { State, Link } from 'react-router';
import Settings from '../settings';
import StyleSheet from 'react-style';
import BaseStyles from '../styles/base.styles.js';

import reactMixin from 'react-mixin';

import Logo from '../components/logo.jsx';

var styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: '140px',
    borderBottom: `1px solid ${Settings.colors.lightGray}`,
    position: 'relative'
  },

  // Brand
  brand: {
    position: 'absolute',
    top: 0,
    left: 0
  },

  brand_title: {
    color: Settings.colors.blue,
    display: 'inline-block',
    transform: 'rotate(270deg)',
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
    left: 0
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
    borderBottom: `3px solid ${Settings.colors.blue}`
  },
  aHover: {
    color: Settings.colors.blue
  }
});

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }

  _onMouseEnter() {
    this.setState({ isHover: true });
  }

  _onMouseLeave() {
    this.setState({ isHover: false });
  }

  render() {
    let linkStyles = [styles.a];

    if(this.isActive('index')) {
      linkStyles.push(styles.aActive);
    }

    if(this.state && this.state.isHover) {
      linkStyles.push(styles.aHover);
    }

    return (
      <nav styles={styles.nav}>

        <div styles={styles.brand}>
          <div styles={styles.brand_title}>gThirty</div>
          <a href='#app' styles={styles.logo}>
            <Logo size={100} />
          </a>
        </div>

        <div styles={[BaseStyles.container, styles.container]}>
          <ol styles={[BaseStyles.resetList, styles.ol]}>
            <li>
              <Link onMouseEnter={this._onMouseEnter.bind(this)} onMouseLeave={this._onMouseLeave.bind(this)} styles={ linkStyles } to='index'>About</Link>
            </li>
          </ol>
        </div>

      </nav>
    );
  }
}

reactMixin.onClass(Nav, State);

export default Nav;
