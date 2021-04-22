import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import Chats from '../Chats';
import LoginPage from '../Login';
import { ChatRoomsPageContainer, ChatRoomMessagesContainer } from '../ChatRooms';

const Navigation = () => {
  return (
      <Switch>
        <Route exact path={ROUTES.chats} component={Chats} />
        <Route exact path={ROUTES.rooms} component={ChatRoomsPageContainer} />
        <Route path={ROUTES.room} component={ChatRoomMessagesContainer} />
        <Route path={ROUTES.login} component={LoginPage} />
      </Switch>
  );
};

export default Navigation;
