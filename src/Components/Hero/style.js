import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    min-height: 550px;
    overflow: hidden;
    background: #160962;
`

export const Content = styled.div`
    position: absolute;
    background-position: 50% 0;
    background-attachment: initial;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 0;
`

export const Parallax = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;

    img {
        object-fit: cover;
        object-position: 50% 50%;
        max-width: none;
        top: 0px;
        left: 0.1px;
        overflow: hidden;
        pointer-events: none;
        margin-top: 0px;
        transform: translate3d(0px, 25px, 0px);
        z-index: -1;
    }
`

export const InfoContainer = styled.div`
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    width: 100%;
    padding: 80px 0;
`

export const Info = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1200px) {
        width: 1170px;
    }
    @media (min-width: 992px) {
        width: 972px;
    }
    @media (min-width: 768px) {
        width: 750px;
    }
`
