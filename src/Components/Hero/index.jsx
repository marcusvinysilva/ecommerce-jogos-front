import React from 'react'
import { Container, Content, Parallax, InfoContainer, Info } from './style'
export const Hero = () => {
    return (
        <Container>
            <Content>
                <Parallax>
                    <img src="http://placehold.it/1400x550" alt="text" />
                </Parallax>
            </Content>
            <InfoContainer>
                <div>
                    <Info>
                        <h1>Team Ultimate</h1>
                        <button>Shop Now</button>
                    </Info>
                </div>
            </InfoContainer>
        </Container>
    )
}
