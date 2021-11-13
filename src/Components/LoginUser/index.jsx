import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-right: 20px;
  padding-left:calc(45%);
  /* align-content: center; */
  /* text-align: center; */
  /* align-items: flex-end; */
  /* justify-content: right; */
  /* border-color: black; */
`;

const UserDiv = styled.div`
  /* margin-top: 80px; */
  /* width: calc(100% - 80px) */
  /* margin-bottom: 80px; */
  /* justify-content: end; */
`;

const UserDivControl = styled.div`
  label {
    color: antiquewhite;
    border-radius: 3rem;
    /* position: absolute; */
    /* padding-bottom: 10px; */
    /* padding: 10px 30px; */
     /* left: 300px; */
    display: block;
    margin-right:20px;
  }

  input {
    justify-content: right;
    padding-bottom: 20px;
    padding: 10px 18px;
    display:block;
    z-index: 32px;
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
    // <UserDiv>
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
        <button>Log in</button>
      </Form>
    // </UserDiv>
  );
}
