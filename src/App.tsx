import React, { useState } from 'react';
import styled from 'styled-components';
import { getPokemonByName } from './services/PokemonService';

// Global Styles
import GlobalStyles from './components/shared/style';
// Global css variables
import Theme from './components/shared/Theme';
// Components
import Header from './components/shared/Header';
import Card from './components/shared/Card';

interface Pokemon {
  image: string,
  name: string,
  details: string
};

const App: React.FC = (props) => {
  const [state, setState] = useState({
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    name: "pikachu",
    details: "electric"
  });

  const { image, name, details } = state;

  const getPokemon = async (pokemonName: string) => {
    const pokemon: Pokemon = await getPokemonByName(pokemonName);
    setState(pokemon);
  }
  
  return (
    <Theme>
      <AppContainer>
        <GlobalStyles />
        
        <Header search={ getPokemon }/>

        <Main>
          <Card 
            image={ image }
            name={ name }
            details={ details }
          />
        </Main>
      </AppContainer>
    </Theme>
  );
}


const Main = styled.main`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f8f8;
`;

const AppContainer = styled.div`
  height: 100vh;
`;



export default App;
