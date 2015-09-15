import React from 'react';
import BaseStyles, { colors } from '../styles/base.styles.js';
import StyleSheet from 'react-style';
import { Link } from 'react-router';
import Title from '../components/Title';
import Backdrop from '../components/Backdrop';
import Button from '../components/Button';

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',
    padding: '40px',
    display: 'block'
  },

  white: {
    color: '#ffffff'
  }

});

class Thoughts extends React.Component {
  render() {
    return (
      <div styles={[BaseStyles.container, { padding: '60px 15px' }]}>

        <Title isThin={false} importance="2">THOUGHTS</Title>
        <p>
          Various ideas on what I'm really passionate about.
        </p>

        <Backdrop styles={{ backgroundColor: colors.green, marginBottom: '60px' }}>
          <Link to="/thoughts/style-guide" styles={styles.link}>
            <Title isThin={false} importance="3" styles={styles.white}>
              The Branding & Style Guidelines
            </Title>
            <p styles={styles.white}>
              Exploring the benefits of style guides.
            </p>

            <Button>
              Explore the Thought
            </Button>
          </Link>
        </Backdrop>

        <Backdrop styles={{ backgroundColor: colors.blue}}>
          <Link to="/thoughts/user-flows" styles={styles.link}>
            <Title isThin={false} importance="3" styles={styles.white}>
              User Flows and Stories
            </Title>
            <p styles={styles.white}>
              Starting a project and understanding your target.
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
