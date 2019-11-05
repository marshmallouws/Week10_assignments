import React, { useState } from "react";
import {
    BrowserRouter as Router,
    useParams,
    useRouteMatch
} from "react-router-dom";

function Details(props) {
    const { user } = props;
    let { index } = useParams();
    const picture = user.picture;

    return (
        <div>
            
                <h1>Seeing data for {user.first + " " + user.last}</h1>
                <div class="column">
                <table>
                <tbody>
                    <tr><th>Gender</th><td>{user.gender}</td></tr>
                    <tr><th>Title</th><td>{user.title}</td></tr>
                    <tr><th>Street</th><td>{user.street}</td></tr>
                    <tr><th>City</th><td>{user.city}</td></tr>
                    <tr><th>State</th><td>{user.state}</td></tr>
                    <tr><th>Zip</th><td>{user.zip}</td></tr>
                    <tr><th>Email</th><td>{user.email}</td></tr>
                    <tr><th>Date of Birth</th><td>{user.dob}</td></tr>
                    <tr><th>Phone</th><td>{user.phone}</td></tr>
                    <tr><th>Cell Phone</th><td>{user.cell}</td></tr>
                    </tbody>
                </table>
            </div>
            <div>
                <img src={picture.large}></img>
            </div>
        </div>
    );

}

export default Details;