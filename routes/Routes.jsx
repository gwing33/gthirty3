import React from 'react';
import Router from 'react-router';
import { Route, DefaultRoute } from 'react-router';

import Base from '../pages/Base.jsx';
import StyleGuide from '../pages/StyleGuide.jsx';
import Thoughts from '../pages/Thoughts.jsx';
import Index from '../pages/Index.jsx';

let Routes = (
  <Route path='/?' name='app' handler={Base}>
    <Route name='thoughts' path='thoughts/?' handler={Thoughts} />
    <Route name='style-guide' path='thoughts/style-guide/?' handler={StyleGuide} />

    <DefaultRoute name='index' handler={Index} />
  </Route>
);

export default Routes;
