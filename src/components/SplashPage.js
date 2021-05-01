import React, { useEffect, useState } from 'react'
import NavBar from './navbar/NavBar.js'
import {Icon} from 'semantic-ui-react'
import CategorySearchBox from './CategorySearchBox.js';








function SplashPage(){

    const [categories, setCategories] = useState([])



    useEffect(() => {
        fetch('http://localhost:3000/categories', {
            method: "GET",
            Accepts: "application/json",
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            const loadedCategories = [];
            for(const key in data){
                loadedCategories.push({
                    name: data[key].name,
                    id: key
                })
            }
            setCategories(loadedCategories);
        })

    },[])


    
    
    return (
        <div>
            {NavBar()}
            
            <CategorySearchBox 
            categories={categories}/>
            
        </div>
    )  
}

export default SplashPage;
