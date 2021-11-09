import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Arrow = styled.button`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
`;

export const LeftArrow = styled(Arrow)`
  left: 24px;
`;

export const RightArrow = styled(Arrow)`
  right: 24px;
`;

export const Content = styled.div`
  display: flex;
  transition: all 250ms linear;
  --ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar, ::-webkit-scrollbar{
    display: none;
  }

  *{
    width: 33vw;
    flex-shrink: 0;
    flex-grow: 1;
  }
  
  div {
    opacity: 0.5;
    transition: 0.5s ;
    :hover {
      cursor: pointer;
      opacity: 1;
    }
  }
  img {
    object-fit: cover;
    border: 0;
    display: block;
    overflow: hidden;
    transform-origin: 50% 50%;
    transform: skew(-7deg);
  }
`;

