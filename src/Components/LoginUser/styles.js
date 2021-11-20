import styled from "styled-components";

export const Checkboxdiv = styled.div`
  color: white;
`;

export const Form = styled.form`
  /* display: inline-block;
    margin-top: 50%;
    position:absolute; */
  width: 70%;
  padding: 30px 0;
  background: rgba(20, 40, 40, 0.8);

  h4 {
    color: white;
    font-size: 18px;
  }
`;

export const UserDiv = styled.div`
  /* display: flex;
    width: 800px;
    height: 450px;
    margin: 50%;
    border-radius: 45%;
    border: white;
    box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
    text-align: center;
    transform: translate(-50%, -50%);
    position: absolute; */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 450px;
  text-align: center;
  display: flex;
  color: white;
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, 0.5);

  @media (max-widht: 768px) {
    margin-left: 10px;
    margin-top: 10%;
  }
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
