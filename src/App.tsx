import React from 'react';

// Global Styles
import GlobalStyles from './components/shared/style';
// Global css variables
import Theme from './components/shared/Theme';
// Components
import Header from './components/shared/Header';

interface Props {

};
const App: React.FC<Props> = (props) => {
  
  return (
    <Theme>
      <div className="App">
        <GlobalStyles />
        
        <Header />

        <main></main>
      </div>
    </Theme>
  );
}



export default App;
