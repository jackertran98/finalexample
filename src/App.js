import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checksignin from "./containers/Checksignin";
import Statecheck from "./containers/Statecheck";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/signUp";
import SignIn from "./components/signIn";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signin">
            <Checksignin />
            <Statecheck />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
