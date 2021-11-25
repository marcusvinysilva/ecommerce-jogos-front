import React, { useState } from 'react';

import { loginApi } from '../../services/Auth/loginApi';

import { JwtHandler } from '../../services/Auth/jwthandler';
import { Checkboxdiv, UserDiv, Form, UserDivControl } from './styles';

export function LoginUser() {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      email,
      password,
    };

    const response = await loginApi.apiPostRequest(
      loginApi.loginUrl(),
      payload
    );

    if (response.status === 201) {
      const tokenUltimate = await response.data.token;

      JwtHandler.setJwt(tokenUltimate);

      setAuthenticated(true);
    } else {
      console.log(response.status);
    }
  }

  if (!authenticated) {
    return (
      <UserDiv>
        <Form onSubmit={handleSubmit}>
          <h4>Log-in</h4>
          <UserDivControl>
            <label htmlFor="Email">Username:</label>
            <input id="email" type="text" name="email" />
          </UserDivControl>
          <UserDivControl>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" />
          </UserDivControl>
          <Checkboxdiv>
            <input type="checkbox" className="Login_remember" />
            <label htmlFor="Login_remeber">Remember-me</label>
          </Checkboxdiv>
          <button> Log in</button>
          <div>
            <a href="/#">Forgot your password?</a>
          </div>
        </Form>
      </UserDiv>
    );
  } else {
    return <h1>OK</h1>;
  }
}
