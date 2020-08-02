import React from 'react';
import * as Styled from './Header.styled';
import Logo from '../Logo/';
import Search from '../Search';


//HEADER: DEFINITION
interface HeaderProps {
    search: (pokemonName: string) => void
}
/**
 * Note: Function type, in TypeScript ☝:
 * let miFunction: (x: number, y: number) => number ;
 * Explanation: receives two parameters of type number, and returns a number
 */

export const Header: React.FC<HeaderProps> = ({ search }) => {
    return (
        <Styled.Header>
            <Logo />
            <Styled.Title>
                Poke API
            </Styled.Title>
            <Search search={ search } placeholder="Ingrese un pokemon" />
        </Styled.Header>
    );
};
