import React from 'react';
import styled from 'styled-components';

// Global Styles
import GlobalStyles from './components/shared/style';
// Global css variables
import Theme from './components/shared/Theme';
// Components
import Header from './components/shared/Header';
import Card from './components/shared/Card';

interface Props {

};
const App: React.FC<Props> = (props) => {
  
  return (
    <Theme>
      <AppContainer>
        <GlobalStyles />
        
        <Header />

        <Main>
          <Card 
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            name="pikachu"
            details="electric"
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
