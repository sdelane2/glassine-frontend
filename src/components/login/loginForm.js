import react, {useState} from 'react'

const LoginForm = (props) => {
    const [email, setEmailInput] = useState('');
    const [password, setPasswordInput] = useState('');

    


    const submitHandler = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/api/login", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email, password)
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
            <button id="sign-up">Log in</button>
        </form>
    </div>
    );
};

export default LoginForm