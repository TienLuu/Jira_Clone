import { createGlobalStyle } from "styled-components";
import { color, font } from "../utils/styles";

export default createGlobalStyle`
    html, body, #root {
        height: 100%;
        min-height: 100%;
        min-width: 100%;
    }
    
    body {
        color: ${color.textDarkest};
        line-height: 1.2;
        ${font.size(16)}
        overflow: hidden;
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    *, *:after, *:before, input[type=search]{
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6, strong {
        ${font.bold}
    }

    button {
        background: none;
        border: none;
    }

`;
