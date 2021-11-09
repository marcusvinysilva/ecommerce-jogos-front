import React, { useState} from "react";
import { Logo } from "../Logo/index";
import { LoginUser } from "../LoginUser/index";
import styled from "styled-components";
import ReactModal from "react-modal";
import { faUser, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "./Modalimg";


const Navbtn = styled.nav`
`



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
  padding-right: 20px;
  /* width: 20px; */
  display: flex;
  align-items: center;
  margin-right: --24px;
`;

const Img = styled.img`
width: 100px;
height: 50px;
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
  padding: 20px;
  /* border: none; */
  /* border-style: solid; */
  /* outline: none; */
  border:none!important;
  background: none;
`;

function Header() {
  const [ShowModal, SetShowModal] = useState(false);
  return (
    <Nav>
      <a src="/">

        {/* <Img src="https://media.discordapp.net/attachments/902360088709312527/905971436571746409/Ultimate-logo.jpg?width=510&height=513" alt="Logo" />*/}
        <Img src={require("../Logo/Ultimate-logo.svg")} />
      </a>
      <Div>

<Navbtn>
        <Button href="#" onClick={() => SetShowModal(true)}>
          <FontAwesomeIcon icon={faUser} />
        </Button>

            <Button>
          <FontAwesomeIcon icon={faShoppingCart} />
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
