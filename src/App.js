import React from 'react';
// Pages & Components
import AboutMe from './Pages/AboutMe';
import Nav from '../src/Components/Nav';

// GlobalStyle
import GlobalStyle from './Style/GlobalStyle';


function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AboutMe />
    </>
  )
}

export default App;
