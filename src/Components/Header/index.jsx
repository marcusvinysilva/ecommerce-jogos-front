import React, { useState } from "react";
import ReactModal from "react-modal";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { Logo } from "../Logo/index";
import { LoginUser, tokenultimate }  from "../LoginUser/index";
import Cart from "../Cart/index";
import { JwtHandler } from "../Auth/jwthandler";
import {NavHeader,Div,NavIcons,NavButton} from './style'



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
          content:{
            alignContent:'center',
            alignSelf:'center',
            maxWidth:'100%',
            height: 'auto',
            margin: '25px',
            borderRadius:'8px',
            zIndex:'100',
            justifyContent:'center',
            backgroundImage:'url(https://i1.wp.com/bnel242.com/wp-content/uploads/2019/12/purple-space.jpg?ssl=1)',
            overflow: 'hidden',
          }
        }}
      >
          <LoginUser/>
      </ReactModal>
      {/* <ReactModal
        isOpen={ShowModalCart}
        onRequestClose={() => SetShowModalCart(false)}
        ariaHideApp={false}
        style={}
      >
        <DivModal>
          <Cart  />
        </DivModal>
      </ReactModal> */}
    </NavHeader>
  );
}

export default Header;
