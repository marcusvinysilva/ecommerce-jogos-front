import React from "react";
import styled from "styled-components";


const Divimg = styled.div`
  background: #f000;
  padding: 10px 30px;

  @media (max-width: 768px) {
    height: 40px;
    width: 60px;
  }

  .a {
    cursor: pointer;
    min-height: 10px;
  }

  img {
    padding: 10px 100px;

    @media (max-width: 768px) {
      padding: 10px 0px;
      height: 40px;
    }
  }
`;

export function Logo() {
  return (
    <Divimg>
      <a href="/">
        <img src="https://wp.nkdev.info/youplay/wp-content/themes/youplay/assets/images/logo-light.png" />
      </a>
    </Divimg>
  );
}
