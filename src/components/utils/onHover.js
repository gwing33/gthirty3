import React from 'react';
import Radium from 'radium';

@Radium
export default (Component) => {

  class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isHover: false
      };
    }

    _onMouseEnter() {
      this.setState({ isHover: true });
    }

    _onMouseLeave() {
      this.setState({ isHover: false });
    }

    render() {
      return (
        <div
          style={{ display: 'inline-block' }}
          onMouseEnter={this._onMouseEnter.bind(this)}
          onMouseLeave={this._onMouseLeave.bind(this)}>
            <Component {...this.props} {...this.state} />
        </div>
      );
    }
  }

  return WrapperComponent;
};
