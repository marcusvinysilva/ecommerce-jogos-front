import React, { useState } from "react";
import { Logo } from "../Logo/index";
import { LoginUser } from "../LoginUser/index";
import styled from "styled-components";
import ReactModal from "react-modal";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "./Modalimg";

const DivModal = styled.div`

hr{
  border-color: #f00;
   /* Deixar ele na horizontal quando a largura do aparelho foi maior que 768 */
  @media (min-widht:768px){
    transform: rotate(90deg);  
 }
}
`;

const NavIcon = styled.nav`
  justify-content: space-between;
`;

const NavHeader = styled.nav`
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  opacity: 0.6;
  background: #080325;
  z-index: 10;
  /* transition: .9 s; */  
  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const Div = styled.div`
  opacity: 0.8;
  padding-right: 20px;
  display: flex;
  align-items: center;
  margin-right: --24px;
`;

const NavButton = styled.button`
  height: 0px;
  /* padding: 24px 32px; */
  /* padding-top: 50%; */
  /* padding-left: 30%; */
  padding-right: 40px;
  border: none !important;
  background: none;
  cursor: pointer;
  /* margin: 0px 14px; */
  
  @media (max-widht:768px){
    /* padding: 12px 16px */
    padding-right: 10px;
  }
  
  .usericon {
    color: white;
  }

  .carticon {
    color: white;
  }
`;

function Header() {
  const [ShowModal, SetShowModal] = useState(false);
  return (
    <NavHeader>
      <Logo />
      <Div>
        <NavIcon>
          <NavButton onClick={() => SetShowModal(true)}>
            <FontAwesomeIcon className="usericon" icon={faUser} />
          </NavButton>

          <NavButton>
            <FontAwesomeIcon className="carticon" icon={faShoppingCart} />
          </NavButton>
        </NavIcon>
      </Div>

      <ReactModal
        isOpen={ShowModal}
        onRequestClose={() => SetShowModal(false)}
        ariaHideApp={false}
        style={{
          overlay: {
          },
          content: {
            backgroundColor: ' #080325',
            borderRadius:'8px',
          },
        }}
      >
        <DivModal>
          <LoginUser />
          <hr/>
          <Image />
        </DivModal>
      </ReactModal>
    </NavHeader>
  );
}

export default Header;
