import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <p>Hello</p>
    <switch>
      <Route path='/' component={SignIn} exact/>
    </switch>
    </BrowserRouter>

import Login from './components/login';
import Register from './components/register';

function App() {
  return (
     // <Login />
     <Register />

  );
}

export default App;
