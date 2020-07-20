import React, { useState } from 'react';
import searchIcon from '../../../assets/icons/search.svg';
import * as Styled from './Search.styled';

interface SearchProps {
    search: (pokemonName: string) => void
}
export const Search: React.FC<SearchProps> = ({ search }) => {

    const [pokemon, setPokemon] = useState('');

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            console.log('enter press here! ');
            search(pokemon);
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPokemon(event.target.value);
    }
    return (
        <Styled.Search>
            <Styled.IconContainer>
                <Styled.Icon 
                    src={ searchIcon } 
                    alt="search"
                />
            </Styled.IconContainer>
            <Styled.Input 
                type="text"
                placeholder="Ingrese un Pokemon"
                onKeyPress={ handleKeyPress } 
                onChange={ handleChange }
            />
        </Styled.Search>
    );
};
