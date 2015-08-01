'use strict';
import _ from 'lodash';
import React from 'react';

import StyleSheet from 'react-style';
import BaseStyles from '../styles/base.styles.js';

import SocialItem from './SocialItem.jsx';

var styles = StyleSheet.create({
  social: {
    position: 'absolute',
    zIndex: '100',
    right: '100px',
    bottom: 0,
    marginBottom: '-5px'
  }
});

class Social extends React.Component {
  render() {
    let social_icons = [{
      href: 'https://www.linkedin.com/pub/gerald-leenerts/10/a23/2a6',
      type: 'linkedin'
    }, {
      href: 'https://plus.google.com/+GeraldLeenerts/posts',
      type: 'google'
    }, {
      href: 'https://github.com/gwing33',
      type: 'github'
    }];

    return (
      <ul styles={[BaseStyles.resetList, styles.social]}>
        {_.map(social_icons, function(social, i) {
          return <SocialItem key={`social-${i}`} type={social.type} href={social.href} />;
        })}
      </ul>
    );
  }
}

export default Social;
