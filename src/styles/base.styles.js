import StyleSheet from 'react-style';

export const colors = {
  rgb: {
    blue: '41,121,188'
  },

  blue: '#2979BC',
  green: '#0C8F7E',
  darkestGray: '#1D1E21',
  darkGray: '#5C5F62',
  gray: '#A7ACB0',
  lightGray: '#D7DCE0'
};

export default StyleSheet.create({
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 15px'
  },

  resetList: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  }
});
