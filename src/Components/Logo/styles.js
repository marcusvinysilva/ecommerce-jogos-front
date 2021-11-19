import styled from "styled-components";


export const Divimg = styled.div`
  background: #f000;
  padding: 10px 30px;

  /* @media (max-width: 768px) {
    height: 40px;
    width: 60px;
  } */

  .a {
    cursor: pointer;
    min-height: 10px;
  }

  img {
    height:50px;

    @media (max-width: 768px) {
      padding: 5px 5px;
      height: 50px;

    }
  }
`;
