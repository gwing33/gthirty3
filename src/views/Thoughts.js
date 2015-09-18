import React from 'react';
import BaseStyles, { colors } from '../styles/base.styles.js';
import Radium from 'radium';
import { Link } from 'react-router';
import Title from '../components/Title';
import Backdrop from '../components/Backdrop';
import Button from '../components/Button';

const styles = {
  container: {
    paddingTop: '60px',
    paddingRight: '15px',
    paddingBottom: '60px',
    paddingLeft: '15px'
  },

  link: {
    textAlign: 'center',
    padding: '40px',
    display: 'block'
  },

  white: {
    color: '#ffffff'
  }

};

@Radium
class Thoughts extends React.Component {
  render() {
    return (
      <div style={[BaseStyles.container, styles.container]}>

        <Title isThin={false} importance={2}>THOUGHTS</Title>
        <p>
          Various ideas on what I'm really passionate about.
        </p>

        <Backdrop style={{ backgroundColor: colors.green, marginBottom: '60px' }}>
          <Link to="/thoughts/style-guide" style={styles.link}>
            <Title isThin={false} importance={3} style={styles.white}>
              The Branding & Style Guidelines
            </Title>
            <p style={styles.white}>
              Exploring the benefits of style guides.
            </p>

            <Button>
              Explore the Thought
            </Button>
          </Link>
        </Backdrop>

      </div>
    );
  }
}

export default Thoughts;
