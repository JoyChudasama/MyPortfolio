import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Pages 
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import MyProjects from './Pages/MyProjects';

// Components
import Nav from '../src/Components/Nav';

// GlobalStyle
import GlobalStyle from './Style/GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route path="/my-Projects">
          <MyProjects />
        </Route>
        <Route path="/contact-joy">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
