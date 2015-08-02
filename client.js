'use strict';
import React from 'react';
import Router from 'react-router';
import routes from './routes/Routes.jsx';
import analytics from 'ga-react-router';

Router.run(routes, Router.HistoryLocation, (Root, State) => {
  React.render(<Root/>, document.body);
  analytics(State);
});
