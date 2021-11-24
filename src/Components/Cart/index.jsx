import React from 'react';
import { useCart } from '../../context/CartContext';
import { CartItem } from './CartItem';

export default function CartProduct() {
  const { cartItems } = useCart();
  return (
    <div>
      {cartItems.map((game) => (
        <CartItem key={game.id} game={game} />
      ))}
    </div>
  );
}
