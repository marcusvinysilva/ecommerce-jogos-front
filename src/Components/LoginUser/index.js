import React, { useState } from 'react';

import { loginApi } from '../../services/Auth/loginApi';

import { JwtHandler } from '../../services/Auth/jwthandler';
import { UserDiv, Form, UserDivControl } from './styles';
import { DivButton } from '../GlobalButton';
import Userpage from '../../Pages/Home/Userpage'

export function LoginUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = JwtHandler.isJwtValid();

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
    } else {
      console.log(response.status);
    }
  }

  return (
    <UserDiv>
      {!auth ? (
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
      ) : (
        <Userpage/>
      )}
    </UserDiv>
  );
}
