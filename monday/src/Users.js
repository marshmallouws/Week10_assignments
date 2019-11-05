import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function Users(props) {
    const {users, getData} = props;

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
                <tbody>
                    {users.map((u, i) => ( 
                        <tr key={i}>
                            <td>{u.first + " " + u.last}</td>
                            <td> <Link to={`details/${i}`} onClick={(e) => {
                                getData(u);
                            }}> Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;