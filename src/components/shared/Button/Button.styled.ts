import styled from 'styled-components';
import * as Types from './Button.dto';


export const Button = styled.button<Types.Button>(({ theme, color }) => `
    background-color: ${ color };
    color: white;
`);