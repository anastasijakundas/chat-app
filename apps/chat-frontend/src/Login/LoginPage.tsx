import React from 'react';
import GoogleLogin from 'react-google-login';

function LoginPage({ handleSuccess, handleFailure }) {
  return (
    <div>
      <GoogleLogin
        clientId={"722721211283-kjpol1a4t26uhb13kpsmf1tg8kug719n.apps.googleusercontent.com"}
        buttonText="Login"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginPage;
