'use strict';
import _ from 'lodash';
import React, { PropTypes } from 'react';
import Color from 'color';
import StyleSheet from 'react-style';
import Settings from '../settings';

var styles = StyleSheet.create({
  backdrop: {
    overflow: 'hidden',
    position: 'relative'
  },

  backdropBg: {
    position: 'absolute',
    width: '200%',
    transform: 'rotate(-10deg)',
    WebkitTransform: 'rotate(-10deg)',
    msTransform: 'rotate(-10deg)',
    height: '100%',
    left: '-50%'
  },

  backdrop1: {
    top: '-85%',
    zIndex: '10',
  },

  backdrop2: {
    top: '-33%',
    zIndex: '5',
  }
});

class Backdrop extends React.Component {
  render() {
    let styl = _.merge({ backgroundColor: Settings.colors.darkGray }, this.props.styles);
    let bgc = styl.backgroundColor;
    let c1 = Color(bgc), c2 = Color(bgc);
    let is_dark = this.props.isDark;

    styles.backdrop1.backgroundColor = (is_dark ? c1.darken(0.15) : c1.lighten(0.15)).rgbString();
    styles.backdrop2.backgroundColor = (is_dark ? c2.darken(0.075) : c2.lighten(0.075)).rgbString();

    return (
      <div styles={[styles.backdrop, styl]}>
        <div styles={[styles.backdropBg, styles.backdrop1]}/>
        <div styles={[styles.backdropBg, styles.backdrop2]}/>
        <div styles={{ position: 'relative', zIndex: '15' }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Backdrop.propTypes = {
  isDark: PropTypes.bool,
  styles: PropTypes.object
};

Backdrop.defaultProps = {
  isDark: true,
  styles: {}
};

export default Backdrop;
