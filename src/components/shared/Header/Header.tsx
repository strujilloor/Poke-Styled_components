import React from 'react';
import * as Styled from './Header.styled';
import Logo from '../Logo/';
import Search from '../Search';


//HEADER: DEFINITION
interface HeaderProps {
    search: (pokemonName: string) => void
}

export const Header: React.FC<HeaderProps> = ({ children, search }) => {
    return (
        <Styled.Header>
            <Logo />
            <Styled.Title>
                Poke API
            </Styled.Title>
            <Search search={ search } />
        </Styled.Header>
    );
};
