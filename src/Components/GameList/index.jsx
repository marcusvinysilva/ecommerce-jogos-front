import React from 'react';
import { Cards } from '../GameCard';
import { ListHeader } from './style';
import { LinkButton } from '../GlobalButton';
import { GlobalTitle } from '../GlobalTitle';
import styled from 'styled-components';

export default function GameList() {
  return (
    <>
      <ListHeader>
        <GlobalTitle>Game List</GlobalTitle>
        <DivButtonMore>
          <LinkButton to="/shop">more</LinkButton>
        </DivButtonMore>
      </ListHeader>

      <Cards />
    </>
  );
}

const DivButtonMore = styled.div`
  transform: skew(-7deg);
`;

