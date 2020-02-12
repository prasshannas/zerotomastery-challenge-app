import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/home/homepage.component';
import LoginPage from './pages/login/loginpage.component';
import ChallengePage from './pages/challenges/challengepage.components';
import Challenge from './components/challenge/challenge.component';
import './App.scss';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/challenges" component={ChallengePage} />
      <Route path="/challenges/:id" component={Challenge} />
    </Switch>
  </div>
);

export default App;
