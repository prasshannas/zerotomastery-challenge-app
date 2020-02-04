import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">

        <h1>ZTM Challenge App</h1>

        <nav>
          <ul className="dummy-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/challenges">Challenges</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/challenges">
            <Challenges />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Challenges() {
  return <h2>Challenges</h2>;
}

export default App;
