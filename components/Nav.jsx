'use strict';
import React from 'react';
import Settings from '../settings';
import StyleSheet from 'react-style';
import BaseStyles from '../styles/base.styles.js';
import windowDimensions from './utils/windowDimensions.jsx';
import ResponsiveUtil from '../utils/ResponsiveUtil';
import Logo from './Logo.jsx';
import { Link } from 'react-router';
import ALink from './ALink.jsx';
import Sticky from 'react-sticky';

var styles = StyleSheet.create({
  sticky: {
    position: 'relative',
    width: '100%',
    zIndex: 1000
  },

  nav: {
    width: '100%',
    borderBottom: `1px solid ${Settings.colors.lightGray}`,
    position: 'absolute',
    padding: '0',
    top: '0',
    left: '0',
    backgroundColor: '#ffffff'
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
    lineHeight: '142px',
    height: '142px',
    display: 'inline-block'
  },

  aActive: {
    borderBottomWidth: '3px',
    borderBottomColor: Settings.colors.blue,
    borderBottomStyle: 'solid'
  }
});

@windowDimensions
class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isStuck: false
    };
  }

  //componentWillUpdate(nextProps, nextState) {
    // if(nextProps.windowWidth >= 1000 !== this.props.windowWidth >= 1000) {
    //   this._animate( nextProps.windowWidth >= 1000 ? 0 : -300);
    // }
  //}

  _handleStickyStateChange(isStuck) {
    this.setState({ isStuck: isStuck });
  }

  render() {
    let sticky = [styles.sticky, { height: ResponsiveUtil.calcOffWidth(70, 140) }];
    let nav = [styles.nav, {
      paddingLeft: ResponsiveUtil.calc( ResponsiveUtil.getWRatio(720, 840), 100, 0) + 'px',
      height: ResponsiveUtil.calcOffWidth(70, 140) + 'px'
    }];
    let a = [styles.a, {
      fontSize: ResponsiveUtil.calcOffWidth(18, 30) + 'px',
      lineHeight: ResponsiveUtil.calcOffWidth(71, 142) + 'px',
      height: ResponsiveUtil.calcOffWidth(71, 142) + 'px'
    }];
    let logo = [styles.logo, { marginTop: ResponsiveUtil.calcOffWidth(10, 20) }];
    let brand_title = [styles.brand_title, {
      fontSize: ResponsiveUtil.calcOffWidth(20, 40) + 'px',
      top: ResponsiveUtil.calcOffWidth(26, 51) + 'px',
      left: ResponsiveUtil.calcOffWidth(10, -20) + 'px'
    }];

    let li = [styles.li, { marginRight: ResponsiveUtil.calcOffWidth(30, 60) + 'px' }];

    let left = ResponsiveUtil.calcOffWidth(-50, 20);

    return (
      <div styles={sticky}>
        <Sticky onStickyStateChange={this._handleStickyStateChange.bind(this)}>
          <nav styles={nav}>
            <div styles={[styles.brand, { left: left }]}>
              <div styles={brand_title}>gThirty</div>
              <Link to='index' styles={logo}>
                <Logo size={ResponsiveUtil.calcOffWidth(50, 100)} />
              </Link>
            </div>

            <div styles={[BaseStyles.container, styles.container]}>
              <ol styles={[BaseStyles.resetList, styles.ol]}>
                <li styles={li}>
                  <ALink
                    activeStyles={styles.aActive}
                    hoverStyles={styles.aHover}
                    styles={a}
                    to='index'>
                      About
                  </ALink>
                </li>

                <li styles={li}>
                  <ALink
                    activeStyles={styles.aActive}
                    hoverStyles={styles.aHover}
                    styles={a}
                    to='studies'>
                      Studies
                  </ALink>
                </li>

                <li styles={[li, { marginRight: 0 }]}>
                  <ALink
                    activeStyles={styles.aActive}
                    hoverStyles={styles.aHover}
                    styles={a}
                    to='thoughts'>
                      Thoughts
                  </ALink>
                </li>
              </ol>
            </div>

          </nav>
        </Sticky>
      </div>
    );
  }
}

export default Nav;
