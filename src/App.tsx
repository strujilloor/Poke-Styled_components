import React, { useState } from 'react';
import { getPokemonByName } from './services/PokemonService';

// Global Styles
import GlobalStyles from './components/shared/style';
// Global css variables
import Theme from './components/shared/Theme';
// Components
import Header from './components/shared/Header';
// Styled Components
import * as Styled from './App.style';

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
      <GlobalStyles /> {/* Global Styles like to font-family ... */}
      <Styled.AppContainer>
        <Header search={ getPokemon }/>

        <Styled.Main>
          <Styled.Card 
            image={ image }
            name={ name }
            details={ details }
          />
        </Styled.Main>
      </Styled.AppContainer>
    </Theme>
  );
}


export default App;
