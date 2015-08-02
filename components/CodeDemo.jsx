'use strict';
import React, { Component, PropTypes } from 'react';
import Highlight from 'react-highlight';

class CodeDemo extends Component {
  render() {
    var desc = this.props.description ? <p>{this.props.description}</p> : "";

    return(
      <div>
        <hr />

        <div styles={{ padding: '40px 0' }}>
          {this.props.children}
        </div>

        <Highlight className='javascript'>
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

CodeDemo.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  usage: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default CodeDemo;
