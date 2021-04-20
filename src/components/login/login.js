import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button id= "log-in" onClick={() => loginWithRedirect()}>Log In</button>;
  };

const Login = props => {

    return (
        <div class="login-page">
            <div class="login-panel">
                <h1>glassine</h1>
                <a href='/signup-form'><button id="sign-up"> Sign Up</button></a>
                {LoginButton()}
            </div>
        </div>

    );

};

export default Login;
