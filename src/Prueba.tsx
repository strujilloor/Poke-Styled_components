import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';


const Button = styled.button`
    padding: 1em 2em;
    margin: 0em 2em;
    background-color: ${ props => props.theme.colors.accent }
`;

interface Props {

};

const Prueba: React.FC<Props> = () => {
    const themeContext = useContext(ThemeContext);

    console.log('Current theme: ', themeContext);
    return (
        <div>
            <Button>Hola mundo</Button>
        </div>
    );
};

export default Prueba;
