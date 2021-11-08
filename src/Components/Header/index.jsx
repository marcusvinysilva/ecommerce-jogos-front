import React, { useState, useEffect, useRef } from "react";
import { Logo } from "../Logo/index";
import {LoginUser} from "../LoginUser/index"
import styled from "styled-components";
import Modal from "react-modal";

const StyledHeader = styled.div`
  text-align: center;
  background-color: #ffffff;
`;
const Nav = styled.nav`
  /* text-align: center;
  justify-content: center;
  background-color: #000f;
  opacity: 1; */
  background: #000;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100v - 1000wv));
  opacity: 0.6;
`;

const SyledUlddOut = styled.ul`
  /*c-dropdown*/
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const StyledLi = styled.li`
  -webkit-text-size-adjust: 100%;
`;

const Styleda = styled.a`
color:#fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
`

const StyledLiModal = styled.li`
  
  list-style: none;
  padding-top: 15%;
  padding-left: 35%;
`;

const Divbutton = styled.div`
display: flex;
align-items: center;
right: 10px;
`;

const Div = styled.div`
background: #f000;
opacity: 0.8;
`

const Button = styled.button`
border-radius: 4rem;
background: #261ce1;
padding: 10px 22px;
color: #fff;
border:none;
outline: none;
text-decoration:none;
padding-top: 45px;
width: 20px;
`;

function Header() {
  const [ShowModal, SetShowModal] = useState(false);


  // function Navbar()
  // }  




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
      <img src={Logo} alt="Logo"/>
    </a>
     <Div>
    <Button href="#" onClick={() => SetShowModal(true)}>
              Login
            </Button>
            </Div>
            <Modal
              isOpen={ShowModal}
              onRequestClose={() => SetShowModal(false)}
              ariaHideApp={false}
              style={{
                overlay: {
                  justifyContent:"center",
                  width: "450px",
                  height: "400px",
                },
              }}
            >
              <StyledLiModal>
                <LoginUser />
              </StyledLiModal>
            </Modal>
            </Nav>

  )
}

export default Header;
