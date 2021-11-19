import React from 'react';
import Button from '../GlobalButton';
import { GlobalTitle } from '../GlobalTitle';
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
            <GlobalTitle>{title ? title : 'Ultimate'}</GlobalTitle>
            <div>
              <Button to="/shop">Shop Now</Button>
            </div>
          </Info>
        </div>
      </InfoContainer>
    </Container>
  );
};
