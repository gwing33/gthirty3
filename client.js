'use strict';
import React from 'react';
import Router from 'react-router';
import routes from './routes/Routes.jsx';

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
});
