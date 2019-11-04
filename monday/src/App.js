import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import Users from './Users';
import Details from './Details';

function App() {
  const [user, setUser] = useState({});
  const [index, setIndex] = useState();
  const [picture, setPicture] = useState([]);
  const getUserPath = (index, user, picture) => {
    setIndex(index);
    setUser(user);
    setPicture(picture);
  }
  
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/users">
            <Users getUserPath={getUserPath}/>
          </Route>
          <Route path="/details">
            <Details index={index} user={user} picture={picture}/>
          </Route>
        </Switch>
      </Router>
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
