import React from 'react';
import { CartContextProvider } from './CartContext';
import { GamesProvider } from './GameContext';

const GamesContextProvider = ({ children }) => (
  <GamesProvider>
    <CartContextProvider>{children}</CartContextProvider>
  </GamesProvider>
);

export default GamesContextProvider;
