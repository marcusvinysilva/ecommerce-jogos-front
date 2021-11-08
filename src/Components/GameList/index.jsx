import React, { useEffect } from 'react';
import { Carousel } from "../Carousel";
// import { Card } from '../GameCard'
import { useGames } from '../../context/gameContext';

export default function GameList() {
  const { gameList, getGames } = useGames();
  
  useEffect(() => {
    getGames();
  }, [])

  return (
    <Carousel>
      {gameList.map((game, index) => (
        <div key={index} className='cada-card'>
          {game}
        </div>
      ))}
    </Carousel>
  )
}
