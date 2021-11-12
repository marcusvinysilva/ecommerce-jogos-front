import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import GameDetails from '../Pages/GameDetails'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game-deatails" element={<GameDetails />} />
    </Routes>
  )
}
