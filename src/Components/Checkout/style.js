import styled from 'styled-components'

export const Form = styled.form`
  width: 70%;
  padding: 30px 0;
  background: rgba(20, 40, 40, 0.8);
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const UserDivControl = styled.div`
  label {
    color: antiquewhite;
    border-radius: 3rem;
    display: block;
    margin-right: 20px;
  }

  input {
    margin: 15px 0;
    font-size: 16px;
    padding: 10px;
    width: 250px;
    border: 1px solid #9300ff;
    border-top: none;
    border-left: none;
    border-right: none;
    background: rgba(20, 20, 20, 0.2);
    color: white;
    outline: none;
  }
`;
