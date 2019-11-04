import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import Users from './Users';

const userPath = (index) => {

}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/users">
            <Users getUserPath={userPath}/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h1>Welcome to this awesome app!</h1>
      <Link to={`users`}>See all users</Link>
    </div>
  )
}

export default App;
