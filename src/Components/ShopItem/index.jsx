import React, { useEffect } from 'react';
import { useGames } from '../../context/GameContext';
import { useCart } from '../../context/CartContext';

import {
  Container,
  Content as ImageContent,
  GameInfo,
  GameImage,
  LinkGame,
} from './style';

import { DivButton } from '../../Components/GlobalButton';

export const ShopItem = () => {
  const { addProduct, cartItems, increase } = useCart();

  const { games, getGames } = useGames();
  useEffect(() => {
    getGames();
  }, []);

  const isInCart = (gameId) => {
    return !!cartItems.find((item) => item.id === gameId);
  };

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
            {isInCart(game) && (
              <DivButton onClick={() => increase(game)}>Add More</DivButton>
            )}
            {!isInCart(game) && (
              <DivButton onClick={() => addProduct(game)}>Add More</DivButton>
            )}
          </div>
        </Container>
      ))}
    </>
  );
};
