import React, { useEffect } from 'react';
import { useGames } from '../../context/gameContext';
import { Carousel } from '../Carousel'

export const Cards = () => {
  const { getGames, gameList } = useGames();

  useEffect(() => {
    getGames();
  }, [])
  return (
    <Carousel
      show={4}
      infiniteLoop
    >
      
      {gameList.map((game, index) => (
        <div key={index}>
          {game}
        </div>
      ))}
    </Carousel>
  )
}
