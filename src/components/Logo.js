import React from 'react';
import PropTypes from 'prop-types';

const ORIGIANL_SIZE = 200;

class Logo extends React.Component {
  static propTypes = {
    size: PropTypes.number,
    fill: PropTypes.string
  };

  static defaultProps = {
    size: ORIGIANL_SIZE,
    fill: '#5C5F62'
  };

  render() {
    const size = this.props.size;
    const fill = this.props.fill;
    const viewBox = [0, 0, size, size].join(' ');
    const scale = size / ORIGIANL_SIZE;

    return (
      <svg xmlns="http://www.w3.org/svg/2000"
           viewBox={viewBox}
           height={size}
           width={size}
           fill={fill}>
         <g transform={`scale(${scale})`}>
           <polygon fill={fill} points="53.3,1.3 1.3,1.3 1.3,53.3 0,53.3 0,0 53.3,0 "/>
           <polygon fill={fill} points="200,53.3 198.7,53.3 198.7,1.3 146.7,1.3 146.7,0 200,0 "/>
           <polygon fill={fill} points="53.3,200 0,200 0,146.7 1.3,146.7 1.3,198.7 53.3,198.7 "/>
           <polygon fill={fill} points="200,200 146.7,200 146.7,198.7 198.7,198.7 198.7,146.7 200,146.7 "/>
           <rect x="46" y="40" fill={fill} width="1.3" height="106.7"/>
           <rect x="99.3" y="40" fill={fill} width="1.3" height="106.7"/>
           <rect x="152" y="40" fill={fill} width="1.3" height="106.7"/>
         </g>
      </svg>
    );
  }
}

export default Logo;
