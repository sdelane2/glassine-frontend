import React, { useEffect, useState } from 'react'
import {A, setLinkProps} from 'hookrouter'
import HandlerContainer from './HandlerContainer.js'

const CategorySearchBox = props => {

    

    


    return (

            <div class="background-image">
                <div class="text-container">
                    <h1> Help when you need it</h1>
                    <p>Get help from our professional and trusted art handlers</p>
                    <input class="search-input" placeholder="I need help with..."></input> <button class="get-help">Get help today</button>
                    {props.categories.map(category => (
                        <A href="/handlers" id={category.id}><button class="category-button">{category.name}</button></A>
                    ))}
                </div>
            </div>
        
    )
}
export default CategorySearchBox