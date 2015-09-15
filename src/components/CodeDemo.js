import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

class CodeDemo extends Component {
  static propTypes = {
    children: PropTypes.any,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    usage: PropTypes.string.isRequired,
    description: PropTypes.string
  };

  render() {
    const desc = this.props.description ? <p>{this.props.description}</p> : '';

    return (
      <div styles={{ marginTop: '80px' }}>
        <hr />

        <div styles={{ padding: '40px 0' }}>
          {this.props.children}
        </div>

        <Highlight className="javascript">
{`import ${this.props.name} from '${this.props.path}';

class MyClass extends React.Component {
  render() {
    return (${this.props.usage});
  }
}`}
        </Highlight>

        {desc}
      </div>
    );
  }
}

export default CodeDemo;
