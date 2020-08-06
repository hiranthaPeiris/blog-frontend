import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import login from './components/login';
import register from './components/register';
import profile from './components/profile';

function App() {
  return (
    <BrowserRouter>
    <login/>
    <Switch>
      <Route path='/' component={login} exact/>
      <Route path='/register' component={register} />
      <Route path='/profile' component={profile}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
