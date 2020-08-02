import React, { useState } from 'react';
import searchIcon from '../../../assets/icons/search.svg';
import * as Styled from './Search.styled';
import { SearchProperties } from './Search.type';

export const Search: React.FC<SearchProperties> = ({ search, placeholder }) => {

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
                placeholder={ placeholder }
                onKeyPress={ handleKeyPress } 
                onChange={ handleChange }
            />
        </Styled.Search>
    );
};
