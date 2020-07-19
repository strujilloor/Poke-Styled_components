import React from 'react';
import * as Styled from './Header.styled';
import Logo from '../Logo/';
import Search from '../Search';


//HEADER: DEFINITION
interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <Styled.Header>
            <Logo />
            <Styled.Title>
                Poke API
            </Styled.Title>
            <Search />
        </Styled.Header>
    );
};
