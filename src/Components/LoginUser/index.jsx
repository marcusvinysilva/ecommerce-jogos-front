import React, { useState} from "react";
import { Authcontext } from "../Auth/Authcontext";
import api from "../api";

import {
  Checkboxdiv,
  UserDiv,
  Form,
  UserDivControl} from "./styles";



export function LoginUser() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const{handleLogin,authenticated} = Authcontext();
  console.log(handleLogin)
  function onSubmit(event) {
    event.preventDefault();
    handleLogin(email,password)
    console.log(authenticated) 
  }

  return (
    <UserDiv>
    <h4>Log-in</h4>
      <Form onSubmit={onSubmit}>
        <UserDivControl>
          <label htmlFor="Email">Username:</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={e=>setEmail(e.target.value)}
           
          />
        </UserDivControl>
        <UserDivControl>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={e=>setPassword(e.target.value)}
            
          />
        </UserDivControl>
        <Checkboxdiv>
        <input type='checkbox' className='Login_remember' />
        <label for='Login_remeber'>Remember-me</label>
        </Checkboxdiv>
        <button> Log in</button>
      </Form>
    </UserDiv>
  );
}
