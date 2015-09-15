import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { colors } from '../styles/base.styles';
import Radium from 'radium';

const styles = {
  base: {
    color: colors.darkGray
  },
  baseLight: {
    color: colors.darkGray,
    fontWeight: 100
  },
  h1: { fontSize: '30px' },
  h2: { fontSize: '26px' },
  h3: { fontSize: '24px' },
  h4: { fontSize: '22px' },
  h5: { fontSize: '20px' },
  h6: { fontSize: '18px' },
  h1Light: { fontSize: '70px' },
  h2Light: { fontSize: '60px' },
  h3Light: { fontSize: '50px' },
  h4Light: { fontSize: '40px' },
  h5Light: { fontSize: '30px' },
  h6Light: { fontSize: '20px' }
};

@Radium
class Title extends Component {
  static propTypes = {
    importance: PropTypes.number,
    isThin: PropTypes.bool,
    children: PropTypes.any,
    style: PropTypes.any
  };

  static defaultProps = {
    importance: 1,
    isThin: true
  };

  render() {
    const { children, isThin, importance, style } = this.props;
    const title = `h${importance}`;

    const styl = [
      styles[isThin ? 'baseLight' : 'base'],
      styles[isThin ? `${title}Light` : title]
    ];

    if (style !== void 0) {
      styl.push(style);
    }

    return React.createElement(title, {style: _.flatten(styl)}, children);
  }
}

export default Title;
