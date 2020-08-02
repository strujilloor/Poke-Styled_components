import React from 'react'
import * as Styled from './Button.styled';
import { ButtonProperties } from './Button.type';

export const Button: React.FC<ButtonProperties> = ({ children, active = true , ...properties }) => {
    return (
        <Styled.Button active={active} {...properties} >
            { children }
        </Styled.Button>
    );
};