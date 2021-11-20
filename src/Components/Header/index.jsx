import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavHeader, Div, NavIcons, NavButton, DivModal } from './style';
import { Logo } from '../Logo/index';
import { LoginUser } from '../LoginUser/index';

function Header() {
  const [ShowModalLogin, SetShowModalLogin] = useState(false);
  const [ShowModalCart, SetShowModalCart] = useState(false);
  return (
    <NavHeader>
      <Logo />
      <Div>
        <NavIcons>
          <NavButton onClick={() => SetShowModalLogin(true)}>
            <FontAwesomeIcon className="usericon" icon={faUser} />
          </NavButton>

          <NavButton onClick={() => SetShowModalCart(true)}>
            <FontAwesomeIcon className="carticon" icon={faShoppingCart} />
          </NavButton>
        </NavIcons>
      </Div>

      <ReactModal
        isOpen={ShowModalLogin}
        onRequestClose={() => SetShowModalLogin(false)}
        ariaHideApp={false}
        style={{
          content: {
            alignContent: 'center',
            alignSelf: 'center',
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
          overlay: {},
          content: {
            backgroundColor: ' #080325',
            borderRadius: '8px',
            minWidth: '1350px',
            height: '100%',
          },
        }}
      >
        <DivModal>{/* <Cart /> */}</DivModal>
      </ReactModal>
    </NavHeader>
  );
}

export default Header;
