import React, { useState, useEffect } from "react";
import data from "./data/data.json"
import uuid from "uuid/v1";
import Details from "./Details";

function Users(props) {
    const {getUserPath} = props;
    const [user, setUser] = useState({});
    const users = data;
    //const [user, setUser] = {};

    const seeDetails = () => {
        <Details user={user}/>
    }

    return (
        <div>
            <h1>All users</h1>
            <table>
                <thead><tr>
                    <th>Name</th>
                    <th>Details</th>
                </tr></thead>{/*Details should be a link*/}
                <tbody>
                    {users.users.map(u => (
                        <tr key={uuid()}>
                            <td>{u.first + " " + u.last}</td>
                            <td><a href="#" onClick={(e) => {e.preventDefault(); setUser(u); seeDetails(); getUserPath(index)}}>Details</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Users;