import React from 'react';
import searchIcon from '../../../assets/icons/search.svg';
import * as Styled from './Search.styled';

interface SearchProps {

}
export const Search: React.FC<SearchProps> = () => {
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
            />
        </Styled.Search>
    );
};
