import React from 'react';
// Router
import {Switch, Route, useLocation} from 'react-router-dom';
// Pages 
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import MyProjects from './Pages/MyProjects';
import MyProjectsDetails from './Pages/MyProjectsDetails';
// Components
import Nav from '../src/Components/Nav';
// GlobalStyle
import GlobalStyle from './Style/GlobalStyle';
// Animation
import {AnimatePresence} from 'framer-motion';

function App() {
  
  const location = useLocation();
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route exact path="/my-Projects">
          <MyProjects />
        </Route>
        <Route path="/my-Projects/:id">
          <MyProjectsDetails />
        </Route>
        <Route path="/contact-joy">
          <ContactMe />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App;
