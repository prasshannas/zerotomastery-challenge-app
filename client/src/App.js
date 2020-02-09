import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.component";
import LoginPage from "./pages/login/loginpage.component";
import ChallengePage from "./pages/challenges/challenge.components";
import "./App.scss";


const App = () => {
    return ( 
      <div className = 'app'>
        <Header />
        <Switch >
           <Route exact path = '/' component = { HomePage }  /> 
            <Route path = '/login' component = { LoginPage }/> 
            <Route path = '/challenges' component = { ChallengePage }/>
         </Switch >
         </div>
    );
};



export default App;
