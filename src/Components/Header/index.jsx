import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { NavHeader, NavIcons, NavButton, customStyles } from './style';
import { Logo } from '../Logo/index';
import { LoginUser } from '../LoginUser/index';
import { useCart } from '../../context/CartContext';

import Badge from '@mui/material/Badge';
import { Person, ShoppingCart } from '@mui/icons-material';

function Header() {
  const { itemCount } = useCart();
  const [ShowModalLogin, SetShowModalLogin] = useState(false);

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
        style={customStyles}
      >
          <LoginUser/>
      </ReactModal>
    </NavHeader>
  );
}

export default Header;
