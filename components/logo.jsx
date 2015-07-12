'use strict';
import React from 'react';

let LogoOriginalSize = 200;

class Logo extends React.Component {
  render() {
    let size = this.props.size;
    let fill = this.props.fill;
    let view_box = [0, 0, size, size].join(' ');
    let scale = size / LogoOriginalSize;

    return (
      <svg xmlns="http://www.w3.org/svg/2000"
           viewBox={view_box}
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

Logo.propTypes = {
  size: React.PropTypes.number,
  fill: React.PropTypes.string
};
Logo.defaultProps = {
  size: LogoOriginalSize,
  fill: '#5C5F62'
};

export default Logo;
