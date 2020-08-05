import React from 'react';
import './App.css';
import {SignIn} from './Component/SignInUI'
// eslint-disable-next-line no-unused-vars
import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <switch>
      <Route path='/' component={SignIn} exact/>
    </switch>
    </BrowserRouter>
  );
}

export default App;
