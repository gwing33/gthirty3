'use strict';
import React from 'react';
import Router from 'react-router';
import routes from './routes/routes.jsx';

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
});
