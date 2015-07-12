'use strict';
var React = require('react');

class Html extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Hello World</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link href='http://fonts.googleapis.com/css?family=Josefin+Slab:100,700' rel='stylesheet' type='text/css'>
          <link href='/public/css/base.css' rel='stylesheet' type='text/css'>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
        <script src="/public/js/main.js"></script>
      </html>
    );
  }
}

export default Html;
