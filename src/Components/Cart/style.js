import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

`;
export const ImageContent = styled.div`
  color: inherit;
  text-decoration: none;
  outline: none;
  position: relative;
  display: block;
  width: 20%; //alterei de 33,33% //
  transform: skew(-7deg) scale(1.098);
  margin-left: 45px; // adicionei esta margem//
  padding: 8px; //add padding
  :hover{
    transition: 0.3s opacity ease;

  }
`;

export const LinkStyle = styled(Link)`
  overflow: hidden;
  background: #160962;
  transform: skew(-7deg);
  transform-origin: 50% 50%;
  color: inherit;
  text-decoration: underline;
  transition: 0.3s color ease;
  cursor: pointer;
  img {
    height: auto;
    width: 100%;
    opacity: 0.8;
    -webkit-transition: 0.3s opacity ease;
    -o-transition: 0.3s opacity ease;
    transition: 0.3s opacity ease;
    -webkit-transform: skew(-7deg) scale(1.098);
    -ms-transform: skew(-7deg) scale(1.098);
    transform: skew(-7deg) scale(1.098);
    vertical-align: middle;
    float: left;


    }
`;

export const DivGameInfo = styled.div`
  width: 66.66%;
  display: flex;
  justify-content: space-evenly;
  padding-left: 60px;
  align-self: center;

  :hover{
    transition: 0.3s opacity ease;
  }

`;

export const GameTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;

  h3 {
    line-height: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    font-size: 30px;
    line-height: 70px;
  }
`;

export const Divqty = styled.div`
  padding-top: 30px;
  align-self: center;
  justify-content: space-around;
  margin: 10px;
`;
