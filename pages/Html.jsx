'use strict';
import React from 'react';

class Html extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>gThirty3 [Gerald Leenerts III]</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link href='//fonts.googleapis.com/css?family=Josefin+Sans:300,700' rel='stylesheet' type='text/css' />
          <link href='/public/css/base.css' rel='stylesheet' type='text/css' />
          <link href='/public/css/highlight/default.css' rel='stylesheet' type='text/css' />
          <link href='/public/css/highlight/github.css' rel='stylesheet' type='text/css' />

          <link rel="apple-touch-icon" sizes="57x57" href="/public/favicon/apple-touch-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/public/favicon/apple-touch-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/public/favicon/apple-touch-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/public/favicon/apple-touch-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/public/favicon/apple-touch-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/public/favicon/apple-touch-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/public/favicon/apple-touch-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/public/favicon/apple-touch-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon/apple-touch-icon-180x180.png"/>
          <link rel="icon" type="image/png" href="/public/favicon/favicon.ico"/>
          <link rel="icon" type="image/png" href="/public/favicon/favicon-16x16.png" sizes="16x16"/>
          <link rel="icon" type="image/png" href="/public/favicon/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/public/favicon/favicon-96x96.png" sizes="96x96"/>
          <link rel="icon" type="image/png" href="/public/favicon/android-icon-192x192.png" sizes="192x192"/>
          <link rel="manifest" href="/public/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffc40d"/>
          <meta name="msapplication-TileImage" content="/public/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </head>
        <body>
          <div dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
        <script src='/public/js/build/main.js'></script>
      </html>
    );
  }
}

export default Html;
