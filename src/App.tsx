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

interface IPokemon {
  image: string,
  name: string,
  details: string
};

const App: React.FC = () => {

  const [state, setState] = useState<IPokemon>({
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    name: "pikachu",
    details: "electric"
  });

  // Destructuring State
  const { image, name, details } = state;

  // Get pokemon from API
  const getPokemon = async (pokemonName: string) => {
    // Api Request
    const pokemon: IPokemon = await getPokemonByName(pokemonName);
    // save to State
    setState( pokemon );
  }
  
  return (
    <Theme> {/* Theme wrap app to provide global css variables */}
      <AppContainer>
        <GlobalStyles /> {/* Global Styles like to font-family ... */}
        
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
