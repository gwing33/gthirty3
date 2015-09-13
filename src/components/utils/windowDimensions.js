import React from 'react';
import ResponsiveUtil from '../../utils/ResponsiveUtil';

export default (Component) => {

  class Connect extends React.Component {
    constructor(props) {
      super(props);

      this.state = ResponsiveUtil.getSize();
    }

    componentDidMount() {
      if (ResponsiveUtil.isWindowDefined()) {
        window.addEventListener('resize', this._handleResize.bind(this) );
      }
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this._handleResize.bind(this) );
    }

    _handleResize() {
      this.setState( ResponsiveUtil.getSize() );
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }

  return Connect;
};
