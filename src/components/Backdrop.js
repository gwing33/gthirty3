import _ from 'lodash';
import React, { PropTypes } from 'react';
import color from 'color';
import Radium from 'radium';
import { colors } from '../styles/base.styles';

const styles = {
  backdrop: {
    overflow: 'hidden',
    position: 'relative'
  },

  backdropBg: {
    position: 'absolute',
    width: '200%',
    transform: 'rotate(-10deg)',
    WebkitTransform: 'rotate(-10deg)',
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
};

@Radium
class Backdrop extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    isDark: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    isDark: true,
    style: {}
  };

  render() {
    const { children, isDark } = this.props;
    const styl = _.merge({ backgroundColor: colors.darkGray }, this.props.style);
    const bgc = styl.backgroundColor;
    const c1 = color(bgc);
    const c2 = color(bgc);

    styles.backdrop1.backgroundColor = (isDark ? c1.darken(0.15) : c1.lighten(0.15)).rgbString();
    styles.backdrop2.backgroundColor = (isDark ? c2.darken(0.075) : c2.lighten(0.075)).rgbString();

    return (
      <div style={[styles.backdrop, styl]}>
        <div style={[styles.backdropBg, styles.backdrop1]}/>
        <div style={[styles.backdropBg, styles.backdrop2]}/>
        <div style={{ position: 'relative', zIndex: '15' }}>
          {children}
        </div>
      </div>
    );
  }
}

export default Backdrop;
