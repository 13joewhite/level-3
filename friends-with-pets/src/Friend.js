import React from "react"
import Pet from "./Pet"

function Friend(props){
    const petsInfo = props.pets.map((pet, index) => <Pet key={index} name={pet.name} breed={pet.breed}/>)
    return (
        <div>
            <h1 className="friendName">Friend Name: {props.name}</h1>
            <h1 className="friendAge">Friends Age: {props.age}</h1>            
            {petsInfo}
        </div>
    )
}

export default Friend