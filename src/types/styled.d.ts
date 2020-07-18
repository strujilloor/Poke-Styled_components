import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        font: string,
        colors: {
            primary: string,
            accent: string,
            white: string,
            black: string,
            red: string,  
            gray: {
                darken: string,
                dark: string,
                ligth: string,
                ligthen: string
            },
        },
        sizes: {
            xxl: number,
            xl: number,
            l: number,
            m: number,
            s: number,
            xs: number
        }
    }
}