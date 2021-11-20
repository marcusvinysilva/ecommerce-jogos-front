import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import CartProduct from '../../Components/Cart';
import Header from '../../Components/Header';

export default function Cart() {
  const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } =
    useCart();

  return (
    <section>
      <Header />
      <div>
        <h1>Cart page</h1>
      </div>
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
      {cartItems.length > 0 && (
        <div>
          <p>Total items: {itemCount}</p>
          <p>Total payment: {total}</p>
          <hr />
          <div>
            <button onClick={handleCheckout}>Checkout</button>
            <button onClick={clearCart}>Clear cart</button>
          </div>
        </div>
      )}
    </section>
  );
}
