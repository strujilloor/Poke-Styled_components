import React from 'react';
import styled, { css } from 'styled-components';

// Ejemplo código css dinámico 
const flex = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;


// Definir atributos por defecto para los styled components
const Input = styled.input.attrs( props => ({
    placeholder: props.placeholder || 'Ingresa un texto',
    type: props.type || 'text'
}))`
    padding: 1em;
    height: 46px;
`;



// Custom Props with TypeScript to Style Components
interface ButtonProps {
    readonly bg?: string
};
const Button = styled.button<ButtonProps>`
    padding: 1em 2.5em;
    margin: 1em;
    background-color: ${ props => props.bg || '' };
    /* border: none; */
`;

interface Props {
    message: string
};
const Prueba: React.FC<Props> = () => {
    return (
        <div>

            <main></main> {/* preguntar sobre el main */}
        </div>
    );
};

export default Prueba;
