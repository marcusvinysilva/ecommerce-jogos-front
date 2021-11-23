import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { NavHeader, NavIcons, NavButton } from './style';
import { Logo } from '../Logo/index';
import { LoginUser } from '../LoginUser/index';
import { useCart } from '../../context/CartContext';

import Badge from '@mui/material/Badge';
import { Person, ShoppingCart } from '@mui/icons-material';

function Header() {
  const { itemCount } = useCart();
  const [ShowModalLogin, SetShowModalLogin] = useState(false);
  const [ShowModalCart, SetShowModalCart] = useState(false);

  return (
    <NavHeader>
      <Logo />

      <NavIcons>
        <NavButton to="/#" onClick={() => SetShowModalLogin(true)}>
          <Person />
        </NavButton>

        <NavButton to="/cart">
          <Badge badgeContent={itemCount} color="primary">
            <ShoppingCart color="action" />
          </Badge>
        </NavButton>
      </NavIcons>

      <ReactModal
        isOpen={ShowModalLogin}
        onRequestClose={() => SetShowModalLogin(false)}
        ariaHideApp={false}
        style={{
          content: {
            alignContent: 'center',
            alignSelf: 'center',
            maxWidth: '100%',
            height: 'auto',
            margin: '25px',
            borderRadius: '8px',
            zIndex: '100',
            justifyContent: 'center',
            backgroundImage:
              'url(https://i1.wp.com/bnel242.com/wp-content/uploads/2019/12/purple-space.jpg?ssl=1)',
            minWidth: '800px',
            minHeight: '450px',
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
      ></ReactModal>
    </NavHeader>
  );
}

export default Header;
