import React, { useEffect, useState } from 'react'

const HandlerContainer = props => {

    console.log(props)
    useEffect(() => {
        fetch('http://localhost:3000/handlers', {
            method: "GET",
            Accepts: "application/json",
        })
        .then(r => r.json())
        .then(data => {
            const filteredData = (data) => {
                data.map(handler => {
                    if(props.id === handler.category_id){
                        console.log(handler)
                    }
                })
            }
            console.log(filteredData)

    },[])})

    return(
        <div>
            in the handlercontainer
        </div>
    )
}



export default HandlerContainer