import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        margin: 0;
    }

    *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
    }

    body {
        font-family: 'Grenze Gotisch', cursive;
        font-weight: 400; 
        line-height: 1.37;
        margin: 0;
    }

    html, body, main {
        height: 100%;
    }
`;