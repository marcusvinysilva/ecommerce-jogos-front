import React, { useState } from "react";
import { Logo } from "../Logo/index";
import { LoginUser } from "../LoginUser/index";
import ReactModal from "react-modal";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "../Cart/index";
import {NavHeader,Div,NavIcons,NavButton,DivModal} from './style'



function Header() {
  const [ShowModalLogin, SetShowModalLogin] = useState(false);
  const [ShowModalCart, SetShowModalCart] = useState(false);
  return (
    <NavHeader>
      <Logo />
      <Div>
        <NavIcons>
          <NavButton onClick={() => SetShowModalLogin(true)}>
            <FontAwesomeIcon className="usericon" icon={faUser}/>
          </NavButton>
          
        
           <NavButton onClick={() => SetShowModalCart(true)}>
            <FontAwesomeIcon className="carticon" icon={faShoppingCart}/>
          </NavButton>
        </NavIcons>
      </Div>

      <ReactModal
        isOpen={ShowModalLogin}
        onRequestClose={() => SetShowModalLogin(false)}
        ariaHideApp={false}
        style={{
          overlay: {
          },
          content: {
            margin: '25px',
            backgroundColor: ' #080325',
            borderRadius:'8px',
            // maxWidth:'1250px',
            // height: '100%',
          },
        }}
      >
          <LoginUser />
      </ReactModal>
      <ReactModal
        isOpen={ShowModalCart}
        onRequestClose={() => SetShowModalCart(false)}
        ariaHideApp={false}
        style={{
          overlay: {
          },
          content: {
            backgroundColor: ' #080325',
            borderRadius:'8px',
            minWidth:'1350px',
            height: '100%',
          },
        }}
      >
        <DivModal>
          <Cart  />
        </DivModal>
      </ReactModal>
    </NavHeader>
  );
}

export default Header;
