import React, { useState, useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Header from './Header';
import { ROUTES } from '../Navigation/constants';

enum TabValuesEnum {
  chats = 'chats',
  rooms = 'rooms',
}
type TabValue = TabValuesEnum.chats | TabValuesEnum.rooms;

const HeaderContainer = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname, 'location');
  const defaultTab = useMemo(() => {
    if (location.pathname === `/${TabValuesEnum.rooms}`) {
      return TabValuesEnum.rooms;
    } else if (location.pathname === '/') {
      return TabValuesEnum.chats;
    }
  }, [location.pathname]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [tabValue, setTabValue] = React.useState<TabValue>(defaultTab);
  const open = Boolean(anchorEl);

  const handleChangeTabs = (event: React.ChangeEvent, newValue: TabValue) => {
    setTabValue(newValue);
  };

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

  return (
    <Header
      open={open}
      handleMenu={handleMenu}
      handleLogoutClick={handleLogoutClick}
      handleClose={handleClose}
      anchorEl={anchorEl}
      // handleChangeTabs={handleChangeTabs}
      tabValue={defaultTab}
    />
  );
};

export default HeaderContainer;
