import React, { useEffect } from 'react';
import { useGames } from '../../context/GameContext';
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
  }, []);

  console.debug('Category: ', games);

  return (
    <>
      {games.map((game, index) => (
        <Container key={index}>
          <LinkGame to={`game-details/${game.id}`} key={index}>
            <ImageContent>
              <GameImage src={game.images} alt={game.gameName} />
            </ImageContent>
            <GameInfo>
              <h2>{game.gameName}</h2>
              <h6>{game.price}</h6>
              <div>
                <p>{game.categoryId}</p>
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
