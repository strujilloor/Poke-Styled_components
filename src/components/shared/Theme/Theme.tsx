import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

// theme is just an Object, that contains the css variables of my app
export const myTheme: DefaultTheme = {
    font: "'Grenze Gotisch', cursive",
    colors: {
        primary: '#1159F5',
        accent: '#28D8A1',
        white: '#FFF',
        black: '#000',
        red: '#FF8888',  
        gray: {
            darken: '#373B42',
            dark: '#555A65',
            ligth: '#B4BED5',
            ligthen: '#F5F8FA'
        },
    },
    sizes: {
        xxl: 41,
        xl: 30,
        l: 22,
        m: 18,
        s: 14,
        xs: 11
    }
};


export const Theme: React.FC = ({ children }) => (
    <ThemeProvider theme={ myTheme }>
        { children }
    </ThemeProvider>
);