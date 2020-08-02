import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        background: {
            logo: string
        },
        color: {
            primary: string,
            accent: string,
            white: string,
            black: string,
            red: string,
            gray: {
                darken: string,
                dark: string,
                light: string,
                lighter: string
            },
            yellow: {
                light: string
            },
        },
        sizes: {
            xxl: number,
            xl: number,
            l: number,
            m: number,
            s: number,
            xs: number
        },
        shadows: {
            elevate: string,
            down: string
        }
    }
}