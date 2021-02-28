import React from "react"

function Pet(props){
    return( 
    <div>
        <h2 className="petName">Pets Name: {props.name}</h2>
        <h2 className="petAge">Pets Breed: {props.breed}</h2>
    </div>
    )
}

export default Pet