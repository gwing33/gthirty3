import React from 'react';
import BaseStyles from '../../styles/base.styles';
import Title from '../../components/Title';

class UserFlows extends React.Component {
  render() {
    return (
      <div style={[BaseStyles.container, { padding: '60px 15px' }]}>
        <Title isThin={false}>User Flows & Stories</Title>
        <p>
          Coming Soon!
        </p>

      </div>
    );
  }
}

export default UserFlows;
