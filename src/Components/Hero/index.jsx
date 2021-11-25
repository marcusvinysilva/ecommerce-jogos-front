import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../GlobalButton';
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
            <DivShopButton className="shop">
              <LinkButton to="/shop">Shop Now</LinkButton>
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
