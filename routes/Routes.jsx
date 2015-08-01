import React from 'react';
import Router from 'react-router';
import { Route, DefaultRoute } from 'react-router';

import Base from '../pages/Base.jsx';
import LivingStyleGuide from '../pages/LivingStyleGuide.jsx';
import StyleGuide from '../pages/thoughts/StyleGuide.jsx';
import UserFlows from '../pages/thoughts/UserFlows.jsx';
import Thoughts from '../pages/Thoughts.jsx';
import Studies from '../pages/Studies.jsx';
import Index from '../pages/Index.jsx';

let Routes = (
  <Route path='/?' name='app' handler={Base}>
    <Route name='living-style-guide' path='living-style-guide/?' handler={LivingStyleGuide} />

    <Route name='thoughts' path='thoughts/?'>
      <Route name='style-guide' path='style-guide/?' handler={StyleGuide} />
      <Route name='user-flow' path='user-flow/?' handler={UserFlows} />
      <DefaultRoute handler={Thoughts} />
    </Route>

    <Route name='studies' path='studies/?'>
      <DefaultRoute handler={Studies} />
    </Route>

    <DefaultRoute name='index' handler={Index} />
  </Route>
);

export default Routes;
