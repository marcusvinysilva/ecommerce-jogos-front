import React, { useState, useEffect } from 'react';

import { JwtHandler } from '../Auth/jwthandler';
import api from '../api';
import { Checkboxdiv, UserDiv, Form, UserDivControl } from './styles';
import Userpage from '../../Pages/Home/Userpage';
import { DivButton, LinkButton } from '../GlobalButton';

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

    const response = await api.AuthUser(payload);

    const body = await response.json();

    if (response.status === 201) {
      console.log('Success! Logged in.');

      const tokenUltimate = body.tokenUltimate;

      // localStorage.setItem("tokenUltimate", tokenUltimate);

      JwtHandler.setJwt(tokenUltimate);

      console.log({ tokenUltimate });

      // props.history.push(`/`)
      setAuthenticated(true);
    } else {
      console.log('Error! confirm your infos and try again.');
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
    return <Userpage />;
  }
}
