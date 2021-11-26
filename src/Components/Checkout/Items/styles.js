import styled from 'styled-components';

export const Container = styled.div`
  display:block;
  width: 100%;
  margin-top:10vh;
  
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
  text-align: left;

  thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid;
    border-color: rgba(255, 255, 255, 0.1);
    padding: 8px;
    line-height: 1.5;
    text-align: left;
  }

  tbody > tr > td,
  tfoot > tr > th {
    padding: 8px;
    line-height: 1.4;
    vertical-align: top;
    border-top: 1px solid;
    border-color: rgba(255, 255, 255, 0.1);
  }
`;


export  const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  max-width: 1400px;
  text-align: center;
  align-items: center;
  align-content: flex-start;
  text-align: center;
  margin-bottom: 10px;
  line-height: 50px;
` 
;