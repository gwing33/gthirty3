import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyleSheet from 'react-style';
import onHover from './utils/onHover.js';
import { colors } from '../styles/base.styles';

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
  static propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    isHover: PropTypes.bool
  };

  static defaultProps = {
    type: 'tertiary'
  };

  render() {
    const { type, isHover } = this.props;

    const btn = styles[type];
    const btnHov = styles[type + 'Hov'];

    const styls = [
      styles.button,
      btn,
      isHover ? styles.buttonHov : {},
      isHover ? btnHov : {},
    ];

    return (
      <button styles={styls}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
