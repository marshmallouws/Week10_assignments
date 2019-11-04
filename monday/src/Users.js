import React, { useState, useEffect } from "react";
import data from "./data/data.json";
import uuid from "uuid/v1";
import Details from "./Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Users(props) {
  const { getUserPath } = props;
  const [user, setUser] = useState({});
  const [index, setIndex] = useState();
  const users = data;
  //const [user, setUser] = {};

  return (
    <div>
      <h1>All users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        {/*Details should be a link*/}
        <tbody>
          {users.users.map((u, index) => (
            <tr key={uuid()}>
              <td>{u.first + " " + u.last}</td>
              <td>
                <Link
                  to={`details/${index}`}
                  onClick={e => {
                    setIndex(index);
                  }}
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Router>
        <Switch>
            <Route path='/details/:index' component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default Users;