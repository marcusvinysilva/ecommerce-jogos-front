import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background-color: #080325;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        font-family: 'Lato', sans-serif;
    }
    section {
        max-width: 1400px;
        padding: 0.1px;
        margin: 0 auto;
        overflow: hidden;
        background: #080325;
        display: block;
        box-sizing: border-box;
    }
`
