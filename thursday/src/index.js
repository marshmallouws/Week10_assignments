import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import bookFactory from "./bookFactory";
import { BrowserRouter as Router } from "react-router-dom";

const AppWithRouter = () => {
  return (
    <Router>
      <App bookFactory={bookFactory} />
    </Router>
  );
};
//Et rod-element som vi sætter fast på vores dom - det element er hele applikationen.
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));


