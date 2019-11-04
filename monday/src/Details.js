import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function Details(props) {
    const {user} = props;
    let { index } = useParams();

    return (
        <h1>Seeing details for a specific user: {index}</h1>
    );

}

export default Details;