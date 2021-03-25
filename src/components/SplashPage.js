import React, { useEffect } from 'react'

function SplashPage(){
    const hello = () => {
        return(<h1>hello</h1>)
    }

    
    return (
        <div>
            {hello()}
        </div>
    )  
}

export default SplashPage;
