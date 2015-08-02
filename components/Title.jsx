'use strict';
import React, { Component} from 'react';
import Settings from '../settings';
import StyleSheet from 'react-style';

var styles = StyleSheet.create({
  base: {
    color: Settings.colors.darkGray
  },
  baseLight: {
    color: Settings.colors.darkGray,
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
});

class Title extends Component {
  render() {
    let { isThin, importance } = this.props;
    let title = `h${importance}`;

    let styl = [
      styles[isThin ? 'baseLight' : 'base'],
      styles[isThin ? title + 'Light' : title],
      this.props.styles ? this.props.styles : {}
    ];

    return React.createElement(title, {styles: styl}, this.props.children);
  }
}

Title.defaultProps = {
  importance: 1,
  isThin: false
};

export default Title;
