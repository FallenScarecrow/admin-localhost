import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Home from '../pages/Admin/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={SignIn} />
    <Route path="/" component={Home} />
    {/* <Redirect from="/" to="/login" /> */}
  </Switch>
);

export default Routes;
