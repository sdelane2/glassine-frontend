import react, {useState, useEffect} from 'react'

const SignupForm = (props) => {

    const [user, setUser] = useState({})

    return(
    <div class="login-panel">
        <h1>glassine</h1>
        <form>
            <input type="email" class="signup-form" placeholder="Email address"></input>
            <input type="password" class="signup-form" placeholder="Password"></input>
            <button id="sign-up">Create Account</button>
        </form>
    </div>
    );
};

export default SignupForm