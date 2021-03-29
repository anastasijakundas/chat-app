import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import Chats from '../Chats';
import LoginPage from '../Login';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.chats} component={Chats} />
        <Route path={ROUTES.login} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
