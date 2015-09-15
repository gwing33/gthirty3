import _ from 'lodash';
import React, { PropTypes } from 'react';
import color from 'color';
import StyleSheet from 'react-style';
import { colors } from '../styles/base.styles';

const styles = StyleSheet.create({
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
  static propTypes = {
    children: PropTypes.any,
    isDark: PropTypes.bool,
    styles: PropTypes.object
  };

  static defaultProps = {
    isDark: true,
    styles: {}
  };

  render() {
    const { children, isDark } = this.props;
    const styl = _.merge({ backgroundColor: colors.darkGray }, this.props.styles);
    const bgc = styl.backgroundColor;
    const c1 = color(bgc);
    const c2 = color(bgc);

    styles.backdrop1.backgroundColor = (isDark ? c1.darken(0.15) : c1.lighten(0.15)).rgbString();
    styles.backdrop2.backgroundColor = (isDark ? c2.darken(0.075) : c2.lighten(0.075)).rgbString();

    return (
      <div styles={[styles.backdrop, styl]}>
        <div styles={[styles.backdropBg, styles.backdrop1]}/>
        <div styles={[styles.backdropBg, styles.backdrop2]}/>
        <div styles={{ position: 'relative', zIndex: '15' }}>
          {children}
        </div>
      </div>
    );
  }
}

export default Backdrop;
