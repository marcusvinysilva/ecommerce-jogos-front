import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Divimg = styled(Link)`
  background: #f000;
  padding: 10px 30px;

  /* @media (max-width: 768px) {
    height: 40px;
    width: 60px;
  } */


  img {
    height:50px;

    @media (max-width: 768px) {
      padding: 5px 5px;
      height: 50px;

    }
  }
`;
