import './App.css';
import React from 'react'

import {
  Switch,
  Route
} from "react-router-dom";
import AboutPage from './Screens/AboutPage';
import HomePage from './Screens/HomePage';
import ContactPage from './Screens/ContactPage';

function App() {
  return (
    <div className='h-full w-full'>
    
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path='/contact'>
          <ContactPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
