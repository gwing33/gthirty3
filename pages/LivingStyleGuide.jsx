'use strict';
import React from 'react';
import BaseStyles from '../styles/base.styles';
import StyleSheet from 'react-style';
import CodeDemo from '../components/CodeDemo.jsx';

import Title from '../components/Title.jsx';

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

        <div styles={{ marginBottom: '100px', position: 'relative' }}>
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
      </div>
    );
  }
}

export default LivingStyleGuide;
