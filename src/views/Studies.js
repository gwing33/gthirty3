import React from 'react';
import Radium from 'radium';
import BaseStyles from '../styles/base.styles';
// import Title from '../components/Title';

const styles = {
  container: {
    paddingTop: '60px',
    paddingRight: '15px',
    paddingBottom: '60px',
    paddingLeft: '15px',
    textAlign: 'center'
  }
};

@Radium
class Studies extends React.Component {
  render() {
    return (
      <div style={[BaseStyles.container, styles.container]}>
      </div>
    );
  }
}

export default Studies;
