'use strict';
import React from 'react';
import Settings from '../settings';
import StyleSheet from 'react-style';
import BaseStyles from '../styles/base.styles.js';
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

  brand_title: {
    color: Settings.colors.blue,
    display: 'inline-block',
    transform: 'rotate(270deg)',
    WebkitTransform: 'rotate(270deg)',
    msTransform: 'rotate(270deg)',
    fontSize: '56px',
    textAlign: 'center',
    width: '138px',
    top: '51px',
    position: 'absolute'
  },

  h1: {
    fontSize: '70px',
    fontWeight: '300',
    margin: '57px 0 0 0',
    color: '#fff'
  },
  subtitle: {
    display: 'block',
    fontSize: '30px',
    color: '#fff'
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);

    this._animate.bind(this);

    let is_large = this.props.windowWidth >= 1000;
    this.state = {
      left: is_large ? -200 : -40,
      opacity: is_large ? 0 : 1,
      marginLeft: is_large ? 0 : 80
    };
  }

  _animate(is_large) {
    let left = is_large ? -200 : -40;
    let opacity = is_large ? 0 : 1;
    let marginLeft = is_large ? 0 : 80;

    let left_tick = (left - this.state.left) / 50;
    let opacity_tick = (opacity - this.state.opacity) / 50;
    let marginLeft_tick = (marginLeft - this.state.marginLeft) / 50;
    let i = 0;

    this.interval = setInterval(() => {
      if(i === 50) {
        clearInterval(this.interval)
      } else {
        let l = this.state.left + left_tick;
        let o = this.state.opacity + opacity_tick;
        let m = this.state.marginLeft + marginLeft_tick;

        this.setState({
          left: l,
          opacity: o,
          marginLeft: m
        });

        i++;
      }
    }, 10);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.windowWidth >= 1000 !== this.props.windowWidth >= 1000) {
      this._animate( nextProps.windowWidth >= 1000);
    }
  }

  render() {
    // Will get correct ratio
    let ratio = (this.props.windowWidth - 740) / (1440 - 740);

    let padding = {
      paddingTop: Math.round( ratio > 1 ? 150 : (ratio < 0 ? 40 : ratio * 50 + 40) ),
      paddingBottom: Math.round( ratio > 1 ? 120 : (ratio < 0 ? 80 : ratio * 40 + 80) )
    };

    let brand_title_styles = {
      left: this.state.left,
      opacity: this.state.opacity
    };

    let logo_styles = {
      marginLeft: this.state.marginLeft
    }


    return (
      <Backdrop styles={styles.backdrop}>
        <header styles={[styles.header, padding]}>
          <div styles={[BaseStyles.container, styles.content]}>
            <div styles={[styles.brand_title, brand_title_styles]}>gThirty</div>
            <div styles={logo_styles}>
              <Logo size={150} fill="#1D1E21" />
            </div>
            <h1 styles={styles.h1}>
              Gerald Leenerts III
              <span styles={styles.subtitle}>UI/UX Designer + Engineer</span>
            </h1>
          </div>

          <Social />
        </header>
      </Backdrop>
    );
  }
}

export default windowDimensions(Header);
