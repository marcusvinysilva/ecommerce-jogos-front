import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { useCart } from '../../context/CartContext';
import CartProduct from '../../Components/Cart';
import Header from '../../Components/Header';
import { convertPrice } from '../../utils';
import { TitleCart, Footer, DivItems } from './style';

export default function Cart() {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } =
    useCart();

  return (
    <section>
      <Header />
      <div>
        <TitleCart>Cart </TitleCart>
      </div>

      {cartItems.length > 0 && (
        <>
          <DivItems>
            <div>
              <h3>Total items: {itemCount}</h3>
              <h3>Total payment: {convertPrice(total)}</h3>
            </div>
            <div className="Buttons">
              <div className="checkout">
                <Button variant="contained" onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
              <div className="clearCart">
                <Button variant="outlined" color="error" onClick={clearCart}>
                  Clear cart
                </Button>
              </div>
            </div>
          </DivItems>
        </>
      )}
      <div>
        {cartItems.length > 0 ? <CartProduct /> : <p>Your cart is empty</p>}
      </div>
      <div>
        {checkout && (
          <div>
            <p>Checkout successful</p>
            <Link to="/">Buy more</Link>
          </div>
        )}
      </div>
      <Footer>&copy; All rights reserved - {new Date().getFullYear()}</Footer>
    </section>
  );
}