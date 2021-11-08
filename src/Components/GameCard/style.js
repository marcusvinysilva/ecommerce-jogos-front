import styled from 'styled-components'

export const Content = styled.div.attrs(props => ({
  currentIndex: props.currentIndex,
}))`
  display: flex;
  width: 100%;
  transition: all 250ms linear;
  --ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar{
    display: none;
  }
  a {
    color: #fff;
    letter-spacing: 0.06rem;
    word-wrap: break-word;
    text-decoration: none;
    outline: 0;
    display: block;
    transition: 0.3s color ease;
    cursor: pointer;
  }
  div {
      width: 100%;
      opacity: 0.5;
  }
  img {
      object-fit: cover;
      max-width: 100%;
      border: 0;
      display: block;
      overflow: hidden;
      transform-origin: 50% 50%;
      transform: skew(-7deg);
      /* transform: skew(-7deg) translateX(-${props => props.currentIndex * (100 / props.show)} ); */
  }
`;