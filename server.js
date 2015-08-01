/**
 * This leverages Express to create and run the http server.
 * A Fluxible context is created and executes the navigateAction
 * based on the URL. Once completed, the store state is dehydrated
 * and the application is rendered via React.
 */

import express from 'express';
import path from 'path';
// import serialize from 'serialize-javascript';
import debugLib from 'debug';
import React from 'react';
import ReactRouter from 'react-router';

import url from 'url';
import Html from './pages/Html.jsx';
import AppRoutes from './routes/Routes.jsx';
// const htmlComponent = React.createFactory(HtmlComponent);

const debug = debugLib('gthirty3');

const server = express();
server.set('state namespace', 'App');
server.use('/public', express.static(path.join(__dirname, '/public')));

server.use((req, res, next) => {
  var path = url.parse(req.url).pathname;

  ReactRouter.run(AppRoutes, path, function (Handler, state) {
    let markup = React.renderToString(<Handler />);
    let html   = React.renderToStaticMarkup(<Html markup={markup} />);

    debug('Sending markup');
    res.type('html');
    res.write('<!DOCTYPE html>' + html);
    res.end();
  });
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);

export default server;
