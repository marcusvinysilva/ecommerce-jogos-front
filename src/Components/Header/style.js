import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavHeader = styled.nav`
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
  background: #080325;
  z-index: 10;
  transition: 0.9 s;
  @media (max-width: 768px) {
    opacity: 1;
  }
`;

export const NavIcons = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavButton = styled(Link)`
  height: 0px;
  padding-right: 40px;
  border: none !important;
  background: none;

  @media (max-widht: 768px) {
    padding-right: 10px;
  }

  svg {
    color: #fff;
  }
`;

export const customStyles = {
  overlay: {
    justifyContent: 'center',
  },
  content: {
    margin: '25px',
    backgroundColor: 'black',
    borderRadius: '8px',
    zIndex: '100',
    justifyContent: 'center',
  },
};
