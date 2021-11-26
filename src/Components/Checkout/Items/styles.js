import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;

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
