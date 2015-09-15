import _ from 'lodash';
import React from 'react';
import Radium from 'radium';
import BaseStyles from '../styles/base.styles.js';
import SocialItem from './SocialItem.js';

const styles = {
  social: {
    position: 'absolute',
    zIndex: '100',
    right: '100px',
    bottom: 0,
    marginBottom: '-5px'
  }
};

@Radium
class Social extends React.Component {
  render() {
    const socialIcons = [{
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
      <ul style={[BaseStyles.resetList, styles.social]}>
        {_.map(socialIcons, (social, i) => {
          return <SocialItem key={`social-${i}`} type={social.type} href={social.href} />;
        })}
      </ul>
    );
  }
}

export default Social;
