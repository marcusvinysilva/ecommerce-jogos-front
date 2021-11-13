import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: auto;
  float: none;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

export const LinkGame = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-decoration: none;
  outline: none;
`;

export const Content = styled.div`
  transform-origin: 50% 100%;
  position: relative;
  display: block;
  overflow: hidden;
  background: #160962;
  transform: skew(-7deg);
  --webkit-backface-visibility: hidden;
`;

export const GameImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 500px;
  margin: 0;
  opacity: 0.5;
  transition: 0.3s opacity ease;
  transform: skew(-7deg) scale(1.09);
  --webkit-backface-visibility: hidden;
`;

export const GameInfo = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  justify-content: space-around;
  margin-bottom: 15px;
  text-align: center;
  transform: translateX(-5%);
  h2 {
    position: relative;
    margin-top: 1.8rem;
    margin-bottom: 3rem;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    color: #fff;
    border-bottom: 1px solid #fff;
    font-weight: 400;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
