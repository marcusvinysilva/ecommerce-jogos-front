import React from "react";
import styled from "styled-components";

const StyledLogo = styled.a`
  img {
    width: 90px;
    //left: 90px;
  }
`;

const Divimg = styled.div`
background: #f000;
`;

const Styledimg = styled.img`

`;


export function Logo() {
  return (

    <Divimg>
    <StyledLogo href="/">
      <Styledimg src="https://wp.nkdev.info/youplay/wp-content/themes/youplay/assets/images/logo-light.png" />
      {/* <img src="https://media.discordapp.net/attachments/902360088709312527/905971436571746409/Ultimate-logo.jpg?width=510&height=513" /> */}
    </StyledLogo>
    </Divimg>
  );
}
