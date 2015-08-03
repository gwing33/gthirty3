'use strict';
import React from 'react';
import BaseStyles from '../styles/base.styles';
import Title from '../components/Title.jsx';

class CaseStudies extends React.Component {
  render() {
    return (
      <div styles={[BaseStyles.container, { padding: '60px 15px', textAlign: 'center' }]}>
        <Title>Studies - Coming Soon!</Title>
      </div>
    );
  }
}

export default CaseStudies;
