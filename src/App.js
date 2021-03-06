import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
            <Route path="/Checkout">
              <h1>Checkout</h1>
            </Route>
            <Route path="/Login">
              <h1>Login</h1>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
