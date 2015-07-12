'use strict';
import React from 'react';
import Settings from '../settings';

import StyleSheet from 'react-style';

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
    height: '80px',
    borderLeft: `1px solid ${Settings.colors.lightGray}`,
    width: '1px',
    display: 'inline-block'
  }
});

class SocialItem extends React.Component {
  render() {
    return (
      <li styles={styles.li}>
        <a href={this.props.url} target='_blank'>
          <Icon size={35} type={this.props.type} />
        </a>
        <div>
          <span styles={styles.line} />
        </div>
      </li>
    );
  }
}

SocialItem.propTypes = {
  type: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired
};

export default SocialItem;
