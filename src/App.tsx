import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import GlobalStyles from './components/shared/style';
import Theme from './components/shared/Theme';
import Prueba from './Prueba';


const Input = styled.input.attrs( props => ({
  placeholder: props.placeholder || 'Ingresa un texto',
  type: props.type || 'text'
}))`
  padding: 1em;
  height: 46px;
`
// Custom Props with TypeScript
interface ButtonProps {
  readonly bg?: string
};
const Button = styled.button<ButtonProps>`
  padding: 1em 2.5em;
  margin: 1em;
  background-color: ${ props => props.bg || '' };
  /* border: none; */
`
// Recordar borrar esto
interface Props {
  message: string
};
const App: React.FC<Props> = (props) => {
  
  return (
    <Theme>
      <div className="App">
        <GlobalStyles />
        <h1> { props.message } </h1>

        <Input/>
        <Input type="date"/>

        <Button>
          Hola
        </Button>

        <Prueba>

        </Prueba>
      </div>
    </Theme>
  );
}



export default App;
