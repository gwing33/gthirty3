import React from 'react';
import BaseStyles from 'styles/base.styles';
import Title from 'components/Title';

class CaseStudies extends React.Component {
  render() {
    return (
      <div styles={[BaseStyles.container, { padding: '60px 15px', textAlign: 'center' }]}>
        <Title isThin={false}>Studies - Coming Soon!</Title>
      </div>
    );
  }
}

export default CaseStudies;
