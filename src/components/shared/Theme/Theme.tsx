import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

// theme is just an Object, that contains the css variables of my app
export const theme: DefaultTheme = {
    background: {
        logo: "https://pngriver.com/wp-content/uploads/2018/04/Download-Pokemon-PNG-Clipart.png"
    },
    color: {
        primary: '#FFF',
        accent: '#F5A831 ',
        white: '#FFFFFF',
        black: '#000',
        red: '#FF8888',  
        gray: {
            darken: '#373B42',
            dark: '#555A65',
            light: '#B4BED5',
            lighter: '#F5F8FA'
        },
        yellow: {
            light: '#F0DAB7'
        }
    },
    sizes: {
        xxl: 41,
        xl: 30,
        l: 22,
        m: 18,
        s: 14,
        xs: 11
    },
    shadows : {
        elevate: '2px 2px 3px rgba(1, 35, 97, 0.25), -2px -2px 3px #FFFFFF',
        down: '1px 1px 2px rgba(1, 35, 97, 0.25), -1px -1px 2px rgba(255, 255, 255, 0.75)'
    }
};


export const Theme: React.FC = ({ children }) => (
    <ThemeProvider theme={ theme }>
        { children }
    </ThemeProvider>
);