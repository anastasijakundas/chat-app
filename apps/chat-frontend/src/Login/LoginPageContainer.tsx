import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './LoginPage';
import {createOrUpdateUser } from './thunks';

function LoginPageContainer() {
  const dispatch = useDispatch();
  const handleSuccess = ({ profileObj }) => {
    const userData = {
      googleId: profileObj.googleId,
      email: profileObj.email,
      name: profileObj.name,
    }

    dispatch(createOrUpdateUser(userData));
  }

  const handleFailure = (res) => {
    console.log(res, 'failure');
  }

  return <LoginPage handleSuccess={handleSuccess} handleFailure={handleFailure} />;
}

export default LoginPageContainer;
