import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background-repeat: no-repeat;
        background-image: url("https://th.bing.com/th/id/R.2d925b29bece786a05a68c5afc3c3e97?rik=lRrPx4eYIGHt%2fA&pid=ImgRaw&r=0");
        /* background-color: #080325; */
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji; */
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
`;
