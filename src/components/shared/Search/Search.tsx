import React, { useState } from 'react';
import searchIcon from '../../../assets/icons/search.svg';
import * as Styled from './Search.styled';
import { SearchProperties } from './Search.type';

// Extract event types
type FormEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const Search: React.FC<SearchProperties> = ({ placeholder, submit, className }) => {

    // state
    const [value, setValue] = useState('');
    // input handle change function
    const handleChange = (event: InputEvent) => {
        setValue(event.target.value);
    }
    // form handle submit function
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        submit(value);
        setValue('');
    }

    return (
        <Styled.Search onSubmit={ handleSubmit } className={ className }>
            <Styled.IconContainer>
                <Styled.Icon 
                    src={ searchIcon } 
                    alt="search"
                />
            </Styled.IconContainer>
            <Styled.Input 
                type="text"
                placeholder={ placeholder }
                value={ value }
                onChange={ handleChange }
            />
        </Styled.Search>
    );
};
