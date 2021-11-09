import React from 'react';
import { Cards } from '../GameCard';
import { ListHeader } from './style';

export default function GameList() {
  return (
    <>
      <ListHeader>
        <h1>Games</h1>
        <button>more</button>
      </ListHeader>
      
      <Cards />
    </>
  )
}
