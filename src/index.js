import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import {BrowserRouter as Router, Route} from 'react-router-dom'



ReactDOM.render(
  <Auth0Provider
    domain="dev-vewj9m61.us.auth0.com"
    clientId="9Z97vQDPlzD7zB5qsqK4i2FOaEULc8JY"
    redirectUri={window.location.origin}
  >
    <Router>
      <Route>
    <App />
    </Route>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
