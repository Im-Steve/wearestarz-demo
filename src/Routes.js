import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { LIKES, MAIN, PROFILE } from './lib/constants';
import Main from './pages/Main/Main';

const Routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><Main currentPage={MAIN} /></Route>
      <Route exact path="/main"><Main currentPage={MAIN} /></Route>
      <Route exact path="/profile"><Main currentPage={PROFILE} /></Route>
      <Route exact path="/likes"><Main currentPage={LIKES} /></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
