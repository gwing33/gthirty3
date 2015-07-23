'use strict';
import React from 'react';
import Settings from '../settings';

import StyleSheet from 'react-style';

import windowDimensions from './utils/windowDimensions.jsx';
import Icon from './icon.jsx';

var styles = StyleSheet.create({
  li: {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',
    marginRight: '10px'
  },
  line: {
    marginTop: '-5px',
    borderLeft: `1px solid ${Settings.colors.lightGray}`,
    width: '1px',
    display: 'inline-block'
  }
});

class SocialItem extends React.Component {

  render() {
    let max_width = 1440;
    let min_width = 740;

    // Will get correct ratio
    let ratio = (this.props.windowWidth - min_width) / (max_width - min_width);
    let line_height = Math.round( ratio > 1 ? 80 : (ratio < 0 ? 40 : ratio * 40 + 40) );

    return (
      <li styles={styles.li}>
        <a href={this.props.href} target='_blank'>
          <Icon size={35} type={this.props.type} />
        </a>
        <div>
          <span styles={[styles.line, { height: line_height }]} />
        </div>
      </li>
    );
  }
}

SocialItem.propTypes = {
  type: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired
};

export default windowDimensions(SocialItem);
