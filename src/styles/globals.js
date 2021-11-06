import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background-color: #080325;
        color: #FFFFff;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
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
