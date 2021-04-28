import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import Chats from '../Chats';
import LoginPage from '../Login';
import {
  ChatRoomsPageContainer,
  ChatRoomMessagesContainer,
} from '../ChatRooms';
import PrivateRoute from './PrivateRoute';

const Navigation = () => {
  return (
    <Switch>
      <PrivateRoute exact path={ROUTES.chats} component={Chats} />
      <PrivateRoute
        exact
        path={ROUTES.rooms}
        component={ChatRoomsPageContainer}
      />
      <PrivateRoute path={ROUTES.room} component={ChatRoomMessagesContainer} />
      <Route path={ROUTES.login} component={LoginPage} />
    </Switch>
  );
};

export default Navigation;
