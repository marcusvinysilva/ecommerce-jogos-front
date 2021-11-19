import React from 'react';
import { Cards } from '../GameCard';
import { ListHeader } from './style';
import Button from '../GlobalButton';
import { GlobalTitle } from '../GlobalTitle';

export default function GameList() {
  return (
    <>
      <ListHeader>
        <GlobalTitle>Game List</GlobalTitle>
        <div>
          <Button to="/shop">more</Button>
        </div>
      </ListHeader>

      <Cards />
    </>
  );
}
