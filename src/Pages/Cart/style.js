import styled from 'styled-components';

export const TitleCart = styled.h1`
  text-align: center;
  display: flex;
  font-size: 40px;
  line-height: 55px;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  justify-content: center;
`;

export const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  max-width: 1400px;
  text-align: center;
  align-items: center;
  align-content: flex-start;
  text-align: center;
  margin-bottom: 10px;
  line-height: 50px;
`;

export const DivItems = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  padding: 50px;
  text-align: center;

  h3 {
    text-align: center;
    padding: 1rem;
  }
  div.Buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;
    padding: 10px;
  }
  div.checkout {
    padding: 10px;
  }
  div.clearCart {
    padding: 10px;
  }
`;

export const DivChangeQty = styled.div`
flex-direction: row;

`;


export const DivIncrease = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const DivDecrease = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const DivDelete = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;


