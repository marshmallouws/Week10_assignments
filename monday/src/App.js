import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import './App.css';
import Users from './Users';
import Details from './Details';
import data from "./data/data.json";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([{}]);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    setUsers(data.users);
    setIsLoaded(true);
    console.log(users)
  },[isLoaded]);

  const getData = (user) => {
    setUser({...user});
  }
  
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/users">
            <Users isLoaded={isLoaded} users={users} getData={getData}/>
          </Route>
          <Route path="/details/:index">
            <Details user={user}/>
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
