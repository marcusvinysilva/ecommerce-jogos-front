import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  align-content: center;
  text-align: center;
  border-color: black;
  background-image: black;
`;

const UserDiv = styled.div`
  justify-content: center;
`;

const UserDivControl = styled.div`
  label {
    color: antiquewhite;
    background-color: black;
    border-radius: 3rem;
    position: absolute;
    /* padding-bottom: 10px; */
  }

  input {
    padding-bottom: 20px;
    padding: 10px 18px;
    /* transform: skewY(30deg); */
  }
`;

function initialState() {
  return { user: "", password: "" };
}

export function LoginUser() {
  const [info, setInfo] = useState(initialState);

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
      <Form onSubmit={onSubmit}>
        <UserDivControl>
          <label htmlFor="user">Username</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={info.user}
          />
        </UserDivControl>
        <UserDivControl>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={info.password}
          />
        </UserDivControl>
        <button>Log in</button>
      </Form>
    </UserDiv>
  );
}
