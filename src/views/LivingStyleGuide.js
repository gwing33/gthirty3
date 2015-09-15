import React from 'react';
import Radium from 'radium';
import BaseStyles from '../styles/base.styles';
import CodeDemo from '../components/CodeDemo';
import Title from '../components/Title';
import Button from '../components/Button';
import ALink from '../components/ALink';
import Logo from '../components/Logo';
import Backdrop from '../components/Backdrop';

const styles = {
  container: {
    paddingTop: '60px',
    paddingRight: '15px',
    paddingBottom: '60px',
    paddingLeft: '15px'
  }
};

@Radium
class LivingStyleGuide extends React.Component {
  render() {
    const hr1 = {
      position: 'absolute',
      top: '2px',
      width: '100%',
      zIndex: 1
    };
    const hr2 = {
      borderStyle: 'dashed',
      position: 'absolute',
      top: '26px',
      width: '100%',
      zIndex: 1
    };
    const hr3 = {
      position: 'absolute',
      top: '53px',
      width: '100%',
      zIndex: 1
    };

    return (
      <div style={[BaseStyles.container, styles.container]}>

        <div style={{ position: 'relative' }}>
          <hr style={hr1} />
          <Title style={{ textAlign: 'center', margin: 0, position: 'relative', zIndex: 2 }}>Living Style Guide</Title>
          <hr style={hr2} />
          <hr style={hr3} />
          <p>
            This guide will continue to evolve, but this will allow a consistent branding evolution.
            The User Stories & Flows is to give an overview of what I'm looking to achieve from the site.
            The components and styles are to allow functional cascading (predicable.)
          </p>
        </div>

        <div style={{ marginTop: '80px' }}>
          <Title isThin={false} importance={3}>User Stories & Flows</Title>
          <hr />
          <p>
            The goals of this website is to let people know who I am and also show them I am passionate about what I do and have a high standard of success.
          </p>

          <div>Primary (Initial) Story</div>
          <ul>
            <li>User Lands on Home Page</li>
            <li>Explore Thoughts</li>
            <li>Views Thought on Style Guides</li>
            <li>Goes to Living Style Guide</li>
          </ul>

          <div>Secondary Story</div>
          <ul>
            <li>User Lands on Home Page</li>
            <li>Explore Thoughts</li>
            <li>Views Thought on Style Guides</li>
            <li>Goes to Living Style Guide</li>
          </ul>

          <br />

          <div>Studies and Thoughts should highly relate.</div>
          <hr />
        </div>

        <CodeDemo
          name="Title"
          path="~/component/Title"
          description="Did a Thin and Bold Title so I could use them in more ways."
          usage={`
     <Title>H1 Title Tag Thin</Title>
     <Title isThin={false}>H1 Title Tag Thin</Title>
     <Title importance={2}>H2 Title Tag Thin</Title>
     <Title isThin={false} importance={2} >H2 Title Tag</Title>
     <Title importance={3}>H3 Title Tag Thin</Title>
     <Title isThin={false} importance={3} >H3 Title Tag</Title>
     <Title importance={4}>H4 Title Tag Thin</Title>
     <Title isThin={false} importance={4} >H4 Title Tag</Title>
     <Title importance={5}>H5 Title Tag Thin</Title>
     <Title isThin={false} importance={5} >H5 Title Tag</Title>
     <Title importance={6}>H6 Title Tag Thin</Title>
     <Title isThin={false} importance={6} >H6 Title Tag</Title>
    `}>
          <Title>H1 Title Tag Thin</Title>
          <Title isThin={false}>H1 Title Tag</Title>
          <Title importance={2}>H2 Title Tag Thin</Title>
          <Title isThin={false} importance={2} >H2 Title Tag</Title>
          <Title importance={3}>H3 Title Tag Thin</Title>
          <Title isThin={false} importance={3} >H3 Title Tag</Title>
          <Title importance={4}>H4 Title Tag Thin</Title>
          <Title isThin={false} importance={4} >H4 Title Tag</Title>
          <Title importance={5}>H5 Title Tag Thin</Title>
          <Title isThin={false} importance={5} >H5 Title Tag</Title>
          <Title importance={6}>H6 Title Tag Thin</Title>
          <Title isThin={false} importance={6} >H6 Title Tag</Title>
        </CodeDemo>

        <CodeDemo
          name="Button"
          path="~/component/Button"
          description="Formalized Button, including hover states."
          usage={`
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button>Tertiary Button</Button>
    `}>
          <Button type="primary">Primary Button</Button>
          {' '}
          <Button type="secondary">Secondary Button</Button>
          {' '}
          <Button>Tertiary Button</Button>
        </CodeDemo>

        <CodeDemo
          name="ALink"
          path="~/component/ALink"
          description="Wraps the React Router Link component to enable hover and active state effects..."
          usage={`
      <ALink to="app">A Link</ALink>
    `}>
          <ALink to="app">A Link</ALink>
        </CodeDemo>

        <CodeDemo
          name="Logo"
          path="~/components/Logo"
          description="SVG Logo for ease of scaling."
          usage={`
      <Logo size={100} />
    `}>
          <Logo size={100} />
        </CodeDemo>

        <CodeDemo
          name="Backdrop"
          path="~/components/Backdrop"
          description="Consistent design element throught the entire site."
          usage={`
      <Backdrop style={{ padding: '20px' }}>
        <Title style={{ color: '#ffffff' }} importance={3}>Sweet Backdrop!</Title>
      </Backdrop>
    `}>
          <Backdrop style={{ padding: '20px' }}>
            <Title style={{ color: '#ffffff' }} importance={3}>Sweet Backdrop!</Title>
          </Backdrop>
        </CodeDemo>
      </div>
    );
  }
}

export default LivingStyleGuide;
