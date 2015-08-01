import React from 'react';
import ResponsiveUtil from '../../utils/ResponsiveUtil';

let windowDimensions = function(Component) {

  class Connect extends React.Component {
    constructor(props) {
      super(props);

      this.state = ResponsiveUtil.getSize();
    }

    _handleResize(e) {
      this.setState( ResponsiveUtil.getSize() );
    }

    componentDidMount() {
      if(ResponsiveUtil.isWindowDefined()) {
        window.addEventListener('resize', this._handleResize.bind(this) );
      }
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this._handleResize.bind(this) );
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }

  return Connect;
}

export default windowDimensions;
