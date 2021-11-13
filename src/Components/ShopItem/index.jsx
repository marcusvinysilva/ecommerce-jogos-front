import React, { useEffect } from 'react';
import { useGames } from '../../context/gameContext';
import { Container, Content, GameInfo, GameImage, LinkGame } from './style';

export const ShopItem = () => {
  const { games, getGames } = useGames();
  useEffect(() => {
    getGames();
  });
  return (
    <>
      {games.map((game, index) => (
        <Container>
          <LinkGame to={`game-details/${game.id}`} key={index}>
            <Content>
              <GameImage src={game.thumbnail} alt={game.title} />
              <GameInfo>
                <h2>{game.title}</h2>
                <div>
                  <p>{game.genre}</p>
                  <p>{game.platform}</p>
                </div>
              </GameInfo>
            </Content>
          </LinkGame>
          <button> add to cart</button>
        </Container>
      ))}
    </>
  );
};
