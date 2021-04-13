import react, {useState, useEffect} from 'react'

const SignupForm = (props) => {

    const [email, setEmailInput] = useState('');
    const [password, setPasswordInput] = useState('');

    const userSignUpData = {
        email: email,
        password: password
    }

    const submitHandler = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/api/signup", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userSignUpData)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
    }



    return(
    <div class="login-panel">
        <h1>glassine</h1>
        <form onSubmit={submitHandler}>
            <input 
                type="email" 
                class="signup-form" 
                placeholder="Email address" 
                value={email}
                onChange={event => {
                    setEmailInput(event.target.value);
                }}>
            </input>
            <input 
                type="password" 
                class="signup-form" 
                placeholder="Password"
                value={password}
                onChange={event => {
                    setPasswordInput(event.target.value);
                }}>
            </input>
            <button id="sign-up">Create Account</button>
        </form>
    </div>
    );
};

export default SignupForm