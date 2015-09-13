import React, { Component } from 'react';
import StyleSheet from 'react-style';
import onHover from 'utils/onHover.js';
import { colors } from 'styles/base.styles';

const styles = StyleSheet.create({
  button: {
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: '#ffffff',
    padding: '15px 20px',
    borderRadius: '3px',
    color: colors.darkGray
  },

  buttonHov: {
    color: '#ffffff'
  },

  primary: {
    borderColor: colors.blue
  },
  primaryHov: {
    backgroundColor: colors.blue
  },

  secondary: {
    borderColor: colors.green
  },
  secondaryHov: {
    backgroundColor: colors.green
  },

  tertiary: {
    borderColor: colors.darkGray
  },
  tertiaryHov: {
    backgroundColor: colors.darkGray
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
