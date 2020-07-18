import React from 'react'
import * as Styled from './Button.styled';
import * as Types from './Button.dto';

export const Button: React.FC<Types.Button> = ({ children, color = "white", ...properties }) => 
    <Styled.Button color={ color } {...properties} >
        { children }
    </Styled.Button>