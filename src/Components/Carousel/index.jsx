import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  ContentWrapper,
  Wrapper,
  LeftArrow,
  RightArrow,
} from './style';

export const Carousel = ({ children, show, infiniteLoop }) => {
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (currentIndex || currentIndex < length - show) {
      setCurrentIndex((nextState) => nextState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let i = 0; i < show; i++) {
      output.push(children[length - 1 - i]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let i = 0; i < show; i++) {
      output.push(children[i]);
    }
    return output;
  };

  return (
    <Container>
      <Wrapper>
        {(isRepeating || currentIndex > 0) && (
          <LeftArrow onClick={prev}> &lt; </LeftArrow>
        )}
        <ContentWrapper
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Content
            to="/shop"
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}vw)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
            show={100 / `${show}vw`}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </Content>
        </ContentWrapper>
        {(isRepeating || currentIndex < length - 1) && (
          <RightArrow onClick={next}> &gt; </RightArrow>
        )}
      </Wrapper>
    </Container>
  );
};
