import React from 'react';
import { Cards } from '../GameCard';
import { ListHeader } from './style';
import {GlobalButton} from '../GlobalButton';
import {GlobalTitle} from '../GlobalTitle';

export default function GameList() {
  return (
    <>
      <ListHeader>
        <GlobalTitle>Game List</GlobalTitle>
        <GlobalButton>more</GlobalButton>
      </ListHeader>
      
      <Cards />
    </>
  )
}
