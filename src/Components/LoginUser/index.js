import React, { useState } from 'react';
import { JwtHandler } from '../Auth/jwthandler';
import api from '../api';
import { Checkboxdiv, UserDiv, Form, UserDivControl } from './styles';

export function LoginUser(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function onSubmit(event) {
    event.preventDefault();

    const payload = {
      email,
      password,
    };

    const response = await api.Apipostreq(api.LoginUser(), payload);

    const body = await response.json();

    if (response.status === 200) {
      console.log('Loggged in succesfuly');

      const accessToken = body.accessToken;

      JwtHandler.setJwt(accessToken);

      console.log({ accessToken });

      props.history.push(`/`);
    } else {
      console.log(Error);
    }
  }

  return (
    <UserDiv>
      <Form onSubmit={onSubmit}>
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
        <Checkboxdiv>
          <input type="checkbox" className="Login_remember" />
          <label htmlFor="Login_remeber">Remember-me</label>
        </Checkboxdiv>
        <button onClick={onSubmit}> Log in</button>
      </Form>
    </UserDiv>
  );
}
