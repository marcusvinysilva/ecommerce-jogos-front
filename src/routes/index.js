import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import GameDetails from '../Pages/GameDetails';
import ShopList from '../Pages/ShopList';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopList />} />
      <Route path="/shop/game-details/:id" element={<GameDetails />} />
    </Routes>
  );
};
