import React from 'react';
import Router from 'react-router';
import { Route, DefaultRoute } from 'react-router';

import Base from '../pages/base.jsx';
import StyleGuide from '../pages/StyleGuide.jsx';
import Index from '../pages/Index.jsx';

let Routes = (
  <Route path='/?' name='app' handler={Base}>
    <Route name='style-guide' path='thoughts/style-guide/?' handler={StyleGuide} />
    <DefaultRoute name='index' handler={Index} />
  </Route>
);

export default Routes;
