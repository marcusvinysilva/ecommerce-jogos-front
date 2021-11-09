import React, { useState } from 'react';
import styled from 'styled-components';
const Form = styled.form`
align-content: center;
text-align: center;

`;

const UserDiv = styled.div`
justify-content: center;
`;

const UserDivControl = styled.div`
align-content: center ;
justify-content: center;
`;


function initialState() {
    return { user: '', password: '' };
}

export function LoginUser(){
const [info, setInfo] = useState(initialState);

    function onChange(event){
      const{info, name} = event.target;
    setInfo({
    ...info,
    [name]: info
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
            <button>    
              Log in
            </button>
          </Form>
        </UserDiv>
      );
    }