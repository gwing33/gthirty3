import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'styles/base.styles';
import StyleSheet from 'react-style';
import ResponsiveUtil from 'utils/ResponsiveUtil';
import windowDimensions from './utils/windowDimensions.js';
import Icon from './Icon.js';

const styles = StyleSheet.create({
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
});

@windowDimensions
class SocialItem extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  };

  render() {
    const { type, href } = this.props;
    const lineHeight = ResponsiveUtil.calcOffWidth(40, 80);

    return (
      <li styles={styles.li}>
        <a href={href} target="_blank">
          <Icon size={35} type={type} />
        </a>
        <div>
          <span styles={[styles.line, { height: lineHeight }]} />
        </div>
      </li>
    );
  }
}

export default SocialItem;
