import React from "react";
import Login from '../login/login.js'
import SplashPage from '../SplashPage.js'
import LoginForm from '../login/loginForm.js'
import SignupForm from '../login/signupForm.js'


const routes = {
  "/": () => <SplashPage />, 
  "/login": () => <Login />,
  "/login-form": () => <LoginForm />,
  "/signup-form": () => <SignupForm />
};
export default routes;