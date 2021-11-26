import React, { useState } from 'react';

import { loginApi } from '../../services/Auth/loginApi';

import { JwtHandler } from '../../services/Auth/jwthandler';
import { UserDiv, Form, UserDivControl } from './styles';
import { DivButton } from '../GlobalButton';

export function LoginUser(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(event) {
    event.preventDefault();

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
        <Form>
          <h4>Log-in</h4>
          <UserDivControl>
            <label htmlFor="Email">Username:</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </UserDivControl>
          <UserDivControl>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </UserDivControl>
          <DivButton
            style={{
              marginRight: '150px',
              marginLeft: '150px',
              marginTop: '30px',
            }}
            onClick={onSubmit}
          >
            Log in
          </DivButton>
        </Form>
      </UserDiv>
    );
  } else {
    return <h1>OK</h1>;
  }
}
