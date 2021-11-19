import styled from 'styled-components'

export const DivModal = styled.div`

/* hr{
  border-color: #f00;
   Deixar ele na horizontal quando a largura do aparelho foi maior que 768
  @media (min-widht:768px){
    transform: rotate(90deg);  
 }
} */
`;


export const NavIcons = styled.nav`
  justify-content: space-between;
`;

export const NavHeader = styled.nav`
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
  background: #080325;
  z-index: 10;
  transition: .9 s;  
  @media (max-width: 768px) {
    opacity: 1;
  }
`;

export const Div = styled.div`
  opacity: 0.8;
  padding-right: 20px;
  display: flex;
  align-items: center;
  margin-right: --24px;
`;

export const NavButton = styled.a`
  height: 0px;
  padding-right: 40px;
  border: none !important;
  background: none;
  cursor: pointer;

  @media (max-widht:768px){
    padding-right: 10px;
  }
  
  .usericon {
    color: white;
  }

  .carticon {
    color: white;
  }
`;

export const customStyles ={
  overlay: {
    justifyContent:'center',
  },
  content: {
    margin: '25px',
    backgroundColor: 'black',
    borderRadius:'8px',
    zIndex:'100',
    justifyContent:'center',
  },
}