import React from "react";
import {
  BrowserRouter as Router,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Details(props) {
    let { index } = useParams();
    console.log(index);

    /*const { user, index } = props;
    const pictures = user.picture;
    console.log(pictures.large);
    console.log("somethign") */

    return (
        <div>
            <h1>Seeing data for {index}</h1>
        </div> 
    );

}

export default Details;
