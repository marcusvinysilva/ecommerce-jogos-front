import React from 'react';
import { Authprovider } from './Auth/Authcontext';
import { CartContextProvider } from './CartContext';
import { GamesProvider } from './GameContext';

const GamesContextProvider = ({ children }) => (
  <GamesProvider>
    <Authprovider>
      <CartContextProvider>{children}</CartContextProvider>
    </Authprovider>
  </GamesProvider>
);

export default GamesContextProvider;
