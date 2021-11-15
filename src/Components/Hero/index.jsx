import React from 'react';
import { Container, Content, Parallax, InfoContainer, Info } from './style';
export const Hero = ({ image, title }) => {
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
            <h1>{title ? title : 'Ultimate'}</h1>
            <button>Shop Now</button>
          </Info>
        </div>
      </InfoContainer>
    </Container>
  );
};
