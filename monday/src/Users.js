import React, { useState, useEffect } from "react";
import data from "./data/data.json";
import uuid from "uuid/v1";
import Details from "./Details";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function Users(props) {
    const { getUserPath } = props;
    const [picture, setPicture] = useState({});
    const users = data;

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
                    {users.users.map((u, i) => (
                        
                        <tr key={uuid()}>
                            <td>{u.first + " " + u.last}</td>
                            <td> <Link to={`/details/${i}`} onClick={(e) => {
                                                        setPicture({...u.picture});
                                                        getUserPath(i, u, picture)}}> Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <Router>
                <Switch>
                    <Route path='/details/:index'>
                        <Details/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Users;