import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages';
import Signin from './Pages/SignIn';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
