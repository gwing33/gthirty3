import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import BaseStyles, { colors } from '../styles/base.styles';
import Radium from 'radium';
import windowDimensions from './utils/windowDimensions.js';
import ResponsiveUtil from '../utils/ResponsiveUtil';
import Logo from './Logo.js';
import ALink from './ALink.js';
// import Sticky from 'react-sticky';

// Shit hack.
const newRadium = Radium;
const NewLink = newRadium(Link);

const styles = {
  sticky: {
    position: 'relative',
    width: '100%',
    zIndex: 1000
  },

  nav: {
    width: '100%',
    borderBottom: `1px solid ${colors.lightGray}`,
    position: 'absolute',
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    top: '0',
    left: '0',
    backgroundColor: '#ffffff'
  },

  // Brand
  brand: {
    position: 'absolute',
    top: 0
  },

  brandTitle: {
    color: colors.blue,
    display: 'inline-block',
    transform: 'rotate(270deg)',
    WebkitTransform: 'rotate(270deg)',
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
    paddingRight: '15px',
    paddingLeft: '15px',
    width: '100%'
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
    borderBottomColor: colors.blue,
    borderBottomStyle: 'solid'
  }
};

@windowDimensions
@Radium
class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isStuck: false
    };
  }

  _handleStickyStateChange(isStuck) {
    this.setState({ isStuck: isStuck });
  }

  render() {
    const sticky = [styles.sticky, { height: ResponsiveUtil.calcOffWidth(70, 140) }];
    const nav = [styles.nav, {
      paddingLeft: ResponsiveUtil.calc( ResponsiveUtil.getWRatio(720, 840), 100, 0) + 'px',
      height: ResponsiveUtil.calcOffWidth(70, 140) + 'px'
    }];
    const a = [styles.a, {
      fontSize: ResponsiveUtil.calcOffWidth(18, 30) + 'px',
      lineHeight: ResponsiveUtil.calcOffWidth(71, 142) + 'px',
      height: ResponsiveUtil.calcOffWidth(71, 142) + 'px'
    }];
    const logo = [styles.logo, { marginTop: ResponsiveUtil.calcOffWidth(10, 20) }];
    const brandTitle = [styles.brandTitle, {
      fontSize: ResponsiveUtil.calcOffWidth(20, 40) + 'px',
      top: ResponsiveUtil.calcOffWidth(26, 51) + 'px',
      left: ResponsiveUtil.calcOffWidth(10, -20) + 'px'
    }];

    const li = [styles.li, { marginRight: ResponsiveUtil.calcOffWidth(30, 60) + 'px' }];

    const left = ResponsiveUtil.calcOffWidth(-50, 20);

    return (
      <div style={sticky}>
        <nav style={nav}>
          <div style={[styles.brand, { left: left }]}>
            <div style={brandTitle}>gThirty</div>
            <NewLink to="index" style={logo}>
              <Logo size={ResponsiveUtil.calcOffWidth(50, 100)} />
            </NewLink>
          </div>

          <div style={[BaseStyles.container, styles.container]}>
            <ol style={[BaseStyles.resetList, styles.ol]}>
              <li style={li}>
                <ALink
                  activeStyle={styles.aActive}
                  style={a}
                  to="/">
                    About
                </ALink>
              </li>

              <li style={li}>
                <ALink
                  activeStyle={styles.aActive}
                  style={a}
                  to="/studies">
                    Studies
                </ALink>
              </li>

              <li style={_.flatten([li, { marginRight: '0px' }])}>
                <ALink
                  activeStyle={styles.aActive}
                  style={a}
                  to="/thoughts">
                    Thoughts
                </ALink>
              </li>
            </ol>
          </div>

        </nav>
      </div>
    );
  }
}

export default Nav;
