import React from 'react';
import { Link } from 'react-router';
import BaseStyles, { colors } from 'styles/base.styles';
import StyleSheet from 'react-style';
import windowDimensions from './utils/windowDimensions.js';
import ResponsiveUtil from 'utils/ResponsiveUtil';
import Logo from './Logo.js';
import ALink from './ALink.js';
// import Sticky from 'react-sticky';

const styles = StyleSheet.create({
  sticky: {
    position: 'relative',
    width: '100%',
    zIndex: 1000
  },

  nav: {
    width: '100%',
    borderBottom: `1px solid ${colors.lightGray}`,
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

  brandTitle: {
    color: colors.blue,
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
    borderBottomColor: colors.blue,
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
      <div styles={sticky}>
        <nav styles={nav}>
          <div styles={[styles.brand, { left: left }]}>
            <div styles={brandTitle}>gThirty</div>
            <Link to="index" styles={logo}>
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
                  to="index">
                    About
                </ALink>
              </li>

              <li styles={li}>
                <ALink
                  activeStyles={styles.aActive}
                  hoverStyles={styles.aHover}
                  styles={a}
                  to="studies">
                    Studies
                </ALink>
              </li>

              <li styles={[li, { marginRight: 0 }]}>
                <ALink
                  activeStyles={styles.aActive}
                  hoverStyles={styles.aHover}
                  styles={a}
                  to="thoughts">
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
