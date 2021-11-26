import { Delete, PlusOne, Remove } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import React from 'react';
import { useCart } from '../../context/CartContext';
import { convertPrice } from '../../utils';
import { DivDecrease, DivDelete, DivIncrease } from '../../Pages/Cart/style';
import {
  Container,
  LinkStyle,
  ImageContent,
  DivGameInfo,
  GameTitle,
  Divqty,
} from './style';

export const CartItem = ({ game }) => {
  const { increase, decrease, removeProduct } = useCart();
  return (
    <>
      <Container className="teste">
        <ImageContent>
          <LinkStyle to="/#">
            <img src={game.images} alt={game.gameName} />
          </LinkStyle>
        </ImageContent>
        <DivGameInfo>
          <GameTitle>
            <h3>
              {game.gameName} - {convertPrice(game.price)}
            </h3>
          </GameTitle>
          <div>
            <Divqty>
              <p>Qty: {game.quantity}</p>
            </Divqty>

            <DivIncrease className="increase">
              <button onClick={() => increase(game)}>
                <PlusOne sx={{ color: blue[500] }} />
              </button>
            </DivIncrease>
            {game.quantity > 1 && (
              <DivDecrease className="decrease">
                <button onClick={() => decrease(game)}>
                  <Remove color="error" />
                </button>
              </DivDecrease>
            )}
            {game.quantity === 1 && (
              <DivDelete className="delete">
                <button onClick={() => removeProduct(game)}>
                  <Delete color="error" />
                </button>
              </DivDelete>
            )}
          </div>
        </DivGameInfo>
      </Container>
    </>
  );
};
