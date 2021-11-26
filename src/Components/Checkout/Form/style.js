import styled from 'styled-components';

export const Form = styled.form`
  width: 60%;
  padding: 30px 0;
  background: rgba(20, 40, 40, 0.8);
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-top: 20vh;

`;

export const UserDivControl = styled.div`
  label {
    line-height: 3;
    margin-bottom: 5px;
    font-weight: 700;
  }

  span {
    position: relative;
    display: flex;
    margin-bottom: 2rem;
    width: 100%;
  }

  input {
    line-height: inherit;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    outline: none;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #9300ff;
    border-top: none;
    border-left: none;
    border-right: none;
    background: rgba(20, 20, 20, 0.2);
    color: white;
  }
`;
