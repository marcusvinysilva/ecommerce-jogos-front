import React, { useEffect, useParams } from 'react';
import styled from 'styled-components';
import { LinkButton, DivButton } from '../GlobalButton';
import { GlobalTitle } from '../GlobalTitle';

import { Container, Content, Parallax, InfoContainer, Info } from './style';
import { useCart } from '../../context/CartContext';
import { useGames } from '../../context/GameContext';

export const Hero = ({ image, title, id }) => {
  const { addProduct, cartItems, increase } = useCart();

  const isInCart = (gameId) => {
    console.log('gameId', gameId);
    return !!cartItems.find((item) => item.id === gameId);
  };

  const { selectedGame, getSelectedGame } = useGames();

  useEffect(() => {
    if (!!id) {
      const gameId = id;
      getSelectedGame(gameId);
    }
  }, []);

  console.log('selectedGame', selectedGame);

  return (
    <Container>
      <Content>
        <Parallax>
          <img
            src={image ? image : `http://placehold.it/1400x550`}
            alt={title ? title : 'unknown'}
          />
        </Parallax>
      </Content>
      <InfoContainer>
        <div>
          <Info>
            <GlobalTitle>{title ? title : 'Ultimate'}</GlobalTitle>
            <DivShopButton className="shop">
              {!!id ? (
                <LinkButton to={`/shop/game-details/${id}`}>More</LinkButton>
              ) : (
                <>
                  {isInCart(selectedGame.id) && (
                    <DivButton onClick={() => increase(selectedGame)}>
                      Add More
                    </DivButton>
                  )}
                  {!isInCart(selectedGame.id) && (
                    <DivButton onClick={() => addProduct(selectedGame)}>
                      Add to Cart
                    </DivButton>
                  )}
                </>
              )}
            </DivShopButton>
          </Info>
        </div>
      </InfoContainer>
    </Container>
  );
};

const DivShopButton = styled.div`
  transform: skew(-7deg);
`;
