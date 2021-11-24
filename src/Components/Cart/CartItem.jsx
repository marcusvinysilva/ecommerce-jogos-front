import { Delete, PlusOne, Remove } from '@mui/icons-material';
import React from 'react';
import { useCart } from '../../context/CartContext';
import { convertPrice } from '../../utils';

export const CartItem = ({ game }) => {
  const { increase, decrease, removeProduct } = useCart();
  return (
    <>
      <div>
        <h1>{game.gameName}</h1>
        <img src={game.images} alt={game.gameName} />
        <p>Price: {convertPrice(game.price)}</p>
      </div>
      <div>
        <p>Qty: {game.quantity}</p>
      </div>
      <div>
        <button onClick={() => increase(game)}>
          <PlusOne />
        </button>
        {game.quantity > 1 && (
          <button onClick={() => decrease(game)}>
            <Remove />
          </button>
        )}
        {game.quantity === 1 && (
          <button onClick={() => removeProduct(game)}>
            <Delete />
          </button>
        )}
      </div>
    </>
  );
};
