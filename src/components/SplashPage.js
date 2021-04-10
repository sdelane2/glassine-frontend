import React, { useEffect } from 'react'

const hello = () => (
    <div class="background-image" style={{ backgroundImage: "url(/handling-background-image.jpg)"}}>
        <div class="text-container">
            <h1> Help when you need it</h1>
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
