import React, { useEffect, useState } from 'react'
import { Container, Content, ContentWrapper, Wrapper, LeftArrow, RightArrow } from './style'

export const Carousel = ({ children }) => {

  console.log(children.length)
  const [touchPosition, setTouchPosition] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children);
  }, [children]);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(nextState => nextState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next()
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  }
  return (
    <Container className='container'>
      <Wrapper className='wrapper'>
        <LeftArrow onClick={prev}> &lt; </LeftArrow>
        <ContentWrapper className='content-wrapper' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <Content className='area-cards' currentIndex={currentIndex}>
            {children}
          </Content>
        </ContentWrapper>
        <RightArrow onClick={next} > &gt; </RightArrow>
      </Wrapper>
    </Container>
  )
}
