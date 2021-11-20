import React from 'react';
import { Cards } from '../GameCard';
import { ListHeader } from './style';
import { LinkButton } from '../GlobalButton';
import { GlobalTitle } from '../GlobalTitle';

export default function GameList() {
  return (
    <>
      <ListHeader>
        <GlobalTitle>Game List</GlobalTitle>
        <div>
          <LinkButton to="/shop">more</LinkButton>
        </div>
      </ListHeader>

      <Cards />
    </>
  );
}
