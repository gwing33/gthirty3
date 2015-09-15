import React from 'react';
import {Route} from 'react-router';
import {
    App,
    Home,
    Studies,
    Thoughts,
    LivingStyleGuide,
    StyleGuide,
    UserFlows,
    NotFound
  } from 'views/index';

export default function(/* store */) {
  return (
    <Route component={App}>
      <Route path="/living-style-guide" component={LivingStyleGuide} />

      <Route path="/thoughts" component={Thoughts}/>
      <Route path="/thoughts/style-guide" component={StyleGuide} />
      <Route path="/thoughts/user-flows" component={UserFlows} />

      <Route path="/studies" component={Studies}/>

      <Route path="/" component={Home}/>
      <Route path="*" component={NotFound}/>
    </Route>
  );
}
