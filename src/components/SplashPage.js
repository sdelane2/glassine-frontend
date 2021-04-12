import React, { useEffect } from 'react'
import NavBar from './navbar/NavBar.js'
import {Icon} from 'semantic-ui-react'


const hello = () => (
    <div class="background-image">
        <div class="text-container">
            <h1> Help when you need it</h1>
            <p>Get help from our professional and trusted art handlers</p>
            <input class="search-input" placeholder="I need help with..."></input> <button class="get-help">Get help today</button>
        </div>
    </div>
);


function SplashPage(){
    
    
    return (
        <div>
            {NavBar()}
            {hello()}
        </div>
    )  
}

export default SplashPage;
