import React, { Component } from 'react';
import StyleSheet from 'react-style';
import onHover from './utils/onHover.jsx';
import Settings from '../settings';

var styles = StyleSheet.create({
  button: {
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: '#ffffff',
    padding: '15px 20px',
    borderRadius: '3px',
    color: Settings.colors.darkGray
  },

  buttonHov: {
    color: '#ffffff'
  },

  primary: {
    borderColor: Settings.colors.blue
  },
  primaryHov: {
    backgroundColor: Settings.colors.blue
  },

  secondary: {
    borderColor: Settings.colors.green
  },
  secondaryHov: {
    backgroundColor: Settings.colors.green
  },

  tertiary: {
    borderColor: Settings.colors.darkGray
  },
  tertiaryHov: {
    backgroundColor: Settings.colors.darkGray
  }
});

@onHover
class Button extends Component {
  render() {
    let { type, isHover } = this.props;

    let btn = styles[type],
        btn_hov = styles[type + 'Hov'];

    let styls = [
      styles.button,
      btn,
      isHover ? styles.buttonHov : {},
      isHover ? btn_hov : {},
    ];

    return (
      <button styles={styls}>
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'tertiary'
};

export default Button;
