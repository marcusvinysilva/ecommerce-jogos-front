import React, { useState, useEffect, useRef } from "react";
import { Logo } from "../Logo/index";
import { LoginUser } from "../LoginUser/index";
import styled from "styled-components";
import ReactModal from "react-modal";
import { faUser, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledHeader = styled.div`
  text-align: center;
  background-color: #ffffff;
`;
const Nav = styled.nav`
  background-image: url("https://th.bing.com/th/id/R.2d925b29bece786a05a68c5afc3c3e97?rik=lRrPx4eYIGHt%2fA&pid=ImgRaw&r=0");
  height: 90px;
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
  border: none;
`;

function Header() {
  const [ShowModal, SetShowModal] = useState(false);
  return (
    // <StyledHeader>
    //   <StyledNav>
    //     <SyledUlddOut>
    //       <StyledLi>
    //         <Logo />
    //       </StyledLi>
    //       <StyledLi>
    // <a href="#" onClick={() => SetShowModal(true)}>
    //   Login
    // </a>
    // <Modal
    //   isOpen={ShowModal}
    //   onRequestClose={() => SetShowModal(false)}
    //   ariaHideApp={false}
    //   style={{
    //     overlay: {
    //       justifyContent:"center",
    //       width: "450px",
    //       height: "400px",
    //     },
    //   }}
    // >
    //   <StyledLiModal>
    //     <LoginUser />
    //   </StyledLiModal>
    // </Modal>
    //       </StyledLi>
    //       {/* <Cart/>*/}
    //     </SyledUlddOut>
    //   </StyledNav>
    // </StyledHeader>

    <Nav>
      <a src="/">
        <img src={Logo} alt="Logo" />
      </a>
      <Div>
        <Button href="#" onClick={() => SetShowModal(true)}>
          <FontAwesomeIcon icon={faUser} />
        </Button>

        <Button>
          <FontAwesomeIcon icon={faCartPlus} />
        </Button>
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
          },
        }}
      >
        <div>
          <h1>ze</h1>
          {/* <StyledLiModal> */}
          {/* <LoginUser /> */}
          {/* </StyledLiModal> */}
        </div>
      </ReactModal>
    </Nav>
  );
}

export default Header;
