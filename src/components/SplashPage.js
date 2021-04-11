import React, { useEffect } from 'react'

const hello = () => (
    <div class="background-image">
        <div class="text-container">
            <h1> Help when you need it</h1>
            <p>Get help from our professional and trusted art handlers</p>
            <input></input>
        </div>
    </div>
);


function SplashPage(){
    
    
    return (
        <div>
            {hello()}
        </div>
    )  
}

export default SplashPage;
