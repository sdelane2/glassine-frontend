import React from "react";
import Login from '../login/login.js'
import SplashPage from '../SplashPage.js'
import LoginForm from '../login/loginForm.js'

const routes = {
  "/": () => <SplashPage />, 
  "/login": () => <Login />,
  "/login-form": () => <LoginForm />
};
export default routes;