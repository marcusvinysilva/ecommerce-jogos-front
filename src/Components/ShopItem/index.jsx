import React, { useEffect } from 'react';
import { useGames } from '../../context/gameContext';
import {
  Container,
  Content as ImageContent,
  GameInfo,
  GameImage,
  LinkGame,
} from './style';

export const ShopItem = () => {
  const { games, getGames } = useGames();
  useEffect(() => {
    getGames();
  });
  return (
    <>
      {games.map((game, index) => (
        <Container key={index}>
          <LinkGame to={`game-details/${game.id}`} key={index}>
            <ImageContent>
              <GameImage src={game.thumbnail} alt={game.title} />
            </ImageContent>
            <GameInfo>
              <h2>{game.title}</h2>
              <div>
                <p>{game.genre}</p>
                <p>{game.platform}</p>
              </div>
            </GameInfo>
          </LinkGame>
          <div>
            <button> add to cart</button>
          </div>
        </Container>
      ))}
    </>
  );
};
