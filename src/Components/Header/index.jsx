import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavHeader, Div, NavIcons, NavButton, DivModal } from './style';
import { Logo } from '../Logo/index';
import { LoginUser } from '../LoginUser/index';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Badge, ShoppingCart } from '@mui/icons-material';

function Header() {
  const { itemCount } = useCart();
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
            <Link to="/cart">
              <Badge badgeContent={itemCount} color="primary">
                <ShoppingCart />
              </Badge>
            </Link>
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
      >
        <DivModal>{/* <Cart /> */}</DivModal>
      </ReactModal>
    </NavHeader>
  );
}

export default Header;
