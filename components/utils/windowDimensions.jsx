import React from 'react';

let windowDimensions = function(Component) {

  class Connect extends React.Component {
    constructor(props) {
      super(props);

      // this._getSize.bind(this);
      // this._handleResize.bind(this);

      this.state = this._getSize();
    }

    _isWindowDefined() {
      return typeof window !== 'undefined';
    }

    _getSize() {
      let width = this._isWindowDefined() ? window.innerWidth : -1;
      let height = this._isWindowDefined() ? window.innerHeight : -1;

      return {
        windowWidth: width,
        windowHeight: height
      };
    }

    _handleResize(e) {
      this.setState( this._getSize() );
    }

    componentDidMount() {
      if(this._isWindowDefined()) {
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
