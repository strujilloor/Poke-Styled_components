import { HTMLAttributes } from 'react';


export interface SearchProperties extends HTMLAttributes<HTMLElement> {
    submit: (pokemonName: string) => void;
    placeholder: string;
}