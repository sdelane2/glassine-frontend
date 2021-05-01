import React, { useEffect, useState } from 'react'

const CategorySearchBox = props => {

    console.log(props)

    return (

            <div class="background-image">
                <div class="text-container">
                    <h1> Help when you need it</h1>
                    <p>Get help from our professional and trusted art handlers</p>
                    <input class="search-input" placeholder="I need help with..."></input> <button class="get-help">Get help today</button>
                    {props.categories.map(category => (
                        <button class="category-button">{category.name}</button>
                    ))}
                </div>
            </div>
        
    )
}
export default CategorySearchBox