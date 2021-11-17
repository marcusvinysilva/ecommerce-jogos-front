import React, { useState, useContext } from "react";
import api from "../api";
import { Context } from "../Auth/Authcontext";
import {
  Checkboxdiv,
  UserDiv,
  Form,
  UserDivControl} from "./styles"



function initialState() {
  return { user: "", password: "" };
}


export function LoginUser() {
  const [info, setInfo] = useState(initialState);
  const {authenticated, handleLogin} = useContext(Context);
  

  function onChange(event) {
    const { info, name } = event.target;
    setInfo({
      ...info,
      [name]: info,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <UserDiv>
    <h4>Log-in</h4>
      <Form onSubmit={onSubmit}>
        <UserDivControl>
          <label htmlFor="user">Username:</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={info.user}
          />
        </UserDivControl>
        <UserDivControl>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={info.password}
          />
        </UserDivControl>
        <Checkboxdiv>
        <input type='checkbox' className='Login_remember' />
        <label for='Login_remeber'>Remember-me</label>
        </Checkboxdiv>
        <button onClick={handleLogin}>Log in</button>
      </Form>
    </UserDiv>
  );
}
