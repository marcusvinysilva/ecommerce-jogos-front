import styled from 'styled-components'

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 202px;
    overflow: hidden;
`

export const GameCard = styled.a`
    width: 500px;
    border: 1px solid #ccc;
    color: #fff;
    letter-spacing: 0.06rem;
    word-wrap: break-word;
    transform: skew(-7deg);
    text-decoration: none;
    outline: 0;
    display: block;
    transition: 0.3s color ease;
    cursor: pointer;
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
    }
`
