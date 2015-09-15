import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../styles/base.styles';
import Radium from 'radium';
import ResponsiveUtil from '../utils/ResponsiveUtil';
import windowDimensions from './utils/windowDimensions.js';
import Icon from './Icon.js';

const styles = {
  li: {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',
    marginRight: '10px'
  },
  line: {
    marginTop: '-5px',
    borderLeft: `1px solid ${colors.lightGray}`,
    width: '1px',
    display: 'inline-block'
  }
};

@windowDimensions
@Radium
class SocialItem extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  };

  render() {
    const { type, href } = this.props;
    const lineHeight = ResponsiveUtil.calcOffWidth(40, 80);

    return (
      <li style={styles.li}>
        <a href={href} target="_blank">
          <Icon size={35} type={type} />
        </a>
        <div>
          <span style={[styles.line, { height: lineHeight }]} />
        </div>
      </li>
    );
  }
}

export default SocialItem;
