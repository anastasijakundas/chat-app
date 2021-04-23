import React, { useState, useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Header from './Header';
import { ROUTES } from '../Navigation/constants';

enum TabValuesEnum {
  chats = 'chats',
  rooms = 'rooms',
}

const HeaderContainer = () => {
  const history = useHistory();
  const location = useLocation();

  const tabValue = useMemo(() => {
    if (location.pathname === `/${TabValuesEnum.rooms}`) {
      return TabValuesEnum.rooms;
    } else if (location.pathname === '/') {
      return TabValuesEnum.chats;
    }
  }, [location.pathname]);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = useCallback(() => {
    history.push(ROUTES.login);
    handleClose();
  }, [history]);

  const isLoginPage = location.pathname === '/login';

  return (
    <Header
      open={open}
      handleMenu={handleMenu}
      handleLogoutClick={handleLogoutClick}
      handleClose={handleClose}
      anchorEl={anchorEl}
      tabValue={tabValue}
      isLoginPage={isLoginPage}
    />
  );
};

export default HeaderContainer;
