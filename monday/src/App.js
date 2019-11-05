import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import Users from './Users';
import Details from './Details';
import data from "./data/data.json";

function App() {
  const [users, setUsers] = useState();
  const [user, setUser] = useState({});
  const [index, setIndex] = useState();
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    setUsers(data);
    console.log(users);
  });
  
  //setUsers(...data.users);
  const getUserPath = (index, user, picture) => {
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
            <Users getUserPath={getUserPath} users={users}/>
          </Route>
          <Route path="/details/:index">
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
