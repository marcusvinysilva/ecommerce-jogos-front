import React, { useState, useEffect, useRef } from "react";
import { Logo } from "../Logo/index";
import { LoginUser } from "../LoginUser/index";
import styled from "styled-components";
import ReactModal from "react-modal";
import { faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import { Image } from "./Modalimg";



const Navbtn = styled.nav`
`

const StyledHeader = styled.div`
  text-align: center;
  background-color: #ffffff;
`;
const Nav = styled.nav`
  background-image: url("https://th.bing.com/th/id/R.2d925b29bece786a05a68c5afc3c3e97?rik=lRrPx4eYIGHt%2fA&pid=ImgRaw&r=0");
  /* height: 90px; */
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100v - 1000wv));
  opacity: 0.6;
`;

const Div = styled.div`
  opacity: 0.8;
  /* right: 40px; */
  padding-right: 100px;
  /* width: 20px; */
  display: flex;
  align-items: center;
  margin-right: --24px;
`;

const Button = styled.button`
  /* border-radius: 4rem;
background: #261ce1;
padding: 11px 11px;
color: #fff;
border:none;
outline: none;
text-decoration:none;
padding-top: 45px;
width: 20px;
height: 100px;
margin-right: 30px; */
  /* opacity: 0.8; */
  padding: 10px;
  /* border: none; */
  border-style: solid;
`;

function Header() {
  const [ShowModal, SetShowModal] = useState(false);
  return (
    <Nav>
      <a src="/">
        <img src="https://wp.nkdev.info/youplay/wp-content/themes/youplay/assets/images/logo-light.png" alt="Logo" />
      </a>
      <Div>

<Navbtn>
        <Button href="#" onClick={() => SetShowModal(true)}>
          <FontAwesomeIcon icon={faUser} />
        </Button>

            <Button>
          <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </Navbtn>
      </Div>

      <ReactModal
        isOpen={ShowModal}
        onRequestClose={() => SetShowModal(false)}
        ariaHideApp={false}
        style={{
          overlay: {
            justifyContent: "center",
            // width: "450px",
            // height: "400px",
            opacity: 0.7,
          },
          // content:{
            
          // }
        }}
      >
        <div>
          
          <LoginUser/>
          <Image/>

          {/* <h2>ze</h2> */}
          {/* <StyledLiModal> */}
          {/* <LoginUser /> */}
          {/* </StyledLiModal> */}
        </div>
      </ReactModal>
    </Nav>
  );
}

export default Header;
