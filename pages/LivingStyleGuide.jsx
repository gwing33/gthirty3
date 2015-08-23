'use strict';
import React from 'react';
import BaseStyles from '../styles/base.styles';
import StyleSheet from 'react-style';
import CodeDemo from '../components/CodeDemo.jsx';

import Title from '../components/Title.jsx';
import Button from '../components/Button.jsx';
import ALink from '../components/ALink.jsx';
import Logo from '../components/Logo.jsx';
import Backdrop from '../components/Backdrop.jsx';

class LivingStyleGuide extends React.Component {
  render() {
    let hr1 = {
      position: 'absolute',
      top: '2px',
      width: '100%',
      zIndex: 1
    };
    let hr2 = {
      borderStyle: 'dashed',
      position: 'absolute',
      top: '26px',
      width: '100%',
      zIndex: 1
    };
    let hr3 = {
      position: 'absolute',
      top: '53px',
      width: '100%',
      zIndex: 1
    };

    return (
      <div styles={[BaseStyles.container, { padding: '60px 15px' }]}>

        <div styles={{ position: 'relative' }}>
          <hr styles={hr1} />
          <Title styles={{ textAlign: 'center', margin: 0, position: 'relative', zIndex: 2 }} isThin={true}>Living Style Guide</Title>
          <hr styles={hr2} />
          <hr styles={hr3} />
          <p>
            This guide will continue to evolve, but this will allow a consistent branding evolution.
            The User Stories & Flows is to give an overview of what I'm looking to achieve from the site.
            The components and styles are to allow functional cascading (predicable.)
          </p>
        </div>

        <div styles={{ marginTop: '80px' }}>
          <Title importance='3'>User Stories & Flows</Title>
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
          name='Title'
          path='~/component/Title.jsx'
          description='Did a Thin and Bold Title so I could use them in more ways.'
          usage={`
     <Title isThin={true}>H1 Title Tag Thin</Title>
     <Title>H1 Title Tag Thin</Title>
     <Title importance='2' isThin={true}>H2 Title Tag Thin</Title>
     <Title importance='2' >H2 Title Tag</Title>
     <Title importance='3' isThin={true}>H3 Title Tag Thin</Title>
     <Title importance='3' >H3 Title Tag</Title>
     <Title importance='4' isThin={true}>H4 Title Tag Thin</Title>
     <Title importance='4' >H4 Title Tag</Title>
     <Title importance='5' isThin={true}>H5 Title Tag Thin</Title>
     <Title importance='5' >H5 Title Tag</Title>
     <Title importance='6' isThin={true}>H6 Title Tag Thin</Title>
     <Title importance='6' >H6 Title Tag</Title>
    `}>
          <Title isThin={true}>H1 Title Tag Thin</Title>
          <Title>H1 Title Tag</Title>
          <Title importance='2' isThin={true}>H2 Title Tag Thin</Title>
          <Title importance='2' >H2 Title Tag</Title>
          <Title importance='3' isThin={true}>H3 Title Tag Thin</Title>
          <Title importance='3' >H3 Title Tag</Title>
          <Title importance='4' isThin={true}>H4 Title Tag Thin</Title>
          <Title importance='4' >H4 Title Tag</Title>
          <Title importance='5' isThin={true}>H5 Title Tag Thin</Title>
          <Title importance='5' >H5 Title Tag</Title>
          <Title importance='6' isThin={true}>H6 Title Tag Thin</Title>
          <Title importance='6' >H6 Title Tag</Title>
        </CodeDemo>

        <CodeDemo
          name='Button'
          path='~/component/Button.jsx'
          description='Formalized Button, including hover states.'
          usage={`
      <Button type='primary'>Primary Button</Button>
      <Button type='secondary'>Secondary Button</Button>
      <Button>Tertiary Button</Button>
    `}>
          <Button type='primary'>Primary Button</Button>
          {' '}
          <Button type='secondary'>Secondary Button</Button>
          {' '}
          <Button>Tertiary Button</Button>
        </CodeDemo>

        <CodeDemo
          name='ALink'
          path='~/component/ALink.jsx'
          description='Wraps the React Router Link component to enable hover and active state effects...'
          usage={`
      <ALink to='app'>A Link</ALink>
    `}>
          <ALink to='app'>A Link</ALink>
        </CodeDemo>

        <CodeDemo
          name='Logo'
          path='~/components/Logo.jsx'
          description='SVG Logo for ease of scaling.'
          usage={`
      <Logo size={100} />
    `}>
          <Logo size={100} />
        </CodeDemo>

        <CodeDemo
          name='Backdrop'
          path='~/components/Backdrop.jsx'
          description='Consistent design element throught the entire site.'
          usage={`
      <Backdrop styles={{ padding: '20px' }}>
        <Title styles={{ color: '#ffffff' }} importance='3' isThin={true}>Sweet Backdrop!</Title>
      </Backdrop>
    `}>
          <Backdrop styles={{ padding: '20px' }}>
            <Title styles={{ color: '#ffffff' }} importance='3' isThin={true}>Sweet Backdrop!</Title>
          </Backdrop>
        </CodeDemo>
      </div>
    );
  }
}

export default LivingStyleGuide;
