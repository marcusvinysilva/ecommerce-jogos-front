import styled from "styled-components";

export const Checkboxdiv = styled.div`
color: white;
`;

export const Form = styled.form`
    display: inline-block;
    margin-top: 50%;
    position:absolute;

`;

export const UserDiv = styled.div`
    margin-top: 250px;
    margin-left: 42%;
    border-radius: 45%;
    border: white;

    @media (max-widht:768px){
        margin-left: 10px;
        margin-top: 10%;
    }
`;

export const UserDivControl = styled.div`
  label {
    color: antiquewhite;
    border-radius: 3rem;
    display: block;
    margin-right:20px;
  }

  input {
    justify-content: right;
    padding-bottom: 20px;
    padding: 8px 6px;
    border-radius:3px;
    width: 100%;
    max-width: 300px;
    min-width: 100px;
    display:block;
    z-index: 32px;
  }
`;

