import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import login from './components/login';
import register from './components/register';

function App() {
  return (
    <BrowserRouter>
    <login/>
    <switch>
      <Route path='/' component={login} exact/>
      <Route path='/register' component={register} />
    </switch>
    </BrowserRouter>
  );
}

export default App;
